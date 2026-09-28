const contactTranslations = {
  fr: {
    navHome:'Accueil', navExperience:'Mes expériences', navContact:'Contactez-moi', availability:'Disponible pour une nouvelle opportunité',
    headline:'Construisons quelque chose d’utile.', intro:'Un produit à cadrer, un CRM à structurer ou des données à transformer en décisions ? Je serais ravie de découvrir votre contexte et d’échanger sur vos priorités.', response:'Je réponds généralement sous 48 h',
    emailLabel:'ÉCRIRE UN E-MAIL', linkedinTitle:'Découvrir mon profil', linkedinNote:'Parcours, expériences et actualités professionnelles.', cvLabel:'CV · VERSION FRANÇAISE', cvTitle:'Télécharger mon CV'
  },
  en: {
    navHome:'Home', navExperience:'Experience', navContact:'Contact me', availability:'Open to new opportunities',
    headline:'Let’s build something useful.', intro:'Whether you are shaping a product, structuring a CRM or turning data into decisions, I would be glad to learn more about your context and priorities.', response:'I usually reply within 48 hours',
    emailLabel:'SEND AN EMAIL', linkedinTitle:'View my profile', linkedinNote:'Experience, career journey and professional updates.', cvLabel:'CV · FRENCH VERSION', cvTitle:'Download my CV'
  },
  zh: {
    navHome:'首页', navExperience:'工作经历', navContact:'联系我', availability:'期待新的职业机会',
    headline:'一起打造真正有价值的项目。', intro:'无论是产品需求梳理、CRM体系建设，还是将数据转化为决策，我都很期待了解您的业务背景并探讨面临的挑战。', response:'通常在48小时内回复',
    emailLabel:'发送邮件', linkedinTitle:'查看我的主页', linkedinNote:'了解我的职业经历与最新动态。', cvLabel:'简历 · 法语版本', cvTitle:'下载我的简历'
  }
};

const languageKey = 'simeng-portfolio-language';
const language = document.querySelector('.language');
const langCurrent = document.querySelector('.lang-current');
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

function applyLanguage(code) {
  if (!contactTranslations[code]) code = 'fr';
  document.documentElement.lang = code === 'zh' ? 'zh-CN' : code;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = contactTranslations[code][node.dataset.i18n]; });
  langCurrent.querySelector('span').textContent = code === 'zh' ? '中文' : code.toUpperCase();
  document.title = `${contactTranslations[code].navContact} — Simeng Chen`;
  try { localStorage.setItem(languageKey, code); } catch (_) {}
}

langCurrent.addEventListener('click', () => { const open = language.classList.toggle('open'); langCurrent.setAttribute('aria-expanded', open); });
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => { applyLanguage(button.dataset.lang); language.classList.remove('open'); langCurrent.setAttribute('aria-expanded','false'); }));
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }));
document.addEventListener('click', event => { if (!language.contains(event.target)) { language.classList.remove('open'); langCurrent.setAttribute('aria-expanded','false'); } });
let savedLanguage = 'fr';
try { savedLanguage = localStorage.getItem(languageKey) || 'fr'; } catch (_) {}
applyLanguage(savedLanguage);
