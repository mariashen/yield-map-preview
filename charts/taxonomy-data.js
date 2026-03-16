// Auto-generated from AllYieldSources_v2.csv
// 501 yield sources across 6 primitives
// Regenerate: python3 data/generate_taxonomy_tree.py

const TAXONOMY_DATA = {
  "name": "YIELD",
  "description": "Compensation for absorbing uncertainty",
  "level": "root",
  "children": [
    {
      "name": "Lending",
      "level": "primitive",
      "primitive": "lending",
      "description": "Providing capital temporarily with a contractual right of return",
      "children": [
        {
          "name": "Cash & Cash Equivalents",
          "level": "category",
          "children": [
            {
              "name": "Certificates of Deposit (CDs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Certificates of Deposit (Standard, Jumbo, Brokered)",
                  "level": "leaf",
                  "description": "Bank-issued time deposits with fixed terms and rates. Traditional CDs ($500-$10K min), jumbo CDs ($100K+), and brokered CDs (sold through brokerages, sometimes with secondary market liquidity). All FDIC-insured up to $250K per depositor per institution. Yields typically exceed savings accounts in exchange for locking up funds for a set term.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Structured CDs (Callable, Step-Up, Zero-Coupon)",
                  "level": "leaf",
                  "description": "CD variants with non-standard cash flow features. Callable CDs can be redeemed early by the issuer (higher yield for call risk). Step-up CDs increase their coupon rate at set intervals. Zero-coupon CDs are purchased at a discount and pay face value at maturity, with no interim interest payments. All FDIC-insured.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            },
            {
              "name": "Commercial Paper",
              "level": "subcategory",
              "children": [
                {
                  "name": "Asset-Backed Commercial Paper (ABCP)",
                  "level": "leaf",
                  "description": "Short-term notes issued by special-purpose conduits (SPVs) and backed by pools of financial assets -- trade receivables, auto loans, credit card receivables, mortgage loans, or other cash-flow-generating collateral. Unlike unsecured CP, ABCP provides investors with recourse to a segregated asset pool, plus liquidity and credit enhancement facilities provided by sponsoring banks. ABCP was at the center of the 2007--2008 financial crisis when conduits holding mortgage-related assets lost market access.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Banker's Acceptances (BAs)",
                  "level": "leaf",
                  "description": "Short-term debt instruments created when a bank \"accepts\" (guarantees) a time draft drawn on it, typically in connection with international trade transactions. The accepting bank unconditionally promises to pay the face amount at maturity, making BAs a dual-obligation instrument (backed by both the drawer/importer and the accepting bank). BAs are sold at a discount and mature at face value, usually within 30--180 days. Once a niche cornerstone of trade finance, BAs have declined significantly in volume as letters of credit and other trade finance instruments have evolved.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Financial Commercial Paper",
                  "level": "leaf",
                  "description": "Short-term, unsecured promissory notes issued by banks, insurance companies, broker-dealers, and other financial institutions to fund working capital and short-term obligations. Maturities range from 1 to 270 days (most commonly 30--90 days) to avoid SEC registration requirements. Commercial paper is sold at a discount to face value and redeemed at par; the discount represents the investor's return. It is a critical component of institutional short-term funding markets.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-Financial Commercial Paper",
                  "level": "leaf",
                  "description": "Short-term unsecured promissory notes issued by non-financial corporations (industrial, technology, consumer goods, utilities, etc.) to fund seasonal working capital needs, bridge financing, or short-term operational expenses. Structurally identical to financial CP -- sold at a discount, matures in 1--270 days, requires high credit quality. Non-financial CP issuers are typically large, highly rated corporations with predictable cash flows.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Money Market Funds",
              "level": "subcategory",
              "children": [
                {
                  "name": "Government Money Market Funds",
                  "level": "leaf",
                  "description": "Mutual funds that invest at least 99.5% of total assets in cash, U.S. government securities, and/or repurchase agreements collateralized by government securities. These are the safest and most liquid category of money market fund, exempt from liquidity fees and redemption gates under SEC Rule 2a-7 reforms. They are the default sweep vehicle for most brokerage accounts.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Municipal (Tax-Exempt) Money Market Funds",
                  "level": "leaf",
                  "description": "Money market funds that invest in short-term municipal securities -- variable-rate demand notes (VRDNs), tax-exempt commercial paper, municipal bonds with short remaining maturities, and tender option bonds. Income is generally exempt from federal income tax, and sometimes from state and local taxes as well, making these funds attractive to investors in high marginal tax brackets. The tax-equivalent yield can exceed that of taxable alternatives for top-bracket taxpayers.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Prime Money Market Funds",
                  "level": "leaf",
                  "description": "Money market funds that invest in a broader universe including government securities, corporate commercial paper, certificates of deposit, and repurchase agreements. Prime funds typically offer a yield premium of 10--30 bps over government MMFs because they accept modest credit risk. Following 2024 SEC reforms, institutional prime funds moved to a floating NAV (variable, not pegged to $1.00), while retail prime funds retained a stable NAV.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Repurchase Agreements (Repos)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Repurchase Agreements (Overnight & Term)",
                  "level": "leaf",
                  "description": "Short-term collateralized lending where one party sells securities with an agreement to repurchase them. Overnight repos settle next day; term repos extend from days to months. Typically collateralized by Treasuries or agency MBS. Core plumbing of short-term funding markets, closely tracking the federal funds rate.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Reverse Repo & Tri-Party Repo",
                  "level": "leaf",
                  "description": "Reverse repos (lending cash against securities collateral, the mirror of a standard repo) and tri-party repos (a clearing bank intermediates collateral management between counterparties). The Fed ON RRP facility is the largest reverse repo program. Tri-party repo is the dominant settlement mechanism for institutional repo markets.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            }
          ]
        },
        {
          "name": "Corporate Fixed Income",
          "level": "category",
          "children": [
            {
              "name": "Convertible Securities",
              "level": "subcategory",
              "children": [
                {
                  "name": "Contingent Convertible Bonds (CoCos)",
                  "level": "leaf",
                  "description": "Contingent convertible bonds (CoCos) are hybrid debt instruments issued primarily by banks that automatically convert to equity or suffer a principal write-down when the issuer's capital ratio falls below a specified trigger level. Created as a post-2008 regulatory tool under Basel III, CoCos serve as loss-absorbing capital (Additional Tier 1 or Tier 2) that strengthens bank balance sheets during periods of financial stress. They offer high yields to compensate for the unique risk of conversion or write-down upon capital adequacy triggers being breached.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Convertible Bonds",
                  "level": "leaf",
                  "description": "Convertible bonds are corporate bonds that give the holder the right to convert the bond into a predetermined number of shares of the issuer's common stock at a specified conversion price. They offer a \"best of both worlds\" profile: bond-like downside protection through coupon payments and principal repayment, combined with equity-like upside participation if the stock price appreciates significantly. Convertible bonds typically carry lower coupons than comparable non-convertible bonds from the same issuer because of the embedded equity option value.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Exchangeable Bonds",
                  "level": "leaf",
                  "description": "Exchangeable bonds are convertible securities where the holder can exchange the bond for shares of a company different from the issuer, typically shares of a subsidiary, affiliate, or a company in which the issuer holds a strategic stake. They are often used by parent companies or strategic investors seeking to monetize equity holdings in a tax-efficient manner while raising debt capital. The exchange feature functions similarly to a convertible bond's conversion right but references a third-party stock.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mandatory Convertible Securities",
                  "level": "leaf",
                  "description": "Mandatory convertible securities automatically convert into issuer equity at maturity (typically 3 years), regardless of the stock price. Unlike traditional convertibles where conversion is at the holder's option, mandatory convertibles are equity-replacement instruments with a defined conversion schedule. They typically offer significantly higher coupons than common stock dividends to compensate investors for the obligation to accept equity at maturity, but provide limited downside protection below a threshold stock price.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Zero-Coupon Convertible Bonds",
                  "level": "leaf",
                  "description": "Zero-coupon convertible bonds do not pay periodic interest but are instead issued at a deep discount to par value, accreting to par at maturity. They combine the capital appreciation characteristics of zero-coupon bonds with the equity upside potential of convertible bonds. These instruments appeal to growth-oriented issuers who prefer to minimize cash interest expense and to investors seeking leveraged equity exposure with some downside protection through the accreting bond floor.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Floating Rate Instruments",
              "level": "subcategory",
              "children": [
                {
                  "name": "Bank Loans / Leveraged Loans",
                  "level": "leaf",
                  "description": "Bank loans, also known as leveraged loans or syndicated loans, are floating-rate senior secured debt instruments issued by sub-investment-grade companies and originated by banks that syndicate them to institutional investors. They occupy the highest priority in the borrower's capital structure, secured by a first lien on substantially all assets. The floating rate coupon (SOFR plus a spread) and senior secured position make bank loans a cornerstone of many income portfolios, particularly during rising-rate periods.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Senior Secured Loans (First Lien)",
                  "level": "leaf",
                  "description": "Senior secured first-lien loans are the most senior tranche of the leveraged loan capital structure, backed by a first-priority lien on substantially all of the borrower's assets including receivables, inventory, equipment, intellectual property, and equity in subsidiaries. They offer the highest recovery rates in the leveraged loan market, historically averaging 60--75% in default scenarios. First-lien loans are the predominant form of institutional leveraged lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "High Yield / Junk Bonds",
              "level": "subcategory",
              "children": [
                {
                  "name": "CCC-and-Below / Distressed Bonds",
                  "level": "leaf",
                  "description": "Bonds rated CCC+ or below represent the lowest-quality segment of the performing high yield market, often teetering on the edge of default. These issuers typically have very high leverage, weak cash flow coverage, limited financial flexibility, and may be dependent on favorable business conditions to meet their debt obligations. Bonds trading at distressed levels (typically defined as spreads exceeding 1,000 bps or prices below 70 cents on the dollar) may include higher-rated issuers experiencing acute stress.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "PIK (Payment-in-Kind) Bonds",
                  "level": "leaf",
                  "description": "PIK bonds allow the issuer to pay interest by issuing additional bonds rather than cash, effectively capitalizing interest onto the principal. This feature preserves the issuer's cash flow during periods of financial strain or growth investment, but increases the total debt burden over time. PIK bonds are most common in highly leveraged capital structures, particularly those arising from leveraged buyouts, and are viewed as among the most aggressive debt instruments.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Senior Secured High Yield Bonds",
                  "level": "leaf",
                  "description": "Senior secured high yield bonds are the highest-ranking debt in a sub-investment-grade issuer's capital structure, backed by specific collateral such as assets, receivables, or equity pledges in subsidiaries. They offer the best recovery prospects in default, historically averaging 55--70%, making them the most defensive segment of the high yield market. These bonds are common in leveraged buyout financings alongside senior secured bank loans.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Senior Unsecured High Yield Bonds",
                  "level": "leaf",
                  "description": "Senior unsecured high yield bonds are the most common instrument in the junk bond market. They rank above subordinated debt but below secured obligations and are not backed by specific collateral. These bonds finance a wide range of corporate activities including leveraged buyouts, acquisitions, recapitalizations, and general corporate purposes. The senior unsecured HY market is the benchmark for high yield credit and drives major HY index performance.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Subordinated High Yield Bonds",
                  "level": "leaf",
                  "description": "Subordinated high yield bonds rank below senior debt in the capital structure of already sub-investment-grade issuers, creating a double layer of risk: both high yield credit quality and junior structural position. Recovery rates in default are typically very low, averaging 10--25%. These bonds are issued when issuers need to layer additional debt below existing senior obligations, often in highly leveraged capital structures.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Toggle Notes",
                  "level": "leaf",
                  "description": "Toggle notes give the issuer the option to switch between paying interest in cash and paying in kind (additional notes) on each coupon date. Unlike mandatory PIK bonds, toggle notes provide flexibility: the issuer pays cash when able and toggles to PIK when cash preservation is needed. The PIK rate is typically set 50--100 bps higher than the cash-pay rate to compensate investors for accepting non-cash payments. Toggle notes became popular during the 2005--2007 LBO boom.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Investment Grade Corporate Bonds",
              "level": "subcategory",
              "children": [
                {
                  "name": "Callable Bonds",
                  "level": "leaf",
                  "description": "Callable bonds grant the issuer the right to redeem the bonds prior to maturity at a predetermined price, typically at par or a slight premium. This embedded call option benefits the issuer by allowing refinancing when interest rates decline, but exposes investors to reinvestment risk. The majority of investment grade corporate bonds issued today include some form of call provision, most commonly a make-whole call.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Eurobonds",
                  "level": "leaf",
                  "description": "Eurobonds are bonds issued in a currency different from the currency of the country or market in which they are placed, and they are typically not registered with any single national regulator. Despite the name, Eurobonds are not limited to Europe or the euro currency; a USD-denominated bond issued in London by a Japanese company qualifies as a Eurobond. They are a cornerstone of the international capital markets, offering issuers flexibility and investors access to a global credit universe.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Fixed-to-Floating Rate Bonds",
                  "level": "leaf",
                  "description": "Fixed-to-floating rate bonds pay a fixed coupon for an initial period (typically 3--10 years) and then switch to a floating rate, usually benchmarked to SOFR plus a spread, for the remaining life of the bond. These hybrid-rate structures are common among financial institutions issuing regulatory capital instruments and among corporates seeking to match asset-liability profiles. They offer investors a blend of initial yield certainty and subsequent floating-rate exposure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Green Bonds & ESG-Labeled Bonds",
                  "level": "leaf",
                  "description": "Green bonds and ESG-labeled bonds are corporate debt instruments whose proceeds are earmarked for projects with environmental or social benefits, such as renewable energy, clean transportation, sustainable water management, or affordable housing. The bonds carry identical legal standing to conventional bonds from the same issuer but include reporting requirements on the use of proceeds. The market has grown rapidly, exceeding $500 billion in annual issuance globally, driven by investor demand for sustainable investments.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Junior Subordinated Bonds",
                  "level": "leaf",
                  "description": "Junior subordinated bonds sit at the lowest rung of the debt capital structure, just above equity. They are deeply subordinated instruments often issued by financial institutions as Additional Tier 1 (AT1) or legacy Tier 1 capital, or by insurance companies and industrial holding companies. These bonds frequently feature coupon deferral mechanisms, making them quasi-equity instruments with bond-like coupon obligations.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Puttable Bonds",
                  "level": "leaf",
                  "description": "Puttable bonds grant the bondholder the right to sell the bond back to the issuer at par on specified dates prior to maturity. This embedded put option protects investors against rising interest rates and deteriorating credit quality by providing a guaranteed exit at face value. Puttable bonds are less common than callable bonds but are valued by investors seeking downside protection.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Senior Secured Bonds",
                  "level": "leaf",
                  "description": "Senior secured bonds are backed by specific collateral such as property, equipment, receivables, or other identified assets of the issuing company. They occupy the highest priority position in the capital structure, giving bondholders a direct claim on pledged assets in the event of default. Recovery rates on senior secured bonds historically average 50--65%, significantly above unsecured obligations.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Senior Unsecured Bonds",
                  "level": "leaf",
                  "description": "Senior unsecured bonds are the most common form of investment grade corporate debt. They rank above subordinated obligations in the capital structure but are not backed by specific collateral, relying instead on the full faith and creditworthiness of the issuer. These bonds represent the benchmark instrument for corporate credit markets and are the primary vehicle through which large-cap companies access the debt capital markets.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Subordinated Bonds",
                  "level": "leaf",
                  "description": "Subordinated bonds rank below senior debt in the issuer's capital structure, meaning holders are repaid only after all senior obligations are satisfied in a default or liquidation. They are commonly issued by financial institutions to meet regulatory capital requirements (Tier 2 capital) and by industrial companies seeking to optimize their capital structure. The junior ranking translates to lower recovery rates, typically 20--40%, compensated by higher coupon rates.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Specialty Corporate Bonds",
              "level": "subcategory",
              "children": [
                {
                  "name": "Dual-Currency Bonds",
                  "level": "leaf",
                  "description": "Bonds that pay coupons in one currency and principal in another (e.g., coupon in USD, principal repaid in JPY). The embedded FX option generates a yield premium over comparable single-currency bonds from the same issuer. Most common in Japanese and Swiss markets where issuers exploit investor appetite for higher-yielding foreign currency coupons.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Inflation-Linked Corporate Bonds",
                  "level": "leaf",
                  "description": "Corporate bonds with principal or coupon indexed to a consumer price index (CPI). Rare in the US but more common in the UK, where corporates have issued inflation-linked debt to match pension fund liabilities. Combines corporate credit spread with inflation protection, offering a \"real yield\" above the risk-free real rate.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Exotic & Alternative Assets",
          "level": "category",
          "children": [
            {
              "name": "Art & Collectibles Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Art-Secured Lending",
                  "level": "leaf",
                  "description": "Providing loans collateralized by fine art collections. Borrowers (collectors, estates, galleries, dealers) pledge artwork as collateral to access liquidity without selling. Loan-to-value ratios typically 50\u201360% of appraised value.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Classic Car Finance",
                  "level": "leaf",
                  "description": "Investing in or lending against classic, vintage, and exotic automobiles. Returns come from price appreciation on owned vehicles or interest income on car-secured loans. The collector car market tracks wealth creation among ultra-HNW individuals.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Consumer & Platform Lending",
              "level": "subcategory",
              "children": [
                {
                  "name": "BNPL (Buy Now, Pay Later) Receivables",
                  "level": "leaf",
                  "description": "Investing in the receivables generated by BNPL platforms (Affirm, Klarna, Afterpay/Block, Zip) \u2014 short-term consumer installment loans typically for retail purchases. Merchants pay BNPL providers 3\u20138% of transaction value; consumers pay in 4 installments (often interest-free) or longer-term installment loans.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cell Phone Financing Receivables",
                  "level": "leaf",
                  "description": "Investing in the installment payment receivables from cell phone purchases. Carriers (AT&T, Verizon, T-Mobile) and manufacturers (Apple) offer 24\u201336 month installment plans for device purchases, creating large portfolios of consumer receivables.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Peer-to-Peer (P2P) Lending",
                  "level": "leaf",
                  "description": "Online platforms that match individual borrowers with individual or institutional lenders, bypassing traditional bank intermediation. Lenders select loans by risk grade and earn interest as borrowers repay. The P2P model has largely evolved toward institutional funding.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Rent-to-Own",
                  "level": "leaf",
                  "description": "Rent-to-own (RTO) companies lease furniture, appliances, electronics, and other consumer goods to customers who make weekly or monthly payments and can eventually own the item. The total cost to the consumer is significantly higher than retail price.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "SaaS Revenue-Based Financing",
                  "level": "leaf",
                  "description": "Providing capital to SaaS (Software as a Service) companies in exchange for a fixed percentage of monthly recurring revenue (MRR) until a predetermined return cap is reached. This is a hybrid between debt and equity that aligns repayment with business performance.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Life Science & Pharma",
              "level": "subcategory",
              "children": [
                {
                  "name": "Clinical Trial Financing",
                  "level": "leaf",
                  "description": "Funding clinical trials for pharmaceutical and biotech companies, structured as debt with royalty kickers or as direct revenue-participation in the drug being tested. This is high-risk investment tied to trial outcomes.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Medical Device Financing",
                  "level": "leaf",
                  "description": "Providing debt or lease financing for medical devices \u2014 surgical robots (da Vinci), imaging equipment, cardiac devices, orthopedic implants, and diagnostic instruments. Returns come from interest/lease payments plus potential equity kickers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Litigation Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Arbitration Financing (Domestic & International)",
                  "level": "leaf",
                  "description": "Funding international or domestic arbitration proceedings, particularly investor-state disputes (ISDS) where companies sue sovereign governments under bilateral investment treaties. These disputes involve large sums and specialized arbitral tribunals.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Commercial & Patent Litigation Funding",
                  "level": "leaf",
                  "description": "Investors provide capital to businesses or law firms to fund commercial lawsuits (breach of contract, antitrust, IP disputes) in exchange for a share of the settlement or judgment. The funder has no recourse if the case loses \u2014 it is a non-recourse investment tied to case outcome.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Consumer Litigation Funding",
                  "level": "leaf",
                  "description": "Pre-settlement funding to individual plaintiffs (typically personal injury, workers' comp, employment discrimination) who need cash before their case resolves. These are small-dollar advances ($1K\u2013$100K) secured by the anticipated settlement.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Judgment Enforcement",
                  "level": "leaf",
                  "description": "Purchasing existing court judgments at a discount and then pursuing collection from the judgment debtor. Investors acquire the legal right to collect and employ specialized enforcement techniques (asset discovery, garnishment, liens).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Law Firm Lending",
                  "level": "leaf",
                  "description": "Providing credit facilities to law firms secured by their expected fee income (contingency fees, billable hour receivables). Loans fund operating expenses while the firm awaits case resolutions and fee collections.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mass Tort Portfolios",
                  "level": "leaf",
                  "description": "Funding portfolios of mass tort claims (pharmaceutical injury, environmental contamination, product liability) where thousands of similar individual claims are aggregated. Investors fund the litigation costs in exchange for a percentage of aggregate settlements.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Niche Receivables & Assets",
              "level": "subcategory",
              "children": [
                {
                  "name": "Class Action Claims Recovery",
                  "level": "leaf",
                  "description": "Systematically filing claims in securities class action settlements on behalf of institutional investors who are class members but haven't filed. The class action has already settled \u2014 this is pure claims recovery of money the investor is already owed. The service provider takes a percentage of recovered funds.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Lottery Prize Receivables",
                  "level": "leaf",
                  "description": "Purchasing the future annual payment rights from lottery winners who have won annuitized prizes. Winners sell their remaining payments at a discount for immediate lump-sum liquidity. The investor receives guaranteed government-backed payment streams over the remaining annuity term (often 15\u201325 years).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Sports Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Athlete Contract Financing",
                  "level": "leaf",
                  "description": "Providing advances to professional athletes against their guaranteed future contract earnings. Athletes receive upfront liquidity while investors collect the discounted cash flow from future salary payments.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "NIL (Name, Image, Likeness) Deals",
                  "level": "leaf",
                  "description": "Financing NIL deals for college athletes \u2014 providing capital to collectives, brands, or athletes themselves in exchange for a share of NIL revenue. Since the NCAA's 2021 policy change, college athletes can monetize their personal brands.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Stadium & Arena Financing",
                  "level": "leaf",
                  "description": "Investing in the debt or revenue bonds used to finance construction and renovation of professional sports stadiums and arenas. Revenue sources include naming rights, premium seating/suites, concessions, and event revenue.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Government & Sovereign Fixed Income",
          "level": "category",
          "children": [
            {
              "name": "Developed Market Sovereign Debt",
              "level": "subcategory",
              "children": [
                {
                  "name": "Australian Government Bonds (AGBs)",
                  "level": "leaf",
                  "description": "Australian Government Bonds are issued by the Commonwealth of Australia through the Australian Office of Financial Management (AOFM). Australia has maintained a AAA credit rating and benefits from strong institutions, a resource-rich economy, and compulsory superannuation (retirement savings) system that generates consistent domestic demand for bonds. AGBs are issued with maturities of 2 to 30 years and include both nominal and inflation-linked (Treasury Indexed Bonds) varieties.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Canadian Government Bonds",
                  "level": "leaf",
                  "description": "Canadian government bonds are issued by the Government of Canada through the Bank of Canada, denominated in Canadian dollars. Canada's sovereign credit is rated AAA by major rating agencies, reflecting strong institutions, fiscal discipline, and resource-rich economy. The market includes treasury bills (3-month, 6-month, 12-month), benchmark bonds (2, 3, 5, 10, 30 years), and Real Return Bonds (inflation-linked). Canada's government bond market is smaller than the US, UK, or eurozone markets but is well-established and liquid.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Core European Sovereign Bonds (Bunds, OATs, Swiss)",
                  "level": "leaf",
                  "description": "German government bonds are the benchmark risk-free asset for the eurozone. The term \"Bund\" technically refers to the 10-year and 30-year maturities, \"Bobl\" to the 5-year, and \"Schatz\" to the 2-year, though \"Bunds\" is colloquially used for all German government bonds. Issued by the Federal Republic of Germany through the Bundesrepublik Deutschland Finanzagentur (German Finance Agency), these bonds benefit from Germany's AAA credit rating, the eurozone's largest economy, and strong fiscal discipline (the constitutionally enshrined \"debt brake\").",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Japanese Government Bonds (JGBs)",
                  "level": "leaf",
                  "description": "JGBs are debt securities issued by the Government of Japan, denominated in Japanese yen. Japan has the largest government debt-to-GDP ratio among developed nations (approximately 250%+), yet JGB yields have remained extraordinarily low for decades due to massive domestic savings, Bank of Japan (BOJ) purchases, and persistent deflationary/low-inflation pressures. JGBs are issued with maturities of 2, 5, 10, 20, 30, and 40 years, as well as discount bills (T-Bills).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-US Inflation-Linked Sovereign Bonds (Linkers, OATi, BTPei)",
                  "level": "leaf",
                  "description": "UK index-linked gilts are government bonds whose principal and coupon payments are adjusted for inflation as measured by the UK Retail Price Index (RPI) (or CPIH for newer issuances). \"Linkers\" were first issued in 1981 and the UK has one of the largest and most established inflation-linked government bond markets in the world. UK pension funds and insurance companies are major buyers because their liabilities are inflation-linked, creating strong structural demand for linkers, particularly at long maturities.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Nordic Government Bonds (Denmark, Sweden, Norway, Finland)",
                  "level": "leaf",
                  "description": "Nordic government bonds are issued by the governments of Denmark, Sweden, Norway, and Finland. These countries are among the highest-rated sovereigns globally, with strong institutions, fiscal discipline, and wealthy, well-educated populations. Denmark, Sweden, and Norway issue bonds in their domestic currencies (DKK, SEK, NOK), while Finland, as a eurozone member, issues in euros. Norway's Government Pension Fund Global (the world's largest sovereign wealth fund) gives Norway unique fiscal flexibility.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Peripheral European Sovereign Bonds (BTPs, Bonos)",
                  "level": "leaf",
                  "description": "Buoni del Tesoro Poliennali (BTPs) are medium- and long-term fixed-rate bonds issued by the Italian Republic through the Italian Treasury. Italy has the largest government debt market in the eurozone by outstanding amount (approximately EUR 2.8 trillion) and a debt-to-GDP ratio of approximately 140%. BTPs trade at a significant spread over German Bunds, reflecting Italy's higher fiscal risk, lower growth, and periodic political instability. Despite these risks, BTPs have never defaulted and benefit from ECB backstop mechanisms.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "United Kingdom Government Bonds (Gilts)",
                  "level": "leaf",
                  "description": "Gilts are bonds issued by the UK government through HM Treasury and the UK Debt Management Office (DMO). The name derives from the historical practice of issuing certificates with gilt (gold) edges. Conventional gilts pay a semiannual coupon and return par at maturity, with maturities ranging from 2 to 50+ years. The UK gilt market is the oldest continuous government bond market in the world, with origins dating to the late 17th century.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Supranational Debt",
              "level": "subcategory",
              "children": [
                {
                  "name": "Asian Development Bank (ADB)",
                  "level": "leaf",
                  "description": "The ADB is a multilateral development bank headquartered in Manila, Philippines, focused on promoting economic and social development in the Asia-Pacific region. Owned by 68 member governments (including the US, Japan, China, Australia, and India), the ADB raises approximately $25--35 billion annually in global capital markets. Its AAA credit rating reflects strong shareholder support (Japan and the US are the largest shareholders), preferred creditor status, and prudent financial management.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "European Bank for Reconstruction and Development (EBRD)",
                  "level": "leaf",
                  "description": "The EBRD was established in 1991 to support the transition to market economies in Central and Eastern Europe, and has since expanded its mandate to include Central Asia, the Middle East, and North Africa. Owned by 73 countries plus the EU and the EIB, the EBRD raises approximately $10--15 billion annually in global capital markets. Its AAA credit rating reflects strong shareholder support (major shareholders include the US, UK, Japan, France, Germany, and Italy), preferred creditor status, and conservative financial policies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "European Investment Bank (EIB)",
                  "level": "leaf",
                  "description": "The EIB is the lending arm of the European Union, owned by the 27 EU member states. It is the largest supranational borrower in the world, raising approximately EUR 50--60 billion annually to finance EU policy objectives including infrastructure, climate action, innovation, and SME lending. The EIB's AAA credit rating reflects its sovereign shareholder support, preferred creditor status, and strong capital adequacy. EIB bonds are a cornerstone of the European fixed-income market.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Inter-American Development Bank (IADB / IDB)",
                  "level": "leaf",
                  "description": "The IADB is the largest source of development financing for Latin America and the Caribbean, headquartered in Washington, D.C. Owned by 48 member countries (including the US, which holds approximately 30% of voting power), the IADB raises approximately $15--25 billion annually in global capital markets. Its AAA credit rating is supported by strong US backing, preferred creditor status, and a well-capitalized balance sheet. IADB bonds are a significant component of the supranational fixed-income market.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "International Bank for Reconstruction and Development (World Bank / IBRD)",
                  "level": "leaf",
                  "description": "The World Bank (IBRD arm) is the largest and most prominent supranational issuer, raising approximately $40--50 billion annually in global capital markets across more than 20 currencies. IBRD bonds fund development projects in middle-income and creditworthy low-income countries. The World Bank's AAA credit rating is supported by its preferred creditor status (borrowers prioritize World Bank repayments), callable capital from member governments (including the US, Japan, Germany, and other wealthy nations), and conservative lending policies with substantial equity cushion.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "US Government Agency Debt",
              "level": "subcategory",
              "children": [
                {
                  "name": "Federal Farm Credit Banks (FFCB)",
                  "level": "leaf",
                  "description": "The Farm Credit System is a nationwide network of borrower-owned cooperative lending institutions that provides credit to farmers, ranchers, rural homeowners, agricultural cooperatives, and rural utilities. The Federal Farm Credit Banks Funding Corporation issues consolidated systemwide debt securities on behalf of the system's banks. Like FHLB debt, Farm Credit securities carry an implicit (not explicit) government guarantee and trade at a modest spread over Treasuries.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Federal Home Loan Banks (FHLB)",
                  "level": "leaf",
                  "description": "The Federal Home Loan Bank System consists of 11 regional cooperative banks that provide liquidity to member financial institutions (commercial banks, credit unions, insurance companies, CDFIs) through secured advances collateralized primarily by residential mortgages. FHLBs are among the largest issuers of agency debt in the world, issuing discount notes, consolidated bonds, callable bonds, floating-rate bonds, and structured notes. FHLB debt is the joint obligation of all 11 FHLBs.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Federal Home Loan Mortgage Corporation (FHLMC / Freddie Mac)",
                  "level": "leaf",
                  "description": "FHLMC is a GSE chartered by Congress with a mission virtually identical to Fannie Mae: supporting the secondary mortgage market by purchasing and securitizing conforming residential mortgages. Freddie Mac issues MBS (Participation Certificates and structured products) and unsecured debt (reference notes, discount notes, medium-term notes). Like FNMA, FHLMC has been under FHFA conservatorship since September 2008 and carries an implicit government guarantee.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Federal National Mortgage Association (FNMA / Fannie Mae)",
                  "level": "leaf",
                  "description": "FNMA is a government-sponsored enterprise (GSE) that was chartered by Congress to support the secondary mortgage market by purchasing and securitizing conforming residential mortgages. Fannie Mae issues both MBS (pass-throughs and REMICs) and unsecured corporate debt (benchmark notes, discount notes, callable bonds). While placed under government conservatorship in September 2008, FNMA debt carries only an implicit government guarantee -- not an explicit one.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Government National Mortgage Association (GNMA / Ginnie Mae)",
                  "level": "leaf",
                  "description": "GNMA is a wholly owned US government corporation within the Department of Housing and Urban Development (HUD). Unlike other agencies, GNMA securities carry the explicit full faith and credit guarantee of the US government, making them the only mortgage-backed securities with a direct government guarantee. GNMA guarantees the timely payment of principal and interest on MBS pools composed of FHA, VA, USDA, and PIH loans.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Tennessee Valley Authority (TVA)",
                  "level": "leaf",
                  "description": "The Tennessee Valley Authority is a federally owned corporation and the largest public power company in the United States, providing electricity to 10 million people across seven southeastern states. TVA issues bonds and notes to finance its power generation infrastructure (nuclear, coal, gas, hydro, solar). Unlike GSE debt, TVA securities are direct obligations of a federal corporation, though they are not backed by the full faith and credit of the US government. TVA has specific Congressional authorization for its debt program.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "US Municipal Bonds",
              "level": "subcategory",
              "children": [
                {
                  "name": "Airport Revenue Bonds",
                  "level": "leaf",
                  "description": "Airport revenue bonds are secured by revenues generated from airport operations, including airline rates and charges, terminal rents, landing fees, parking, concessions, and passenger facility charges (PFCs). Major hub airports are considered strong credits due to their essential nature, enplanement growth trends, and the contractual structures (use-and-lease agreements) that govern how costs are allocated to airlines. The COVID-19 pandemic severely tested airport credits but most recovered strongly.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Build America Bonds (BABs)",
                  "level": "leaf",
                  "description": "Build America Bonds were taxable municipal bonds issued under a temporary federal subsidy program created by the American Recovery and Reinvestment Act of 2009 (ARRA). BABs were designed to lower borrowing costs for state and local governments during the financial crisis by providing either a direct federal subsidy (35% of interest costs paid directly to the issuer -- \"Direct Pay BABs\") or a tax credit to the bondholder (\"Tax Credit BABs\"). The program expired on December 31, 2010, and no new BABs have been issued since.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Education Revenue Bonds (Higher Education)",
                  "level": "leaf",
                  "description": "Education revenue bonds are issued by public and private universities, colleges, and community colleges to finance dormitories, academic buildings, research facilities, student centers, and other campus infrastructure. Public university bonds may be secured by tuition revenues, auxiliary enterprise revenues (housing, dining, parking), state appropriations, or a combination. Private university bonds are typically secured by a general obligation of the institution, supported by tuition, endowment income, gifts, and auxiliary revenues.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "General Obligation Bonds (GO Bonds)",
                  "level": "leaf",
                  "description": "General obligation bonds are secured by the full faith, credit, and taxing power of the issuing government entity (state, county, city, school district). GO bonds are backed by the issuer's ability to levy taxes -- typically property taxes, but also income taxes, sales taxes, or a combination -- without limitation as to rate or amount (unlimited tax GO) or up to a specified limit (limited tax GO). They are considered the strongest credit structure in the municipal market.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Hospital / Healthcare Revenue Bonds",
                  "level": "leaf",
                  "description": "Hospital revenue bonds are secured by the net revenues of not-for-profit hospital systems, academic medical centers, and healthcare networks. These bonds finance construction, expansion, and equipment for healthcare facilities. The credit analysis is complex, focusing on patient volume, payer mix (Medicare/Medicaid vs. commercial insurance), operating margins, physician recruitment, competition, and regulatory environment. Hospital bonds have historically had higher default rates than other major muni revenue bond categories.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Housing Revenue Bonds",
                  "level": "leaf",
                  "description": "Housing revenue bonds are issued by state and local housing finance agencies (HFAs) to finance below-market-rate mortgage loans for first-time homebuyers and to fund the development of affordable multifamily rental housing. Single-family housing bonds are secured by pools of mortgage loans (often FHA-insured or VA-guaranteed) and funded by tax-exempt bond proceeds. Multifamily housing bonds are secured by mortgage loans on specific affordable housing projects, often with credit enhancement from FHA mortgage insurance, Fannie Mae/Freddie Mac guarantees, or the LIHTC (Low-Income Housing Tax Credit) program.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Industrial Development Revenue Bonds (IDRBs / Conduit Bonds)",
                  "level": "leaf",
                  "description": "Industrial development bonds (also called conduit bonds) are issued by a state or local government authority on behalf of a private-sector borrower, typically to finance manufacturing facilities, warehouses, and other economic development projects. The government entity serves as a conduit -- it issues the bonds but has no obligation to repay them. Debt service is the sole responsibility of the private borrower. The bonds benefit from tax-exempt interest (up to limits) because they serve a public purpose (job creation, economic development).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pre-Refunded Municipal Bonds",
                  "level": "leaf",
                  "description": "Pre-refunded (or \"escrowed to maturity\") bonds are outstanding municipal bonds whose scheduled debt service has been fully secured by a portfolio of US Treasury securities or agency obligations held in an irrevocable escrow account. The issuer has effectively defeased the original bonds by setting aside sufficient funds to make all remaining interest and principal payments, regardless of the issuer's future financial condition. Pre-refunded bonds are considered among the safest securities in the muni market.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Private Activity Bonds (PABs)",
                  "level": "leaf",
                  "description": "Private activity bonds are a broad category of tax-exempt municipal bonds where the proceeds are used for a project with significant private business use. To qualify for tax-exempt status, the bond must finance a specific \"qualified\" purpose defined by the Internal Revenue Code, including airports, docks, mass commuting facilities, water/sewer, solid waste disposal, qualified residential rental projects, student loans, and certain manufacturing facilities. PABs that do not qualify for a specific exemption are taxable.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Stadium & Arena Revenue Bonds",
                  "level": "leaf",
                  "description": "Stadium and arena bonds finance the construction or renovation of professional sports venues, convention centers, and major entertainment complexes. They are typically secured by a combination of dedicated tax revenues (hotel/motel taxes, car rental taxes, sales taxes in a defined district), facility revenues (naming rights, luxury suite premiums, concessions, parking), and sometimes team lease payments. These bonds are often politically contentious due to the public subsidy of private sports franchises.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Taxable Municipal Bonds",
                  "level": "leaf",
                  "description": "Taxable municipal bonds are issued by state and local governments but do not qualify for federal tax exemption, either because the use of proceeds does not meet IRS requirements for tax-exempt status or because the issuer chooses to issue on a taxable basis to avoid tax-law restrictions (e.g., private use limitations, advance refunding restrictions post-TCJA). Taxable munis compete directly with corporate bonds and Treasuries for investor capital and appeal to investors who cannot benefit from tax exemption (pension funds, foreign investors, endowments).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Tobacco Settlement Revenue Bonds",
                  "level": "leaf",
                  "description": "Tobacco settlement bonds are secured by the payments that participating tobacco manufacturers are required to make to settling states under the 1998 Master Settlement Agreement (MSA). States and territories that were parties to the MSA have securitized their future MSA payment streams by creating special-purpose entities that issue bonds backed by these payments. The credit depends on cigarette consumption volumes (since MSA payments are tied to the number of cigarettes shipped) and the financial health of the tobacco industry.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Toll Road / Transportation Revenue Bonds",
                  "level": "leaf",
                  "description": "Toll road revenue bonds are secured by toll collections from highways, bridges, tunnels, and turnpikes. The credit depends on traffic volume and toll rates, which are influenced by economic activity, fuel prices, land-use patterns, and competition from free alternative routes. Some toll credits also receive tax revenue supplements. These bonds finance critical transportation infrastructure and can carry maturities of 30--40 years to match the long useful life of the assets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Water & Sewer Revenue Bonds",
                  "level": "leaf",
                  "description": "Water and sewer revenue bonds are secured by the net revenues of a municipal water supply, wastewater treatment, or combined water/sewer utility system. These are among the most creditworthy revenue bonds because water and sewer services are essential, demand is highly inelastic, and the utility typically has rate-setting autonomy through a local governing board. Revenue bond security structures typically include rate covenants, additional bonds tests, and debt service reserve funds.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "US Treasury Securities",
              "level": "subcategory",
              "children": [
                {
                  "name": "Floating Rate Notes (FRNs)",
                  "level": "leaf",
                  "description": "Treasury FRNs are 2-year maturity securities with a coupon that resets weekly based on the most recent 13-week T-Bill auction high rate plus a fixed spread determined at issuance. Introduced in January 2014, they are the only floating-rate instrument issued by the US Treasury. FRNs are designed to provide investors with near-zero interest rate risk while maintaining the credit quality of a direct Treasury obligation.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Separate Trading of Registered Interest and Principal of Securities (STRIPS)",
                  "level": "leaf",
                  "description": "STRIPS are zero-coupon securities created by \"stripping\" the coupon payments and principal payment of an eligible Treasury note or bond into separate, individually tradeable securities. Each stripped component becomes a standalone zero-coupon bond that is purchased at a discount and pays face value at its specific maturity date. STRIPS are not directly issued by the Treasury but are created by financial institutions from eligible T-Notes and T-Bonds.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Series EE Savings Bonds",
                  "level": "leaf",
                  "description": "Series EE Savings Bonds are non-marketable, fixed-rate savings bonds issued by the US Treasury. They earn a fixed rate of interest set at the time of purchase, compounded semiannually. EE Bonds have a unique feature: if held for 20 years, the Treasury guarantees the bond will double in value (equivalent to a minimum 3.5% annualized return), regardless of the stated fixed rate. They mature at 30 years.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Series I Savings Bonds (I-Bonds)",
                  "level": "leaf",
                  "description": "I-Bonds are non-marketable, inflation-indexed savings bonds issued by the US Treasury. Their composite rate consists of a fixed rate (set at issuance, constant for the life of the bond) plus a variable semiannual inflation rate based on CPI-U changes. I-Bonds accrue interest for up to 30 years and can be redeemed after 12 months (with a 3-month interest penalty if redeemed before 5 years).",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Treasury Bills (T-Bills)",
                  "level": "leaf",
                  "description": "T-Bills are short-term discount securities issued by the US Treasury with maturities of 4, 8, 13, 17, 26, and 52 weeks. They are sold at a discount to par and pay no periodic coupon; the investor's return is the difference between the purchase price and the face value received at maturity. T-Bills are the primary instrument for government cash management and serve as the benchmark short-term risk-free rate.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Treasury Bonds (T-Bonds)",
                  "level": "leaf",
                  "description": "T-Bonds are long-term coupon-bearing securities issued by the US Treasury with a 20-year or 30-year maturity. They pay a fixed semiannual coupon and return par at maturity. The 30-year bond (the \"long bond\") is the longest-duration sovereign benchmark in the US and is closely watched as a barometer of long-term inflation expectations and term premium.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Treasury Inflation-Protected Securities (TIPS)",
                  "level": "leaf",
                  "description": "TIPS are inflation-indexed securities issued by the US Treasury with maturities of 5, 10, and 30 years. The principal is adjusted daily based on the Consumer Price Index for All Urban Consumers (CPI-U), and the fixed coupon rate is applied to the adjusted principal, so both coupon payments and the final redemption value increase with inflation. TIPS provide a direct, government-guaranteed real return.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Treasury Notes (T-Notes)",
                  "level": "leaf",
                  "description": "T-Notes are intermediate-term coupon-bearing securities issued by the US Treasury with maturities of 2, 3, 5, 7, and 10 years. They pay a fixed coupon semiannually and return par at maturity. The 10-year T-Note yield is the single most widely referenced interest rate in global finance, serving as the benchmark for mortgage rates, corporate bond pricing, and general economic sentiment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Infrastructure & Project Finance",
          "level": "category",
          "children": [
            {
              "name": "Infrastructure Debt",
              "level": "subcategory",
              "children": [
                {
                  "name": "Digital Infrastructure: Fiber, Data Centers, Towers",
                  "level": "leaf",
                  "description": "Digital infrastructure debt finances the construction and expansion of fiber-optic networks, hyperscale and colocation data centers, and wireless communication towers. Revenue is generated through long-term leases, capacity contracts, and managed service agreements with telecommunications carriers, cloud providers, and enterprise customers. This is one of the fastest-growing infrastructure subsectors, driven by surging data consumption, 5G deployment, cloud migration, and AI compute demand, but it carries higher technology obsolescence risk than traditional infrastructure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Export Credit Agency Debt",
                  "level": "leaf",
                  "description": "Export credit agency (ECA) debt involves loans or bonds that benefit from guarantees, insurance, or direct lending by government-backed export credit agencies---such as the U.S. Export-Import Bank (Ex-Im Bank), UK Export Finance (UKEF), Euler Hermes (Germany), or JBIC (Japan)---which support their domestic exporters by facilitating financing for foreign buyers of their goods and services. In infrastructure, ECA-backed debt finances the purchase of equipment and services from the guaranteeing country's exporters for major projects (e.g., aircraft for airlines, turbines for power plants, rolling stock for railways). The ECA guarantee substantially reduces credit risk, providing quasi-sovereign credit enhancement.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pipeline Project Finance",
                  "level": "leaf",
                  "description": "Pipeline project finance provides debt funding for the construction and operation of natural gas, crude oil, refined product, and natural gas liquids (NGL) pipelines, along with associated compression stations and metering facilities. Revenue is generated through capacity reservation charges (demand charges) under long-term transportation agreements and throughput-based (commodity) charges. Pipelines function as natural monopolies within their corridors, and many operate under cost-of-service regulatory frameworks or long-term ship-or-pay contracts that provide high revenue visibility.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Port Authority Bonds",
                  "level": "leaf",
                  "description": "Port authority bonds finance the construction and improvement of maritime port facilities, container terminals, intermodal logistics hubs, and related transportation infrastructure. Revenue is derived from docking fees, wharfage charges, container handling fees, lease payments from terminal operators, and ancillary revenue from warehousing and industrial properties. Ports serve as critical nodes in global supply chains, providing essential-service characteristics that support credit quality.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Power Generation Project Finance",
                  "level": "leaf",
                  "description": "Power generation project finance involves non-recourse or limited-recourse lending to individual power plants or portfolios of generation assets---natural gas combined-cycle plants, coal facilities, nuclear stations, or large-scale renewable installations. Repayment depends on the project's ability to generate revenue through power purchase agreements (PPAs), capacity market payments, or merchant electricity sales. These financings are structured to isolate the project's credit from its sponsors, with lenders relying on contracted cash flows and asset value for security.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Rail Infrastructure",
                  "level": "leaf",
                  "description": "Rail infrastructure debt finances the construction, acquisition, and maintenance of railroad track, signaling systems, terminals, rolling stock, and intermodal facilities. Revenue derives from track access charges, freight hauling contracts, passenger fare revenue (for passenger rail), and government operating subsidies. Freight railroads in North America operate as private enterprises with strong market positions, while passenger rail systems are typically government-owned or subsidized. Rail infrastructure debt benefits from the cost advantages of rail transport over trucking for long-haul bulk commodities and intermodal containers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Social Impact Bonds / Pay-for-Success Contracts",
                  "level": "leaf",
                  "description": "Outcomes-based contracts where private investors fund social programs (recidivism reduction, homelessness prevention, early childhood education, workforce development) and the government repays capital with a return only if pre-defined social outcomes are achieved. A niche but growing market (~$500M+ deployed globally).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Social Infrastructure: Hospitals, Schools, Prisons, Courthouses",
                  "level": "leaf",
                  "description": "Social infrastructure debt finances the construction and operation of public-service buildings including hospitals, schools, universities, correctional facilities, courthouses, and government offices. Revenue sources vary: hospital bonds are backed by patient revenue and insurance reimbursements; school bonds by tax levies or state aid; and correctional/courthouse facilities by government availability payments or appropriations. These assets serve essential public functions but may lack the self-sustaining revenue generation of economic infrastructure like toll roads or utilities.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Sustainability-Linked Bonds (SLBs)",
                  "level": "leaf",
                  "description": "Sustainability-linked bonds (SLBs) are general-purpose corporate bonds whose financial characteristics---typically the coupon rate---are tied to the issuer's achievement of predefined sustainability performance targets (SPTs) measured by key performance indicators (KPIs). Unlike green bonds, SLB proceeds are not restricted to specific projects; instead, the entire issuer is incentivized to meet sustainability goals (e.g., reducing Scope 1+2 greenhouse gas emissions by 30% by 2030). If the issuer fails to meet its SPT by the observation date, the coupon rate steps up by a predetermined amount (typically 25 basis points), creating a financial penalty for underperformance.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Toll Road Debt",
                  "level": "leaf",
                  "description": "Toll road debt comprises bonds or loans issued to finance the construction, expansion, or acquisition of toll highways, bridges, and tunnels. Revenue is generated from user tolls, which may be subject to rate-setting by a regulatory authority or governed by a concession agreement. These instruments are often structured as revenue bonds in the municipal market or as project finance loans in the private market, with repayment tied directly to traffic volumes and toll rates.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Water/Wastewater Utility Debt",
                  "level": "leaf",
                  "description": "Water and wastewater utility debt finances the construction, expansion, and maintenance of drinking water treatment plants, distribution systems, wastewater collection networks, and sewage treatment facilities. These bonds are typically issued by municipal water authorities or special districts and are backed by water/sewer user charges, connection fees, and sometimes ad valorem tax pledges. Water utilities provide the most essential of all infrastructure services, supporting exceptionally strong credit fundamentals and low historical default rates.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Private Credit & Direct Lending",
          "level": "category",
          "children": [
            {
              "name": "Crowdfunding",
              "level": "subcategory",
              "children": [
                {
                  "name": "Debt Crowdfunding",
                  "level": "leaf",
                  "description": "Debt crowdfunding allows businesses to raise capital by issuing promissory notes or bond-like instruments to a crowd of investors, typically through online platforms. The borrower pays a fixed interest rate and repays principal according to a defined schedule (monthly payments, balloon payments, or interest-only with principal at maturity). This is conceptually similar to traditional bond issuance but at a smaller scale ($50K-$5M raises) and accessible to non-accredited investors through Reg CF or Reg A+ frameworks.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Regulation A+ Offerings",
                  "level": "leaf",
                  "description": "Regulation A+ (Tier 2) allows companies to raise up to $75 million from both accredited and non-accredited investors with reduced (but still meaningful) SEC disclosure requirements. Reg A+ debt offerings and income-focused equity offerings (e.g., REITs, lending platforms) represent a yield source for retail investors seeking access to alternative credit and real estate debt. Issuers must file an offering circular with the SEC (Form 1-A) and provide audited financial statements and semi-annual reporting. Reg A+ securities are technically \"public\" offerings and may be freely tradable upon issuance.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Regulation CF Offerings",
                  "level": "leaf",
                  "description": "Regulation Crowdfunding (Reg CF) allows companies to raise up to $5 million per year through SEC-registered funding portals. While most Reg CF offerings are equity (common stock, SAFEs), a meaningful subset are yield-focused: promissory notes, revenue-share agreements, and other income-generating instruments issued by small businesses, real estate operators, and specialty lenders. The Reg CF framework democratizes access to alternative lending and income investments, allowing non-accredited investors to participate with low minimums.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Regulation D 506(c) Platforms",
                  "level": "leaf",
                  "description": "Regulation D Rule 506(c) allows issuers to raise unlimited capital from accredited investors only, with general solicitation (public advertising) permitted. This exemption is the backbone of most online alternative investment platforms offering debt, preferred equity, and structured income products to accredited investors. Unlike 506(b) (which prohibits general solicitation but allows up to 35 non-accredited investors), 506(c) requires the issuer to take \"reasonable steps\" to verify that all investors are accredited. Yield-focused 506(c) offerings span real estate debt, business lending, litigation finance, music royalties, and other alternative credit.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Revenue-Share Crowdfunding",
                  "level": "leaf",
                  "description": "Revenue-share crowdfunding allows investors to provide capital to a business in exchange for a percentage of the business's future gross or net revenue until a specified return multiple is reached (e.g., invest $10,000 and receive 2% of monthly gross revenue until $15,000 total is repaid, representing a 1.5x return multiple). This structure is neither traditional debt (no fixed maturity or interest rate) nor equity (no ownership stake), but rather a contractual right to a revenue stream. It is popular among small businesses (restaurants, retail, SaaS companies) that have steady revenue but may not qualify for traditional bank loans.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Direct Lending",
              "level": "subcategory",
              "children": [
                {
                  "name": "Emerging Market Private Credit",
                  "level": "leaf",
                  "description": "Direct lending to middle-market companies in EM (Latin America, Southeast Asia, Sub-Saharan Africa, India). Currency, political, and legal system risk layered on top of credit risk. Largely untapped by tokenization.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mezzanine & Subordinated Debt",
                  "level": "leaf",
                  "description": "Mezzanine debt occupies the capital structure between senior secured debt and equity, typically structured as unsecured or subordinated loans with equity kickers (warrants, co-investment rights, or PIK toggle features). Mezzanine lenders accept higher risk in exchange for total returns that approach equity-like levels through a combination of current cash pay interest, PIK interest, and equity upside participation. This form of capital is commonly used to fund leveraged buyouts, growth capital, and recapitalizations where senior debt alone is insufficient.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Second Lien Loans",
                  "level": "leaf",
                  "description": "Second lien loans are secured by the same collateral pool as first lien debt but with a subordinate priority claim, meaning second lien holders are repaid only after first lien obligations are satisfied in a liquidation. These loans carry higher yields to compensate for their junior position and typically feature incurrence-based (rather than maintenance) covenants, giving borrowers more operational flexibility. Second lien tranches are commonly used in leveraged buyouts to bridge the gap between senior debt capacity and total financing need.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Senior Secured First Lien Loans",
                  "level": "leaf",
                  "description": "First lien loans hold the highest-priority claim on a borrower's assets in the event of default. These are typically floating-rate instruments (SOFR + spread) extended to middle-market companies with EBITDA ranging from $10 million to $100 million-plus, secured by a first-priority lien on substantially all assets of the borrower. Covenants are negotiated directly and tend to be tighter than broadly syndicated equivalents, providing lenders with greater control and earlier warning of deterioration.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Small and Medium Enterprise (SME) Direct Lending",
                  "level": "leaf",
                  "description": "SME direct lending provides term loans, revolving credit facilities, and other forms of debt capital to small and medium-sized enterprises that are typically underserved by traditional banks due to their size, limited operating history, thin financial reporting, or niche industry focus. SME lenders fill a critical gap in the credit market, providing growth capital, working capital, acquisition financing, and refinancing to companies with revenues typically ranging from $1 million to $50 million. Underwriting blends traditional financial analysis with assessment of the business owner's character, industry dynamics, and the company's competitive position. Technology-enabled SME lenders have introduced automated underwriting, real-time financial data integration, and faster closing processes.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Unitranche Loans",
                  "level": "leaf",
                  "description": "Unitranche loans combine senior and subordinated debt into a single tranche with a blended interest rate, simplifying the capital structure for borrowers. The borrower faces a single lender or lending group with one set of documents, one interest rate, and one set of covenants. Behind the scenes, unitranche facilities may be bifurcated through an Agreement Among Lenders (AAL) into a \"first-out\" (lower risk, lower return) and \"last-out\" (higher risk, higher return) component, but this split is invisible to the borrower.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Venture Loans (Term Debt + Warrant Kickers)",
                  "level": "leaf",
                  "description": "Venture loans are term debt facilities extended to venture-backed companies, typically structured as 3--4 year amortizing term loans with an initial interest-only period of 6--18 months. These loans are secured by the company's assets (which may consist primarily of intellectual property, equipment, and receivables) and are underwritten based on the company's venture capital backing, cash runway, revenue trajectory, and the likelihood of subsequent equity raises or strategic exit. Venture lenders accept lower collateral coverage than traditional lenders in exchange for higher interest rates and equity upside participation through warrants. The venture lender's practical recovery mechanism is often the company's ability to raise additional capital rather than liquidation of assets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Distressed & Special Situations",
              "level": "subcategory",
              "children": [
                {
                  "name": "Debtor-in-Possession (DIP) Financing",
                  "level": "leaf",
                  "description": "DIP financing provides new credit to companies that have filed for Chapter 11 bankruptcy protection, enabling them to continue operating during the restructuring process. DIP loans are accorded \"super-priority\" administrative claim status by the bankruptcy court, meaning they are repaid before virtually all pre-petition claims, including secured debt, in the distribution waterfall. DIP financing often includes priming liens on the debtor's assets that are senior to pre-existing liens (with court approval), providing exceptional collateral protection. The combination of super-priority status, priming liens, and court oversight makes DIP financing one of the most secure forms of distressed lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Distressed Debt Trading",
                  "level": "leaf",
                  "description": "Distressed debt trading involves purchasing the existing debt obligations (bonds, bank loans, trade claims, and other liabilities) of financially troubled companies at significant discounts to par value, with the expectation of profiting from a recovery through restructuring, operational improvement, or market repricing. Distressed debt traders may pursue passive strategies (buying at a discount and waiting for value recovery through market repricing or restructuring distributions) or active/control strategies (accumulating a blocking position to influence the restructuring outcome). The market for distressed debt is cyclical, expanding dramatically during economic downturns and credit stress periods when default rates rise and forced selling creates dislocated pricing.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Exit Financing",
                  "level": "leaf",
                  "description": "Exit financing provides the debt capital structure for a company emerging from Chapter 11 bankruptcy, replacing DIP financing and establishing the reorganized entity's go-forward capital structure. Exit facilities are underwritten based on the reorganized company's projected financial performance, business plan, and the terms of the confirmed plan of reorganization. Exit financing commitments are often negotiated during the bankruptcy case as part of the plan process and may be provided by the DIP lender (as a conversion feature), plan sponsors, or third-party lenders. The reorganized borrower benefits from a cleansed balance sheet and fresh start, while lenders face the risk that emergence projections prove optimistic.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Loan-to-Own Strategies",
                  "level": "leaf",
                  "description": "Loan-to-own strategies involve extending new credit or acquiring existing debt of a distressed company with the explicit intention of converting the debt position to an equity ownership stake through a foreclosure, debt-for-equity swap, or bankruptcy plan of reorganization. The investor targets companies with viable underlying businesses but unsustainable capital structures, aiming to gain control of the enterprise at a significant discount to intrinsic value. This strategy blurs the line between credit investing and private equity, requiring expertise in both lending and operational turnaround. The debt serves as the vehicle for equity acquisition, and the investor is underwriting the post-restructuring equity value rather than traditional debt repayment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Rescue Financing",
                  "level": "leaf",
                  "description": "Rescue financing provides emergency capital to companies in acute financial distress that have not yet filed for bankruptcy, aiming to avoid a formal insolvency proceeding through a prenegotiated restructuring, operational turnaround, or bridge to a strategic transaction. Unlike DIP financing, rescue financing occurs outside the bankruptcy court's supervision and does not benefit from statutory super-priority protections. Instead, rescue lenders negotiate contractual protections including senior secured liens, tight covenants, board observation rights, and significant fees to compensate for the heightened risk of lending to a distressed enterprise. The lender faces the risk that the company files for bankruptcy shortly after the rescue loan is extended, potentially subjecting the financing to preference or fraudulent transfer challenge.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Fund Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "NAV Lending / Fund-Level Financing",
                  "level": "leaf",
                  "description": "Providing loans to private equity, venture capital, or real estate funds secured by the net asset value (NAV) of the fund's underlying portfolio. GPs use NAV facilities to fund distributions to LPs, finance bolt-on acquisitions, provide portfolio company support, or bridge timing gaps \u2014 all without calling additional capital. This is a $100B+ market growing 30%+ annually.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Subscription Line / Capital Call Facilities",
                  "level": "leaf",
                  "description": "Short-term revolving credit facilities provided to private funds, secured by the uncalled capital commitments of the fund's limited partners. These bridge the gap between when capital is needed and when LP funding arrives (typically 10 business days). A $600B+ market dominated by large bank fund finance desks.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Margin / Collateral Lending",
              "level": "subcategory",
              "children": [
                {
                  "name": "401(k) Loans",
                  "level": "leaf",
                  "description": "Most 401(k) and similar defined-contribution retirement plans allow participants to borrow from their own account balance, typically up to 50% of the vested balance or $50,000 (whichever is less). The participant pays interest (typically prime rate + 1%) on the loan, and both principal and interest payments are deposited back into the participant's own account. In effect, the participant is paying interest to themselves, making this an unusual form of \"lending\" where the same individual is both borrower and lender.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Insurance Policy Loans",
                  "level": "leaf",
                  "description": "Whole life, universal life, and variable universal life insurance policies accumulate cash surrender value (CSV), against which the policyholder can borrow from the insurance company. The insurer charges a fixed or variable interest rate on the loan, and the loan reduces the death benefit by the outstanding balance. For the insurer, policy loans are low-risk lending (collateralized by the policy's CSV and death benefit). For the policyholder, this is a source of tax-advantaged liquidity: policy loans are not taxable events as long as the policy remains in force.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Margin Account Interest (Retail)",
                  "level": "leaf",
                  "description": "Retail brokerage margin accounts allow individual investors to borrow against their securities holdings to purchase additional securities or withdraw cash. The broker charges interest on the debit balance at a rate typically benchmarked to the broker call rate (or SOFR) plus a spread. From the broker's perspective, margin lending is a highly profitable, low-risk business (loans are overcollateralized and can be liquidated immediately). From the investor's perspective, margin interest is a cost of leverage, but for investors who fund margin loans to others (e.g., through cash sweep programs), it represents yield.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Prime Brokerage Lending",
                  "level": "leaf",
                  "description": "Prime brokers (typically large banks and broker-dealers) provide financing to hedge funds and institutional investors, allowing them to leverage their portfolios. The prime broker lends cash against the hedge fund's portfolio (margin lending) or lends securities (for short selling). Prime brokerage lending generates yield for the lending institution through financing spreads, typically benchmarked to an overnight rate (SOFR) plus a spread. For investors, the relevant perspective is as the lender (bank/broker-dealer) earning interest income, or as a depositor/creditor whose funds are deployed in prime brokerage lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "SBLOCs / Stock-Backed Lines of Credit",
                  "level": "leaf",
                  "description": "Securities-Backed Lines of Credit (SBLOCs), also known as pledged asset lines, allow investors to borrow against their investment portfolios without selling securities, thereby avoiding capital gains realization. A bank or broker-dealer extends a revolving line of credit secured by the borrower's stocks, bonds, and mutual funds. The borrower can use proceeds for any purpose (real estate purchase, business investment, lifestyle spending, tax payment). SBLOCs are aggressively marketed by wealth management firms as a tax-efficient alternative to asset sales.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Marketplace / P2P Lending",
              "level": "subcategory",
              "children": [
                {
                  "name": "Agricultural Lending Platforms",
                  "level": "leaf",
                  "description": "Agricultural lending platforms provide financing to farmers and agribusinesses for operating expenses (seed, fertilizer, equipment), land acquisition, and working capital. These platforms leverage farm data analytics, satellite imagery, and crop yield models to underwrite credit. The loans are often secured by crop liens, equipment, or farmland. This sector serves a borrower base historically underserved by traditional banks that have consolidated and reduced agricultural lending exposure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Auto Loan Refinancing",
                  "level": "leaf",
                  "description": "Auto refinancing platforms originate new auto loans to borrowers seeking better rates than their existing financing, or purchase whole loans from dealers and credit unions for securitization. The loans are secured by the vehicle, with LTV ratios typically at 80-120% (vehicles depreciate, so LTVs can exceed 100% for newer loans). Investors access this yield through auto ABS, whole-loan purchases, or platform-specific investment products.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Consumer P2P Loans",
                  "level": "leaf",
                  "description": "Consumer marketplace lending allows investors to fund fractional interests in unsecured personal loans, typically used for debt consolidation, home improvement, or major purchases. Prosper and LendingClub pioneered this model in the mid-2000s, issuing borrower-payment-dependent notes to retail investors. LendingClub ceased its retail note program in 2020 and transitioned to a bank charter model; Prosper continues to offer notes but institutional buyers dominate origination volume.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Medical Procedure Financing",
                  "level": "leaf",
                  "description": "Medical financing platforms provide loans or payment plans for elective or semi-elective medical procedures (dental, cosmetic surgery, fertility treatments, vision correction, veterinary care) not fully covered by insurance. The lender extends credit at the point of care, often with promotional interest-free periods, and earns yield from interest after promotional periods expire and from merchant discount fees charged to providers. Investors access this yield through ABS, whole-loan purchases, or equity in lending platforms.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Real Estate Crowdfunding Loans",
                  "level": "leaf",
                  "description": "Real estate crowdfunding debt platforms allow investors to fund short-term bridge loans, fix-and-flip loans, and construction loans secured by real property. These platforms aggregate capital from multiple investors to fund individual loans or loan portfolios, typically at LTV ratios of 60-75%. The underlying collateral is residential or commercial property, providing a layer of security absent in unsecured consumer lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Small Business Loans",
                  "level": "leaf",
                  "description": "Marketplace platforms originate or facilitate loans to small and medium-sized businesses (SMBs), filling the gap left by traditional banks that retreated from small-dollar commercial lending after the 2008 financial crisis. Loan products include term loans, lines of credit, merchant cash advances, and SBA-adjacent products. Investors access these through whole-loan purchases, participation interests, or platform-issued notes.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Student Loan Refinancing",
                  "level": "leaf",
                  "description": "Student loan refinancing platforms originate new private loans to borrowers who refinance existing federal or private student debt, typically targeting high-income professionals (doctors, lawyers, MBAs) with strong credit profiles but high debt balances. Investors access yield through asset-backed securities (ABS), whole-loan purchases, or forward-flow agreements with the originator. The borrower profile is generally prime or super-prime, resulting in lower default rates than other marketplace lending segments.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Pawn & Asset-Based Consumer Lending",
              "level": "subcategory",
              "children": [
                {
                  "name": "Pawn Shop Lending",
                  "level": "leaf",
                  "description": "Pawn lending is one of the oldest forms of collateralized lending. The borrower pledges personal property (jewelry, electronics, firearms, tools, musical instruments) and receives a cash loan, typically 25-60% of the item's estimated resale value. If the borrower fails to repay the loan plus interest and fees within the term (usually 30-90 days, renewable), the pawnbroker takes ownership of the collateral and sells it. The pawnbroker earns revenue from loan interest/fees and from forfeited merchandise sales.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Paycheck Advance / Payday Lending",
                  "level": "leaf",
                  "description": "Paycheck advance (payday lending) provides short-term cash advances to employed borrowers, typically $100-$1,000, secured by a post-dated check or authorization to debit the borrower's bank account on their next payday. The loan term is usually 14-30 days, with a flat fee of $15-30 per $100 borrowed (equivalent to 390-780% APR). Earned wage access (EWA) platforms represent a newer, lower-cost variant where employees access already-earned wages before payday, funded by the employer or through small \"tips\" rather than explicit interest charges.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Title Loans",
                  "level": "leaf",
                  "description": "Title lending allows a borrower to pledge a vehicle title (typically a car, truck, or motorcycle) as collateral for a short-term loan while retaining possession and use of the vehicle. Loan amounts are typically 25-50% of the vehicle's value, with terms of 30 days (renewable). Title loans carry extremely high interest rates and are classified as predatory lending by consumer advocates. The lender places a lien on the vehicle title and can repossess the vehicle upon default.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Real Estate Debt",
              "level": "subcategory",
              "children": [
                {
                  "name": "Bridge Loans (Real Estate)",
                  "level": "leaf",
                  "description": "Real estate bridge loans are short-term, transitional financing instruments used to acquire, stabilize, or reposition commercial or residential properties before permanent financing or sale. Bridge loans fill the gap when properties do not qualify for conventional financing due to vacancy, deferred maintenance, lease-up risk, or pending entitlements. They are typically interest-only with terms of 12--36 months and floating rates, providing borrowers with flexible capital during the value-add execution period. The bridge lending market has become one of the most active segments of private real estate credit.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Construction Loans",
                  "level": "leaf",
                  "description": "Construction loans fund the ground-up development or major renovation of real estate projects, with advances drawn against a budget as construction milestones are achieved and verified by an independent inspector. These loans carry the highest risk in the real estate debt spectrum because the collateral (a partially completed building) has limited value if the project stalls or the borrower defaults mid-construction. Lenders mitigate risk through careful borrower vetting, construction monitoring, and holdback provisions. Construction lending requires specialized underwriting expertise in cost estimation, contractor evaluation, and entitlement and permitting risk assessment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Ground Lease Financing",
                  "level": "leaf",
                  "description": "Ground lease financing involves lending against or investing in the ground lessor's position in a ground lease, where the landowner (ground lessor) leases land to a tenant (ground lessee) who constructs and operates improvements on the site. The ground lessor retains ownership of the land and, at lease expiration, acquires ownership of all improvements. Ground lease positions provide a highly secure income stream because the ground lessor's interest is senior to all mortgages on the improvements and the lessor has the right to recapture the entire property (land plus improvements) upon ground lease default. Financing this position creates a debt instrument with exceptional collateral protection.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Hard Money / Fix-and-Flip Loans",
                  "level": "leaf",
                  "description": "Hard money loans are asset-based real estate loans where lending decisions are driven primarily by the value of the collateral property rather than the borrower's creditworthiness, income, or financial statements. Originated by private lenders and individuals rather than banks, hard money loans feature rapid closing (days rather than weeks), minimal documentation requirements, and substantially higher interest rates and fees than conventional financing. Hard money serves borrowers who need speed, flexibility, or cannot qualify for traditional lending due to credit issues, property condition, unconventional income, or the complexity of the transaction.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mezzanine Real Estate Debt",
                  "level": "leaf",
                  "description": "Real estate mezzanine debt sits behind the senior mortgage in the capital stack, typically secured by a pledge of the equity interests in the property-owning entity rather than by a direct lien on the real property. This structural distinction is critical: upon borrower default, the mezzanine lender enforces its remedies through a UCC foreclosure on the ownership interests (which can be completed in days to weeks) rather than a real property foreclosure (which can take months to years). Mezzanine debt fills the gap between the senior mortgage (typically 60%--65% LTV) and the borrower's equity, pushing total leverage to 75%--85% of property value.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Note Investing (Performing and Non-Performing)",
                  "level": "leaf",
                  "description": "Note investing involves purchasing existing mortgage notes (loans secured by real estate) at par or at a discount from original lenders, banks, servicers, or other holders. Performing notes generate current income through regular borrower payments, while non-performing notes (NPNs) are purchased at a steep discount to unpaid principal balance (UPB) with the strategy of either re-performing the loan through modification, foreclosing on the property, or negotiating a discounted payoff. Note investors step into the shoes of the original lender, acquiring all rights and remedies under the mortgage and note. The market was significantly expanded by the post-2008 disposition of distressed mortgage assets from bank portfolios, the FDIC, and government-sponsored enterprises.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "PACE Loans (Property Assessed Clean Energy)",
                  "level": "leaf",
                  "description": "PACE (Property Assessed Clean Energy) loans finance energy efficiency improvements, renewable energy installations, and other qualifying upgrades to commercial (C-PACE) or residential (R-PACE) properties. The unique structural feature of PACE financing is that the obligation is repaid through a special assessment on the property tax bill, creating a lien that has super-priority over mortgage liens in most jurisdictions. This assessment obligation runs with the property (transfers upon sale) and is collected by the local tax authority alongside property taxes, providing an exceptionally strong collection mechanism. The super-priority status has generated significant controversy, particularly in the residential sector.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Preferred Equity (Real Estate)",
                  "level": "leaf",
                  "description": "Preferred equity represents a senior equity position in a real estate joint venture that receives a priority return before the common equity (typically the sponsor/developer) receives any distributions. While legally structured as equity rather than debt, preferred equity functions economically as quasi-debt, providing a fixed or formulaic return with a priority claim on cash flows and capital events. The critical distinction from mezzanine debt is that preferred equity does not create a creditor-debtor relationship, cannot trigger a borrower bankruptcy, and is enforced through partnership/LLC operating agreement provisions rather than UCC foreclosure or mortgage enforcement.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Securities Lending",
              "level": "subcategory",
              "children": [
                {
                  "name": "Securities Lending (Stock, Bond, ETF)",
                  "level": "leaf",
                  "description": "Lending securities (equities, bonds, ETFs) to borrowers who need them for short selling, settlement, arbitrage, or hedging. The lender earns a fee while retaining economic ownership (dividends, coupons). Approximately $2.5T+ in securities on loan globally. Fees range from 0.1-0.5% for general collateral to 5-50%+ for hard-to-borrow names.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Securities Lending Yield Optimization (Specials, Reinvestment)",
                  "level": "leaf",
                  "description": "Yield enhancement strategies within securities lending: earning elevated fees from hard-to-borrow/special securities in high short-selling demand, reinvesting cash collateral into short-duration instruments for a spread, and structuring term vs. overnight loans to capture different risk premia.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Specialty Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Agricultural Credit / Farm Lending",
                  "level": "leaf",
                  "description": "Direct lending to farms and agricultural operations for land, operating expenses, and equipment, secured by farmland, crops, livestock. Includes Farm Credit System ($400B+ assets, GSE-backed cooperative) and non-bank ag lenders.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Asset-Based Lending (ABL)",
                  "level": "leaf",
                  "description": "Asset-based lending provides revolving credit facilities and term loans secured by a borrower's current assets, primarily accounts receivable, inventory, machinery, and equipment, with borrowing capacity determined by a formulaic advance rate applied to eligible collateral. ABL lenders conduct regular field examinations and collateral audits to monitor the borrowing base, creating a self-adjusting credit facility that expands and contracts with the borrower's asset levels. This form of lending is often the financing of last resort for companies with inconsistent cash flows, cyclical businesses, or turnaround situations.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cannabis-Secured Lending",
                  "level": "leaf",
                  "description": "Providing mortgage or secured loans to cannabis cultivation, processing, and dispensary operators who are largely shut out of traditional banking due to federal Schedule I classification. Lenders earn premium rates reflecting the legal risk and limited competition from banks.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Dynamic Discounting",
                  "level": "leaf",
                  "description": "Dynamic discounting is a buyer-led supply chain finance technique where a large corporate buyer offers its suppliers the option to receive early payment on approved invoices in exchange for a discount that varies based on how early the payment is made. Unlike traditional factoring (where a third-party funder provides capital), dynamic discounting uses the buyer's own cash to make early payments. The buyer earns a risk-free return (the discount) on its excess cash, while the supplier gets faster access to working capital. The \"dynamic\" aspect means the discount rate adjusts based on the number of days early (e.g., 2% for 30 days early, 1% for 15 days early).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Earned Wage Access (EWA) Facilities",
                  "level": "leaf",
                  "description": "Providing capital facilities to earned wage access platforms (DailyPay, Payactiv, Branch) that advance employees already-earned wages before payday. Repaid via payroll deduction, creating near-zero credit loss.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Energy Transition / Renewable Project Debt",
                  "level": "leaf",
                  "description": "Non-recourse lending to solar, wind, battery storage, and EV infrastructure projects, secured by long-term PPAs and IRA tax credits. Private credit funds originate at distributed/C&I scale where banks won't go.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Factoring & Invoice Financing",
                  "level": "leaf",
                  "description": "Factoring involves the outright purchase of accounts receivable at a discount, transferring credit risk and collection responsibility from the seller to the factor. Invoice financing (or invoice discounting) uses receivables as collateral for a loan but the borrower retains ownership and collection duties. Both structures accelerate the cash conversion cycle for businesses, providing immediate liquidity against outstanding invoices. Recourse factoring requires the seller to repurchase uncollected invoices, while non-recourse factoring transfers default risk to the factor.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Forfaiting",
                  "level": "leaf",
                  "description": "The purchase of medium-to-long-term trade receivables (typically promissory notes or bills of exchange guaranteed/avalized by the importer's bank) at a discount, without recourse to the exporter. Forfaiting removes both credit and political risk from the exporter. Common in capital goods exports (machinery, infrastructure equipment) to developing markets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Franchise Lending",
                  "level": "leaf",
                  "description": "Lending to individual franchisees secured by franchise agreements, equipment, and real property. Franchisor brand and territory exclusivity provide structural support absent in general SME lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Government Contract Receivables Lending",
                  "level": "leaf",
                  "description": "Government contract financing provides working capital and bridge financing to contractors performing work under federal, state, and local government contracts, secured by the contract receivables and, in the case of federal contracts, the contractor's right to payment under the Assignment of Claims Act. Government contracts provide a unique lending opportunity because the obligor (the government) is essentially credit-risk-free, but payment timing can be slow and unpredictable, and contract performance risk remains with the contractor. Financing structures include accounts receivable lines, contract-specific term loans, progress payment financing, and mobilization advances that fund initial project costs before billings begin.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Healthcare Receivables Financing",
                  "level": "leaf",
                  "description": "Healthcare receivables lending provides financing to healthcare providers (hospitals, physician practices, ambulatory surgery centers, behavioral health facilities, home health agencies, pharmacies, and medical device companies) secured by their accounts receivable from insurance companies, Medicare, Medicaid, and private pay patients. Healthcare receivables are unique in that they are subject to complex adjudication and reimbursement processes, regulatory scrutiny, and the credit quality of government and large commercial insurance payors. The slow and uncertain payment cycle in healthcare (often 60--120 days from service to payment, with significant denial and adjustment rates) creates persistent working capital needs that healthcare receivables financing addresses.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "IP-Backed Lending (Intangible ABL)",
                  "level": "leaf",
                  "description": "Asset-based lending where primary collateral is intellectual property \u2014 patents, trademarks, copyrights, trade secrets. Growing as the economy becomes more intangible-asset-heavy.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Insurance Premium Finance",
                  "level": "leaf",
                  "description": "Short-term lending to businesses to finance commercial insurance premiums. The financed policy itself is collateral \u2014 lender has contractual right to cancel and receive unearned premium refund on default. $100B+ annual origination market.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Life Sciences / Biopharma Lending",
                  "level": "leaf",
                  "description": "Secured term loans to pre-revenue or early-commercial biotech/pharma companies, collateralized by IP (patents, FDA approvals, clinical data). Interest rates often step up/down based on clinical/regulatory milestones.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Merchant Cash Advances (MCA)",
                  "level": "leaf",
                  "description": "A merchant cash advance provides a lump sum of capital in exchange for a fixed percentage of the borrower's future daily credit card and debit card receivables until a specified purchase amount is repaid. Legally structured as a purchase of future receivables rather than a loan, MCAs avoid many state lending regulations and usury caps. Repayment occurs through daily or weekly automatic deductions from the merchant's payment processor, with the amount fluctuating based on sales volume. MCAs serve small businesses that cannot access traditional credit due to thin credit files, short operating histories, or prior defaults.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Payroll Financing",
                  "level": "leaf",
                  "description": "Payroll financing provides advances to staffing companies, temporary employment agencies, and businesses with significant payroll obligations, secured by the underlying accounts receivable generated when employees are placed with and invoiced to clients. The financing bridges the gap between when the staffing company must pay its workers (weekly or biweekly) and when it collects from clients (30--90 days). This niche lending segment requires specialized underwriting focused on the staffing industry's unique dynamics: high receivable turnover, workers' compensation exposure, and payroll tax obligations that represent super-priority liens.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pre-Export Finance",
                  "level": "leaf",
                  "description": "Providing loans to commodity producers (oil, metals, agricultural) secured by future export receivables pledged to a specific off-taker. The borrower ships commodities to the designated buyer, and payment flows directly to the lender via an escrow or collection account. Common in emerging market commodity trade but with developed-market bank involvement.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Purchase Order Financing",
                  "level": "leaf",
                  "description": "Purchase order (PO) financing provides working capital to businesses that have received confirmed purchase orders from creditworthy customers but lack the funds to manufacture or procure the goods. The PO finance company advances funds (or provides a guarantee) to the supplier or manufacturer based on the strength of the end buyer's creditworthiness, enabling the borrower to fulfill orders it could not otherwise finance. Upon shipment and invoicing, the PO finance facility is typically taken out by a factoring arrangement on the resulting receivable, creating a two-stage financing chain.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Recurring Revenue / SaaS Lending",
                  "level": "leaf",
                  "description": "Secured lending to profitable software companies underwritten against recurring revenue (ARR/MRR) rather than EBITDA, with leverage as a multiple of ARR (0.5-1.5x). Distinct from venture debt (pre-profit, sponsor-backed).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Revenue-Based Financing (RBF)",
                  "level": "leaf",
                  "description": "Revenue-based financing provides capital in exchange for a fixed percentage of the borrower's future gross revenue until a predetermined multiple of the original investment is repaid (the \"repayment cap\"). Unlike traditional debt, RBF has no fixed maturity date or fixed periodic payment; instead, payments fluctuate with the borrower's revenue, providing natural downside protection to the borrower during slow periods. This structure is particularly popular with SaaS companies, e-commerce businesses, and other recurring-revenue models where equity dilution is undesirable and traditional debt underwriting is difficult.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Ship Mortgage / Vessel Finance Lending",
                  "level": "leaf",
                  "description": "Structured lending to shipowners secured by first-priority mortgages on commercial vessels (bulk carriers, tankers, container ships, LNG carriers). The ~$300B shipping finance market has shifted from European bank dominance to increasing participation from Asian banks, leasing companies, and alternative lenders.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Significant Risk Transfer (SRT) / Capital Relief Trades",
                  "level": "leaf",
                  "description": "Significant Risk Transfer transactions allow banks to transfer the credit risk of a portfolio of loans or other credit exposures to external investors, thereby reducing the bank's regulatory capital requirements for those assets. In a typical SRT, the bank purchases credit protection from investors on a defined reference portfolio through credit-linked notes, funded or unfunded guarantees, or credit default swap structures. If losses on the reference portfolio exceed a defined threshold (the \"attachment point\"), investors absorb losses up to a cap (the \"detachment point\"). If the bank achieves \"significant risk transfer\" as defined by its prudential regulator, it can reduce the risk-weighted assets associated with the reference portfolio, freeing regulatory capital.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Supply Chain Finance",
                  "level": "leaf",
                  "description": "Supply chain finance (SCF), also known as reverse factoring or payables finance, is a buyer-initiated program where a financial institution pays the buyer's suppliers at an accelerated rate (before the invoice due date) in exchange for a discount, and the buyer then pays the financial institution on the original or extended invoice due date. SCF leverages the buyer's typically stronger credit rating to provide suppliers with cheaper financing than they could obtain independently. The buyer benefits from extended payment terms and supply chain stability, while suppliers receive faster payment and improved working capital.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Trade Finance",
                  "level": "leaf",
                  "description": "Trade finance encompasses the financial instruments and products used to facilitate international and domestic trade by bridging the timing gap between when goods are shipped and when payment is received. Core instruments include letters of credit, documentary collections, bankers' acceptances, trade credit insurance, and pre-export and post-export financing. Trade finance has historically been dominated by commercial banks but has increasingly attracted non-bank capital seeking short-duration, self-liquidating yield with low historical default rates. The sector finances approximately $12--15 trillion in annual global trade flows.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Real Estate",
          "level": "category",
          "children": [
            {
              "name": "Real Estate-Adjacent",
              "level": "subcategory",
              "children": [
                {
                  "name": "Real Estate Notes (Mortgage Notes)",
                  "level": "leaf",
                  "description": "Real estate note investing involves purchasing the debt secured by real property -- specifically, the promissory note and the mortgage (or deed of trust) that secures it. Performing notes generate income from the borrower's monthly mortgage payments (principal and interest). Non-performing notes are purchased at deep discounts with the expectation of either restructuring the loan with the borrower or foreclosing to acquire the property. Note investing positions the investor as the lender rather than the property owner.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Tax Lien Certificates",
                  "level": "leaf",
                  "description": "Tax lien certificates are issued by county or municipal governments when property owners fail to pay their property taxes. The investor purchases the lien at a public auction, paying the delinquent taxes on behalf of the owner, and receives a certificate entitling them to repayment of the principal plus a statutory interest rate. If the property owner does not redeem the lien within the redemption period, the investor may be able to foreclose and acquire the property.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            }
          ]
        },
        {
          "name": "Structured Credit & Securitized Products",
          "level": "category",
          "children": [
            {
              "name": "Asset-Backed Securities (ABS)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Aircraft Enhanced Equipment Trust Certificates (EETC)",
                  "level": "leaf",
                  "description": "Aircraft EETCs are secured debt instruments issued by airlines, collateralized by specific aircraft and their associated engines. EETCs are structured in tranches with different priority claims on the aircraft collateral, with senior tranches benefiting from Section 1110 of the U.S. Bankruptcy Code, which requires bankrupt airlines to either affirm or reject aircraft leases/financings within 60 days, providing creditors with rapid access to collateral. EETCs fund the purchase of new aircraft and are a primary financing tool for the global airline industry.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Auto Lease ABS",
                  "level": "leaf",
                  "description": "Auto lease ABS are securitizations of pools of retail vehicle leases, where the securitization trust owns the right to receive monthly lease payments and, critically, the residual value of the vehicle at lease termination. This dual cash-flow structure distinguishes lease ABS from loan ABS: bondholders are exposed not only to lessee credit performance but also to the realized value of returned vehicles versus the contractual residual value set at lease inception. Auto lease ABS is dominated by captive finance companies of major automakers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Auto Loan ABS",
                  "level": "leaf",
                  "description": "Auto loan ABS are securitizations of pools of retail installment contracts used to finance new and used vehicle purchases. Loans are originated by captive finance arms of automakers (e.g., Ford Motor Credit, GM Financial, Toyota Motor Credit), banks, credit unions, and specialty lenders. The collateral pool typically contains thousands of loans with predictable amortization schedules and short average lives (1--3 years for AAA tranches). Auto ABS is one of the largest and most established ABS sectors, with deep performance history and highly predictable loss curves.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cell Tower Lease ABS",
                  "level": "leaf",
                  "description": "Cell tower lease ABS are securitizations of the contractual lease revenues generated by wireless communication tower portfolios. Wireless carriers (AT&T, Verizon, T-Mobile) lease space on towers to mount antennas and equipment, generating recurring rental income with long-term contractual escalators (typically 3%--5% per annum). The underlying asset is the tower portfolio itself, contributed to a special-purpose entity, with the securitization structured as a whole-business securitization of the tower operating company. This sector benefits from the secular growth of wireless data demand and limited new tower supply.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Container Lease ABS",
                  "level": "leaf",
                  "description": "Container lease ABS are securitizations of the lease revenues generated by intermodal shipping container fleets. Container lessors own large fleets of standardized steel containers (dry, refrigerated, tank, and specialty) that are leased to global shipping lines under term leases and master interchange agreements. The securitization trust owns the containers and the associated lease receivables, with revenue driven by per diem lease rates and utilization rates. The sector benefits from global trade volumes and the essential nature of containerized shipping infrastructure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Credit Card Receivables ABS",
                  "level": "leaf",
                  "description": "Credit card ABS are securitizations of revolving credit card receivables generated by bank and non-bank credit card issuers. Unlike amortizing ABS (auto, student loan), credit card ABS has a unique structure with a revolving period during which principal collections are used to purchase new receivables, maintaining the pool's size, followed by an amortization (or accumulation) period where principal is returned to investors. This structure reflects the revolving nature of credit card accounts, where balances fluctuate as cardholders charge, pay, and revolve.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Equipment Finance ABS",
                  "level": "leaf",
                  "description": "Equipment finance ABS are securitizations of loans and leases used to finance commercial and industrial equipment including construction machinery, medical devices, IT hardware, agricultural equipment, printing presses, and manufacturing tools. These transactions are originated by captive finance subsidiaries of equipment manufacturers (e.g., Caterpillar Financial, John Deere Financial, CNH Industrial Capital) as well as independent equipment lessors. The equipment serves as collateral, though recovery values vary widely by equipment type, age, and market conditions.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Esoteric ABS",
                  "level": "leaf",
                  "description": "Esoteric ABS is a broad category encompassing securitizations of non-traditional, niche, or unusual cash-flow streams that do not fit into established ABS sectors. Examples include tax lien receivables, government contract receivables, lottery winnings, tobacco settlement revenues, music royalty securitizations, patent licensing revenues, insurance premium finance receivables, and healthcare receivables. These deals are characterized by their bespoke structures, limited performance comparables, and highly idiosyncratic risk profiles. Esoteric ABS often commands higher yields due to complexity premia, limited investor familiarity, and thinner secondary markets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Floorplan ABS",
                  "level": "leaf",
                  "description": "Floorplan ABS are securitizations of revolving lines of credit extended to automobile dealerships to finance vehicle inventory on their lots. When a manufacturer ships vehicles to a dealer, the floorplan lender advances funds to pay the manufacturer; the dealer repays the advance when the vehicle is sold to a consumer. Floorplan receivables are inherently revolving -- inventory turns over as vehicles are sold and new ones arrive -- requiring a master trust or revolving structure. The sector is dominated by a small number of large captive and bank issuers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Marketplace Lending ABS",
                  "level": "leaf",
                  "description": "Marketplace (or online) lending ABS are securitizations of unsecured personal loans originated through fintech lending platforms. These platforms use technology-driven underwriting models (incorporating alternative data sources, machine learning algorithms, and automated decisioning) to originate consumer loans typically ranging from $1,000 to $50,000 with 2--5 year terms. The loans are pooled and securitized, with the platform typically retaining servicing rights. Major originators include established fintech lenders that have evolved beyond pure \"marketplace\" models to balance-sheet lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Railcar ABS",
                  "level": "leaf",
                  "description": "Railcar ABS are securitizations of lease revenues generated by fleets of freight railcars -- including tank cars, covered hoppers, gondolas, boxcars, and intermodal flatcars -- leased to railroads, shippers, and industrial companies. Railcar lessors own fleets of specialized rolling stock that transport commodities, chemicals, agricultural products, and manufactured goods. The securitization trust owns the railcars and collects lease payments, with revenue dependent on utilization rates, lease rates, and the economic lifecycle of the cars (typically 30--50 year physical lives with periodic maintenance overhauls).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Solar / Renewable Energy ABS",
                  "level": "leaf",
                  "description": "Solar and renewable energy ABS are securitizations of the cash flows from distributed solar energy systems (residential rooftop and commercial installations), utility-scale solar and wind projects, or the associated power purchase agreements (PPAs), leases, and loan receivables. Residential solar ABS typically securitizes consumer loan or lease payments for rooftop solar panel systems, while commercial/utility-scale deals may securitize PPA revenues or project finance loans. The sector has grown rapidly, driven by declining renewable energy costs, federal tax incentives (ITC/PTC), and ESG-driven investor demand.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Student Loan ABS -- FFELP",
                  "level": "leaf",
                  "description": "Federal Family Education Loan Program (FFELP) student loan ABS are securitizations of student loans that were originated by private lenders but guaranteed by the U.S. Department of Education (at 97%--100% of principal, depending on origination date and lender default claim history). FFELP loan origination ceased in 2010 when the program was replaced by the Direct Loan Program, so the outstanding FFELP ABS universe is in run-off. These loans carry floating-rate coupons (indexed to SOFR, previously LIBOR) and benefit from near-zero credit risk due to the federal guarantee, but face significant prepayment uncertainty related to borrower consolidation and government policy.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Student Loan ABS -- Private",
                  "level": "leaf",
                  "description": "Private student loan ABS are securitizations of student loans originated without federal guarantee, used to fund education costs not covered by federal aid programs. Borrowers are typically undergraduate or graduate students (or their co-signers) with no government guarantee backstop; credit enhancement is provided solely by structural features. Private student loans generally have higher interest rates than federal loans, and underwriting quality varies significantly by originator. The market has grown as tuition costs have outpaced federal loan limits.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Timeshare ABS",
                  "level": "leaf",
                  "description": "Timeshare ABS are securitizations of consumer installment loans used to purchase timeshare vacation ownership interests. Borrowers finance the purchase of a deeded or right-to-use interest in a vacation property, with the timeshare developer originating the loan and servicing it. Timeshare loans are typically high-coupon (12%--18% weighted average coupon) to compensate for higher default rates and the discretionary nature of the purchase. The collateral -- a fractional vacation property interest -- has limited resale value, resulting in high loss severities on defaults.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Whole Business Securitization (WBS)",
                  "level": "leaf",
                  "description": "Whole business securitization involves the securitization of the entire operating cash flows of a business, typically a franchise-based or asset-light operating company with predictable, recurring revenue streams. The entire business operation -- including intellectual property, franchise agreements, physical assets, and management contracts -- is contributed to a bankruptcy-remote special-purpose entity that issues secured notes. WBS is commonly used by restaurant franchisors, gym/fitness chains, and other consumer service businesses to achieve lower cost of capital through structured finance.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Collateralized Debt Obligations (CDOs) & Related Structures",
              "level": "subcategory",
              "children": [
                {
                  "name": "Bespoke Tranche Opportunities (BTOs)",
                  "level": "leaf",
                  "description": "Bespoke tranche opportunities are custom-tailored synthetic CDO tranches that allow an investor to select a specific reference portfolio of credit names and a specific attachment/detachment point (tranche), creating a highly customized credit exposure. A dealer structures the trade by selling CDS protection on the selected portfolio and tranching the risk according to the investor's specifications. BTOs are the modern evolution of the pre-crisis bespoke CDO market, with improved risk management, more conservative structuring, and greater investor sophistication. The market has grown steadily since 2013.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "CDO-Squared (CDO^2)",
                  "level": "leaf",
                  "description": "A CDO-squared is a re-securitization in which the underlying collateral consists of tranches from other CDOs rather than primary assets (loans, bonds, or ABS). The resulting structure creates a second layer of tranching on top of already-tranched securities, generating extreme leverage on credit outcomes. CDO-squared structures were prominent in the pre-2008 era and were central to the amplification of subprime mortgage losses through the financial system. New issuance of CDO-squared is essentially nonexistent post-crisis, and the concept is primarily of historical and pedagogical relevance, though structural analogs occasionally appear in bespoke formats.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Collateralized Fund Obligations (CFOs)",
                  "level": "leaf",
                  "description": "Collateralized fund obligations are securitizations of diversified portfolios of private equity fund interests (LP stakes in buyout, venture capital, real estate, infrastructure, or other alternative investment funds). The CFO structure applies leveraged tranching -- typically 2:1 to 3:1 debt-to-equity -- to the cash flows generated by capital calls, distributions, and NAV appreciation of the underlying fund portfolio. CFOs allow institutional investors to access leveraged private equity returns or, conversely, to access senior secured exposure to a diversified private equity portfolio at lower risk levels. The market is small but growing.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Synthetic CDOs",
                  "level": "leaf",
                  "description": "Synthetic CDOs transfer credit risk through credit default swaps (CDS) rather than physical transfer of assets. Instead of purchasing loans or bonds, the SPE sells credit protection on a reference portfolio via CDS contracts, using the premium income to pay tranche coupons. The underlying reference portfolio can consist of corporate names, sovereign credits, ABS tranches, or other reference obligations. Synthetic CDOs allow for customized, leveraged exposure to credit risk without the need to source and transfer physical assets. The market for synthetic CDOs has evolved significantly post-crisis, with bespoke tranche trading remaining active among sophisticated institutional investors.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Collateralized Loan Obligations (CLOs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "BSL CLOs (Broadly Syndicated Loan CLOs)",
                  "level": "leaf",
                  "description": "BSL CLOs are securitizations of diversified portfolios of broadly syndicated leveraged loans (first-lien senior secured term loans to sub-investment-grade corporate borrowers). A CLO manager actively selects and trades a portfolio of 150--300 leveraged loans, financed by issuing tranches of debt (AAA through BB) and an equity tranche. CLOs are the dominant buyer of leveraged loans, holding approximately 65%--70% of the institutional loan market. The managed, reinvesting structure allows the manager to trade credits, reinvest principal proceeds, and actively manage credit risk over a typical 4--5 year reinvestment period.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "CLO Debt Tranches (AAA through BB)",
                  "level": "leaf",
                  "description": "CLO debt tranches are the rated liability tranches of a CLO capital structure, ranging from AAA (most senior, 60%--65% of the capital structure) through BB (most junior rated tranche, typically 2%--4% of the structure). Each tranche has a defined priority in the payment waterfall, a stated coupon (floating-rate, indexed to SOFR), and credit enhancement provided by the subordination of all tranches below it. CLO debt tranches offer investors a range of risk/return profiles within a single structural framework, from very high credit quality (AAA CLO has never experienced a principal loss on a rated note) to leveraged credit exposure (BB tranches).",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Middle Market CLOs",
                  "level": "leaf",
                  "description": "Middle market CLOs are securitizations of portfolios of loans to middle market companies -- typically defined as businesses with EBITDA of $10 million to $75 million. Unlike BSL CLOs, which hold broadly syndicated loans with deep secondary liquidity, middle market CLOs hold directly originated or privately placed loans arranged by the CLO manager or affiliated lending platform. These loans are less liquid, often have stronger covenants (including maintenance financial covenants), and may offer higher spreads than broadly syndicated loans. Middle market CLOs provide access to the private lending market in a structured format.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Mortgage-Backed Securities (MBS)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Agency CMO -- Companion / Z-Tranche",
                  "level": "leaf",
                  "description": "Companion (or support) tranches absorb the prepayment variability that is redirected away from PAC and TAC tranches within a CMO structure. They receive principal payments only after PAC/TAC schedules are satisfied, making them the most volatile tranches in the deal. In fast prepayment environments, companions receive large, accelerated principal payments (shortening dramatically); in slow environments, they receive minimal principal (extending substantially). This extreme cash-flow uncertainty results in higher yields.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agency CMO -- IO Strips (Interest-Only)",
                  "level": "leaf",
                  "description": "Interest-Only strips receive only the interest component of mortgage payments from the underlying collateral pool, with no claim on principal cash flows. IOs are priced as a multiple of the notional balance and decline in value as the reference pool pays down (since the interest stream shrinks with amortization and prepayments). IOs are fundamentally short-duration instruments that increase in value when rates rise (slowing prepayments and preserving the interest stream) and decrease when rates fall (accelerating prepayments).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agency CMO -- PAC / TAC Tranches",
                  "level": "leaf",
                  "description": "PAC tranches are carved from agency MBS collateral to provide investors with a predetermined principal payment schedule that holds across a defined range of prepayment speeds (the \"PAC band\" or \"collar\"). By directing prepayment variability to companion/support tranches, PACs offer substantially more cash-flow certainty than pass-throughs. They are a core holding for insurance companies, banks, and other investors requiring predictable duration profiles.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agency CMO -- PO Strips (Principal-Only)",
                  "level": "leaf",
                  "description": "Principal-Only strips receive only the principal cash flows (both scheduled amortization and prepayments) from the underlying collateral pool, with no interest payments. POs are purchased at a deep discount to par and return par over time as principal is received. POs increase in value when rates fall (prepayments accelerate, returning par value sooner, increasing the effective yield on the discounted purchase price) and decrease when rates rise (prepayments slow, delaying return of principal).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agency Pass-Through MBS (FHLMC)",
                  "level": "leaf",
                  "description": "Federal Home Loan Mortgage Corporation (Freddie Mac) Participation Certificates (PCs) represent interests in pools of conventional conforming mortgages purchased or guaranteed by Freddie Mac. Like FNMA, Freddie Mac guarantees timely payment of interest and ultimate payment of principal (upgraded to timely P&I under the UMBS framework). These securities are economically interchangeable with FNMA pass-throughs under the UMBS initiative but retain separate pool-level identifiers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agency Pass-Through MBS (FNMA)",
                  "level": "leaf",
                  "description": "Federal National Mortgage Association (Fannie Mae) mortgage-backed securities represent interests in pools of conventional conforming residential mortgages that meet Fannie Mae's underwriting and eligibility standards. Fannie Mae guarantees timely payment of principal and interest, backed by the GSE's conservatorship arrangement with the U.S. Treasury (Senior Preferred Stock Purchase Agreement). These securities constitute the largest segment of the agency MBS market by outstanding volume.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agency Pass-Through MBS (GNMA)",
                  "level": "leaf",
                  "description": "Government National Mortgage Association (Ginnie Mae) pass-through certificates represent undivided interests in pools of FHA, VA, and USDA-guaranteed residential mortgages. Principal and interest payments from the underlying loans are passed through to investors on a pro-rata basis, with full and timely payment guaranteed by the explicit full faith and credit of the U.S. government. GNMA pass-throughs carry zero credit risk to the U.S. government guarantee but are fully exposed to prepayment variability.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "CMBS -- Conduit",
                  "level": "leaf",
                  "description": "Conduit CMBS are securitizations of diversified pools of commercial mortgage loans originated by multiple lenders specifically for securitization. Pools typically contain 50--150+ loans secured by a mix of property types (office, retail, multifamily, industrial, hospitality, self-storage) across diverse geographies. The capital structure is tranched from AAA senior through BB- subordinate classes, with credit enhancement provided by subordination, and losses allocated from the bottom up. Conduit CMBS is the primary funding mechanism for commercial real estate debt in the United States.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "CMBS -- Single-Asset Single-Borrower (SASB)",
                  "level": "leaf",
                  "description": "SASB CMBS are securitizations backed by a single large commercial mortgage loan (or a small number of cross-collateralized loans) on a single property or portfolio controlled by one borrower. These deals are typically $500 million to $5+ billion in size, backed by trophy or institutional-quality assets such as landmark office towers, large mall portfolios, major hospitality properties, or multifamily complexes. SASB deals offer investors concentrated exposure to a specific credit story rather than the diversified pool approach of conduit CMBS.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "CRE CLOs (Commercial Real Estate CLOs)",
                  "level": "leaf",
                  "description": "CRE CLOs are securitizations of pools of transitional or bridge commercial real estate loans -- short-term, floating-rate loans used to finance property acquisitions, repositioning, renovations, or lease-up strategies. Unlike conduit CMBS (which finances stabilized properties), CRE CLOs finance properties in transition, with the expectation that the business plan will be executed and the loan will be refinanced into permanent financing. CRE CLOs are actively managed, allowing the manager to reinvest principal proceeds into new loans during a reinvestment period.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-Agency RMBS -- Alt-A",
                  "level": "leaf",
                  "description": "Alt-A RMBS are securitizations of residential mortgages with credit profiles between prime and subprime, typically characterized by reduced documentation (stated income, no-doc), higher LTVs, non-owner-occupied properties, or interest-only payment features. Alt-A issuance was concentrated in the 2004--2007 pre-crisis period, and virtually no new Alt-A securitization has occurred post-crisis (the category has been largely absorbed into \"non-QM\" or \"expanded credit\" designations). Legacy Alt-A bonds remain actively traded, with substantial credit deterioration having occurred during the financial crisis.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-Agency RMBS -- Prime Jumbo",
                  "level": "leaf",
                  "description": "Prime jumbo RMBS are securitizations of high-quality residential mortgages that exceed conforming loan limits (currently $766,550 in most areas, higher in high-cost areas) but are underwritten to strong credit standards -- high FICO scores (typically 720+), low LTVs, full documentation, and substantial borrower reserves. Post-crisis prime jumbo issuance resumed with enhanced structural protections including credit risk retention, stronger representations and warranties, and independent loan-level due diligence. These securities offer modest spread premiums over agency MBS to compensate for credit risk and illiquidity.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-Agency RMBS -- Subprime",
                  "level": "leaf",
                  "description": "Subprime RMBS are securitizations of residential mortgages originated to borrowers with impaired credit histories (typically FICO scores below 660), high debt-to-income ratios, or other risk factors that preclude conforming or prime classification. The subprime market was the epicenter of the 2007--2009 financial crisis, with unprecedented default rates and loss severities. No meaningful new subprime securitization has occurred since 2007; the remaining universe consists of seasoned legacy bonds in various stages of run-off, modification, and liquidation.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Whole Loan Purchases (Residential)",
                  "level": "leaf",
                  "description": "Purchasing whole residential mortgage loans (performing, re-performing, or non-performing) directly from banks, servicers, or government agencies (Fannie Mae, Freddie Mac, FHA). Unlike MBS, the investor owns the individual loan with all its cash flows, prepayment rights, and workout optionality \u2014 not a securitized tranche.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Owning",
      "level": "primitive",
      "primitive": "owning",
      "description": "Providing capital permanently with a residual equity claim",
      "children": [
        {
          "name": "Corporate Fixed Income",
          "level": "category",
          "children": [
            {
              "name": "Preferred Securities",
              "level": "subcategory",
              "children": [
                {
                  "name": "DRD-Eligible Preferred Securities",
                  "level": "leaf",
                  "description": "DRD-eligible preferred securities qualify for the dividends-received deduction (DRD), which allows US corporate holders to exclude 50% (for holdings below 20% ownership) or 65% (for 20%+ ownership) of preferred dividends from taxable income. This tax advantage makes DRD-eligible preferreds particularly attractive to corporate treasuries, insurance companies, and banks seeking tax-efficient income. To qualify, the preferred must be structured as equity (not debt) for tax purposes, and the issuer must be a US corporation paying dividends from earnings and profits.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Fixed-to-Floating Preferred Securities",
                  "level": "leaf",
                  "description": "Fixed-to-floating preferred securities pay a fixed dividend rate for an initial period (typically 5--10 years) and then switch to a floating rate, usually SOFR or another benchmark plus a fixed spread. This structure is the standard format for bank-issued preferred stock qualifying as regulatory capital. The fixed-to-floating feature provides investors with initial yield certainty followed by floating-rate protection against rising rates, but creates uncertainty about whether the issuer will call at the reset date.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Preferred Securities ($25 Retail / $1,000 Institutional)",
                  "level": "leaf",
                  "description": "Institutional preferred securities are preferred shares or notes with a $1,000 par value, designed for institutional investors and traded over-the-counter rather than on stock exchanges. They offer the same hybrid debt-equity characteristics as retail preferreds but with larger denomination sizes, institutional-grade documentation, and OTC market conventions. Institutional preferreds are the primary format for bank-issued Additional Tier 1 capital securities in the United States.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Preferred Stock (Traditional, Cumulative, Perpetual)",
                  "level": "leaf",
                  "description": "Traditional preferred stock pays a fixed dividend rate on a stated par value, ranking above common stock but below all debt obligations in the capital structure. Unlike bonds, preferred stock generally has no maturity date (perpetual) and dividends are not tax-deductible for the issuer. For corporate holders, preferred dividends may qualify for the dividends-received deduction (DRD), providing a tax advantage. Traditional preferreds are the foundational instrument in the preferred securities market.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Rate-Reset Canadian Preferred Shares",
                  "level": "leaf",
                  "description": "Rate-reset preferred shares are a uniquely Canadian preferred equity structure where the dividend rate is reset every 5 years based on the 5-year Government of Canada bond yield plus a fixed credit spread. They are the dominant preferred share structure in the Canadian market, issued primarily by the major Canadian banks, insurance companies, pipelines, and utilities. The 5-year reset mechanism provides periodic adjustment to prevailing interest rates, offering some inflation protection.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Trust Preferred Securities (TruPS)",
                  "level": "leaf",
                  "description": "Trust preferred securities (TruPS) are hybrid instruments created through a special-purpose trust entity. The parent company issues junior subordinated debt to the trust, which in turn issues preferred securities to investors. TruPS were widely used by banks and insurance companies from the late 1990s through 2010 to raise Tier 1 regulatory capital while claiming a tax deduction on the underlying interest payments. The Dodd-Frank Act of 2010 phased out TruPS as qualifying Tier 1 capital for bank holding companies with over $15 billion in assets.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            }
          ]
        },
        {
          "name": "Energy & Natural Resources",
          "level": "category",
          "children": [
            {
              "name": "Agriculture / Farmland",
              "level": "subcategory",
              "children": [
                {
                  "name": "Livestock Operations",
                  "level": "leaf",
                  "description": "Livestock operations generate yield through the breeding, raising, and sale of cattle (cow-calf, stocker, feedlot), hogs, poultry, dairy, and other animals. Income is derived from the sale of animals, animal products (milk, eggs, wool), and breeding stock. Livestock operations can be owned directly, accessed through partnerships, or invested in through vertically integrated agricultural companies. Cash yields depend on commodity prices (live cattle, lean hogs, milk), feed costs, and production efficiency.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Mining & Metals",
              "level": "subcategory",
              "children": [
                {
                  "name": "Mining Dividends",
                  "level": "leaf",
                  "description": "Mining company dividends represent cash distributions from publicly traded companies that extract, process, and sell metals, minerals, and other geological resources. Major and mid-tier mining companies generate cash flow from operations across diversified commodity portfolios including gold, silver, copper, iron ore, lithium, and industrial minerals. Dividend policies vary from fixed payouts to progressive frameworks and commodity-linked variable distributions.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Oil & Gas",
              "level": "subcategory",
              "children": [
                {
                  "name": "E&P Company Dividends",
                  "level": "leaf",
                  "description": "Exploration and production (E&P) companies are publicly traded firms engaged in finding, developing, and producing oil and natural gas reserves. Unlike royalty trusts, E&P companies actively reinvest in new drilling, acquisitions, and reserve replacement. Dividends from E&P companies reflect management's capital allocation decisions, balancing shareholder returns against reinvestment needs. Many E&P companies have adopted fixed-plus-variable dividend frameworks that pay a base dividend supplemented by variable payouts tied to free cash flow.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Midstream / Gathering Dividends",
                  "level": "leaf",
                  "description": "Midstream companies own and operate the infrastructure that gathers, processes, transports, and stores oil, natural gas, and natural gas liquids. Their revenues are primarily derived from fee-based and cost-of-service contracts with producers, providing more stable and predictable cash flows than upstream operations. Many midstream companies are structured as master limited partnerships (MLPs) or C-corporations and distribute a high proportion of distributable cash flow to investors.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-Operated Working Interests (NOWI)",
                  "level": "leaf",
                  "description": "A non-operated working interest conveys the same economic rights and obligations as an operated working interest, but the holder does not control drilling or production operations. The non-operator participates proportionally in revenues and costs but relies on the designated operator to make day-to-day decisions. This structure is common among smaller investors who wish to participate in well economics without managing operations directly.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Oil & Gas Limited Partnerships",
                  "level": "leaf",
                  "description": "Oil and gas limited partnerships (LPs) pool capital from limited partners to invest in drilling, development, or acquisition of producing oil and gas properties. The general partner manages operations while limited partners receive distributions from production revenue net of costs. These partnerships were historically popular for their tax benefits but remain relevant for investors seeking direct commodity exposure with professional management and pass-through tax treatment.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Working Interests (Operated)",
                  "level": "leaf",
                  "description": "A working interest (WI) represents a direct ownership stake in an oil and gas well or lease that carries with it the obligation to pay a proportional share of drilling, completion, and operating costs. Operated working interests mean the investor (or their designated operator) controls day-to-day drilling and production decisions. Net cash flow is calculated as gross revenue minus royalties, severance taxes, and all operating expenses attributed to the interest holder's share.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Equity & Dividends",
          "level": "category",
          "children": [
            {
              "name": "Business Development Companies (BDCs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Non-Traded BDCs",
                  "level": "leaf",
                  "description": "Non-traded BDCs operate identically to publicly traded BDCs in terms of investment strategy (middle-market lending) and regulatory requirements (90% distribution, leverage limits) but do not list on public stock exchanges. Shares are sold through broker-dealers, financial advisors, and registered investment advisors at a fixed offering price (typically $25/share). Valuations are reported periodically (quarterly) based on internal or third-party appraisals rather than daily market prices.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Private BDCs",
                  "level": "leaf",
                  "description": "Private BDCs are business development companies that do not register under the Securities Act of 1933 and sell interests exclusively to qualified purchasers or accredited investors through private placements. They avoid both public exchange listing and the retail distribution channels of non-traded BDCs. Private BDCs offer institutional investors and high-net-worth individuals access to bespoke private credit portfolios with potentially higher returns due to less competition for deals and greater structural flexibility.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Publicly Traded BDCs",
                  "level": "leaf",
                  "description": "Publicly traded BDCs list on major stock exchanges (NYSE, Nasdaq), providing daily liquidity and price transparency for investors seeking exposure to middle-market private credit. They primarily originate or purchase senior secured loans, mezzanine debt, and equity co-investments in private companies. BDCs earn income from the interest rate spread between their borrowing costs and the rates charged to portfolio companies, similar to banks but without deposit funding.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Closed-End Funds (CEFs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Equity Closed-End Funds",
                  "level": "leaf",
                  "description": "Equity CEFs invest in diversified portfolios of common stocks, often with a mandate to generate both income and capital appreciation. Many employ covered call writing, dividend capture strategies, or managed distribution policies to offer yields significantly above the market average. Fund managers have the advantage of a stable capital base, allowing them to maintain positions through volatility without forced selling due to redemptions.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Fixed Income Closed-End Funds",
                  "level": "leaf",
                  "description": "Fixed income CEFs invest in bond portfolios -- including investment grade corporates, high yield bonds, leveraged loans, emerging market debt, and government securities -- and use leverage to amplify income. The CEF structure is particularly well-suited for fixed income because it allows managers to invest in less liquid bonds without the redemption pressures that plague open-end bond funds during market stress. Leverage ratios of 25%-35% of total assets are typical.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "GP Stakes / Management Company Investments",
                  "level": "leaf",
                  "description": "Acquiring minority equity stakes in alternative asset management firms, earning yield from the manager's recurring fee income (management fees of 1\u20132% on AUM, carried interest of 15\u201320% of profits, co-investment and transaction fees). Fee streams from long-duration locked-up capital provide annuity-like income characteristics.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "GP-Led Secondaries / Continuation Funds",
                  "level": "leaf",
                  "description": "Purchasing LP interests in private equity funds on the secondary market at a discount to NAV, or participating in GP-led continuation vehicles where the GP transfers assets from an expiring fund into a new vehicle. Provides immediate portfolio exposure with ongoing yield from mature portfolio distributions.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Interval Funds",
                  "level": "leaf",
                  "description": "Interval funds are a type of closed-end fund that are legally required to periodically offer to repurchase shares at NAV, typically quarterly, at a rate of 5%-25% of outstanding shares. Unlike exchange-traded CEFs, interval funds do not trade on secondary markets -- the periodic repurchase offer is the sole liquidity mechanism. This structure allows interval funds to invest heavily in illiquid assets such as private credit, real estate, structured products, and alternative strategies while still offering retail investor access.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Leveraged Closed-End Funds",
                  "level": "leaf",
                  "description": "Leveraged CEFs borrow money or issue preferred shares to increase the size of their investment portfolio beyond the equity capital contributed by common shareholders. Leverage is the defining structural feature that distinguishes CEFs from ETFs and open-end funds (which face strict leverage limits). By investing borrowed capital at rates exceeding the cost of borrowing, leveraged CEFs aim to enhance income and total returns. Leverage ratios typically range from 25% to 40% of total assets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Multi-Asset Closed-End Funds",
                  "level": "leaf",
                  "description": "Multi-asset CEFs invest across multiple asset classes -- equities, fixed income, preferred stocks, convertible securities, and alternative strategies -- within a single fund, seeking to optimize income generation through flexible allocation. These funds offer one-stop diversified income exposure with the ability to shift weightings among asset classes as opportunities arise. The closed-end structure allows managers to hold illiquid positions across asset classes without redemption pressure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Municipal Bond Closed-End Funds",
                  "level": "leaf",
                  "description": "Municipal CEFs invest in portfolios of tax-exempt municipal bonds and use leverage to enhance after-tax income for investors in high tax brackets. These funds are among the most popular CEF types because the tax-exempt income, amplified by leverage, can produce compelling after-tax yields. They invest in general obligation bonds, revenue bonds, and essential-service bonds from state and local governments, often with a focus on a particular credit quality tier or state-specific tax exemption.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Split Corps / Split Shares",
                  "level": "leaf",
                  "description": "Split share corporations (split corps) are Canadian closed-end investment vehicles that hold a portfolio of dividend-paying stocks and divide the economic interests into two classes: capital shares (which receive all the capital appreciation and depreciation) and preferred shares (which receive all the dividend income, typically at a fixed rate). This structural separation allows income-focused investors to receive enhanced, predictable yields from the preferred shares, while growth-oriented investors capture leveraged capital appreciation through the capital shares.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Tender Offer Funds",
                  "level": "leaf",
                  "description": "Tender offer funds are closed-end funds that periodically offer to repurchase a percentage of outstanding shares at or near net asset value, typically on a quarterly or semi-annual basis. This mechanism provides a partial liquidity solution for investors while preserving the fund's ability to invest in illiquid assets. Unlike interval funds (which are legally required to make repurchase offers), tender offers are discretionary and can be modified or suspended by the board, though doing so would damage the fund's reputation and investor trust.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Term Trusts",
                  "level": "leaf",
                  "description": "Term trusts are closed-end funds with a predetermined termination date, at which point the fund liquidates its portfolio and returns the net asset value to shareholders. Unlike perpetual CEFs, term trusts have a defined lifespan, typically 10-15 years from inception. The built-in termination date provides a natural catalyst for discount narrowing as the end date approaches, since the fund will eventually distribute NAV regardless of where the shares trade.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Dividend Stocks",
              "level": "subcategory",
              "children": [
                {
                  "name": "Blue Chip Dividends",
                  "level": "leaf",
                  "description": "Blue chip dividend stocks are shares of large, well-established, financially sound companies with long operating histories and market capitalizations typically exceeding $10 billion. These firms generate consistent free cash flow and maintain regular dividend payments through various economic cycles. They tend to occupy dominant positions in mature industries such as consumer staples, healthcare, utilities, and industrials.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Dividend Aristocrats",
                  "level": "leaf",
                  "description": "Dividend Aristocrats are S&P 500 constituents that have increased their annual dividend for at least 25 consecutive years. This elite designation signals exceptional management discipline, durable competitive advantages, and consistent cash flow generation across multiple business cycles, recessions, and market dislocations. The S&P 500 Dividend Aristocrats Index, maintained by S&P Dow Jones Indices, is the benchmark for this category.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Dividend Growth Stocks",
                  "level": "leaf",
                  "description": "Dividend growth investing prioritizes companies with moderate current yields but strong, consistent records of annual dividend increases. The strategy relies on the compounding effect of rising payouts: a stock yielding 2% today that grows its dividend at 10% per year will yield over 5% on the original cost basis within a decade. Dividend growth stocks tend to be high-quality businesses with expanding earnings, manageable leverage, and wide competitive moats.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Dividend Kings",
                  "level": "leaf",
                  "description": "Dividend Kings are companies that have raised their annual dividend for 50 or more consecutive years, a distinction that spans half a century of economic history including multiple recessions, inflationary episodes, and market crashes. This is the most exclusive dividend-growth designation and typically includes only 40-55 companies at any given time. Many Dividend Kings are also Aristocrats, but some fall outside the S&P 500.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Ex-U.S. Dividend Markets",
                  "level": "leaf",
                  "description": "Certain non-U.S. equity markets have structurally higher dividend payout ratios and yields than the United States, reflecting different corporate cultures, tax regimes, and investor expectations. The UK, Australia, continental Europe, and parts of emerging Asia are particularly notable for dividend generosity. Investing in these markets offers geographic diversification and access to sectors underrepresented in U.S. indices (e.g., European banks, Australian miners, Asian telecoms).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "High Dividend Yield Stocks",
                  "level": "leaf",
                  "description": "High dividend yield stocks are equities offering current yields significantly above the broad market average (typically above 4%), often found in capital-intensive, regulated, or mature industries. These include utilities, telecoms, tobacco, energy infrastructure, real estate operating companies, and certain financial firms. The elevated yield may reflect generous payout policies, slow growth prospects, or market pessimism about the company's future.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "International Dividends & ADRs",
                  "level": "leaf",
                  "description": "International dividend investing accesses equity income from companies domiciled outside the United States, either through American Depositary Receipts (ADRs) traded on U.S. exchanges or through direct purchase on foreign exchanges. Many international markets, particularly in Europe, Australia, and parts of Asia, have higher dividend payout cultures than the U.S., offering elevated yields. ADRs convert foreign shares into dollar-denominated, U.S.-exchange-listed instruments for convenient domestic access.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Special Dividends",
                  "level": "leaf",
                  "description": "Special dividends are one-time, non-recurring cash distributions that companies pay outside their regular dividend schedule, typically funded by asset sales, litigation settlements, accumulated excess cash, or extraordinarily profitable periods. They are declared at the board's discretion with no expectation of repetition. Special dividends can be substantial, sometimes exceeding the annual regular dividend by multiples.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            },
            {
              "name": "Equity Income Funds & ETFs",
              "level": "subcategory",
              "children": [
                {
                  "name": "Dividend-Focused ETFs",
                  "level": "leaf",
                  "description": "Dividend-focused ETFs hold diversified baskets of dividend-paying stocks selected through screens based on yield, dividend growth, payout sustainability, or a combination of quality factors. They provide instant diversification across dozens or hundreds of dividend payers, eliminating single-stock risk. These ETFs have become the dominant vehicle for retail and institutional dividend investors due to low expense ratios, tax efficiency, and intraday liquidity.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Equity Income Mutual Funds",
                  "level": "leaf",
                  "description": "Equity income mutual funds are actively managed pooled vehicles that invest primarily in dividend-paying stocks with the dual objective of current income and long-term capital appreciation. Fund managers exercise judgment in security selection, sector allocation, and position sizing, often blending high-current-yield stocks with dividend growth names. These funds predate the ETF era and remain popular in retirement accounts and advisor-managed portfolios.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Master Limited Partnerships (MLPs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Gathering and Processing MLPs",
                  "level": "leaf",
                  "description": "Gathering and processing MLPs operate upstream midstream infrastructure: they collect natural gas from wellheads through small-diameter gathering pipelines and process it to remove natural gas liquids (NGLs) before the dry gas enters long-haul transmission pipelines. These MLPs have historically offered higher yields than pipeline MLPs to compensate for greater commodity price sensitivity, as some contracts include commodity-linked fee components or direct commodity exposure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "MLP Funds and ETFs",
                  "level": "leaf",
                  "description": "MLP funds and ETFs provide diversified exposure to the MLP universe without the tax complexity of direct MLP unit ownership. These vehicles issue standard 1099 tax forms instead of K-1s, making them suitable for IRAs and tax-averse investors. They come in several structures, each with distinct tax implications: C-corporation ETFs (subject to corporate-level taxation), RIC-compliant ETFs (limited to 25% MLP exposure), and open-end/closed-end funds.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Marine Transportation MLPs",
                  "level": "leaf",
                  "description": "Marine transportation MLPs own and operate vessels that transport crude oil, refined products, natural gas liquids, and chemicals through inland waterways, coastal routes, and occasionally international waters. These MLPs benefit from the Jones Act, which requires goods shipped between U.S. ports to be carried on U.S.-built, U.S.-flagged, and U.S.-crewed vessels, creating a significant barrier to entry. Revenue is typically earned through time charters, voyage charters, or contracts of affreightment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pipeline MLPs",
                  "level": "leaf",
                  "description": "Pipeline MLPs own and operate midstream energy infrastructure -- primarily natural gas, crude oil, and refined product pipelines -- earning revenue through long-term, fee-based transportation contracts. Cash flows are generally tied to volumes transported rather than commodity prices, providing relative stability. Pipeline MLPs have been a cornerstone of energy income investing, offering yields well above those available from traditional equities.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Propane Distribution MLPs",
                  "level": "leaf",
                  "description": "Propane distribution MLPs operate retail and wholesale propane delivery businesses, serving residential, commercial, agricultural, and industrial customers. Revenue is seasonal, peaking during winter heating months, and is influenced by both propane commodity prices and weather patterns. These MLPs typically own delivery trucks, storage facilities, and customer relationships across their service territories.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Royalty Trusts",
              "level": "subcategory",
              "children": [
                {
                  "name": "Mining Royalty Trusts",
                  "level": "leaf",
                  "description": "Mining royalty trusts hold royalty interests in mineral extraction operations, primarily precious metals (gold, silver), base metals (copper, iron ore), or industrial minerals. They receive a percentage of revenue or net smelter returns from mining operations on specific properties. Like oil and gas trusts, mining royalty trusts are pass-through entities with declining production profiles, though some mineral deposits have longer productive lives than typical oil and gas wells.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Oil and Gas Royalty Trusts",
                  "level": "leaf",
                  "description": "Oil and gas royalty trusts hold overriding royalty interests or net profits interests in specific oil and gas properties. They receive a percentage of revenue (or net profits) from hydrocarbon production on defined acreage, with no involvement in operations, capital spending, or development decisions. Distributions fluctuate directly with commodity prices and production volumes, and decline secularly as reserves are depleted. These trusts pay no corporate-level taxes; all income flows through to unitholders.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Exotic & Alternative Assets",
          "level": "category",
          "children": [
            {
              "name": "Art & Collectibles Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Fractional Art Ownership",
                  "level": "leaf",
                  "description": "Platforms that securitize individual artworks into shares, allowing investors to buy fractional ownership and receive a share of appreciation when the work is sold. Some structures provide interim yield from exhibition fees or lending.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Rare Whisky Casks",
                  "level": "leaf",
                  "description": "Purchasing casks of maturing Scotch whisky, bourbon, or other spirits as investments. Whisky appreciates as it ages in the cask (the \"angel's share\" reduces volume but increases quality and per-liter value). Returns are realized upon bottling and sale.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Wine Investing",
                  "level": "leaf",
                  "description": "Acquiring fine wine (primarily Bordeaux, Burgundy, Champagne, select Italian and California wines) as an investment, storing in bonded warehouses, and selling at appreciated prices. Wine generates no current yield \u2014 returns come purely from price appreciation.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Niche Receivables & Assets",
              "level": "subcategory",
              "children": [
                {
                  "name": "Aircraft Parts-Out / Teardown Revenue",
                  "level": "leaf",
                  "description": "Purchasing retired aircraft at end-of-life, disassembling them, and selling individual components (engines, landing gear, avionics, auxiliary power units, flight control surfaces, interior components) in the aftermarket parts market. The sum of the parts typically exceeds the whole-aircraft value by 2\u20135x.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Sports Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Team Revenue Sharing",
                  "level": "leaf",
                  "description": "Investing in professional sports team equity or revenue-participation instruments that provide exposure to team revenue streams (broadcasting, gate receipts, merchandise, sponsorships, stadium revenue). Recent regulatory changes allow PE investment in several major leagues.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Infrastructure & Project Finance",
          "level": "category",
          "children": [
            {
              "name": "Infrastructure Equity",
              "level": "subcategory",
              "children": [
                {
                  "name": "Communication Infrastructure: Towers, Fiber",
                  "level": "leaf",
                  "description": "Communication infrastructure equities comprise publicly traded tower companies, fiber-optic network operators, and small-cell network providers that lease access to their physical infrastructure to wireless carriers, cable companies, internet service providers, and enterprise customers. Tower companies in particular have demonstrated exceptional yield growth characteristics, with contractual lease escalators (typically 3%--5% per year), long-term tenant leases (5--10 years with renewal options), high incremental margins from co-location, and minimal capital requirements for existing towers. The sector benefits from insatiable wireless data demand growth driving continued carrier network investment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Gas Utilities",
                  "level": "leaf",
                  "description": "Gas utilities operate regulated natural gas distribution systems, delivering gas to residential, commercial, and industrial customers through local distribution company (LDC) networks. Like electric utilities, they earn returns set by regulators based on invested capital. Gas utilities provide pure-play regulated yield with minimal commodity exposure, as gas procurement costs are passed through to customers via purchased gas adjustment clauses. However, the sector faces long-term existential questions as electrification policies in some jurisdictions threaten to reduce gas demand and strand distribution assets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Midstream Energy: Pipelines, Terminals, Storage",
                  "level": "leaf",
                  "description": "Midstream energy companies own and operate pipelines, natural gas processing plants, storage facilities, marine terminals, and other assets that gather, process, transport, and store hydrocarbons. They generate yield through master limited partnership (MLP) distributions or C-corporation dividends funded by fee-based revenue from long-term contracts with producers and shippers. The midstream sector underwent significant restructuring during 2015--2020, with many MLPs converting to C-corporation structures, reducing leverage, and improving distribution coverage ratios to create more sustainable yield profiles.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Regulated Electric Utilities",
                  "level": "leaf",
                  "description": "Regulated electric utilities generate, transmit, and distribute electricity under the oversight of state public utility commissions (PUCs) that set rates designed to provide a fair return on the utility's invested capital (rate base). Dividends are funded by the spread between the allowed return on equity (ROE) and the utility's cost of capital. These are among the most stable equity yield sources due to the monopolistic service territory, essential demand, and regulatory compact that provides revenue predictability. Growth is driven by rate base expansion through capital investment in grid modernization, renewable generation, and electrification.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Renewable Energy YieldCos",
                  "level": "leaf",
                  "description": "Renewable energy YieldCos are publicly traded companies formed to own operating renewable energy generation assets---primarily solar farms and wind farms---with long-term power purchase agreements (PPAs) that provide contracted, predictable cash flows. The YieldCo structure was designed to offer a low-cost-of-capital vehicle for renewable energy developers to monetize completed projects while providing investors with stable, growing dividends. Revenue is derived from fixed-price PPAs with investment-grade offtakers (utilities, corporations, government agencies), capacity payments, and renewable energy certificate (REC) sales.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Transportation Infrastructure",
                  "level": "leaf",
                  "description": "Transportation infrastructure equities encompass publicly traded companies and funds that own and operate toll roads, airports, seaports, rail networks, and intermodal logistics facilities. These businesses generate yield from usage-based fees (tolls, landing fees, docking charges) or regulated tariffs, typically under long-term concession agreements with government authorities. The sector offers inflation-linked revenue growth (many concessions include CPI-based toll escalation), long asset lives, and high barriers to entry, but with demand sensitivity to economic cycles and travel patterns.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Water Utilities",
                  "level": "leaf",
                  "description": "Water utilities own and operate regulated drinking water treatment and distribution systems, wastewater collection and treatment facilities, and related infrastructure. They earn regulated returns on invested capital similarly to electric and gas utilities. Water utilities are considered the most defensive utility subsector due to the absolute essential nature of water service, high capital intensity creating significant barriers to entry, and a massive national infrastructure replacement need (estimated at $1 trillion+ over 25 years by the AWWA) that supports sustained rate base growth.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Public-Private Partnerships (P3)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Availability Payment Concessions",
                  "level": "leaf",
                  "description": "Availability payment concessions are P3 structures where the private partner finances, builds, and operates a public asset (highway, bridge, hospital, courthouse) and receives periodic payments from the government based on the asset's availability and performance standards rather than usage levels. The government retains demand/traffic risk while transferring construction, financing, and maintenance risk to the private partner. These structures produce highly predictable, bond-like cash flows because payments depend on facility availability (typically 95%--99%) rather than fluctuating demand, making them attractive to risk-averse institutional investors.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Demand Risk Concessions",
                  "level": "leaf",
                  "description": "Demand risk concessions are P3 structures where the private partner's revenue depends directly on the level of usage of the infrastructure asset---the number of vehicles on a toll road, passengers through an airport terminal, or patients treated in a hospital. The private partner bears both construction/operational risk and demand/traffic risk, which requires more sophisticated forecasting and creates greater cash flow variability. In exchange for absorbing demand risk, equity investors demand higher returns than in availability-payment structures. These concessions reward partners who can accurately forecast demand, optimize operations, and implement revenue-enhancing strategies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Shadow Toll Roads",
                  "level": "leaf",
                  "description": "Shadow toll roads are a hybrid P3 structure where the private concessionaire builds and operates a road, but instead of collecting tolls directly from users, the government pays the concessionaire a per-vehicle fee based on actual traffic volumes. Users drive for free, and the government bears the political cost of funding the payments from general tax revenue. This structure eliminates the political friction of direct user tolling while still linking private-sector compensation to road usage. Shadow tolls were most popular in the UK, Spain, and Portugal during the 1990s and 2000s.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Real Estate",
          "level": "category",
          "children": [
            {
              "name": "Mortgage REITs (mREITs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Agency Mortgage REITs",
                  "level": "leaf",
                  "description": "Agency mREITs invest primarily in mortgage-backed securities (MBS) issued or guaranteed by U.S. government-sponsored enterprises (Fannie Mae, Freddie Mac) and the Government National Mortgage Association (Ginnie Mae). The agency guarantee eliminates credit risk, leaving interest rate risk and prepayment risk as the primary concerns. These vehicles generate income from the spread between MBS yields and short-term borrowing costs, amplified by leverage typically ranging from 5x to 10x equity.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Commercial Mortgage REITs",
                  "level": "leaf",
                  "description": "Commercial mREITs originate or acquire loans secured by commercial real estate properties including office buildings, hotels, retail centers, multifamily complexes, and industrial facilities. These are typically transitional or bridge loans with floating interest rates, higher yields, and shorter maturities than permanent financing. Income derives from the spread between loan interest rates and the cost of the mREIT's matched funding (CLOs, warehouse lines, repurchase agreements).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Hybrid Mortgage REITs",
                  "level": "leaf",
                  "description": "Hybrid mREITs invest across both agency and non-agency mortgage securities, as well as other real estate-related debt and equity instruments, providing a diversified exposure to the real estate capital stack. These platforms can shift allocation between credit-sensitive and rate-sensitive assets based on the macroeconomic environment. Some hybrid mREITs also invest in equity interests, preferred equity, mezzanine loans, and mortgage servicing rights (MSRs).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Non-Agency Mortgage REITs",
                  "level": "leaf",
                  "description": "Non-agency mREITs invest in residential mortgage-backed securities (RMBS) that lack government agency guarantees, including subprime, Alt-A, jumbo, credit risk transfer (CRT) securities, and non-qualified mortgage (non-QM) whole loans. These investments carry credit risk in addition to interest rate risk, and they trade at wider spreads to compensate for the potential for borrower defaults. The opportunity set expanded significantly after the 2008 financial crisis with the emergence of discounted legacy non-agency RMBS.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Private Real Estate",
              "level": "subcategory",
              "children": [
                {
                  "name": "Delaware Statutory Trusts (DSTs) for 1031 Exchanges",
                  "level": "leaf",
                  "description": "Delaware Statutory Trusts are pre-packaged, passive real estate investments structured to qualify as replacement property in IRS Section 1031 tax-deferred exchanges. DSTs allow investors who have sold investment property to defer capital gains taxes by investing sale proceeds into fractional interests in institutional-quality real estate (apartment complexes, industrial buildings, medical offices, net lease retail). The DST sponsor acquires the property, arranges financing, and manages operations.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Opportunity Zone Funds",
                  "level": "leaf",
                  "description": "Qualified Opportunity Zone (QOZ) Funds invest in economically distressed communities designated by state governors under the 2017 Tax Cuts and Jobs Act. Investors who roll capital gains into QOZ funds receive three tax benefits: (1) deferral of the original capital gain until 2026 or earlier disposition, (2) a step-up in basis on the deferred gain (previously 10-15%, now only if invested before certain deadlines that have passed), and (3) permanent exclusion of gains on the QOZ investment itself if held for 10+ years.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Real Estate Crowdfunding",
                  "level": "leaf",
                  "description": "Real estate crowdfunding platforms aggregate capital from many individual investors to fund real estate equity or debt investments, offering fractional access to deals that were previously available only to institutional or high-net-worth investors. Platforms operate as marketplaces (connecting investors with sponsors) or as direct operators (originating and managing investments in-house). Minimum investments can be as low as $10-$500, dramatically lowering the barrier to entry.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Real Estate Syndications",
                  "level": "leaf",
                  "description": "Real estate syndications are private partnerships where a sponsor (general partner) identifies, acquires, manages, and eventually sells a property while passive investors (limited partners) provide the majority of equity capital. Syndications are typically structured as LLCs and offer investors passive income distributions, tax benefits (depreciation pass-through), and a share of profits upon sale. This is the primary vehicle for passive investors seeking direct real estate returns without management responsibilities.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Tenants-in-Common (TIC)",
                  "level": "leaf",
                  "description": "Tenants-in-Common structures allow multiple investors (up to 35) to co-own direct interests in a single real estate property, with each investor holding an undivided fractional interest recorded on the deed. TICs qualify as replacement property for 1031 exchanges and provide direct ownership benefits including proportional depreciation and income. Unlike DSTs, TIC investors can participate in major property decisions and approve financing, but this active involvement creates coordination complexity.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Public REITs (Equity REITs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "Apartments / Multifamily REITs",
                  "level": "leaf",
                  "description": "Multifamily REITs own and operate apartment communities, ranging from Class A luxury high-rises to Class B/C workforce housing. Revenue comes from monthly rents with typical lease terms of 12 months, allowing frequent mark-to-market repricing. This short lease duration provides a natural inflation hedge relative to longer-lease property types.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Billboard / Outdoor Advertising REITs",
                  "level": "leaf",
                  "description": "Billboard REITs own outdoor advertising structures including traditional static billboards, digital billboards, transit advertising displays, and street furniture. Revenue derives from leasing ad space to advertisers under contracts typically ranging from weeks to years. Digital billboards can display multiple rotating advertisements, generating 3-5x the revenue of static boards, and the conversion pipeline from static to digital is a primary growth driver.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Casino / Gaming REITs",
                  "level": "leaf",
                  "description": "Gaming REITs own the real estate underlying casino and resort properties, leasing them to gaming operators under long-term triple-net master lease structures. This structure separates the capital-intensive real property (owned by the REIT) from the operating business (run by the gaming company), allowing operators to focus capital on operations and expansion while the REIT collects contracted rent. Revenue is predictable due to long lease terms (15-30+ years) with built-in escalators.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cell Tower REITs",
                  "level": "leaf",
                  "description": "Cell tower REITs own and operate telecommunications tower infrastructure on which wireless carriers mount antennas and equipment under long-term lease agreements. The business model is characterized by extraordinary operating leverage: once a tower is built, each additional tenant (co-location) generates incremental revenue at near-100% margins. Revenue is contractual with built-in annual escalators of 3-5%.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Data Center REITs",
                  "level": "leaf",
                  "description": "Data center REITs own and operate facilities that house servers, networking equipment, and storage systems for enterprise and hyperscale cloud tenants. Revenue comes from leasing powered shell space or fully fitted colocation suites with contracted power, cooling, and connectivity. The AI revolution and cloud computing megatrend have driven extraordinary demand growth for this property type.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Diversified REITs",
                  "level": "leaf",
                  "description": "Diversified REITs own portfolios spanning multiple property types, providing built-in sector diversification within a single investment vehicle. These REITs may own combinations of office, industrial, retail, residential, and specialty properties. The diversified approach sacrifices the pure-play focus that many institutional investors prefer but offers broader economic exposure and the flexibility to allocate capital to the most attractive property types.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Farmland REITs",
                  "level": "leaf",
                  "description": "Farmland REITs own agricultural land that is leased to farmers and agribusiness operators under long-term agreements. Revenue derives from fixed cash rents, flexible/participation rents tied to crop revenues, and land appreciation. Farmland provides a genuine inflation hedge as agricultural commodity prices and land values tend to rise with the general price level.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Fiber / Broadband Infrastructure REITs",
                  "level": "leaf",
                  "description": "Fiber and broadband infrastructure REITs own fiber-optic networks, dark fiber, small cells, and last-mile broadband infrastructure leased to carriers, enterprises, and government entities. Revenue comes from long-term lit and dark fiber leases, small cell node leases, and enterprise connectivity contracts. The insatiable demand for bandwidth driven by cloud computing, streaming, and 5G densification provides a structural demand tailwind.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Ground Lease REITs",
                  "level": "leaf",
                  "description": "Ground lease REITs own the land beneath commercial properties and lease it to building owners under extremely long-term (typically 30-99 year) ground lease structures. The building owner pays ground rent and is responsible for all property-level expenses, taxes, and maintenance. At lease expiration, ownership of the building and all improvements reverts to the ground lessor, creating significant long-term value accretion.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Healthcare REITs",
                  "level": "leaf",
                  "description": "Hospital REITs own acute-care hospital facilities leased to health system operators under long-term, triple-net or modified-gross lease structures. These are large, specialized assets with high replacement costs and limited alternative-use potential. Revenue is driven by the lessee's ability to generate sufficient patient volume and reimbursement to cover rent obligations.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Hospitality / Hotel REITs",
                  "level": "leaf",
                  "description": "Hotel REITs own lodging properties including full-service luxury and upper-upscale hotels, select-service/limited-service hotels, extended-stay properties, and resort destinations. Unlike most other property types, hotel \"leases\" effectively reprice nightly, making revenue highly sensitive to economic cycles. Revenue per available room (RevPAR) -- combining occupancy and average daily rate (ADR) -- is the core operating metric.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Industrial / Logistics REITs",
                  "level": "leaf",
                  "description": "Industrial REITs own warehouses, distribution centers, fulfillment facilities, and logistics parks that serve e-commerce, supply chain, and manufacturing tenants. The explosive growth of online retail and the need for last-mile delivery infrastructure have made industrial the most favored property type in institutional real estate. Lease terms typically range from 3 to 10 years with embedded annual escalators.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Manufactured Housing REITs",
                  "level": "leaf",
                  "description": "Manufactured housing REITs own the land underneath mobile home communities while residents typically own their individual homes. This structure creates an unusually stable income stream because moving a manufactured home is prohibitively expensive, resulting in tenant \"stickiness\" and very low turnover. Lot rents are the primary revenue source and have historically grown steadily.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Net Lease / Triple-Net (NNN) REITs",
                  "level": "leaf",
                  "description": "Net lease REITs own single-tenant commercial properties under long-term (10-25 year) triple-net leases where the tenant is responsible for property taxes, insurance, and maintenance. This structure minimizes landlord operating expenses and produces highly predictable, bond-like cash flows. Tenants are typically investment-grade or large national operators in retail, industrial, or office sectors.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Office REITs",
                  "level": "leaf",
                  "description": "Office REITs own and operate office buildings, generating revenue from multi-year leases with corporate and government tenants. Lease terms typically range from 5 to 15 years, providing medium-term cash flow visibility. The sector has undergone structural disruption from remote and hybrid work trends that have elevated vacancy rates in many markets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Regional Mall REITs",
                  "level": "leaf",
                  "description": "Regional mall REITs own large enclosed shopping centers anchored by department stores and featuring inline specialty retail tenants. Revenue derives from base rents, percentage rents tied to tenant sales, and common area maintenance (CAM) reimbursements. The sector has been under pressure from e-commerce penetration, but the highest-quality malls with strong traffic and sales productivity have proven resilient.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Self-Storage REITs",
                  "level": "leaf",
                  "description": "Self-storage REITs own and operate facilities offering month-to-month rental of individual storage units to residential and commercial customers. The business model benefits from high operating margins (low staffing, minimal maintenance), strong pricing power on existing tenants (who exhibit behavioral inertia and rarely comparison-shop once moved in), and recession resilience driven by life-event demand (moves, divorces, deaths, downsizing). Revenue is driven by street rates, existing customer rate increases (ECRI), and occupancy.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Single-Family Rental (SFR) REITs",
                  "level": "leaf",
                  "description": "SFR REITs acquire, renovate, and lease single-family homes, targeting suburban markets with strong population growth and limited housing supply. The business model emerged at scale after the 2008 financial crisis when institutional capital acquired distressed homes. Tenants are typically families who prefer the space and school-district access of a house but cannot or choose not to buy.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Specialty REITs",
                  "level": "leaf",
                  "description": "Specialty REITs own property types that do not fit neatly into traditional REIT categories, including education facilities, single-use commercial properties, government-leased buildings, entertainment venues, and other niche asset classes. These REITs often exploit unique niches with high barriers to entry or serve specialized tenant bases with limited alternatives. The \"specialty\" label is a catch-all for innovative or unconventional real estate platforms.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Strip Center / Shopping Center REITs",
                  "level": "leaf",
                  "description": "Strip center REITs own open-air, grocery-anchored, and neighborhood shopping centers that serve daily-needs retail. These properties are anchored by essential tenants such as supermarkets, pharmacies, discount retailers, and service-oriented businesses (salons, medical offices, restaurants) that are resistant to e-commerce displacement. Lease terms typically range from 5 to 10 years with built-in annual rent escalators.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Timber REITs",
                  "level": "leaf",
                  "description": "Timber REITs own and manage timberland, generating income from the harvest and sale of standing timber (stumpage), log sales, and in some cases the manufacturing of wood products. Timber is a biological asset that grows in volume and value over time regardless of economic conditions, providing a natural inflation hedge. Revenue timing is flexible because harvest can be deferred during weak lumber markets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Real Estate-Adjacent",
              "level": "subcategory",
              "children": [
                {
                  "name": "Tax Deed Investing",
                  "level": "leaf",
                  "description": "Tax deed investing involves purchasing properties at government-conducted tax deed sales, where the property itself (not just the lien) is sold to satisfy delinquent property tax obligations. The investor acquires the deed to the property, typically for a fraction of market value, after the original owner has failed to pay taxes for an extended period (usually 3-5 years). This is a direct property acquisition strategy rather than a debt investment.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            }
          ]
        },
        {
          "name": "Structured Credit & Securitized Products",
          "level": "category",
          "children": [
            {
              "name": "Collateralized Loan Obligations (CLOs)",
              "level": "subcategory",
              "children": [
                {
                  "name": "CLO Equity / Residual Tranches",
                  "level": "leaf",
                  "description": "CLO equity (also called the residual, subordinated, or income notes) represents the first-loss position in a CLO capital structure. CLO equity receives the excess spread after all debt tranche interest payments and fees are satisfied and all OC/IC tests are passed. As the most junior claim, equity absorbs the first losses from defaults in the loan portfolio but also captures the full residual economics of the CLO structure -- the spread between the weighted average yield on the loan portfolio and the blended cost of the CLO's debt liabilities. CLO equity returns are highly path-dependent and can range from exceptional to negative.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Tax Credits & Incentives",
          "level": "category",
          "children": [
            {
              "name": "Tax Credits & Incentives",
              "level": "subcategory",
              "children": [
                {
                  "name": "Conservation Easements",
                  "level": "leaf",
                  "description": "A conservation easement is a voluntary legal agreement in which a landowner permanently restricts development rights on their property to protect conservation values (open space, habitat, agricultural land, scenic views). The landowner donates the easement to a qualified land trust or government entity and receives a charitable deduction equal to the reduction in the property's fair market value resulting from the restrictions. Syndicated conservation easement transactions -- where investors purchase partnership interests in land specifically to claim easement deductions -- have been subject to intense IRS scrutiny and enforcement.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Film & Entertainment Tax Credits",
                  "level": "leaf",
                  "description": "Film and entertainment tax credits are offered by approximately 35 U.S. states and numerous international jurisdictions to attract film, television, and digital media production. These credits typically range from 20%--30% of qualified in-state production expenditures, with some states offering additional bonuses for local hiring, diverse locations, or post-production work. While the primary benefit flows to production companies, transferable or refundable credits create investment opportunities for third-party purchasers who buy credits at a discount to face value.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Historic Tax Credits (HTC)",
                  "level": "leaf",
                  "description": "The federal Historic Tax Credit provides a 20% income tax credit for qualified rehabilitation expenditures on certified historic structures (buildings listed on the National Register of Historic Places or contributing structures in registered historic districts). The credit applies to the costs of rehabilitation (not acquisition) and must be claimed over a five-year period (4% per year). HTCs are typically monetized by developers through partnerships with tax credit investors, who provide equity in exchange for credit allocation and depreciation benefits.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Low-Income Housing Tax Credits (LIHTC)",
                  "level": "leaf",
                  "description": "The Low-Income Housing Tax Credit is the primary federal subsidy for affordable rental housing production. Created by the Tax Reform Act of 1986, LIHTC provides tax credits to developers of qualifying affordable housing projects, which are then syndicated to investors through partnerships. The 9% credit (competitive allocation) and the 4% credit (as-of-right with tax-exempt bond financing) are claimed annually over a 10-year period. LIHTC has financed over 3.6 million affordable housing units since inception and generates approximately $17 billion in annual equity investment.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "New Markets Tax Credits (NMTC)",
                  "level": "leaf",
                  "description": "The New Markets Tax Credit program provides a 39% federal tax credit over seven years (5% in years 1--3, 6% in years 4--7) for qualified equity investments in Community Development Entities (CDEs) that deploy capital into low-income communities. NMTCs are allocated to CDEs through a competitive application process administered by the CDFI Fund. The program targets commercial, industrial, and mixed-use real estate as well as operating businesses in qualifying census tracts.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "R&D Tax Credits (Section 41)",
                  "level": "leaf",
                  "description": "The federal Research and Development tax credit under IRC Section 41 provides a credit for qualified research expenditures (QREs) incurred in developing new or improved products, processes, software, or techniques. The credit can be calculated using either the regular research credit (20% of QREs exceeding a base amount) or the alternative simplified credit (14% of QREs exceeding 50% of the average QREs for the three preceding years). For small businesses (gross receipts under $5 million), the credit can offset payroll taxes. R&D credits are not directly investable but enhance after-tax yield on research-intensive investments.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Renewable Energy Investment Tax Credit (ITC)",
                  "level": "leaf",
                  "description": "The Investment Tax Credit for renewable energy provides a percentage-of-cost federal tax credit for qualifying clean energy property placed in service, including solar, storage, geothermal, fuel cell, and other technologies. The Inflation Reduction Act of 2022 restructured and extended the ITC as a technology-neutral clean electricity investment credit (Section 48E) starting in 2025, with a base credit of 6% (or 30% if prevailing wage and apprenticeship requirements are met) and bonus adders for domestic content, energy communities, and low-income projects. Tax equity partnerships allow investors without direct energy projects to monetize these credits.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Renewable Energy Production Tax Credit (PTC)",
                  "level": "leaf",
                  "description": "The Production Tax Credit provides a per-kilowatt-hour federal tax credit for electricity generated by qualifying renewable energy facilities during the first 10 years of operation. Historically the primary incentive for wind energy, the PTC was restructured by the IRA as a technology-neutral clean electricity production credit (Section 45Y) starting in 2025. The base credit is approximately $0.55/kWh (adjusted annually for inflation) when prevailing wage and apprenticeship requirements are met (otherwise $0.11/kWh base). PTC-based projects provide a stream of tax benefits over 10 years tied to actual electricity production.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Section 45Q Carbon Capture Credits",
                  "level": "leaf",
                  "description": "The Section 45Q tax credit incentivizes the capture and sequestration or utilization of carbon dioxide (CO2) from industrial sources and direct air capture facilities. As enhanced by the IRA, the credit provides $85 per metric ton for CO2 permanently stored in geological formations (Class VI wells), $60 per metric ton for CO2 used in enhanced oil recovery or other utilization, and $180 per metric ton for direct air capture with geological storage ($130 for DAC with utilization), subject to prevailing wage and apprenticeship compliance. Without wage/apprenticeship compliance, base credits are approximately one-fifth of these amounts.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                },
                {
                  "name": "Section 45X Advanced Manufacturing Production Credit",
                  "level": "leaf",
                  "description": "Created by the Inflation Reduction Act of 2022, the Section 45X credit provides a production tax credit for domestic manufacturing of clean energy components, including solar cells and modules, wind turbine components, inverters, battery cells and modules, and critical minerals processing. The credit is calculated on a per-unit or percentage-of-production-cost basis and is available for components produced and sold after December 31, 2022. Section 45X is designed to incentivize onshoring of clean energy supply chains and is a significant driver of factory investment across the United States.",
                  "on_chain": "not_tokenized",
                  "excluded": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Renting",
      "level": "primitive",
      "primitive": "renting",
      "description": "Granting temporary use of a physical, rivalrous asset",
      "children": [
        {
          "name": "Asset & Equipment Leasing",
          "level": "category",
          "children": [
            {
              "name": "Equipment",
              "level": "subcategory",
              "children": [
                {
                  "name": "AI Compute / GPU Cluster Leasing",
                  "level": "leaf",
                  "description": "Purchasing and leasing GPU clusters (NVIDIA H100/B200, AMD MI300X) and AI compute capacity to companies needing training and inference infrastructure. Compute capacity itself \u2014 not the real estate \u2014 is the yielding asset. The explosive growth of AI model training has created massive demand for GPU compute that exceeds supply, driving premium lease rates.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Agricultural Equipment",
                  "level": "leaf",
                  "description": "Leasing tractors, combines, planters, sprayers, irrigation systems, and precision agriculture technology to farmers and agricultural businesses. Leasing smooths the capital requirements of farming's seasonal income patterns.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Construction Equipment",
                  "level": "leaf",
                  "description": "Leasing heavy construction equipment (excavators, bulldozers, cranes, loaders, backhoes, pavers) to construction companies, infrastructure contractors, and municipalities. Equipment leasing is preferred by contractors who need flexibility across projects.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Industrial Equipment",
                  "level": "leaf",
                  "description": "Leasing manufacturing equipment (CNC machines, robotics, 3D printers, conveyor systems), processing equipment (pumps, compressors, generators), and material handling equipment (forklifts, pallet jacks) to industrial companies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Medical Equipment",
                  "level": "leaf",
                  "description": "Leasing diagnostic imaging equipment (MRI, CT, ultrasound, X-ray), surgical robots, radiation therapy systems, and laboratory instruments to hospitals, imaging centers, and physician practices.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Modular / Temporary Building Rental",
                  "level": "leaf",
                  "description": "Owning and leasing modular buildings, portable offices, and site accommodation to construction sites, schools, hospitals, and disaster relief. Units cost $15K-$100K and lease monthly to multi-year.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Technology & IT Equipment",
                  "level": "leaf",
                  "description": "Leasing servers, networking equipment, data center hardware, PCs/laptops, copiers/printers, and telecom equipment to enterprises. Tech leasing is driven by rapid obsolescence cycles and corporate preference for opex vs. capex.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Infrastructure & Technology Assets",
              "level": "subcategory",
              "children": [
                {
                  "name": "ATM Ownership",
                  "level": "leaf",
                  "description": "Owning and operating independent ATM machines placed in retail locations, earning interchange fees (surcharges) on each transaction. ATM owners collect $2\u2013$4 per transaction from the cardholder plus an interchange fee from the card network.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cell Tower Ground Leases",
                  "level": "leaf",
                  "description": "Owning the land underneath cell towers and collecting ground rent from tower companies (American Tower, Crown Castle, SBA Communications). Ground leases are long-term (20\u201330 years with renewals) and escalate annually.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Data Center Capacity",
                  "level": "leaf",
                  "description": "Investing in data center capacity (colocation space, power, cooling) and leasing it to cloud providers, enterprises, and content delivery networks. Data center demand has been growing exponentially driven by cloud computing, AI workloads, and streaming.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "EV Charging Station Revenue",
                  "level": "leaf",
                  "description": "Owning and operating electric vehicle charging infrastructure (Level 2 and DC fast charging) at retail locations, workplaces, multifamily housing, and highway corridors. Revenue comes from per-kWh or per-session charging fees plus potential demand charges, advertising, and retail partnerships.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Fiber Optic Network Leasing",
                  "level": "leaf",
                  "description": "Owning dark fiber (unlit fiber optic cable) or lit fiber networks and leasing capacity to telecommunications carriers, enterprises, data centers, and government entities. Fiber is a long-lived infrastructure asset (30+ year life) with growing bandwidth demand.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Jet Engine Leasing",
                  "level": "leaf",
                  "description": "Purchasing and leasing commercial aircraft jet engines to airlines and MRO (maintenance, repair, overhaul) providers. Engines are the most valuable component of an aircraft and have independent secondary markets. Spare engines are critical for airline operations during maintenance events.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Laundromat / Vending Machine Income",
                  "level": "leaf",
                  "description": "Owning and operating coin-operated laundromats or vending machine routes, generating cash flow from customer payments. These are classic small-business yield investments with low technology risk and stable demand.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pallet & Returnable Packaging Pooling",
                  "level": "leaf",
                  "description": "Owning pallets, crates, and returnable packaging containers and leasing them to supply chain participants on a per-trip basis. Brambles/CHEP manages ~350M pallets globally generating ~$5B in revenue.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Parking Garage Revenue",
                  "level": "leaf",
                  "description": "Owning and operating parking garages and surface lots, generating revenue from hourly/daily/monthly parking fees plus ancillary income (EV charging, advertising, events). Parking assets are real estate-adjacent but operationally distinct.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Satellite Leasing / Transponder Capacity",
                  "level": "leaf",
                  "description": "Investing in communications satellites and leasing transponder capacity to telecommunications companies, broadcasters, governments, and internet service providers. Satellites have 15\u201320 year orbital lives and generate revenue from capacity leases.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Solar Panel Leasing",
                  "level": "leaf",
                  "description": "Owning residential or commercial rooftop solar panel systems and leasing them to property owners or selling the electricity generated through power purchase agreements (PPAs). The property owner gets clean energy at a discount to utility rates; the investor owns the panels and tax credits.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Transportation",
              "level": "subcategory",
              "children": [
                {
                  "name": "Aircraft Leasing (Direct / EETC / ABS)",
                  "level": "leaf",
                  "description": "Owning and leasing commercial aircraft to airlines. This can be done through direct ownership, Enhanced Equipment Trust Certificates (EETCs), or aircraft ABS. Aircraft leasing is a $300B+ industry with two-thirds of the global fleet now leased rather than owned by airlines.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Automobile / Light Vehicle Fleet Leasing",
                  "level": "leaf",
                  "description": "Owning and leasing passenger vehicles to rental car companies (Hertz, Avis) or corporate fleets on operating lease terms. Global fleet leasing market exceeds $100B.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Barge Leasing",
                  "level": "leaf",
                  "description": "Owning and leasing inland waterway barges (dry cargo, liquid cargo, deck barges) used on river systems (Mississippi, Rhine, Danube) and coastal waterways. Barges are the lowest-cost mode of freight transport per ton-mile.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Container Leasing",
                  "level": "leaf",
                  "description": "Investing in intermodal shipping containers (20ft/40ft standard, refrigerated, tank containers) that are leased to shipping lines on long-term (3\u20138 year) or short-term master lease agreements. Containers are standardized, fungible assets with global demand tied to trade volumes.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Locomotive Leasing",
                  "level": "leaf",
                  "description": "Owning and leasing freight locomotives to Class I railroads and short-line operators. Locomotives cost $2-3M each with 30-40 year useful lives, leased on 5-15 year terms. ~40% of North American fleet is leased.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Private Jet / Business Aviation Leasing",
                  "level": "leaf",
                  "description": "Owning and leasing business jets (Gulfstream, Bombardier, Dassault) to charter operators, fractional programs, and corporations. Global fleet of ~22,000 aircraft valued at $100B+.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Railcar Leasing",
                  "level": "leaf",
                  "description": "Owning and leasing specialized railcars (tank cars, hopper cars, gondolas, intermodal well cars, covered hoppers) to railroads, shippers, and chemical companies. Railcars are long-lived assets (30\u201350 year life) with specialized configurations.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Shipping Vessel Leasing",
                  "level": "leaf",
                  "description": "Owning and chartering commercial vessels (bulk carriers, tankers, container ships, LNG carriers, offshore support vessels) to shipping companies on time charter or bareboat charter arrangements.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Truck & Trailer Leasing",
                  "level": "leaf",
                  "description": "Leasing commercial trucks (Class 8 tractors, box trucks, refrigerated trucks) and trailers (dry van, flatbed, refrigerated) to trucking companies and shippers. Full-service leases include maintenance; net leases are vehicle-only.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Energy & Natural Resources",
          "level": "category",
          "children": [
            {
              "name": "Agriculture / Farmland",
              "level": "subcategory",
              "children": [
                {
                  "name": "Farmland Cash Rental (Direct)",
                  "level": "leaf",
                  "description": "Owning agricultural cropland and leasing to tenant farmers under annual cash rent agreements ($150-$350/acre for prime Corn Belt land). Covers ~40% of all US farmland (~370M acres). The oldest continuously operating Renting yield source.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Oil & Gas",
              "level": "subcategory",
              "children": [
                {
                  "name": "Offshore Drilling Rig Leasing",
                  "level": "leaf",
                  "description": "Owning and chartering offshore drilling rigs (jackups, semi-submersibles, drillships) to E&P companies on dayrate contracts ($100K-$500K/day). Global market exceeds $50B in asset value.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Infrastructure & Project Finance",
          "level": "category",
          "children": [
            {
              "name": "Power Purchase Agreements (PPAs) & Related Revenue",
              "level": "subcategory",
              "children": [
                {
                  "name": "Battery Storage Revenue & Tolling",
                  "level": "leaf",
                  "description": "Battery energy storage systems (BESS) generate revenue through multiple value streams: energy arbitrage (charging during low-price periods and discharging during high-price periods), ancillary services (frequency regulation, spinning reserves, voltage support), capacity market payments, resource adequacy contracts, and tolling agreements where a third party pays a fixed fee for the right to control the battery's dispatch. Storage revenue is more complex and less predictable than generation-backed PPA revenue, as it depends on price spreads, ancillary service market depth, and the optimization skill of the dispatch operator.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Capacity Payments",
                  "level": "leaf",
                  "description": "Capacity payments are fixed payments made to power generation or storage resources for committing to be available to generate electricity during peak demand periods, regardless of whether they actually produce energy. These payments are made through organized capacity markets (e.g., PJM Reliability Pricing Model, ISO-NE Forward Capacity Market) or bilateral capacity contracts with utilities seeking to meet resource adequacy requirements. Capacity payments provide a stable revenue floor that supplements energy market revenues and supports investment in generation and storage assets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Desalination Plant Revenue",
                  "level": "leaf",
                  "description": "Investing in desalination infrastructure that converts seawater or brackish water to potable water under long-term take-or-pay contracts with municipal water authorities. Growing rapidly due to water scarcity driven by population growth, climate change, and agricultural demand.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Green Hydrogen Infrastructure",
                  "level": "leaf",
                  "description": "Investing in green hydrogen production facilities (electrolyzers powered by renewable energy), blue hydrogen (natural gas with carbon capture), hydrogen storage infrastructure, and hydrogen pipeline networks. Revenue from long-term offtake agreements with industrial users (refineries, ammonia producers, steel), fuel cell operators, and blending into natural gas networks.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Solar PPA Revenue",
                  "level": "leaf",
                  "description": "Solar PPA revenue is generated when a solar project developer or owner enters a long-term contract (typically 10--25 years) to sell electricity generated by a solar facility to an offtaker at a predetermined price, often with annual escalators of 1%--3%. Offtakers include electric utilities, commercial and industrial (C&I) customers, municipalities, and government agencies. Solar PPAs provide a fixed revenue stream that enables project finance and insulates the project from wholesale electricity price volatility, though the asset owner retains resource (irradiance) risk and operational risk.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Waste Management / Landfill Gas Revenue",
                  "level": "leaf",
                  "description": "Owning and operating waste management infrastructure including landfill gas-to-energy facilities that capture methane from decomposing waste and convert it to electricity or renewable natural gas (RNG). Revenue streams include tipping fees (charges for waste disposal), RNG sales, RIN (Renewable Identification Number) credits, LCFS (Low Carbon Fuel Standard) credits, and electricity sales.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Wind PPA Revenue",
                  "level": "leaf",
                  "description": "Wind PPA revenue is derived from long-term contracts (typically 12--25 years) under which a wind project sells its electrical output to an offtaker at a predetermined price. Wind PPAs may be structured as physical delivery contracts (with bundled energy and RECs) or virtual/financial PPAs (contracts for differences settled against a market hub price). Wind energy production exhibits greater seasonal and interannual variability than solar, with capacity factors typically ranging from 30%--55% depending on turbine technology, site quality, and onshore vs. offshore location.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Real Estate",
          "level": "category",
          "children": [
            {
              "name": "Private Real Estate",
              "level": "subcategory",
              "children": [
                {
                  "name": "Cold Storage / Temperature-Controlled Warehouse",
                  "level": "leaf",
                  "description": "Owning and leasing refrigerated warehouse space to food processors, pharmaceutical companies, and logistics operators. Specialized cooling equipment costs 2-5x ambient warehouse per sq ft.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Direct Commercial Real Estate",
                  "level": "leaf",
                  "description": "Direct commercial real estate ownership involves purchasing office buildings, retail centers, industrial properties, or other commercial assets and leasing them to business tenants. Commercial leases are typically longer (3-15 years) with more favorable landlord provisions than residential leases, including annual rent escalators and tenant responsibility for expenses (NNN structures). The capital requirements and operational complexity are substantially higher than residential.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Direct Residential Rental",
                  "level": "leaf",
                  "description": "Direct residential rental involves individual investors purchasing and leasing single-family homes, condominiums, duplexes, triplexes, or small multifamily buildings (2-4 units) to tenants. The investor serves as landlord (or hires property management), collecting monthly rent and bearing all ownership costs including mortgage, taxes, insurance, maintenance, and vacancies. This is the most common entry point into real estate investing for individual investors.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Manufactured Housing Community Land Leasing",
                  "level": "leaf",
                  "description": "Owning land beneath manufactured/mobile home communities and leasing pad sites to homeowners. Monthly lot rents of $300-$800 with extreme tenant stickiness (relocation costs $5K-$15K+, producing sub-5% turnover).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "NNN Lease Investments (Private)",
                  "level": "leaf",
                  "description": "Private NNN (triple-net) lease investments involve direct purchase of single-tenant commercial properties leased to creditworthy tenants under long-term net leases. The tenant pays all property-level expenses, creating a passive, bond-like income stream for the property owner. Common property types include pharmacies (Walgreens, CVS), quick-service restaurants (McDonald's, Chick-fil-A), auto parts stores, dollar stores, convenience stores, and medical facilities.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Sale-Leasebacks (Private)",
                  "level": "leaf",
                  "description": "In a sale-leaseback transaction, a business sells its owned real estate to an investor and simultaneously leases it back under a long-term triple-net lease. The business converts illiquid real estate equity into working capital while retaining occupancy and operational control. The investor acquires a tenanted property with a known operator and lease-in-place. Sale-leasebacks are a form of off-balance-sheet financing for the seller and an acquisition strategy for the buyer.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Self-Storage Facility Income (Direct)",
                  "level": "leaf",
                  "description": "Directly owning and operating self-storage facilities, earning month-to-month rental income from individual unit leases. ~50,000 US facilities generating $50B+ in annual revenue.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Real Estate-Adjacent",
              "level": "subcategory",
              "children": [
                {
                  "name": "Ground Leases (Private)",
                  "level": "leaf",
                  "description": "Private ground leases involve owning the land beneath a building or development and leasing it to a building owner or developer under a long-term (30-99 year) lease. The ground lessor receives contractual rent payments without the responsibilities of building ownership, maintenance, or tenant management. At lease expiration, all improvements revert to the land owner, creating significant residual value optionality.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Licensing",
      "level": "primitive",
      "primitive": "licensing",
      "description": "Granting use of a non-rivalrous intangible right",
      "children": [
        {
          "name": "Asset & Equipment Leasing",
          "level": "category",
          "children": [
            {
              "name": "Infrastructure & Technology Assets",
              "level": "subcategory",
              "children": [
                {
                  "name": "Spectrum Rights",
                  "level": "leaf",
                  "description": "Acquiring radio frequency spectrum licenses and leasing or selling access to wireless carriers and other users. Spectrum is a finite, government-regulated resource essential for wireless communications, broadcasting, and emerging applications (IoT, autonomous vehicles).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Energy & Natural Resources",
          "level": "category",
          "children": [
            {
              "name": "Agriculture / Farmland",
              "level": "subcategory",
              "children": [
                {
                  "name": "Crop Share Agreements",
                  "level": "leaf",
                  "description": "Crop share agreements are leasing arrangements where the landowner receives a negotiated percentage of the actual crop produced on their land (or the equivalent cash value) rather than a fixed rental payment. The specific share split varies by region, crop type, and the relative contributions of landowner and tenant (land, water, equipment, inputs). This structure aligns the landowner's income with actual agricultural production and commodity prices, providing direct participation in farming economics.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Farmland Investment Platforms",
                  "level": "leaf",
                  "description": "Farmland investment platforms are technology-enabled marketplaces that allow accredited and, in some cases, non-accredited investors to invest in fractional ownership of agricultural land. These platforms source, acquire, and manage farmland properties, distributing rental income and capital appreciation to investors. They have democratized access to an asset class traditionally limited to farmers, institutions, and ultra-high-net-worth individuals, typically offering lower minimums than direct farmland ownership.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Permanent Crop Investments: Orchards & Vineyards",
                  "level": "leaf",
                  "description": "Permanent crop investments involve acquiring and managing orchards (almonds, pistachios, walnuts, citrus, avocados) and vineyards (wine grapes, table grapes) that produce annual harvests over productive lifespans of 15--30+ years. Unlike annual row crops, permanent plantings require significant upfront establishment costs and multi-year maturation periods before reaching full production. Once mature, these operations generate recurring harvest income that can be supplemented by land value appreciation and, in some cases, water rights value.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Plant Variety Rights / Seed Royalties",
                  "level": "leaf",
                  "description": "Owning plant variety protection (PVP) rights or plant patents and collecting per-unit royalties on protected seed sales. Protected under UPOV convention (78 member states). 90%+ of US corn/soy acres use protected varieties.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Row Crop Farmland",
                  "level": "leaf",
                  "description": "Row crop farmland investments involve acquiring land planted in annually harvested crops such as corn, soybeans, wheat, cotton, and rice. The landowner generates income through cash rent leases to tenant farmers, crop-share arrangements, or direct farming operations. Row crops are replanted each year, giving operational flexibility to change crops based on market conditions. Row crop farmland, particularly in the U.S. Corn Belt, Midwest, and Delta region, is considered one of the most stable real asset classes, with consistent long-term appreciation.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Water Rights",
                  "level": "leaf",
                  "description": "Water rights are legally defined entitlements to use a specified quantity of surface or groundwater from a particular source. In water-scarce regions (particularly the Western United States, Australia, and parts of southern Europe), water rights have become increasingly valuable tradeable assets separate from the land. Owners of water rights can generate yield by leasing or selling their water allocations to agricultural users, municipalities, industrial users, or environmental flows, particularly during drought conditions.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Carbon & Environmental Markets",
              "level": "subcategory",
              "children": [
                {
                  "name": "Biodiversity Credits",
                  "level": "leaf",
                  "description": "Biodiversity credits are emerging market instruments that represent measurable, verified improvements to biodiversity outcomes, such as habitat restoration, species population recovery, or ecosystem integrity enhancement. Unlike carbon credits, which have well-established methodologies, biodiversity credits are in early-stage development with multiple competing frameworks and metrics. Demand is driven by corporate biodiversity commitments (following the Kunming-Montreal Global Biodiversity Framework), regulatory requirements, and voluntary \"nature positive\" pledges. Credit generators include landowners, conservation organizations, and project developers who undertake verified biodiversity enhancement activities.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Carbon Credit Generation (Non-Forest)",
                  "level": "leaf",
                  "description": "Carbon credit generation involves developing projects that reduce, avoid, or sequester greenhouse gas emissions, and then registering the resulting emission reductions with an approved carbon registry to receive tradeable carbon credits (offsets). Project types include renewable energy installations, methane capture from landfills and livestock operations, cookstove distribution programs, direct air capture, and industrial process improvements. Each credit represents one metric ton of CO2 equivalent reduced or removed. Credit generators earn revenue by selling credits to companies and individuals seeking to offset their emissions.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Conservation Banking",
                  "level": "leaf",
                  "description": "Conservation banking is a market-based mechanism that allows landowners to permanently protect habitat for threatened or endangered species listed under the Endangered Species Act (ESA) and sell \"species credits\" to developers or agencies whose activities would adversely impact those species. A conservation bank establishes or preserves habitat, receives credit approval from the U.S. Fish and Wildlife Service (USFWS), and sells credits to entities needing to offset permitted \"take\" of listed species. This provides permanent species habitat while generating long-term revenue for the bank owner.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Fishing Quotas / Individual Transferable Quotas (ITQs)",
                  "level": "leaf",
                  "description": "Owning government-granted rights to harvest specified quantities of fish species. Quota holders either fish directly or lease allocations annually to active fishermen for 50-70% of landed value. Systems exist in US, Iceland, NZ, Australia, Canada.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Geothermal / Subsurface Heat Rights",
                  "level": "leaf",
                  "description": "Owning the right to extract geothermal energy from subsurface heat reservoirs for power generation, direct heating, or lithium extraction from geothermal brine. Legally distinct from mineral rights in most jurisdictions.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Renewable Energy Certificates (RECs)",
                  "level": "leaf",
                  "description": "Renewable Energy Certificates (RECs) represent the environmental attributes of one megawatt-hour (MWh) of electricity generated from a renewable energy source (wind, solar, hydro, biomass, geothermal). RECs are separated from the physical electricity and traded as standalone instruments that allow purchasers to claim the \"green\" attribute of renewable generation. Compliance RECs are required in states with Renewable Portfolio Standards (RPS), while voluntary RECs are purchased by companies seeking to match electricity consumption with renewable generation.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Renewable Identification Numbers (RINs)",
                  "level": "leaf",
                  "description": "Credits generated by the production of renewable fuels under the EPA's Renewable Fuel Standard (RFS2). Obligated parties (petroleum refiners and importers) must acquire and retire RINs to demonstrate compliance with annual blending mandates. RIN generation from biofuel production is a yield source for renewable fuel producers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Water Quality Credits",
                  "level": "leaf",
                  "description": "Water quality credits (also called water quality trading credits or nutrient credits) are generated when a point or nonpoint pollution source reduces nutrient discharge (typically nitrogen and phosphorus) below its permitted levels, creating surplus reductions that can be sold to other dischargers who need additional pollution reduction to meet their permits. This market-based approach to water quality management allows regulated entities to achieve compliance more cost-effectively. Credit generators include agricultural operations implementing best management practices (BMPs), wastewater treatment plants exceeding discharge requirements, and wetland restoration projects that filter nutrients.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Wetland Mitigation Banking",
                  "level": "leaf",
                  "description": "Wetland mitigation banking involves the restoration, creation, enhancement, or preservation of wetland ecosystems to generate \"mitigation credits\" that can be sold to developers, infrastructure projects, or other entities required to compensate for unavoidable wetland impacts under Section 404 of the Clean Water Act. A mitigation banker invests capital to establish or restore a wetland (\"the bank\"), receives credits from the U.S. Army Corps of Engineers upon achieving performance milestones, and sells those credits in a defined service area. This converts an ecological restoration effort into a revenue-generating asset.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Mining & Metals",
              "level": "subcategory",
              "children": [
                {
                  "name": "Metal Lending / Leasing",
                  "level": "leaf",
                  "description": "Metal lending and leasing involves the temporary transfer of physical precious or industrial metals (gold, silver, platinum, palladium, copper) from an owner to a borrower in exchange for a lease rate or lending fee. Central banks, institutional holders, and ETFs lend metal to dealers, jewelers, and industrial users who need physical metal for fabrication, hedging, or settlement. The lease rate is analogous to an interest rate on a cash loan, determined by supply and demand for physical metal.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mining & Metals Royalties",
                  "level": "leaf",
                  "description": "Base metals royalties provide the holder with a percentage of revenue or production from mines producing copper, zinc, nickel, iron ore, lithium, cobalt, and other industrial metals. These royalties function similarly to precious metals royalties but are tied to commodities with fundamentally different demand drivers---primarily industrial and infrastructure growth rather than monetary/safe-haven demand. The growing importance of battery metals (lithium, cobalt, nickel) for the energy transition has created a new frontier for royalty investment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mining & Mineral Streaming",
                  "level": "leaf",
                  "description": "Providing upfront capital to mining companies in exchange for the right to purchase a portion of future metal production at a pre-set, below-market price (the \"stream price\"). This is distinct from royalties \u2014 streaming involves actual physical delivery of metal at a discount to spot, not a percentage of revenue. The streaming company then sells the metal at market price, pocketing the difference.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Oil & Gas",
              "level": "subcategory",
              "children": [
                {
                  "name": "Mineral Rights",
                  "level": "leaf",
                  "description": "Mineral rights represent ownership of the subsurface minerals beneath a tract of land, including the right to lease those minerals for exploration and production. Mineral owners receive lease bonus payments when they execute a lease and ongoing royalty payments (typically 12.5%--25% of gross production) once production commences. Unlike ORRIs, mineral rights are perpetual interests tied to the land itself, not to a specific lease, making them enduring assets that can generate income across multiple lease cycles.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Net Revenue Interests (NRI)",
                  "level": "leaf",
                  "description": "A net revenue interest represents the actual share of production revenue an interest holder receives after all royalties, overriding royalties, and other revenue burdens are deducted from the gross working interest. While technically a calculation rather than a standalone interest type, NRIs are commonly bought and sold as defined economic interests. The NRI quantifies the actual cash flow an owner receives per unit of production.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Overriding Royalty Interests (ORRI)",
                  "level": "leaf",
                  "description": "An overriding royalty interest is a non-operating interest carved out of the working interest holder's share of production revenue. Unlike mineral royalties, ORRIs are tied to a specific lease rather than the underlying mineral estate and expire when the lease terminates. The ORRI holder receives a percentage of gross production revenue free and clear of all drilling and operating costs, making it a purely passive income stream.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Timber",
              "level": "subcategory",
              "children": [
                {
                  "name": "Carbon Credit Generation (Forest)",
                  "level": "leaf",
                  "description": "Forestry-based carbon credits are generated by managing forests to sequester carbon dioxide beyond a baseline scenario, either through avoided deforestation (REDD+), improved forest management (IFM), or afforestation/reforestation (A/R) projects. Landowners and timberland managers register projects with carbon registries, quantify sequestration through approved methodologies, and receive tradeable carbon credits (offsets) that can be sold to companies seeking to meet voluntary or compliance carbon reduction targets. Each credit typically represents one metric ton of CO2 equivalent sequestered.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Sustainable Forestry Investments",
                  "level": "leaf",
                  "description": "Sustainable forestry investments encompass certified managed forests that generate returns through a combination of selective timber harvesting, ecosystem services payments, carbon sequestration, and biodiversity credits while maintaining or enhancing forest health. These investments go beyond conventional timberland by incorporating Forest Stewardship Council (FSC) or similar certifications, emphasizing long-rotation management, and monetizing multiple ecosystem service revenue streams simultaneously.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Timber Investment Management Organizations (TIMOs)",
                  "level": "leaf",
                  "description": "TIMOs are institutional investment managers that acquire, manage, and harvest timberland on behalf of pension funds, endowments, insurance companies, and high-net-worth individuals. TIMOs provide direct timberland exposure through private fund structures, offering professional forestry management, operational efficiency, and diversified geographic exposure. Returns are generated through timber harvest revenue, land appreciation, and increasingly through carbon credit monetization.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Exotic & Alternative Assets",
          "level": "category",
          "children": [
            {
              "name": "Niche Receivables & Assets",
              "level": "subcategory",
              "children": [
                {
                  "name": "Domain Name Portfolio",
                  "level": "leaf",
                  "description": "Acquiring portfolios of premium internet domain names and earning revenue from domain parking (displaying PPC advertisements on undeveloped domains), leasing domains to businesses on annual contracts, or selling at premium prices. Generic, high-traffic domains (insurance.com, hotels.com) generate meaningful annual revenue.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Sports Finance",
              "level": "subcategory",
              "children": [
                {
                  "name": "Media Rights Securitization",
                  "level": "leaf",
                  "description": "Investing in the securitized broadcast and media rights of sports leagues, conferences, and teams. Sports media rights are long-term contracts ($5\u201320+ year terms) with predictable, inflation-escalating cash flows from networks and streaming platforms.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Intellectual Property & Royalties",
          "level": "category",
          "children": [
            {
              "name": "Commercial Rights & Data Licensing",
              "level": "subcategory",
              "children": [
                {
                  "name": "Academic / Scientific Publishing Rights",
                  "level": "leaf",
                  "description": "Owning academic journal portfolios and licensing access to universities, research institutions, and corporations via subscriptions and article processing charges (APCs, $2K-$11K per article). Content creators (researchers) typically transfer rights for free.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Airport Landing Slot Rights",
                  "level": "leaf",
                  "description": "Owning or leasing takeoff/landing slot pairs at capacity-constrained airports (Heathrow, JFK, Haneda). Slots are scarce, government-regulated scheduling rights. A single Heathrow slot pair has sold for $75M+.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Brand Licensing",
                  "level": "leaf",
                  "description": "Acquiring or investing in brand licensing rights \u2014 the fees paid by manufacturers, retailers, and service providers to use established brand names on their products. Brand owners license their trademarks for a royalty on wholesale or retail revenue.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Data Licensing / Data-as-a-Service",
                  "level": "leaf",
                  "description": "Owning proprietary datasets (financial market data, credit bureau data, geospatial imagery, consumer behavior) and licensing access via subscription or per-query models. Non-rivalrous: licensing to one party doesn't diminish availability.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Franchise Royalties",
                  "level": "leaf",
                  "description": "Investing in franchise royalty streams \u2014 the ongoing percentage of revenue that franchisees pay to franchisors. This can be done by acquiring franchisor companies or by participating in franchise-backed securitizations.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Liquor / Cannabis License Leasing",
                  "level": "leaf",
                  "description": "Owning transferable liquor licenses or cannabis cultivation/retail licenses in supply-constrained jurisdictions and leasing them to operators. Artificial scarcity from government caps creates substantial license values ($50K-$20M+).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Media & Entertainment Royalties",
              "level": "subcategory",
              "children": [
                {
                  "name": "Film & TV Royalties",
                  "level": "leaf",
                  "description": "Investing in film and television content libraries and collecting royalty streams from theatrical distribution, home video, streaming platform licensing, international sales, and syndication. Content can generate revenue for decades through various distribution windows.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Influencer / Creator Economy Revenue Financing",
                  "level": "leaf",
                  "description": "Providing capital to social media influencers and digital content creators against their future platform revenue (YouTube AdSense, TikTok Creator Fund, Patreon subscriptions, Instagram brand deal pipelines). A growing niche in revenue-based financing enabled by platform analytics that make creator revenue predictable.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Music Royalties",
                  "level": "leaf",
                  "description": "Acquiring ownership interests in music catalogs (publishing rights, master recording rights) and collecting ongoing royalty streams from streaming (Spotify, Apple Music), radio airplay, sync licensing (TV/film/advertising), mechanical royalties, and performance royalties.",
                  "on_chain": "partially_tokenized",
                  "excluded": false
                },
                {
                  "name": "Podcast / Digital Media Royalties",
                  "level": "leaf",
                  "description": "Investing in podcast networks and digital media content libraries. Revenue comes from CPM-based advertising (typically $15\u201350 per thousand downloads), subscription revenue (Patreon, Apple Podcasts Subscriptions), and licensing/syndication. Podcast ad revenue has grown to $2B+ annually in the US.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Video Game IP Royalties / Revenue Participation",
                  "level": "leaf",
                  "description": "Investing in video game intellectual property or acquiring revenue participation in game titles. Revenue comes from initial game sales, in-game purchases (microtransactions/loot boxes), downloadable content (DLC), season passes, subscription services (Xbox Game Pass, PlayStation Plus), and licensing for merchandise/media adaptations.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Pharma & Biotech Royalties",
              "level": "subcategory",
              "children": [
                {
                  "name": "Drug Royalty Financing (Royalty Pharma Model)",
                  "level": "leaf",
                  "description": "Acquiring royalty interests in FDA-approved drugs or late-stage pipeline drugs, receiving a percentage of ongoing drug sales. This is a pure revenue-participation model \u2014 investors receive predictable cash flows without bearing drug development, manufacturing, or commercialization risk.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pharmaceutical / Drug Royalties",
                  "level": "leaf",
                  "description": "Acquiring royalty interests in approved or late-stage pharmaceutical drugs, receiving a percentage of drug sales revenue without bearing R&D, manufacturing, or marketing costs. This is a pure revenue participation in drug commercial success.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Technology & Patent Licensing",
              "level": "subcategory",
              "children": [
                {
                  "name": "Patent Licensing Royalties",
                  "level": "leaf",
                  "description": "Acquiring patent portfolios and licensing them to companies that use the patented technology, collecting ongoing license fees. This can involve operating company patents or patents acquired from universities, inventors, or bankrupt companies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Semiconductor IP Core Licensing",
                  "level": "leaf",
                  "description": "Designing reusable semiconductor IP blocks (processor cores, GPU architectures, interconnects) and licensing them to chip designers for per-unit royalties and upfront fees. ARM alone has $150B+ market cap built on this model.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Standards-Essential Patent Pools (SEPs)",
                  "level": "leaf",
                  "description": "Owning patents declared essential to industry standards (5G, Wi-Fi, Bluetooth, HEVC) and collecting FRAND-rate royalties from all implementers. Revenue scales with billions of devices shipped globally.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Technology Licensing",
                  "level": "leaf",
                  "description": "Acquiring or investing in technology licenses and collecting ongoing royalties from companies that use the licensed technology. Covers software licensing, semiconductor IP (ARM architecture), industrial process patents, and standards-essential technologies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "University Tech Transfer Royalties",
                  "level": "leaf",
                  "description": "Investing in royalty streams from university-licensed patents and inventions. Universities license faculty research to commercial entities under the Bayh-Dole Act framework. US universities collected ~$4.1B in licensing revenue in FY2022.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        },
        {
          "name": "Real Estate",
          "level": "category",
          "children": [
            {
              "name": "Real Estate-Adjacent",
              "level": "subcategory",
              "children": [
                {
                  "name": "Air Rights",
                  "level": "leaf",
                  "description": "Air rights refer to the legal right to use, develop, or lease the airspace above a property. In dense urban environments, air rights are a valuable asset that can be sold or transferred to adjacent parcels, allowing those parcels to build taller or denser than zoning would otherwise permit. Income from air rights can come from direct development, sale of transferable development rights, or leasing arrangements for structures built within the airspace (e.g., above railyards, highways, or existing buildings).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Development Rights / Transferable Development Rights (TDR)",
                  "level": "leaf",
                  "description": "Transferable Development Rights (TDRs) are a zoning mechanism that allows property owners in designated \"sending areas\" (where development is restricted for conservation, historic preservation, or open space protection) to sell their unused development capacity to property owners in designated \"receiving areas\" (where increased density is desired). The buyer can then build beyond the base zoning allowance by incorporating the purchased TDRs. Income comes from the sale or lease of these rights.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Insuring",
      "level": "primitive",
      "primitive": "insuring",
      "description": "Absorbing risk in exchange for premium income",
      "children": [
        {
          "name": "Insurance-Linked Securities",
          "level": "category",
          "children": [
            {
              "name": "Catastrophe Bonds",
              "level": "subcategory",
              "children": [
                {
                  "name": "Crop / Agricultural Catastrophe Risk",
                  "level": "leaf",
                  "description": "Assuming agricultural production risk \u2014 crop failure from drought, flood, hail, frost, pest, disease \u2014 through ILS structures, reinsurance participation, or parametric agricultural products. US federal crop insurance generates $18-20B in annual premium.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cyber Catastrophe Bonds",
                  "level": "leaf",
                  "description": "Cyber cat bonds are an emerging instrument transferring the risk of catastrophic cyber events---such as widespread ransomware attacks, critical infrastructure failures, or systemic software vulnerabilities---to capital markets investors. The first cyber cat bond was issued in 2023, and the segment remains nascent. These bonds address the growing \"cyber aggregation\" risk that concerns reinsurers: the possibility that a single cyber event could trigger losses across many insured entities simultaneously.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Earthquake Catastrophe Bonds",
                  "level": "leaf",
                  "description": "Earthquake cat bonds transfer seismic risk to capital markets investors, covering perils including ground shaking, liquefaction, tsunami, and fire following earthquake. Key risk zones include California, the Pacific Northwest (Cascadia subduction zone), Japan, New Zealand, Turkey, Chile, and the New Madrid seismic zone in the central United States. Due to the sudden and severe nature of earthquake events, these bonds typically carry higher expected losses and wider spreads than hurricane bonds.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Flood Catastrophe Bonds",
                  "level": "leaf",
                  "description": "Flood cat bonds transfer flood-related losses to capital markets investors, covering perils including riverine flooding, flash floods, storm surge, and pluvial (surface water) flooding. The U.S. National Flood Insurance Program (NFIP) has been a significant issuer through its FloodSmart Re program, transferring federal flood risk to private capital. Flood risk is globally significant but historically underinsured, creating a protection gap that capital markets are beginning to address.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Hurricane Catastrophe Bonds",
                  "level": "leaf",
                  "description": "Hurricane cat bonds transfer the risk of losses from tropical cyclones and hurricanes to capital markets investors. These are the most prevalent cat bonds by outstanding notional, reflecting the enormous insured exposure concentrations along the U.S. Gulf and Atlantic coasts, as well as Caribbean and Japanese typhoon perils. Triggers may be based on the sponsor's actual losses (indemnity), modeled losses from the event, or parametric measurements such as central pressure and windspeed at landfall.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mortality Catastrophe Bonds",
                  "level": "leaf",
                  "description": "Mortality cat bonds transfer the risk of extreme, sudden increases in mortality to capital markets investors. Unlike life settlements (which involve longevity risk), mortality cat bonds pay out when death rates spike above defined thresholds, protecting life insurers and reinsurers against events such as pandemics, bioterrorism, or other mass casualty scenarios. The trigger is typically based on population-wide mortality indices rather than the sponsor's own portfolio experience.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Pandemic Bonds",
                  "level": "leaf",
                  "description": "Pandemic bonds transfer the financial risk of disease outbreaks to capital markets investors. The World Bank's Pandemic Emergency Financing Facility (PEF) issued the first pandemic cat bonds in 2017, designed to provide rapid funding to developing countries during disease outbreaks. The COVID-19 pandemic tested these structures, with the Class B tranche of the PEF bonds ultimately triggering in April 2020. The experience highlighted both the value of pandemic risk transfer and the significant challenges in designing appropriate triggers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Wildfire Catastrophe Bonds",
                  "level": "leaf",
                  "description": "Wildfire cat bonds are a newer and rapidly growing segment of the ILS market, transferring the risk of insured wildfire losses to capital markets investors. The increasing frequency and severity of wildfires in California, the western United States, Australia, and southern Europe---driven by drought, climate change, and expanding wildland-urban interface development---have elevated wildfire from a secondary peril to a standalone cat bond trigger. These bonds may cover both direct fire damage and liability exposures (e.g., utility company wildfire liability).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "ILS & Reinsurance Structures",
              "level": "subcategory",
              "children": [
                {
                  "name": "Catastrophe Equity Puts (Cat-E-Puts)",
                  "level": "leaf",
                  "description": "Contingent capital instruments where an insurer or reinsurer has the right to issue preferred equity to investors at a pre-agreed price if a specified catastrophic event occurs. Investors receive an ongoing premium for granting this option. Unlike cat bonds (where capital is at risk), cat-E-puts only deploy capital when triggered \u2014 the investor's capital is not at risk until exercise.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Collateralized Reinsurance",
                  "level": "leaf",
                  "description": "Collateralized reinsurance involves investors providing reinsurance capacity to cedents (insurance and reinsurance companies) through fully collateralized contracts, where the reinsurance obligation is backed by assets held in trust rather than by the balance sheet of a rated reinsurer. ILS fund managers negotiate reinsurance contracts on behalf of investors, posting collateral in trust accounts that the cedent can draw upon if a covered loss occurs. This structure provides direct access to reinsurance economics without the overhead of a rated reinsurance carrier.",
                  "on_chain": "tokenized",
                  "excluded": false
                },
                {
                  "name": "Cyber Risk Insurance-Linked Securities",
                  "level": "leaf",
                  "description": "Insurance-linked securities or specialty insurance investments covering cyber risk \u2014 data breaches, ransomware attacks, business interruption from cyber events, privacy liability. A nascent but rapidly growing segment of the ILS market driven by exploding cyber insurance demand.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Industry Loss Warranties (ILW)",
                  "level": "leaf",
                  "description": "Industry loss warranties are reinsurance contracts that trigger based on the total insured losses suffered by the insurance industry from a specific event, rather than the buyer's own losses. When a catastrophe causes industry-wide insured losses exceeding a predefined threshold (the \"warranty\" amount), the contract pays out a fixed amount to the buyer. ILWs provide transparent, standardized catastrophe risk transfer with minimal adverse selection, making them popular instruments in the ILS market.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Insurance Premium Financing",
                  "level": "leaf",
                  "description": "Lending to businesses or individuals to finance their property & casualty insurance premiums, allowing installment payments rather than lump-sum premium payment. The loan is secured by the unearned premium \u2014 if the borrower defaults, the lender cancels the policy and the insurer refunds the unearned portion. Extremely low loss rates.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Quota Share Arrangements",
                  "level": "leaf",
                  "description": "Quota share arrangements allow investors to participate proportionally in an insurer's or reinsurer's book of business, sharing premiums, losses, and expenses according to a fixed percentage. Unlike excess-of-loss structures (which only activate above a threshold), quota shares provide first-dollar participation in the ceded portfolio. This structure gives investors broad exposure to insurance underwriting economics, including attritional losses, catastrophe losses, and investment income on reserves.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Retrocession",
                  "level": "leaf",
                  "description": "Retrocession is reinsurance purchased by reinsurers---in essence, the reinsurance of reinsurance. Retrocessionaires assume peak catastrophe and aggregate excess risks that reinsurers wish to offload, providing a critical safety valve for the global reinsurance market. Capital markets investors can participate in retrocession through ILS funds and collateralized retro structures, accessing some of the widest spreads in the reinsurance chain but also assuming the most severe tail risks.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Sidecar Vehicles",
                  "level": "leaf",
                  "description": "Sidecar vehicles are special purpose reinsurance companies formed by established reinsurers to co-participate in their book of business, allowing third-party investors to share in the underwriting profits and losses of a specific portfolio of reinsurance contracts. The sponsoring reinsurer contributes underwriting expertise and a portion of capital, while external investors provide additional capacity. Sidecars provide investors with direct access to reinsurance underwriting returns alongside experienced risk managers.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Trade Credit Insurance / Reinsurance",
                  "level": "leaf",
                  "description": "Assuming risk that business buyers default on supplier payments, in exchange for premium. Big Three (Allianz Trade, Coface, Atradius) control ~75% of the ~$13B global premium pool. Investors access via reinsurance sidecars and ILS structures.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Weather Derivatives (Selling Protection)",
                  "level": "leaf",
                  "description": "Selling weather derivatives \u2014 temperature, precipitation, wind speed, and snowfall contracts \u2014 to counterparties hedging weather-exposed businesses (utilities, agriculture, energy companies, ski resorts, outdoor events). Sellers collect premiums for assuming non-catastrophic weather risk. Unlike cat bonds (which cover extreme events), weather derivatives cover routine variability.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Life Settlements",
              "level": "subcategory",
              "children": [
                {
                  "name": "Embedded Value Securitization",
                  "level": "leaf",
                  "description": "Embedded value (EV) securitization involves the monetization of future profits embedded in an insurer's existing block of in-force life insurance or annuity policies. The insurer transfers the rights to future cash flows---net premiums, investment income, and mortality/lapse margins---from a defined book of business to a special purpose vehicle, which issues securities to investors backed by these projected cash flows. This structure allows insurers to unlock the economic value of their back book immediately rather than recognizing profits gradually over the policies' remaining lifetimes.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Life Settlement Funds",
                  "level": "leaf",
                  "description": "Life settlement funds pool investor capital to acquire portfolios of life insurance policies from seniors (typically aged 65+) who no longer need or can afford their coverage. The fund pays a lump sum to the policyholder above the policy's cash surrender value, continues paying premiums, and collects death benefits as insured individuals pass away. Returns are driven by the accuracy of life expectancy underwriting and the diversification of the mortality pool.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Life Settlement Securitization",
                  "level": "leaf",
                  "description": "Life settlement securitization packages pools of life insurance policies into asset-backed securities (ABS), tranching the cash flows from death benefits and premium obligations into notes with varying risk-return profiles. Senior tranches receive priority on death benefit proceeds and carry lower yields, while subordinated tranches absorb longevity extension risk and offer higher potential returns. This structure brings capital markets efficiency to the life settlement asset class.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Longevity Risk Transfers",
                  "level": "leaf",
                  "description": "Longevity risk transfers are financial transactions in which one party (typically a pension fund, insurer, or annuity provider) transfers the risk that a defined population will live longer than expected to a counterparty willing to bear that risk in exchange for a premium. These transactions can take the form of swaps, insurance contracts, or reinsurance arrangements. The yield to the risk-assuming party comes from the premium received, net of actual longevity-driven payouts.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Specialty Insurance Lines",
              "level": "subcategory",
              "children": [
                {
                  "name": "Extended Warranty / Service Contract Income",
                  "level": "leaf",
                  "description": "Selling extended warranties and service contracts on consumer electronics, appliances, automobiles, and industrial equipment. Seller collects upfront premium and assumes product failure/repair risk. Global market ~$150-160B.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Mortgage Insurance / Private Mortgage Insurance (PMI)",
                  "level": "leaf",
                  "description": "Absorbing credit risk on high-LTV (>80%) residential mortgages. Insurer collects monthly premiums and pays lender's loss if borrower defaults and property sale doesn't cover balance. Accessed via MI equity, surplus notes, or mortgage insurance-linked notes (MILN).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Residual Value Insurance / Guarantees",
                  "level": "leaf",
                  "description": "Insuring the residual value of leased assets (autos, aircraft, equipment) against decline below a guaranteed floor. Insurer collects premium and pays out if market value at lease end falls below the guarantee. Enhances auto lease ABS credit quality.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Surety Bond Underwriting / Reinsurance",
                  "level": "leaf",
                  "description": "Providing surety bonds guaranteeing a principal's performance (construction completion, court bonds, license/permit bonds). Surety collects premium; if principal defaults, surety pays obligee and pursues recovery via subrogation.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Title Insurance Underwriting",
                  "level": "leaf",
                  "description": "Providing title insurance protecting real estate buyers/lenders against defects in property title (liens, encumbrances, forgeries, recording errors). One-time premium at closing; 3-7% loss ratios make this among the most profitable insurance lines.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Trading",
      "level": "primitive",
      "primitive": "trading",
      "description": "Extracting yield from market structure via spreads, basis, and volatility",
      "children": [
        {
          "name": "Trading & Derivatives",
          "level": "category",
          "children": [
            {
              "name": "Arbitrage & Relative Value",
              "level": "subcategory",
              "children": [
                {
                  "name": "Agency Repo Spread",
                  "level": "leaf",
                  "description": "Agency repo involves using agency mortgage-backed securities (MBS) or agency debentures as collateral in repurchase agreements. Agency repo rates are typically higher than Treasury repo rates because agency collateral is considered slightly lower quality (despite the implicit government guarantee) and has more complex risk characteristics (prepayment risk, extension risk). The agency-Treasury repo spread can be captured by financing agency MBS at the agency repo rate while lending cash against Treasury collateral at the Treasury repo rate, or by buying agency MBS funded at agency repo and earning the spread over the funding cost.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Convertible Arbitrage",
                  "level": "leaf",
                  "description": "Buying convertible bonds and shorting the underlying equity to isolate the bond's cheap embedded optionality. The strategy earns the convertible's coupon minus the cost of the equity short (including any short rebate), plus profits from gamma trading as the stock moves. Returns come from the persistent cheapness of implied volatility in convertible bonds versus realized volatility.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cross-Currency Repo",
                  "level": "leaf",
                  "description": "Cross-currency repo involves using collateral denominated in one currency to borrow cash in another currency. For example, a European institution might pledge German Bunds as collateral to borrow US dollars, or a Japanese bank might use JGBs to fund dollar-denominated asset purchases. The spread between cross-currency repo and domestic repo reflects currency-specific funding demand, collateral quality differentials, and the cross-currency basis. Cross-currency repo arbitrage captures the difference between the cost of dollar funding via FX swaps and the cost via cross-currency repo.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Dividend Futures",
                  "level": "leaf",
                  "description": "Exchange-traded futures contracts on the expected dividend payments of an equity index (Euro Stoxx 50, S&P 500, Nikkei 225). These allow direct investment in the pure dividend stream of an index, completely separated from equity price appreciation. The investor is long only the dividends, not the stock price.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Freight Derivatives (Forward Freight Agreements)",
                  "level": "leaf",
                  "description": "Selling Forward Freight Agreements (FFAs) when the forward curve is above expected spot shipping rates, earning the freight risk premium. FFAs allow participants to lock in future shipping rates on specific routes. The seller profits when actual spot rates come in below the contracted forward rate.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Merger Arbitrage (Deal Spread as Yield)",
                  "level": "leaf",
                  "description": "Buying the target company's stock (and optionally shorting the acquirer in stock-for-stock deals) in announced M&A transactions, earning the deal spread \u2014 the difference between the current trading price and the announced deal price. One of the most established alternative yield strategies with hundreds of billions deployed globally.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Securities Lending Reinvestment",
                  "level": "leaf",
                  "description": "When an investor lends securities (typically Treasury bonds, agency MBS, or equities) through a securities lending program, they receive cash collateral from the borrower. This cash collateral can be reinvested in short-term instruments (money market funds, repo, commercial paper, short-duration bonds) to earn a return above the rebate rate paid back to the borrower. The profit is the spread between the reinvestment yield and the rebate rate. Securities lending reinvestment is a significant source of incremental income for large institutional portfolios (pension funds, index funds, ETFs, insurance companies).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Term Repo vs. Overnight Repo",
                  "level": "leaf",
                  "description": "The repo market allows investors to borrow cash against collateral (typically government bonds) at secured interest rates. The term structure of repo rates -- from overnight to 1-month, 3-month, and longer -- creates opportunities to arbitrage the difference between term and overnight rates. When the term repo rate exceeds the expected path of overnight repo rates (positive term premium), an investor can borrow overnight (rolling daily) and lend term, capturing the spread. Conversely, when the overnight rate is high relative to term, the investor locks in term funding and lends overnight. This is a fundamental money market strategy employed by bank treasuries, money market funds, and hedge funds.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Treasury Basis Trade (Cash-Futures Basis)",
                  "level": "leaf",
                  "description": "Buying cash Treasury securities (notes or bonds) and simultaneously selling Treasury futures contracts, earning the \"basis\" \u2014 the price difference between the cash bond and the futures contract. This is the single largest leveraged yield trade in fixed income markets, with an estimated $800B+ in notional deployed primarily by hedge funds, financed via repo markets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Carry & Curve Strategies",
              "level": "subcategory",
              "children": [
                {
                  "name": "Agricultural Commodity Carry",
                  "level": "leaf",
                  "description": "Agricultural commodity carry involves profiting from the difference between futures prices for different delivery months (the term structure of futures). When a commodity market is in contango (futures prices higher than spot), a physical commodity holder can sell deferred futures and earn a \"carry\" by storing the commodity and delivering it later. Conversely, traders can exploit backwardation by taking long positions in deferred-month futures that converge to higher spot prices. Carry strategies are also implemented through commodity ETFs and structured products.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Asset Swaps",
                  "level": "leaf",
                  "description": "An asset swap combines a bond purchase with an interest rate swap to transform the bond's fixed coupon into a floating-rate payment. The investor buys a fixed-rate bond and enters into a pay-fixed, receive-floating swap, effectively earning the bond's credit spread over the floating benchmark (e.g., SOFR). The asset swap spread (ASW) isolates the bond's credit risk from its interest rate risk, making it a pure credit instrument. Asset swaps are the primary tool for relative-value comparison between bonds and credit default swaps (the \"basis\" between ASW and CDS spread).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Barbell vs. Bullet",
                  "level": "leaf",
                  "description": "The barbell-versus-bullet decision is a fundamental portfolio construction choice in fixed income. A \"bullet\" portfolio concentrates holdings at a single maturity point (e.g., all 10-year bonds), while a \"barbell\" portfolio splits holdings between short and long maturities (e.g., 50% in 2-year and 50% in 30-year bonds) to achieve the same average duration. The barbell has higher convexity than the bullet, meaning it outperforms in volatile rate environments (large parallel shifts). The bullet typically offers higher yield and better roll-down in a stable, positively-sloped curve.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Basis Swaps",
                  "level": "leaf",
                  "description": "Basis swaps exchange one floating rate for another -- for example, 3-month SOFR for 1-month SOFR, or SOFR for Fed Funds, or EURIBOR for ESTR. The spread between the two floating rates is the \"basis,\" and it fluctuates based on supply-demand dynamics, credit conditions, and structural market factors. Trading basis swaps allows investors to capture the spread between reference rates or to express views on money market conditions. In cross-currency basis swaps (covered above), the two floating rates are in different currencies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Butterfly Trades",
                  "level": "leaf",
                  "description": "A butterfly trade is a three-legged yield curve strategy that expresses a view on the curvature (convexity) of the yield curve rather than its level or slope. A typical butterfly goes long the \"wings\" (e.g., 2-year and 30-year maturities) and short the \"body\" (e.g., 10-year maturity), or vice versa. The trade is constructed to be both duration-neutral and slope-neutral, isolating the curvature component. A \"positive butterfly\" profits when the belly of the curve richens (yields fall relative to the wings); a \"negative butterfly\" profits when the belly cheapens.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "CPI-Linked Derivatives",
                  "level": "leaf",
                  "description": "CPI-linked derivatives encompass a broad range of instruments whose payoffs are tied to the Consumer Price Index, including CPI futures, CPI options, year-on-year inflation swaps, and CPI-linked structured notes. These instruments allow investors to take precise views on the level, direction, or volatility of inflation. Year-on-year (YoY) inflation swaps, for example, pay the annual change in CPI each year, providing a running income stream linked to inflation. CPI options (caps and floors) provide nonlinear payoffs that protect against extreme inflation or deflation scenarios.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Carbon Allowance Carry",
                  "level": "leaf",
                  "description": "Carbon allowance carry strategies involve purchasing compliance carbon allowances (permits to emit one ton of CO2) in regulated cap-and-trade markets and holding them to benefit from expected price appreciation as emission caps tighten over time. Unlike voluntary carbon credits, compliance allowances are government-issued instruments required by law for covered emitters. The predictable tightening of caps in major programs (EU ETS, California Cap-and-Trade, RGGI) creates a structural supply reduction that supports long-term price appreciation. The \"carry\" reflects the expected real price increase minus the opportunity cost of capital.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Commodity Futures Roll Yield (Contango/Backwardation)",
                  "level": "leaf",
                  "description": "The systematic yield generated by rolling commodity futures positions. When a futures curve is in backwardation (spot > futures), rolling long positions forward generates positive roll yield as the futures converge up to spot. When in contango (futures > spot), rolling short positions generates yield. This is a fundamental structural yield source embedded in commodity markets, distinct from commodity price appreciation.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Convenience Yield (Physical Commodities)",
                  "level": "leaf",
                  "description": "The implicit yield earned by holding physical commodities versus holding futures contracts. Convenience yield compensates the physical holder for the optionality of having the commodity immediately available for use, sale, or delivery during supply disruptions. It is the \"dividend\" of commodity ownership.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Covered Interest Rate Parity / Arbitrage",
                  "level": "leaf",
                  "description": "Covered interest rate parity (CIP) states that the forward exchange rate should exactly offset the interest rate differential between two currencies, eliminating riskless arbitrage. In practice, CIP deviations persist due to bank balance sheet constraints, counterparty credit risk, and regulatory costs (Basel III). CIP arbitrage involves borrowing in a low-rate currency, converting to a high-rate currency via spot FX, investing at the higher rate, and hedging the FX risk with a forward contract. If the CIP basis is nonzero, this generates a riskless profit for entities with balance sheet capacity.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cross-Currency Basis Trades",
                  "level": "leaf",
                  "description": "Cross-currency basis trades exploit the deviation of FX swap-implied interest rates from actual money market rates. The cross-currency basis is the spread added to (or subtracted from) a reference rate (e.g., SOFR, EURIBOR) in a cross-currency swap to equalize the present value of the two legs. A negative basis in EUR/USD means that borrowing dollars via FX swaps costs more than borrowing directly in the dollar money market, creating an arbitrage-like opportunity. Investors with natural access to dollar funding can lend dollars through FX swaps and earn the basis spread above the domestic rate.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cross-Market Relative Value",
                  "level": "leaf",
                  "description": "Cross-market relative value strategies exploit pricing discrepancies between similar fixed-income instruments across different markets, currencies, or issuers. Examples include trading US Treasuries versus German Bunds at equivalent maturities (the UST-Bund spread), Japanese Government Bonds versus Australian Government Bonds, or on-the-run versus off-the-run Treasury pairs. The strategy identifies bonds that are cheap or rich relative to their fundamental drivers (interest rate differentials, credit quality, liquidity premium) and takes long/short positions to capture the convergence.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Curve Roll-and-Carry",
                  "level": "leaf",
                  "description": "Curve roll-and-carry is the combined strategy of earning both the coupon carry (yield above the funding rate) and the roll-down return (price appreciation from aging along a positively-sloped curve) at each point of the yield curve. The strategy identifies the maturity with the highest combined carry-and-roll, then overweights that sector. For example, if the 5-year Treasury offers 50 bps of carry above funding and 30 bps of roll-down per year, the total roll-and-carry is 80 bps. The investor compares this across maturities and allocates to the maximum carry-and-roll point.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Extension Risk Premium",
                  "level": "leaf",
                  "description": "The extension risk premium compensates investors for the risk that the effective duration of their bond holdings increases (extends) when interest rates rise. This is most relevant for callable bonds and mortgage-backed securities, where rising rates reduce prepayment incentives, extending the bond's effective maturity and duration. By deliberately holding extension-exposed bonds, investors earn a premium above comparable non-callable bonds. The extension risk premium is a form of short-convexity compensation -- the investor sells optionality (the call option embedded in the bond) and earns a higher yield in exchange for bearing the risk of duration extension in a rising rate environment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "FX Carry (Long High-Yielding / Short Low-Yielding Currencies)",
                  "level": "leaf",
                  "description": "The canonical carry trade involves borrowing in a low-interest-rate currency (the \"funding currency,\" e.g., JPY, CHF, EUR) and investing in a high-interest-rate currency (e.g., AUD, BRL, MXN, ZAR). The investor earns the interest rate differential as carry income, provided the high-yielding currency does not depreciate by more than the rate differential. FX carry exploits the empirical failure of uncovered interest rate parity -- high-yielding currencies tend to depreciate less than the forward discount implies, generating positive excess returns on average.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Flattener Trades",
                  "level": "leaf",
                  "description": "A flattener trade is the mirror image of a steepener: it profits from a narrowing of the spread between long-term and short-term rates. The investor goes long the long end and short the short end, betting that the curve will flatten. Flatteners are typically implemented during tightening cycles when the central bank is raising short-term rates, compressing the term premium. The trade carries positively in a steep curve (the long position yields more than the short position), making it an attractive risk-adjusted position when the macro environment supports flattening.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "G10 Carry",
                  "level": "leaf",
                  "description": "A subset of FX carry restricted to the ten major developed-market currencies (USD, EUR, JPY, GBP, CHF, AUD, NZD, CAD, NOK, SEK). G10 carry is considered more liquid and less volatile than EM carry but offers narrower rate differentials. The strategy typically ranks the G10 currencies by short-term interest rates, goes long the top three and short the bottom three, rebalancing monthly or quarterly. G10 carry is a staple allocation in currency overlay and global macro programs.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Inflation Floors and Caps",
                  "level": "leaf",
                  "description": "Inflation caps and floors are options on the rate of inflation (typically CPI). An inflation cap pays the holder when inflation exceeds a specified strike rate over a defined period, providing protection against unexpectedly high inflation. An inflation floor pays when inflation falls below the strike, protecting against disinflation or deflation. These are analogous to interest rate caps and floors but reference inflation rather than interest rates. They are essential tools for pension funds hedging inflation-linked liabilities and for investors seeking asymmetric inflation exposure.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Inflation Swaps",
                  "level": "leaf",
                  "description": "An inflation swap is an OTC derivative where one party pays a fixed rate (the \"inflation swap rate\") and the other pays the realized inflation rate (typically CPI) over a specified period. Zero-coupon inflation swaps are the most common form: at maturity, the fixed-rate payer receives the cumulative CPI appreciation, and the floating-rate payer receives the compounded fixed rate. The inflation swap rate is analogous to the breakeven inflation rate but without the liquidity and supply distortions of the TIPS market. Inflation swaps provide a cleaner measure of inflation expectations and allow precise inflation hedging.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Interest Rate Carry",
                  "level": "leaf",
                  "description": "Interest rate carry involves going long higher-yielding fixed-income instruments funded by borrowing at lower short-term rates, earning the term premium or credit spread as carry. This is the fundamental business model of banking (borrow short, lend long) and the most basic source of fixed-income return. In a positively-sloped yield curve environment, an investor who buys a 10-year bond funded at the overnight rate earns the term spread as carry. The strategy can be implemented across government bonds, credit, or swaps.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Key Rate Duration Positioning",
                  "level": "leaf",
                  "description": "Key rate duration (KRD) measures the sensitivity of a bond or portfolio to changes in interest rates at specific maturity points (e.g., 2-year, 5-year, 10-year, 30-year). Key rate duration positioning involves overweighting or underweighting exposure at specific points on the yield curve to capture the term premium or roll-down that varies along the curve. Unlike simple duration management (adjusting overall portfolio duration), KRD positioning allows precise curve bets. For example, an investor may overweight the 5-year key rate (where roll-down is steepest) and underweight the 2-year and 30-year key rates, maintaining overall duration but optimizing carry-and-roll.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "OIS Basis",
                  "level": "leaf",
                  "description": "The Overnight Index Swap (OIS) basis is the spread between the OIS rate (which prices expectations for the overnight policy rate path) and other benchmark rates such as government bond yields, LIBOR (legacy), or term reference rates. In the post-LIBOR world, the OIS rate is effectively the SOFR swap rate in the US and the ESTR swap rate in Europe. The OIS basis trade involves positioning on the spread between OIS rates of different tenors or between OIS rates and government bond yields. This is closely related to swap spread trading but focuses specifically on the risk-free curve constructed from overnight rates.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Physical Commodity Storage Arbitrage",
                  "level": "leaf",
                  "description": "Buying physical commodities when the futures curve is in contango and storing them for forward delivery at higher prices. The arbitrage profit is the contango spread minus storage, financing, and insurance costs. Applies to oil (tanker/tank storage), natural gas (underground storage), metals (LME warehouse), and grains (elevator storage).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Real Yield Capture",
                  "level": "leaf",
                  "description": "Real yield capture involves buying inflation-linked bonds (TIPS, UK Index-Linked Gilts, Euro ILBs) to lock in a positive real (inflation-adjusted) return. When real yields are high, investors can earn a guaranteed return above inflation by holding TIPS to maturity. This is a \"buy and hold\" strategy that provides inflation-protected income. Real yields vary significantly over time -- they were deeply negative from 2020 to 2022 (as low as -1.1% for 10-year TIPS) but rose sharply in 2022--2023 to above 2.0%, offering historically attractive real returns.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Riding the Yield Curve / Roll-Down Return",
                  "level": "leaf",
                  "description": "In a positively-sloped yield curve, a bond purchased at a longer maturity \"rolls down\" the curve as time passes, moving to a lower-yield (higher-price) point on the curve even if rates remain unchanged. The roll-down return is the capital gain earned from this passage of time. For example, buying a 5-year Treasury when the 5-year yield is 4.0% and the 4-year yield is 3.7% means the bond rolls down 30 bps in a year, generating both coupon income and price appreciation. This is one of the most reliable sources of return in a stable rate environment.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "SOFR Basis",
                  "level": "leaf",
                  "description": "The SOFR basis refers to the spread between different tenors or compounding methods of the Secured Overnight Financing Rate. Key SOFR basis trades include: (1) SOFR vs. Fed Funds Effective Rate (FFER), capturing the difference between secured and unsecured overnight rates; (2) term SOFR vs. compounded SOFR in arrears, capturing the term premium embedded in forward-looking SOFR; (3) SOFR vs. BSBY or other credit-sensitive rates (prior to BSBY's discontinuation). The SOFR-FFER basis is particularly important as it reflects Treasury repo market supply-demand conditions and influences the pricing of trillions of dollars in floating-rate instruments.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Steepener Trades",
                  "level": "leaf",
                  "description": "A steepener trade profits from a widening of the spread between long-term and short-term interest rates. The investor goes long the short end of the curve and short the long end, betting that the curve will steepen. Steepeners are typically implemented as duration-neutral trades, meaning the position sizes are adjusted so that a parallel shift in rates has no effect -- only changes in the slope matter. Steepeners can be \"bull steepeners\" (front end rallies more than the back end) or \"bear steepeners\" (back end sells off more than the front end).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Swap Spread Trading",
                  "level": "leaf",
                  "description": "The swap spread is the difference between the fixed rate on an interest rate swap and the yield on a government bond of the same maturity. For example, if the 10-year swap rate is 4.20% and the 10-year Treasury yields 4.00%, the swap spread is 20 bps. Swap spreads reflect a combination of credit risk (swap counterparties vs. sovereign credit), supply-demand dynamics, and balance sheet costs. Trading swap spreads involves going long (or short) the swap versus the government bond. Swap spreads can be positive or negative -- US 30-year swap spreads have been persistently negative since 2008, a structural anomaly driven by pension fund and insurance company demand for long-dated swaps.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "TIPS Breakeven Trades",
                  "level": "leaf",
                  "description": "A TIPS breakeven trade is the simultaneous purchase of a Treasury Inflation-Protected Security (TIPS) and short sale of a nominal Treasury of the same maturity. The breakeven inflation rate is the difference between the nominal Treasury yield and the TIPS real yield. If realized inflation exceeds the breakeven rate, the TIPS position outperforms; if realized inflation falls short, the nominal Treasury outperforms. Investors go long breakevens (long TIPS / short nominals) when they expect inflation to exceed market pricing, and short breakevens when they expect inflation to undershoot.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Total Return Swaps on Fixed Income",
                  "level": "leaf",
                  "description": "A total return swap (TRS) on fixed income allows an investor to receive the total return (coupon income plus price appreciation or depreciation) of a bond or bond index without owning the underlying security. The investor pays a floating rate (e.g., SOFR + spread) to the counterparty and receives the bond's total return. This is effectively a synthetic leveraged bond position. The yield is the difference between the bond's total return and the funding rate (SOFR + spread). TRS are widely used to gain exposure to bonds that are difficult to source, to leverage positions, or to avoid the operational burden of bond settlement and custody.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Options & Volatility Strategies",
              "level": "subcategory",
              "children": [
                {
                  "name": "Bear Call Spreads",
                  "level": "leaf",
                  "description": "A bear call spread sells a lower-strike call and buys a higher-strike call, collecting a net credit. The strategy profits when the underlying stays below the short call strike at expiration. It is directionally bearish or neutral and benefits from time decay. Bear call spreads are the call-side counterpart of bull put spreads and are used to generate income above the market, especially when the investor believes upside is limited.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Bull Put Spreads",
                  "level": "leaf",
                  "description": "A bull put spread sells a higher-strike put and buys a lower-strike put on the same underlying with the same expiration, collecting a net credit. The strategy profits when the underlying stays above the short put strike through expiration. It is directionally bullish and benefits from time decay and declining implied volatility. This is one of the most common defined-risk income strategies in options trading.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Calendar Spreads (Time Spreads)",
                  "level": "leaf",
                  "description": "A calendar spread sells a near-term option and buys a longer-term option at the same strike, profiting from the faster time decay of the short-dated option. The strategy benefits from stable prices near the strike and from rising implied volatility (since the long option has greater vega exposure). Calendar spreads generate income through the differential in theta decay between the two expirations. They are vega-positive and theta-positive, an unusual combination in options strategies.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Call Spread Overlays",
                  "level": "leaf",
                  "description": "Instead of selling naked or covered calls, the investor sells a call at one strike and buys a call at a higher strike, creating a bear call spread overlay on an existing equity position. This approach generates less premium than an outright covered call but defines and limits the maximum loss on the option leg. Call spread overlays are used when the investor wants income but is uncomfortable with unlimited theoretical upside forfeiture.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Cash-Secured Put Selling",
                  "level": "leaf",
                  "description": "The investor sells put options while holding sufficient cash (or Treasury bills) to purchase the underlying asset if assigned. Premium is collected upfront and retained if the underlying stays above the strike at expiration. This strategy expresses a willingness to buy the asset at the strike price, effectively being paid to place a limit order. It is synthetically equivalent to a covered call at the same strike.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Covered Call / Buy-Write Strategies",
                  "level": "leaf",
                  "description": "A buy-write strategy involves simultaneously purchasing an equity index (or basket) and writing call options against it, typically executed as a single packaged trade. Unlike ad hoc covered call writing, buy-write programs are systematically rebalanced on a fixed schedule (e.g., monthly roll at expiration) with standardized strike selection rules. This approach is often benchmarked against the CBOE S&P 500 BuyWrite Index (BXM).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Deep Out-of-the-Money Put Writing",
                  "level": "leaf",
                  "description": "Deep OTM put writing involves selling put options far below the current market price (typically 10--30% OTM) to collect small but frequent premiums. The strategy has a very high win rate because the underlying must decline dramatically for the puts to become in-the-money. However, when losses occur, they are catastrophic relative to the premiums collected. This strategy is the purest form of selling tail risk insurance and is the canonical example of \"picking up pennies in front of a steamroller.\"",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Diagonal Spreads",
                  "level": "leaf",
                  "description": "A diagonal spread combines elements of a vertical spread and a calendar spread, selling a near-term option at one strike and buying a longer-term option at a different strike. The most common income-generating version is the \"poor man's covered call,\" which buys a deep in-the-money long-dated call (LEAPS) and sells near-term out-of-the-money calls against it. This replicates covered call economics with less capital, since the LEAPS substitutes for stock ownership.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Dispersion Trading",
                  "level": "leaf",
                  "description": "Dispersion trading sells index volatility (via index options or variance swaps) and buys single-stock volatility (via options on index constituents), profiting from the systematic overpricing of index implied volatility relative to the implied-volatility-weighted sum of its components. The \"correlation risk premium\" arises because index options embed a correlation premium -- markets price in higher-than-realized correlation among stocks. When realized correlation is lower than implied, the short-index/long-single-stock vol position generates a profit.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Iron Butterflies",
                  "level": "leaf",
                  "description": "An iron butterfly is a special case of the iron condor where the two short strikes are at the same price (typically at-the-money), combined with long wings on both sides. It sells a straddle and hedges with a strangle, collecting a large premium while defining maximum risk. The iron butterfly generates higher premium than an iron condor because the short options are at-the-money, where extrinsic value is maximized. Profit is highest when the underlying pins exactly at the short strikes at expiration.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Iron Condors",
                  "level": "leaf",
                  "description": "An iron condor combines a bull put spread and a bear call spread on the same underlying with the same expiration, collecting premium on both sides. The strategy profits when the underlying stays within a range defined by the two short strikes. It is market-neutral in direction and benefits from time decay and range-bound price action. Iron condors are the canonical \"sell volatility\" defined-risk strategy.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Put Spread Selling",
                  "level": "leaf",
                  "description": "The investor sells an out-of-the-money put and simultaneously buys a further out-of-the-money put at a lower strike, collecting net premium. This bull put spread caps the maximum loss at the width of the spread minus the premium collected. It requires less capital than cash-secured put selling and provides a defined-risk profile. Put spread selling is widely used for income generation with controlled downside.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Short Straddles",
                  "level": "leaf",
                  "description": "A short straddle involves selling both a call and a put at the same strike (typically at-the-money), collecting maximum premium from both legs. The strategy profits when the underlying stays near the strike, as both options decay toward zero. Short straddles are the most aggressive premium-collection strategy, offering the highest possible theta for a given underlying and expiration. They are pure short-volatility positions with unlimited theoretical risk on both sides.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Short Strangles",
                  "level": "leaf",
                  "description": "A short strangle sells an out-of-the-money call and an out-of-the-money put, collecting less premium than a straddle but providing a wider profit zone. The strategy benefits from time decay and stable prices within the range defined by the two strikes. Short strangles are the preferred structure of many systematic volatility-selling programs because they offer a higher probability of profit per trade while still collecting meaningful premium.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Synthetic Dividend Capture",
                  "level": "leaf",
                  "description": "Options-based dividend capture strategies use put-call parity and early exercise mechanics to profit from dividend payments without bearing full equity risk. The classic approach involves buying stock just before the ex-dividend date, selling a deep in-the-money call (or buying a protective put) to hedge directional risk, and collecting the dividend. Alternatively, traders exploit early exercise of deep ITM calls ahead of ex-dividend dates, or use synthetic long positions (long call, short put) where dividend assignment creates asymmetric profit opportunities. These strategies seek to isolate the dividend payment as a yield source while minimizing exposure to stock price movement.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Systematic Overwriting (Partial Covered Calls)",
                  "level": "leaf",
                  "description": "Rather than writing calls against 100% of a portfolio, systematic overwriting sells calls against a fraction of the position (e.g., 30--50%), preserving some upside participation while still generating meaningful income. The overwrite ratio is often dynamically adjusted based on implied volatility levels, market outlook, or portfolio risk targets. This approach is favored by institutional asset managers who want income enhancement without fully abandoning equity upside.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "The Wheel Strategy",
                  "level": "leaf",
                  "description": "The wheel strategy is a systematic approach that cycles between selling cash-secured puts and covered calls. The investor begins by selling puts; if assigned, they switch to selling covered calls on the acquired shares until called away, then returns to selling puts. This creates a repeating cycle designed to generate premium income continuously while buying low (via put assignment) and selling high (via call assignment). It is popular among retail options traders.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "VIX-Related Strategies",
                  "level": "leaf",
                  "description": "VIX-related yield strategies exploit the structural characteristics of the VIX futures term structure, which is typically in contango (futures priced above spot VIX). Shorting VIX futures or selling VIX call spreads harvests the roll yield as futures converge to spot VIX over time. This is one of the purest expressions of the volatility risk premium, extracting income from the market's persistent willingness to overpay for volatility protection.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Variance Swaps (Short Vol)",
                  "level": "leaf",
                  "description": "A variance swap is an OTC derivative that pays the difference between realized variance (volatility squared) and a pre-agreed strike (implied variance). Selling variance swaps collects a premium when realized volatility comes in below implied volatility. The payoff is convex in volatility, meaning that losses accelerate as realized vol exceeds the strike -- a $1 move in vol hurts more the further it rises. Variance swaps are the institutional workhorse for systematic volatility risk premium harvesting.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Volatility Risk Premium Harvesting",
                  "level": "leaf",
                  "description": "Volatility risk premium (VRP) harvesting systematically sells options or volatility derivatives to capture the persistent spread between implied and realized volatility. This is not a single strategy but a category of approaches -- including short strangles, variance swaps, VIX futures selling, and structured option overlays -- unified by the thesis that implied volatility systematically overestimates future realized volatility. The VRP is compensation for bearing crash risk and is one of the most documented and persistent risk premia in financial markets.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            },
            {
              "name": "Structured Products",
              "level": "subcategory",
              "children": [
                {
                  "name": "Autocallable Notes",
                  "level": "leaf",
                  "description": "Autocallable notes are structured products that pay a high coupon contingent on the underlying asset remaining above a predefined barrier level. If the underlying is above a \"call\" level on periodic observation dates (e.g., quarterly), the note is automatically redeemed at par plus the coupon. If the barrier is never breached, the investor receives all coupons and principal at maturity. If the barrier is breached, the investor suffers equity-like downside losses. Autocallables are the dominant structured product globally by issuance volume.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Buffer Notes & Defined Outcome Products",
                  "level": "leaf",
                  "description": "Buffer notes (and their ETF equivalents) provide downside protection up to a specified level (the \"buffer,\" typically 10--30%) while capping upside participation at a predetermined level. The structure is economically equivalent to a bull call spread combined with a short put spread. Defined-outcome ETFs (pioneered by Innovator and First Trust) offer this payoff in a daily-liquid, exchange-traded format with annual or quarterly reset periods. These products have exploded in popularity as a way to participate in equity markets with reduced (but not eliminated) downside.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "CDS Protection Selling (Single-Name and Index)",
                  "level": "leaf",
                  "description": "Selling credit default swap protection on investment-grade or high-yield corporate names or indices, earning the credit spread as ongoing premium income without funding the notional amount. The CDX IG (125 investment-grade names) and CDX HY (100 high-yield names) indices are the most liquid vehicles. This is one of the largest institutional yield strategies globally.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Capital Structure Arbitrage",
                  "level": "leaf",
                  "description": "Trading relative mispricings between different securities in a single company's capital structure \u2014 CDS vs. equity, senior vs. subordinated debt, debt vs. equity options, or convertible vs. straight debt. The strategy exploits the theoretical relationships between a firm's debt and equity values (Merton model framework).",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Equity Swaps for Dividend Capture",
                  "level": "leaf",
                  "description": "Using total return swaps on dividend-paying equities to capture dividend income synthetically, often with cross-border tax optimization. The swap allows separation of dividend income from equity ownership, enabling capture of gross dividends in favorable tax jurisdictions via swap counterparty structuring.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Exotic Structured Notes (ELN, Range Accrual, Worst-of, Snowball)",
                  "level": "leaf",
                  "description": "Equity-linked notes are structured debt instruments whose returns are tied to the performance of an equity index, basket of stocks, or single stock. Unlike PPNs, ELNs may offer only partial or no principal protection, instead providing enhanced yield or leveraged upside. The category is broad and encompasses many variations, including buffered notes, enhanced return notes, and participation notes. ELNs are the catch-all category for structured products that combine fixed-income credit with equity derivatives.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Interest Rate Swaption Selling (Premium Collection)",
                  "level": "leaf",
                  "description": "Selling receiver swaptions (right to enter a receive-fixed swap) or payer swaptions (right to enter a pay-fixed swap) to collect premium income. Analogous to equity option writing but in the interest rate derivatives market. The volatility risk premium in rates markets is persistent and well-documented.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Principal-Protected Notes (PPNs)",
                  "level": "leaf",
                  "description": "Principal-protected notes guarantee return of the investor's principal at maturity while providing upside participation linked to an underlying asset (equity index, commodity, or basket). The protection is achieved by allocating most of the invested capital to a zero-coupon bond and using the remainder to purchase call options on the underlying. The yield comes from the upside participation, which is typically capped or subject to a participation rate less than 100%. PPNs appeal to conservative investors seeking equity exposure without downside risk.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                },
                {
                  "name": "Reverse Convertible Notes",
                  "level": "leaf",
                  "description": "Reverse convertible notes pay an above-market coupon in exchange for the investor assuming downside risk on an underlying equity or index. At maturity, if the underlying is above the strike (or barrier), the investor receives par plus the coupon. If the underlying has declined below the strike, the investor receives shares (or cash equivalent) of the depreciated asset, locking in a loss. Reverse convertibles are structurally a bond plus a short put option embedded in the note.",
                  "on_chain": "not_tokenized",
                  "excluded": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
