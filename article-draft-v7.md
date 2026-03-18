# 501 Sources of Real-World Yield and What Gets Tokenized Next

*All data as of March 8, 2026.*

---

## Executive Summary

We mapped 501 sources of real-world yield and cross-referenced them against the RWAs with traction on-chain today.

**1. Stablecoin demand pulled Treasuries on-chain first, and now Treasury concentration is pulling higher-yield assets after them.** Treasuries are the largest RWA category because dollars on-chain needed the risk-free rate once rates started climbing in 2022. The concentration in low-yield Treasuries is now pushing stablecoin reserves to diversify into higher-yield, less correlated assets. Bringing those assets on-chain is harder.

**2. Three strategies make higher-yield assets feel instant, but they all drag returns toward the risk-free rate.** Higher-yield assets are slow to deploy and slow to redeem. Today's workarounds — parking idle capital in liquid assets, socializing yield across a pool, and getting liquidity from third parties instead of redeeming — all compress yield. There is opportunity in building new strategies that preserve the yield premium above Treasuries.

**3. Tokenizable yield is abundant. Seven clusters of opportunity explain what can be unlocked on-chain.** Of the 501 yield sources we mapped, only 34 have reached meaningful scale on-chain. The rest cluster into seven groups by what keeps them off-chain: legal structuring, cross-border access, market aggregation, specialized origination, physical-world integration, execution infrastructure, and bespoke evaluation.

**4. The biggest challenge is distribution.** Of 35 yield-bearing non-stablecoin RWAs above $50M, only two have crossed 2,000 holders, much of that by design. Three strategies have emerged: partner with deployers and vault curators, own a yield-bearing stablecoin, or embed in apps that reach users directly. Today, the first dominates. The products that scale will either own their distribution or become infrastructure the distribution layer cannot replace.

**5. Five forces are pulling more assets on-chain despite the frictions.** On-chain capital is sticky: two-thirds of stablecoin supply stayed even before the risk-free rate existed. Now that the base has grown to over $300B, the largest protocols are concentrated in the same handful of Treasury products and need to diversify into uncorrelated, higher-yield assets. Each new layer of infrastructure, from vaults to tranching to leverage, makes it easier to bring those assets on-chain and multiplies the demand for them once they arrive.

Founders have the opportunity to bring hard-to-tokenize assets on-chain, own their distribution, or build the infrastructure layer that everything else plugs into. If you are building any of these, we want to talk.

---

## 1. Stablecoin Demand Pulled Treasuries On-Chain. Concentration Is Now Pulling Higher-Yield Assets.

Stablecoin supply used to track inversely with the fed funds rate, growing past $180B when rates were near zero and falling as rates climbed above 5%. In January 2024, the pattern broke. Supply started growing again even with rates above 5%, and has since grown to over $300B.

[chart:stablecoin-rates]
*Stablecoin supply tracked inversely with the fed funds rate until January 2024, when the two decoupled.*
*Data: [DeFiLlama Stablecoins](https://defillama.com/stablecoins), [Federal Reserve Economic Data (FRED)](https://fred.stlouisfed.org/series/FEDFUNDS).*

What changed was that the risk-free rate appeared on-chain.¹ Starting in 2023 with Ondo and expanding through 2024 with BlackRock and Centrifuge, issuers began offering Treasury yield as on-chain tokens. For the first time, stablecoin holders didn't need to leave crypto to earn the risk-free rate.

[chart:yield-vs-date]
*Yield-bearing RWAs by launch date. Bubble size reflects total asset value. The largest assets cluster in the 3-5% yield band. Newer, smaller launches push up the yield curve. Solid borders = 7-day trailing APY; dashed borders = stated target APY (see Methodology).*
*Data: [rwa.xyz](https://app.rwa.xyz) 7-day trailing APY and inception dates, [DeFiLlama Yields API](https://yields.llama.fi/pools), protocol documentation.*

Treasuries are now the largest RWA category at ~$11B. The same dynamic pulled other debt instruments on-chain: private credit ($2.8B), corporate bonds ($1.9B), non-U.S. government debt ($1.1B). The market is concentrated: the top 10 assets hold 64% of total value, and 18 of the largest offer yields between 3% and 5%.

That concentration is now pushing stablecoin reserves to diversify, pulling higher-yield assets on-chain. But higher-yield assets are harder to bring on-chain than Treasuries.


---

## 2. Every Tokenized Asset Faces a Timing Mismatch, and Every Workaround Costs Yield

On-chain capital moves 24/7, settles in seconds, and can be redeployed same-block. Off-chain assets cannot. A Treasury bond settles T+1. A private credit loan takes weeks to originate. A real estate deal takes months to close.

Every tokenized asset sits on top of this mismatch. The gap has two sides:

**Deployment lag.** Capital deposited on-chain does not earn yield until it reaches the underlying asset. Even Treasuries have a one-day gap. Private credit has weeks. Real estate has months. Until the underlying is deployed, capital earns nothing.

**Redemption lag.** The underlying asset cannot be sold instantly when a holder wants out. BUIDL, the largest tokenized Treasury product, settles daily through BlackRock, but only feels instant because Circle pre-funds a USDC facility on top. ACRED's underlying fund offers quarterly repurchase windows.³ Real estate funds lock up for years.

Treasuries are the fastest off-chain asset class and still need workarounds to feel instant on-chain. Higher-yield assets need them more. The cost scales with illiquidity: the slower the underlying, the more yield the workaround consumes.

Three strategies bridge the timing gap today. All redistribute the cost of illiquidity to whoever is willing to bear it: the fund (buffer), a lender (collateral), or a market maker (spread).

**A. Park idle capital in liquid assets.** Keep a portion of the pool in lower-yielding but instantly accessible positions. New deposits earn immediately instead of sitting idle during origination, and withdrawals get funded without waiting for underlying assets to mature. There are two variants:
- **Park in DeFi lending.** Example: Maple's syrupUSD pools park uninvested capital across DeFi protocols, including Sky and Aave, as a liquidity buffer.⁴ New deposits earn yield immediately from the buffer while waiting for loan origination, and withdrawals get funded without waiting for short-duration loans to mature. The cost: every dollar in the buffer earns less than a dollar deployed to loans, compressing the pool's blended rate.
- **Hold T-bills as the buffer.** Example: USD.ai's sUSDai uses T-bills via M0 as base yield while originating GPU-collateralized loans on top.⁵

**B. Spread yield across the pool.** Pool new deposits into an already-earning pool so no individual depositor experiences deployment delay. The new capital dilutes the blended rate, but in a large pool the dilution is a rounding error. The cost is that existing depositors subsidize new ones. Example: Vaults on Morpho use this.

**C. Get liquidity from a third party.** Instead of redeeming from the fund, the holder gets cash from someone else. The fund never sells anything. This strategy only works for speeding up redemptions and does not apply to deployments.
- **Pre-fund a stablecoin pool that buys tokens at NAV.** Example: Circle provisioned up to $20M USDC in a smart contract for BUIDL,⁶ giving holders an instant stablecoin off-ramp for the largest tokenized Treasury product. When a holder redeems, BUIDL transfers to Circle and USDC transfers to the holder atomically. Circle redeems with BlackRock off-chain. The pool is finite. If redemption demand exceeds it, holders fall back to the fund's standard daily redemption.
- **Use market makers to buy tokens at NAV.** Example: Centrifuge's Anemoy Liquid Network has professional counterparties (Wintermute, Keyrock, Arbelos)⁷ who provide instant redemptions for Centrifuge fund tokens, paying the holder in stablecoins the same day (up to $125M, 24/7). The market makers absorb the wait: they hold the tokens, earn yield, and redeem through the fund's slow channel themselves.
- **Borrow against RWA tokens on DeFi lending markets.** If the token is listed as collateral on a lending market, holders can borrow stablecoins against it instead of redeeming, even on weekends or outside the fund's redemption window. The fund is never involved. The same mechanic also enables looping, which we will discuss later as a catalyst for new RWA demand.

The timing mismatch exists because one leg is on-chain and the other is not. It narrows as more of the capital stack moves on-chain. Every layer that does, from origination to servicing to payment rails, makes the workarounds cheaper and the yield compression smaller. Closing this gap is what makes higher-yield assets viable on-chain.

---

## 3. Tokenizable Yield Is Abundant and Seven Clusters Explain What Can Be Unlocked On-Chain.

The 34 yield sources with on-chain presence cluster in familiar territory: Treasuries, private credit, corporate bonds. The rest have not reached meaningful scale, not because they cannot be tokenized, but because seven distinct barriers stand in the way.

[chart:taxonomy]
*501 yield sources across 15 categories (34 sources excluded from analysis, see Methodology). 93% of the analytical set have not reached meaningful scale on-chain.*
*Data: Electric Capital primary research, [rwa.xyz](https://app.rwa.xyz) distributed assets for on-chain status.*

**[Download the full 501-source taxonomy (CSV) →][TODO: link]**

### The 433 off-chain yield sources fall into seven groups based on what they need to come on-chain. The full detail on each source is in the CSV.

| Barrier | <div style="min-width:350px">Categories (# of yield sources)</div> | <div style="min-width:350px">Core challenge</div> | What's needed |
|---|---|---|---|
| **Execution infrastructure** | <ul><li>Carry, basis & yield curve strategies (30)</li><li>Options & volatility strategies (20)</li><li>Arbitrage & structured trading products (18)</li></ul> | These are trading strategies where the asset is already electronic. Ethena scaled a crypto basis trade to $6B, but no TradFi carry, options, or arbitrage strategy has scaled on-chain yet. Two paths: bridge vaults to off-chain exchanges, or rebuild strategies natively as more underlying assets are tokenized. | Vault wrappers, margin engines, oracle feeds, and exchange connectors |
| **Legal structuring** | <ul><li>Corporate bonds (24)</li><li>ABS & CLOs (19)</li><li>Mortgage-backed securities (14)</li><li>US government & agency debt, commercial paper (13)</li><li>MLPs & royalty trusts (7)</li></ul> | The asset is standardized and well-understood, but creating the compliant on-chain structure is the primary lift. Some adjacent products are already tokenized. Centrifuge has scaled CLOs to over $400M. | SPV creation, custody arrangements, and regulatory exemption filings |
| **Cross-border access** | <ul><li>Public REITs & mREITs (25)</li><li>Listed alternative funds (12)</li><li>International sovereign & supranational debt (11)</li><li>Public equities & dividends (7)</li></ul> | The asset is wrappable today and demand exists from international investors who cannot access it off-chain. | Multi-jurisdiction KYC/AML, securities law exemptions (Reg S), withholding tax handling, and cross-border custody infrastructure |
| **Market aggregation** | <ul><li>Specialty & asset-based finance (20)</li><li>Municipal bonds (12)</li><li>Carbon & environmental markets (7)</li><li>Entertainment & media royalties (4)</li></ul> | Individual deals or issuers are too small or too scattered to tokenize individually. Municipal bonds alone have 50,000+ issuers with no two bonds identical. | Pooling platforms that turn many small things into one investable product |
| **Specialized origination** | <ul><li>Infrastructure finance (21)</li><li>Consumer & marketplace lending (20)</li><li>Cat bonds & ILS (17)</li><li>Corporate, secured & distressed lending (14)</li><li>Real estate debt (8)</li><li>Energy infrastructure & PPAs (7)</li><li>Specialty insurance lines (5)</li><li>Life settlements (4)</li></ul> | Each deal requires domain expertise before capital can be deployed. Someone has to assess the specific borrower, property, insurance risk, or project. Re has raised $150M+ in on-chain capital for reinsurance, demonstrating that on-chain capital can flow into products that need specialized origination. | Vertical-specific origination and servicing infrastructure |
| **Physical-world integration** | <ul><li>Oil, gas, mining & timber (15)</li><li>Technology & compute infrastructure (11)</li><li>Direct real estate & RE-adjacent (11)</li><li>Transportation leasing (9)</li><li>Agriculture & farmland (8)</li><li>Equipment leasing (6)</li></ul> | The underlying asset is physical. The common thread is bridging atoms to bits: IoT, oracles, or legal enforcement mechanisms depending on the asset. AI capex may exceed $500B in 2026 alone,² and on-chain capital wants exposure to GPU leasing, data center construction, and energy contracts. | IoT, oracles, or legal enforcement mechanisms depending on the asset |
| **Bespoke evaluation** | <ul><li>Pharma, tech & commercial IP licensing (15)</li><li>Sports, art & niche alternatives (14)</li><li>Litigation finance (6)</li></ul> | Each asset requires individual expert judgment that cannot currently be automated or standardized. But this describes the current state, not a permanent condition. Where digitization creates standardized evaluation (e.g., PSA grading for collectibles, streaming data for music), the barrier collapses and the asset becomes poolable. | Digitization that creates standardized evaluation |

**[Download the full 501-source taxonomy (CSV) →][TODO: link]**

*The dataset includes category, source name, description, example vehicles, and on-chain status for all 501 yield sources. We recommend enriching the CSV with an LLM for additional fields like yield ranges, risk factors, liquidity profiles, access requirements, or regulatory jurisdiction.*

Macro forces can accelerate specific clusters. Rising insurance losses from climate events are expanding the catastrophe bond and insurance-linked securities market. Parametric models, where payouts trigger automatically based on measurable events like wind speed or earthquake magnitude rather than assessed damages, are a natural fit for on-chain settlement. The surge in AI infrastructure spending is creating demand for on-chain financing of GPU clusters, data centers, and energy contracts.

These clusters also cannot capture yield sources that do not exist yet. Oil took a century to develop from a physical commodity into a full derivatives market. GPU compute could do it in years because its secondary markets are electronic from the start. A Twitch streamer's subscription revenue had no financial market five years ago. The infrastructure exists to tokenize it today. The 467 sources we mapped are a floor, not a ceiling.

---

## 4. The Biggest Challenge Is Distribution.

New yield types and new strategies only matter if they reach capital. Today, distribution is extremely concentrated.

[chart:holders-value-savings]
*Each bubble is a yield-bearing asset, sized by on-chain value, filtered to savings/staking holders actually earning yield.*
*Data: [rwa.xyz](https://app.rwa.xyz) on-chain holder data and distributed values (March 8, 2026). Yield sources per Methodology.*

Most yield-bearing assets cluster on the left: 33 of 35 non-stablecoin RWAs above $50M have fewer than 2,000 holders. Most of that is structural: BUIDL is a fund limited to qualified purchasers with a $5M minimum,⁸ and ~100 holders is by design. But for products that could reach a broader base, the low counts reflect the dependency current RWAs have on partners for distribution. The exceptions in the upper right are staked stablecoins like sUSDe, sDAI, and sUSDS, which reach far more holders. That contrast points to three distribution strategies:

**A. Partner with deployers and curators.**
- **Large deployers** like Sky and Ethena allocate capital to RWAs. A single deployer decision can move hundreds of millions overnight. Centrifuge's JAAA, a tokenized AAA CLO worth $743M at the time of data collection, gets nearly all its AUM from a single Sky allocation through Grove.⁹ On March 9, 2026, Grove redeemed $327M in a single transaction, and JAAA lost 44% of its value in a day. Even BUIDL, the largest tokenized RWA, has its value concentrated in protocols: the top 10 holders control 98%, and those holders are Ethena (via USDtb), Ondo (via OUSG), and Sky (via Spark).¹⁰
- **Vault curators** like Steakhouse and Gauntlet decide which assets their Morpho vaults lend against¹¹, unlocking distribution to thousands of depositors. Losing a curator doesn't kill AUM but closes a channel.

BlackRock and Apollo have the leverage to negotiate these partnerships. Smaller issuers compete for inclusion.

**B. Own the stablecoin.** Embed yield-generating assets underneath, then find distribution for the stablecoin itself.
- **Diversified yield stablecoins** like Sky allocate across multiple tokenized RWAs simultaneously.
- **Specialized yield stablecoins** like USDe (Ethena), reUSD (Re), and sUSDai (USD.ai) each embed a single strategy. The choice between diversified and specialized is about holder risk tolerance and expectations, and a single-strategy stablecoin can be a go-to-market motion that expands into more yield types over time.

**C. Embed in apps that already have users.** Steakhouse curates Morpho vaults that power Coinbase's USDC lending. Gauntlet does the same for Wirex business accounts. Kraken's DeFi Earn routes through Veda vaults curated by Chaos Labs and Sentora.¹² The curator handles risk and on-chain complexity; the app handles compliance and user acquisition. The founder never touches the end user, but the yield reaches them. Today, every major example still routes through vault curators, making this a variant of the first path. That does not have to remain the case.

Two paths lead to scale: own distribution, or become infrastructure the distribution layer cannot replace. Today the underlying infrastructure is crypto-native even when the end user is not. The biggest unreached pool is institutional capital. Family offices, endowments, and corporate treasuries want yield but need custody, compliance reporting, and mandate-compatible structures. The current pipeline was not built for them, and there is opportunity in building it.

---

## 5. Five Forces Are Compounding to Pull More Assets On-Chain.

RWAs are being pulled on-chain by growing demand.

On-chain capital is sticky. When rates climbed and the risk-free rate was not widely accessible on-chain, stablecoin supply fell from over $180B to under $125B, but it did not collapse. A meaningful base stayed despite not being able to access the risk-free rate. Now that real-world yield exists on-chain, supply has grown from $130B to over $300B.¹³ Five forces are compounding.

### A. A bigger stablecoin base means a wider distribution of yield preferences.

Protocol treasuries managing billions want different things than retail holders parking savings. Not everyone wants 3% from Treasuries. Some want 8% from private credit. Some want 15% from a leveraged strategy. But today, that demand is funneling into the same handful of products.

### B. Concentration in the same underlying assets is creating hunger for diversification.

The top 10 yield-bearing, non-stablecoin RWAs hold 64% of total value. BlackRock's BUIDL is simultaneously the backing for Ethena's USDtb, a primary underlying asset in Ondo's OUSG, and a direct holding of Sky's Grove protocol.¹⁴ Three of the largest protocols in on-chain yield are correlated to the same Treasury fund.

This concentration is a catalyst. Sky deploys billions across a handful of Treasury and CLO products through Spark and Grove. Every additional dollar it deploys into the same handful of products increases its correlation risk. Sky, Ethena, and Ondo all need uncorrelated, higher-yield sources to diversify their reserves.

The same logic applies to every protocol and DAO treasury sitting in Treasuries today. The concentration in low-yield, correlated assets is the demand engine pulling the next wave of RWAs on-chain. That urgency increases when the underlying assets come under pressure. Private credit default rates have climbed above 5%. Meanwhile, Grove redeemed $327M from JAAA, a tokenized private credit CLO, in a single transaction on March 9. The same infrastructure that concentrated risk now needs to diversify it.

Three layers of on-chain infrastructure independently amplify the demand for every asset that arrives.

### C. Vaults let curators absorb the duration and liquidity risk that individual assets cannot.

A multi-asset vault does not need each position to be individually fast or liquid. A curator managing Treasuries, private credit, and CLOs can add a slow-originating, high-yield source because the rest of the portfolio covers liquidity. The depositor sees blended yield with instant access. The bar for new assets drops: they need to be yield-generating and legally wrappable. The curator handles the rest.

Morpho grew past $6B as curators like Steakhouse and Gauntlet built portfolios that blend liquid and illiquid positions.

Apollo signed a cooperation agreement to acquire up to 90M MORPHO tokens over 48 months, signaling its intent to use Morpho as a distribution channel for tokenized credit. Traditional asset managers see vault infrastructure as a distribution channel.

Vaults are still maturing. Yields today are partly subsidized by token incentives. A vault advertising 12% APY may deliver 4% organically, with the rest in tokens. And no standardized ratings exist for curators, so depositors have limited tools to evaluate risk. That is itself an opportunity.

### D. Tranching and yield decomposition expand the buyer base for every asset that comes on-chain.

A single yield stream serves a single risk profile. Tranching splits it into multiple products, each calibrated to a different buyer. A senior tranche offering 4% with first-loss protection suits a conservative DAO treasury. A junior tranche offering 12% with concentrated downside risk attracts yield seekers willing to underwrite that loss. The same underlying asset reaches both buyers. Royco Dawn and Strata are building general-purpose tranching layers.

Pendle does something different. Instead of splitting by credit risk, Pendle splits any yield-bearing token into a principal token and a yield token, letting holders lock in a fixed rate or speculate on variable yield. When Pendle lists a tokenized RWA, it creates a new surface of demand from traders and hedgers who would never buy the RWA directly.

Both tranching and yield decomposition cover a narrow set of underlying assets today. But as they mature, every new asset that comes on-chain can be sliced into products for multiple buyer segments without requiring new origination.

### E. Leverage multiplies demand for every asset already on-chain.

Once a tokenized RWA is listed as collateral on a lending market, holders can loop: deposit the RWA, borrow stablecoins against it, buy more of the same RWA, repeat. A 5% tokenized yield asset becomes 8-10% at 2-3x leverage minus borrowing costs. Gauntlet already manages a levered sACRED strategy on Morpho, and Centrifuge's JAAA is listed on Aave Horizon, where Resolv has proposed deploying up to $100M in similar strategies. Each loop creates incremental demand for the same asset without new origination.

Looping has a structural limitation: the on-chain borrow is instant, but JAAA subscription takes T+3, so the two legs do not unwind at the same speed under stress. Emerging infrastructure like 3F Labs aims to close the settlement gap between on-chain and off-chain legs. As that gap narrows and more RWAs become eligible collateral, leverage will compound demand for every asset already on-chain.

**Each force feeds the others.** Once an asset is on-chain, composable, and collateral-eligible, vaults, tranches, and leverage loops each compound demand beyond what the asset could attract alone.

---

The opportunities span the full stack:

- New assets to tokenize. We mapped 467 yield sources in our analytical set, and only 33 have meaningful on-chain presence.
- Strategies that close the deployment and redemption gap without compressing yield, or close the settlement gap between on-chain and off-chain legs entirely.
- Synthetic pathways that bring yield exposure on-chain before the underlying asset is fully tokenizable.
- Pooling infrastructure that aggregates fragmented markets into investable products.
- New distribution that breaks past the current structure where it depends on large deployers and curators, or that opens new paths to institutional capital.
- New catalysts that open the same asset to more types of buyers. Tranching, yield decomposition, and leverage already do this, and there will be more.

The 467 yield sources in this dataset are a floor, not a ceiling. Every asset that comes on-chain makes the next one easier to bring, and the infrastructure to support it more valuable.

If you are building the next layer, we want to talk.

**[info@electriccapital.com](mailto:info@electriccapital.com)**

---

## Methodology

*We identified 501 distinct yield sources across 15 asset categories by reviewing financial industry databases, academic literature, regulatory filings, and practitioner guides. We excluded 34 whose yield depends on non-transferable legal relationships (FDIC-insured CDs, 401(k) self-loans), jurisdiction-specific tax benefits (LIHTC, Canadian rate-reset preferreds, 1031 exchange vehicles), or instruments with no active market (Build America Bonds expired 2010, Trust Preferred Securities prohibited post-Dodd-Frank). The remaining 467 sources form the analytical set. The full taxonomy is in the downloadable CSV, with each excluded source annotated with its exclusion reason.*

*On-chain status was determined by mapping all 727 distributed assets tracked by rwa.xyz to their corresponding yield sources in our taxonomy, supplemented by on-chain products rwa.xyz does not track (DePIN protocols, carbon credit platforms, music royalty tokens). A source is tokenized if at least one mapped product has $50M or more on-chain, partially tokenized if on-chain products exist but all fall below $50M, and not tokenized if no on-chain product exists. Tokenized commodities (gold, silver) and private equity were excluded from yield source mapping because they do not generate yield. Tokenized stocks were capped at partially tokenized because dividend passthrough is not yet automated on-chain.*

*Every inception date in the launch timeline chart was verified against at least one independent source: protocol press releases, on-chain contract deployment timestamps, SEC filings, or financial news coverage. Three assets were removed because their launch dates could not be independently corroborated: PKH2 (a Liquid Network mining note with no public block explorer), BELIF (a Bosera segregated portfolio with limited press coverage), and CFSRS (a recently launched Hong Kong fund with no independent coverage at time of publication). All three remain in the underlying dataset and appear in other charts.*

*Charts that show yield include only yield-bearing assets above $50M. Non-yield stablecoins and appreciation-only assets are excluded entirely. For 29 of 53 yield-bearing assets (88% of yield-bearing value), we report a verified 7-day trailing APY from one of three programmatic sources: [rwa.xyz](https://app.rwa.xyz) on-chain NAV (16 assets), the [DeFiLlama Yields API](https://yields.llama.fi/pools) native staking pools (11 assets), or protocol-specific APIs — [Re protocol](https://api.re.xyz/apy/get-apy) (1 asset) and [Superstate](https://superstate.com/assets/uscc) (1 asset). For 8 additional assets that lack a reliable trailing yield, we display the stated target APY from [rwa.xyz](https://app.rwa.xyz) asset profiles or fund documentation (e.g., Centrifuge IPFS fund fact sheets). These targets are not trailing returns and should not be compared directly to 7-day figures. They appear on charts with distinctly different visual treatment — dimmed with dashed borders — and are labeled as targets in every tooltip. We include them solely to show the yield spectrum that tokenization is reaching for, not to imply equivalence with verified trailing data. The remaining 16 assets have no verified yield from any source in our hierarchy and do not display yield in charts.*

*All aggregate market figures use rwa.xyz distributed values as of March 8, 2026. Stablecoin market capitalization is reported from both rwa.xyz (~$301B) and DeFiLlama (~$313B).*

---

*¹ Franklin Templeton launched FOBXX on Stellar in 2021, but it ran on proprietary infrastructure and was not composable with DeFi.*

*² Goldman Sachs, ["Why AI Companies May Invest More than $500 Billion in 2026,"](https://www.goldmansachs.com/insights/articles/why-ai-companies-may-invest-more-than-500-billion-in-2026) January 2026.*

*³ Apollo Diversified Credit Fund [prospectus](https://www.apollo.com/content/dam/apolloaem/documents/fund-documents/adcf-prospectus.pdf), April 2025. Quarterly repurchase offers at NAV.*

*⁴ Maple Finance, ["syrupUSDC and syrupUSDT: Built for Scale"](https://maple.finance/insights/syrupusdc-and-syrupusdt-built-for-scale); [DeFi strategies documentation](https://docs.maple.finance/technical-resources/strategies/defi-strategies).*

*⁵ USD.ai [documentation](https://docs.usd.ai/); ["USDai Powered by M0"](https://usd.ai/stories/usdai-powered-by-m0); M0 [eligible collateral docs](https://docs.m0.org/).*

*⁶ Circle, ["Circle Announces USDC Smart Contract for Transfers by BlackRock's BUIDL Fund Investors"](https://www.circle.com/pressroom/circle-announces-usdc-smart-contract-for-transfers-by-blackrocks-buidl-fund-investors).*

*⁷ Centrifuge, ["Anemoy Liquidity Network"](https://centrifuge.io/blog/anemoy-liquidity-network).*

*⁸ BlackRock, ["BlackRock Launches Its First Tokenized Fund, BUIDL, on the Ethereum Network,"](https://securitize.io/learn/press/blackrock-launches-first-tokenized-fund-buidl-on-the-ethereum-network) Securitize, March 2024.*

*⁹ [The Block](https://www.theblock.co/post/359687/sky-grove-jaaa-redemption), March 2026; [Grove data dashboard](https://data.grove.finance/assets/JAAA).*

*¹⁰ rwa.xyz on-chain holder data, March 8, 2026. See also [USDtb](https://usdtb.money), [Ondo Finance blog](https://ondo.finance/blog/the-liquidity-advantage-how-ousg-provides-robust-multi-venue-instant-liquidity).*

*¹¹ [Morpho + Coinbase USDC lending](https://morpho.org/blog/morpho-is-now-powering-usdc-lending-on-coinbase/); [Gauntlet on Morpho](https://morpho.org/stories/gauntlet/).*

*¹² [Blockworks](https://blockworks.com/news/coinbase-usdc-onchain) on Coinbase; [Gauntlet](https://www.gauntlet.xyz/resources/gauntlet-brings-sustainable-defi-yield-to-wirex-business-accounts) on Wirex; [The Block](https://www.theblock.co/post/386908/kraken-defi-earn-us-eu-canada-yield-bearing-crypto) on Kraken DeFi Earn.*

*¹³ [DefiLlama Stablecoins](https://defillama.com/stablecoins).*

*¹⁴ rwa.xyz on-chain holder data, March 8, 2026. Ethena USDtb backed by BUIDL per [USDtb](https://usdtb.money); Ondo OUSG per [Ondo Finance](https://ondo.finance/blog/the-liquidity-advantage-how-ousg-provides-robust-multi-venue-instant-liquidity); Sky/Grove per [Sky governance vote](https://vote.sky.money/executive/template-executive-vote-launch-agent-onboarding).*

---

## Disclaimer & Disclosures

**This Content is for Informational Purposes Only.**

Any content included in this report is informational only and not an offer, solicitation, or recommendation to buy or sell securities or pursue any particular investment strategy, and does not constitute the provision of investment advice. Electric Capital Partners, LLC (together with its affiliates, "Electric Capital") does not provide advice of any kind through this report, its website, or social media posts. Information in this report or any posts may not be used or relied upon in evaluating the merits of any investment.

You should consult your own advisers as to business, financial, tax, legal, or other related matters concerning any investment.

Certain information has been obtained from third-party sources, including from portfolio companies of funds managed by Electric Capital. Content is as of the date posted and subject to change without notice.

Electric Capital makes no representations about the enduring accuracy of this information, or its appropriateness for a given scenario.

Electric Capital may have previously held, currently holds, or will in the future hold token or equity interests in one or more of the ecosystems or projects mentioned in this report.

A non-exhaustive list of past and present investments made by vehicles managed by Electric Capital is [available here](https://www.electriccapital.com). Excluded from this list are investments (and certain publicly traded cryptocurrencies or other digital assets) for which the issuer has not provided permission for Electric Capital to disclose publicly. Electric Capital does not short tokens.

Please see [https://electriccapital.com/disclosures](https://electriccapital.com/disclosures) for additional important information.
