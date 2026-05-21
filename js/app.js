/* ============================================================
   LAVA Commercial Insurance Training Portal — app.js
   ============================================================ */
'use strict';

/* ── CONSTANTS ── */
const PASSING_SCORE = 90;
const STORAGE_KEY_TRAINEE = 'lava_trainee';
const STORAGE_KEY_ATTEMPTS = 'lava_attempts';
const STORAGE_KEY_THEME = 'lava_theme';
const LAVA_LOGO_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEXnODXx8fHnMS7y9/by9PHx+Pfx9PTnNTTnMTDz9vfv8vHmKyfrhoLnNTLx5+fpcW/nSkfpa2vqd3Xtqqjuvb3rgn/pcnDv2NjmLSrtpqXpenrpaGfv0tLoZ2Hx7/HmTUrrjIvmPDrvy8vmVlDmREDwuLfoWlnuxsTrmpjoj5DtoaDx6e3sj4zmIR7umZ3vr67w4OHy1dHrt7DpWFgqCTRnAAAGiUlEQVR4nO2dC3uaPBSAIdFwa6hYlKgIap23rZ9u/f//7RNvJEHXCziPeN49W522PHk9IZeTxBoGgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8rhwQgThty7F9RDitT8aBVNh37ok18HmnUniMMb8HzNhWbcuTvXY6dxh5g7aWPD6GZI0ouYR11zX7m7kfNIwJdjSu3WRKoYsaSIbmn6rXkHk08hUoStx60JVCgk0QdONb12mahFLpiv+fK1VNfV6umGSDGtlKF6oZuiaw1qNbMSyYOjXq5aeaWmiW5epWvg41gydRb16i22PrzQ1Catbj7+N4qSpdPi/6jZqM6xpLCmyXu0Et/W0FZqHmur4y7pV0R2E92M3E8xmwLU03I5s2lmvyOYeuXVJrgXp7w1rK/gQhs3aG9LdzLBWQ26Fo2EdYsiJ8Iq8tSXDwqt3lAwnnmgFo9XLid6W3dcw6w/ZrpaK/3oqi1+DlvDuwJKL8fM6MmmTHmnuyR7uxjQs2lp4y/wb9jhOM4nW3THwwYAlpouIsUJSRiYzJEFy9iXmRIspZEdClptm41zZVUPe2lx6E1y6WXCwTZGYxfSv4TsY2iJ0zsbw8A2/BzBnHpYYJR/7ZYZvhayNRjKC2OJYZGV+RnBrGLh/iWCGy14AKhZTopdD9Im3YQ2uonqLD2reF6HQsgCiX6lfljEegUrG2emmYkPT9WcE0EKxHTpVG5rNOaDGhrTPdfPu4Y/85XLICldw6ROceipivR1l1PS/RlIY6zkRmC6DBI4aAcYmo0Ha+ohUZjCaNDRHpw/lTvTmatFY9Lyd7nGLc0uC7yg+c0AIb/Bb7XHcGEiPwVu+UjAa8u/dQIT8UBUTICtwoqOEkM7tb+4HsizxQ2mT2S8YbY1Yy8Vim/T7mSY+jeR3i4UwDLnSkpZ730lHvaHHEKopn26kfi7ZTMsUyjLkIDZgLIXzWYOyE83QK9XCe2ulsRlAmO7z91DmqVwfJkbKTd2GYGhwJe1ZskikKy2kuk4fRlNTJeSZPpghiFpaKY9g2ETDOwcNb4JlSNO8sheDaEiGsURUchQC0jBgp/W07bi0ZPoIoqEI5CRN2QQZREOChl+7GkhDJs2AHdWQE2EZRFwoJxG2Zau7EzTDNoS9N38zJONOGEfz1UycmTRy8fwyiSfrQFaEadi4YGh5g2g//U96VqGnzDacOrtXwzSPsTY/BG4o+qdlbxrqGUYrPWVk2Ob1pAjzPrxgyN/9PKvU1Fc8+cTJRfKtbndl6IXSVC8xU6Weko6cccrHCfp9CMLw+bwhn5oydKUE0ZsoifL4kiGI+/CCIekqeUE2UauputbhH7OsiqEJO4bkSTWM5DTjNsDKculpDUY3hBfDfEyz3xGcG8ZyR8mnDdUwvUNDPlPWkZJQqaVE2drANuO7MWx2TqEiytlfLfXprWUT+sc7Xe2ODJUE/W5XqfxTM2Vn1Ds/Xe2ODA2e70FhhSOjYpF3F3Th5Ve7J0NrfFB0Hb9bmFSJxWELJnN6eTN7X4YG90ZRtovE/5MW9xxwbzBJsvxHHHhcuhp0Q20GLIxh56ndOr8xhoj3zqgzs+ReXZlbgDTUM1GWLcjljT9c6K/egWGnZBbjAQwpOEMbDb8ExFqKhl9DNWR1NGzXPoYPZoi19N+gGjpo+AGPYAh9TON0Sq7jQzTsVmqoZPtZF4Ih6VZZS8VCzkEmzyBy3pUaeqG8npHMIOyCrrSW2urZjXKbxquiUkNvpez7jyEIVmoohj/lEDbWILYIq4a0hKEl0kg9x1jypq4I3fDbheJvr5F6Bs4HcRtqhqz/RogQWZaQ7B/s2f7n9BMkf+74Tdk/6Uo7ggnlQLcWw/XTBYKjIm8fnulIPC1C39HPmM4g9Ia6ocmoQ8/RzAOyaWqfapJBmX6Ils1hhFA3vITzcipv9LnPJkiGMEL4WUP6VUOnB6IhNa5myOKxAeQU8JUMfSDNjHE1wzaUOnqllibpAGlHM65g6PiAIviNWmp9ZEijGSTByg1p0rMh5C5yqjR0TWqGQw/EeDuHdD/8ALOs7J+4D5lD/fUA3m+h4enk8OtVWIFG9rfR2B3ylmJIGwUYS/w4+8g9IL28AjeGMoOM/NGR4LSxyxgGZxi+Gh7cj03MZnn2gf0Dsn9q/3f3lFR4m+Tkj8ufe0MQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEHugf8BDH2LtyYD/lgAAAAASUVORK5CYII=';

/* ── STATE ── */
let state = {
  trainee: null,
  currentScenario: null,
  currentLine: null,
  currentStep: 0,
  totalSteps: 0,
  timerInterval: null,
  timerSeconds: 0,
  formData: {},
};

/* ── HELPERS ── */
function $(id) { return document.getElementById(id); }
function saveAttempts(attempts) { localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts)); }
function loadAttempts() { return JSON.parse(localStorage.getItem(STORAGE_KEY_ATTEMPTS) || '[]'); }
function saveTrainee(t) { localStorage.setItem(STORAGE_KEY_TRAINEE, JSON.stringify(t)); }
function loadTrainee() { return JSON.parse(localStorage.getItem(STORAGE_KEY_TRAINEE) || 'null'); }

function fmtTime(secs) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
function fmtTimeMin(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  if (m === 0) return `${s}s`;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}
function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function normalize(v) {
  return String(v || '')
    .trim()
    .toLowerCase()
    .replace(/[$,]/g, '')
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ');
}
function compact(v) {
  return normalize(v).replace(/[^a-z0-9]/g, '');
}
function numericValue(v) {
  const raw = String(v || '').trim();
  if (!/\d/.test(raw)) return null;
  const cleaned = raw.replace(/[^0-9.\-]/g, '');
  if (!cleaned || cleaned === '-' || cleaned === '.') return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}
function canonicalAnswer(v) {
  const c = compact(v);
  const noneSet = ['none', 'no', 'n', '0', 'zero', 'notapplicable', 'na', 'n/a'];
  if (noneSet.includes(c)) return 'none';
  const corpSet = ['corporation', 'corporationinc', 'inc', 'incorporated'];
  if (corpSet.includes(c)) return 'corporation';
  const sCorpSet = ['scorporation', 'scorp', 's-corporation'];
  if (sCorpSet.includes(c)) return 'scorporation';
  const monitoredSet = ['centralmonitored', 'yescentralmonitored', 'centralalarm', 'central'];
  if (monitoredSet.includes(c)) return 'centralmonitored';
  const wetFullSet = ['wetpipefull', 'wetpipefullysprinklered', 'wetfull'];
  if (wetFullSet.includes(c)) return 'wetpipefull';
  const dryFullSet = ['drypipefull', 'dryfull'];
  if (dryFullSet.includes(c)) return 'drypipefull';
  return c;
}
function answersMatch(submitted, correct) {
  const submittedRaw = String(submitted || '').trim();
  const correctRaw = String(correct || '').trim();
  if (!submittedRaw && correctRaw) return false;

  const sNum = numericValue(submittedRaw);
  const cNum = numericValue(correctRaw);
  if (sNum !== null && cNum !== null) return Math.abs(sNum - cNum) < 0.001;

  const s = canonicalAnswer(submittedRaw);
  const c = canonicalAnswer(correctRaw);
  if (s === c) return true;

  // Permit clear text matches such as "Corporation (Inc.)" vs "Corporation",
  // but avoid dangerous one-character or numeric substring matches.
  if (s.length >= 5 && c.length >= 5 && (s.includes(c) || c.includes(s))) return true;
  return false;
}

const FIELD_KEY_MAP = {
  Property: {
    address_street: 'p_street', address_city: 'p_city', address_state: 'p_state', address_zip: 'p_zip',
    square_footage: 'p_sqft', building_value: 'p_building1', bpp_value: 'p_bpp1', prior_losses: 'p_num_losses',
    loss_year: 'p_loss1_year', loss_type: 'p_loss1_type', loss_amount: 'p_loss1_amount',
    loc1_street: 'p_street', loc1_city: 'p_city', loc1_state: 'p_state', loc1_zip: 'p_zip',
    loc1_year_built: 'p_year_built', loc1_construction: 'p_construction_type', loc1_sqft: 'p_sqft', loc1_stories: 'p_num_stories',
    loc1_roof_type: 'p_roof_type', loc1_roof_age: 'p_roof_age', loc1_pc: 'p_protection_class',
    loc1_sprinkler: 'p_sprinkler', loc1_fire_alarm: 'p_fire_alarm', loc1_burglar_alarm: 'p_burglar_alarm',
    loc1_building: 'p_building1', loc1_bpp: 'p_bpp1', loc1_tenant_impr: 'p_tenant_impr1',
    loc2_street: 'p_street2', loc2_city: 'p_city2', loc2_state: 'p_state2', loc2_zip: 'p_zip2',
    loc2_year_built: 'p_year_built2', loc2_construction: 'p_construction_type2', loc2_sqft: 'p_sqft2', loc2_stories: 'p_stories2',
    loc2_roof_type: 'p_roof_type2', loc2_roof_age: 'p_roof_age2', loc2_pc: 'p_pc2',
    loc2_sprinkler: 'p_sprinkler2', loc2_fire_alarm: 'p_fire_alarm2', loc2_burglar_alarm: 'p_burglar_alarm2',
    loc2_building: 'p_building2', loc2_bpp: 'p_bpp2',
    num_losses: 'p_num_losses',
    loss1_year: 'p_loss1_year', loss1_type: 'p_loss1_type', loss1_amount: 'p_loss1_amount',
    loss2_year: 'p_loss2_year', loss2_type: 'p_loss2_type', loss2_amount: 'p_loss2_amount',
    loss3_year: 'p_loss3_year', loss3_type: 'p_loss3_type', loss3_amount: 'p_loss3_amount',
    mortgagee_loc1: 'p_mortgagee_name', mortgagee_loan_loc1: 'p_mortgagee_loan',
    mortgagee_loc2: 'p_mortgagee_name2', mortgagee_loan_loc2: 'p_mortgagee_loan2',
    add_insured_1: 'p_additional_insured', add_insured_2: 'p_additional_insured2'
  },
  Auto: {
    prior_losses: 'a_num_losses', num_vehicles: 'a_num_vehicles',
    v1_pd: 'a_v1_pd', v1_ded: 'a_v1_ded', v2_pd: 'a_v2_pd', v2_ded: 'a_v2_ded',
    d1_license_class: 'a_d1_license_class', d2_license_class: 'a_d2_license_class', d3_license_class: 'a_d3_license_class', d4_license_class: 'a_d4_license_class',
    d5_license_class: 'a_d5_license_class', d6_license_class: 'a_d6_license_class', d7_license_class: 'a_d7_license_class', d8_license_class: 'a_d8_license_class',
    d2_violation_year: 'a_d2_violation_year',
    tractor_pd_ded: 'a_tractor_ded', trailer_pd_ded: 'a_trailer_ded',
    trailer_int_limit: 'a_ti_limit', trailer_int_ded: 'a_ti_ded',
    loss_year: 'a_loss1_year', loss_type: 'a_loss1_type', loss_amount: 'a_loss1_amount',
    loss1_year: 'a_loss1_year', loss1_type: 'a_loss1_type', loss1_amount: 'a_loss1_amount',
    loss2_year: 'a_loss2_year', loss2_type: 'a_loss2_type', loss2_amount: 'a_loss2_amount',
    loss3_year: 'a_loss3_year', loss3_type: 'a_loss3_type', loss3_amount: 'a_loss3_amount',
    loss4_year: 'a_loss4_year', loss4_type: 'a_loss4_type', loss4_amount: 'a_loss4_amount',
    add_insured_1: 'a_additional_insured', add_insured_2: 'a_additional_insured2',
    loss_payee_1: 'a_loss_payee', loss_payee_2: 'a_loss_payee_2'
  }
};
function fieldKeyForAnswer(key, line) {
  const map = FIELD_KEY_MAP[line] || {};
  if (map[key]) return map[key];
  if (/^(p|a|g|bop|wc|cgl|umb)_/.test(key)) return key;
  if (line === 'Property') return `p_${key}`;
  if (line === 'Auto') return `a_${key}`;
  return key;
}
function submittedValueForAnswer(key, line, submitted) {
  const primary = fieldKeyForAnswer(key, line);
  return submitted[primary] || submitted[key] || '';
}
function money(n) {
  const val = numericValue(n) || 0;
  return val.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}
function plainNumber(n) {
  const val = numericValue(n) || 0;
  return val.toLocaleString('en-US', { maximumFractionDigits: 0 });
}
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function fmtFullDate(date) {
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
function carrierNameForScenario(scenario) {
  const line = scenario.line;
  if (line === 'Property') {
    if (scenario.difficulty === 'hard') return 'Northstar Commercial Indemnity';
    if (scenario.difficulty === 'normal') return 'Pinnacle Property & Casualty';
    return 'LAVA Shield Mutual';
  }
  if (line === 'Auto') {
    if (scenario.difficulty === 'hard') return 'Summit Transportation Casualty';
    if (scenario.difficulty === 'normal') return 'Atlas Commercial Auto';
    return 'LAVA Fleet Guard';
  }
  if (line === 'BOP') return scenario.difficulty === 'hard' ? 'RedRock Main Street Package' : scenario.difficulty === 'normal' ? 'Pinnacle Businessowners Select' : 'LAVA MainStreet BOP';
  if (line === 'Workers Compensation') return scenario.difficulty === 'hard' ? 'Summit Employers Assurance' : scenario.difficulty === 'normal' ? 'Atlas WorkComp Select' : 'LAVA Employers Guard';
  if (line === 'General Liability') return scenario.difficulty === 'hard' ? 'Northstar Liability Specialty' : scenario.difficulty === 'normal' ? 'Pinnacle Commercial Liability' : 'LAVA Liability Shield';
  if (line === 'Umbrella') return scenario.difficulty === 'hard' ? 'Summit Excess Casualty' : scenario.difficulty === 'normal' ? 'Atlas Umbrella Select' : 'LAVA Excess Guard';
  return 'LAVA Commercial Training Carrier';
}
function stateLabel(code) {
  const row = US_STATES.find(s => s.value === code || s.label === code);
  return row ? row.value : code;
}


/* ── COMMERCIAL POLICY LINE HELPERS ── */
const POLICY_LINE_META = {
  Property: { route: 'property-select', collection: 'property', quotePage: 'property-quote', label: 'Commercial Property', code: 'CP', badge: 'property' },
  Auto: { route: 'auto-select', collection: 'auto', quotePage: 'auto-quote', label: 'Commercial Auto', code: 'CA', badge: 'auto' },
  BOP: { route: 'bop-select', collection: 'bop', quotePage: 'generic-quote', label: "Business Owner's Policy", code: 'BOP', badge: 'bop' },
  'Workers Compensation': { route: 'wc-select', collection: 'workersComp', quotePage: 'generic-quote', label: 'Workers Compensation', code: 'WC', badge: 'wc' },
  'General Liability': { route: 'cgl-select', collection: 'cgl', quotePage: 'generic-quote', label: 'Commercial General Liability', code: 'CGL', badge: 'cgl' },
  Umbrella: { route: 'umbrella-select', collection: 'umbrella', quotePage: 'generic-quote', label: 'Commercial Umbrella', code: 'UMB', badge: 'umbrella' },
};
function policyMeta(line) { return POLICY_LINE_META[line] || { route: 'dashboard', collection: '', quotePage: 'generic-quote', label: line, code: compact(line).slice(0,3).toUpperCase(), badge: 'policy' }; }
function allScenarios() { return Object.values(window.SCENARIOS || {}).flat(); }
function scenarioCollection(key) { return (window.SCENARIOS && window.SCENARIOS[key]) || []; }
function policySelectRoute(line) { return policyMeta(line).route; }
function policyBadgeClass(line) { return policyMeta(line).badge; }
function quoteCodeForLine(line) { return policyMeta(line).code; }

/* ── MODAL ── */
function showModal(title, body, buttons) {
  $('modal-header').textContent = title;
  $('modal-body').innerHTML = body;
  const footer = $('modal-footer');
  footer.innerHTML = '';
  (buttons || []).forEach(b => {
    const btn = document.createElement('button');
    btn.className = `btn ${b.cls || 'btn-outline'}`;
    btn.textContent = b.label;
    btn.onclick = () => { hideModal(); b.action && b.action(); };
    footer.appendChild(btn);
  });
  $('modal-overlay').style.display = 'flex';
}
function hideModal() { $('modal-overlay').style.display = 'none'; }

/* ── THEME ── */
function applyTheme(dark) {
  document.body.classList.toggle('dark-mode', dark);
  document.body.classList.toggle('light-mode', !dark);
  $('icon-moon').style.display = dark ? 'none' : 'block';
  $('icon-sun').style.display = dark ? 'block' : 'none';
  localStorage.setItem(STORAGE_KEY_THEME, dark ? 'dark' : 'light');
}

/* ── NAVIGATION ── */
function navigate(page) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const sectionMap = {
    dashboard: 'sec-dashboard',
    'property-select': 'sec-property-select',
    'auto-select': 'sec-auto-select',
    'bop-select': 'sec-bop-select',
    'wc-select': 'sec-wc-select',
    'cgl-select': 'sec-cgl-select',
    'umbrella-select': 'sec-umbrella-select',
    'property-quote': 'sec-property-quote',
    'auto-quote': 'sec-auto-quote',
    'generic-quote': 'sec-generic-quote',
    results: 'sec-results',
    history: 'sec-history',
    admin: 'sec-admin',
  };
  const breadcrumbs = {
    dashboard: 'Dashboard',
    'property-select': 'Commercial Property — Select Scenario',
    'auto-select': 'Commercial Auto — Select Scenario',
    'bop-select': 'BOP — Select Scenario',
    'wc-select': 'Workers Compensation — Select Scenario',
    'cgl-select': 'Commercial General Liability — Select Scenario',
    'umbrella-select': 'Commercial Umbrella — Select Scenario',
    'property-quote': 'Commercial Property — Quote Form',
    'auto-quote': 'Commercial Auto — Quote Form',
    'generic-quote': 'Commercial Policy — Quote Form',
    results: 'Simulation Results',
    history: 'My Quote History',
    admin: 'Trainer Dashboard',
  };

  const secId = sectionMap[page];
  if (secId) {
    const sec = $(secId);
    if (sec) sec.classList.add('active');
  }
  $('breadcrumb').textContent = breadcrumbs[page] || 'Dashboard';

  const navItem = document.querySelector(`.nav-item[data-page="${page}"]`) ||
    document.querySelector(`.nav-item[data-page="${page.split('-')[0]}-select"]`);
  if (navItem) navItem.classList.add('active');

  if (page === 'dashboard') refreshDashboard();
  if (page === 'property-select') renderPropertyScenarios();
  if (page === 'auto-select') renderAutoScenarios();
  if (page === 'bop-select') renderBopScenarios();
  if (page === 'wc-select') renderWorkersCompScenarios();
  if (page === 'cgl-select') renderCglScenarios();
  if (page === 'umbrella-select') renderUmbrellaScenarios();
  if (page === 'history') renderHistory();
  if (page === 'admin') renderAdmin();

  $('main-content').scrollTop = 0;
}

/* ── LOGIN ── */
function initLogin() {
  $('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('login-name').value.trim();
    const email = $('login-email').value.trim().toLowerCase();
    let valid = true;

    $('err-name').textContent = '';
    $('err-email').textContent = '';

    if (!name || name.length < 2) {
      $('err-name').textContent = 'Please enter your full name.';
      valid = false;
    }
    if (!email.endsWith('@lavatraining.com')) {
      $('err-email').textContent = 'Email must use the @lavatraining.com domain.';
      valid = false;
    }
    if (!valid) return;

    const trainee = { name, email, loginTime: new Date().toISOString() };
    saveTrainee(trainee);
    state.trainee = trainee;
    bootApp();
  });
}

/* ── APP BOOT ── */
function bootApp() {
  $('page-login').classList.remove('active');
  $('page-app').classList.add('active');

  $('topbar-name').textContent = state.trainee.name;
  $('topbar-avatar').textContent = initials(state.trainee.name);

  refreshDashboard();
  navigate('dashboard');
}

function refreshDashboard() {
  const myAttempts = loadAttempts().filter(a => a.email === state.trainee.email);
  $('stat-completed').textContent = myAttempts.length;
  const passed = myAttempts.filter(a => a.result === 'Pass').length;
  $('stat-passed').textContent = passed;

  if (myAttempts.length > 0) {
    const avg = Math.round(myAttempts.reduce((s, a) => s + a.score, 0) / myAttempts.length);
    $('stat-accuracy').textContent = avg + '%';
    const totalSecs = myAttempts.reduce((s, a) => s + (a.timeSecs || 0), 0);
    $('stat-time').textContent = fmtTimeMin(totalSecs);
  } else {
    $('stat-accuracy').textContent = '—';
    $('stat-time').textContent = '0m';
  }

  const loginTime = new Date(state.trainee.loginTime);
  $('dash-welcome').textContent = `Welcome back, ${state.trainee.name.split(' ')[0]}! Logged in at ${loginTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}.`;

  const recentList = $('recent-list');
  const recent = myAttempts.slice().reverse().slice(0, 5);
  if (recent.length === 0) {
    recentList.innerHTML = '<div class="empty-state">No completed simulations yet. Start a quote above!</div>';
    return;
  }
  recentList.innerHTML = recent.map(a => `
    <div class="recent-item" onclick="showResultDetail('${a.id}')">
      <div class="recent-item-icon">
        ${a.line === 'Property' ?
          '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' :
          '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'}
      </div>
      <div class="recent-item-body">
        <div class="recent-item-title">${escHtml(a.scenarioName)}</div>
        <div class="recent-item-sub">${fmtDate(a.date)} · ${fmtTimeMin(a.timeSecs)}</div>
      </div>
      <span class="badge ${a.result === 'Pass' ? 'pass' : 'fail'}">${a.result}</span>
      <span class="recent-item-score ${a.result === 'Pass' ? 'pass' : 'fail'}">${a.score}%</span>
    </div>`).join('');
}

/* ── SCENARIO GRIDS ── */
function getScenarioById(id) {
  return allScenarios().find(s => s.id === id);
}

function renderScenarioGrid(containerId, scenarios) {
  const container = $(containerId);
  container.innerHTML = scenarios.map(s => `
    <div class="scenario-card ${s.difficulty}" onclick="previewScenario('${s.id}')" role="button" tabindex="0" aria-label="Preview ${escHtml(s.name)}">
      <div class="scenario-card-top">
        <span class="badge ${s.difficulty}">${s.difficulty.charAt(0).toUpperCase() + s.difficulty.slice(1)}</span>
        <span class="badge ${policyBadgeClass(s.line)}">${s.line}</span>
      </div>
      <div class="scenario-card-name">${escHtml(s.name.replace(/^(Easy|Normal|Hard) — /, ''))}</div>
      <div class="scenario-card-desc">${escHtml(s.description)}</div>
      <div class="scenario-card-meta">
        <span>📋 ${s.fields} fields</span>
        <span>⏱ ${s.timeEstimate}</span>
      </div>
      <div class="scenario-card-actions">
        <button class="scenario-card-action" onclick="event.stopPropagation();printScenario('${s.id}')">Print / PDF</button>
        <button class="scenario-card-action" onclick="event.stopPropagation();downloadScenario('${s.id}')">Download</button>
        <button class="scenario-card-action start-action" onclick="event.stopPropagation();startScenario('${s.id}')">Start Simulation →</button>
      </div>
    </div>`).join('');
}
function renderPropertyScenarios() { renderScenarioGrid('property-scenario-grid', scenarioCollection('property')); }
function renderAutoScenarios() { renderScenarioGrid('auto-scenario-grid', scenarioCollection('auto')); }
function renderBopScenarios() { renderScenarioGrid('bop-scenario-grid', scenarioCollection('bop')); }
function renderWorkersCompScenarios() { renderScenarioGrid('wc-scenario-grid', scenarioCollection('workersComp')); }
function renderCglScenarios() { renderScenarioGrid('cgl-scenario-grid', scenarioCollection('cgl')); }
function renderUmbrellaScenarios() { renderScenarioGrid('umbrella-scenario-grid', scenarioCollection('umbrella')); }

function scenarioPacketFileName(scenario) {
  return `${scenario.line}-${scenario.name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') + '-training-scenario.html';
}

function scenarioPacketDocument(scenario) {
  const b = scenario.brief;
  const packetId = `SUB-${scenario.line === 'Property' ? 'CP' : 'CA'}-${scenario.id.toUpperCase().replace(/[^A-Z0-9]/g, '')}`;
  const targetEffective = fmtFullDate(addDays(new Date(), 14));
  const rows = b.items.map(it => `
    <tr><th>${escHtml(it.label)}</th><td>${escHtml(it.value)}</td></tr>`).join('');
  const traps = (b.distractors || []).map(d => `<li>${escHtml(d)}</li>`).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escHtml(scenario.name)} — LAVA Scenario Packet</title>
<style>
  *{box-sizing:border-box} body{font-family:Arial,Helvetica,sans-serif;margin:0;background:#f4f5f7;color:#151515;padding:28px} .packet{max-width:980px;margin:0 auto;background:#fff;border:1px solid #d8dde5;border-radius:18px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.10)} .head{display:flex;justify-content:space-between;gap:18px;align-items:center;padding:22px 26px;background:#151515;color:#fff;border-bottom:6px solid #e73835}.brand{display:flex;align-items:center;gap:14px}.brand img{width:58px;height:58px;border-radius:14px;object-fit:cover}.brand h1{margin:0;font-size:22px;line-height:1.1}.brand p{margin:4px 0 0;color:#ffb4b2;font-size:12px;text-transform:uppercase;letter-spacing:1.2px;font-weight:700}.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:18px 26px;background:#fff5f5;border-bottom:1px solid #ffd1d0}.meta div{background:#fff;border:1px solid #ffd1d0;border-radius:12px;padding:10px}.meta span{display:block;font-size:10px;color:#7f1d1d;text-transform:uppercase;letter-spacing:.7px;font-weight:700}.meta strong{display:block;margin-top:3px;font-size:13px}.content{padding:24px 26px}.notice{border-left:5px solid #e73835;background:#fff5f5;padding:13px 15px;border-radius:12px;margin-bottom:18px;color:#7f1d1d;line-height:1.5}h2{font-size:20px;margin:0 0 8px} .desc{color:#475569;margin:0 0 20px;line-height:1.6}table{width:100%;border-collapse:collapse;font-size:13px}th,td{border:1px solid #dbe2ea;padding:10px 12px;text-align:left;vertical-align:top}th{width:30%;background:#f8fafc;color:#334155;text-transform:uppercase;font-size:11px;letter-spacing:.5px}.traps{margin-top:18px;border:1px solid #fed7aa;background:#fff7ed;border-radius:14px;padding:15px}.traps h3{margin:0 0 8px;color:#9a3412;font-size:14px}.traps li{margin:6px 0;color:#9a3412}.signoff{margin-top:22px;font-size:12px;color:#64748b}.actions{padding:0 26px 24px;text-align:right}.btn{display:inline-block;border:0;background:#e73835;color:#fff;border-radius:999px;padding:11px 16px;font-weight:800;cursor:pointer}@media print{body{background:#fff;padding:0}.packet{box-shadow:none;border-radius:0;border:0}.actions{display:none}.head{-webkit-print-color-adjust:exact;print-color-adjust:exact}.meta{grid-template-columns:repeat(2,1fr)}}@media(max-width:760px){body{padding:14px}.head{flex-direction:column;align-items:flex-start}.meta{grid-template-columns:1fr}th{width:42%}}
</style>
</head>
<body>
  <article class="packet">
    <header class="head">
      <div class="brand">
        <img src="${LAVA_LOGO_SRC}" alt="LAVA logo">
        <div><p>LAVA Commercial Training</p><h1>${escHtml(scenario.name)}</h1></div>
      </div>
      <div><strong>Scenario Packet</strong><br><span style="color:#ffb4b2;font-size:12px">Print or save before quoting</span></div>
    </header>
    <section class="meta">
      <div><span>Line</span><strong>${escHtml(scenario.line)}</strong></div>
      <div><span>Difficulty</span><strong>${escHtml(scenario.difficulty.toUpperCase())}</strong></div>
      <div><span>Submission</span><strong>${escHtml(packetId)}</strong></div>
      <div><span>Target Effective</span><strong>${escHtml(targetEffective)}</strong></div>
    </section>
    <section class="content">
      <div class="notice"><strong>Non-Licensed VA Reminder:</strong> Use this packet for data entry practice only. Do not bind coverage, advise on limits, interpret coverage, or promise eligibility. Escalate all coverage questions to a licensed producer.</div>
      <h2>${escHtml(b.title)}</h2>
      <p class="desc">${escHtml(scenario.description)}</p>
      <table><tbody>${rows}</tbody></table>
      ${traps ? `<div class="traps"><h3>Attention-to-Detail Traps</h3><ul>${traps}</ul></div>` : ''}
      <p class="signoff">Generated by the LAVA Commercial Quoting Simulator for training use only. This is not an insurance policy, binder, quote proposal, or coverage recommendation.</p>
    </section>
    <div class="actions"><button class="btn" onclick="window.print()">Print / Save as PDF</button></div>
  </article>
</body>
</html>`;
}

function printScenario(id) {
  const scenario = getScenarioById(id);
  if (!scenario) return;
  const popup = window.open('', '_blank');
  if (!popup) {
    showModal('Print Blocked', 'Please allow pop-ups for this site, then try printing the scenario again.', [{ label: 'Close', cls: 'btn-outline' }]);
    return;
  }
  popup.document.open();
  popup.document.write(scenarioPacketDocument(scenario));
  popup.document.close();
  popup.focus();
  setTimeout(() => popup.print(), 350);
}

function downloadScenario(id) {
  const scenario = getScenarioById(id);
  if (!scenario) return;
  const blob = new Blob([scenarioPacketDocument(scenario)], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = scenarioPacketFileName(scenario);
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function renderScenarioPreview(scenario) {
  const b = scenario.brief;
  const topItems = b.items.slice(0, 8).map(it => `
    <div><span>${escHtml(it.label)}</span><strong>${escHtml(it.value)}</strong></div>`).join('');
  return `
    <p><strong>${escHtml(scenario.name)}</strong></p>
    <p class="text-muted">${escHtml(scenario.description)}</p>
    <div class="scenario-preview-list">${topItems}</div>
    <div class="scenario-preview-warning"><strong>Required before starting:</strong> Print the scenario or download the packet so the VA can work from the intake details and practice accuracy like a real carrier quote submission.</div>`;
}

function previewScenario(id) {
  const scenario = getScenarioById(id);
  if (!scenario) return;
  showModal('Scenario Packet Required', renderScenarioPreview(scenario), [
    { label: 'Print / PDF', cls: 'btn-outline', action: () => printScenario(id) },
    { label: 'Download Scenario', cls: 'btn-outline', action: () => downloadScenario(id) },
    { label: 'Start Simulation', cls: 'btn-primary', action: () => startScenario(id) },
  ]);
}

/* ── START SCENARIO ── */
function startScenario(id) {
  const scenario = getScenarioById(id);
  if (!scenario) return;

  state.currentScenario = scenario;
  state.currentLine = scenario.line;
  state.currentStep = 0;
  state.formData = {};
  state.timerSeconds = 0;

  if (scenario.line === 'Property') {
    buildPropertyForm(scenario);
    navigate('property-quote');
    startTimer('prop-timer');
  } else if (scenario.line === 'Auto') {
    buildAutoForm(scenario);
    navigate('auto-quote');
    startTimer('auto-timer');
  } else {
    buildGenericPolicyForm(scenario);
    navigate('generic-quote');
    startTimer('generic-timer');
  }
}

/* ── TIMER ── */
function startTimer(displayId) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = 0;
  $(displayId).textContent = '00:00';
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    $(displayId).textContent = fmtTime(state.timerSeconds);
  }, 1000);
}
function stopTimer() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}

/* ── FORM BUILDER HELPERS ── */
function textField(id, label, placeholder, required) {
  return `<div class="form-group"><label for="${id}">${escHtml(label)}${required ? ' <span style="color:var(--danger)">*</span>' : ''}</label>
    <input type="text" id="${id}" name="${id}" placeholder="${escHtml(placeholder || '')}" ${required ? 'required' : ''} />
    <span class="field-error" id="err-${id}"></span></div>`;
}
function selectField(id, label, options, required) {
  const opts = options.map(o => {
    const val = typeof o === 'object' ? o.value : o;
    const txt = typeof o === 'object' ? o.label : o;
    return `<option value="${escHtml(val)}">${escHtml(txt)}</option>`;
  }).join('');
  return `<div class="form-group"><label for="${id}">${escHtml(label)}${required ? ' <span style="color:var(--danger)">*</span>' : ''}</label>
    <select id="${id}" name="${id}" ${required ? 'required' : ''}><option value="">— Select —</option>${opts}</select>
    <span class="field-error" id="err-${id}"></span></div>`;
}
function yesNoField(id, label, required) {
  return selectField(id, label, ['Yes', 'No'], required);
}
function sectionHeader(num, title) {
  return `<h2><span class="step-section-num">${num}</span>${escHtml(title)}</h2>`;
}
function stepPanel(index, title, content) {
  return `<div class="step-panel${index === 0 ? ' active' : ''}" data-step="${index}" id="step-panel-${index}">
    ${sectionHeader(index + 1, title)}${content}</div>`;
}

/* ── BUILD STEPPER UI ── */
function buildStepper(stepperId, steps) {
  const el = $(stepperId);
  el.innerHTML = steps.map((s, i) => `
    <div class="step-item${i === 0 ? ' active' : ''}" data-step="${i}" id="step-item-${i}">
      <div class="step-num">${i + 1}</div>
      <div class="step-label">${escHtml(s)}</div>
    </div>
    ${i < steps.length - 1 ? `<div class="step-connector" id="step-conn-${i}"></div>` : ''}`).join('');
}
function updateStepper(total, current) {
  for (let i = 0; i < total; i++) {
    const item = $(`step-item-${i}`);
    const conn = $(`step-conn-${i}`);
    if (!item) continue;
    item.classList.remove('active', 'completed');
    if (i < current) item.classList.add('completed');
    else if (i === current) item.classList.add('active');
    if (conn) {
      conn.classList.toggle('completed', i < current);
    }
  }
}

function renderScenarioBrief(scenario) {
  const b = scenario.brief;
  const intakeId = `SUB-${scenario.line === 'Property' ? 'CP' : 'CA'}-${scenario.id.toUpperCase().replace(/[^A-Z0-9]/g, '')}`;
  const targetEffective = fmtFullDate(addDays(new Date(), 14));
  return `
    <div class="brief-tools">
      <button type="button" class="brief-tool-btn" onclick="printScenario('${scenario.id}')">Print / Save Scenario PDF</button>
      <button type="button" class="brief-tool-btn" onclick="downloadScenario('${scenario.id}')">Download Scenario Packet</button>
    </div>
    <div class="carrier-status-strip">
      <div><span>Carrier</span><strong>${escHtml(carrierNameForScenario(scenario))}</strong></div>
      <div><span>Submission</span><strong>${escHtml(intakeId)}</strong></div>
      <div><span>Status</span><strong>Quote Entry — Not Bound</strong></div>
      <div><span>Target Effective</span><strong>${targetEffective}</strong></div>
    </div>
    <div class="authority-note">
      <strong>Non-Licensed VA Reminder:</strong> Data entry and document preparation only. Do not bind coverage, advise the client on limits, interpret coverage, or promise eligibility. Escalate all coverage questions to a licensed producer.
    </div>
    <h3>${escHtml(b.title)}</h3>
    <div class="brief-grid">${b.items.map(it =>
      `<div class="brief-item"><span class="brief-label">${escHtml(it.label)}</span><span class="brief-val">${escHtml(it.value)}</span></div>`
    ).join('')}</div>
    ${b.distractors.length > 0 ? `<div class="brief-distractor"><strong>⚠ Attention-to-Detail Traps:</strong> ${b.distractors.map(d => escHtml(d)).join('<br>')}</div>` : ''}`;
}

/* ── PROPERTY FORM ── */
function buildPropertyForm(scenario) {
  const prefix = 'prop';
  $(`${prefix}-quote-title`).textContent = `Commercial Property — ${scenario.name}`;
  $(`${prefix}-scenario-label`).textContent = `${scenario.difficulty.toUpperCase()} · ${scenario.line}`;

  // Brief
  const b = scenario.brief;
  $(`${prefix}-scenario-brief`).innerHTML = renderScenarioBrief(scenario);

  const steps = [
    'Applicant Info',
    'Business Details',
    'Location & Building',
    'Construction',
    'Fire & Security',
    'Coverage Limits',
    'Deductibles',
    'Prior Losses',
    'Additional Interests',
    'UW Questions',
  ];

  const isHard = scenario.difficulty === 'hard';
  const isNormal = scenario.difficulty === 'normal';

  const panels = [
    // Step 0 — Applicant Info
    stepPanel(0, 'Applicant Information',
      `<div class="form-row">${textField('p_applicant_name', 'Legal Business Name', 'Exact legal name on policy', true)}
      ${textField('p_dba', 'DBA (if different)', 'Doing Business As')}</div>
      <div class="form-row">${textField('p_contact_name', 'Primary Contact Name', 'Full name', true)}
      ${textField('p_phone', 'Phone Number', '(xxx) xxx-xxxx', true)}</div>
      <div class="form-row">${textField('p_email', 'Business Email', 'email@domain.com', true)}
      ${textField('p_website', 'Website', 'www.domain.com')}</div>`
    ),
    // Step 1 — Business Details
    stepPanel(1, 'Business Details',
      `<div class="form-row">${textField('p_fein', 'FEIN / Tax ID', 'XX-XXXXXXX', true)}
      ${selectField('p_entity_type', 'Legal Entity Type', ['Sole Proprietor','LLC','Corporation','S-Corporation','Partnership','Non-Profit'], true)}</div>
      <div class="form-row">${textField('p_sic_code', 'SIC Code', '4-digit code', true)}
      ${textField('p_years_in_business', 'Years in Business', 'Number of years', true)}</div>
      ${selectField('p_occupancy_pct', 'Occupancy %', ['100','75','50','25','Vacant'], true)}`
    ),
    // Step 2 — Location & Building
    stepPanel(2, 'Property Location & Building Info',
      `<p class="form-section-desc">${isHard ? 'Enter Location 1 details below. Location 2 will follow.' : 'Enter the primary property location.'}</p>
      <div class="form-row">${textField('p_street', isHard ? 'Location 1 — Street Address' : 'Street Address', '1234 Main St', true)}
      ${textField('p_city', 'City', 'City name', true)}</div>
      <div class="form-row">${selectField('p_state', 'State', US_STATES, true)}
      ${textField('p_zip', 'ZIP Code', '5-digit ZIP', true)}</div>
      <div class="form-row">${textField('p_sqft', isHard ? 'Location 1 — Sq Ft' : 'Total Square Footage', 'e.g. 2400', true)}
      ${textField('p_num_stories', 'Number of Stories', 'e.g. 1', true)}</div>
      ${isHard ? `<hr class="divider">
      <div class="form-row">${textField('p_street2', 'Location 2 — Street Address', '720 Industrial Dr', true)}
      ${textField('p_city2', 'Location 2 — City', 'City name', true)}</div>
      <div class="form-row">${selectField('p_state2', 'Location 2 — State', US_STATES, true)}
      ${textField('p_zip2', 'Location 2 — ZIP Code', '5-digit ZIP', true)}</div>
      <div class="form-row">${textField('p_sqft2', 'Location 2 — Sq Ft', 'e.g. 42000', true)}
      ${textField('p_stories2', 'Location 2 — Stories', 'e.g. 1', true)}</div>` : ''}`
    ),
    // Step 3 — Construction
    stepPanel(3, 'Construction Details',
      `<div class="form-row">${textField('p_year_built', isHard ? 'Location 1 — Year Built' : 'Year Built', 'YYYY', true)}
      ${selectField('p_construction_type', isHard ? 'Location 1 — Construction Type' : 'Construction Type',
        ['Frame','Joisted Masonry','Non-Combustible','Masonry Non-Combustible','Fire Resistive'], true)}</div>
      <div class="form-row">${selectField('p_roof_type', isHard ? 'Location 1 — Roof Type' : 'Roof Type',
        ['Asphalt Shingle','Metal','Flat / Built-Up','TPO Membrane','Metal Standing Seam','Wood Shake','Tile'], true)}
      ${textField('p_roof_age', isHard ? 'Location 1 — Roof Age (years)' : 'Roof Age (years)', 'e.g. 5', true)}</div>
      ${isHard ? `<hr class="divider">
      <div class="form-row">${textField('p_year_built2', 'Location 2 — Year Built', 'YYYY', true)}
      ${selectField('p_construction_type2', 'Location 2 — Construction Type',
        ['Frame','Joisted Masonry','Non-Combustible','Masonry Non-Combustible','Fire Resistive'], true)}</div>
      <div class="form-row">${selectField('p_roof_type2', 'Location 2 — Roof Type',
        ['Asphalt Shingle','Metal','Flat / Built-Up','TPO Membrane','Metal Standing Seam','Wood Shake','Tile'], true)}
      ${textField('p_roof_age2', 'Location 2 — Roof Age (years)', 'e.g. 12', true)}</div>` : ''}`
    ),
    // Step 4 — Fire & Security
    stepPanel(4, 'Fire Protection & Security',
      `<p class="form-section-desc">${isHard ? 'Enter for Location 1. Location 2 fields follow.' : 'Indicate the type of protection systems at this location.'}</p>
      <div class="form-row">${textField('p_protection_class', isHard ? 'Location 1 — Protection Class (1-10)' : 'Protection Class (1–10)', 'e.g. 3', true)}
      ${selectField('p_sprinkler', isHard ? 'Location 1 — Sprinkler System' : 'Sprinkler System',
        ['None','Wet Pipe Full','Wet Pipe Partial','Dry Pipe Full','Dry Pipe Partial'], true)}</div>
      <div class="form-row">${selectField('p_fire_alarm', isHard ? 'Location 1 — Fire Alarm' : 'Fire Alarm',
        ['None','Local Only','Central Monitored'], true)}
      ${selectField('p_burglar_alarm', isHard ? 'Location 1 — Burglar Alarm' : 'Burglar Alarm',
        ['None','Local Only','Central Monitored'], true)}</div>
      ${isHard ? `<hr class="divider">
      <div class="form-row">${textField('p_pc2', 'Location 2 — Protection Class (1-10)', 'e.g. 4', true)}
      ${selectField('p_sprinkler2', 'Location 2 — Sprinkler System',
        ['None','Wet Pipe Full','Wet Pipe Partial','Dry Pipe Full','Dry Pipe Partial'], true)}</div>
      <div class="form-row">${selectField('p_fire_alarm2', 'Location 2 — Fire Alarm',
        ['None','Local Only','Central Monitored'], true)}
      ${selectField('p_burglar_alarm2', 'Location 2 — Burglar Alarm',
        ['None','Local Only','Central Monitored'], true)}</div>` : ''}`
    ),
    // Step 5 — Coverage Limits
    stepPanel(5, 'Coverage Limits',
      `${isHard ?
        `<div class="form-row">${textField('p_building1', 'Location 1 — Building Replacement Cost ($)', 'e.g. 4200000', true)}
        ${textField('p_bpp1', 'Location 1 — BPP Limit ($)', 'e.g. 1800000', true)}</div>
        <div class="form-row">${textField('p_tenant_impr1', 'Location 1 — Tenant Improvements ($)', 'e.g. 320000', true)}
        ${textField('p_building2', 'Location 2 — Building Replacement Cost ($)', 'e.g. 2900000', true)}</div>
        <div class="form-row">${textField('p_bpp2', 'Location 2 — BPP Limit ($)', 'e.g. 3100000', true)}
        ${textField('p_business_income', 'Business Income Limit ($)', 'e.g. 750000', true)}</div>
        <div class="form-row">${textField('p_extra_expense', 'Extra Expense Limit ($)', 'e.g. 100000', true)}
        <div></div></div>` :
        isNormal ?
        `<div class="form-row">${textField('p_building1', 'Building Replacement Cost ($)', 'e.g. 1250000', true)}
        ${textField('p_bpp1', 'BPP Limit ($)', 'e.g. 380000', true)}</div>
        <div class="form-row">${textField('p_business_income', 'Business Income Limit ($)', 'e.g. 200000', true)}
        ${textField('p_extra_expense', 'Extra Expense Limit ($)', 'e.g. 25000', true)}</div>` :
        `<div class="form-row">${textField('p_building1', 'Building Replacement Cost ($)', 'e.g. 425000', true)}
        ${textField('p_bpp1', 'BPP Limit ($)', 'e.g. 85000', true)}</div>
        ${textField('p_business_income', 'Business Income Limit ($)', 'e.g. 50000', true)}`
      }`
    ),
    // Step 6 — Deductibles
    stepPanel(6, 'Deductibles',
      `<div class="form-row">${selectField('p_deductible', 'All-Perils Deductible ($)', ['500','1000','2500','5000','10000','25000'], true)}
      ${isHard ? selectField('p_wind_hail_ded', 'Wind/Hail Deductible', ['1% of Building Value','2% of Building Value','5% of Building Value','$5,000','$10,000'], true) : '<div></div>'}</div>`
    ),
    // Step 7 — Prior Losses
    stepPanel(7, 'Prior Loss History',
      `${selectField('p_num_losses', 'Number of Losses in Past 3–5 Years', ['0','1','2','3','4','5+'], true)}
      <div id="p-loss-fields"></div>
      <p class="form-section-desc" style="margin-top:12px">If no losses, select 0 and leave loss detail fields blank.</p>`
    ),
    // Step 8 — Additional Interests
    stepPanel(8, 'Additional Interests',
      `${textField('p_mortgagee_name', 'Mortgagee Name', 'e.g. Wells Fargo Bank NA')}
      ${textField('p_mortgagee_loan', 'Mortgagee Loan Number', 'e.g. TX-20191104')}
      ${isHard ? `${textField('p_mortgagee_name2', 'Mortgagee 2 — Name', 'e.g. PNC Bank')}
      ${textField('p_mortgagee_loan2', 'Mortgagee 2 — Loan Number', '')}` : ''}
      ${textField('p_loss_payee', 'Loss Payee Name', 'Entity name or None')}
      ${textField('p_additional_insured', 'Additional Insured Name(s)', 'Entity name(s) or None')}
      ${isHard ? textField('p_additional_insured2', 'Additional Insured 2', 'Entity name or None') : ''}`
    ),
    // Step 9 — UW Questions
    stepPanel(9, 'Underwriting Questions',
      `${yesNoField('p_uw_vacant', 'Is any portion of the building vacant or unoccupied?', true)}
      ${yesNoField('p_uw_operations', 'Are any operations conducted outdoors or off premises?', true)}
      ${yesNoField('p_uw_cooking', 'Is there any cooking on premises?', true)}
      ${yesNoField('p_uw_claims', 'Any insurance claims cancelled or non-renewed in the past 5 years?', true)}
      ${yesNoField('p_uw_litigation', 'Is the insured currently involved in any litigation?', true)}
      ${selectField('p_uw_wiring', 'Electrical Wiring Type', ['Copper','Aluminum','Knob-and-Tube','Mixed'], true)}
      ${selectField('p_uw_heating', 'Heating Type', ['Forced Air Gas','Electric','Heat Pump','Boiler Steam','Oil','Other'], true)}`
    ),
  ];

  $(`${prefix}-steps-container`).innerHTML = panels.join('');
  buildStepper(`${prefix}-stepper`, steps);
  state.totalSteps = steps.length;

  // Wire loss fields
  $('p_num_losses').addEventListener('change', function() {
    renderLossFields('p-loss-fields', 'p_loss', parseInt(this.value) || 0);
  });

  setupFormNav(prefix);
}

/* ── BUILD AUTO FORM ── */
function buildAutoForm(scenario) {
  const prefix = 'auto';
  $(`${prefix}-quote-title`).textContent = `Commercial Auto — ${scenario.name}`;
  $(`${prefix}-scenario-label`).textContent = `${scenario.difficulty.toUpperCase()} · ${scenario.line}`;

  const b = scenario.brief;
  $(`${prefix}-scenario-brief`).innerHTML = renderScenarioBrief(scenario);

  const isHard = scenario.difficulty === 'hard';
  const isNormal = scenario.difficulty === 'normal';

  const steps = [
    'Applicant Info',
    'Business Operations',
    'Vehicle Details',
    'Driver Details',
    'Prior Losses',
    'Liability Coverage',
    'Physical Damage',
    'Endorsements',
    'Additional Interests',
    'UW Questions',
  ];

  const numVehicles = isHard ? 12 : isNormal ? 6 : 2;
  const numDrivers = isHard ? 8 : isNormal ? 4 : 1;

  const vehicleFields = buildVehicleFields(numVehicles);
  const driverFields = buildDriverFields(numDrivers);

  const panels = [
    // Step 0 — Applicant Info
    stepPanel(0, 'Applicant Information',
      `<div class="form-row">${textField('a_applicant_name', 'Legal Business Name', 'Exact legal name on policy', true)}
      ${textField('a_contact_name', 'Primary Contact Name', 'Full name', true)}</div>
      <div class="form-row">${textField('a_phone', 'Phone Number', '(xxx) xxx-xxxx', true)}
      ${textField('a_email', 'Business Email', 'email@domain.com', true)}</div>
      <div class="form-row">${textField('a_fein', 'FEIN / Tax ID', 'XX-XXXXXXX', true)}
      ${selectField('a_entity_type', 'Legal Entity Type', ['Sole Proprietor','LLC','Corporation','S-Corporation','Partnership'], true)}</div>`
    ),
    // Step 1 — Business Operations
    stepPanel(1, 'Business Operations',
      `<div class="form-row">${textField('a_sic_code', 'SIC Code', '4-digit code', true)}
      ${textField('a_years_in_business', 'Years in Business', 'Number of years', true)}</div>
      <div class="form-row">${textField('a_garage_street', 'Garaging Street Address', '123 Main St', true)}
      ${textField('a_garage_city', 'Garaging City', 'City name', true)}</div>
      <div class="form-row">${selectField('a_garage_state', 'Garaging State', US_STATES, true)}
      ${textField('a_garage_zip', 'Garaging ZIP Code', '5-digit ZIP', true)}</div>
      <div class="form-row">${selectField('a_radius', 'Radius of Operation', ['0-50','0-100','0-200','101-200','201-500','501+'], true)}
      ${selectField('a_business_use', 'Primary Business Use', ['Service','Retail','Wholesale','Contracting','Trucking','Hauling','Other'], true)}</div>
      ${isHard ? `<div class="form-row">${textField('a_dot_number', 'DOT Number', 'US-DOT XXXXXXX', true)}
      ${textField('a_mc_number', 'MC Number', 'MC-XXXXXX', true)}</div>
      ${selectField('a_commodity', 'Commodity Hauled', ['General Freight Non-Hazardous','Hazardous Materials','Refrigerated','Livestock','Auto Transport','Tanker'], true)}` : ''}`
    ),
    // Step 2 — Vehicles
    stepPanel(2, 'Vehicle Details',
      `<p class="form-section-desc">Enter details for all ${numVehicles} vehicles listed in the scenario. Verify VIN, year, make/model, and garaging details carefully before continuing.</p>
      <div class="form-row">${selectField('a_num_vehicles','Number of Scheduled Vehicles',['1','2','3','4','5','6','7','8','9','10','11','12'],true)}
      ${isHard ? selectField('a_num_tractors','Number of Tractors',['1','2','3','4','5','6','7','8'],true) : '<div></div>'}</div>
      ${isHard ? `<div class="form-row">${selectField('a_num_trailers','Number of Trailers',['1','2','3','4','5','6','7','8'],true)}<div></div></div>` : ''}
      ${vehicleFields}`
    ),
    // Step 3 — Drivers
    stepPanel(3, 'Driver Details',
      `<p class="form-section-desc">Enter all ${numDrivers} listed driver(s) exactly as shown.</p>
      ${driverFields}`
    ),
    // Step 4 — Prior Losses
    stepPanel(4, 'Prior Loss History',
      `${selectField('a_num_losses', 'Number of Losses in Past 3 Years', ['0','1','2','3','4','5+'], true)}
      <div id="a-loss-fields"></div>`
    ),
    // Step 5 — Liability
    stepPanel(5, 'Liability Coverage',
      `${selectField('a_liability_limit', 'Liability Limit (CSL)', ['300000','500000','1000000','2000000'], true)}
      ${isHard ? yesNoField('a_non_trucking', 'Non-Trucking Liability (Bobtail) Coverage?', true) : ''}`
    ),
    // Step 6 — Physical Damage
    stepPanel(6, 'Physical Damage Coverage',
      `${isHard ?
        `${selectField('a_tractor_pd','Tractor Physical Damage',['Comp and Collision','Comp Only','None'],true)}
        ${selectField('a_tractor_ded','Tractor Deductible ($)',['500','1000','2500','5000'],true)}
        ${selectField('a_trailer_pd','Trailer Physical Damage',['Comp and Collision','Comp Only','None'],true)}
        ${selectField('a_trailer_ded','Trailer Deductible ($)',['500','1000','2500','5000'],true)}` :
        isNormal ?
        `${selectField('a_pd_coverage','Fleet Physical Damage',['Comp and Collision','Comp Only','Collision Only','None'],true)}
        ${selectField('a_pd_deductible','Fleet Deductible ($)',['250','500','1000','2500','5000'],true)}` :
        `<div class="mini-section-title">Vehicle 1 Physical Damage</div>
        <div class="form-row">${selectField('a_v1_pd','Vehicle 1 Physical Damage',['Comp and Collision','Comp Only','Collision Only','None'],true)}
        ${selectField('a_v1_ded','Vehicle 1 Deductible ($)',['250','500','1000','2500','5000'],true)}</div>
        <div class="mini-section-title">Vehicle 2 Physical Damage</div>
        <div class="form-row">${selectField('a_v2_pd','Vehicle 2 Physical Damage',['Comp and Collision','Comp Only','Collision Only','None'],true)}
        ${selectField('a_v2_ded','Vehicle 2 Deductible ($)',['250','500','1000','2500','5000'],true)}</div>`}
      ${isHard ? `<hr class="divider"><h3 style="font-size:0.95rem;font-weight:700;margin-bottom:16px">Cargo Coverage</h3>
      ${selectField('a_cargo_limit','Cargo Limit ($)',['25000','50000','100000','250000','500000'],true)}
      ${selectField('a_cargo_ded','Cargo Deductible ($)',['500','1000','2500','5000'],true)}
      <hr class="divider"><h3 style="font-size:0.95rem;font-weight:700;margin-bottom:16px">Trailer Interchange</h3>
      ${yesNoField('a_trailer_interchange','Include Trailer Interchange Coverage?',true)}
      ${textField('a_ti_limit','Trailer Interchange Limit ($)','e.g. 50000')}
      ${selectField('a_ti_ded','Trailer Interchange Deductible ($)',['500','1000','2500','5000'])}` : ''}`
    ),
    // Step 7 — Endorsements
    stepPanel(7, 'Endorsements & Additional Coverages',
      `${yesNoField('a_hired_nonowned', 'Hired & Non-Owned Auto Coverage?', true)}
      ${isNormal || isHard ? yesNoField('a_uninsured_motorist', 'Uninsured/Underinsured Motorist?', true) : ''}
      ${isHard ? yesNoField('a_medical_payments', 'Medical Payments Coverage?', true) : ''}
      ${selectField('a_pip', 'Personal Injury Protection (PIP)', ['None','Required by State','Optional — Include'], true)}`
    ),
    // Step 8 — Additional Interests
    stepPanel(8, 'Additional Interests',
      `${textField('a_additional_insured', 'Additional Insured Name(s)', 'Entity name or None')}
      ${isHard ? textField('a_additional_insured2', 'Additional Insured 2', 'Entity name or None') : ''}
      ${textField('a_loss_payee', 'Loss Payee Name(s)', 'Lender name or None')}
      ${isHard ? textField('a_loss_payee_2', 'Loss Payee 2 Name', 'Lender name or None') : ''}`
    ),
    // Step 9 — UW Questions
    stepPanel(9, 'Underwriting Questions',
      `${yesNoField('a_uw_cargo_secured', 'Are all loads properly secured per DOT regulations?', true)}
      ${yesNoField('a_uw_drug_testing', 'Does the company have a drug & alcohol testing program?', true)}
      ${yesNoField('a_uw_safety_program', 'Is there a written driver safety program in place?', true)}
      ${yesNoField('a_uw_suspended', 'Has any driver had a license suspended or revoked in the past 3 years?', true)}
      ${yesNoField('a_uw_dui', 'Has any driver had a DUI or DWI in the past 5 years?', true)}
      ${yesNoField('a_uw_nonowned_operated', 'Are non-owned vehicles operated by employees?', true)}
      ${selectField('a_uw_gps', 'GPS Tracking on Vehicles?', ['Yes — All Vehicles','Yes — Some Vehicles','No'], true)}`
    ),
  ];

  $(`${prefix}-steps-container`).innerHTML = panels.join('');
  buildStepper(`${prefix}-stepper`, steps);
  state.totalSteps = steps.length;

  // Wire loss fields
  $('a_num_losses').addEventListener('change', function() {
    renderLossFields('a-loss-fields', 'a_loss', parseInt(this.value) || 0);
  });

  setupFormNav(prefix);
}


/* ── GENERIC COMMERCIAL POLICY FORM BUILDER ── */
function textareaField(id, label, placeholder, required) {
  return `<div class="form-group"><label for="${id}">${escHtml(label)}${required ? ' <span style="color:var(--danger)">*</span>' : ''}</label>
    <textarea id="${id}" name="${id}" placeholder="${escHtml(placeholder || '')}" ${required ? 'required' : ''}></textarea>
    <span class="field-error" id="err-${id}"></span></div>`;
}
function moneyField(id, label, placeholder, required = true) { return textField(id, label, placeholder || 'Enter amount without $ or commas', required); }
function genericField(def) {
  const [id, label, type, options, required = true] = def;
  if (type === 'select') return selectField(id, label, options || [], required);
  if (type === 'yesno') return yesNoField(id, label, required);
  if (type === 'textarea') return textareaField(id, label, options || '', required);
  if (type === 'money') return moneyField(id, label, options || 'e.g. 250000', required);
  return textField(id, label, options || '', required);
}
function renderGenericFields(fields) {
  return fields.map((f, i) => {
    const html = genericField(f);
    return html;
  }).join('');
}
const GENERIC_SHARED_APPLICANT_FIELDS = [
  ['g_applicant_name', 'Legal Business Name', 'text', 'Exact legal name on policy', true],
  ['g_dba', 'DBA / Trade Name', 'text', 'If none, enter None', false],
  ['g_contact_name', 'Primary Contact Name', 'text', 'Full name', true],
  ['g_phone', 'Phone Number', 'text', '(xxx) xxx-xxxx', true],
  ['g_email', 'Business Email', 'text', 'email@domain.com', true],
  ['g_fein', 'FEIN / Tax ID', 'text', 'XX-XXXXXXX', true],
  ['g_entity_type', 'Legal Entity Type', 'select', ['Sole Proprietor','LLC','Corporation','S-Corporation','Partnership','Non-Profit'], true],
];
const GENERIC_SHARED_LOCATION_FIELDS = [
  ['g_sic_code', 'SIC / NAICS Code', 'text', 'Enter code exactly from scenario', true],
  ['g_years_in_business', 'Years in Business', 'text', 'Number of years', true],
  ['g_street', 'Primary Location Street Address', 'text', '123 Main St', true],
  ['g_city', 'City', 'text', 'City', true],
  ['g_state', 'State', 'select', US_STATES, true],
  ['g_zip', 'ZIP Code', 'text', '5-digit ZIP', true],
];
const GENERIC_LOSS_FIELDS = [
  ['g_num_losses', 'Number of Prior Losses', 'select', ['0','1','2','3','4','5+'], true],
  ['g_loss1_year', 'Loss 1 Year', 'text', 'YYYY', false],
  ['g_loss1_type', 'Loss 1 Type', 'text', 'e.g. Slip and Fall', false],
  ['g_loss1_amount', 'Loss 1 Amount Paid ($)', 'money', 'e.g. 12500', false],
  ['g_loss2_year', 'Loss 2 Year', 'text', 'YYYY', false],
  ['g_loss2_type', 'Loss 2 Type', 'text', 'e.g. Theft', false],
  ['g_loss2_amount', 'Loss 2 Amount Paid ($)', 'money', 'e.g. 8400', false],
];
const GENERIC_INTEREST_FIELDS = [
  ['g_mortgagee', 'Mortgagee / Lender', 'text', 'Entity name or None', false],
  ['g_loss_payee', 'Loss Payee', 'text', 'Entity name or None', false],
  ['g_additional_insured', 'Additional Insured / Certificate Holder', 'text', 'Entity name or None', false],
];
const GENERIC_POLICY_FORM_DEFS = {
  BOP: [
    { title: 'Applicant Information', fields: GENERIC_SHARED_APPLICANT_FIELDS },
    { title: 'Business Operations & Location', fields: GENERIC_SHARED_LOCATION_FIELDS.concat([
      ['bop_business_type', 'Business Type / Operations', 'select', ['Bakery / Food Service','Retail Store','Professional Office','Beauty Salon','Printer / Copy Shop','Medical Office','Contractor Office'], true],
      ['bop_square_footage', 'Occupied Square Footage', 'text', 'e.g. 1800', true],
    ])},
    { title: 'BOP Property & Liability Coverages', fields: [
      ['bop_annual_revenue', 'Annual Gross Sales / Revenue ($)', 'money', 'e.g. 450000', true],
      ['bop_payroll', 'Annual Payroll ($)', 'money', 'e.g. 145000', true],
      ['bop_building_limit', 'Building Limit ($)', 'money', 'Owned building only; enter 0 if tenant', true],
      ['bop_bpp_limit', 'Business Personal Property Limit ($)', 'money', 'e.g. 75000', true],
      ['bop_business_income', 'Business Income / Extra Expense Limit ($)', 'money', 'e.g. 50000', true],
      ['bop_gl_limit', 'GL Limit', 'select', ['300000/600000','500000/1000000','1000000/2000000','2000000/4000000'], true],
      ['bop_deductible', 'Property Deductible ($)', 'select', ['500','1000','2500','5000','10000'], true],
    ]},
    { title: 'Additional Interests & Loss History', fields: GENERIC_INTEREST_FIELDS.concat(GENERIC_LOSS_FIELDS) },
    { title: 'BOP Underwriting Questions', fields: [
      ['bop_uw_cooking', 'Any cooking, frying, or baking operations?', 'yesno', null, true],
      ['bop_uw_alarm', 'Central fire/burglar alarm?', 'select', ['None','Local Only','Central Monitored'], true],
      ['bop_uw_prior_cancel', 'Any prior carrier cancellation/non-renewal?', 'yesno', null, true],
      ['bop_uw_subcontractors', 'Any subcontracted operations?', 'yesno', null, true],
    ]},
  ],
  'Workers Compensation': [
    { title: 'Applicant Information', fields: GENERIC_SHARED_APPLICANT_FIELDS },
    { title: 'Operations & State Exposure', fields: GENERIC_SHARED_LOCATION_FIELDS.concat([
      ['wc_state', 'Primary Workers Comp State', 'select', US_STATES, true],
      ['wc_full_time', 'Number of Full-Time Employees', 'text', 'e.g. 12', true],
      ['wc_part_time', 'Number of Part-Time Employees', 'text', 'e.g. 4', true],
      ['wc_owner_included', 'Owners / Officers Included?', 'yesno', null, true],
    ])},
    { title: 'Payroll & Class Codes', fields: [
      ['wc_annual_payroll', 'Total Annual Payroll ($)', 'money', 'e.g. 625000', true],
      ['wc_class_code1', 'Class Code 1', 'text', 'e.g. 8810', true],
      ['wc_class_desc1', 'Class Code 1 Description', 'text', 'Clerical Office Employees', true],
      ['wc_payroll1', 'Class Code 1 Payroll ($)', 'money', 'e.g. 140000', true],
      ['wc_class_code2', 'Class Code 2', 'text', 'Enter None if not applicable', true],
      ['wc_class_desc2', 'Class Code 2 Description', 'text', 'Enter None if not applicable', true],
      ['wc_payroll2', 'Class Code 2 Payroll ($)', 'money', 'Enter 0 if not applicable', true],
      ['wc_mod_factor', 'Experience Modification Factor', 'text', 'e.g. 0.94', true],
      ['wc_prior_carrier', 'Prior Carrier', 'text', 'Carrier name or None', true],
      ['wc_policy_limit', 'Employers Liability Limit', 'select', ['100/500/100','500/500/500','1000/1000/1000'], true],
    ]},
    { title: 'Loss History', fields: GENERIC_LOSS_FIELDS },
    { title: 'Workers Comp Underwriting', fields: [
      ['wc_safety_program', 'Written safety program in place?', 'yesno', null, true],
      ['wc_return_to_work', 'Return-to-work/light duty program?', 'yesno', null, true],
      ['wc_subcontractors', 'Uses subcontractors or 1099 labor?', 'yesno', null, true],
      ['wc_labor_leasing', 'Any leased employees or PEO arrangement?', 'yesno', null, true],
    ]},
  ],
  'General Liability': [
    { title: 'Applicant Information', fields: GENERIC_SHARED_APPLICANT_FIELDS },
    { title: 'Operations & Exposure Basis', fields: GENERIC_SHARED_LOCATION_FIELDS.concat([
      ['cgl_business_description', 'Detailed Business Description', 'textarea', 'Describe operations based on scenario', true],
      ['cgl_exposure_basis', 'Primary Rating Exposure Basis', 'select', ['Sales','Payroll','Area','Units','Admissions','Subcontractor Cost'], true],
      ['cgl_annual_revenue', 'Annual Gross Sales / Revenue ($)', 'money', 'e.g. 850000', true],
      ['cgl_payroll', 'Annual Payroll ($)', 'money', 'e.g. 300000', true],
      ['cgl_subcontractor_costs', 'Annual Subcontractor Costs ($)', 'money', 'e.g. 0', true],
    ])},
    { title: 'General Liability Coverages', fields: [
      ['cgl_occurrence_limit', 'Each Occurrence Limit', 'select', ['300000','500000','1000000','2000000'], true],
      ['cgl_aggregate_limit', 'General Aggregate Limit', 'select', ['600000','1000000','2000000','4000000'], true],
      ['cgl_products_completed', 'Products / Completed Operations Aggregate', 'select', ['Excluded','1000000','2000000','4000000'], true],
      ['cgl_med_pay', 'Medical Payments Limit', 'select', ['Excluded','5000','10000','25000'], true],
      ['cgl_deductible', 'Liability Deductible / SIR ($)', 'select', ['0','500','1000','2500','5000','10000'], true],
    ]},
    { title: 'Additional Interests & Loss History', fields: GENERIC_INTEREST_FIELDS.concat(GENERIC_LOSS_FIELDS) },
    { title: 'GL Underwriting Questions', fields: [
      ['cgl_contractual_liability', 'Any written contracts requiring indemnity?', 'yesno', null, true],
      ['cgl_professional_exposure', 'Any professional advice/design exposure?', 'yesno', null, true],
      ['cgl_primary_noncontrib', 'Primary and non-contributory required?', 'yesno', null, true],
      ['cgl_waiver_subrogation', 'Waiver of subrogation required?', 'yesno', null, true],
      ['cgl_prior_cancel', 'Any prior cancellation/non-renewal?', 'yesno', null, true],
    ]},
  ],
  Umbrella: [
    { title: 'Applicant Information', fields: GENERIC_SHARED_APPLICANT_FIELDS },
    { title: 'Operations & Exposure Summary', fields: GENERIC_SHARED_LOCATION_FIELDS.concat([
      ['umb_annual_revenue', 'Annual Gross Sales / Revenue ($)', 'money', 'e.g. 1500000', true],
      ['umb_payroll', 'Annual Payroll ($)', 'money', 'e.g. 650000', true],
      ['umb_vehicle_count', 'Scheduled Auto Count', 'text', 'e.g. 4', true],
    ])},
    { title: 'Umbrella Limits & Underlying Schedule', fields: [
      ['umb_limit', 'Requested Umbrella Limit', 'select', ['1000000','2000000','3000000','5000000','10000000'], true],
      ['umb_retention', 'Self-Insured Retention ($)', 'select', ['0','10000','25000','50000'], true],
      ['umb_gl_carrier', 'Underlying GL Carrier', 'text', 'Carrier name', true],
      ['umb_gl_policy', 'Underlying GL Policy Number', 'text', 'Policy number', true],
      ['umb_gl_occurrence_limit', 'Underlying GL Each Occurrence', 'select', ['500000','1000000','2000000'], true],
      ['umb_gl_aggregate_limit', 'Underlying GL Aggregate', 'select', ['1000000','2000000','4000000'], true],
      ['umb_auto_carrier', 'Underlying Auto Carrier', 'text', 'Carrier name or None', true],
      ['umb_auto_policy', 'Underlying Auto Policy Number', 'text', 'Policy number or None', true],
      ['umb_auto_limit', 'Underlying Auto CSL', 'select', ['None','500000','1000000','2000000'], true],
      ['umb_el_limit', 'Employers Liability Underlying Limit', 'select', ['None','100/500/100','500/500/500','1000/1000/1000'], true],
      ['umb_underlying_expiring_premium', 'Total Underlying Expiring Premium ($)', 'money', 'e.g. 18500', true],
    ]},
    { title: 'Additional Insureds & Loss History', fields: GENERIC_INTEREST_FIELDS.concat(GENERIC_LOSS_FIELDS) },
    { title: 'Umbrella Underwriting Questions', fields: [
      ['umb_follow_form', 'Follow-form coverage requested?', 'yesno', null, true],
      ['umb_excluded_operations', 'Any excluded/high-hazard operations?', 'yesno', null, true],
      ['umb_prior_excess_losses', 'Any prior excess/umbrella losses?', 'yesno', null, true],
      ['umb_foreign_exposure', 'Any foreign products/operations exposure?', 'yesno', null, true],
    ]},
  ],
};
function buildGenericPolicyForm(scenario) {
  const prefix = 'generic';
  const policyLabel = policyMeta(scenario.line).label;
  $(`${prefix}-quote-title`).textContent = `${policyLabel} — ${scenario.name}`;
  $(`${prefix}-scenario-label`).textContent = `${scenario.difficulty.toUpperCase()} · ${scenario.line}`;
  $(`${prefix}-scenario-brief`).innerHTML = renderScenarioBrief(scenario);

  const steps = GENERIC_POLICY_FORM_DEFS[scenario.line] || GENERIC_POLICY_FORM_DEFS.BOP;
  const panels = steps.map((step, idx) => stepPanel(idx, step.title, `<div class="form-row generic-policy-grid">${renderGenericFields(step.fields)}</div>`));
  $(`${prefix}-steps-container`).innerHTML = panels.join('');
  buildStepper(`${prefix}-stepper`, steps.map(s => s.title.replace(' Information','').replace('Coverages','Coverage')));
  state.totalSteps = steps.length;
  setupFormNav(prefix);
}

/* ── VEHICLE FIELDS BUILDER ── */
function buildVehicleFields(count) {
  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `<details class="vehicle-details"${i <= 2 ? ' open' : ''}>
      <summary style="cursor:pointer;padding:10px 0;font-weight:700;color:var(--text-primary)">Vehicle ${i}</summary>
      <div style="padding:12px 0">
        <div class="form-row-3">${textField(`a_v${i}_year`, 'Year', 'YYYY', true)}
        ${textField(`a_v${i}_make`, 'Make', 'e.g. Ford', true)}
        ${textField(`a_v${i}_model`, 'Model', 'e.g. F-150 XL', true)}</div>
        <div class="form-row">${textField(`a_v${i}_vin`, 'VIN Number', '17-character VIN', true)}
        ${selectField(`a_v${i}_type`, 'Vehicle Type', ['Pickup Truck','Cargo Van','Passenger Van','Box Truck','Flatbed','Semi Tractor','Trailer — Dry Van','Trailer — Refrigerated','SUV','Sedan','Other'], true)}</div>
        <div class="form-row">${textField(`a_v${i}_gvw`, 'GVW (lbs)', 'e.g. 8500')}
        <div></div></div>
      </div>
    </details>`;
  }
  return html;
}

/* ── DRIVER FIELDS BUILDER ── */
function buildDriverFields(count) {
  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `<details class="driver-details"${i <= 2 ? ' open' : ''}>
      <summary style="cursor:pointer;padding:10px 0;font-weight:700;color:var(--text-primary)">Driver ${i}</summary>
      <div style="padding:12px 0">
        <div class="form-row">${textField(`a_d${i}_name`, 'Full Name', 'First Last', true)}
        ${textField(`a_d${i}_dob`, 'Date of Birth', 'MM/DD/YYYY', true)}</div>
        <div class="form-row">${textField(`a_d${i}_license`, 'Driver License #', 'State-XXXXXXXX', true)}
        ${selectField(`a_d${i}_license_class`, 'License Class', ['Class A','Class B','Class C','CDL-A','CDL-B','CDL-C','Operator'], false)}</div>
        <div class="form-row">${textField(`a_d${i}_exp`, 'Years of Driving Experience', 'e.g. 5', true)}
        ${selectField(`a_d${i}_mvr`, 'MVR Status', ['Clean','1 Violation','2 Violations','3+ Violations','At-fault Accident','DUI/DWI'], true)}</div>
        <div class="form-row">${textField(`a_d${i}_violation_year`, 'Violation / Accident Year', 'YYYY, if listed')}
        ${textField(`a_d${i}_violation_desc`, 'Violation / Accident Description', 'e.g. Speeding')}</div>
      </div>
    </details>`;
  }
  return html;
}

/* ── LOSS FIELDS RENDERER ── */
function renderLossFields(containerId, prefix, count) {
  const container = $(containerId);
  if (!container) return;
  let html = '';
  for (let i = 1; i <= Math.min(count, 5); i++) {
    html += `<div style="background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;margin-top:12px">
      <div style="font-weight:700;margin-bottom:12px;font-size:0.88rem;color:var(--text-secondary)">Loss #${i}</div>
      <div class="form-row">
        ${textField(`${prefix}${i}_year`, 'Year of Loss', 'YYYY', true)}
        ${selectField(`${prefix}${i}_type`, 'Type of Loss', ['Fire','Theft','Water Damage','Wind/Hail','Vandalism','Collision','At-fault Collision','Cargo Theft','Liability','Other'], true)}
      </div>
      ${textField(`${prefix}${i}_amount`, 'Amount Paid ($)', 'e.g. 14200', true)}
    </div>`;
  }
  container.innerHTML = html;
}

/* ── VALIDATION & ACCURACY GUARDRAILS ── */
function clearFieldError(input) {
  input.classList.remove('field-invalid');
  const err = $(`err-${input.id}`);
  if (err) err.textContent = '';
}
function setFieldError(input, message) {
  input.classList.add('field-invalid');
  const err = $(`err-${input.id}`);
  if (err) err.textContent = message;
}
function validateInput(input, silent = false) {
  clearFieldError(input);
  const value = String(input.value || '').trim();
  const label = input.closest('.form-group')?.querySelector('label')?.textContent?.replace('*','').trim() || input.name || 'Field';
  if (input.hasAttribute('required') && !value) {
    if (!silent) setFieldError(input, `${label} is required.`);
    return false;
  }
  if (!value) return true;
  if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    if (!silent) setFieldError(input, 'Enter a valid email address.');
    return false;
  }
  if (/vin/i.test(input.id) && value.replace(/[^A-Za-z0-9]/g, '').length !== 17) {
    if (!silent) setFieldError(input, 'VIN must be exactly 17 characters.');
    return false;
  }
  if (/(year_built|_year$)/i.test(input.id) && /year/i.test(label) && !/^\d{4}$/.test(value)) {
    if (!silent) setFieldError(input, 'Use a 4-digit year.');
    return false;
  }
  if (/(fein)/i.test(input.id) && !/^\d{2}-?\d{7}$/.test(value)) {
    if (!silent) setFieldError(input, 'Use FEIN format XX-XXXXXXX.');
    return false;
  }
  return true;
}
function validateStep(prefix, stepIndex, silent = false) {
  const panel = document.querySelector(`#${prefix}-steps-container .step-panel[data-step="${stepIndex}"]`);
  if (!panel) return true;
  const fields = Array.from(panel.querySelectorAll('input, select, textarea'));
  let ok = true;
  let firstInvalid = null;
  fields.forEach(field => {
    if (!validateInput(field, silent)) {
      ok = false;
      if (!firstInvalid) firstInvalid = field;
    }
  });
  if (!ok && !silent) {
    firstInvalid?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid?.focus({ preventScroll: true });
  }
  return ok;
}
function validateFullForm(prefix) {
  let firstBadStep = -1;
  for (let i = 0; i < state.totalSteps; i++) {
    if (!validateStep(prefix, i, true)) {
      firstBadStep = i;
      break;
    }
  }
  if (firstBadStep >= 0) {
    state.currentStep = firstBadStep;
    updateStepView(prefix);
    validateStep(prefix, firstBadStep, false);
    showModal('Missing or Invalid Quote Details', 'Please correct the highlighted fields before submitting. Carrier-style quote entry requires every required detail to be reviewed before the quote can be released.', [
      { label: 'Review Fields', cls: 'btn-primary' }
    ]);
    return false;
  }
  return true;
}

/* ── FORM NAV (NEXT / PREV) ── */
function setupFormNav(prefix) {
  const nextBtn = $(`${prefix}-next-btn`);
  const prevBtn = $(`${prefix}-prev-btn`);
  const submitBtn = $(`${prefix}-submit-btn`);
  const form = $(`${prefix}-quote-form`);

  state.currentStep = 0;
  updateStepView(prefix);

  nextBtn.onclick = () => {
    if (!validateStep(prefix, state.currentStep)) return;
    collectFormData(prefix);
    if (state.currentStep < state.totalSteps - 1) {
      state.currentStep++;
      updateStepView(prefix);
    }
  };
  prevBtn.onclick = () => {
    if (state.currentStep > 0) {
      state.currentStep--;
      updateStepView(prefix);
    }
  };
  form.onsubmit = (e) => {
    e.preventDefault();
    if (!validateFullForm(prefix)) return;
    collectFormData(prefix);
    submitQuote();
  };
}

function updateStepView(prefix) {
  document.querySelectorAll(`#${prefix}-steps-container .step-panel`).forEach((p, i) => {
    p.classList.toggle('active', i === state.currentStep);
  });
  updateStepper(state.totalSteps, state.currentStep);

  const prevBtn = $(`${prefix}-prev-btn`);
  const nextBtn = $(`${prefix}-next-btn`);
  const submitBtn = $(`${prefix}-submit-btn`);

  prevBtn.style.display = state.currentStep === 0 ? 'none' : 'inline-flex';
  const isLast = state.currentStep === state.totalSteps - 1;
  nextBtn.style.display = isLast ? 'none' : 'inline-flex';
  submitBtn.style.display = isLast ? 'inline-flex' : 'none';
}

/* ── COLLECT FORM DATA ── */
function collectFormData(prefix) {
  state.formData = {};
  const form = $(`${prefix}-quote-form`);
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(inp => {
    if (inp.name) state.formData[inp.name] = inp.value.trim();
  });
}

/* ── DECLARATION PAGE GENERATOR ── */
function decValue(line, submitted, key, fallback = '—') {
  const val = submittedValueForAnswer(key, line, submitted);
  return val || fallback;
}
function calculatePremium(line, scenario, submitted) {
  if (line === 'Property') {
    const building = numericValue(decValue(line, submitted, scenario.difficulty === 'hard' ? 'loc1_building' : 'building_value', 0)) || 0;
    const building2 = numericValue(decValue(line, submitted, 'loc2_building', 0)) || 0;
    const bpp = numericValue(decValue(line, submitted, scenario.difficulty === 'hard' ? 'loc1_bpp' : 'bpp_value', 0)) || 0;
    const bpp2 = numericValue(decValue(line, submitted, 'loc2_bpp', 0)) || 0;
    const income = numericValue(decValue(line, submitted, 'business_income', 0)) || 0;
    const extraExpense = numericValue(decValue(line, submitted, 'extra_expense', 0)) || 0;
    const tenantImprovements = numericValue(decValue(line, submitted, 'loc1_tenant_impr', 0)) || 0;
    const tiv = building + building2 + bpp + bpp2 + income + extraExpense + tenantImprovements;
    let rate = scenario.difficulty === 'hard' ? 0.0088 : scenario.difficulty === 'normal' ? 0.0072 : 0.0065;
    const sprinkler = canonicalAnswer(decValue(line, submitted, 'sprinkler', ''));
    if (sprinkler.includes('full')) rate *= 0.92;
    const lossCount = numericValue(decValue(line, submitted, 'num_losses', decValue(line, submitted, 'prior_losses', 0))) || 0;
    if (lossCount >= 1) rate *= 1 + Math.min(lossCount, 4) * 0.12;
    return Math.max(750, Math.round((tiv * rate) / 10) * 10);
  }
  if (line === 'Auto') {
    const vehicleCount = numericValue(decValue(line, submitted, 'num_vehicles', 1)) || (scenario.difficulty === 'hard' ? 12 : scenario.difficulty === 'normal' ? 6 : 2);
    const limit = numericValue(decValue(line, submitted, 'liability_limit', 1000000)) || 1000000;
    let premium = vehicleCount * (limit >= 1000000 ? 1280 : limit >= 500000 ? 980 : 720);
    const lossCount = numericValue(decValue(line, submitted, 'num_losses', decValue(line, submitted, 'prior_losses', 0))) || 0;
    premium *= 1 + Math.min(lossCount, 5) * 0.1;
    if (scenario.difficulty === 'hard') premium += numericValue(decValue(line, submitted, 'cargo_limit', 0)) * 0.012;
    if (canonicalAnswer(decValue(line, submitted, 'hired_nonowned', '')).startsWith('yes')) premium += 350;
    return Math.max(950, Math.round(premium / 10) * 10);
  }
  if (line === 'BOP') {
    const building = numericValue(decValue(line, submitted, 'bop_building_limit', 0)) || 0;
    const bpp = numericValue(decValue(line, submitted, 'bop_bpp_limit', 0)) || 0;
    const income = numericValue(decValue(line, submitted, 'bop_business_income', 0)) || 0;
    const revenue = numericValue(decValue(line, submitted, 'bop_annual_revenue', 0)) || 0;
    let premium = (building + bpp + income) * 0.006 + revenue * 0.004;
    if ((numericValue(decValue(line, submitted, 'g_num_losses', 0)) || 0) > 0) premium *= 1.15;
    return Math.max(600, Math.round(premium / 10) * 10);
  }
  if (line === 'Workers Compensation') {
    const payroll = numericValue(decValue(line, submitted, 'wc_annual_payroll', 0)) || 0;
    const mod = numericValue(decValue(line, submitted, 'wc_mod_factor', 1)) || 1;
    const classCode = compact(decValue(line, submitted, 'wc_class_code2', ''));
    let rate = classCode && classCode !== 'none' ? 0.021 : 0.012;
    let premium = payroll * rate * mod;
    const losses = numericValue(decValue(line, submitted, 'g_num_losses', 0)) || 0;
    premium *= 1 + Math.min(losses, 4) * 0.08;
    return Math.max(850, Math.round(premium / 10) * 10);
  }
  if (line === 'General Liability') {
    const revenue = numericValue(decValue(line, submitted, 'cgl_annual_revenue', 0)) || 0;
    const payroll = numericValue(decValue(line, submitted, 'cgl_payroll', 0)) || 0;
    const subs = numericValue(decValue(line, submitted, 'cgl_subcontractor_costs', 0)) || 0;
    const limit = numericValue(decValue(line, submitted, 'cgl_occurrence_limit', 1000000)) || 1000000;
    let premium = revenue * 0.0022 + payroll * 0.003 + subs * 0.006;
    if (limit > 1000000) premium *= 1.25;
    if ((numericValue(decValue(line, submitted, 'g_num_losses', 0)) || 0) > 0) premium *= 1.18;
    return Math.max(500, Math.round(premium / 10) * 10);
  }
  if (line === 'Umbrella') {
    const limit = numericValue(decValue(line, submitted, 'umb_limit', 1000000)) || 1000000;
    const underlyingPremium = numericValue(decValue(line, submitted, 'umb_underlying_expiring_premium', 0)) || 0;
    const vehicles = numericValue(decValue(line, submitted, 'umb_vehicle_count', 0)) || 0;
    let premium = underlyingPremium * 0.18 + (limit / 1000000) * 650 + vehicles * 85;
    if ((numericValue(decValue(line, submitted, 'g_num_losses', 0)) || 0) > 0) premium *= 1.2;
    return Math.max(750, Math.round(premium / 10) * 10);
  }
  return 1000;
}
function buildPropertyCoverages(submitted, scenario) {
  const hard = scenario.difficulty === 'hard';
  const rows = [];
  if (hard) {
    rows.push(['Building — Location 1', money(decValue('Property', submitted, 'loc1_building', 0)), decValue('Property', submitted, 'deductible')]);
    rows.push(['Business Personal Property — Location 1', money(decValue('Property', submitted, 'loc1_bpp', 0)), decValue('Property', submitted, 'deductible')]);
    rows.push(['Tenant Improvements — Location 1', money(decValue('Property', submitted, 'loc1_tenant_impr', 0)), decValue('Property', submitted, 'deductible')]);
    rows.push(['Building — Location 2', money(decValue('Property', submitted, 'loc2_building', 0)), decValue('Property', submitted, 'deductible')]);
    rows.push(['Business Personal Property — Location 2', money(decValue('Property', submitted, 'loc2_bpp', 0)), decValue('Property', submitted, 'deductible')]);
  } else {
    rows.push(['Building', money(decValue('Property', submitted, 'building_value', 0)), decValue('Property', submitted, 'deductible')]);
    rows.push(['Business Personal Property', money(decValue('Property', submitted, 'bpp_value', 0)), decValue('Property', submitted, 'deductible')]);
  }
  rows.push(['Business Income', money(decValue('Property', submitted, 'business_income', 0)), 'Waiting period applies']);
  const extra = numericValue(decValue('Property', submitted, 'extra_expense', 0)) || 0;
  if (extra) rows.push(['Extra Expense', money(extra), 'Included']);
  const wind = decValue('Property', submitted, 'wind_hail_ded', '—');
  if (wind !== '—') rows.push(['Wind / Hail Deductible', 'Applies by location', wind]);
  return rows;
}
function buildVehicleSchedule(submitted, scenario) {
  const count = numericValue(decValue('Auto', submitted, 'num_vehicles', scenario.difficulty === 'hard' ? 12 : scenario.difficulty === 'normal' ? 6 : 2)) || 0;
  const rows = [];
  for (let i = 1; i <= Math.min(count, 12); i++) {
    const year = submitted[`a_v${i}_year`] || '—';
    const make = submitted[`a_v${i}_make`] || '—';
    const model = submitted[`a_v${i}_model`] || '—';
    const vin = submitted[`a_v${i}_vin`] || '—';
    const type = submitted[`a_v${i}_type`] || 'Scheduled Auto';
    rows.push([String(i), `${year} ${make} ${model}`.replace(/—/g,'').trim() || 'Scheduled Fleet Unit', vin, type]);
  }
  return rows;
}
function buildAutoCoverages(submitted, scenario) {
  const rows = [
    ['Combined Single Limit Liability', money(decValue('Auto', submitted, 'liability_limit', 0)), 'Per accident'],
    ['Hired & Non-Owned Auto', decValue('Auto', submitted, 'hired_nonowned', '—'), 'Subject to form'],
  ];
  if (scenario.difficulty === 'hard') {
    rows.push(['Tractor Physical Damage Deductible', decValue('Auto', submitted, 'tractor_pd_ded', '—'), 'Per covered auto']);
    rows.push(['Trailer Physical Damage Deductible', decValue('Auto', submitted, 'trailer_pd_ded', '—'), 'Per covered auto']);
    rows.push(['Motor Truck Cargo', money(decValue('Auto', submitted, 'cargo_limit', 0)), `Deductible ${decValue('Auto', submitted, 'cargo_ded', '—')}`]);
    rows.push(['Trailer Interchange', decValue('Auto', submitted, 'trailer_interchange', '—'), `Limit ${money(decValue('Auto', submitted, 'trailer_int_limit', 0))}`]);
  } else if (scenario.difficulty === 'normal') {
    rows.push(['Fleet Physical Damage', decValue('Auto', submitted, 'pd_coverage', '—'), `Deductible ${decValue('Auto', submitted, 'pd_deductible', '—')}`]);
  } else {
    rows.push(['Vehicle 1 Physical Damage', decValue('Auto', submitted, 'v1_pd', '—'), `Deductible ${decValue('Auto', submitted, 'v1_ded', '—')}`]);
    rows.push(['Vehicle 2 Physical Damage', decValue('Auto', submitted, 'v2_pd', '—'), `Deductible ${decValue('Auto', submitted, 'v2_ded', '—')}`]);
  }
  return rows;
}
function buildGenericCoverages(line, submitted) {
  if (line === 'BOP') {
    return [
      ['Building', money(decValue(line, submitted, 'bop_building_limit', 0)), `Deductible ${decValue(line, submitted, 'bop_deductible', '—')}`],
      ['Business Personal Property', money(decValue(line, submitted, 'bop_bpp_limit', 0)), `Deductible ${decValue(line, submitted, 'bop_deductible', '—')}`],
      ['Business Income / Extra Expense', money(decValue(line, submitted, 'bop_business_income', 0)), 'Subject to policy period'],
      ['Business Liability', decValue(line, submitted, 'bop_gl_limit', '—'), 'Per occurrence / aggregate'],
    ];
  }
  if (line === 'Workers Compensation') {
    return [
      ['Workers Compensation', `State: ${decValue(line, submitted, 'wc_state', '—')}`, 'Statutory benefits apply'],
      ['Employers Liability', decValue(line, submitted, 'wc_policy_limit', '—'), 'Bodily injury by accident/disease'],
      ['Class Code 1', `${decValue(line, submitted, 'wc_class_code1', '—')} — ${decValue(line, submitted, 'wc_class_desc1', '—')}`, `Payroll ${money(decValue(line, submitted, 'wc_payroll1', 0))}`],
      ['Class Code 2', `${decValue(line, submitted, 'wc_class_code2', '—')} — ${decValue(line, submitted, 'wc_class_desc2', '—')}`, `Payroll ${money(decValue(line, submitted, 'wc_payroll2', 0))}`],
      ['Experience Mod', decValue(line, submitted, 'wc_mod_factor', '—'), `Total payroll ${money(decValue(line, submitted, 'wc_annual_payroll', 0))}`],
    ];
  }
  if (line === 'General Liability') {
    return [
      ['Each Occurrence', money(decValue(line, submitted, 'cgl_occurrence_limit', 0)), `Deductible/SIR ${money(decValue(line, submitted, 'cgl_deductible', 0))}`],
      ['General Aggregate', money(decValue(line, submitted, 'cgl_aggregate_limit', 0)), 'Policy aggregate'],
      ['Products / Completed Operations', decValue(line, submitted, 'cgl_products_completed', '—'), 'Subject to classification'],
      ['Medical Payments', money(decValue(line, submitted, 'cgl_med_pay', 0)), 'Per person'],
      ['Rating Exposure', decValue(line, submitted, 'cgl_exposure_basis', '—'), `Revenue ${money(decValue(line, submitted, 'cgl_annual_revenue', 0))}`],
    ];
  }
  if (line === 'Umbrella') {
    return [
      ['Commercial Umbrella Limit', money(decValue(line, submitted, 'umb_limit', 0)), `SIR ${money(decValue(line, submitted, 'umb_retention', 0))}`],
      ['Underlying GL', `${decValue(line, submitted, 'umb_gl_carrier', '—')} / ${decValue(line, submitted, 'umb_gl_policy', '—')}`, `${money(decValue(line, submitted, 'umb_gl_occurrence_limit', 0))} occ / ${money(decValue(line, submitted, 'umb_gl_aggregate_limit', 0))} agg`],
      ['Underlying Auto', `${decValue(line, submitted, 'umb_auto_carrier', '—')} / ${decValue(line, submitted, 'umb_auto_policy', '—')}`, `CSL ${decValue(line, submitted, 'umb_auto_limit', '—')}`],
      ['Underlying Employers Liability', decValue(line, submitted, 'umb_el_limit', '—'), 'Schedule must be verified'],
      ['Follow Form', decValue(line, submitted, 'umb_follow_form', '—'), 'Subject to exclusions'],
    ];
  }
  return [];
}
function formsForLine(line) {
  if (line === 'Property') return ['Common Policy Conditions', 'Commercial Property Coverage Form', 'Causes of Loss — Special Form', 'Business Income and Extra Expense'];
  if (line === 'Auto') return ['Business Auto Coverage Form', 'Covered Auto Symbols Schedule', 'Business Auto Conditions', 'State Uninsured Motorist Selection/Rejection Form'];
  if (line === 'BOP') return ['Businessowners Common Policy Conditions', 'Businessowners Coverage Form', 'Business Income and Extra Expense', 'Business Liability Conditions'];
  if (line === 'Workers Compensation') return ['Workers Compensation and Employers Liability Policy', 'Information Page', 'State-Specific Endorsements', 'Experience Rating Worksheet'];
  if (line === 'General Liability') return ['Commercial General Liability Coverage Form', 'CG 00 01', 'Additional Insured Schedule', 'Products/Completed Operations Schedule'];
  if (line === 'Umbrella') return ['Commercial Umbrella Liability Coverage Form', 'Underlying Insurance Schedule', 'Follow Form Excess Liability Endorsement', 'Self-Insured Retention Endorsement'];
  return ['Commercial Policy Training Form'];
}
function buildDeclarationData(scenario, submitted, score, result) {
  const line = scenario.line;
  const meta = policyMeta(line);
  const effective = addDays(new Date(), 14);
  const expiration = addDays(effective, 365);
  const premium = calculatePremium(line, scenario, submitted);
  const quoteSuffix = String(Date.now()).slice(-6);
  const namedInsured = decValue(line, submitted, 'g_applicant_name', decValue(line, submitted, 'applicant_name'));

  const isProperty = line === 'Property';
  const isAuto = line === 'Auto';
  const city = isProperty ? decValue(line, submitted, scenario.difficulty === 'hard' ? 'loc1_city' : 'address_city') : isAuto ? decValue(line, submitted, 'garage_city') : decValue(line, submitted, 'g_city');
  const state = stateLabel(isProperty ? decValue(line, submitted, scenario.difficulty === 'hard' ? 'loc1_state' : 'address_state') : isAuto ? decValue(line, submitted, 'garage_state') : decValue(line, submitted, 'g_state'));
  const zip = isProperty ? decValue(line, submitted, scenario.difficulty === 'hard' ? 'loc1_zip' : 'address_zip') : isAuto ? decValue(line, submitted, 'garage_zip') : decValue(line, submitted, 'g_zip');
  const street = isProperty ? decValue(line, submitted, scenario.difficulty === 'hard' ? 'loc1_street' : 'address_street') : isAuto ? decValue(line, submitted, 'garage_street') : decValue(line, submitted, 'g_street');

  let additionalInterests = [];
  if (isProperty) {
    additionalInterests = [decValue(line, submitted, scenario.difficulty === 'hard' ? 'mortgagee_loc1' : 'mortgagee_name'), decValue(line, submitted, 'loss_payee'), decValue(line, submitted, scenario.difficulty === 'hard' ? 'add_insured_1' : 'additional_insured')];
  } else if (isAuto) {
    additionalInterests = [decValue(line, submitted, scenario.difficulty === 'hard' ? 'add_insured_1' : 'additional_insured'), decValue(line, submitted, scenario.difficulty === 'hard' ? 'loss_payee_1' : 'loss_payee')];
  } else {
    additionalInterests = [decValue(line, submitted, 'g_mortgagee'), decValue(line, submitted, 'g_loss_payee'), decValue(line, submitted, 'g_additional_insured')];
  }
  additionalInterests = additionalInterests.filter(v => v && v !== '—' && canonicalAnswer(v) !== 'none');

  const coverages = isProperty ? buildPropertyCoverages(submitted, scenario) : isAuto ? buildAutoCoverages(submitted, scenario) : buildGenericCoverages(line, submitted);
  const sic = decValue(line, submitted, 'g_sic_code', decValue(line, submitted, 'sic_code'));
  const businessDescription = line === 'General Liability'
    ? decValue(line, submitted, 'cgl_business_description', `SIC ${sic} — ${meta.label} Risk`)
    : `SIC ${sic} — ${meta.label} Risk`;

  return {
    carrier: carrierNameForScenario(scenario),
    quoteNumber: `Q-${quoteCodeForLine(line)}-${quoteSuffix}`,
    policyNumber: `${quoteCodeForLine(line)}-${new Date().getFullYear()}-${quoteSuffix}`,
    status: result === 'Pass' ? 'Ready for Licensed Producer Review' : 'Correction Required Before Producer Review',
    binderStatus: 'Not Bound — Training Sample Only',
    namedInsured,
    dba: decValue(line, submitted, 'g_dba', decValue(line, submitted, 'dba', '')),
    mailingAddress: `${street}, ${city}, ${state} ${zip}`,
    businessDescription,
    policyPeriod: `${fmtFullDate(effective)} to ${fmtFullDate(expiration)}`,
    line,
    score,
    result,
    totalPremium: premium,
    fees: 125,
    taxes: Math.round(premium * 0.035),
    coverages,
    vehicles: isAuto ? buildVehicleSchedule(submitted, scenario) : [],
    additionalInterests,
    forms: formsForLine(line),
    reviewNotes: [
      'Sample declaration page generated for VA training only.',
      'Licensed producer must review coverage, eligibility, forms, and final premium before client release.',
      'This output is not a binder, proof of insurance, or legal policy document.'
    ]
  };
}
function renderDeclarationPage(attempt) {
  const d = attempt.declaration;
  if (!d) return '';
  const coverageRows = d.coverages.map(row => `<tr><td>${escHtml(row[0])}</td><td>${escHtml(row[1])}</td><td>${escHtml(row[2])}</td></tr>`).join('');
  const vehicleRows = d.vehicles.map(row => `<tr><td>${escHtml(row[0])}</td><td>${escHtml(row[1])}</td><td>${escHtml(row[2])}</td><td>${escHtml(row[3])}</td></tr>`).join('');
  return `
    <div class="declaration-shell">
      <div class="dec-watermark">SAMPLE TRAINING ONLY</div>
      <div class="dec-topline">
        <div>
          <div class="dec-carrier">${escHtml(d.carrier)}</div>
          <div class="dec-subtitle">${escHtml(d.line)} Coverage Declarations</div>
        </div>
        <div class="dec-status ${attempt.result === 'Pass' ? 'pass' : 'fail'}">${escHtml(d.status)}</div>
      </div>
      <div class="dec-grid">
        <div><span>Policy Number</span><strong>${escHtml(d.policyNumber)}</strong></div>
        <div><span>Quote Number</span><strong>${escHtml(d.quoteNumber)}</strong></div>
        <div><span>Policy Period</span><strong>${escHtml(d.policyPeriod)}</strong></div>
        <div><span>Binder Status</span><strong>${escHtml(d.binderStatus)}</strong></div>
      </div>
      <div class="dec-section two-col">
        <div>
          <h4>Named Insured</h4>
          <p><strong>${escHtml(d.namedInsured)}</strong>${d.dba ? `<br>DBA: ${escHtml(d.dba)}` : ''}<br>${escHtml(d.mailingAddress)}</p>
        </div>
        <div>
          <h4>Agency / Producer Review</h4>
          <p><strong>LAVA Training Agency</strong><br>Prepared by: ${escHtml(attempt.name)}<br>Authority: Data Entry Only</p>
        </div>
      </div>
      <div class="dec-section">
        <h4>Business Description</h4>
        <p>${escHtml(d.businessDescription)}</p>
      </div>
      <div class="dec-section">
        <h4>Coverage Schedule</h4>
        <table class="dec-table"><thead><tr><th>Coverage</th><th>Limit / Selection</th><th>Deductible / Notes</th></tr></thead><tbody>${coverageRows}</tbody></table>
      </div>
      ${d.line === 'Auto' && d.vehicles.length ? `<div class="dec-section"><h4>Scheduled Autos</h4><table class="dec-table"><thead><tr><th>#</th><th>Year / Make / Model</th><th>VIN</th><th>Type</th></tr></thead><tbody>${vehicleRows}</tbody></table></div>` : ''}
      <div class="dec-section two-col">
        <div>
          <h4>Additional Interests</h4>
          <p>${d.additionalInterests.length ? d.additionalInterests.map(escHtml).join('<br>') : 'None listed'}</p>
        </div>
        <div>
          <h4>Premium Summary</h4>
          <table class="dec-table compact"><tbody>
            <tr><td>Estimated Premium</td><td>${money(d.totalPremium)}</td></tr>
            <tr><td>Policy / Training Fee</td><td>${money(d.fees)}</td></tr>
            <tr><td>Estimated Taxes/Surcharges</td><td>${money(d.taxes)}</td></tr>
            <tr class="dec-total"><td>Total Estimated Cost</td><td>${money(d.totalPremium + d.fees + d.taxes)}</td></tr>
          </tbody></table>
        </div>
      </div>
      <div class="dec-section">
        <h4>Forms & Endorsements Included</h4>
        <p>${d.forms.map(escHtml).join(' · ')}</p>
      </div>
      <div class="dec-disclaimer">
        ${d.reviewNotes.map(n => `<div>• ${escHtml(n)}</div>`).join('')}
      </div>
    </div>`;
}

/* ── SUBMIT & GRADE ── */
function submitQuote() {
  stopTimer();
  const scenario = state.currentScenario;
  const correct = scenario.correctAnswers;
  const submitted = state.formData;

  let totalFields = Object.keys(correct).length;
  let correctCount = 0;
  const fieldResults = [];

  Object.entries(correct).forEach(([key, correctVal]) => {
    const formKey = fieldKeyForAnswer(key, state.currentLine);
    const submittedVal = submittedValueForAnswer(key, state.currentLine, submitted);
    const isCorrect = answersMatch(submittedVal, String(correctVal));
    if (isCorrect) correctCount++;
    fieldResults.push({
      key,
      formKey,
      label: formatFieldLabel(key),
      submitted: submittedVal,
      correct: correctVal,
      isCorrect,
    });
  });

  const score = Math.round((correctCount / totalFields) * 100);
  const result = score >= PASSING_SCORE ? 'Pass' : 'Fail';

  const declaration = buildDeclarationData(scenario, submitted, score, result);

  const attempt = {
    id: `att-${Date.now()}`,
    name: state.trainee.name,
    email: state.trainee.email,
    scenarioId: scenario.id,
    scenarioName: scenario.name,
    line: state.currentLine,
    difficulty: scenario.difficulty,
    score,
    result,
    date: new Date().toISOString(),
    timeSecs: state.timerSeconds,
    fieldResults,
    totalFields,
    correctCount,
    submittedData: submitted,
    declaration,
  };

  const attempts = loadAttempts();
  attempts.push(attempt);
  saveAttempts(attempts);

  showResults(attempt);
  navigate('results');
}

/* ── RESULTS ── */
function showResults(attempt) {
  const isPassed = attempt.result === 'Pass';
  const wrongFields = attempt.fieldResults.filter(f => !f.isCorrect);
  const correctFields = attempt.fieldResults.filter(f => f.isCorrect);

  $('results-content').innerHTML = `
    <div class="results-header-box ${isPassed ? 'pass' : 'fail'}">
      <div class="results-icon">${isPassed ? '✓' : '✗'}</div>
      <div class="results-verdict">${isPassed ? 'PASSED' : 'FAILED'}</div>
      <div class="results-score-big">${attempt.score}%</div>
      <div class="results-score-label">${attempt.correctCount} of ${attempt.totalFields} fields correct · Passing score: ${PASSING_SCORE}%</div>
    </div>
    <div class="results-meta-grid">
      <div class="results-meta-card"><div class="meta-label">Trainee</div><div class="meta-val">${escHtml(attempt.name)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Email</div><div class="meta-val">${escHtml(attempt.email)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Line of Business</div><div class="meta-val">${escHtml(attempt.line)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Scenario</div><div class="meta-val">${escHtml(attempt.scenarioName)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Difficulty</div><div class="meta-val">${attempt.difficulty.charAt(0).toUpperCase() + attempt.difficulty.slice(1)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Date</div><div class="meta-val">${fmtDate(attempt.date)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Time Spent</div><div class="meta-val">${fmtTimeMin(attempt.timeSecs)}</div></div>
      <div class="results-meta-card"><div class="meta-label">Score</div><div class="meta-val">${attempt.score}% (${attempt.result})</div></div>
    </div>
    ${attempt.declaration ? renderDeclarationPage(attempt) : ''}
    ${wrongFields.length > 0 ? `
    <div class="results-section-card">
      <div class="rsc-header">⚠ Missed Fields (${wrongFields.length})</div>
      <div class="rsc-body">
        ${wrongFields.map(f => `
          <div class="result-field-row wrong">
            <div class="rf-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
            <div class="rf-answer">
              <div class="rf-label">${escHtml(f.label)}</div>
              <div class="rf-submitted">Your answer: <strong>${escHtml(f.submitted || '(blank)')}</strong></div>
              <div class="rf-wrong-detail">Correct answer: ${escHtml(String(f.correct))}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>` : ''}
    <div class="results-section-card">
      <div class="rsc-header">✓ Correct Fields (${correctFields.length})</div>
      <div class="rsc-body">
        ${correctFields.map(f => `
          <div class="result-field-row correct">
            <div class="rf-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg></div>
            <div class="rf-answer">
              <div class="rf-label">${escHtml(f.label)}</div>
              <div class="rf-submitted">${escHtml(String(f.correct))}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <div class="results-actions">
      <button class="btn btn-outline" onclick="retryScenario()">↺ Retry This Scenario</button>
      <button class="btn btn-primary" onclick="navigate('${policySelectRoute(attempt.line)}')">Try Another Scenario</button>
      <button class="btn btn-success" onclick="printResults()">Print / Export Results + Dec Page</button>
    </div>`;
}

function retryScenario() {
  if (state.currentScenario) startScenario(state.currentScenario.id);
}
function printResults() { window.print(); }

window.showResultDetail = function(attemptId) {
  const attempts = loadAttempts();
  const attempt = attempts.find(a => a.id === attemptId);
  if (!attempt) return;
  showResults(attempt);
  navigate('results');
};

/* ── HISTORY ── */
function renderHistory() {
  const myAttempts = loadAttempts()
    .filter(a => a.email === state.trainee.email)
    .slice().reverse();

  const tbody = $('history-tbody');
  const empty = $('history-empty');

  if (myAttempts.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  tbody.innerHTML = myAttempts.map(a => `
    <tr>
      <td>${fmtDate(a.date)}</td>
      <td><span class="badge ${policyBadgeClass(a.line)}">${escHtml(a.line)}</span></td>
      <td>${escHtml(a.scenarioName.replace(/^(Easy|Normal|Hard) — /, ''))}</td>
      <td><span class="badge ${a.difficulty}">${a.difficulty.charAt(0).toUpperCase() + a.difficulty.slice(1)}</span></td>
      <td><strong>${a.score}%</strong></td>
      <td><span class="badge ${a.result === 'Pass' ? 'pass' : 'fail'}">${a.result}</span></td>
      <td>${fmtTimeMin(a.timeSecs)}</td>
      <td><button class="btn btn-sm btn-outline" onclick="showResultDetail('${a.id}')">View</button></td>
    </tr>`).join('');
}

/* ── ADMIN ── */
function renderAdmin() {
  filterAdmin();
}

function filterAdmin() {
  const search = ($('admin-search').value || '').toLowerCase();
  const line = $('admin-filter-line').value;
  const resultFilter = $('admin-filter-result').value;

  let attempts = loadAttempts();

  if (search) attempts = attempts.filter(a =>
    a.name.toLowerCase().includes(search) ||
    a.email.toLowerCase().includes(search) ||
    a.scenarioName.toLowerCase().includes(search));
  if (line) attempts = attempts.filter(a => a.line === line);
  if (resultFilter) attempts = attempts.filter(a => a.result === resultFilter);

  attempts = attempts.slice().reverse();

  const tbody = $('admin-tbody');
  const empty = $('admin-empty');

  if (attempts.length === 0) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  tbody.innerHTML = attempts.map(a => `
    <tr>
      <td>${escHtml(a.name)}</td>
      <td>${escHtml(a.email)}</td>
      <td><span class="badge ${policyBadgeClass(a.line)}">${escHtml(a.line)}</span></td>
      <td>${escHtml(a.scenarioName.replace(/^(Easy|Normal|Hard) — /, ''))}</td>
      <td><span class="badge ${a.difficulty}">${a.difficulty.charAt(0).toUpperCase() + a.difficulty.slice(1)}</span></td>
      <td><strong>${a.score}%</strong></td>
      <td><span class="badge ${a.result === 'Pass' ? 'pass' : 'fail'}">${a.result}</span></td>
      <td>${fmtDate(a.date)}</td>
      <td>${fmtTimeMin(a.timeSecs)}</td>
    </tr>`).join('');
}

/* ── FORMAT FIELD LABELS ── */
function formatFieldLabel(key) {
  return key
    .replace(/^(p|a|g|bop|wc|cgl|umb)_/, '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\bBpp\b/, 'BPP')
    .replace(/\bFein\b/, 'FEIN')
    .replace(/\bSic\b/, 'SIC')
    .replace(/\bVin\b/, 'VIN')
    .replace(/\bMvr\b/, 'MVR')
    .replace(/\bDob\b/, 'Date of Birth')
    .replace(/\bDl\b/, 'License #')
    .replace(/\bPd\b/, 'Physical Damage')
    .replace(/\bDed\b/, 'Deductible')
    .replace(/Loc(\d)/, 'Location $1')
    .replace(/V(\d+)/, 'Vehicle $1')
    .replace(/D(\d+)/, 'Driver $1')
    .replace(/Sqft/, 'Sq Ft')
    .replace(/Pc/, 'Protection Class')
    .replace(/Num/, '#')
    .trim();
}

/* ── US STATES ── */
const US_STATES = [
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' },
];

/* ── INIT ── */
function init() {
  // Theme
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
  applyTheme(savedTheme === 'dark');

  $('theme-toggle').addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(!isDark);
  });

  // Sidebar toggle
  $('sidebar-toggle').addEventListener('click', () => {
    $('sidebar').classList.toggle('collapsed');
  });

  // Logout
  $('logout-btn').addEventListener('click', () => {
    showModal('Confirm Logout', 'Are you sure you want to log out? Your progress is saved.', [
      { label: 'Cancel', cls: 'btn-outline' },
      { label: 'Logout', cls: 'btn-danger', action: () => {
        stopTimer();
        localStorage.removeItem(STORAGE_KEY_TRAINEE);
        state.trainee = null;
        $('page-app').classList.remove('active');
        $('page-login').classList.add('active');
        $('login-name').value = '';
        $('login-email').value = '';
      }},
    ]);
  });

  // Nav items
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      navigate(item.dataset.page);
    });
  });

  // Dashboard quick links
  $('dash-property-btn').addEventListener('click', () => navigate('property-select'));
  $('dash-bop-btn')?.addEventListener('click', () => navigate('bop-select'));
  $('dash-wc-btn')?.addEventListener('click', () => navigate('wc-select'));
  $('dash-cgl-btn')?.addEventListener('click', () => navigate('cgl-select'));
  $('dash-umbrella-btn')?.addEventListener('click', () => navigate('umbrella-select'));
  $('dash-auto-btn').addEventListener('click', () => navigate('auto-select'));

  // Recent activity link (in dashboard)
  document.querySelectorAll('.link[data-page]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.page); });
  });

  // Admin filters
  $('admin-search').addEventListener('input', filterAdmin);
  $('admin-filter-line').addEventListener('change', filterAdmin);
  $('admin-filter-result').addEventListener('change', filterAdmin);
  $('admin-clear-btn').addEventListener('click', () => {
    showModal('Clear All Training Data', 'This will permanently delete ALL training data from all trainees. This cannot be undone.', [
      { label: 'Cancel', cls: 'btn-outline' },
      { label: 'Clear All', cls: 'btn-danger', action: () => {
        localStorage.removeItem(STORAGE_KEY_ATTEMPTS);
        renderAdmin();
        refreshDashboard();
      }},
    ]);
  });

  // Modal close on overlay click
  $('modal-overlay').addEventListener('click', e => {
    if (e.target === $('modal-overlay')) hideModal();
  });

  // Login listener. Always show the branded login landing page on initial load.
  // This prevents the dashboard/sidebar from appearing before the VA signs in.
  initLogin();
  stopTimer();
  state.trainee = null;
  localStorage.removeItem(STORAGE_KEY_TRAINEE);
  $('page-app').classList.remove('active');
  $('page-login').classList.add('active');
}


document.addEventListener('DOMContentLoaded', init);
