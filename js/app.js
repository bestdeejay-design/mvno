// eSIM Travel — MVNO Travel Companion App

const appData = {
  profile: {
    name: 'Alex Traveler',
    email: 'alex@travelmail.com',
    phone: '+1 (555) 987-6543',
    avatar: 'AT',
    memberSince: '2025',
    language: 'English'
  },

  userESIMs: [
    { id: 1, country: 'UAE', operator: 'Etisalat', plan: '5GB', price: 12, dataUsed: 2.3, dataTotal: 5, daysLeft: 12, active: true },
    { id: 2, country: 'Egypt', operator: 'Orange', plan: '10GB', price: 15, dataUsed: 8.1, dataTotal: 10, daysLeft: 3, active: false }
  ],

  countries: [
    { id: 'uae', name: 'UAE', flag: '🇦🇪', code: '+971', operators: [
      { name: 'Etisalat', plans: [{ data: '5GB', price: 12, days: 30 }, { data: '15GB', price: 25, days: 30 }] },
      { name: 'Du', plans: [{ data: '3GB', price: 8, days: 15 }, { data: '10GB', price: 18, days: 30 }] }
    ]},
    { id: 'egypt', name: 'Egypt', flag: '🇪🇬', code: '+20', operators: [
      { name: 'Orange', plans: [{ data: '10GB', price: 15, days: 30 }, { data: '25GB', price: 28, days: 30 }] },
      { name: 'Vodafone', plans: [{ data: '5GB', price: 9, days: 15 }, { data: '12GB', price: 16, days: 30 }] }
    ]},
    { id: 'turkey', name: 'Turkey', flag: '🇹🇷', code: '+90', operators: [
      { name: 'Turkcell', plans: [{ data: '8GB', price: 11, days: 30 }, { data: '20GB', price: 22, days: 30 }] },
      { name: 'Vodafone', plans: [{ data: '4GB', price: 7, days: 15 }, { data: '10GB', price: 14, days: 30 }] }
    ]},
    { id: 'thailand', name: 'Thailand', flag: '🇹🇭', code: '+66', operators: [
      { name: 'AIS', plans: [{ data: '15GB', price: 18, days: 30 }, { data: '30GB', price: 30, days: 30 }] },
      { name: 'TrueMove', plans: [{ data: '8GB', price: 12, days: 15 }, { data: '20GB', price: 22, days: 30 }] }
    ]},
    { id: 'usa', name: 'USA', flag: '🇺🇸', code: '+1', operators: [
      { name: 'T-Mobile', plans: [{ data: '5GB', price: 20, days: 30 }, { data: '15GB', price: 35, days: 30 }] },
      { name: 'AT&T', plans: [{ data: '3GB', price: 15, days: 15 }, { data: '10GB', price: 28, days: 30 }] }
    ]},
    { id: 'uk', name: 'UK', flag: '🇬🇧', code: '+44', operators: [
      { name: 'EE', plans: [{ data: '10GB', price: 16, days: 30 }, { data: '25GB', price: 28, days: 30 }] },
      { name: 'Vodafone', plans: [{ data: '5GB', price: 11, days: 15 }, { data: '15GB', price: 20, days: 30 }] }
    ]}
  ],

  tours: [
    { id: 1, country: 'UAE', name: 'Burj Khalifa Tour', price: 75, duration: '4 hours', rating: 4.8, image: '🏙️', desc: 'Visit the world\'s tallest building with priority access to observation decks on levels 124, 125, and 148.' },
    { id: 2, country: 'UAE', name: 'Desert Safari', price: 120, duration: '6 hours', rating: 4.9, image: '🏜️', desc: 'Thrilling dune bashing, camel rides, sandboarding, BBQ dinner, and traditional entertainment under the stars.' },
    { id: 3, country: 'UAE', name: 'Dubai City Tour', price: 55, duration: '5 hours', rating: 4.5, image: '🌆', desc: 'Explore Dubai Marina, Palm Jumeirah, Old Dubai souks, and Burj Al Arab photo stop.' },
    { id: 4, country: 'Egypt', name: 'Pyramids Tour', price: 65, duration: '5 hours', rating: 4.9, image: '🔺', desc: 'Guided tour of the Great Pyramids of Giza, Sphinx, Valley Temple with a private Egyptologist.' },
    { id: 5, country: 'Egypt', name: 'Nile Cruise', price: 90, duration: '4 hours', rating: 4.7, image: '⛵', desc: 'Luxury felucca cruise on the Nile with dinner, live music, and panoramic Cairo views.' },
    { id: 6, country: 'Egypt', name: 'Luxor Temples', price: 80, duration: '8 hours', rating: 4.8, image: '🏛️', desc: 'Full-day excursion to Karnak Temple, Valley of the Kings, and Hatshepsut Temple.' },
    { id: 7, country: 'Turkey', name: 'Hagia Sophia', price: 45, duration: '3 hours', rating: 4.6, image: '🕌', desc: 'Guided tour of Hagia Sophia, Blue Mosque, Basilica Cistern with skip-the-line access.' },
    { id: 8, country: 'Turkey', name: 'Cappadocia Balloon', price: 200, duration: '4 hours', rating: 5.0, image: '🎈', desc: 'Sunrise hot air balloon flight over fairy chimneys with champagne toast and flight certificate.' },
    { id: 9, country: 'Turkey', name: 'Pamukkale Tour', price: 60, duration: '6 hours', rating: 4.7, image: '🏞️', desc: 'Visit the white travertine terraces and ancient Hierapolis with thermal pool access.' },
    { id: 10, country: 'Thailand', name: 'Phi Phi Islands', price: 55, duration: '8 hours', rating: 4.8, image: '🏝️', desc: 'Speedboat tour to Phi Phi islands, snorkeling, beach time, and buffet lunch included.' },
    { id: 11, country: 'Thailand', name: 'Elephant Sanctuary', price: 70, duration: '5 hours', rating: 4.9, image: '🐘', desc: 'Ethical elephant sanctuary visit with feeding, mud spa, and bathing these gentle giants.' },
    { id: 12, country: 'Thailand', name: 'Bangkok Temples', price: 35, duration: '4 hours', rating: 4.5, image: '🙏', desc: 'Visit Wat Pho, Wat Arun, and Grand Palace with an expert local guide.' }
  ],

  hotels: [
    { id: 1, country: 'UAE', name: 'Burj Al Arab', location: 'Dubai', price: 800, rating: 4.9, stars: 7, image: '⛵', desc: 'Iconic sail-shaped hotel on its own island. World-class service, private beach, and underwater restaurant.' },
    { id: 2, country: 'UAE', name: 'Atlantis Palm', location: 'Palm Jumeirah', price: 450, rating: 4.7, stars: 5, image: '🐠', desc: 'Luxury resort with Aquaventure waterpark, dolphin bay, and stunning Arabian Gulf views.' },
    { id: 3, country: 'UAE', name: 'Jumeirah Beach Hotel', location: 'Dubai Marina', price: 300, rating: 4.5, stars: 5, image: '🏖️', desc: 'Beachfront resort with multiple pools, kids club, and views of Burj Al Arab.' },
    { id: 4, country: 'Egypt', name: 'Marriott Mena House', location: 'Giza', price: 250, rating: 4.8, stars: 5, image: '🔺', desc: 'Historic hotel with direct pyramid views, lush gardens, and fine dining.' },
    { id: 5, country: 'Egypt', name: 'Steigenberger Hotel', location: 'Cairo', price: 180, rating: 4.4, stars: 5, image: '🏙️', desc: 'Modern luxury overlooking the Nile with rooftop pool and spa.' },
    { id: 6, country: 'Egypt', name: 'Hilton Pyramids Golf', location: 'Giza', price: 150, rating: 4.2, stars: 4, image: '⛳', desc: 'Resort with golf course, pool, and pyramid views. Great value for families.' },
    { id: 7, country: 'Turkey', name: 'Four Seasons Sultanahmet', location: 'Istanbul', price: 350, rating: 4.8, stars: 5, image: '🕌', desc: 'Luxury hotel in a former prison with Hagia Sophia views and world-class spa.' },
    { id: 8, country: 'Turkey', name: 'Ritz-Carlton Istanbul', location: 'Istanbul', price: 280, rating: 4.6, stars: 5, image: '🌊', desc: 'Elegant Bosphorus-side hotel with panoramic views and exceptional service.' },
    { id: 9, country: 'Turkey', name: 'Swissotel The Bosphorus', location: 'Istanbul', price: 200, rating: 4.4, stars: 5, image: '🏔️', desc: 'Luxury hotel with large rooms, multiple restaurants, and Bosphorus views.' },
    { id: 10, country: 'Thailand', name: 'Mandarin Oriental', location: 'Bangkok', price: 400, rating: 4.9, stars: 5, image: '🌺', desc: 'Legendary riverside hotel with world-class spa, Michelin-starred dining.' },
    { id: 11, country: 'Thailand', name: 'W Bangkok', location: 'Bangkok', price: 180, rating: 4.5, stars: 5, image: '✨', desc: 'Trendy hotel with rooftop bar, pool, and vibrant Sathorn location.' },
    { id: 12, country: 'Thailand', name: 'Novotel Platinum', location: 'Bangkok', price: 90, rating: 4.1, stars: 4, image: '🛍️', desc: 'Convenient shopping district hotel with modern rooms and rooftop pool.' }
  ],

  flights: [
    { from: 'Dubai', to: 'Moscow', price: 450, airline: 'Emirates', duration: '5h 10m' },
    { from: 'Moscow', to: 'Dubai', price: 420, airline: 'Aeroflot', duration: '5h 00m' },
    { from: 'Cairo', to: 'Moscow', price: 380, airline: 'EgyptAir', duration: '4h 30m' },
    { from: 'Moscow', to: 'Cairo', price: 350, airline: 'Aeroflot', duration: '4h 20m' },
    { from: 'Istanbul', to: 'Moscow', price: 320, airline: 'Turkish Airlines', duration: '5h 00m' },
    { from: 'Moscow', to: 'Istanbul', price: 290, airline: 'Turkish Airlines', duration: '5h 10m' },
    { from: 'Bangkok', to: 'Moscow', price: 550, airline: 'Thai Airways', duration: '9h 30m' },
    { from: 'Moscow', to: 'Bangkok', price: 520, airline: 'Aeroflot', duration: '9h 00m' }
  ],

  bookings: [
    { type: 'esim', ref: 'eSIM-2025-001', country: 'UAE', operator: 'Etisalat', plan: '5GB', price: 12, date: 'May 28, 2025', status: 'active' },
    { type: 'tour', ref: 'TOUR-2025-001', name: 'Desert Safari', country: 'UAE', price: 120, date: 'Jun 2, 2025', status: 'confirmed' },
    { type: 'hotel', ref: 'HTL-2025-001', name: 'Atlantis Palm', country: 'UAE', price: 450, date: 'Jun 1-3, 2025', status: 'confirmed' }
  ]
};

let history = ['home'];

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  updateThemeIcons(newTheme);
  localStorage.setItem('esimtravel-theme', newTheme);
}

function updateThemeIcons(theme) {
  document.querySelectorAll('.theme-toggle .icon, .theme-toggle-small .icon-sm').forEach(icon => {
    const use = icon.querySelector('use');
    if (use) use.setAttribute('href', theme === 'light' ? '#icon-moon' : '#icon-sun');
  });
}

function loadTheme() {
  const saved = localStorage.getItem('esimtravel-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcons(saved);
}

function openApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('esimtravel_appOpen', 'true');
  showPage('home');
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  history = ['home'];
  localStorage.setItem('esimtravel_appOpen', 'false');
}

function showPage(pageName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }
  if (history[history.length - 1] !== pageName) {
    history.push(pageName);
  }
  updateHeader(pageName);
  renderContent(pageName);
  localStorage.setItem('esimtravel_lastPage', pageName);
  localStorage.setItem('esimtravel_history', JSON.stringify(history));
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prevPage = history[history.length - 1];
    updateHeader(prevPage);
    renderContent(prevPage);
    localStorage.setItem('esimtravel_lastPage', prevPage);
    localStorage.setItem('esimtravel_history', JSON.stringify(history));
    document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
  }
}

function updateHeader(pageName) {
  const titles = {
    home: 'Home',
    esim: 'eSIM Store',
    tours: 'Tours & Excursions',
    hotels: 'Hotels',
    profile: 'Profile',
    'esim-detail': 'eSIM Plans',
    'tour-detail': 'Tour Details',
    'hotel-detail': 'Hotel Details',
    myesims: 'My eSIMs',
    flights: 'Flights'
  };
  document.getElementById('appTitle').textContent = titles[pageName] || 'Home';
}

function renderContent(pageName) {
  const content = document.getElementById('content');
  const pages = {
    home: renderHome,
    esim: renderESIM,
    tours: renderTours,
    hotels: renderHotels,
    profile: renderProfile,
    myesims: renderMyESIMs
  };
  if (pages[pageName]) {
    content.innerHTML = pages[pageName]();
    if (pageName === 'esim') initESIMSearch();
  } else {
    content.innerHTML = pages.home();
  }
}

function showToast(title, subtitle) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<svg class="icon"><use href="#icon-check"/></svg><div class="toast-text"><strong>' + title + '</strong><small>' + (subtitle || '') + '</small></div>';
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; }, 3000);
  setTimeout(() => toast.remove(), 3300);
}

function showNotification(msg) {
  showToast('Notification', msg);
}

function updateStatus() {
  const battery = Math.floor(Math.random() * 10) + 90;
  document.querySelector('.status-bar').textContent = battery + '%';
}

// ============== HOME PAGE ==============

function renderHome() {
  const activeSIM = appData.userESIMs.find(s => s.active);
  const userCountry = 'Dubai';

  let esimHtml;
  if (activeSIM) {
    const pct = Math.round((activeSIM.dataUsed / activeSIM.dataTotal) * 100);
    esimHtml = '<div class="active-esim"><div class="esim-header"><h3>Active eSIM</h3><svg class="icon" style="color:rgba(255,255,255,0.8)"><use href="#icon-wifi"/></svg></div><div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>' + activeSIM.operator + ' • ' + activeSIM.country + '</span><span>' + activeSIM.plan + '</span></div><div class="data-usage-bar"><div class="data-usage-fill" style="width:' + pct + '%"></div></div><div class="data-info"><span>' + activeSIM.dataUsed + ' GB / ' + activeSIM.dataTotal + ' GB</span><span>' + activeSIM.daysLeft + ' days left</span></div></div>';
  } else {
    esimHtml = '<div class="no-esim" style="margin-bottom:20px"><svg class="icon"><use href="#icon-sim"/></svg><p>No active eSIM. Buy one for your trip!</p></div>';
  }

  const recTours = appData.tours.slice(1, 4);

  return '<div class="page-content">' + esimHtml + '<div class="location-card"><svg class="icon"><use href="#icon-location"/></svg><div class="location-info"><h4>' + userCountry + '</h4><p>Current location • 32°C Sunny</p></div><svg class="icon" style="margin-left:auto;opacity:0.5"><use href="#icon-weather"/></svg></div><div class="quick-actions"><button class="quick-action" onclick="showPage(\'esim\')"><svg class="icon"><use href="#icon-sim"/></svg>Buy eSIM</button><button class="quick-action" onclick="showPage(\'tours\')"><svg class="icon"><use href="#icon-map"/></svg>Book Tour</button><button class="quick-action" onclick="showPage(\'hotels\')"><svg class="icon"><use href="#icon-hotel"/></svg>Find Hotel</button><button class="quick-action" onclick="showFlights()"><svg class="icon"><use href="#icon-airplane"/></svg>Flights</button></div><h3>Recommended Tours</h3>' + recTours.map(t => '<div class="tour-card" onclick="showTourDetail(' + t.id + ')"><div class="tour-image">' + t.image + '</div><div class="tour-body"><h4>' + t.name + '</h4><div class="tour-location">' + t.country + ' • ' + t.duration + '</div><div class="tour-price">$' + t.price + '</div></div></div>').join('') + '</div>';
}

function showFlights() {
  const flightsHtml = appData.flights.map(f => '<div class="flight-card"><div class="flight-route"><span class="flight-city">' + f.from + '</span><div class="flight-line"><svg class="icon"><use href="#icon-airplane"/></svg></div><span class="flight-city" style="text-align:right">' + f.to + '</span></div><div style="display:flex;justify-content:space-between;align-items:center"><span class="flight-airline">' + f.airline + ' • ' + f.duration + '</span><span class="flight-price">$' + f.price + ' <small>one way</small></span></div></div>').join('');
  showToast('Available Flights', appData.flights.length + ' routes found');
  const content = document.getElementById('content');
  content.innerHTML = '<div class="page-content"><h3>Flight Routes</h3>' + flightsHtml + '<p style="text-align:center;color:var(--text-muted);font-size:12px;margin-top:8px">Contact us to book • Demo prices shown</p></div>';
  history.push('flights');
  updateHeader('flights');
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
}

// ============== eSIM PAGE ==============

let esimSearchTerm = '';
let esimExpandedCountry = null;

function initESIMSearch() {
  const input = document.getElementById('esimSearch');
  if (input) {
    input.addEventListener('input', function() {
      esimSearchTerm = this.value.toLowerCase();
      renderESIMResults();
    });
  }
}

function renderESIM() {
  const myActive = appData.userESIMs.filter(s => s.active).length;
  const myTotal = appData.userESIMs.length;

  let countryListHtml = appData.countries.map(c => {
    const match = esimSearchTerm === '' || c.name.toLowerCase().includes(esimSearchTerm) || c.operators.some(o => o.name.toLowerCase().includes(esimSearchTerm));
    if (!match) return '';
    const isOpen = esimExpandedCountry === c.id;
    return '<div class="country-card"><div class="country-header" onclick="toggleCountryPlans(\'' + c.id + '\')"><div class="country-flag">' + c.flag + '</div><div class="country-name"><h4>' + c.name + '</h4><small>' + c.code + ' • ' + c.operators.length + ' operators</small></div><svg class="icon" style="transform:' + (isOpen ? 'rotate(90deg)' : 'rotate(0)') + ';transition:0.2s"><use href="#icon-arrow"/></svg></div><div class="country-plans' + (isOpen ? ' open' : '') + '" id="plans-' + c.id + '">' + c.operators.map(op => op.plans.map(p => '<div class="plan-item"><div class="plan-info"><h5>' + op.name + '</h5><small>' + p.data + ' • ' + p.days + ' days</small></div><div style="display:flex;align-items:center;gap:12px"><span class="plan-price">$' + p.price + '</span><button class="btn-buy" onclick="buyESIM(\'' + c.id + '\', \'' + op.name + '\', \'' + p.data + '\', ' + p.price + ')">Buy</button></div></div>').join('')).join('') + '</div></div>';
  }).join('');

  return '<div class="page-content"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><h3 style="margin:0">Countries</h3><button class="btn-small' + (myTotal > 0 ? ' active' : '') + '" onclick="showPage(\'myesims\')">My eSIMs (' + myActive + '/' + myTotal + ')</button></div><div class="search-box"><svg class="icon"><use href="#icon-search"/></svg><input type="text" id="esimSearch" placeholder="Search country or operator..." value="' + esimSearchTerm + '"></div>' + countryListHtml + '</div>';
}

function renderESIMResults() {
  const content = document.getElementById('content');
  const myActive = appData.userESIMs.filter(s => s.active).length;
  const myTotal = appData.userESIMs.length;

  let countryListHtml = appData.countries.map(c => {
    const match = esimSearchTerm === '' || c.name.toLowerCase().includes(esimSearchTerm) || c.operators.some(o => o.name.toLowerCase().includes(esimSearchTerm));
    if (!match) return '';
    const isOpen = esimExpandedCountry === c.id;
    return '<div class="country-card"><div class="country-header" onclick="toggleCountryPlans(\'' + c.id + '\')"><div class="country-flag">' + c.flag + '</div><div class="country-name"><h4>' + c.name + '</h4><small>' + c.code + ' • ' + c.operators.length + ' operators</small></div><svg class="icon" style="transform:' + (isOpen ? 'rotate(90deg)' : 'rotate(0)') + ';transition:0.2s"><use href="#icon-arrow"/></svg></div><div class="country-plans' + (isOpen ? ' open' : '') + '" id="plans-' + c.id + '">' + c.operators.map(op => op.plans.map(p => '<div class="plan-item"><div class="plan-info"><h5>' + op.name + '</h5><small>' + p.data + ' • ' + p.days + ' days</small></div><div style="display:flex;align-items:center;gap:12px"><span class="plan-price">$' + p.price + '</span><button class="btn-buy" onclick="buyESIM(\'' + c.id + '\', \'' + op.name + '\', \'' + p.data + '\', ' + p.price + ')">Buy</button></div></div>').join('')).join('') + '</div></div>';
  }).join('');

  content.innerHTML = '<div class="page-content"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><h3 style="margin:0">Countries</h3><button class="btn-small' + (myTotal > 0 ? ' active' : '') + '" onclick="showPage(\'myesims\')">My eSIMs (' + myActive + '/' + myTotal + ')</button></div><div class="search-box"><svg class="icon"><use href="#icon-search"/></svg><input type="text" id="esimSearch" placeholder="Search country or operator..." value="' + esimSearchTerm + '"></div>' + countryListHtml + '</div>';
  initESIMSearch();
}

function toggleCountryPlans(countryId) {
  esimExpandedCountry = esimExpandedCountry === countryId ? null : countryId;
  renderESIMResults();
}

function buyESIM(countryId, operator, data, price) {
  const country = appData.countries.find(c => c.id === countryId);
  if (!country) return;
  const newSIM = { id: Date.now(), country: country.name, operator: operator, plan: data, price: price, dataUsed: 0, dataTotal: parseInt(data), daysLeft: 30, active: false };
  appData.userESIMs.push(newSIM);
  const ref = 'eSIM-' + Date.now().toString(36).toUpperCase();
  appData.bookings.push({ type: 'esim', ref: ref, country: country.name, operator: operator, plan: data, price: price, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), status: 'active' });
  showToast('eSIM Purchased!', operator + ' ' + data + ' for $' + price + ' • Ref: ' + ref);
  renderESIMResults();
}

// ============== MY eSIMS ==============

function renderMyESIMs() {
  if (appData.userESIMs.length === 0) {
    return '<div class="page-content"><div class="no-esim"><svg class="icon"><use href="#icon-sim"/></svg><p>No eSIMs yet. Go to eSIM Store to buy one!</p><button class="btn-primary" style="margin-top:20px;padding:12px 32px;font-size:14px" onclick="showPage(\'esim\')">Browse eSIMs</button></div></div>';
  }
  return '<div class="page-content"><h3>My eSIMs</h3><div class="my-esims">' + appData.userESIMs.map(s => '<div class="my-esim-item" onclick="activateESIM(' + s.id + ')"><div class="my-esim-icon"><svg class="icon"><use href="#icon-sim"/></svg></div><div class="my-esim-info"><h5>' + s.operator + ' — ' + s.country + '</h5><small>' + s.plan + ' • $' + s.price + '</small></div><span class="my-esim-status" style="color:' + (s.active ? 'var(--success)' : 'var(--text-muted)') + '">' + (s.active ? 'Active' : 'Tap to activate') + '</span></div>').join('') + '</div></div>';
}

function activateESIM(id) {
  appData.userESIMs.forEach(s => s.active = false);
  const sim = appData.userESIMs.find(s => s.id === id);
  if (sim) {
    sim.active = true;
    showToast('eSIM Activated', sim.operator + ' ' + sim.plan + ' is now active for ' + sim.country);
    renderMyESIMs();
  }
}

// ============== TOURS ==============

function renderTours() {
  const countries = [...new Set(appData.tours.map(t => t.country))];
  return '<div class="page-content"><h3>Tours & Excursions</h3><div class="filter-tabs" id="tourFilters">' + countries.map(c => '<button class="filter-tab' + (c === countries[0] ? ' active' : '') + '" onclick="filterTours(\'' + c + '\', this)">' + c + '</button>').join('') + '</div><div class="tour-grid" id="tourGrid">' + appData.tours.filter(t => t.country === countries[0]).map(t => '<div class="tour-card" onclick="showTourDetail(' + t.id + ')"><div class="tour-image">' + t.image + '</div><div class="tour-body"><h4>' + t.name + '</h4><div class="tour-location">' + t.country + ' • ' + t.duration + '</div><div class="tour-price">$' + t.price + '</div></div></div>').join('') + '</div></div>';
}

function filterTours(country, btn) {
  document.querySelectorAll('#tourFilters .filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('tourGrid');
  grid.innerHTML = appData.tours.filter(t => t.country === country).map(t => '<div class="tour-card" onclick="showTourDetail(' + t.id + ')"><div class="tour-image">' + t.image + '</div><div class="tour-body"><h4>' + t.name + '</h4><div class="tour-location">' + t.country + ' • ' + t.duration + '</div><div class="tour-price">$' + t.price + '</div></div></div>').join('');
}

function showTourDetail(id) {
  history.push('tour-detail');
  updateHeader('tour-detail');
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
  const t = appData.tours.find(t => t.id === id);
  if (!t) return;
  document.getElementById('content').innerHTML = '<div class="page-content"><div class="detail-header">' + t.image + '</div><div class="detail-title">' + t.name + '</div><div class="detail-subtitle">' + t.country + ' • ' + t.duration + ' • ⭐ ' + t.rating + '</div><div class="detail-price">$' + t.price + ' <small>per person</small></div><div class="detail-desc">' + t.desc + '</div><button class="btn-full" onclick="bookTour(' + t.id + ')">Book Now — $' + t.price + '</button></div>';
}

function bookTour(id) {
  const t = appData.tours.find(t => t.id === id);
  if (!t) return;
  const ref = 'TOUR-' + Date.now().toString(36).toUpperCase();
  appData.bookings.push({ type: 'tour', ref: ref, name: t.name, country: t.country, price: t.price, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), status: 'confirmed' });
  showToast('Tour Booked!', t.name + ' for $' + t.price + ' • Ref: ' + ref);
}

// ============== HOTELS ==============

function renderHotels() {
  const countries = [...new Set(appData.hotels.map(h => h.country))];
  return '<div class="page-content"><h3>Hotels</h3><div class="filter-tabs" id="hotelFilters">' + countries.map(c => '<button class="filter-tab' + (c === countries[0] ? ' active' : '') + '" onclick="filterHotels(\'' + c + '\', this)">' + c + '</button>').join('') + '</div><div id="hotelList">' + appData.hotels.filter(h => h.country === countries[0]).map(h => hoteCard(h)).join('') + '</div></div>';
}

function hoteCard(h) {
  var stars = '';
  for (var i = 0; i < h.stars; i++) stars += '★';
  return '<div class="hotel-card"><div class="hotel-image">' + h.image + '</div><div class="hotel-body"><h4>' + h.name + '</h4><div class="hotel-location">📍 ' + h.location + ', ' + h.country + ' • ' + stars + '</div><div class="hotel-meta"><div class="hotel-rating">⭐ ' + h.rating + '</div><div class="hotel-price">$' + h.price + ' <small>/ night</small></div></div><button class="btn-book" onclick="bookHotel(' + h.id + ')">Book Now</button></div></div>';
}

function filterHotels(country, btn) {
  document.querySelectorAll('#hotelFilters .filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('hotelList').innerHTML = appData.hotels.filter(h => h.country === country).map(h => hoteCard(h)).join('');
}

function bookHotel(id) {
  const h = appData.hotels.find(h => h.id === id);
  if (!h) return;
  const ref = 'HTL-' + Date.now().toString(36).toUpperCase();
  appData.bookings.push({ type: 'hotel', ref: ref, name: h.name, country: h.country, price: h.price, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), status: 'confirmed' });
  showToast('Hotel Booked!', h.name + ' — $' + h.price + '/night • Ref: ' + ref);
}

function showHotelDetail(id) {
  history.push('hotel-detail');
  updateHeader('hotel-detail');
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
  const h = appData.hotels.find(h => h.id === id);
  if (!h) return;
  var stars = '';
  for (var i = 0; i < h.stars; i++) stars += '★';
  document.getElementById('content').innerHTML = '<div class="page-content"><div class="detail-header">' + h.image + '</div><div class="detail-title">' + h.name + '</div><div class="detail-subtitle">📍 ' + h.location + ', ' + h.country + ' • ' + stars + ' • ⭐ ' + h.rating + '</div><div class="detail-price">$' + h.price + ' <small>per night</small></div><div class="detail-desc">' + h.desc + '</div><button class="btn-full" onclick="bookHotel(' + h.id + ')">Book — $' + h.price + '/night</button></div>';
}

// ============== PROFILE ==============

function renderProfile() {
  const p = appData.profile;
  const activeSIMs = appData.userESIMs.filter(s => s.active).length;
  const totalBookings = appData.bookings.length;
  const recentBookings = appData.bookings.slice(-3).reverse();

  return '<div class="page-content"><div class="profile-card"><div class="profile-avatar">' + p.avatar + '</div><h3>' + p.name + '</h3><p class="profile-group">Traveler since ' + p.memberSince + '</p></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px"><div class="stat-box"><span class="stat-label">Active eSIMs</span><span class="stat-value" style="color:var(--primary)">' + activeSIMs + '</span></div><div class="stat-box"><span class="stat-label">Bookings</span><span class="stat-value" style="color:var(--primary)">' + totalBookings + '</span></div></div><h3>Recent Bookings</h3>' + (recentBookings.length === 0 ? '<div class="dashboard-card" style="text-align:center;padding:24px;color:var(--text-muted)"><p>No bookings yet</p></div>' : recentBookings.map(b => '<div class="booking-item"><div class="booking-icon"><svg class="icon"><use href="#icon-' + (b.type === 'esim' ? 'sim' : b.type === 'tour' ? 'map' : 'hotel') + '"/></svg></div><div class="booking-info"><h5>' + (b.name || b.operator + ' ' + b.plan) + '</h5><small>' + b.date + ' • ' + b.ref + '</small></div><span class="booking-status ' + b.status + '">' + b.status.charAt(0).toUpperCase() + b.status.slice(1) + '</span></div>').join('')) + '<h3 style="margin-top:20px">App Settings</h3><div class="profile-info"><div class="toggle-row"><span class="info-label">Dark Theme</span><div class="toggle-switch' + (document.documentElement.getAttribute('data-theme') === 'dark' ? ' active' : '') + '" onclick="toggleThemeSwitch(this)"><div class="toggle-knob"></div></div></div><div class="info-row"><span class="info-label">Language</span><span class="info-value" style="color:var(--primary)">' + p.language + ' <span style="font-size:11px">▼</span></span></div><div class="info-row"><span class="info-label">Email</span><span class="info-value">' + p.email + '</span></div><div class="info-row"><span class="info-label">Phone</span><span class="info-value">' + p.phone + '</span></div></div></div>';
}

function toggleThemeSwitch(el) {
  toggleTheme();
  el.classList.toggle('active');
}

// ============== INIT ==============

document.addEventListener('DOMContentLoaded', function() {
  loadTheme();
  setInterval(updateStatus, 60000);
  updateStatus();

  const wasAppOpen = localStorage.getItem('esimtravel_appOpen');
  if (wasAppOpen === 'true') {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    const lastPage = localStorage.getItem('esimtravel_lastPage');
    const savedHistory = localStorage.getItem('esimtravel_history');
    if (lastPage && savedHistory) {
      try {
        history = JSON.parse(savedHistory);
        if (history.length > 0) {
          updateHeader(lastPage);
          renderContent(lastPage);
          document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
        }
      } catch (e) {
        showPage('home');
      }
    } else {
      showPage('home');
    }
  }
});
