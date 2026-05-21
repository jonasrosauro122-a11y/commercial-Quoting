# LAVA Commercial Insurance Training Portal

A realistic carrier-style quoting simulator for Commercial Property, BOP, Workers Compensation, Commercial General Liability, Commercial Umbrella, and Commercial Auto VA training. This version focuses on accuracy, attention to detail, non-licensed VA boundaries, trainer grading, and sample Declaration Page generation.

## New / Improved Features

- **Realistic carrier workflow feel** with submission status, carrier name, target effective date, and quote-entry authority reminders.
- **Non-licensed VA compliance reminder** on every quote scenario: data entry only, no binding, no coverage advice, and licensed producer review required.
- **Sample Declaration Page generator** after quote submission.
  - Policy number / quote number
  - Named insured and mailing / garaging address
  - Policy period
  - Coverage schedule
  - Additional interests
  - Premium summary
  - Sample-only watermark and disclaimer
- **Better accuracy grading** with corrected answer-key mapping so correct VA entries are graded properly.
- **Stronger attention-to-detail validation** before moving through quote steps.
  - Required field guardrails
  - VIN length check
  - FEIN format check
  - 4-digit year check
- **Expanded commercial policy training lines** for BOP, Workers Compensation, Commercial General Liability, and Commercial Umbrella.
- **More realistic Commercial Auto physical damage workflow**, including separate vehicle physical damage selections for the easy scenario.
- **Driver license class and violation-year fields** for more realistic commercial auto data entry.
- **Printable results + Declaration Page** using the browser print/export option.
- **Fixed favicon build issue** so Netlify build validation passes.

## Features

- 18 scenarios total:
  - 3 Commercial Property scenarios: Easy / Normal / Hard
  - 3 Business Owner's Policy scenarios: Easy / Normal / Hard
  - 3 Workers Compensation scenarios: Easy / Normal / Hard
  - 3 Commercial General Liability scenarios: Easy / Normal / Hard
  - 3 Commercial Umbrella scenarios: Easy / Normal / Hard
  - 3 Commercial Auto scenarios: Easy / Normal / Hard
- Multi-step quoting forms
- Auto-grading system with field-by-field feedback
- Passing score: **90%**
- Timer per quote simulation
- My History page
- Trainer Dashboard with all attempts saved in browser localStorage
- Dark / Light mode toggle
- Netlify-ready static deployment

## Usage

### Run Locally

Open `index.html` directly in a modern browser.

### Deploy to Netlify via Drag and Drop

1. Zip the full project folder.
2. Go to Netlify.
3. Create a new manual deploy site.
4. Drag and drop the zip file.

### Deploy to Netlify via GitHub

1. Upload all files to GitHub.
2. In Netlify, choose **New site from Git**.
3. Select the repository.
4. Build command: `npm run build`
5. Publish directory: `.`
6. Deploy.

## Folder Structure

```text
/
├── index.html
├── netlify.toml
├── package.json
├── build-check.js
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── scenarios.js
│   └── endorsements.js
└── images/
    └── favicon.svg
```

## Login Requirement

The simulator requires a full name and a `@lavatraining.com` email address.

## Training Note

This is a training simulator only. The generated Declaration Page is a sample document for practice and should not be treated as a binder, proof of insurance, final policy, or client-ready document. A licensed producer must review any real quote, coverage selection, eligibility decision, or policy document before client release.
