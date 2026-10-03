/* ============================================================
   ARCLINE ESTATES — site script
   ============================================================ */

/* ---------- Icon sprite ---------- */
const ICONS = {
  bed: '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6M2 17h20"/>',
  bath: '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M2 12h20M7 19v2M17 19v2"/>',
  area: '<path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  tower: '<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M10 22v-4h4v4M9 6h.01M12 6h.01M15 6h.01M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01"/>',
  villa: '<path d="M2 11 12 3l10 8"/><path d="M5 9v12h14V9"/><path d="M10 21v-6h4v6"/>',
  apartment: '<path d="M3 21h18"/><rect x="4" y="8" width="7" height="13"/><rect x="11" y="3" width="9" height="18"/><path d="M7 12h1M7 16h1M14 7h3M14 11h3M14 15h3"/>',
  house: '<path d="M3 21h18M5 21V10l7-6 7 6v11"/><rect x="9" y="13" width="6" height="8"/><path d="M16 3v4"/>',
  store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v9h14v-9M10 21v-5h4v5"/>',
  warehouse: '<path d="M2 21V8l10-5 10 5v13"/><path d="M6 21v-9h12v9M6 15h12M6 18h12"/>',
  key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m11.5 11.5 9-9M16 7l3 3M19 4l2 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  car: '<path d="M19 17h2v-5l-2-5H5L3 12v5h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M9 17h6M3 12h18"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>',
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0"/><path d="M12 20h.01"/>',
  coffee: '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M7 2v2M11 2v2"/>',
  gym: '<path d="M6 7v10M18 7v10M3 9v6M21 9v6M6 12h12"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-10 0 10-4 16-10 16"/><path d="M4 21c3-6 7-9 12-11"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9Z"/>',
  lift: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="m9 8 3-3 3 3M9 16l3 3 3-3"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8"/>',
  sofa: '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2Z"/><path d="M4 18v2M20 18v2"/>',
  pool: '<path d="M2 19c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 21l2-5.3A8.5 8.5 0 1 1 21 11.5Z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6Z"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  in: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
  ig: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  fb: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
  yt: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z"/>'
};
(function injectSprite() {
  const s = Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join('');
  const box = document.createElement('div');
  box.style.display = 'none';
  box.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
  document.body.prepend(box);
})();
const ic = (n, c = '') => `<svg class="i ${c}"><use href="#i-${n}"/></svg>`;

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const img = (id, w = 1000) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

function inr(n) {
  if (n >= 1e7) return `₹${+(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${+(n / 1e5).toFixed(2)} L`;
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

function toast(msg) {
  let t = $('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.append(t);
  }
  t.innerHTML = ic('check') + msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---------- Property data ---------- */
const INTERIOR_RES = ['1600607687939-ce8a6c25118c', '1505693416388-ac5ce068fe85', '1507089947368-19c1da9775ae'];
const INTERIOR_COM = ['1497366216548-37526070297c', '1497366811353-6870744d04b2', '1497215842964-222b430dc094'];

const PROPERTIES = [
  { id: 1, title: 'The Banyan Residence', type: 'villa', status: 'sale', city: 'Ahmedabad', locality: 'Shela', price: 47500000, beds: 4, baths: 5, area: 4850, parking: 3, year: 2025, img: '1613490493576-7fde63acd811', featured: true, tag: 'New Launch',
    desc: 'A contemporary four-bedroom villa arranged around a private lap pool. Double-height living, Italian marble floors and a landscaped rear garden facing the green belt.',
    amen: ['Private pool', 'Home automation', 'Landscaped garden', 'Solar ready', 'Servant quarters'] },
  { id: 2, title: 'Azure Pool Villa', type: 'villa', status: 'sale', city: 'Mumbai', locality: 'Juhu', price: 142000000, beds: 5, baths: 6, area: 6200, parking: 4, year: 2024, img: '1600596542815-ffad4c1539a9', featured: true, tag: 'Sea Facing',
    desc: 'A sea-facing villa with infinity pool, rooftop deck and a separate guest wing. Floor-to-ceiling glazing frames the Arabian Sea from every principal room.',
    amen: ['Infinity pool', 'Rooftop deck', 'Guest wing', 'Home theatre', '24/7 security'] },
  { id: 3, title: 'Cascade Courtyard Home', type: 'villa', status: 'sale', city: 'Bengaluru', locality: 'Whitefield', price: 64000000, beds: 4, baths: 4, area: 5100, parking: 2, year: 2025, img: '1580587771525-78b9dba3b914', featured: true, tag: 'Ready to Move',
    desc: 'Layered cantilevered volumes wrapped around a central courtyard. Cross-ventilated rooms, a lawn-side pool and a study that opens onto a private terrace.',
    amen: ['Courtyard', 'Swimming pool', 'Study', 'EV charging', 'Rainwater harvesting'] },
  { id: 4, title: 'Cedar Ridge House', type: 'house', status: 'sale', city: 'Pune', locality: 'Baner', price: 31500000, beds: 3, baths: 3, area: 3200, parking: 2, year: 2023, img: '1568605114967-8130f3a36994', featured: false, tag: '',
    desc: 'A warm timber-and-stone family home on a quiet hill lane. Vaulted ceilings, a fireplace lounge and a wraparound porch overlooking the ridge.',
    amen: ['Fireplace', 'Wraparound porch', 'Gated lane', 'Garden', 'Power backup'] },
  { id: 5, title: 'Dusklight Townhouse', type: 'house', status: 'sale', city: 'Ahmedabad', locality: 'Thaltej', price: 23500000, beds: 3, baths: 3, area: 2600, parking: 2, year: 2024, img: '1494526585095-c41746248156', featured: false, tag: '',
    desc: 'A three-level townhouse with a sculpted façade, internal lift provision and a sunlit family lounge on the top floor.',
    amen: ['Lift provision', 'Terrace', 'Clubhouse access', 'Modular kitchen'] },
  { id: 6, title: 'Halo White Villa', type: 'villa', status: 'lease', city: 'Bengaluru', locality: 'Sarjapur Road', price: 280000, beds: 4, baths: 4, area: 4200, parking: 2, year: 2022, img: '1523217582562-09d0def993a6', featured: true, tag: 'Furnished',
    desc: 'A fully furnished minimalist villa in a gated enclave. White lime-plaster walls, a reflecting pool and a lawn shaded by mature trees.',
    amen: ['Fully furnished', 'Reflecting pool', 'Gated enclave', 'Clubhouse', 'Pet friendly'] },
  { id: 7, title: 'Terrace Nine Residences', type: 'apartment', status: 'sale', city: 'Pune', locality: 'Kharadi', price: 14800000, beds: 3, baths: 3, area: 1640, parking: 1, year: 2025, img: '1545324418-cc1a3fa10c00', featured: false, tag: 'RERA Approved',
    desc: 'A 3 BHK apartment with deep balconies on every room, in a 22-storey tower close to the EON IT Park.',
    amen: ['Deck balconies', 'Gym', 'Swimming pool', 'Kids play area', 'Co-working lounge'] },
  { id: 8, title: 'Meridian Heights', type: 'apartment', status: 'lease', city: 'Mumbai', locality: 'Powai', price: 95000, beds: 2, baths: 2, area: 1150, parking: 1, year: 2021, img: '1574362848149-11496d93a7c7', featured: false, tag: 'Lake View',
    desc: 'A bright two-bedroom apartment on the 18th floor with open views over Powai Lake. Semi-furnished and ready to move in.',
    amen: ['Lake view', 'Semi furnished', 'Gym', 'Covered parking'] },
  { id: 9, title: 'Linden Court', type: 'apartment', status: 'sale', city: 'Gandhinagar', locality: 'GIFT City', price: 8600000, beds: 2, baths: 2, area: 1180, parking: 1, year: 2026, img: '1460317442991-0ec209397118', featured: false, tag: 'Under Construction',
    desc: 'Efficient 2 BHK homes a short walk from the GIFT City business district. Possession December 2026.',
    amen: ['Walk to work', 'Smart locks', 'Rooftop garden', 'Gym'] },
  { id: 10, title: 'Arcline One — Grade A Offices', type: 'office', status: 'lease', city: 'Gandhinagar', locality: 'GIFT City', price: 1440000, seats: 140, area: 12500, parking: 18, year: 2025, img: '1486406146926-c627a92ad1ab', featured: true, tag: 'LEED Gold',
    desc: 'Full-floor Grade A office plates in our 24-storey flagship tower. 3.6 m floor-to-floor height, raised flooring and destination-control lifts.',
    amen: ['LEED Gold', 'Raised flooring', '100% power backup', 'Food court', 'Destination lifts'] },
  { id: 11, title: 'Skyline Business Bay', type: 'office', status: 'sale', city: 'Mumbai', locality: 'BKC', price: 420000000, seats: 75, area: 6200, parking: 8, year: 2023, img: '1582407947304-fd86f028f716', featured: true, tag: 'Pre-leased',
    desc: 'A pre-leased office floor in Bandra Kurla Complex with a multinational tenant on a nine-year lease. Steady 7.2% rental yield.',
    amen: ['Pre-leased', '7.2% yield', 'Metro access', 'Business lounge'] },
  { id: 12, title: 'The Loft Studio', type: 'office', status: 'lease', city: 'Bengaluru', locality: 'Indiranagar', price: 420000, seats: 48, area: 3400, parking: 4, year: 2020, img: '1497366811353-6870744d04b2', featured: false, tag: 'Plug & Play',
    desc: 'A converted industrial loft with exposed concrete, steel-framed glazing and a ready meeting suite. Move in with your laptops.',
    amen: ['Plug & play', 'Meeting suite', 'Pantry', 'High-speed fibre'] },
  { id: 13, title: 'Harbor View Suite', type: 'office', status: 'lease', city: 'Ahmedabad', locality: 'Sindhu Bhavan Road', price: 210000, seats: 26, area: 2100, parking: 3, year: 2022, img: '1497215842964-222b430dc094', featured: false, tag: 'Furnished',
    desc: 'A furnished corner suite with skyline views, two cabins, a boardroom and twenty-four workstations.',
    amen: ['Corner suite', 'Boardroom', '2 cabins', 'Reception'] },
  { id: 14, title: 'Galleria Retail Podium', type: 'retail', status: 'lease', city: 'Ahmedabad', locality: 'SG Highway', price: 360000, seats: 0, area: 1850, parking: 6, year: 2025, img: '1497366216548-37526070297c', featured: false, tag: 'High Street',
    desc: 'A double-height bare-shell showroom with a 40-foot frontage on SG Highway. Suited to flagship retail, a café or a design studio.',
    amen: ['40 ft frontage', 'Double height', 'Signage rights', 'Visitor parking'] },
  { id: 15, title: 'Brickwood Cottage', type: 'house', status: 'sale', city: 'Pune', locality: 'Lonavala', price: 19500000, beds: 3, baths: 2, area: 2250, parking: 2, year: 2019, img: '1449844908441-8829872d2607', featured: false, tag: 'Weekend Home',
    desc: 'A brick-and-slate cottage on a wooded half-acre plot, two hours from Mumbai. An ideal weekend retreat.',
    amen: ['Half-acre plot', 'Forest view', 'Caretaker room', 'Bonfire deck'] },
  { id: 16, title: 'Nightfall Estate', type: 'villa', status: 'sale', city: 'Goa', locality: 'Assagao', price: 98000000, beds: 5, baths: 5, area: 5600, parking: 3, year: 2021, img: '1416331108676-a22ccb276e35', featured: false, tag: 'Heritage',
    desc: 'A restored Indo-Portuguese villa with arched verandas, a free-form pool and mature palms across a walled estate.',
    amen: ['Heritage home', 'Free-form pool', 'Walled estate', 'Staff quarters'] }
];

const TYPE_LABEL = { villa: 'Villa', apartment: 'Apartment', house: 'Independent House', office: 'Office Space', retail: 'Retail' };
const isCom = p => p.type === 'office' || p.type === 'retail';
const priceHTML = p => p.status === 'lease' ? `${inr(p.price)} <small>/ month</small>` : inr(p.price);

function cardHTML(p) {
  const specs = isCom(p)
    ? [['area', `${p.area.toLocaleString('en-IN')} sq.ft`], p.seats ? ['users', `${p.seats} seats`] : ['store', 'Frontage'], ['car', `${p.parking} parking`]]
    : [['bed', `${p.beds} Beds`], ['bath', `${p.baths} Baths`], ['area', `${p.area.toLocaleString('en-IN')} sq.ft`]];
  const fav = favs().includes(p.id);
  return `
  <article class="pcard rv" data-id="${p.id}">
    <div class="pcard-media">
      <img src="${img(p.img, 800)}" alt="${p.title}" loading="lazy">
      <div class="badges">
        <span class="badge ${p.status}">For ${p.status === 'sale' ? 'Sale' : 'Lease'}</span>
        ${p.tag ? `<span class="badge">${p.tag}</span>` : ''}
      </div>
      <button class="fav ${fav ? 'on' : ''}" aria-label="Save property">${ic('heart', 'i-sm')}</button>
      <div class="pcard-price">${priceHTML(p)}</div>
    </div>
    <div class="pcard-body">
      <span class="pcard-type">${TYPE_LABEL[p.type]}</span>
      <h3>${p.title}</h3>
      <p class="pcard-loc">${ic('pin')}${p.locality}, ${p.city}</p>
      <ul class="specs">${specs.map(([i, t]) => `<li>${ic(i)}${t}</li>`).join('')}</ul>
    </div>
  </article>`;
}

/* ---------- Favourites ---------- */
function favs() {
  try { return JSON.parse(localStorage.getItem('arcline-favs') || '[]'); } catch { return []; }
}
function toggleFav(id) {
  let f = favs();
  const on = !f.includes(id);
  f = on ? [...f, id] : f.filter(x => x !== id);
  try { localStorage.setItem('arcline-favs', JSON.stringify(f)); } catch {}
  return on;
}

/* ---------- Card events (favourite + modal) ---------- */
function bindCards(root, onFavChange) {
  root.addEventListener('click', e => {
    const card = e.target.closest('.pcard');
    if (!card) return;
    const id = +card.dataset.id;
    const favBtn = e.target.closest('.fav');
    if (favBtn) {
      e.stopPropagation();
      const on = toggleFav(id);
      favBtn.classList.toggle('on', on);
      toast(on ? 'Saved to your shortlist' : 'Removed from shortlist');
      onFavChange && onFavChange();
      return;
    }
    openModal(PROPERTIES.find(p => p.id === id));
  });
}

/* ---------- Modal ---------- */
function openModal(p) {
  let m = $('#modal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'modal';
    m.className = 'modal';
    m.innerHTML = '<div class="modal-bg"></div><div class="modal-box" role="dialog" aria-modal="true"></div>';
    document.body.append(m);
    m.addEventListener('click', e => { if (e.target.closest('.modal-bg, .modal-x')) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }
  const gallery = [p.img, ...(isCom(p) ? INTERIOR_COM : INTERIOR_RES).filter(x => x !== p.img)].slice(0, 4);
  const specs = isCom(p)
    ? [['area', p.area.toLocaleString('en-IN'), 'Super area (sq.ft)'], ['users', p.seats || '—', 'Workstations'], ['car', p.parking, 'Car parks'], ['calendar', p.year, 'Completed']]
    : [['bed', p.beds, 'Bedrooms'], ['bath', p.baths, 'Bathrooms'], ['area', p.area.toLocaleString('en-IN'), 'Built-up (sq.ft)'], ['car', p.parking, 'Car parks']];
  const visit = `contact.html?property=${encodeURIComponent(p.title)}`;
  $('.modal-box', m).innerHTML = `
    <button class="modal-x" aria-label="Close">${ic('close')}</button>
    <div class="m-gal">
      <div class="m-main"><img src="${img(gallery[0], 1400)}" alt="${p.title}"></div>
      <div class="m-thumbs">${gallery.map((g, i) => `<button class="${i ? '' : 'on'}" data-g="${g}"><img src="${img(g, 300)}" alt=""></button>`).join('')}</div>
    </div>
    <div class="m-info">
      <div class="badges" style="position:static"><span class="badge ${p.status}">For ${p.status === 'sale' ? 'Sale' : 'Lease'}</span>${p.tag ? `<span class="badge" style="background:var(--bone)">${p.tag}</span>` : ''}</div>
      <h2>${p.title}</h2>
      <p class="pcard-loc">${ic('pin')}${p.locality}, ${p.city} · ${TYPE_LABEL[p.type]}</p>
      <div class="m-price">${priceHTML(p)}</div>
      <div class="m-specs">${specs.map(([i, b, s]) => `<div>${ic(i)}<p><b>${b}</b><span>${s}</span></p></div>`).join('')}</div>
      <p class="m-desc">${p.desc}</p>
      <div class="m-amen">${p.amen.map(a => `<span>${ic('check')}${a}</span>`).join('')}</div>
      <div class="m-actions">
        <a href="${visit}" class="btn btn-copper">Schedule a visit ${ic('arrow')}</a>
        <a href="tel:+917940002200" class="btn btn-ghost">${ic('phone')} Call agent</a>
      </div>
    </div>`;
  $$('.m-thumbs button', m).forEach(b => b.addEventListener('click', () => {
    $$('.m-thumbs button', m).forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    $('.m-main img', m).src = img(b.dataset.g, 1400);
  }));
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const m = $('#modal');
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- Reveal on scroll ---------- */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
function observe(root = document) {
  $$('.rv:not(.in)', root).forEach(el => io ? io.observe(el) : el.classList.add('in'));
}

/* ---------- Counters ---------- */
function counters() {
  const els = $$('[data-to]');
  if (!els.length) return;
  const run = el => {
    const to = +el.dataset.to, dec = (el.dataset.to.split('.')[1] || '').length, t0 = performance.now();
    const step = t => {
      const k = Math.min((t - t0) / 1800, 1), v = to * (1 - Math.pow(1 - k, 3));
      el.textContent = v.toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } }), { threshold: .5 });
  els.forEach(el => co.observe(el));
}

/* ---------- Header + mobile nav ---------- */
function chrome() {
  const h = $('.header');
  const onScroll = () => h && h.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const mnav = $('.mnav');
  $('.burger')?.addEventListener('click', () => { mnav.classList.add('open'); document.body.style.overflow = 'hidden'; });
  $('.mnav-close')?.addEventListener('click', () => { mnav.classList.remove('open'); document.body.style.overflow = ''; });

  $$('.news').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const inp = $('input', f);
    if (!/^\S+@\S+\.\S+$/.test(inp.value)) { inp.focus(); toast('Please enter a valid email'); return; }
    inp.value = '';
    toast('Subscribed — new listings will reach your inbox');
  }));
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- Home: hero search, categories, featured ---------- */
function home() {
  const tabs = $$('.search-tabs button');
  const status = $('#s-status');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    status.value = t.dataset.status;
    const typeSel = $('#s-type');
    if (t.dataset.status === 'commercial') typeSel.value = 'office';
    else if (typeSel.value === 'office' || typeSel.value === 'retail') typeSel.value = '';
  }));
  $('#hero-search')?.addEventListener('submit', e => {
    e.preventDefault();
    const q = new URLSearchParams();
    const st = status.value, ty = $('#s-type').value, ci = $('#s-city').value;
    if (st && st !== 'commercial') q.set('status', st);
    if (ty) q.set('type', ty);
    if (st === 'commercial' && !ty) q.set('cat', 'commercial');
    if (ci) q.set('city', ci);
    location.href = 'properties.html' + (q.toString() ? '?' + q : '');
  });

  $$('[data-cat-count]').forEach(el => {
    const t = el.dataset.catCount;
    el.textContent = String(PROPERTIES.filter(p => p.type === t).length).padStart(2, '0');
  });

  const feat = $('#featured');
  if (feat) {
    feat.innerHTML = PROPERTIES.filter(p => p.featured).slice(0, 6).map(cardHTML).join('');
    $$('.pcard', feat).forEach((c, i) => c.classList.add('d' + (i % 3 + 1)));
    bindCards(feat);
  }

  const com = $('#com-list');
  if (com) {
    com.innerHTML = PROPERTIES.filter(isCom).slice(0, 6).map(cardHTML).join('');
    $$('.pcard', com).forEach((c, i) => c.classList.add('d' + (i % 3 + 1)));
    bindCards(com);
  }
}

/* ---------- Listings page ---------- */
function listings() {
  const grid = $('#listings');
  if (!grid) return;
  const f = { status: $('#f-status'), type: $('#f-type'), city: $('#f-city'), sort: $('#f-sort') };
  let cat = 'all';

  const params = new URLSearchParams(location.search);
  ['status', 'type', 'city'].forEach(k => { if (params.get(k)) f[k].value = params.get(k); });
  if (params.get('cat')) cat = params.get('cat');

  const setChip = () => $$('.chip').forEach(c => c.classList.toggle('active', c.dataset.cat === cat));

  function render() {
    let list = PROPERTIES.filter(p =>
      (!f.status.value || p.status === f.status.value) &&
      (!f.type.value || p.type === f.type.value) &&
      (!f.city.value || p.city === f.city.value) &&
      (cat === 'all' || (cat === 'commercial' ? isCom(p) : cat === 'residential' ? !isCom(p) : favs().includes(p.id)))
    );
    const s = f.sort.value;
    if (s === 'low') list.sort((a, b) => a.price - b.price);
    if (s === 'high') list.sort((a, b) => b.price - a.price);
    if (s === 'area') list.sort((a, b) => b.area - a.area);
    if (s === 'new') list.sort((a, b) => b.year - a.year);
    if (s === 'featured') list.sort((a, b) => b.featured - a.featured);

    $('#count').textContent = list.length;
    grid.innerHTML = list.length ? list.map(cardHTML).join('') : `
      <div class="empty">
        <h3>${cat === 'saved' ? 'No saved properties yet' : 'No properties match these filters'}</h3>
        <p>${cat === 'saved' ? 'Tap the heart on any listing to add it to your shortlist.' : 'Try another city or property type, or reset the filters.'}</p>
      </div>`;
    $$('.pcard', grid).forEach((c, i) => c.classList.add('d' + (i % 3 + 1)));
    observe(grid);
  }

  Object.values(f).forEach(el => el.addEventListener('change', render));
  $('#f-form').addEventListener('submit', e => { e.preventDefault(); render(); grid.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  $('#f-reset').addEventListener('click', () => {
    Object.values(f).forEach(el => (el.value = el === f.sort ? 'featured' : ''));
    cat = 'all'; setChip(); render();
    history.replaceState(null, '', 'properties.html');
  });
  $$('.chip').forEach(c => c.addEventListener('click', () => { cat = c.dataset.cat; setChip(); render(); }));
  bindCards(grid, () => { if (cat === 'saved') render(); });
  setChip();
  render();
}

/* ---------- Interactive tower ---------- */
function tower() {
  const body = $('#tower-body');
  if (!body) return;
  const TOTAL = 24;
  const pattern = 'lelaavlrlaleavrlallavlre'; // a = available, r = reserved, l/e = leased
  const floors = [];
  for (let n = TOTAL; n >= 1; n--) {
    const c = pattern[(n * 7) % pattern.length];
    const st = c === 'a' || c === 'v' ? 'av' : c === 'r' ? 're' : 'le';
    const area = n > 20 ? 9800 : 12500;
    const rate = 105 + Math.round(n * 1.6);
    floors.push({ n, st, area, rate });
  }
  body.innerHTML = floors.map(f =>
    `<button class="floor ${f.st}" data-n="${f.n}" aria-label="Level ${f.n}"><span class="floor-no">L${String(f.n).padStart(2, '0')}</span>${'<i></i>'.repeat(8)}</button>`
  ).join('');

  const label = { av: 'Available', re: 'Reserved', le: 'Leased' };
  const show = n => {
    const f = floors.find(x => x.n === n);
    $$('.floor', body).forEach(b => b.classList.toggle('sel', +b.dataset.n === n));
    $('#fp-level').textContent = 'Level ' + String(n).padStart(2, '0');
    const s = $('#fp-status');
    s.className = 'status ' + f.st;
    s.textContent = label[f.st];
    $('#fp-area').textContent = f.area.toLocaleString('en-IN') + ' sq.ft';
    $('#fp-rate').textContent = `₹${f.rate} / sq.ft`;
    $('#fp-month').textContent = inr(f.area * f.rate) + ' / month';
    $('#fp-seats').textContent = Math.round(f.area / 85) + ' workstations';
    $('#fp-view').textContent = n > 16 ? 'Sabarmati river & skyline' : n > 8 ? 'Business district' : 'Central boulevard';
    const btn = $('#fp-btn');
    btn.href = `contact.html?property=${encodeURIComponent('Arcline One — Level ' + n)}`;
    btn.innerHTML = f.st === 'le' ? `Join waitlist ${ic('arrow')}` : `Enquire for Level ${n} ${ic('arrow')}`;
  };
  body.addEventListener('click', e => { const b = e.target.closest('.floor'); if (b) show(+b.dataset.n); });
  $('#tower-avail').textContent = floors.filter(f => f.st === 'av').length;
  show(floors.find(f => f.st === 'av' && f.n > 15).n);
}

/* ---------- EMI calculator ---------- */
function emi() {
  const root = $('#calc');
  if (!root) return;
  const r = { price: $('#c-price'), down: $('#c-down'), rate: $('#c-rate'), years: $('#c-years') };
  const fill = el => el.style.setProperty('--p', ((el.value - el.min) / (el.max - el.min)) * 100 + '%');
  function calc() {
    Object.values(r).forEach(fill);
    const price = +r.price.value * 1e5, down = +r.down.value, rate = +r.rate.value, yrs = +r.years.value;
    const loan = price * (1 - down / 100), i = rate / 1200, n = yrs * 12;
    const m = loan * i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1);
    const interest = m * n - loan;
    $('#o-price').textContent = inr(price);
    $('#o-down').textContent = down + '%';
    $('#o-rate').textContent = rate.toFixed(2) + '%';
    $('#o-years').textContent = yrs + ' yrs';
    $('#o-emi').innerHTML = '₹' + Math.round(m).toLocaleString('en-IN') + ' <span>/ month</span>';
    $('#o-loan').textContent = inr(loan);
    $('#o-int').textContent = inr(interest);
    $('#o-total').textContent = inr(loan + interest);
    $('.donut', root).style.setProperty('--d', (interest / (loan + interest)) * 100 + '%');
  }
  Object.values(r).forEach(el => el.addEventListener('input', calc));
  calc();
}

/* ---------- Floor plan ---------- */
function floorPlan() {
  const plan = $('#plan');
  if (!plan) return;
  const hl = (k, on) => $$(`[data-room="${k}"]`).forEach(el => el.classList.toggle('hl', on));
  $$('[data-room]').forEach(el => {
    el.addEventListener('mouseenter', () => hl(el.dataset.room, true));
    el.addEventListener('mouseleave', () => hl(el.dataset.room, false));
  });
}

/* ---------- Contact form ---------- */
function contact() {
  const form = $('#enquiry');
  if (!form) return;
  const prop = new URLSearchParams(location.search).get('property');
  if (prop) {
    $('#e-msg').value = `I'd like to schedule a visit for "${prop}". Please share available slots this week.`;
    $('#e-int').value = /Arcline One|Office|Business|Loft|Suite|Retail/i.test(prop) ? 'Lease commercial space' : 'Buy a home';
  }
  const rules = {
    'e-name': v => v.trim().length >= 2,
    'e-email': v => /^\S+@\S+\.\S+$/.test(v),
    'e-phone': v => /^[+\d][\d\s-]{8,}$/.test(v.trim()),
    'e-int': v => !!v
  };
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    Object.entries(rules).forEach(([id, test]) => {
      const el = $('#' + id), good = test(el.value);
      el.closest('.inp').classList.toggle('err', !good);
      if (!good && ok) { el.focus(); ok = false; }
    });
    if (!ok) return;
    $('#ok-name').textContent = $('#e-name').value.trim().split(' ')[0];
    form.closest('.form').classList.add('sent');
  });
  $$('input, select, textarea', form).forEach(el => el.addEventListener('input', () => el.closest('.inp')?.classList.remove('err')));
  $('#again')?.addEventListener('click', () => { form.reset(); form.closest('.form').classList.remove('sent'); });
}

/* ---------- Boot ---------- */
chrome();
home();
listings();
tower();
emi();
floorPlan();
contact();
counters();
observe();
