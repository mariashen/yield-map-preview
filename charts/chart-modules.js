// ── Chart Modules ──
// Extracted chart rendering functions for the article viewer.
// Each function takes a container DOM element and renders a chart inside it.
// Depends on: Chart.js + plugins, data.js (RWA_DATA), utils.js (DATA, COLORS, etc.)

const CHARTS = {};

// ── Shared helpers ──────────────────────────────────────────

let _uid = 0;
function uid(base) { return base + '-' + (++_uid); }

// Create chart-box > [filters] > chart-wrap > canvas inside container
function scaffold(container, opts) {
  opts = opts || {};
  const box = document.createElement('div');
  box.className = 'chart-box';
  if (opts.title) {
    const h = document.createElement('div');
    h.className = 'chart-title';
    h.textContent = opts.title;
    box.appendChild(h);
  }
  let filtersEl = null;
  if (opts.filters !== false) {
    filtersEl = document.createElement('div');
    filtersEl.className = 'filters';
    box.appendChild(filtersEl);
  }
  const wrap = document.createElement('div');
  wrap.className = 'chart-wrap';
  const canvas = document.createElement('canvas');
  canvas.id = uid('cv');
  wrap.appendChild(canvas);
  box.appendChild(wrap);
  container.appendChild(box);
  return { canvas: canvas, filtersEl: filtersEl, box: box };
}

// Deterministic jitter from string hash
function jitter(str, axis) {
  var h = 0, s = str + axis;
  for (var i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return ((h & 0xffff) / 0xffff - 0.5) * 0.4;
}

// Descriptive tick labels for Scale/Deployment Speed axes
var SCALE_TICKS_PRODUCT = { 0:'', 1:'', 2:'<$10M capacity', 3:'', 4:'', 5:'$100M with yield compression', 6:'', 7:'', 8:'', 9:'$100M absorbed easily', 10:'' };
var SCALE_TICKS_MARKET = { 0:'', 1:'Niche / capped', 2:'Very small', 3:'<$100M market', 4:'~$100M capacity', 5:'$100M-$1B', 6:'$1B-$10B', 7:'$10B-$100B', 8:'$100B-$1T', 9:'$1T-$10T', 10:'$10T+ market' };
var SPEED_TICKS = { 0:'', 1:'', 2:'Months', 3:'', 4:'', 5:'~1 week', 6:'', 7:'', 8:'', 9:'Seconds', 10:'' };

// Standard Scale/Deployment Speed axes config
// context: 'market' uses SCALE_TICKS_MARKET (for taxonomy/CSV charts), default uses SCALE_TICKS_PRODUCT (for on-chain product charts)
function scaleSpeedAxes(context) {
  var scaleTicks = context === 'market' ? SCALE_TICKS_MARKET : SCALE_TICKS_PRODUCT;
  return {
    x: {
      min: 0, max: 10,
      title: { display: true, text: 'SCALE \u2014 Can $100M deploy instantly without moving yield?', font: { size: 11, weight: '600' } },
      ticks: { stepSize: 1, autoSkip: false, callback: function(v) { return scaleTicks[v] || ''; }, font: { size: 8 }, maxRotation: 45, minRotation: 45 },
      grid: { color: '#1a2038' },
    },
    y: {
      min: 0, max: 10.5,
      title: { display: true, text: 'DEPLOYMENT SPEED \u2014 How fast is capital deployed into the underlying asset?', font: { size: 11, weight: '600' } },
      ticks: { stepSize: 1, autoSkip: false, callback: function(v) { return SPEED_TICKS[v] || ''; }, font: { size: 8 } },
      grid: { color: '#1a2038' },
    },
  };
}

// Quadrant background plugin factory (inline plugin, unique id per instance)
function quadrantPlugin(opts) {
  opts = opts || {};
  var alpha = opts.alpha || 0.025;
  var labelAlpha = opts.labelAlpha || 0.07;
  var labels = opts.labels || { tr:'FAST YIELD \u00b7 DEEP MARKET', tl:'FAST YIELD \u00b7 NICHE MARKET', br:'SLOW YIELD \u00b7 DEEP MARKET', bl:'SLOW YIELD \u00b7 NICHE MARKET' };
  return {
    id: uid('quad'),
    beforeDatasetsDraw: function(chart) {
      var ctx = chart.ctx, ca = chart.chartArea, left = ca.left, right = ca.right, top = ca.top, bottom = ca.bottom;
      var cx = chart.scales.x.getPixelForValue(5), cy = chart.scales.y.getPixelForValue(5);
      ctx.save(); ctx.globalAlpha = alpha;
      ctx.fillStyle = '#34d399'; ctx.fillRect(cx, top, right - cx, cy - top);
      ctx.fillStyle = '#818cf8'; ctx.fillRect(left, top, cx - left, cy - top);
      ctx.fillStyle = '#f59e0b'; ctx.fillRect(cx, cy, right - cx, bottom - cy);
      ctx.fillStyle = '#ef4444'; ctx.fillRect(left, cy, cx - left, bottom - cy);
      ctx.restore();
      ctx.save(); ctx.font = '800 13px Inter, -apple-system, sans-serif'; ctx.textAlign = 'center'; ctx.globalAlpha = labelAlpha;
      ctx.fillStyle = '#34d399'; ctx.fillText(labels.tr, (cx + right) / 2, top + 18);
      ctx.fillStyle = '#818cf8'; ctx.fillText(labels.tl, (left + cx) / 2, top + 18);
      ctx.fillStyle = '#f59e0b'; ctx.fillText(labels.br, (cx + right) / 2, bottom - 8);
      ctx.fillStyle = '#ef4444'; ctx.fillText(labels.bl, (left + cx) / 2, bottom - 8);
      ctx.restore();
      ctx.save(); ctx.strokeStyle = '#334155'; ctx.lineWidth = 1; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.moveTo(cx, top); ctx.lineTo(cx, bottom); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(left, cy); ctx.lineTo(right, cy); ctx.stroke();
      ctx.restore();
    },
  };
}

// Bubble ticker label plugin factory
function bubbleLabelsPlugin() {
  return {
    id: uid('blab'),
    afterDatasetsDraw: function(chart) {
      var ctx = chart.ctx;
      ctx.save(); ctx.font = '600 9px Inter, -apple-system, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
      chart.data.datasets.forEach(function(ds, di) {
        var meta = chart.getDatasetMeta(di);
        if (meta.hidden) return;
        meta.data.forEach(function(el, i) {
          var ticker = ds.data[i]._meta && ds.data[i]._meta.ticker;
          if (!ticker) return;
          var px = el.x, py = el.y - el.options.radius - 2;
          ctx.strokeStyle = '#0a0e17'; ctx.lineWidth = 3; ctx.lineJoin = 'round';
          ctx.strokeText(ticker, px, py);
          ctx.fillStyle = '#e2e8f0'; ctx.fillText(ticker, px, py);
        });
      });
      ctx.restore();
    },
  };
}

// Extended color map including derived classes
var CLASS_COLORS_EXT = Object.assign({}, COLORS, {
  'Yield Stablecoins': '#818cf8',
  'Stocks': '#fb923c',
  'Private Equity': '#c084fc',
});

// Standard legend config
var LEGEND_BOTTOM = { display: true, position: 'bottom', labels: { usePointStyle: true, pointStyle: 'circle', padding: 14, font: { size: 10 } } };


// ═══════════════════════════════════════════════════════════════
// Chart: stablecoin-rates
// ═══════════════════════════════════════════════════════════════

CHARTS['stablecoin-rates'] = function(container) {
  var s = scaffold(container, { filters: false, title: 'Stablecoin Supply vs. Fed Funds Rate' });

  // Monthly: [date, total_supply_B, usdt_B, usdc_B, fed_rate_%]
  // Fed rate column: FRED EFFR (series FEDFUNDS), monthly average effective federal funds rate
  var raw = [
    ["2019-01",0.4,0.03,0.25,2.40],["2019-02",0.7,0.03,0.30,2.40],["2019-03",0.6,0.06,0.24,2.41],
    ["2019-04",0.6,0.06,0.25,2.42],["2019-05",1.1,0.41,0.29,2.39],["2019-06",1.3,0.57,0.33,2.38],
    ["2019-07",1.8,1.02,0.37,2.40],["2019-08",2.4,1.53,0.43,2.13],["2019-09",2.5,1.65,0.45,2.04],
    ["2019-10",3.0,2.09,0.43,1.83],["2019-11",3.6,2.73,0.46,1.55],["2019-12",3.7,2.83,0.46,1.55],
    ["2020-01",4.2,3.20,0.52,1.55],["2020-02",5.2,4.28,0.44,1.58],["2020-03",5.2,4.29,0.45,0.65],
    ["2020-04",5.5,4.29,0.70,0.05],["2020-05",9.1,7.71,0.71,0.05],["2020-06",10.6,9.10,0.73,0.08],
    ["2020-07",11.4,9.65,0.99,0.09],["2020-08",13.0,10.79,1.08,0.10],["2020-09",15.5,12.64,1.48,0.09],
    ["2020-10",19.2,14.45,2.54,0.09],["2020-11",21.2,15.79,2.95,0.09],["2020-12",24.0,18.41,2.98,0.09],
    ["2021-01",27.4,20.04,3.92,0.09],["2021-02",37.2,26.10,5.89,0.08],["2021-03",52.1,35.35,8.96,0.07],
    ["2021-04",63.8,42.22,10.82,0.07],["2021-05",84.9,51.94,14.01,0.06],["2021-06",105.7,62.76,22.05,0.08],
    ["2021-07",110.1,63.01,24.46,0.10],["2021-08",114.1,62.91,26.51,0.09],["2021-09",118.5,65.94,26.08,0.08],
    ["2021-10",127.1,69.99,29.04,0.08],["2021-11",131.7,69.83,30.15,0.08],["2021-12",149.1,74.71,34.62,0.08],
    ["2022-01",161.9,79.21,38.04,0.08],["2022-02",173.7,78.13,49.97,0.08],["2022-03",183.4,79.38,53.49,0.20],
    ["2022-04",186.6,82.11,52.10,0.33],["2022-05",187.1,83.38,49.08,0.77],["2022-06",159.3,72.53,53.99,1.21],
    ["2022-07",152.7,66.28,54.96,1.68],["2022-08",152.8,66.65,53.73,2.33],["2022-09",152.4,67.55,51.35,2.56],
    ["2022-10",148.2,67.95,46.61,3.08],["2022-11",145.2,69.34,42.33,3.78],["2022-12",140.9,65.35,42.59,4.10],
    ["2023-01",137.4,66.23,44.14,4.33],["2023-02",136.7,67.80,41.86,4.57],["2023-03",134.5,70.97,41.99,4.65],
    ["2023-04",131.2,79.77,32.22,4.83],["2023-05",129.9,81.79,30.21,5.06],["2023-06",128.9,83.22,28.66,5.08],
    ["2023-07",127.1,83.30,27.15,5.12],["2023-08",125.2,83.86,26.01,5.33],["2023-09",124.9,82.77,25.88,5.33],
    ["2023-10",123.6,83.22,24.77,5.33],["2023-11",123.9,84.77,24.17,5.33],["2023-12",128.0,89.32,23.81,5.33],
    ["2024-01",129.9,91.67,23.86,5.33],["2024-02",134.8,96.00,25.80,5.33],["2024-03",140.8,98.93,27.57,5.33],
    ["2024-04",149.9,104.43,31.79,5.33],["2024-05",159.5,110.38,32.77,5.33],["2024-06",160.4,111.67,32.03,5.33],
    ["2024-07",160.9,112.64,31.82,5.33],["2024-08",164.2,114.66,32.98,5.33],["2024-09",169.9,118.03,34.43,5.13],
    ["2024-10",172.4,119.59,35.17,4.83],["2024-11",172.7,120.34,34.42,4.64],["2024-12",193.3,134.53,39.87,4.48],
    ["2025-01",204.9,137.39,43.91,4.33],["2025-02",218.5,139.95,53.31,4.33],["2025-03",226.0,142.59,56.44,4.33],
    ["2025-04",234.5,144.73,60.14,4.33],["2025-05",241.4,149.33,61.53,4.33],["2025-06",246.3,153.72,60.56,4.33],
    ["2025-07",252.4,158.75,61.23,4.33],["2025-08",265.3,164.60,63.84,4.33],["2025-09",282.7,167.96,72.04,4.22],
    ["2025-10",297.7,174.88,73.62,4.09],["2025-11",306.2,183.39,75.51,3.88],["2025-12",305.1,184.62,76.09,3.72],
    ["2026-01",306.1,187.04,75.30,3.64],["2026-02",299.2,185.13,70.06,3.64],["2026-03",308.2,183.47,75.22,3.64],
  ];
  var labels = raw.map(function(d) { return d[0] + '-01'; });
  var total = raw.map(function(d) { return d[1]; });
  var usdt = raw.map(function(d) { return d[2]; });
  var usdc = raw.map(function(d) { return d[3]; });
  var rate = raw.map(function(d) { return d[4]; });

  // Custom legend
  var legend = document.createElement('div');
  legend.style.cssText = 'display:flex;gap:16px;justify-content:center;margin-top:10px;font-size:11px;color:#8892b0';
  [['USDT','#4a9eff'],['USDC','#b07ce8'],['Other','#50e3c2'],['Fed Funds Rate','#ff6b6b']].forEach(function(p) {
    var span = document.createElement('span');
    span.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + p[1] + ';margin-right:4px;vertical-align:middle"></span>' + p[0];
    legend.appendChild(span);
  });
  s.box.appendChild(legend);

  new Chart(s.canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        { label: 'USDT', data: usdt, fill: true, backgroundColor: '#4a9eff30', borderColor: '#4a9eff', borderWidth: 1.5, pointRadius: 0, order: 3 },
        { label: 'USDC', data: usdc.map(function(v, i) { return v + usdt[i]; }), fill: true, backgroundColor: '#b07ce830', borderColor: '#b07ce8', borderWidth: 1.5, pointRadius: 0, order: 2 },
        { label: 'Other', data: total, fill: true, backgroundColor: '#50e3c225', borderColor: '#50e3c2', borderWidth: 1.5, pointRadius: 0, order: 1 },
        { label: 'Fed Funds Rate', data: rate, borderColor: '#ff6b6b', borderWidth: 2.5, pointRadius: 0, stepped: 'before', yAxisID: 'yRate', order: 0, fill: false },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { type: 'time', time: { unit: 'year' }, grid: { color: '#141828' } },
        y: { title: { display: true, text: 'Supply ($B)' }, grid: { color: '#141828' }, ticks: { callback: function(v) { return '$' + v + 'B'; } } },
        yRate: { position: 'right', title: { display: true, text: 'Fed Rate (%)' }, min: 0, max: 6.5,
          grid: { drawOnChartArea: false }, ticks: { callback: function(v) { return v.toFixed(1) + '%'; }, color: '#ff6b6b88' } },
      },
      plugins: {
        datalabels: { display: false }, legend: { display: false },
        tooltip: { callbacks: {
          title: function(ctx) { return raw[ctx[0].dataIndex][0]; },
          label: function(ctx) {
            var d = raw[ctx.dataIndex];
            if (ctx.datasetIndex === 3) return 'Fed Rate: ' + d[4].toFixed(2) + '%';
            if (ctx.datasetIndex === 0) return 'USDT: $' + d[2].toFixed(1) + 'B';
            if (ctx.datasetIndex === 1) return 'USDC: $' + d[3].toFixed(1) + 'B';
            return 'Total: $' + d[1].toFixed(1) + 'B';
          },
        } },
        annotation: { annotations: {
          a1: { type: 'line', xMin: '2020-03-01', xMax: '2020-03-01', borderColor: '#4a5a7a55', borderWidth: 1, borderDash: [3,3],
            label: { display: true, content: 'Fed cuts to ~0%', position: 'start', backgroundColor: '#0a0e17cc', color: '#6b7a99', font: { size: 9 }, padding: 4 } },
          a2: { type: 'line', xMin: '2022-03-01', xMax: '2022-03-01', borderColor: '#4a5a7a55', borderWidth: 1, borderDash: [3,3],
            label: { display: true, content: 'Rate hikes begin', position: 'end', backgroundColor: '#0a0e17cc', color: '#6b7a99', font: { size: 9 }, padding: 4 } },
          a4: { type: 'line', xMin: '2024-01-01', xMax: '2024-01-01', borderColor: '#34d39988', borderWidth: 1.5, borderDash: [5,3],
            label: { display: true, content: 'Supply rises despite 5.33% rates', position: 'start', backgroundColor: '#0a0e17cc', color: '#34d399', font: { size: 9, weight: 'bold' }, padding: 4 } },
        } },
      },
    },
  });
};


// ═══════════════════════════════════════════════════════════════
// Chart: yield-vs-date
// ═══════════════════════════════════════════════════════════════

// PKH2, BELIF, CFSRS excluded: inception dates could not be independently verified beyond rwa.xyz
// (niche instruments with no press coverage or on-chain contract to cross-reference)
var LAUNCH_DATE_EXCLUDED_TICKERS = new Set(['PKH2', 'BELIF', 'CFSRS']);

CHARTS['yield-vs-date'] = function(container) {
  var s = scaffold(container, { title: 'Yield-Bearing Assets by Launch Date' });
  var LAUNCH_COLORS = Object.assign({}, COLORS, { 'Stablecoins with RWA Yield': COLORS['Stablecoins'] });
  var renCls = function(c) { return c === 'Stablecoins' ? 'Stablecoins with RWA Yield' : c; };
  var items = DATA.filter(function(d) { return parseDate(d.inception_date) && !LAUNCH_DATE_EXCLUDED_TICKERS.has(d.ticker); })
    .map(function(d) { return Object.assign({}, d, { date: parseDate(d.inception_date) }); });
  var classes = Array.from(new Set(items.map(function(d) { return renCls(d.asset_class); }))).sort();
  var allValues = items.map(function(d) { return d.value_usd; });
  var chart;

  function render(activeSet) {
    var filtered = items.filter(function(d) { return activeSet.has(renCls(d.asset_class)); });
    var datasets = classes.filter(function(c) { return activeSet.has(c); }).map(function(cls) {
      return {
        label: cls,
        data: filtered.filter(function(d) { return renCls(d.asset_class) === cls; }).map(function(d) {
          return { x: d.date, y: d.yield_pct, r: bubbleRadius(d.value_usd, allValues, 4, 35), _meta: d };
        }),
        backgroundColor: (LAUNCH_COLORS[cls] || '#888') + 'aa',
        borderColor: LAUNCH_COLORS[cls] || '#888',
        borderWidth: 1,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { type: 'time', time: { unit: 'year' }, title: { display: true, text: 'Launch Date' } },
          y: { title: { display: true, text: 'Yield (%)' }, ticks: { callback: function(v) { return v + '%'; } }, min: 0 },
        },
        plugins: {
          datalabels: { display: false },
          annotation: { annotations: { rateHikes: {
            type: 'line', xMin: '2022-03-16', xMax: '2022-03-16',
            borderColor: '#ef444488', borderWidth: 1.5, borderDash: [5, 3],
            label: { display: true, content: 'Rate hikes begin', position: 'start',
              backgroundColor: '#0a0e17cc', color: '#ef4444', font: { size: 9 }, padding: 4 },
          } } },
          tooltip: { callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) { var m = ctx.raw._meta; return m.ticker + ': ' + fmtPct(m.yield_pct) + ' yield \u00b7 ' + fmtUSD(m.value_usd); },
          } },
          legend: LEGEND_BOTTOM,
        },
      },
    });
  }

  buildFilters(s.filtersEl, classes, LAUNCH_COLORS, render);
  render(new Set(classes));
};


// ═══════════════════════════════════════════════════════════════
// Chart: scale-speed-risk
// ═══════════════════════════════════════════════════════════════

CHARTS['scale-speed-risk'] = function(container) {
  var s = scaffold(container, { title: 'Scale vs. Deployment Speed by Risk Score' });

  var RISK_BUCKETS = [
    { label: 'Sovereign', min: 1, max: 2, color: '#22c55e' },
    { label: 'Investment Grade', min: 3, max: 4, color: '#84cc16' },
    { label: 'Moderate', min: 5, max: 6, color: '#eab308' },
    { label: 'Elevated', min: 7, max: 8, color: '#f97316' },
    { label: 'Speculative', min: 9, max: 10, color: '#ef4444' },
  ];
  function getRiskBucket(score) {
    return RISK_BUCKETS.find(function(b) { return score >= b.min && score <= b.max; }) || RISK_BUCKETS[4];
  }

  var items = RWA_DATA
    .filter(function(d) { return d.speed_score != null && d.scale_score != null && d.risk_score != null; })
    .map(function(d) { return Object.assign({}, d, { scaleScore: d.scale_score, speedScore: d.speed_score, riskScore: d.risk_score }); });
  var maxValue = Math.max.apply(null, items.map(function(d) { return d.value_usd; }));

  // Risk filter buttons
  var activeRisks = new Set(RISK_BUCKETS.map(function(b) { return b.label; }));
  var wrap = document.createElement('div');
  wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:8px 0 12px';
  RISK_BUCKETS.forEach(function(bucket) {
    var btn = document.createElement('button');
    btn.textContent = bucket.label;
    btn.style.cssText = 'padding:4px 12px;border-radius:12px;border:2px solid ' + bucket.color + ';background:' + bucket.color + '33;color:#e2e8f0;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.15s';
    btn.addEventListener('click', function() {
      if (activeRisks.has(bucket.label)) { activeRisks.delete(bucket.label); btn.style.background = 'transparent'; btn.style.opacity = '0.3'; }
      else { activeRisks.add(bucket.label); btn.style.background = bucket.color + '33'; btn.style.opacity = '1'; }
      render(activeRisks);
    });
    wrap.appendChild(btn);
  });
  s.filtersEl.appendChild(wrap);

  var chart;
  function render(activeRisks) {
    var filtered = items.filter(function(d) { return activeRisks.has(getRiskBucket(d.riskScore).label); });
    var datasets = RISK_BUCKETS.filter(function(b) { return activeRisks.has(b.label); }).map(function(bucket) {
      return {
        label: bucket.label + ' (' + bucket.min + '-' + bucket.max + ')',
        data: filtered.filter(function(d) { return getRiskBucket(d.riskScore).label === bucket.label; }).map(function(d) {
          return { x: d.scaleScore + jitter(d.ticker, 'x'), y: d.speedScore + jitter(d.ticker, 'y'), r: Math.max(4, 4 + 26 * Math.sqrt(d.value_usd / maxValue)), _meta: d };
        }),
        backgroundColor: bucket.color + '66', borderColor: bucket.color, borderWidth: 1.5,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        layout: { padding: { top: 10, right: 20, bottom: 10, left: 0 } },
        scales: scaleSpeedAxes(),
        plugins: {
          legend: LEGEND_BOTTOM, datalabels: { display: false },
          tooltip: { maxWidth: 440, callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta, b = getRiskBucket(m.risk_score);
              return [m.ticker + ': ' + fmtUSD(m.value_usd) + ' \u00b7 ' + m.yield_pct + '% yield',
                      'Scale: ' + m.scale_score + '/10 \u00b7 Deployment Speed: ' + m.speed_score + '/10 \u00b7 Risk: ' + m.risk_score + '/10 (' + b.label + ')'];
            },
            afterBody: function(ctx) {
              var m = ctx[0].raw._meta, lines = [];
              if (m.risk_rationale) { lines.push('', 'Risk:', ...wrapText(m.risk_rationale, 55)); }
              if (m.speed_rationale) { lines.push('', 'Deployment Speed:', ...wrapText(m.speed_rationale, 55)); }
              if (m.scale_rationale) { lines.push('', 'Scale:', ...wrapText(m.scale_rationale, 55)); }
              return lines;
            },
          } },
        },
      },
      plugins: [quadrantPlugin(), bubbleLabelsPlugin()],
    });
  }
  render(activeRisks);
};


// ═══════════════════════════════════════════════════════════════
// Chart: scale-speed-individual
// ═══════════════════════════════════════════════════════════════

CHARTS['scale-speed-individual'] = function(container) {
  var s = scaffold(container, { title: 'Scale vs. Deployment Speed: Individual Assets by Asset Class' });
  var items = RWA_DATA
    .filter(function(d) { return d.speed_score != null && d.scale_score != null; })
    .filter(function(d) { return d.yield_category !== 'Non-yield stablecoin' && d.yield_category !== 'No yield (appreciation only)'; })
    .map(function(d) { return Object.assign({}, d, { scaleScore: d.scale_score, speedScore: d.speed_score }); });
  var classes = Array.from(new Set(items.map(function(d) { return d.asset_class === 'Stablecoins' ? 'Yield Stablecoins' : d.asset_class; }))).sort();
  var maxValue = Math.max.apply(null, items.map(function(d) { return d.value_usd; }));
  var chart;

  function render(activeSet) {
    var filtered = items.filter(function(d) { var cls = d.asset_class === 'Stablecoins' ? 'Yield Stablecoins' : d.asset_class; return activeSet.has(cls); });
    var datasets = classes.filter(function(c) { return activeSet.has(c); }).map(function(cls) {
      return {
        label: cls,
        data: filtered.filter(function(d) { return (d.asset_class === 'Stablecoins' ? 'Yield Stablecoins' : d.asset_class) === cls; }).map(function(d) {
          return { x: d.scaleScore + jitter(d.ticker, 'x'), y: d.speedScore + jitter(d.ticker, 'y'), r: Math.max(4, 4 + 26 * Math.sqrt(d.value_usd / maxValue)), _meta: d };
        }),
        backgroundColor: (CLASS_COLORS_EXT[cls] || '#888') + '77',
        borderColor: CLASS_COLORS_EXT[cls] || '#888', borderWidth: 1,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        layout: { padding: { top: 10, right: 20, bottom: 10, left: 0 } },
        scales: scaleSpeedAxes(),
        plugins: {
          legend: LEGEND_BOTTOM, datalabels: { display: false },
          tooltip: { maxWidth: 420, callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta;
              return [m.ticker + ': ' + fmtUSD(m.value_usd) + ' \u00b7 ' + m.yield_pct + '% yield',
                      'Scale: ' + m.scale_score + '/10 \u00b7 Deployment Speed: ' + m.speed_score + '/10'];
            },
            afterBody: function(ctx) {
              var m = ctx[0].raw._meta, lines = [];
              if (m.speed_rationale) { lines.push('', 'Deployment Speed:', ...wrapText(m.speed_rationale, 55)); }
              if (m.scale_rationale) { lines.push('', 'Scale:', ...wrapText(m.scale_rationale, 55)); }
              return lines;
            },
          } },
        },
      },
      plugins: [quadrantPlugin(), bubbleLabelsPlugin()],
    });
  }
  buildFilters(s.filtersEl, classes, CLASS_COLORS_EXT, render);
  render(new Set(classes));
};


// ═══════════════════════════════════════════════════════════════
// Chart: scale-speed-quadrant (asset classes, aggregate)
// ═══════════════════════════════════════════════════════════════

CHARTS['scale-speed-quadrant'] = function(container) {
  var s = scaffold(container, { filters: false, title: 'Scale vs. Deployment Speed: On-Chain RWA Asset Classes' });

  // Yield-band legend (matches scale-speed-yield chart)
  var legendDiv = document.createElement('div');
  legendDiv.style.cssText = 'display:flex;gap:16px;justify-content:center;padding:8px 0;flex-wrap:wrap;font-size:11px;color:#c8d0e8';
  var bands = [
    { label: '0\u20134% Near-Risk-Free', color: '#22c55e' },
    { label: '4\u20136% Conservative', color: '#eab308' },
    { label: '6\u201310% Growth', color: '#f97316' },
    { label: '10%+ High Yield', color: '#ef4444' },
  ];
  bands.forEach(function(b) {
    legendDiv.innerHTML += '<span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:' + b.color + ';margin-right:4px"></span>' + b.label + '</span>';
  });
  s.box.insertBefore(legendDiv, s.box.querySelector('.chart-wrap'));

  var CLASS_SCORES = {
    'U.S. Treasuries':          { scale: 9.5, speed: 9.0 },
    'Corporate Bonds':          { scale: 8.0, speed: 7.0 },
    'Non-U.S. Government Debt': { scale: 7.0, speed: 6.0 },
    'Private Credit':           { scale: 6.0, speed: 3.0 },
    'Institutional Funds':      { scale: 5.0, speed: 3.0 },
    'Real Estate':              { scale: 7.0, speed: 2.0 },
    'Reinsurance':              { scale: 4.0, speed: 2.5 },
  };
  var SHORT_LABELS = {
    'U.S. Treasuries': 'Treasuries',
    'Corporate Bonds': 'Corp Bonds', 'Non-U.S. Government Debt': 'Intl Govt Debt',
    'Private Credit': 'Private Credit', 'Institutional Funds': 'Alt Funds',
    'Real Estate': 'Real Estate', 'Reinsurance': 'Reinsurance',
  };
  var LABEL_ALIGN = {
    'U.S. Treasuries': 'right',
    'Corporate Bonds': 'left', 'Non-U.S. Government Debt': 'left',
    'Private Credit': 'left', 'Institutional Funds': 'bottom',
    'Real Estate': 'left', 'Reinsurance': 'left',
  };

  // Reinsurance protocols mapped to their own class (ONyc from Institutional Funds, reUSD from Stablecoins)
  var REINSURANCE_PROTOCOLS = new Set(['Re', 'OnRe']);

  // Aggregate by asset class
  var classMap = {};
  RWA_DATA.forEach(function(d) {
    // Remap reinsurance protocols into Reinsurance class
    var cls;
    if (REINSURANCE_PROTOCOLS.has(d.protocol)) {
      cls = 'Reinsurance';
    } else {
      if (d.asset_class === 'Stablecoins') return;
      if (!CLASS_SCORES[d.asset_class]) return;
      cls = d.asset_class;
    }
    if (!classMap[cls]) classMap[cls] = { total: 0, count: 0, yieldSum: 0, yieldCount: 0, assets: [] };
    classMap[cls].total += d.value_usd;
    classMap[cls].count += 1;
    if (d.yield_pct != null && d.yield_pct > 0) {
      classMap[cls].yieldSum += d.yield_pct;
      classMap[cls].yieldCount += 1;
    }
    classMap[cls].assets.push(d);
  });
  var maxTotal = Math.max.apply(null, Object.values(classMap).map(function(c) { return c.total; }));

  // Yield-based color scale (matches scale-speed-yield chart)
  var YIELD_BUCKETS = [
    { min: -Infinity, max: 4, color: '#22c55e' },
    { min: 4, max: 6, color: '#eab308' },
    { min: 6, max: 10, color: '#f97316' },
    { min: 10, max: Infinity, color: '#ef4444' },
  ];
  function yieldColor(yieldPct) {
    var b = YIELD_BUCKETS.find(function(b) { return yieldPct >= b.min && yieldPct < b.max; }) || YIELD_BUCKETS[YIELD_BUCKETS.length - 1];
    return b.color;
  }

  var datasets = Object.entries(CLASS_SCORES).filter(function(e) { return classMap[e[0]]; }).map(function(e) {
    var cls = e[0], sc = e[1], cm = classMap[cls];
    var topAssets = cm.assets.sort(function(a, b) { return b.value_usd - a.value_usd; }).slice(0, 4)
      .map(function(a) { return '  ' + (a.ticker || a.name) + ': ' + fmtUSD(a.value_usd); });
    var avgYield = cm.yieldCount > 0 ? cm.yieldSum / cm.yieldCount : 0;
    var color = yieldColor(avgYield);
    return {
      label: cls,
      data: [{ x: sc.scale, y: sc.speed, r: 12 + 38 * Math.sqrt(cm.total / maxTotal), _meta: { class: cls, total: cm.total, count: cm.count, topAssets: topAssets, avgYield: avgYield } }],
      backgroundColor: color + '88',
      borderColor: color, borderWidth: 1.5,
      datalabels: { align: LABEL_ALIGN[cls] || 'top' },
    };
  });

  new Chart(s.canvas, {
    type: 'bubble', data: { datasets: datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      layout: { padding: { top: 10, right: 30, bottom: 10, left: 10 } },
      scales: {
        x: { min: 0, max: 10,
          title: { display: true, text: 'SCALE \u2014 Can $100M deploy instantly without moving yield?', font: { size: 11, weight: '600' } },
          ticks: { stepSize: 1, autoSkip: false, callback: function(v) { return SCALE_TICKS_MARKET[v] || ''; }, font: { size: 8 }, maxRotation: 45, minRotation: 45 },
          grid: { color: '#1a2038' },
        },
        y: { min: 0, max: 10,
          title: { display: true, text: 'DEPLOYMENT SPEED \u2014 How fast is capital deployed into the underlying asset?', font: { size: 11, weight: '600' } },
          ticks: { stepSize: 1, autoSkip: false, callback: function(v) { return SPEED_TICKS[v] || ''; }, font: { size: 8 } },
          grid: { color: '#1a2038' },
        },
      },
      plugins: {
        legend: { display: false },
        datalabels: {
          color: '#e2e8f0', font: { size: 10, weight: 600 }, anchor: 'end', offset: 6, display: true,
          formatter: function(value, ctx) { return SHORT_LABELS[ctx.dataset.label] || ctx.dataset.label; },
        },
        tooltip: { callbacks: {
          title: function(ctx) { return ctx[0].dataset.label; },
          label: function(ctx) {
            var m = ctx.raw._meta;
            return ['On-chain value: ' + fmtUSD(m.total) + ' (' + m.count + ' asset' + (m.count > 1 ? 's' : '') + ')',
                    'Avg yield: ' + m.avgYield.toFixed(1) + '%',
                    'Scale: ' + ctx.raw.x + '/10 \u00b7 Deployment Speed: ' + ctx.raw.y + '/10'];
          },
          afterBody: function(ctx) { return ['', 'Largest assets:'].concat(ctx[0].raw._meta.topAssets); },
        } },
      },
    },
    plugins: [quadrantPlugin({ alpha: 0.035, labelAlpha: 0.08, labels: { tr: 'FAST YIELD \u00b7 DEEP MARKET', tl: 'FAST YIELD \u00b7 NICHE MARKET', br: 'SLOW YIELD \u00b7 DEEP MARKET', bl: 'SLOW YIELD \u00b7 NICHE MARKET' } })],
  });
};


// ═══════════════════════════════════════════════════════════════
// Chart: holders-vs-yield
// ═══════════════════════════════════════════════════════════════

CHARTS['holders-vs-yield'] = function(container) {
  var s = scaffold(container, { title: 'Holders vs. Yield' });
  var items = DATA.filter(function(d) { return d.holders != null && d.yield_pct != null && d.yield_pct > 0; });
  var classes = Array.from(new Set(items.map(function(d) { return d.asset_class; }))).sort();
  var allValues = items.map(function(d) { return d.value_usd; });
  var chart, useLog = true;

  var logBtn = document.createElement('button');
  logBtn.textContent = 'Log scale'; logBtn.className = 'active'; logBtn.style.marginLeft = 'auto';
  s.filtersEl.appendChild(logBtn);

  function render(activeSet) {
    var filtered = items.filter(function(d) { return activeSet.has(d.asset_class); });
    var datasets = classes.filter(function(c) { return activeSet.has(c); }).map(function(cls) {
      return {
        label: cls,
        data: filtered.filter(function(d) { return d.asset_class === cls; }).map(function(d) {
          return { x: d.holders, y: d.yield_pct, r: bubbleRadius(d.value_usd, allValues, 4, 45), _meta: d };
        }),
        backgroundColor: (COLORS[cls] || '#888') + 'aa', borderColor: COLORS[cls] || '#888', borderWidth: 1,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { type: useLog ? 'logarithmic' : 'linear', title: { display: true, text: useLog ? 'Total Holders (log scale)' : 'Total Holders' }, min: useLog ? 1 : 0,
            ticks: { callback: function(v) {
              if (useLog && [1,2,5,10,20,50,100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6,5e6].indexOf(v) < 0) return '';
              return v >= 1e6 ? (v/1e6).toFixed(v >= 5e6 ? 0 : 1) + 'M' : v >= 1e3 ? (v/1e3).toFixed(v >= 5e3 ? 0 : 1) + 'K' : v;
            } },
          },
          y: { title: { display: true, text: 'Yield (%)' }, min: 0, ticks: { callback: function(v) { return v + '%'; } } },
        },
        plugins: {
          datalabels: DATALABELS_CONFIG,
          tooltip: { callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta;
              var h = m.holders >= 1e6 ? (m.holders/1e6).toFixed(1)+'M' : m.holders >= 1e3 ? (m.holders/1e3).toFixed(1)+'K' : m.holders;
              var t10 = m.top_10_holder_pct != null ? ' \u00b7 Top-10 own ' + fmtPct(m.top_10_holder_pct) : '';
              return m.ticker + ': ' + fmtPct(m.yield_pct) + ' yield \u00b7 ' + h + ' holders' + t10 + ' \u00b7 ' + fmtUSD(m.value_usd);
            },
            afterBody: function(ctx) {
              var m = ctx[0].raw._meta, lines = [];
              if (m.yield_category) lines.push('Yield type: ' + m.yield_category);
              if (m.description) { lines.push(''); lines.push.apply(lines, wrapText(m.description)); }
              return lines;
            },
          } },
          annotation: { annotations: {
            yieldLine: { type: 'line', yMin: 5, yMax: 5, borderColor: '#334155', borderWidth: 1, borderDash: [6, 4] },
            holderLine: { type: 'line', xMin: 100, xMax: 100, borderColor: '#334155', borderWidth: 1, borderDash: [6, 4] },
          } },
        },
      },
    });
  }

  var filterCtrl = buildFilters(s.filtersEl, classes, COLORS, render);
  logBtn.addEventListener('click', function() {
    useLog = !useLog;
    logBtn.textContent = useLog ? 'Log scale' : 'Linear scale';
    logBtn.classList.toggle('active', useLog);
    render(filterCtrl.getActive());
  });
  render(new Set(classes));
};


// ═══════════════════════════════════════════════════════════════
// Chart: holders-concentration
// ═══════════════════════════════════════════════════════════════

CHARTS['holders-concentration'] = function(container) {
  var s = scaffold(container, { title: 'Holder Count vs. Top-10 Concentration' });
  var items = DATA.filter(function(d) { return d.holders != null && d.top_10_holder_pct != null; });
  var classes = Array.from(new Set(items.map(function(d) { return d.asset_class; }))).sort();
  var allValues = items.map(function(d) { return d.value_usd; });
  var chart, useLog = true;

  var logBtn = document.createElement('button');
  logBtn.textContent = 'Log scale'; logBtn.className = 'active'; logBtn.style.marginLeft = 'auto';
  s.filtersEl.appendChild(logBtn);

  function render(activeSet) {
    var filtered = items.filter(function(d) { return activeSet.has(d.asset_class); });
    var datasets = classes.filter(function(c) { return activeSet.has(c); }).map(function(cls) {
      return {
        label: cls,
        data: filtered.filter(function(d) { return d.asset_class === cls; }).map(function(d) {
          return { x: d.holders, y: d.top_10_holder_pct, r: bubbleRadius(d.value_usd, allValues, 4, 40), _meta: d };
        }),
        backgroundColor: (COLORS[cls] || '#888') + 'aa', borderColor: COLORS[cls] || '#888', borderWidth: 1,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
          x: { type: useLog ? 'logarithmic' : 'linear',
            title: { display: true, text: useLog ? 'Total Holders (log scale)' : 'Total Holders' },
            ticks: { callback: function(v) { return v >= 1e6 ? (v/1e6).toFixed(0)+'M' : v >= 1e3 ? (v/1e3).toFixed(0)+'K' : v; } },
          },
          y: { title: { display: true, text: 'Top-10 Holder Concentration (%)' }, ticks: { callback: function(v) { return v + '%'; } } },
        },
        plugins: {
          datalabels: DATALABELS_CONFIG,
          tooltip: { callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta;
              var h = m.holders >= 1e6 ? (m.holders/1e6).toFixed(1)+'M' : m.holders >= 1e3 ? (m.holders/1e3).toFixed(1)+'K' : m.holders;
              return m.ticker + ': ' + h + ' holders \u00b7 Top-10 own ' + fmtPct(m.top_10_holder_pct) + ' \u00b7 ' + fmtUSD(m.value_usd);
            },
            afterBody: function(ctx) { return [''].concat(wrapText(ctx[0].raw._meta.description)); },
          } },
        },
      },
    });
  }

  var filterCtrl = buildFilters(s.filtersEl, classes, COLORS, render);
  logBtn.addEventListener('click', function() {
    useLog = !useLog;
    logBtn.textContent = useLog ? 'Log scale' : 'Linear scale';
    logBtn.classList.toggle('active', useLog);
    render(filterCtrl.getActive());
  });
  render(new Set(classes));
};


// ═══════════════════════════════════════════════════════════════
// Chart: holders-value-savings
// ═══════════════════════════════════════════════════════════════

// cgUSD excluded from holder charts: 1.96M holders is inflated by social app dust distribution (1,019 monthly active)
var HOLDER_CHART_EXCLUDED_TICKERS = new Set(['cgUSD']);

CHARTS['holders-value-savings'] = function(container) {
  var s = scaffold(container, { title: 'Holders vs. Value: Savings/Staking Holders' });
  var items = DATA.filter(function(d) { return d.holders != null && !HOLDER_CHART_EXCLUDED_TICKERS.has(d.ticker); }).map(function(d) {
    var isStablecoin = d.asset_class === 'Stablecoins';
    var hasOverride = isStablecoin && d.savings_token && d.savings_holders;
    return Object.assign({}, d, {
      display_holders: hasOverride ? d.savings_holders : d.holders,
      base_holders: d.holders,
      has_override: !!hasOverride,
    });
  });
  var allValues = items.map(function(d) { return d.value_usd; });
  var HV_COLORS = { 'Stablecoins with RWA Yield': '#6366f1', 'RWAs with Yield': '#22d3ee' };
  var hvCat = function(d) { return d.asset_class === 'Stablecoins' ? 'Stablecoins with RWA Yield' : 'RWAs with Yield'; };
  var cats = ['Stablecoins with RWA Yield', 'RWAs with Yield'];
  var chart;

  function render(activeSet) {
    var filtered = items.filter(function(d) { return activeSet.has(hvCat(d)); });
    var datasets = cats.filter(function(c) { return activeSet.has(c); }).map(function(cat) {
      return {
        label: cat,
        data: filtered.filter(function(d) { return hvCat(d) === cat; }).map(function(d) {
          return { x: d.display_holders, y: d.value_usd, r: bubbleRadius(d.value_usd, allValues, 4, 30), _meta: d };
        }),
        backgroundColor: HV_COLORS[cat] + 'aa', borderColor: HV_COLORS[cat], borderWidth: 1,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        layout: { padding: { top: 35, right: 35, bottom: 10, left: 10 } },
        scales: {
          x: { type: 'logarithmic',
            title: { display: true, text: 'Holders \u2014 savings/staking for stablecoins (log scale)' },
            ticks: { callback: function(v) { var log = Math.log10(v); if (Math.abs(log - Math.round(log)) > 0.01) return ''; return v >= 1e6 ? (v/1e6).toFixed(0)+'M' : v >= 1e3 ? (v/1e3).toFixed(0)+'K' : v; } },
            min: 1,
          },
          y: { type: 'logarithmic',
            title: { display: true, text: 'Asset Value (USD, log scale)' },
            ticks: { callback: function(v) { var log = Math.log10(v); if (Math.abs(log - Math.round(log)) > 0.01) return ''; return fmtUSD(v); } },
          },
        },
        plugins: {
          datalabels: Object.assign({}, DATALABELS_CONFIG, {
            formatter: function(value) { var m = value && value._meta; if (!m) return ''; return (m.has_override && m.savings_token) ? m.savings_token : m.ticker; },
          }),
          legend: LEGEND_BOTTOM,
          tooltip: { callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta, lines = [];
              var fmtH = function(n) { return n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e3 ? (n/1e3).toFixed(1)+'K' : n.toLocaleString(); };
              if (m.has_override) { lines.push('Savings holders (' + m.savings_token + '): ' + fmtH(m.display_holders)); lines.push('Base holders (' + m.ticker + '): ' + fmtH(m.base_holders)); }
              else { lines.push('Holders: ' + fmtH(m.display_holders)); }
              lines.push('Value: ' + fmtUSD(m.value_usd));
              if (m.yield_pct > 0) lines.push('Yield: ' + fmtPct(m.yield_pct));
              return lines;
            },
            afterBody: function(ctx) { var m = ctx[0].raw._meta; return m.description ? [''].concat(wrapText(m.description)) : []; },
          } },
        },
      },
    });
  }
  buildFilters(s.filtersEl, cats, HV_COLORS, render);
  render(new Set(cats));
};


// ═══════════════════════════════════════════════════════════════
// Chart: holders-value
// ═══════════════════════════════════════════════════════════════

CHARTS['holders-value'] = function(container) {
  var s = scaffold(container, { title: 'Holders vs. Value: Yield-Bearing Assets' });
  var items = DATA.filter(function(d) { return d.holders != null && !HOLDER_CHART_EXCLUDED_TICKERS.has(d.ticker); });
  var allValues = items.map(function(d) { return d.value_usd; });
  var HV_COLORS = { 'Stablecoins with RWA Yield': '#6366f1', 'RWAs with Yield': '#22d3ee' };
  var hvCat = function(d) { return d.asset_class === 'Stablecoins' ? 'Stablecoins with RWA Yield' : 'RWAs with Yield'; };
  var cats = ['Stablecoins with RWA Yield', 'RWAs with Yield'];
  var chart;

  function render(activeSet) {
    var filtered = items.filter(function(d) { return activeSet.has(hvCat(d)); });
    var datasets = cats.filter(function(c) { return activeSet.has(c); }).map(function(cat) {
      return {
        label: cat,
        data: filtered.filter(function(d) { return hvCat(d) === cat; }).map(function(d) {
          return { x: d.holders, y: d.value_usd, r: bubbleRadius(d.value_usd, allValues, 4, 30), _meta: d };
        }),
        backgroundColor: HV_COLORS[cat] + 'aa', borderColor: HV_COLORS[cat], borderWidth: 1,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        layout: { padding: { top: 35, right: 35, bottom: 10, left: 10 } },
        scales: {
          x: { type: 'logarithmic',
            title: { display: true, text: 'Holders (log scale)' },
            ticks: { callback: function(v) { var log = Math.log10(v); if (Math.abs(log - Math.round(log)) > 0.01) return ''; return v >= 1e6 ? (v/1e6).toFixed(0)+'M' : v >= 1e3 ? (v/1e3).toFixed(0)+'K' : v; } },
            min: 1,
          },
          y: { type: 'logarithmic',
            title: { display: true, text: 'Asset Value (USD, log scale)' },
            ticks: { callback: function(v) { var log = Math.log10(v); if (Math.abs(log - Math.round(log)) > 0.01) return ''; return fmtUSD(v); } },
          },
        },
        plugins: {
          datalabels: Object.assign({}, DATALABELS_CONFIG),
          legend: LEGEND_BOTTOM,
          tooltip: { callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta, lines = [];
              var fmtH = function(n) { return n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e3 ? (n/1e3).toFixed(1)+'K' : n.toLocaleString(); };
              lines.push('Holders: ' + fmtH(m.holders));
              lines.push('Value: ' + fmtUSD(m.value_usd));
              if (m.yield_pct > 0) lines.push('Yield: ' + fmtPct(m.yield_pct));
              return lines;
            },
            afterBody: function(ctx) { var m = ctx[0].raw._meta; return m.description ? [''].concat(wrapText(m.description)) : []; },
          } },
        },
      },
    });
  }
  buildFilters(s.filtersEl, cats, HV_COLORS, render);
  render(new Set(cats));
};


// ═══════════════════════════════════════════════════════════════
// Chart: scale-speed-yield (on-chain assets, yield-colored)
// ═══════════════════════════════════════════════════════════════

CHARTS['scale-speed-yield'] = function(container) {
  var s = scaffold(container, { title: 'Scale vs. Deployment Speed: On-Chain Assets by Yield Band' });

  var YIELD_BUCKETS = [
    { label: '0\u20134%  Near-Risk-Free', min: -Infinity, max: 4, color: '#22c55e' },
    { label: '4\u20136%  Conservative', min: 4, max: 6, color: '#eab308' },
    { label: '6\u201310%  Growth', min: 6, max: 10, color: '#f97316' },
    { label: '10%+  High Yield', min: 10, max: Infinity, color: '#ef4444' },
  ];

  function getYieldBucket(yieldPct) {
    return YIELD_BUCKETS.find(function(b) { return yieldPct >= b.min && yieldPct < b.max; }) || YIELD_BUCKETS[YIELD_BUCKETS.length - 1];
  }

  var items = RWA_DATA
    .filter(function(d) { return d.speed_score != null && d.scale_score != null; })
    .filter(function(d) { return d.yield_category !== 'Non-yield stablecoin' && d.yield_category !== 'No yield (appreciation only)'; })
    .map(function(d) { return Object.assign({}, d, { scaleScore: d.scale_score, speedScore: d.speed_score }); });
  var maxValue = Math.max.apply(null, items.map(function(d) { return d.value_usd; }));

  // Yield filter buttons (pill-style)
  var activeYields = new Set(YIELD_BUCKETS.map(function(b) { return b.label; }));
  var wrap = document.createElement('div');
  wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:8px 0 12px';
  YIELD_BUCKETS.forEach(function(bucket) {
    var btn = document.createElement('button');
    btn.textContent = bucket.label;
    btn.style.cssText = 'padding:4px 12px;border-radius:12px;border:2px solid ' + bucket.color + ';background:' + bucket.color + '33;color:#e2e8f0;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.15s';
    btn.addEventListener('click', function() {
      if (activeYields.has(bucket.label)) { activeYields.delete(bucket.label); btn.style.background = 'transparent'; btn.style.opacity = '0.3'; }
      else { activeYields.add(bucket.label); btn.style.background = bucket.color + '33'; btn.style.opacity = '1'; }
      render(activeYields);
    });
    wrap.appendChild(btn);
  });
  s.filtersEl.appendChild(wrap);

  var chart;
  function render(activeYields) {
    var filtered = items.filter(function(d) { return activeYields.has(getYieldBucket(d.yield_pct).label); });
    var datasets = YIELD_BUCKETS.filter(function(b) { return activeYields.has(b.label); }).map(function(bucket) {
      return {
        label: bucket.label,
        data: filtered.filter(function(d) { return getYieldBucket(d.yield_pct).label === bucket.label; }).map(function(d) {
          return { x: d.scaleScore + jitter(d.ticker, 'x'), y: d.speedScore + jitter(d.ticker, 'y'), r: Math.max(4, 4 + 26 * Math.sqrt(d.value_usd / maxValue)), _meta: d };
        }),
        backgroundColor: bucket.color + '66', borderColor: bucket.color, borderWidth: 1.5,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        layout: { padding: { top: 10, right: 20, bottom: 10, left: 0 } },
        scales: scaleSpeedAxes(),
        plugins: {
          legend: LEGEND_BOTTOM, datalabels: { display: false },
          tooltip: { maxWidth: 440, callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.name; },
            label: function(ctx) {
              var m = ctx.raw._meta, bucket = getYieldBucket(m.yield_pct);
              return [m.ticker + ': ' + fmtUSD(m.value_usd) + ' \u00b7 ' + m.yield_pct + '% yield',
                      'Scale: ' + m.scale_score + '/10 \u00b7 Deployment Speed: ' + m.speed_score + '/10',
                      'Yield band: ' + bucket.label];
            },
            afterBody: function(ctx) {
              var m = ctx[0].raw._meta, lines = [];
              if (m.speed_rationale) { lines.push('', 'Deployment Speed:', ...wrapText(m.speed_rationale, 55)); }
              if (m.scale_rationale) { lines.push('', 'Scale:', ...wrapText(m.scale_rationale, 55)); }
              return lines;
            },
          } },
        },
      },
      plugins: [quadrantPlugin(), bubbleLabelsPlugin()],
    });
  }
  render(activeYields);
};


// ═══════════════════════════════════════════════════════════════
// Chart: scale-speed-yield-subcategory (sources by subcategory)
// ═══════════════════════════════════════════════════════════════

CHARTS['scale-speed-yield-subcategory'] = function(container) {
  var totalSubcategories = SUBCATEGORY_DATA.length;
  var s = scaffold(container, { title: 'Scale vs. Deployment Speed: ' + totalSubcategories + ' Yield Subcategories' });

  var YIELD_BUCKETS = [
    { label: '0\u20134%  Near-Risk-Free', min: -Infinity, max: 4, color: '#22c55e' },
    { label: '4\u20136%  Conservative', min: 4, max: 6, color: '#eab308' },
    { label: '6\u201310%  Growth', min: 6, max: 10, color: '#f97316' },
    { label: '10%+  High Yield', min: 10, max: Infinity, color: '#ef4444' },
  ];

  function getYieldBucket(yieldPct) {
    return YIELD_BUCKETS.find(function(b) { return yieldPct >= b.min && yieldPct < b.max; }) || YIELD_BUCKETS[YIELD_BUCKETS.length - 1];
  }

  var items = SUBCATEGORY_DATA.map(function(d) { return Object.assign({}, d, { yieldMid: d.yield_mid }); });
  var maxSources = Math.max.apply(null, items.map(function(d) { return d.source_count; }));

  // ── Primitive filters ──
  var PRIMITIVE_COLORS = { 'Lending': '#60a5fa', 'Owning': '#34d399', 'Renting': '#fbbf24', 'Licensing': '#c084fc', 'Insuring': '#f87171', 'Trading': '#a78bfa' };
  var primitives = Array.from(new Set(items.map(function(d) { return d.primitive; }))).sort();
  var primFilterCtrl = buildFilters(s.filtersEl, primitives, PRIMITIVE_COLORS, function() { doRender(); });

  // ── Yield filter buttons ──
  var activeYields = new Set(YIELD_BUCKETS.map(function(b) { return b.label; }));
  var yieldWrap = document.createElement('div');
  yieldWrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:4px 0 12px';
  YIELD_BUCKETS.forEach(function(bucket) {
    var btn = document.createElement('button');
    btn.textContent = bucket.label;
    btn.style.cssText = 'padding:4px 12px;border-radius:12px;border:2px solid ' + bucket.color + ';background:' + bucket.color + '33;color:#e2e8f0;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.15s';
    btn.addEventListener('click', function() {
      if (activeYields.has(bucket.label)) { activeYields.delete(bucket.label); btn.style.background = 'transparent'; btn.style.opacity = '0.3'; }
      else { activeYields.add(bucket.label); btn.style.background = bucket.color + '33'; btn.style.opacity = '1'; }
      doRender();
    });
    yieldWrap.appendChild(btn);
  });
  s.filtersEl.appendChild(yieldWrap);

  var chart;
  function doRender() {
    var activePrims = primFilterCtrl.getActive();
    var filtered = items.filter(function(d) {
      return activePrims.has(d.primitive) && activeYields.has(getYieldBucket(d.yieldMid).label);
    });
    var datasets = YIELD_BUCKETS.filter(function(b) { return activeYields.has(b.label); }).map(function(bucket) {
      return {
        label: bucket.label,
        data: filtered.filter(function(d) { return getYieldBucket(d.yieldMid).label === bucket.label; }).map(function(d) {
          return { x: d.scale + jitter(d.subcategory, 'x'), y: d.speed + jitter(d.subcategory, 'y'), r: Math.max(4, 4 + 18 * Math.sqrt(d.source_count / maxSources)), _meta: d };
        }),
        backgroundColor: bucket.color + '55', borderColor: bucket.color, borderWidth: 1.5,
      };
    });
    if (chart) chart.destroy();
    chart = new Chart(s.canvas, {
      type: 'bubble', data: { datasets: datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        layout: { padding: { top: 10, right: 20, bottom: 10, left: 0 } },
        scales: scaleSpeedAxes('market'),
        plugins: {
          legend: LEGEND_BOTTOM, datalabels: { display: false },
          tooltip: { maxWidth: 440, callbacks: {
            title: function(ctx) { return ctx[0].raw._meta.subcategory; },
            label: function(ctx) {
              var m = ctx.raw._meta;
              return ['Category: ' + m.category,
                      m.source_count + ' yield sources \u00b7 Primitive: ' + m.primitive,
                      'Avg yield: ' + m.yield_low + '\u2013' + m.yield_high + '% (mid: ' + m.yield_mid + '%)',
                      'Avg Scale: ' + m.scale + '/10 \u00b7 Avg Deployment Speed: ' + m.speed + '/10'];
            },
            afterBody: function(ctx) {
              var m = ctx[0].raw._meta;
              var total = m.tokenized + m.partially_tokenized + m.not_tokenized;
              var tokPct = total > 0 ? Math.round((m.tokenized + m.partially_tokenized) / total * 100) : 0;
              return ['', 'On-chain: ' + (m.tokenized + m.partially_tokenized) + '/' + total + ' tokenized (' + tokPct + '%)'];
            },
          } },
        },
      },
      plugins: [quadrantPlugin({ alpha: 0.02, labelAlpha: 0.06 }), {
        id: uid('sublab'),
        afterDatasetsDraw: function(chart) {
          var ctx = chart.ctx;
          ctx.save(); ctx.font = '600 7px Inter, -apple-system, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
          chart.data.datasets.forEach(function(ds, di) {
            var meta = chart.getDatasetMeta(di);
            if (meta.hidden) return;
            meta.data.forEach(function(el, i) {
              var m = ds.data[i]._meta;
              if (!m || m.source_count < 4) return;
              var short = m.subcategory
                .replace('Yield Sources', '').replace('Yield', '').replace('Strategies', '').replace('Securities', 'Sec.')
                .replace('Instruments', 'Instr.').replace('Obligations', 'Oblig.').replace('Agreements', 'Agmt.').replace('Certificates', 'Cert.')
                .replace('Investment Grade Corporate Bonds', 'IG Corp Bonds').replace('Collateralized Loan', 'CLO').replace('Collateralized Debt', 'CDO')
                .replace('Mortgage-Backed', 'MBS').replace('Asset-Backed', 'ABS').replace('Public REITs (Equity REITs)', 'Public REITs')
                .replace('Mortgage REITs (mREITs)', 'mREITs').replace('US Treasury', 'Treasuries').replace('US Municipal Bonds', 'Munis')
                .replace('US Government Agency Debt', 'Agency Debt').replace('Money Market Funds', 'MMFs').replace('Repurchase Agmt. (Repos)', 'Repos')
                .replace('Business Development Companies', 'BDCs').replace('Closed-End Funds (CEFs)', 'CEFs')
                .replace('Master Limited Partnerships (MLPs)', 'MLPs').replace('Catastrophe Bonds', 'Cat Bonds')
                .replace('Marketplace / P2P Lending', 'P2P Lending').replace('Agriculture / Farmland', 'Farmland')
                .replace('Dividend Stocks', 'Div. Stocks').replace('Real Estate Debt', 'RE Debt').replace('Private Real Estate', 'Private RE')
                .replace('Additional ', '').replace('Lending', 'Lend.').trim();
              if (short.length > 20) short = short.substring(0, 18) + '..';
              var px = el.x, py = el.y - el.options.radius - 2;
              ctx.strokeStyle = '#0a0e17'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
              ctx.strokeText(short, px, py);
              ctx.fillStyle = '#e2e8f0'; ctx.fillText(short, px, py);
            });
          });
          ctx.restore();
        },
      }],
    });
  }
  doRender();
};

// ════════════════════════════════════════════════════════════════
// TAXONOMY TREEMAP — yield sources as nested rectangles
// ════════════════════════════════════════════════════════════════

CHARTS['taxonomy'] = function(slot) {
  // ── Flatten TAXONOMY_DATA tree to leaf sources ──
  var sources = [];
  function flattenNode(node, ctx) {
    if (node.level === 'leaf') {
      sources.push({
        name: node.name, category: ctx.category, subcategory: ctx.subcategory,
        primitive: ctx.primitive, on_chain: node.on_chain || 'not_tokenized',
        yield_range: node['yield'] || '', yield_low: node.yield_low, yield_high: node.yield_high,
        scale: node.scale, speed: node.speed, notes: node.tokenization_notes || '',
        excluded: node.excluded || false
      });
      return;
    }
    var c = { category: ctx.category, subcategory: ctx.subcategory, primitive: ctx.primitive };
    if (node.level === 'primitive') c.primitive = node.primitive;
    if (node.level === 'category') c.category = node.name;
    if (node.level === 'subcategory') c.subcategory = node.name;
    (node.children || []).forEach(function(ch) { flattenNode(ch, c); });
  }
  flattenNode(TAXONOMY_DATA, { category: '', subcategory: '', primitive: '' });

  var totalCount = sources.length;
  var excludedCount = sources.filter(function(s) { return s.excluded; }).length;
  var notCount = sources.filter(function(s) { return s.on_chain === 'not_tokenized'; }).length;
  var partialCount = sources.filter(function(s) { return s.on_chain === 'partially_tokenized'; }).length;
  var tokCount = sources.filter(function(s) { return s.on_chain === 'tokenized'; }).length;
  var pctNot = Math.round(notCount / totalCount * 100);

  // ── Build hierarchy: root > category > subcategory > source (equal weight) ──
  var catGroups = {};
  sources.forEach(function(s) {
    if (!catGroups[s.category]) catGroups[s.category] = {};
    if (!catGroups[s.category][s.subcategory]) catGroups[s.category][s.subcategory] = [];
    catGroups[s.category][s.subcategory].push(s);
  });
  var treeData = {
    name: 'YIELD',
    children: Object.keys(catGroups).map(function(cat) {
      return {
        name: cat,
        children: Object.keys(catGroups[cat]).map(function(sub) {
          return {
            name: sub,
            children: catGroups[cat][sub].map(function(src) {
              return { name: src.name, primitive: src.primitive, on_chain: src.on_chain, excluded: src.excluded, value: 1, _src: src };
            })
          };
        })
      };
    })
  };

  // ── Scaffold ──
  var s = scaffold(slot, {
    title: totalCount + ' Yield Sources — ' + pctNot + '% Have No On-Chain Presence',
    filters: true
  });
  var wrap = s.canvas.parentNode;
  wrap.removeChild(s.canvas);
  wrap.style.height = '560px';

  // ── Colors ──
  var PRIM_COLORS = {
    lending: '#60a5fa', owning: '#34d399', renting: '#fbbf24',
    licensing: '#c084fc', insuring: '#f87171', trading: '#a78bfa'
  };

  // ── Filters ──
  var FILTER_COLORS = { 'Lending': '#60a5fa', 'Owning': '#34d399', 'Renting': '#fbbf24', 'Licensing': '#c084fc', 'Insuring': '#f87171', 'Trading': '#a78bfa' };
  var primNames = ['Lending', 'Owning', 'Trading', 'Renting', 'Licensing', 'Insuring'];
  var primFilterCtrl = buildFilters(s.filtersEl, primNames, FILTER_COLORS, function(active) {
    svg.selectAll('.tm-leaf').each(function() {
      var el = d3.select(this);
      var prim = el.attr('data-prim');
      var label = prim.charAt(0).toUpperCase() + prim.slice(1);
      el.style('opacity', active.has(label) ? null : 0.03);
    });
  });

  // ── Status legend ──
  var legendDiv = document.createElement('div');
  legendDiv.style.cssText = 'display:flex;gap:14px;align-items:center;margin:6px 0 4px;font-size:11px;color:#6b7a99;';
  legendDiv.innerHTML =
    '<span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;border-radius:2px;background:#60a5fa;outline:1.5px solid #fff;display:inline-block"></span> Tokenized (' + tokCount + ')</span>' +
    '<span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;border-radius:2px;background:#60a5fa;opacity:0.55;display:inline-block"></span> Partial (' + partialCount + ')</span>' +
    '<span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;border-radius:2px;background:#60a5fa;opacity:0.15;display:inline-block"></span> Not Tokenized (' + notCount + ')</span>' +
    '<span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:10px;border-radius:2px;background:#60a5fa;opacity:0.05;border:1px dashed #555;display:inline-block"></span> Excluded (' + excludedCount + ')</span>';
  s.filtersEl.parentNode.insertBefore(legendDiv, wrap);

  // ── Export button ──
  var exportBtn = document.createElement('button');
  exportBtn.textContent = '\u2913 PNG';
  exportBtn.style.cssText = 'background:#1c2440;border:1px solid #2a3352;color:#8899bb;padding:4px 10px;border-radius:6px;font-size:10px;cursor:pointer;font-family:inherit;';
  exportBtn.onmouseenter = function() { this.style.color = '#e0e6f0'; };
  exportBtn.onmouseleave = function() { this.style.color = '#8899bb'; };
  s.filtersEl.appendChild(exportBtn);

  // ── D3 Treemap layout ──
  var W = wrap.clientWidth || 800;
  var H = 540;

  var root = d3.hierarchy(treeData)
    .sum(function(d) { return d.value || 0; })
    .sort(function(a, b) { return b.value - a.value; });

  d3.treemap()
    .size([W, H])
    .paddingTop(18)
    .paddingRight(2)
    .paddingBottom(2)
    .paddingLeft(2)
    .paddingInner(1)
    .round(true)
    (root);

  var svg = d3.select(wrap).append('svg')
    .attr('width', W)
    .attr('height', H)
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .style('display', 'block');

  // Background rect (for export)
  svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#0f1320');

  // ── Category backgrounds ──
  var cats = root.children || [];
  svg.selectAll('rect.tm-cat-bg')
    .data(cats).enter().append('rect')
    .attr('class', 'tm-cat-bg')
    .attr('x', function(d) { return d.x0; })
    .attr('y', function(d) { return d.y0; })
    .attr('width', function(d) { return d.x1 - d.x0; })
    .attr('height', function(d) { return d.y1 - d.y0; })
    .attr('fill', '#0c1020')
    .attr('stroke', '#1a2038')
    .attr('stroke-width', 1)
    .attr('rx', 2);

  // ── Category labels ──
  svg.selectAll('text.tm-cat-label')
    .data(cats).enter().append('text')
    .attr('class', 'tm-cat-label')
    .attr('x', function(d) { return d.x0 + 4; })
    .attr('y', function(d) { return d.y0 + 13; })
    .text(function(d) { return d.data.name; })
    .attr('fill', '#8892b0')
    .attr('font-size', '10px')
    .attr('font-weight', '600')
    .attr('font-family', 'Inter, -apple-system, sans-serif')
    .each(function(d) {
      var maxW = d.x1 - d.x0 - 8;
      var text = d.data.name;
      while (this.getComputedTextLength() > maxW && text.length > 3) {
        text = text.slice(0, -1);
        d3.select(this).text(text + '\u2026');
      }
    });

  // ── Leaf cells (individual yield sources) ──
  var leaves = root.leaves();
  svg.selectAll('rect.tm-leaf')
    .data(leaves).enter().append('rect')
    .attr('class', 'tm-leaf')
    .attr('data-prim', function(d) { return d.data.primitive; })
    .attr('x', function(d) { return d.x0; })
    .attr('y', function(d) { return d.y0; })
    .attr('width', function(d) { return Math.max(0, d.x1 - d.x0); })
    .attr('height', function(d) { return Math.max(0, d.y1 - d.y0); })
    .attr('fill', function(d) { return PRIM_COLORS[d.data.primitive] || '#666'; })
    .attr('fill-opacity', function(d) {
      var base;
      if (d.data.on_chain === 'tokenized') base = 1;
      else if (d.data.on_chain === 'partially_tokenized') base = 0.55;
      else base = 0.15;
      return d.data.excluded ? base * 0.3 : base;
    })
    .attr('stroke', function(d) {
      if (d.data.excluded) return '#555';
      if (d.data.on_chain === 'tokenized') return '#fff';
      if (d.data.on_chain === 'partially_tokenized') return PRIM_COLORS[d.data.primitive] || '#666';
      return 'none';
    })
    .attr('stroke-width', function(d) {
      if (d.data.excluded) return 0.5;
      if (d.data.on_chain === 'tokenized') return 1.5;
      if (d.data.on_chain === 'partially_tokenized') return 0.5;
      return 0;
    })
    .attr('stroke-dasharray', function(d) {
      return d.data.excluded ? '2,2' : null;
    })
    .attr('rx', 1)
    .style('cursor', 'pointer');

  // ── Subcategory labels (where space permits) ──
  var subGroups = cats.flatMap(function(cat) { return cat.children || []; });
  svg.selectAll('text.tm-sub-label')
    .data(subGroups.filter(function(d) { return (d.x1 - d.x0) > 55 && (d.y1 - d.y0) > 28; }))
    .enter().append('text')
    .attr('class', 'tm-sub-label')
    .attr('x', function(d) { return d.x0 + 3; })
    .attr('y', function(d) { return d.y0 + 10; })
    .text(function(d) { return d.data.name; })
    .attr('fill', '#3a4668')
    .attr('font-size', '7px')
    .attr('font-family', 'Inter, -apple-system, sans-serif')
    .attr('pointer-events', 'none')
    .each(function(d) {
      var maxW = d.x1 - d.x0 - 6;
      var text = d.data.name;
      while (this.getComputedTextLength() > maxW && text.length > 3) {
        text = text.slice(0, -1);
        d3.select(this).text(text + '\u2026');
      }
    });

  // ── Tooltip ──
  var tip = document.createElement('div');
  tip.style.cssText = 'position:fixed;background:#141926;border:1px solid #2a3352;border-radius:8px;padding:10px 14px;font-size:12px;max-width:380px;pointer-events:none;z-index:200;box-shadow:0 8px 24px rgba(0,0,0,0.5);line-height:1.5;display:none;color:#c0c8e0;';
  document.body.appendChild(tip);

  var statusLabels = { tokenized: 'Tokenized', partially_tokenized: 'Partially Tokenized', not_tokenized: 'Not Tokenized' };
  var statusColors = { tokenized: '#3acc8e', partially_tokenized: '#ccaa3a', not_tokenized: '#6b7a99' };

  svg.selectAll('rect.tm-leaf')
    .on('mouseover', function(event, d) {
      var src = d.data._src;
      if (!src) return;
      var color = PRIM_COLORS[src.primitive] || '#666';

      var h = '<div style="font-weight:600;font-size:13px;color:#f0f4ff;margin-bottom:4px">' + src.name + '</div>';
      h += '<div style="font-size:11px;color:#6b7a99">' + src.category + ' \u2192 ' + src.subcategory + '</div>';
      h += '<div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">';
      h += '<span style="display:inline-block;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:600;background:' + color + '33;color:' + color + '">' + src.primitive.charAt(0).toUpperCase() + src.primitive.slice(1) + '</span>';
      h += '<span style="display:inline-block;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:600;background:#1a1e2e;color:' + (statusColors[src.on_chain] || '#6b7a99') + '">' + (statusLabels[src.on_chain] || '') + '</span>';
      h += '</div>';
      if (src.yield_range) h += '<div style="margin-top:5px;color:#8892b0">Yield: ' + src.yield_range + '</div>';
      if (src.scale != null) h += '<div style="color:#8892b0">Scale: ' + src.scale + '/10 \u00b7 Deployment Speed: ' + src.speed + '/10</div>';
      if (src.notes) h += '<div style="margin-top:4px;color:#5a6780;font-size:11px">' + src.notes + '</div>';

      tip.innerHTML = h;
      tip.style.display = 'block';

      // Highlight cell
      d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2).raise();
    })
    .on('mouseout', function(event, d) {
      tip.style.display = 'none';
      var dd = d.data;
      d3.select(this)
        .attr('stroke', dd.on_chain === 'tokenized' ? '#fff' : dd.on_chain === 'partially_tokenized' ? (PRIM_COLORS[dd.primitive] || '#666') : 'none')
        .attr('stroke-width', dd.on_chain === 'tokenized' ? 1.5 : dd.on_chain === 'partially_tokenized' ? 0.5 : 0);
    })
    .on('mousemove', function(event) {
      var x = event.clientX + 14;
      var y = event.clientY - 10;
      tip.style.left = Math.min(x, window.innerWidth - 400) + 'px';
      tip.style.top = Math.min(y, window.innerHeight - 220) + 'px';
    });

  // ── Export PNG ──
  exportBtn.addEventListener('click', function() {
    var svgEl = wrap.querySelector('svg');
    var serializer = new XMLSerializer();
    var svgStr = serializer.serializeToString(svgEl);

    var canvas = document.createElement('canvas');
    canvas.width = W * 2;
    canvas.height = H * 2;
    var ctxC = canvas.getContext('2d');
    ctxC.scale(2, 2);
    ctxC.fillStyle = '#0f1320';
    ctxC.fillRect(0, 0, W, H);

    var img = new Image();
    img.onload = function() {
      ctxC.drawImage(img, 0, 0, W, H);
      var link = document.createElement('a');
      link.download = 'yield-taxonomy-treemap.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgStr)));
  });
};
