/* ============================================================
   LAVA Commercial Insurance Training Portal — app.js
   ============================================================ */
'use strict';

/* ── CONSTANTS ── */
const PASSING_SCORE = 90;
const STORAGE_KEY_TRAINEE = 'lava_trainee';
const STORAGE_KEY_ATTEMPTS = 'lava_attempts';
const STORAGE_KEY_THEME = 'lava_theme';

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
  return String(v || '').trim().toLowerCase().replace(/[$,\s]/g, '').replace(/[()]/g, '');
}
function answersMatch(submitted, correct) {
  const s = normalize(submitted);
  const c = normalize(correct);
  return s === c || s.includes(c) || c.includes(s);
}

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
    'property-quote': 'sec-property-quote',
    'auto-quote': 'sec-auto-quote',
    results: 'sec-results',
    history: 'sec-history',
    admin: 'sec-admin',
  };
  const breadcrumbs = {
    dashboard: 'Dashboard',
    'property-select': 'Commercial Property — Select Scenario',
    'auto-select': 'Commercial Auto — Select Scenario',
    'property-quote': 'Commercial Property — Quote Form',
    'auto-quote': 'Commercial Auto — Quote Form',
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
function renderScenarioGrid(containerId, scenarios) {
  const container = $(containerId);
  container.innerHTML = scenarios.map(s => `
    <div class="scenario-card ${s.difficulty}" onclick="startScenario('${s.id}')">
      <div class="scenario-card-top">
        <span class="badge ${s.difficulty}">${s.difficulty.charAt(0).toUpperCase() + s.difficulty.slice(1)}</span>
        <span class="badge ${s.line === 'Property' ? 'property' : 'auto'}">${s.line}</span>
      </div>
      <div class="scenario-card-name">${escHtml(s.name.replace(/^(Easy|Normal|Hard) — /, ''))}</div>
      <div class="scenario-card-desc">${escHtml(s.description)}</div>
      <div class="scenario-card-meta">
        <span>📋 ${s.fields} fields</span>
        <span>⏱ ${s.timeEstimate}</span>
      </div>
      <button class="scenario-card-action" onclick="event.stopPropagation();startScenario('${s.id}')">Start Simulation →</button>
    </div>`).join('');
}
function renderPropertyScenarios() { renderScenarioGrid('property-scenario-grid', window.SCENARIOS.property); }
function renderAutoScenarios() { renderScenarioGrid('auto-scenario-grid', window.SCENARIOS.auto); }

/* ── START SCENARIO ── */
function startScenario(id) {
  const allScenarios = [...window.SCENARIOS.property, ...window.SCENARIOS.auto];
  const scenario = allScenarios.find(s => s.id === id);
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
  } else {
    buildAutoForm(scenario);
    navigate('auto-quote');
    startTimer('auto-timer');
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

/* ── PROPERTY FORM ── */
function buildPropertyForm(scenario) {
  const prefix = 'prop';
  $(`${prefix}-quote-title`).textContent = `Commercial Property — ${scenario.name}`;
  $(`${prefix}-scenario-label`).textContent = `${scenario.difficulty.toUpperCase()} · ${scenario.line}`;

  // Brief
  const b = scenario.brief;
  $(`${prefix}-scenario-brief`).innerHTML = `
    <h3>${escHtml(b.title)}</h3>
    <div class="brief-grid">${b.items.map(it =>
      `<div class="brief-item"><span class="brief-label">${escHtml(it.label)}</span><span class="brief-val">${escHtml(it.value)}</span></div>`
    ).join('')}</div>
    ${b.distractors.length > 0 ? `<div class="brief-distractor"><strong>⚠ Attention:</strong> ${b.distractors.map(d => escHtml(d)).join('<br>')}</div>` : ''}`;

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
  $(`${prefix}-scenario-brief`).innerHTML = `
    <h3>${escHtml(b.title)}</h3>
    <div class="brief-grid">${b.items.map(it =>
      `<div class="brief-item"><span class="brief-label">${escHtml(it.label)}</span><span class="brief-val">${escHtml(it.value)}</span></div>`
    ).join('')}</div>
    ${b.distractors.length > 0 ? `<div class="brief-distractor"><strong>⚠ Attention:</strong> ${b.distractors.map(d => escHtml(d)).join('<br>')}</div>` : ''}`;

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
      `<p class="form-section-desc">Enter details for all ${numVehicles} vehicles listed in the scenario.</p>
      ${isHard ? `<div class="form-row">${selectField('a_num_tractors','Number of Tractors',['1','2','3','4','5','6','7','8'],true)}
      ${selectField('a_num_trailers','Number of Trailers',['1','2','3','4','5','6','7','8'],true)}</div>` : ''}
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
        `${selectField('a_pd_coverage','Physical Damage',['Comp and Collision','Comp Only','Collision Only','None'],true)}
        ${selectField('a_pd_deductible','Deductible ($)',['250','500','1000','2500','5000'],true)}`}
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
        ${textField(`a_d${i}_exp`, 'Years of Driving Experience', 'e.g. 5', true)}</div>
        ${selectField(`a_d${i}_mvr`, 'MVR Status', ['Clean','1 Violation','2 Violations','3+ Violations','At-fault Accident','DUI/DWI'], true)}
        <div id="d${i}-violation-fields"></div>
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

/* ── FORM NAV (NEXT / PREV) ── */
function setupFormNav(prefix) {
  const nextBtn = $(`${prefix}-next-btn`);
  const prevBtn = $(`${prefix}-prev-btn`);
  const submitBtn = $(`${prefix}-submit-btn`);
  const form = $(`${prefix}-quote-form`);

  state.currentStep = 0;
  updateStepView(prefix);

  nextBtn.onclick = () => {
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
    const formKey = key.startsWith('p_') || key.startsWith('a_') ? key :
      (state.currentLine === 'Property' ? `p_${key}` : `a_${key}`);
    const submittedVal = submitted[formKey] || submitted[key] || '';
    const isCorrect = answersMatch(submittedVal, String(correctVal));
    if (isCorrect) correctCount++;
    fieldResults.push({
      key,
      label: formatFieldLabel(key),
      submitted: submittedVal,
      correct: correctVal,
      isCorrect,
    });
  });

  const score = Math.round((correctCount / totalFields) * 100);
  const result = score >= PASSING_SCORE ? 'Pass' : 'Fail';

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
      <button class="btn btn-primary" onclick="navigate('${attempt.line === 'Property' ? 'property-select' : 'auto-select'}')">Try Another Scenario</button>
      <button class="btn btn-success" onclick="printResults()">Print / Export</button>
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
      <td><span class="badge ${a.line === 'Property' ? 'property' : 'auto'}">${escHtml(a.line)}</span></td>
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
      <td><span class="badge ${a.line === 'Property' ? 'property' : 'auto'}">${escHtml(a.line)}</span></td>
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
    .replace(/^[pa]_/, '')
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

  // Check for saved session
  const saved = loadTrainee();
  if (saved) {
    state.trainee = saved;
    bootApp();
  } else {
    initLogin();
  }
}

document.addEventListener('DOMContentLoaded', init);
