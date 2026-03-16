// ── Shared utilities for RWA charts ──

// Asset class colors
const COLORS = {
  'Stablecoins':              '#6366f1',
  'U.S. Treasuries':          '#22d3ee',
  'Private Credit':           '#f59e0b',
  'Commodities':              '#eab308',
  'Institutional Funds':      '#a78bfa',
  'Corporate Bonds':          '#f472b6',
  'Non-U.S. Government Debt': '#34d399',
  'Public Equities':          '#fb923c',
  'Real Estate':              '#e879f9',
};

// Yield category colors
const YIELD_CAT_COLORS = {
  'Direct yield-bearing':            '#22d3ee',
  'Native yield via staking/protocol': '#a78bfa',
  'Non-yield stablecoin':            '#6366f1',
  'No yield (appreciation only)':    '#f59e0b',
};

// Pre-filtered data: exclude non-yield stablecoins
const DATA = RWA_DATA.filter(d => d.yield_category !== 'Non-yield stablecoin' && d.yield_category !== 'No yield (appreciation only)');

// Format dollar values
function fmtUSD(v) {
  if (v >= 1e12) return '$' + (v / 1e12).toFixed(1) + 'T';
  if (v >= 1e9)  return '$' + (v / 1e9).toFixed(1) + 'B';
  if (v >= 1e6)  return '$' + (v / 1e6).toFixed(0) + 'M';
  if (v >= 1e3)  return '$' + (v / 1e3).toFixed(0) + 'K';
  return '$' + v.toFixed(0);
}

// Format percentage
function fmtPct(v) { return v.toFixed(1) + '%'; }

// Bubble radius scaler (sqrt scale, with min/max)
function bubbleRadius(value, allValues, minR = 4, maxR = 50) {
  const maxVal = Math.max(...allValues);
  return minR + (maxR - minR) * Math.sqrt(value / maxVal);
}

// Parse inception_date string to Date
function parseDate(s) {
  if (!s) return null;
  const d = new Date(s + 'T00:00:00');
  return isNaN(d.getTime()) ? null : d;
}

// Common Chart.js defaults
Chart.defaults.color = '#8892b0';
Chart.defaults.borderColor = '#1e293b';
Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.tooltip.backgroundColor = '#1e293b';
Chart.defaults.plugins.tooltip.titleColor = '#e2e8f0';
Chart.defaults.plugins.tooltip.bodyColor = '#94a3b8';
Chart.defaults.plugins.tooltip.borderColor = '#334155';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.cornerRadius = 6;
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.maxWidth = 360;

// Wrap description text into lines for tooltips
function wrapText(str, maxLen = 50) {
  if (!str) return [];
  const words = str.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if (line.length + w.length + 1 > maxLen) { lines.push(line); line = w; }
    else { line = line ? line + ' ' + w : w; }
  }
  if (line) lines.push(line);
  return lines;
}

// Register datalabels plugin globally
if (typeof ChartDataLabels !== 'undefined') Chart.register(ChartDataLabels);

// Default datalabels config
const DATALABELS_CONFIG = {
  color: '#c8d0e8',
  font: { size: 9, weight: 500 },
  anchor: 'end',
  align: 'top',
  offset: 4,
  display: 'auto',
  clamp: true,
  formatter: function(value) {
    return value && value._meta ? value._meta.ticker : '';
  },
};

// Common page CSS (inject into <head>)
function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #0a0e17;
      color: #e0e6f0;
      min-height: 100vh;
      padding: 28px 40px;
    }
    h1 { font-size: 22px; font-weight: 600; color: #f0f4ff; }
    .subtitle { font-size: 12px; color: #6b7a99; margin-top: 4px; margin-bottom: 20px; }
    .chart-box {
      background: #0f1320;
      border: 1px solid #1a2038;
      border-radius: 10px;
      padding: 24px 28px;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 16px;
    }
    .filters button {
      background: #1a2038;
      border: 1px solid #2a3050;
      border-radius: 6px;
      color: #8892b0;
      padding: 5px 12px;
      font-size: 11px;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s;
    }
    .filters button:hover { border-color: #4a5580; color: #c8d0e8; }
    .filters button.active { background: #2a3058; border-color: #6366f1; color: #e0e6f0; }
    .filters button.excluded { opacity: 0.4; text-decoration: line-through; }
    .chart-wrap { position: relative; height: 500px; }
    .chart-wrap canvas { position: absolute; inset: 0; }
    .exclusion-note { font-size: 11px; color: #5a6780; margin-top: 2px; margin-bottom: 16px; font-style: italic; }
  `;
  document.head.appendChild(style);
}

// Build filter buttons for a set of categories
function buildFilters(container, categories, colorMap, onToggle) {
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All';
  allBtn.className = 'active';
  container.appendChild(allBtn);

  const btns = [];
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.dataset.cat = cat;
    if (colorMap[cat]) btn.style.borderLeftColor = colorMap[cat];
    if (colorMap[cat]) btn.style.borderLeftWidth = '3px';
    container.appendChild(btn);
    btns.push(btn);
  });

  let excluded = new Set();

  function getActive() { return new Set(categories.filter(c => !excluded.has(c))); }

  function update() {
    allBtn.classList.toggle('active', excluded.size === 0);
    btns.forEach(b => {
      const isExcluded = excluded.has(b.dataset.cat);
      b.classList.toggle('active', !isExcluded);
      b.classList.toggle('excluded', isExcluded);
    });
    onToggle(getActive());
  }

  allBtn.addEventListener('click', () => { excluded.clear(); update(); });
  btns.forEach(b => b.addEventListener('click', () => {
    if (excluded.has(b.dataset.cat)) {
      excluded.delete(b.dataset.cat);
    } else {
      excluded.add(b.dataset.cat);
      if (excluded.size === categories.length) excluded.clear();
    }
    update();
  }));

  return { getActive };
}

// Compute a human-readable exclusion footnote by comparing pre-filter vs post-filter sets.
// Groups excluded assets by which null field caused exclusion, includes network info.
function exclusionNote(before, after, requiredFields, fieldLabels) {
  const afterTickers = new Set(after.map(d => d.ticker));
  const excluded = before.filter(d => !afterTickers.has(d.ticker) && requiredFields.some(f => d[f] == null));
  if (excluded.length === 0) return '';

  // Group by which required fields are null
  const groups = {};
  for (const d of excluded) {
    const nullFields = requiredFields.filter(f => d[f] == null);
    const key = nullFields.sort().join('+');
    if (!groups[key]) groups[key] = { fields: nullFields, assets: [] };
    groups[key].assets.push(d);
  }

  const parts = [];
  for (const { fields, assets } of Object.values(groups)) {
    const tickers = assets.map(d => d.ticker).sort().join(', ');
    const reasons = fields.map(f => fieldLabels[f] || f).join(' & ');
    const networks = [...new Set(assets.flatMap(d => (d.networks || '').split(', ')))].sort().join(', ');
    parts.push(tickers + ' (no ' + reasons + ' \u2014 ' + networks + ')');
  }

  const n = excluded.length;
  return 'Excludes ' + n + ' asset' + (n !== 1 ? 's' : '') + ' with missing data: ' + parts.join('; ');
}

// Render an exclusion footnote after the given element
function renderExclusionNote(afterEl, noteText) {
  if (!noteText) return;
  const p = document.createElement('p');
  p.className = 'exclusion-note';
  p.textContent = noteText;
  afterEl.insertAdjacentElement('afterend', p);
}
