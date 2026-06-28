const assetBase = (document.documentElement.dataset.assetBase || "assets/").replace(/\/?$/, "/");
const galleryImages = [
  "photo-1.jpg","photo-2.jpg","photo-3.jpg","photo-4.jpg",
  "photo-5.jpg","photo-6.jpg","photo-7.jpg","photo-8.jpg",
  "photo-9.jpg","photo-10.jpg","photo-11.jpg","photo-12.jpg",
  "photo-13.jpg","photo-14.jpg","photo-15.jpg","photo-16.jpg",
  "photo-17.jpg"
].map(filename => `${assetBase}${filename}`);

const translations = window.translations || {};

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const lightboxThumbs = document.getElementById("lightboxThumbs");
const lightboxStatus = document.getElementById("lightboxStatus");
const galleryButtons = document.querySelectorAll('.gallery-item[data-index]');
const openGalleryBtn = document.getElementById("openGalleryBtn");
const galleryItemImages = document.querySelectorAll('.gallery-item img');
const langButtons = document.querySelectorAll('.lang-btn');
const heroImage = document.getElementById('heroImage');
const availabilityCalendar = document.getElementById('availabilityCalendar');
const calendarBaseUrl = 'https://calendar.google.com/calendar/embed';
const calendarId = 't43jlbtvbnh9uv7vd040lpdldcge1m72@import.calendar.google.com';
let currentIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

function updateSeasonalPricing(){
  const cards = [
    document.getElementById("priceCard1"),
    document.getElementById("priceCard2"),
    document.getElementById("priceCard3")
  ].filter(Boolean);
  cards.forEach(card => card.classList.remove("featured"));
  const month = new Date().getMonth() + 1;
  let featuredIndex = 0; // 1: Spring/Autumn

  if([6,7,8].includes(month)){
    featuredIndex = 1; // 2: Summer
  } else if([12,1,2].includes(month)){
    featuredIndex = 2; // 3: Holidays
  }

  if(cards[featuredIndex]) cards[featuredIndex].classList.add("featured");
}

function centerActiveThumb(activeThumb){
  if(!lightboxThumbs || !activeThumb) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targetLeft = activeThumb.offsetLeft - ((lightboxThumbs.clientWidth - activeThumb.clientWidth) / 2);
  const maxScrollLeft = Math.max(0, lightboxThumbs.scrollWidth - lightboxThumbs.clientWidth);
  lightboxThumbs.scrollTo({
    left: Math.max(0, Math.min(targetLeft, maxScrollLeft)),
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
}

function updateLightboxView(){
  if(!lightboxImage) return;
  lightboxImage.src = galleryImages[currentIndex];
  const lang = document.documentElement.lang === 'en' ? 'en' : 'lt';
  const dict = translations[lang] || translations.lt || {};
  const imageAlts = Array.isArray(dict.galleryAlts) ? dict.galleryAlts : [];
  lightboxImage.alt = imageAlts[currentIndex] || dict.lightboxAlt || 'Gallery photo';
  if(lightboxStatus) lightboxStatus.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  if(lightboxThumbs){
    const thumbs = lightboxThumbs.querySelectorAll('.lightbox-thumb');
    let activeThumb = null;
    thumbs.forEach((thumb, index) => {
      const isActive = index === currentIndex;
      thumb.classList.toggle('active', isActive);
      thumb.setAttribute('aria-current', isActive ? 'true' : 'false');
      if(isActive) activeThumb = thumb;
    });
    centerActiveThumb(activeThumb);
  }
}

function getThumbAriaLabel(index){
  const lang = document.documentElement.lang === 'en' ? 'en' : 'lt';
  const dict = translations[lang] || translations.lt || {};
  const template = dict.galleryThumbLabel || 'Photo {current} of {total}';
  return template.replace('{current}', index + 1).replace('{total}', galleryImages.length);
}

function buildLightboxThumbs(){
  if(!lightboxThumbs || lightboxThumbs.childElementCount) return;
  galleryImages.forEach((src, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lightbox-thumb';
    button.setAttribute('aria-label', getThumbAriaLabel(index));
    button.innerHTML = `<img src="${src}" alt="">`;
    button.addEventListener('click', () => {
      currentIndex = index;
      updateLightboxView();
    });
    lightboxThumbs.appendChild(button);
  });
}

function openLightbox(index){
  currentIndex = index;
  buildLightboxThumbs();
  updateLightboxView();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function showNext(){
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateLightboxView();
}
function showPrev(){
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightboxView();
}

function setupLightboxTouch(){
  if(!lightbox) return;

  lightbox.addEventListener("touchstart", e => {
    if(!lightbox.classList.contains("open") || !e.touches.length) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener("touchend", e => {
    if(!lightbox.classList.contains("open") || !e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if(Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2){
      if(dx < 0){
        showNext();
      } else {
        showPrev();
      }
    }
  }, { passive: true });
}

function updateStickyMobileOffset(){
  const vv = window.visualViewport;
  if(!vv){
    document.documentElement.style.setProperty('--vv-bottom-offset', '0px');
    return;
  }
  const bottomOffset = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
  document.documentElement.style.setProperty('--vv-bottom-offset', `${Math.round(bottomOffset)}px`);
}

function getPageDefaultLanguage(){
  const configuredLang = document.documentElement.dataset.pageLang;
  if(configuredLang === 'en' || configuredLang === 'lt') return configuredLang;
  return document.documentElement.lang === 'en' ? 'en' : 'lt';
}

function getPathLanguage(){
  const firstPathPart = window.location.pathname.split('/').filter(Boolean)[0];
  return firstPathPart === 'en' ? 'en' : null;
}

function isEnglishPage(){
  return getPathLanguage() === 'en' || document.documentElement.dataset.pageLang === 'en';
}

function syncMetaForLanguage(t){
  const metaDesc = document.querySelector('meta[name="description"]');
  if(metaDesc) metaDesc.setAttribute('content', t.metaDescription);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if(ogTitle) ogTitle.setAttribute('content', t.pageTitle);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if(ogDescription) ogDescription.setAttribute('content', t.metaDescription);
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if(twitterTitle) twitterTitle.setAttribute('content', t.pageTitle);
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if(twitterDescription) twitterDescription.setAttribute('content', t.metaDescription);
}

function changeLanguage(lang){
  const runningOnWeb = window.location.protocol === 'http:' || window.location.protocol === 'https:';
  if(runningOnWeb){
    if(lang === 'en' && !isEnglishPage()){
      localStorage.setItem('siteLanguage', 'en');
      window.location.href = 'en/';
      return;
    }
    if(lang === 'lt' && isEnglishPage()){
      localStorage.setItem('siteLanguage', 'lt');
      window.location.href = '../';
      return;
    }
  }
  setLanguage(lang);
}

function setLanguage(lang){
  const t = translations[lang] || translations.lt;
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  syncMetaForLanguage(t);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (key in t) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (key in t) el.innerHTML = t[key];
  });
  if(closeBtn) closeBtn.setAttribute('aria-label', t.closeLabel);
  if(prevBtn) prevBtn.setAttribute('aria-label', t.prevLabel);
  if(nextBtn) nextBtn.setAttribute('aria-label', t.nextLabel);
  if(lightboxImage) lightboxImage.alt = t.lightboxAlt;
  if(heroImage) heroImage.alt = t.heroAlt;
  if(galleryItemImages.length && Array.isArray(t.galleryAlts)) {
    galleryItemImages.forEach((img, index) => {
      if(t.galleryAlts[index]) img.alt = t.galleryAlts[index];
    });
  }
  if(availabilityCalendar){
    const params = new URLSearchParams({
      src: calendarId,
      ctz: 'Europe/Vilnius',
      hl: lang === 'lt' ? 'lt' : 'en',
      mode: 'MONTH',
      showTitle: '0',
      showPrint: '0',
      showTabs: '0',
      showCalendars: '0'
    });
    availabilityCalendar.src = `${calendarBaseUrl}?${params.toString()}`;
    availabilityCalendar.title = t.calendarTitle;
  }
  if(lightboxThumbs){
    lightboxThumbs.querySelectorAll('.lightbox-thumb').forEach((thumb, index) => {
      thumb.setAttribute('aria-label', getThumbAriaLabel(index));
    });
  }
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('siteLanguage', lang);
}

galleryButtons.forEach(btn => btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index))));
if (openGalleryBtn) openGalleryBtn.addEventListener("click", () => openLightbox(0));
if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
if (nextBtn) nextBtn.addEventListener("click", showNext);
if (prevBtn) prevBtn.addEventListener("click", showPrev);
if (lightbox) lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
langButtons.forEach(btn => btn.addEventListener('click', () => changeLanguage(btn.dataset.lang)));

document.addEventListener("keydown", e => {
  if(!lightbox || !lightbox.classList.contains("open")) return;
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowRight") showNext();
  if(e.key === "ArrowLeft") showPrev();
});

function getAnchorScrollTarget(target){
  if(!target) return null;
  if(target.matches('#galerija, #kainos, #kalendorius, #lokacija, #rezervacija, #patogumai')){
    return target.querySelector('.section-head, .container > h2, .container > h1') || target.querySelector('.container') || target;
  }
  return target;
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const target = href ? document.querySelector(href) : null;
    if(target){
      e.preventDefault();
      const header = document.querySelector('.topbar');
      const headerOffset = header ? header.offsetHeight + 8 : 84;
      const scrollTarget = getAnchorScrollTarget(target);
      const y = scrollTarget.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      if(history.replaceState){
        history.replaceState(null, '', href);
      }
    }
  });
});

setupLightboxTouch();
updateStickyMobileOffset();
if(window.visualViewport){
  window.visualViewport.addEventListener('resize', updateStickyMobileOffset);
  window.visualViewport.addEventListener('scroll', updateStickyMobileOffset);
}
window.addEventListener('resize', updateStickyMobileOffset);
window.addEventListener('orientationchange', updateStickyMobileOffset);

updateSeasonalPricing();
setLanguage(getPathLanguage() || localStorage.getItem('siteLanguage') || getPageDefaultLanguage());
