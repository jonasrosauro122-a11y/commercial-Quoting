# LAVA Commercial Insurance Training Portal

A realistic carrier-style quoting simulator for Commercial Property, BOP, Workers Compensation, Commercial General Liability, Commercial Umbrella, and Commercial Auto VA training. This version includes shared data storage, role-based access, trainer review notes, accuracy grading, and sample Declaration Page generation.

## Latest Updates

- Added shared database-ready login and quote output storage.
- Added separate **VA Login** and **Trainer / Team Lead Login**.
- Trainer / Team Lead login uses the code: `LAVA2026!`.
- Dashboard includes a shared **VA Login Board** so everyone can see which VAs have logged in and run quotes.
- Trainer Dashboard is visible only after Trainer / Team Lead login.
- Trainers and Team Leads can open VA quote outputs and add coaching notes for what the VA needs to improve.
- Quote attempts continue to save locally as a fallback if the database keys are not configured yet.
- No visible website label or watermark says the site is connected to the database.

## Supabase Setup

1. Create a Supabase project.
2. Open **SQL Editor**.
3. Run the full script in `supabase_setup.sql`.
4. Open `js/supabase-config.js`.
5. Replace these placeholders:

```js
window.LAVA_SUPABASE = {
  url: 'YOUR_PROJECT_URL_HERE',
  anonKey: 'YOUR_ANON_PUBLIC_KEY_HERE',
};
```

Use your Project URL and anon/public key from Supabase Project Settings > API.

## Main Files to Edit

```text
index.html                Login layout, dashboard sections, tables
css/styles.css            Branding, login design, dashboard styling
js/app.js                 Login logic, database sync, grading, reviews, declaration download
js/scenarios.js           Scenario content and answer keys
js/supabase-config.js     Supabase project URL and anon key
supabase_setup.sql        Supabase tables, policies, and functions
```

## Features

- 18 scenarios total:
  - 3 Commercial Property scenarios: Easy / Normal / Hard
  - 3 Business Owner's Policy scenarios: Easy / Normal / Hard
  - 3 Workers Compensation scenarios: Easy / Normal / Hard
  - 3 Commercial General Liability scenarios: Easy / Normal / Hard
  - 3 Commercial Umbrella scenarios: Easy / Normal / Hard
  - 3 Commercial Auto scenarios: Easy / Normal / Hard
- Multi-step quoting forms
- Scenario print/download packets
- Auto-grading system with field-by-field feedback
- Passing score: **90%**
- Timer per quote simulation
- My History page for each VA
- Trainer Dashboard for quote review
- Trainer coaching notes and review status
- Sample Declaration Page generator
- Declaration Page print/save and download
- Dark / Light mode toggle
- Netlify-ready static deployment

## Deploy to Netlify via GitHub

1. Upload all files to GitHub.
2. In Netlify, choose **New site from Git**.
3. Select the repository.
4. Build command: `npm run build`
5. Publish directory: `.`
6. Deploy.

## Login Requirement

All users must enter a full name and a `@lavatraining.com` email address.

Trainer / Team Lead access requires the trainer code.

## Training Note

This is a training simulator only. The generated Declaration Page is a sample document for practice and should not be treated as a binder, proof of insurance, final policy, or client-ready document. A licensed producer must review any real quote, coverage selection, eligibility decision, or policy document before client release.
