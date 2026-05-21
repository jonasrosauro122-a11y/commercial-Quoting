# LAVA Commercial Insurance Training Portal

A realistic carrier portal simulator for training Virtual Assistants on Commercial Property and Commercial Auto insurance quoting workflows.

## Features

- **6 Scenarios** — 3 Commercial Property + 3 Commercial Auto (Easy / Normal / Hard)
- **Multi-step quote forms** — Mirrors real carrier portal workflows
- **Auto-grading system** — Compare VA answers to correct scenario data, score ≥90% to pass
- **Timer** — Tracks time spent per simulation
- **Results page** — Detailed pass/fail report with field-by-field breakdown
- **Trainer Dashboard** — View all VA attempts, search/filter, export-ready
- **Dark / Light mode toggle**
- **LocalStorage persistence** — All data saves in the browser

## Usage

### Run Locally
Open `index.html` directly in any modern browser. No build tools required.

### Deploy to Netlify

**Option 1 — Drag & Drop:**
1. Zip the entire project folder
2. Go to [netlify.com](https://netlify.com) → New site → Deploy manually
3. Drag and drop the zip

**Option 2 — GitHub + Netlify:**
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select your repo
4. Set **Publish directory** to `.` (the root)
5. Click Deploy

No build command is needed. The `netlify.toml` handles routing.

## Folder Structure

```
/
├── index.html              ← Main app entry point
├── netlify.toml            ← Netlify deployment config
├── css/
│   └── styles.css          ← All portal styles
├── js/
│   ├── scenarios.js        ← All scenario data & correct answers
│   └── app.js              ← Full SPA application logic
├── images/
│   └── favicon.svg         ← Portal favicon
└── README.md
```

## Scenarios

### Commercial Property
| # | Name | Difficulty | Fields |
|---|------|-----------|--------|
| 1 | Riverside Bakery | Easy | 25 |
| 2 | Greenfield Auto Parts | Normal | 30 |
| 3 | Crestwood Medical Supply | Hard | 38 |

### Commercial Auto
| # | Name | Difficulty | Fields |
|---|------|-----------|--------|
| 1 | Sunrise Landscaping | Easy | 22 |
| 2 | Harmon Plumbing & HVAC | Normal | 32 |
| 3 | Apex Regional Freight | Hard | 45 |

## Passing Score
**90%** — Trainees must get 90% or more of all fields correct to pass.

## Login Requirements
- Full name required
- Email must end with `@lavatraining.com`

## Notes
- All data is stored in `localStorage` — no backend required
- Trainer Dashboard shows all attempts across all trainees on the same device/browser
- Use "Clear All Data" button in Trainer Dashboard to reset
