/**
 * ============================================================
 *  SuperFitness — Shared Navigation, Language Switcher & Active Link
 *  nav.js  |  Used by ALL pages (EN + AR)
 * ============================================================
 */

/* ------------------------------------------------------------------
   PAGE MAP  –  EN filename  ↔  AR filename  ↔  nav key
------------------------------------------------------------------ */
const PAGE_MAP = [
  { en: 'home.html',             ar: 'home2.html',             key: 'home' },
  { en: 'About Us.html',         ar: 'About Us2.html',         key: 'about' },
  { en: 'Programs.html',         ar: 'Programs2.html',         key: 'programs' },
  { en: 'Schedule.html',         ar: 'Schedule2.html',         key: 'schedule' },
  { en: 'Trainers.html',         ar: 'Trainers2.html',         key: 'trainers' },
  { en: 'bmi.html',              ar: 'bmi2.html',              key: 'bmi' },
  { en: 'Testimonials_(0).html', ar: 'Testimonials2.html',     key: 'testimonials' },
  { en: 'blog.html',             ar: 'blog2.html',             key: 'blog' },
  { en: 'fqa.html',              ar: 'fqa2.html',              key: 'faq' },
  { en: 'Contact.html',          ar: 'Contact2.html',          key: 'contact' },
  { en: 'join.html',             ar: 'join2.html',             key: 'join' },
  { en: 'login.html',            ar: 'login2.html',            key: 'login' },
  { en: 'Register.html',         ar: 'Register2.html',         key: 'register' },
];

/* ------------------------------------------------------------------
   DETECT CURRENT PAGE
------------------------------------------------------------------ */
const currentFile = decodeURIComponent(
  window.location.pathname.split('/').pop()
) || 'home.html';

const isArabic = currentFile.endsWith('2.html');

const currentEntry = PAGE_MAP.find(p =>
  (isArabic ? p.ar : p.en).toLowerCase() === currentFile.toLowerCase()
) || null;

console.log('=== SuperFitness Nav ===');
console.log('Current file :', currentFile);
console.log('Language     :', isArabic ? 'Arabic (AR)' : 'English (EN)');
console.log('Page key     :', currentEntry ? currentEntry.key : 'unknown');

/* ------------------------------------------------------------------
   NAV LABELS
------------------------------------------------------------------ */
const LABELS = {
  en: {
    home: 'Home',
    about: 'About Us',
    programs: 'Programs',
    schedule: 'Schedule',
    trainers: 'Trainers',
    bmi: 'BMI',
    testimonials: 'Testimonials',
    blog: 'Blog',
    faq: 'FAQ',
    contact: 'Contact',
    switchLang: 'العربية',
  },

  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    programs: 'البرامج',
    schedule: 'الجدول',
    trainers: 'المدربين',
    bmi: 'مؤشر كتلة الجسم',
    testimonials: 'آراء العملاء',
    blog: 'المدونة',
    faq: 'الأسئلة الشائعة',
    contact: 'تواصل معنا',
    switchLang: 'English',
  },
};

/* ------------------------------------------------------------------
   BUILD NAVBAR
------------------------------------------------------------------ */
function buildNav() {

  const nav = document.querySelector("nav.navbar");

  if(!nav){
    console.warn("Navbar not found");
    return;
  }

  const lang = isArabic ? "ar" : "en";
  const labels = LABELS[lang];

  function href(entry){
    return isArabic ? entry.ar : entry.en;
  }

  function isActive(key){
    return currentEntry && currentEntry.key === key;
  }

  const navItems = [
    {key:"home",label:labels.home},
    {key:"about",label:labels.about},
    {key:"programs",label:labels.programs},
    {key:"schedule",label:labels.schedule},
    {key:"trainers",label:labels.trainers},
    {key:"bmi",label:labels.bmi},
    {key:"testimonials",label:labels.testimonials},
    {key:"blog",label:labels.blog},
    {key:"faq",label:labels.faq},
    {key:"contact",label:labels.contact}
  ];

  const listItems = navItems.map(item => {

    const entry = PAGE_MAP.find(p=>p.key===item.key);
    const url = entry ? href(entry) : "#";
    const active = isActive(item.key) ? 'class="nav-active"' : "";

    return `<li><a href="${url}" ${active}>${item.label}</a></li>`;

  }).join("");

  nav.innerHTML = `
  <h2 class="logo" id="site-logo" style="cursor:pointer;">
  SUPER<span>FITNESS</span>
  </h2>

  <ul>
  ${listItems}

  <li>
  <a href="#" id="lang-switcher" onclick="switchLanguage();return false;">
  ${labels.switchLang}
  </a>
  </li>

  </ul>
  `;

  document.getElementById("site-logo").onclick = function(){
    window.location.href = "login.html";
  };

}

/* ------------------------------------------------------------------
   LANGUAGE SWITCH
------------------------------------------------------------------ */
function switchLanguage(){

  if(!currentEntry){
    console.warn("Page not found in PAGE_MAP");
    return;
  }

  const target = isArabic ? currentEntry.en : currentEntry.ar;
  window.location.href = target;

}

/* ------------------------------------------------------------------
   ACTIVE LINK STYLE
------------------------------------------------------------------ */
function injectStyle(){

  if(document.getElementById("sf-style")) return;

  const style = document.createElement("style");

  style.id="sf-style";

  style.textContent = `

  .navbar a.nav-active{
  border-bottom:2px solid #ff7a18;
  padding-bottom:3px;
  }

  #lang-switcher{
  border:1px solid #ff7a18;
  color:#ff7a18 !important;
  padding:3px 10px;
  border-radius:3px;
  }

  #lang-switcher:hover{
  background:#ff7a18;
  color:#fff !important;
  }

  html[lang="ar"] .navbar{
  flex-direction:row-reverse;
  }

  html[lang="ar"] .navbar ul{
  flex-direction:row-reverse;
  }

  `;

  document.head.appendChild(style);

}

/* ------------------------------------------------------------------
   INIT
------------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded",function(){

  injectStyle();

  buildNav();

  if(isArabic){

    document.documentElement.lang="ar";
    document.documentElement.dir="rtl";

  }else{

    document.documentElement.lang="en";
    document.documentElement.dir="ltr";

  }

});
