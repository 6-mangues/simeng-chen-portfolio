const translations = {
  fr: {
    navHome: "Accueil", navExperience: "Mes expériences", navSkills: "Mes compétences", navContact: "Contactez-moi",
    contactLabel: "CONTACT", availability: "Disponible pour une nouvelle opportunité", location: "Paris, France",
    contactCta: "Échangeons sur votre prochain projet <span>↗</span>", role: "PRODUCT · BUSINESS · DATA", name: "Simeng<br>CHEN",
    lead: "Je transforme des besoins métier complexes en produits digitaux et solutions data simples, utiles et mesurables.",
    body: "De l’e-commerce au CRM, puis à la data analyse et au Data Product Management, je relie les équipes métier, IT et partenaires pour faire avancer des projets de bout en bout."
  },
  en: {
    navHome: "Home", navExperience: "Experience", navSkills: "Skills", navContact: "Contact me",
    contactLabel: "CONTACT", availability: "Open to new opportunities", location: "Paris, France",
    contactCta: "Let’s talk about your next project <span>↗</span>", role: "PRODUCT · BUSINESS · DATA", name: "CHEN<br>Simeng",
    lead: "I turn complex business needs into simple, useful and measurable digital products and data solutions.",
    body: "From e-commerce to CRM, data analysis and Data Product Management, I connect business teams, IT and partners to move projects forward from discovery to delivery."
  },
  zh: {
    navHome: "首页", navExperience: "工作经历", navSkills: "专业技能", navContact: "联系我",
    contactLabel: "联系方式", availability: "期待新的职业机会", location: "法国巴黎",
    contactCta: "聊聊您的下一个项目 <span>↗</span>", role: "产品 · 业务 · 数据", name: "陈思蒙",
    lead: "我将复杂的业务需求转化为简洁、实用且可衡量的数字产品与数据解决方案。",
    body: "从电商、CRM到数据分析与数据产品管理，我连接业务团队、IT团队和外部合作伙伴，推动项目从需求探索走向落地交付。"
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
