const ui = {
  fr: { navHome:'Accueil', navExperience:'Mes expériences', navContact:'Contactez-moi', toolsLabel:'OUTILS & PLATEFORMES', skillsAcquired:'COMPÉTENCES ACQUISES', selectedLabel:'SÉLECTION DE RÉALISATIONS' },
  en: { navHome:'Home', navExperience:'Experience', navContact:'Contact me', toolsLabel:'TOOLS & PLATFORMS', skillsAcquired:'SKILLS DEVELOPED', selectedLabel:'SELECTED ACHIEVEMENTS' },
  zh: { navHome:'首页', navExperience:'工作经历', navContact:'联系我', toolsLabel:'工具与平台', skillsAcquired:'积累的能力', selectedLabel:'重点成果' }
};

const jobs = {
  fr: {
    product: { year:'2025', role:'Cheffe de projet transverse / Data Product Manager', period:'Sept. 2025 — Aujourd’hui', subtitle:'Paris Fashion Shops · CDI · 1 an 1 mois · Paris', summary:'Je pilote des projets transverses à l’intersection de l’e-commerce, du paiement, de la data et du CRM, en reliant les équipes métier en France, l’IT en Chine et les partenaires externes.', tools:['Stripe','MangoPay','HubSpot','Metabase','Amplitude','BigQuery','SQL','Notion','Figma','Shopify','API / Webservices'], metrics:[['5+','domaines produit coordonnés'],['3','équipes & partenaires alignés'],['E2E','du cadrage à la production']], achievements:[['Paiement & Stripe Connect','Pilotage métier de la migration MangoPay vers Stripe : cartographie des flux, règles de gestion, exigences KYC/IBAN et préservation des délais de payout. Recette et suivi des virements, frais, facturation, reporting financier et échecs de paiement.'],['Data Platform & gouvernance','Responsabilité métier des Data Dictionary et KPI Dictionary : harmonisation des champs, définitions et règles de calcul, traduction des besoins Marketing, Finance et Product, validation et QA.'],['BI, tracking & CRO','Migration de Zoho Analytics vers Metabase, audit des modèles et requêtes SQL, reconstruction des reportings. Définition du Tracking Plan Amplitude, des events/properties et validation des funnels de conversion.'],['CRM & systèmes internes','Conception du Data Model HubSpot et des règles métier pour Marketing et Service Client. Coordination des flux produits et stocks entre Moda Store, la marketplace, Stripe et les outils internes.']] },
    data: { year:'2024', role:'Data Analyst', period:'Janv. 2024 — Août 2025', subtitle:'Paris Fashion Shops · CDI · 1 an 8 mois · Paris', summary:'J’ai structuré la donnée marketing avant la mise en place d’une plateforme centralisée, afin de rendre les performances commerciales, les comportements clients et les campagnes directement exploitables.', tools:['Zoho Analytics','SQL','GA4','Google Tag Manager','BigQuery','Looker Studio','Excel','Notion','ERP interne'], metrics:[['70 %','des reportings alimentés'],['6','tables cœur consolidées'],['+3 pts','de taux de réactivité']], achievements:[['Modélisation & SQL','Nettoyage, jointure et consolidation de six tables — comptes, commandes, produits et marques notamment — dans une table analytique de référence utilisée par Marketing, Finance et Relations Vendeurs.'],['Segmentation B2B','Création d’un modèle multidimensionnel croisant ancienneté, activité, panier moyen, sensibilité promotionnelle, fréquence et revenu sur 12 mois, avec seuils adaptés à la France, l’UE et l’export.'],['Performance marketing','Production des analyses hebdomadaires, mensuelles, trimestrielles et annuelles. Activation des segments dans les stratégies de ciblage, fidélisation et réactivation, contribuant à environ +3 points de réactivité.'],['Product analytics & qualité','Suivi des KPI e-commerce, analyse des parcours et funnels, création de dashboards Looker Studio, surveillance des synchronisations et coordination des corrections avec l’IT.']] },
    crm: { year:'2022', role:'Cheffe de projet CRM', period:'Janv. 2022 — Déc. 2023', subtitle:'Paris Fashion Shops · CDI · 2 ans · Paris', summary:'J’ai participé à la création de l’équipe Marketing CRM et à la migration de Salesforce vers Zoho One, en combinant stratégie relationnelle, automatisation, analyse et accompagnement des utilisateurs.', tools:['Zoho CRM','Zoho Campaigns','Zoho Analytics','Zoho Desk','Zoho Flow','Salesforce','Google Analytics','Excel','Trello','Asana'], metrics:[['+20 %','de GMV cumulé mars–mai'],['+4–7 pts','de clic sur les recommandations'],['40','marques réunies']], achievements:[['CRM & automatisation','Conception de parcours onboarding, panier abandonné, post-achat, réactivation, fidélisation, anniversaire, NPS, win-back et gestion des clients à risque. L’automatisation des inscriptions a supprimé un traitement manuel dédié.'],['Marketing piloté par la donnée','Analyse des tendances de commandes et adaptation du calendrier B2B. Lancement anticipé de la campagne Fête des Mères, avec +20 % de GMV cumulé entre mars et mai.'],['Tests & performance','Suivi des KPI de campagnes et conception d’A/B tests. Le passage de recommandations produits à des recommandations marques a généré +4 à 7 points de taux de clic moyen.'],['Expérience client','Personnalisation de Zoho CRM, conception des workflows Zoho Desk et organisation de Fashion Select, un événement réunissant 40 marques et reconduit deux fois par an.']] },
    ecommerce: { year:'2020', role:'Assistante e-commerce', period:'Juil. 2020 — Déc. 2021', subtitle:'Paris Fashion Shops · CDD puis CDI · 1 an 6 mois · Paris', summary:'J’ai acquis une connaissance opérationnelle approfondie d’une marketplace B2B internationale, de ses règles commerciales et de ses données clients — le point de départ de mon évolution vers le CRM et la data.', tools:['Salesforce','Excel','Back-office marketplace'], metrics:[['B2B','France & international'],['3','axes analysés'],['360°','comptes & catalogue']], achievements:[['Gestion des comptes','Vérification de l’identité commerciale, de la complétude des dossiers clients et des règles de TVA applicables selon le pays dans Salesforce.'],['Catalogue & qualité','Administration du catalogue, création et mise à jour des informations produits, documentation des anomalies et suivi des améliorations avec l’équipe IT.'],['Premières analyses','Analyses Excel des volumes d’inscription, taux de validation, causes de dossiers incomplets et répartition géographique, ouvrant la voie à mon évolution vers le CRM et la data.']] }
  },
  en: {
    product: { year:'2025', role:'Cross-functional Project Manager / Data Product Manager', period:'Sep 2025 — Present', subtitle:'Paris Fashion Shops · Permanent · 1 year 1 month · Paris', summary:'I lead cross-functional initiatives across e-commerce, payments, data and CRM, connecting business teams in France, IT in China and external partners.', tools:['Stripe','MangoPay','HubSpot','Metabase','Amplitude','BigQuery','SQL','Notion','Figma','Shopify','APIs / Webservices'], metrics:[['5+','product domains coordinated'],['3','teams & partners aligned'],['E2E','from discovery to release']], achievements:[['Payments & Stripe Connect','Led the business workstream for the MangoPay-to-Stripe migration: payment flows, business rules, KYC/IBAN requirements and seller payout timelines. Owned UAT and post-release improvements.'],['Data Platform & governance','Owned the business-side Data and KPI Dictionaries, aligned definitions and calculation rules, translated Marketing, Finance and Product needs, and supported validation and QA.'],['BI, tracking & CRO','Managed the Zoho Analytics-to-Metabase migration and reporting rebuild. Defined Amplitude events and properties and validated conversion funnels and behavioural dashboards.'],['CRM & internal systems','Designed HubSpot data models and business rules and coordinated product and stock flows across Moda Store, the marketplace, Stripe and internal tools.']] },
    data: { year:'2024', role:'Data Analyst', period:'Jan 2024 — Aug 2025', subtitle:'Paris Fashion Shops · Permanent · 1 year 8 months · Paris', summary:'I structured Marketing data before a central platform existed, turning commercial performance, customer behaviour and campaign data into reliable decision tools.', tools:['Zoho Analytics','SQL','GA4','Google Tag Manager','BigQuery','Looker Studio','Excel','Notion','Internal ERP'], metrics:[['70%','of reporting powered'],['6','core tables consolidated'],['+3 pts','customer response rate']], achievements:[['Data modelling & SQL','Consolidated six core datasets into a shared analytical table used across Marketing, Finance and Seller Relations reporting.'],['B2B segmentation','Built a multidimensional model combining lifecycle, activity, average order value, promotion sensitivity, frequency and 12-month revenue with market-specific thresholds.'],['Marketing performance','Produced recurring analyses and campaign reviews. Applying segmentation to targeting, loyalty and reactivation contributed to an approximately three-point response-rate increase.'],['Product analytics & quality','Monitored e-commerce KPIs and conversion funnels, built Looker Studio dashboards, diagnosed data-quality issues and coordinated fixes with IT.']] },
    crm: { year:'2022', role:'CRM Project Manager', period:'Jan 2022 — Dec 2023', subtitle:'Paris Fashion Shops · Permanent · 2 years · Paris', summary:'I helped establish the Marketing CRM team and migrate Salesforce to Zoho One, combining relationship strategy, automation, analysis and user enablement.', tools:['Zoho CRM','Zoho Campaigns','Zoho Analytics','Zoho Desk','Zoho Flow','Salesforce','Google Analytics','Excel','Trello','Asana'], metrics:[['+20%','March–May cumulative GMV'],['+4–7 pts','recommendation click rate'],['40','brands brought together']], achievements:[['CRM & automation','Designed onboarding, abandoned-cart, post-purchase, reactivation, loyalty, NPS, win-back and at-risk journeys. Registration automation removed a dedicated manual workload.'],['Data-led marketing','Analysed order trends and adapted the B2B calendar. Moving the Mother’s Day campaign earlier contributed to 20% year-on-year cumulative GMV growth from March to May.'],['Testing & performance','Monitored campaign KPIs and ran A/B tests. Brand-led recommendations increased average click-through rate by four to seven points.'],['Customer experience','Configured Zoho CRM, designed Zoho Desk workflows and launched Fashion Select, a 40-brand customer event subsequently held twice yearly.']] },
    ecommerce: { year:'2020', role:'E-commerce Assistant', period:'Jul 2020 — Dec 2021', subtitle:'Paris Fashion Shops · Fixed-term to Permanent · 1 year 6 months · Paris', summary:'I developed a strong operational understanding of an international B2B marketplace, its commercial rules and customer data—the foundation for my move into CRM and analytics.', tools:['Salesforce','Excel','Marketplace back office'], metrics:[['B2B','France & international'],['3','analytical dimensions'],['360°','accounts & catalogue']], achievements:[['Account management','Verified company credentials, file completeness and country-specific VAT treatment in Salesforce.'],['Catalogue & quality','Managed product information, documented platform issues and followed improvement requests through with IT.'],['First analyses','Used Excel to analyse registration volumes, approval rates, incomplete-file causes and customer geography, creating the foundation for my move into CRM and data.']] }
  },
  zh: {
    product: { year:'2025', role:'跨部门项目经理 / Data Product Manager', period:'2025年9月 — 至今', subtitle:'Paris Fashion Shops · CDI · 1年1个月 · 巴黎', summary:'负责电商、支付、数据与CRM跨部门项目，连接法国业务团队、中国IT团队及外部合作伙伴，推动项目从需求分析走向上线与持续优化。', tools:['Stripe','MangoPay','HubSpot','Metabase','Amplitude','BigQuery','SQL','Notion','Figma','Shopify','API / Webservices'], metrics:[['5+','协同产品领域'],['3','团队与合作方'],['E2E','从需求到上线']], achievements:[['支付与Stripe Connect','主导MangoPay迁移Stripe的业务工作，梳理支付流程、规则及KYC/IBAN需求，保障商家payout周期，并负责UAT与上线后优化。'],['Data Platform与治理','负责业务侧Data Dictionary与KPI Dictionary，统一字段、指标及计算逻辑，将Marketing、Finance与Product需求转化为可实施的数据需求。'],['BI、Tracking与CRO','推进Zoho Analytics迁移Metabase并重建报表；定义Amplitude events与properties，验收转化漏斗与行为分析看板。'],['CRM与内部系统','设计HubSpot Data Model和业务规则，协调Moda Store、Marketplace、Stripe及内部工具之间的商品、库存与流程。']] },
    data: { year:'2024', role:'Data Analyst', period:'2024年1月 — 2025年8月', subtitle:'Paris Fashion Shops · CDI · 1年8个月 · 巴黎', summary:'在统一数据平台建立前负责Marketing数据分析，将商业表现、客户行为及活动数据转化为可靠的决策工具。', tools:['Zoho Analytics','SQL','GA4','Google Tag Manager','BigQuery','Looker Studio','Excel','Notion','内部ERP'], metrics:[['70%','报表直接使用'],['6','张核心表整合'],['+3点','客户响应率']], achievements:[['数据建模与SQL','将账户、订单、产品、品牌等六张核心表整合为统一分析表，为Marketing、Finance与Seller Relations约70%的报表提供数据。'],['B2B客户分群','结合生命周期、活跃状态、客单价、促销敏感度、购买频率与12个月收入，建立多维分群及市场差异化阈值。'],['营销效果分析','负责周期性分析与活动复盘；分群用于精准营销、忠诚度与召回后，客户响应率在数月内提升约3个百分点。'],['产品分析与数据质量','监控电商KPI与转化漏斗，搭建Looker Studio看板，定位数据异常并协调IT修正。']] },
    crm: { year:'2022', role:'CRM项目经理', period:'2022年1月 — 2023年12月', subtitle:'Paris Fashion Shops · CDI · 2年 · 巴黎', summary:'参与组建Marketing CRM团队并完成Salesforce到Zoho One的迁移，覆盖客户策略、自动化、数据分析与用户支持。', tools:['Zoho CRM','Zoho Campaigns','Zoho Analytics','Zoho Desk','Zoho Flow','Salesforce','Google Analytics','Excel','Trello','Asana'], metrics:[['+20%','3–5月累计GMV'],['+4–7点','推荐模块点击率'],['40','个品牌参与']], achievements:[['CRM与自动化','设计Onboarding、弃购、售后、召回、忠诚度、NPS、win-back及风险客户流程；账户注册自动化显著减少人工处理。'],['数据驱动营销','分析订单趋势并调整B2B营销节奏；母亲节活动提前至3月后，3–5月累计GMV同比增长20%。'],['测试与表现','监控Campaign KPI并设计A/B测试；品牌推荐替代单品推荐后，平均点击率提升4–7个百分点。'],['客户体验','配置Zoho CRM、设计Zoho Desk流程，并发起汇集40个品牌的Fashion Select客户活动。']] },
    ecommerce: { year:'2020', role:'电商助理', period:'2020年7月 — 2021年12月', subtitle:'Paris Fashion Shops · CDD转CDI · 1年6个月 · 巴黎', summary:'在国际B2B时尚电商平台建立对商业规则、客户数据与平台运营的系统认识，为后续转向CRM与数据分析奠定基础。', tools:['Salesforce','Excel','Marketplace后台'], metrics:[['B2B','法国与国际市场'],['3','个分析维度'],['360°','账户与商品目录']], achievements:[['客户账户管理','在Salesforce中审核企业身份、资料完整性及不同国家的VAT规则。'],['商品目录与质量','管理商品信息，记录系统问题与优化需求，并与IT团队持续跟进。'],['初步数据分析','使用Excel分析注册量、审核通过率、资料不完整原因与客户国家分布，推动工作从运营延伸至CRM与Data。']] }
  }
};

const caseStudies = {
  fr: {
    'product-0':['Migration d’un système de paiement critique sans modifier le modèle commercial ni les délais de payout.','Cartographie des flux, formalisation des règles, cadrage KYC/IBAN, coordination Stripe–IT et pilotage de la recette.','Déploiement sécurisé de Stripe Connect et feuille de route d’améliorations sur les frais, virements, factures et échecs.'],
    'product-1':['Des définitions de données et de KPI différentes selon les équipes Marketing, Finance et Product.','Construction des Data/KPI Dictionaries et validation des règles de calcul avec chaque partie prenante.','Un langage commun, des reportings plus fiables et des besoins data directement exploitables par l’IT.'],
    'data-0':['Six sources cœur fragmentées ralentissaient la production et la maintenance des reportings.','Nettoyage, jointure et modélisation SQL dans une table analytique partagée.','Une source devenue la base directe d’environ 70 % des reportings de trois équipes.'],
    'data-1':['Le ciblage B2B devait refléter des cycles, paniers et marchés très différents.','Création d’un scoring Fréquence × Revenu enrichi par le cycle de vie, l’activité et la sensibilité promotionnelle.','Des segments actionnables Bottom, Medium et Premium adaptés à la France, l’UE et l’export.'],
    'data-2':['Les campagnes manquaient d’une lecture régulière et segmentée de leur performance.','Mise en place d’analyses récurrentes et activation des segments dans les scénarios de fidélisation et de réactivation.','Environ +3 points de taux de réactivité obtenus en quelques mois.'],
    'crm-0':['Les parcours clients et l’inscription reposaient encore sur de nombreux traitements manuels.','Conception de workflows automatisés couvrant onboarding, post-achat, fidélisation, NPS, win-back et risques.','Réduction forte de la charge manuelle et suppression du besoin d’un poste dédié à l’inscription.'],
    'crm-1':['Les clients B2B achètent leur stock saisonnier bien avant la date de l’événement.','Analyse des historiques puis lancement de la campagne Fête des Mères dès mars.','GMV hebdomadaire préservé et GMV cumulé mars–mai en hausse de 20 % sur un an.'],
    'crm-2':['Le bloc de recommandations produits générait un engagement limité.','Conception d’un A/B test remplaçant la sélection de produits par une sélection de marques.','Hausse moyenne du taux de clic comprise entre 4 et 7 points.'],
    'ecommerce-2':['Les opérations quotidiennes généraient des données encore peu exploitées.','Analyse Excel des inscriptions, validations, dossiers incomplets et répartitions géographiques.','Premiers insights opérationnels et fondation de mon évolution vers le CRM et la data.']
  },
  en: {
    'product-0':['A critical payment migration had to preserve the commercial model and payout timing.','Mapped flows and rules, framed KYC/IBAN needs, coordinated Stripe and IT, and led UAT.','A controlled Stripe Connect rollout and a clear improvement roadmap for fees, transfers, invoices and failures.'],
    'product-1':['Marketing, Finance and Product used inconsistent field and KPI definitions.','Built Data/KPI Dictionaries and validated calculation rules with each stakeholder.','A shared language, more reliable reporting and implementation-ready data requirements.'],
    'data-0':['Six fragmented core sources slowed reporting production and maintenance.','Cleaned, joined and modelled them in SQL into one shared analytical table.','One source directly powered approximately 70% of reporting across three teams.'],
    'data-1':['B2B targeting needed to reflect very different cycles, baskets and markets.','Built a Frequency × Revenue score enriched with lifecycle, activity and promotion sensitivity.','Actionable Bottom, Medium and Premium segments adapted to France, the EU and export markets.'],
    'data-2':['Campaigns lacked regular, segmented performance analysis.','Introduced recurring reviews and activated segments in retention and reactivation journeys.','Customer response rate increased by approximately three points within months.'],
    'crm-0':['Customer journeys and registration still relied on extensive manual processing.','Designed automated onboarding, post-purchase, loyalty, NPS, win-back and at-risk workflows.','Greatly reduced manual work and removed the need for a dedicated registration role.'],
    'crm-1':['B2B customers purchase seasonal stock well before the event date.','Analysed history and moved the Mother’s Day campaign launch to March.','Weekly GMV stayed stable while cumulative March–May GMV grew 20% year on year.'],
    'crm-2':['Product recommendations generated limited engagement.','Designed an A/B test replacing product selections with brand selections.','Average click-through rate increased by four to seven points.'],
    'ecommerce-2':['Daily operations generated data that was not yet being fully used.','Analysed registrations, approval rates, incomplete files and geography in Excel.','Produced early operational insight and established the foundation for a move into CRM and data.']
  },
  zh: {
    'product-0':['关键支付迁移必须保持原有商业模式与商家payout周期。','梳理流程和规则，定义KYC/IBAN需求，协调Stripe与IT并主导UAT。','安全上线Stripe Connect，并形成手续费、转账、发票与失败处理的迭代路线。'],
    'product-1':['Marketing、Finance与Product对字段及KPI定义不一致。','建立Data/KPI Dictionary，并与各方验证计算规则。','形成统一语言、可靠报表与IT可直接实施的数据需求。'],
    'data-0':['六个分散核心数据源拖慢报表建设与维护。','通过SQL完成清洗、关联与建模，建立共享分析表。','单一数据源直接支持三个团队约70%的报表。'],
    'data-1':['B2B客户的周期、客单价与市场差异显著。','建立Frequency × Revenue评分，并结合生命周期、活跃度与促销敏感度。','形成适用于法国、欧盟与出口市场的Bottom、Medium、Premium可执行分群。'],
    'data-2':['营销活动缺少持续且分群化的效果分析。','建立周期性复盘，并将分群用于忠诚度与召回流程。','数月内客户响应率提升约3个百分点。'],
    'crm-0':['客户旅程与账户注册依赖大量人工处理。','设计Onboarding、售后、忠诚度、NPS、win-back与风险客户自动化流程。','显著降低人工工作量，并取消注册流程专职岗位需求。'],
    'crm-1':['B2B客户会在节日前较早采购季节性库存。','分析历史数据，并将母亲节活动提前至3月。','周GMV保持稳定，3–5月累计GMV同比增长20%。'],
    'crm-2':['原有产品推荐模块互动率有限。','设计A/B测试，以品牌推荐替代产品推荐。','平均点击率提升4至7个百分点。'],
    'ecommerce-2':['日常运营产生的数据尚未得到充分利用。','使用Excel分析注册量、通过率、资料缺失与客户地域。','产生首批运营洞察，并为转向CRM与Data奠定基础。']
  }
};

const skillsByJob = {
  fr: {
    product:['Analyse métier','Priorisation produit','Product Specs','Gouvernance data','QA / UAT','Stakeholder management'],
    data:['Modélisation SQL','Segmentation B2B','Data visualisation','Analyse de campagnes','Qualité des données','Data storytelling'],
    crm:['Marketing automation','Customer journeys','A/B testing','Migration CRM','Conduite du changement','Formation utilisateurs'],
    ecommerce:['Opérations B2B','Gestion de catalogue','Qualité des dossiers','Règles de TVA','Analyse Excel','Coordination IT']
  },
  en: {
    product:['Business analysis','Product prioritisation','Product Specs','Data governance','QA / UAT','Stakeholder management'],
    data:['SQL modelling','B2B segmentation','Data visualisation','Campaign analysis','Data quality','Data storytelling'],
    crm:['Marketing automation','Customer journeys','A/B testing','CRM migration','Change management','User training'],
    ecommerce:['B2B operations','Catalogue management','File quality','VAT rules','Excel analysis','IT coordination']
  },
  zh: {
    product:['业务分析','产品优先级','Product Specs','数据治理','QA / UAT','干系人管理'],
    data:['SQL建模','B2B客户分群','数据可视化','营销活动分析','数据质量','数据叙事'],
    crm:['营销自动化','客户旅程','A/B测试','CRM迁移','变革管理','用户培训'],
    ecommerce:['B2B运营','商品目录管理','资料质量','VAT规则','Excel分析','IT协作']
  }
};

const workSampleCopy = {
  fr: { examples:'EXEMPLES DE RÉALISATIONS', kicker:'EXEMPLE 01 · DATA / MARKETING', title:'Dashboard de pilotage marketing', description:'Conception d’un dashboard multi-KPI pour suivre l’acquisition, la conversion, les commandes, le panier moyen, l’activité vendeurs et la performance par marché.', privacy:'Données confidentielles anonymisées · Structure et visualisations conservées', cta:'Voir le dashboard en grand ↗', alt:'Dashboard marketing anonymisé réalisé par Simeng Chen', lookerKicker:'EXEMPLE 02 · LOOKER STUDIO', lookerTitle:'Rapports d’analyse des parcours', lookerDescription:'Création de rapports Looker Studio pour comparer la performance par pays et analyser l’usage de la navigation et des sous-menus sur desktop et mobile.', lookerPrivacy:'4 vues anonymisées · Cliquer sur une image pour l’agrandir' },
  en: { examples:'WORK SAMPLES', kicker:'EXAMPLE 01 · DATA / MARKETING', title:'Marketing performance dashboard', description:'Designed a multi-KPI dashboard to monitor acquisition, conversion, orders, average basket, seller activity and performance across markets.', privacy:'Confidential data anonymised · Structure and visualisations preserved', cta:'View full dashboard ↗', alt:'Anonymised marketing dashboard designed by Simeng Chen', lookerKicker:'EXAMPLE 02 · LOOKER STUDIO', lookerTitle:'Journey analysis reports', lookerDescription:'Built Looker Studio reports to compare performance by country and analyse navigation and submenu usage across desktop and mobile.', lookerPrivacy:'4 anonymised views · Select an image to enlarge' },
  zh: { examples:'作品示例', kicker:'示例 01 · 数据 / 营销', title:'营销数据监控看板', description:'设计多指标营销看板，用于跟踪获客、转化、订单、平均客单价、商家活跃度及不同市场的业务表现。', privacy:'敏感数据已匿名化 · 保留原有结构与可视化', cta:'查看完整看板 ↗', alt:'陈思蒙设计的匿名化营销数据看板', lookerKicker:'示例 02 · LOOKER STUDIO', lookerTitle:'用户路径分析报告', lookerDescription:'创建Looker Studio报告，对比不同国家的表现，并分析桌面端与移动端导航及子菜单的使用情况。', lookerPrivacy:'4个匿名化视图 · 点击图片放大查看' }
};

let lang = 'fr';
let currentJob = 'product';
const order = ['ecommerce','crm','data','product'];
const languageKey = 'simeng-portfolio-language';
const timelineItems = [...document.querySelectorAll('.timeline-item')];
const language = document.querySelector('.language');
const langCurrent = document.querySelector('.lang-current');
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

function renderJob(key, animate = true) {
  currentJob = key;
  const job = jobs[lang][key];
  const index = order.indexOf(key);
  document.getElementById('job-period').textContent = job.period;
  document.getElementById('job-title').textContent = job.role;
  document.getElementById('job-subtitle').textContent = job.subtitle;
  document.getElementById('job-summary').textContent = job.summary;
  document.getElementById('tool-index').textContent = String(index + 1).padStart(2,'0');
  document.getElementById('tools-list').innerHTML = job.tools.map((tool,i) => `<span style="animation-delay:${i*.025}s">${tool}</span>`).join('');
  document.getElementById('skills-list').innerHTML = skillsByJob[lang][key].map((skill,i) => `<span style="animation-delay:${i*.025}s">${skill}</span>`).join('');
  document.getElementById('job-metrics').innerHTML = job.metrics.map(m => `<div class="metric"><b>${m[0]}</b><span>${m[1]}</span></div>`).join('');
  const sample = document.getElementById('work-examples');
  sample.hidden = key !== 'data';
  if (key === 'data') {
    const copy = workSampleCopy[lang];
    document.getElementById('work-examples-label').textContent = copy.examples;
    document.getElementById('work-sample-kicker').textContent = copy.kicker;
    document.getElementById('work-sample-title').textContent = copy.title;
    document.getElementById('work-sample-description').textContent = copy.description;
    document.getElementById('work-sample-privacy').textContent = copy.privacy;
    document.getElementById('work-sample-cta').textContent = copy.cta;
    document.querySelector('#dashboard-link img').alt = copy.alt;
    document.getElementById('looker-kicker').textContent = copy.lookerKicker;
    document.getElementById('looker-title').textContent = copy.lookerTitle;
    document.getElementById('looker-description').textContent = copy.lookerDescription;
    document.getElementById('looker-privacy').textContent = copy.lookerPrivacy;
    requestAnimationFrame(() => document.getElementById('examples-track').scrollTo({left:0,behavior:'auto'}));
  }
  document.getElementById('achievement-count').textContent = String(job.achievements.length).padStart(2,'0');
  document.getElementById('achievement-list').innerHTML = job.achievements.map((a,i) => {
    const useCase = caseStudies[lang][`${key}-${i}`];
    const labels = lang === 'zh' ? ['背景','行动','成果'] : lang === 'en' ? ['Context','Action','Impact'] : ['Contexte','Action','Impact'];
    const prompt = lang === 'zh' ? '查看案例详情' : lang === 'en' ? 'View use case' : 'Voir le use case';
    const details = useCase ? `<details class="case-study"><summary><span class="case-icon" aria-hidden="true">+</span><span>${prompt}</span></summary><div class="case-details">${useCase.map((step,n)=>`<div class="case-step"><b>${labels[n]}</b><span>${step}</span></div>`).join('')}</div></details>` : '';
    return `<article class="achievement"><span class="achievement-number">${String(i+1).padStart(2,'0')}</span><div class="achievement-main"><h2>${a[0]}</h2><p>${a[1]}</p>${details}</div></article>`;
  }).join('');
  timelineItems.forEach((item,i) => { const active=item.dataset.job===key; item.classList.toggle('active',active); item.setAttribute('aria-selected',String(active)); item.querySelector('.year').textContent=jobs[lang][item.dataset.job].year; item.querySelector('.role-label').textContent=jobs[lang][item.dataset.job].role; });
  document.querySelector('.timeline-progress').style.width = `${index * 33.333}%`;
  if (animate) { const content=document.querySelector('.job-content'); content.classList.remove('switching'); requestAnimationFrame(()=>content.classList.add('switching')); window.scrollTo({top:0,behavior:'smooth'}); }
}

timelineItems.forEach(item => item.addEventListener('click', () => renderJob(item.dataset.job)));
const examplesTrack = document.getElementById('examples-track');
const exampleDots = [...document.querySelectorAll('.examples-dots span')];
function updateExampleControls() {
  const index = Math.round(examplesTrack.scrollLeft / Math.max(1, examplesTrack.clientWidth));
  document.getElementById('example-index').textContent = `${String(index + 1).padStart(2,'0')} / 02`;
  exampleDots.forEach((dot,i) => dot.classList.toggle('active', i === index));
}
document.getElementById('example-prev').addEventListener('click', () => examplesTrack.scrollBy({left:-examplesTrack.clientWidth,behavior:'smooth'}));
document.getElementById('example-next').addEventListener('click', () => examplesTrack.scrollBy({left:examplesTrack.clientWidth,behavior:'smooth'}));
examplesTrack.addEventListener('scroll', updateExampleControls, {passive:true});
langCurrent.addEventListener('click',()=>{const open=language.classList.toggle('open');langCurrent.setAttribute('aria-expanded',open);});
function applyLanguage(code) {
  lang = ui[code] ? code : 'fr';
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.querySelectorAll('[data-i18n]').forEach(node=>node.textContent=ui[lang][node.dataset.i18n]);
  langCurrent.querySelector('span').textContent=lang==='zh'?'中文':lang.toUpperCase();
  document.title=`${ui[lang].navExperience} — Simeng Chen`;
  try { localStorage.setItem(languageKey, lang); } catch (_) {}
  renderJob(currentJob,false);
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{applyLanguage(button.dataset.lang);language.classList.remove('open');langCurrent.setAttribute('aria-expanded','false');}));
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.addEventListener('click',e=>{if(!language.contains(e.target)){language.classList.remove('open');langCurrent.setAttribute('aria-expanded','false');}});
let savedLanguage = 'fr';
try { savedLanguage = localStorage.getItem(languageKey) || 'fr'; } catch (_) {}
applyLanguage(savedLanguage);
