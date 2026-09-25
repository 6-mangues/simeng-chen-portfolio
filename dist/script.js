const translations = {
  fr: {
    navHome: "Accueil", navExperience: "Mes expériences", navSkills: "Mes compétences", navContact: "Contactez-moi",
    contactLabel: "CONTACT", availability: "Disponible pour une nouvelle opportunité", location: "Paris, France",
    contactCta: "Échangeons sur votre prochain projet <span>↗</span>", role: "PRODUCT · BUSINESS · DATA", name: "Simeng<br>CHEN",
    lead: "Je transforme des besoins métier complexes en produits digitaux et solutions data simples, utiles et mesurables — du cadrage à la mise en production.",
    body: "Spécialisée en CRM, marketing automation et data produit, j’analyse les parcours, structure les besoins et définis les KPI. Je coordonne les équipes métier, IT et partenaires internationaux, puis sécurise la recette, le déploiement et l’amélioration continue."
  },
  en: {
    navHome: "Home", navExperience: "Experience", navSkills: "Skills", navContact: "Contact me",
    contactLabel: "CONTACT", availability: "Open to new opportunities", location: "Paris, France",
    contactCta: "Let’s talk about your next project <span>↗</span>", role: "PRODUCT · BUSINESS · DATA", name: "CHEN<br>Simeng",
    lead: "I turn complex business needs into simple, useful and measurable digital products and data solutions — from framing to production.",
    body: "Specialised in CRM, marketing automation and data products, I analyse journeys, structure requirements and define KPIs. I coordinate business teams, IT and international partners, then secure testing, deployment and continuous improvement."
  },
  zh: {
    navHome: "首页", navExperience: "工作经历", navSkills: "专业技能", navContact: "联系我",
    contactLabel: "联系方式", availability: "期待新的职业机会", location: "法国巴黎",
    contactCta: "聊聊您的下一个项目 <span>↗</span>", role: "产品 · 业务 · 数据", name: "陈思蒙",
    lead: "我将复杂的业务需求转化为简洁、实用且可衡量的数字产品与数据解决方案，从需求定义推进到正式上线。",
    body: "我专注于CRM、营销自动化与数据产品，分析用户旅程、梳理业务需求并定义关键指标；同时协调业务、IT和国际合作伙伴，保障测试验收、部署上线与持续优化。"
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
