const galleryImages = [
  "assets/photo-1.jpg","assets/photo-2.jpg","assets/photo-3.jpg","assets/photo-4.jpg",
  "assets/photo-5.jpg","assets/photo-6.jpg","assets/photo-7.jpg","assets/photo-8.jpg"
];

const translations = {
  lt: {
    pageTitle: "Vaivorykštės Poolside Apartment | Kunigiškės, Palanga",
    metaDescription: "Vaivorykštės Poolside Apartment – apartamentai Kunigiškėse su šildomu baseinu, terasa, privačiu parkingu ir patogiu poilsiu iki 4 svečių.",
    navFeatures: "Patogumai",
    navGallery: "Galerija",
    navPricing: "Kainos",
    navCalendar: "Kalendorius",
    navLocation: "Lokacija",
    navBooking: "Rezervacija",
    navDates: "Laisvos datos",
    navReserve: "Rezervuoti",
    heroRating: "★ 9.5 Booking.com",
    heroTitle: "Vaivorykštės Poolside Apartment",
    heroText: "Jaukūs apartamentai poilsiui Palangoje prie jūros su terasa, šildomu baseinu ir ramia aplinka.",
    heroPrimary: "Rezervuoti dabar",
    heroSecondary: "Peržiūrėti nuotraukas",
    featuresTitle: "Patogumai",
    featuresIntro: "",
    feature1Title: "Šildomas baseinas",
    feature1Text: "Maudynės komfortiškai bet kokiu oru ir dar malonesnis poilsis viso sezono metu.",
    feature2Title: "Terasa",
    feature2Text: "Patogi vieta rytinei kavai, poilsiui lauke ir vakarui po maudynių.",
    feature3Title: "Iki 4 svečių",
    feature3Text: "Dvigulė lova miegamajame ir išskleidžiama sofa-lova svetainėje.",
    feature4Title: "Privati parkavimo vieta",
    feature4Text: "Patogus įvažiavimas per šlagbaumą ir atskira vieta automobiliui.",
    feature5Title: "Jauki aplinka",
    feature5Text: "Daugiau privatumo ir malonesnė poilsio atmosfera aplink apartamentus.",
    feature6Title: "Netoli jūros",
    feature6Text: "Patogus atstumas pėsčiomis iki pajūrio ramiam poilsiui Kunigiškėse.",
    galleryTitle: "Nuotraukų galerija",
    galleryIntro: "",
    galleryMore: "Visos nuotraukos",
    pricingTitle: "Kainos",
    pricingIntro: "",
    price1Label: "Pavasaris / Ruduo",
    price1Text: "Kovas–gegužė ir rugsėjis–lapkritis – subalansuotas metas ramiam poilsiui prie jūros.",
    priceBadge: "",
    price2Label: "Vasara",
    price2Text: "Dauguma vasaros datų su gera kaina tiesioginei rezervacijai.",
    price3Label: "Šventės",
    price3Text: "Šventiniai savaitgaliai ir jaukūs poilsio pabėgimai ne sezono metu.",
    pricingNote: "Dėl tikslios kainos ir laisvų datų parašykite tiesiogiai – dažnai galima pasiūlyti geresnę kainą nei per platformas.",
    calendarTitle: "Užimtumo kalendorius",
    calendarIntro: "",
    locationTitle: "Lokacija",
    locationText: "<span class=\"location-name\">Vaivorykštės Poolside Apartment</span> įsikūrę ramesnėje Palangos dalyje – Kunigiškėse, patogioje vietoje poilsiui prie jūros, šalia dviračių takų ir lengvai pasiekiamo paplūdimio.<span class=\"location-address\">Adresas: Vaivorykštės gatvė 7c-1, Palanga</span>",
    bookingTitle: "Rezervacija tiesiogiai",
    bookingText: "Susisiek dėl laisvų datų, kainos ir rezervacijos.",
    bookingPhone: "+370 677 55519",
    bookingEmail: "El. paštas",
    footerText: "© Vaivorykštės Poolside Apartment",
    stickyReserve: "Rezervuoti apartamentus",
    closeLabel: "Uždaryti",
    prevLabel: "Ankstesnė",
    nextLabel: "Kita",
    lightboxAlt: "Galerijos nuotrauka",
    heroAlt: "Vaivorykštės Poolside Apartment baseinas"
  },
  en: {
    pageTitle: "Vaivorykštės Poolside Apartment | Kunigiskes, Palanga",
    metaDescription: "Vaivorykštės Poolside Apartment – a cozy stay in Kunigiskes with a heated pool, terrace, private parking, and comfortable accommodation for up to 4 guests.",
    navFeatures: "Amenities",
    navGallery: "Gallery",
    navPricing: "Rates",
    navCalendar: "Calendar",
    navLocation: "Location",
    navBooking: "Booking",
    navDates: "Availability",
    navReserve: "Book now",
    heroRating: "★ 9.5 Booking.com",
    heroEyebrow: "Palanga • Kunigiskes • Vaivorykštės St.",
    heroTitle: "Vaivorykštės Poolside Apartment",
    heroText: "A bright poolside stay near the sea with a private terrace, heated outdoor pool, and a calm setting.",
    heroPrimary: "Book now",
    heroSecondary: "View photos",
    featuresTitle: "Amenities",
    featuresIntro: "",
    feature1Title: "Heated pool",
    feature1Text: "Comfortable swimming in any weather and a more enjoyable stay throughout the season.",
    feature2Title: "Terrace",
    feature2Text: "An inviting outdoor space for slow mornings, evening drinks, and relaxing after the beach or pool.",
    feature3Title: "Up to 4 guests",
    feature3Text: "Ideal for couples, small families, or up to four guests with a double bed and sofa bed setup.",
    feature4Title: "Private parking",
    feature4Text: "Easy gated access and a dedicated parking spot make arrival simple and stress-free.",
    feature5Title: "Cozy surroundings",
    feature5Text: "A calmer setting with a more private feel than a typical busy central stay.",
    feature6Title: "Close to the sea",
    feature6Text: "Close enough for easy beach days while still enjoying a quieter part of Palanga.",
    galleryTitle: "Photo gallery",
    galleryIntro: "",
    galleryMore: "All photos",
    pricingTitle: "Suggested rates",
    pricingIntro: "",
    price1Label: "Spring / Autumn",
    price1Text: "March–May and September–November – a balanced season for a relaxed seaside stay.",
    priceBadge: "",
    price2Label: "Summer",
    price2Text: "Most summer dates with strong direct-booking value.",
    price3Label: "Holiday season",
    price3Text: "Festive weekends, and cozy escapes outside the summer peak.",
    pricingNote: "For the exact rate and available dates, send a direct message — you can often offer a better price than on major platforms.",
    calendarTitle: "Availability calendar",
    calendarIntro: "",
    locationTitle: "Location",
    locationText: "<span class=\"location-name\">Vaivorykštės Poolside Apartment</span> is set in the quieter part of Palanga – Kunigiškės, a convenient spot for a relaxed seaside stay close to cycling paths and the beach.<span class=\"location-address\">Address: Vaivorykštės gatvė 7c-1, Palanga</span>",
    bookingTitle: "Direct booking",
    bookingText: "Message directly for exact availability, final rates, and the best booking option for your dates.",
    bookingPhone: "+370 677 55519",
    bookingEmail: "Email",
    footerText: "© Vaivorykštės Poolside Apartment",
    stickyReserve: "Book this apartment",
    closeLabel: "Close",
    prevLabel: "Previous",
    nextLabel: "Next",
    lightboxAlt: "Gallery image",
    heroAlt: "Vaivorykštės Poolside Apartment pool"
  }
};

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const galleryButtons = document.querySelectorAll('.gallery-item[data-index]');
const openGalleryBtn = document.getElementById("openGalleryBtn");
const langButtons = document.querySelectorAll('.lang-btn');
const heroImage = document.getElementById('heroImage');
const availabilityCalendar = document.getElementById('availabilityCalendar');
const calendarBaseUrl = 'https://calendar.google.com/calendar/embed';
const calendarId = 't43jlbtvbnh9uv7vd040lpdldcge1m72@import.calendar.google.com';
let currentIndex = 0;

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

function openLightbox(index){
  currentIndex = index;
  lightboxImage.src = galleryImages[currentIndex];
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
  lightboxImage.src = galleryImages[currentIndex];
}
function showPrev(){
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentIndex];
}

function setLanguage(lang){
  const t = translations[lang] || translations.lt;
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if(metaDesc) metaDesc.setAttribute('content', t.metaDescription);
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
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('siteLanguage', lang);
}

galleryButtons.forEach(btn => btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index))));
if (openGalleryBtn) openGalleryBtn.addEventListener("click", () => openLightbox(0));
if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
if (nextBtn) nextBtn.addEventListener("click", showNext);
if (prevBtn) prevBtn.addEventListener("click", showPrev);
if (lightbox) lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));

document.addEventListener("keydown", e => {
  if(!lightbox || !lightbox.classList.contains("open")) return;
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowRight") showNext();
  if(e.key === "ArrowLeft") showPrev();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const target = href ? document.querySelector(href) : null;
    if(target){
      e.preventDefault();
      const header = document.querySelector('.topbar');
      const headerOffset = header ? header.offsetHeight + 12 : 88;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

updateSeasonalPricing();
setLanguage(localStorage.getItem('siteLanguage') || 'lt');
