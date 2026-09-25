const translations = {
  fr: {
    navHome: "Accueil", navExperience: "Mes expériences", navSkills: "Mes compétences", navContact: "Contactez-moi",
    contactLabel: "CONTACT", availability: "Disponible pour une nouvelle opportunité", location: "Paris, France",
    contactCta: "Échangeons sur votre prochain projet <span>↗</span>", role: "PRODUCT · BUSINESS · DATA", name: "Simeng<br>CHEN",
    lead: "Je transforme des besoins métier complexes en produits digitaux et solutions data simples, utiles et mesurables — du cadrage à la mise en production.",
    body: "Spécialisée en CRM, marketing automation et data produit, j’analyse les parcours, structure les besoins et définis les KPI. Je coordonne les équipes métier, IT et partenaires internationaux, puis sécurise la recette, le déploiement et l’amélioration continue.",
    dataLead: "J’explore les données pour révéler les comportements, mesurer la performance et transformer les signaux CRM & marketing en décisions actionnables.",
    dataBody: "SQL, modélisation et dashboards : je consolide des sources complexes, construis des segmentations B2B et fiabilise les KPI. Mes analyses couvrent les campagnes, cohortes, funnels de conversion et la performance commerciale afin d’identifier les leviers de fidélisation, de réactivation et de croissance."
  },
  en: {
    navHome: "Home", navExperience: "Experience", navSkills: "Skills", navContact: "Contact me",
    contactLabel: "CONTACT", availability: "Open to new opportunities", location: "Paris, France",
    contactCta: "Let’s talk about your next project <span>↗</span>", role: "PRODUCT · BUSINESS · DATA", name: "CHEN<br>Simeng",
    lead: "I turn complex business needs into simple, useful and measurable digital products and data solutions — from framing to production.",
    body: "Specialised in CRM, marketing automation and data products, I analyse journeys, structure requirements and define KPIs. I coordinate business teams, IT and international partners, then secure testing, deployment and continuous improvement.",
    dataLead: "I explore data to uncover behaviours, measure performance and turn CRM and marketing signals into actionable decisions.",
    dataBody: "Using SQL, data modelling and dashboards, I consolidate complex sources, build B2B segmentations and improve KPI reliability. My analyses span campaigns, cohorts, conversion funnels and commercial performance to identify retention, reactivation and growth opportunities."
  },
  zh: {
    navHome: "首页", navExperience: "工作经历", navSkills: "专业技能", navContact: "联系我",
    contactLabel: "联系方式", availability: "期待新的职业机会", location: "法国巴黎",
    contactCta: "聊聊您的下一个项目 <span>↗</span>", role: "产品 · 业务 · 数据", name: "陈思蒙",
    lead: "我将复杂的业务需求转化为简洁、实用且可衡量的数字产品与数据解决方案，从需求定义推进到正式上线。",
    body: "我专注于CRM、营销自动化与数据产品，分析用户旅程、梳理业务需求并定义关键指标；同时协调业务、IT和国际合作伙伴，保障测试验收、部署上线与持续优化。",
    dataLead: "我通过数据洞察用户行为、衡量业务表现，并将CRM与营销信号转化为可执行的决策。",
    dataBody: "通过SQL、数据建模与可视化看板，我整合复杂数据源，构建B2B客户分群并提升指标可靠性。分析覆盖营销活动、用户群组、转化漏斗与商业表现，用于识别忠诚度、客户唤醒和增长机会。"
  }
};

const language = document.querySelector('.language');
const langCurrent = document.querySelector('.lang-current');
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

langCurrent.addEventListener('click', () => {
  const open = language.classList.toggle('open');
  langCurrent.setAttribute('aria-expanded', open);
});

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
  const code = button.dataset.lang;
  document.documentElement.lang = code === 'zh' ? 'zh-CN' : code;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    node.innerHTML = translations[code][node.dataset.i18n];
  });
  langCurrent.querySelector('span').textContent = code === 'zh' ? '中文' : code.toUpperCase();
  document.title = `${code === 'zh' ? '陈思蒙' : code === 'en' ? 'CHEN Simeng' : 'Simeng Chen'} — Product · CRM · Data`;
  language.classList.remove('open');
  langCurrent.setAttribute('aria-expanded', 'false');
}));

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.addEventListener('click', event => {
  if (!language.contains(event.target)) {
    language.classList.remove('open');
    langCurrent.setAttribute('aria-expanded', 'false');
  }
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => {
  glow.style.transform = `translate(${event.clientX - 130}px, ${event.clientY - 130}px)`;
}, { passive: true });

const sliderTrack = document.querySelector('.slides-track');
const slides = [...document.querySelectorAll('.profile-slide')];
const dots = [...document.querySelectorAll('[data-slide-to]')];
const counter = document.querySelector('.slider-arrows b');
let currentSlide = 0;
let sliderTimer;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  slides.forEach((slide, i) => {
    const active = i === currentSlide;
    slide.classList.toggle('active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  dots.forEach((dot, i) => {
    const active = i === currentSlide;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-selected', String(active));
  });
  counter.textContent = String(currentSlide + 1).padStart(2, '0');
}

function restartSlider() {
  clearInterval(sliderTimer);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sliderTimer = setInterval(() => showSlide(currentSlide + 1), 7000);
  }
}

dots.forEach(dot => dot.addEventListener('click', () => {
  showSlide(Number(dot.dataset.slideTo));
  restartSlider();
}));
document.querySelector('[data-slide-prev]').addEventListener('click', () => { showSlide(currentSlide - 1); restartSlider(); });
document.querySelector('[data-slide-next]').addEventListener('click', () => { showSlide(currentSlide + 1); restartSlider(); });
restartSlider();
