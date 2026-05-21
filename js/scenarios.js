/* ============================================================
   LAVA Training Portal — Scenarios Data (js/scenarios.js)
   ============================================================ */

window.SCENARIOS = {
  property: [
    /* ─── EASY ─── */
    {
      id: 'prop-easy-1',
      line: 'Property',
      difficulty: 'easy',
      name: 'Easy — Riverside Bakery',
      description: 'A small single-location retail bakery applying for commercial property coverage for the first time. Straightforward construction, recent build, no prior losses.',
      fields: 25,
      timeEstimate: '10–15 min',
      brief: {
        title: 'Client Intake Sheet — Riverside Bakery',
        items: [
          { label: 'Business Name', value: 'Riverside Bakery LLC' },
          { label: 'Contact', value: 'Maria Gonzalez, Owner' },
          { label: 'Phone', value: '(713) 555-0182' },
          { label: 'Business Email', value: 'mgonzalez@riversidebakery.com' },
          { label: 'Website', value: 'www.riversidebakery.com' },
          { label: 'Years in Business', value: '3 years' },
          { label: 'FEIN', value: '82-4517203' },
          { label: 'Legal Entity', value: 'LLC' },
          { label: 'SIC Code', value: '5461 — Retail Bakeries' },
          { label: 'Property Address', value: '4410 Westheimer Rd, Houston, TX 77027' },
          { label: 'Year Built', value: '2019' },
          { label: 'Construction Type', value: 'Frame' },
          { label: 'Square Footage', value: '2,400 sq ft' },
          { label: 'Number of Stories', value: '1' },
          { label: 'Roof Type', value: 'Flat / Built-Up' },
          { label: 'Roof Age', value: '5 years' },
          { label: 'Protection Class', value: '3' },
          { label: 'Sprinkler System', value: 'None' },
          { label: 'Central Fire Alarm', value: 'Yes — Monitored' },
          { label: 'Central Burglar Alarm', value: 'Yes — Monitored' },
          { label: 'Building Value', value: '$425,000' },
          { label: 'BPP Value', value: '$85,000' },
          { label: 'Business Income Limit', value: '$50,000' },
          { label: 'Deductible', value: '$1,000' },
          { label: 'Prior Losses (3 yr)', value: 'None' },
          { label: 'Mortgagee', value: 'Wells Fargo Bank NA — Loan #TX-20191104' },
          { label: 'Additional Interest', value: 'None' },
          { label: 'Occupancy', value: '100% Insured' },
        ],
        distractors: [
          'The client mentioned their cousin owns a catering truck — NOT part of this submission.',
          'Client asked about flood coverage — advise NFIP separately; do NOT include here.',
        ]
      },
      correctAnswers: {
        applicant_name: 'Riverside Bakery LLC',
        contact_name: 'Maria Gonzalez',
        phone: '(713) 555-0182',
        email: 'mgonzalez@riversidebakery.com',
        fein: '82-4517203',
        entity_type: 'LLC',
        sic_code: '5461',
        years_in_business: '3',
        address_street: '4410 Westheimer Rd',
        address_city: 'Houston',
        address_state: 'TX',
        address_zip: '77027',
        year_built: '2019',
        construction_type: 'Frame',
        square_footage: '2400',
        num_stories: '1',
        roof_type: 'Flat / Built-Up',
        roof_age: '5',
        protection_class: '3',
        sprinkler: 'None',
        fire_alarm: 'Central Monitored',
        burglar_alarm: 'Central Monitored',
        building_value: '425000',
        bpp_value: '85000',
        business_income: '50000',
        deductible: '1000',
        prior_losses: 'None',
        mortgagee_name: 'Wells Fargo Bank NA',
        mortgagee_loan: 'TX-20191104',
        occupancy_pct: '100',
      }
    },

    /* ─── NORMAL ─── */
    {
      id: 'prop-normal-1',
      line: 'Property',
      difficulty: 'normal',
      name: 'Normal — Greenfield Auto Parts',
      description: 'A mid-size auto parts retailer with a warehouse component. Two-story masonry building, minor prior loss, and additional insured requirements.',
      fields: 30,
      timeEstimate: '15–20 min',
      brief: {
        title: 'Client Intake Sheet — Greenfield Auto Parts',
        items: [
          { label: 'Business Name', value: 'Greenfield Auto Parts Inc.' },
          { label: 'Contact', value: 'Derek Simmons, CFO' },
          { label: 'Phone', value: '(404) 555-0347' },
          { label: 'Business Email', value: 'dsimmons@greenfieldauto.net' },
          { label: 'FEIN', value: '58-2093714' },
          { label: 'Legal Entity', value: 'Corporation (Inc.)' },
          { label: 'SIC Code', value: '5013 — Motor Vehicle Supplies & Parts' },
          { label: 'Years in Business', value: '11 years' },
          { label: 'Property Address', value: '2875 Peachtree Industrial Blvd, Duluth, GA 30097' },
          { label: 'Year Built', value: '2005' },
          { label: 'Construction Type', value: 'Joisted Masonry' },
          { label: 'Square Footage', value: '14,500 sq ft' },
          { label: 'Number of Stories', value: '2' },
          { label: 'Roof Type', value: 'Metal' },
          { label: 'Roof Age', value: '8 years' },
          { label: 'Protection Class', value: '5' },
          { label: 'Sprinkler System', value: 'Wet Pipe — Full' },
          { label: 'Central Fire Alarm', value: 'Yes — Monitored' },
          { label: 'Central Burglar Alarm', value: 'No' },
          { label: 'Building Value', value: '$1,250,000' },
          { label: 'BPP Value', value: '$380,000' },
          { label: 'Business Income Limit', value: '$200,000' },
          { label: 'Extra Expense', value: '$25,000' },
          { label: 'Deductible', value: '$2,500' },
          { label: 'Prior Losses (3 yr)', value: '1 loss — 2022, Water Damage, $8,400 paid' },
          { label: 'Mortgagee', value: 'SunTrust Mortgage — Loan #GA-050522' },
          { label: 'Loss Payee', value: 'Caterpillar Financial Services' },
          { label: 'Additional Insured', value: 'Peachtree Industrial Park LLC (Landlord)' },
          { label: 'Occupancy', value: '100% Insured' },
          { label: 'Seasonal Increase', value: 'None' },
        ],
        distractors: [
          'The CFO mentioned they have a 2nd location in Marietta — that location is NOT part of this submission.',
          'They inquired about an umbrella policy — do NOT include umbrella in this quote.',
          'A separate equipment breakdown endorsement is being quoted by a different department.',
        ]
      },
      correctAnswers: {
        applicant_name: 'Greenfield Auto Parts Inc.',
        contact_name: 'Derek Simmons',
        phone: '(404) 555-0347',
        email: 'dsimmons@greenfieldauto.net',
        fein: '58-2093714',
        entity_type: 'Corporation',
        sic_code: '5013',
        years_in_business: '11',
        address_street: '2875 Peachtree Industrial Blvd',
        address_city: 'Duluth',
        address_state: 'GA',
        address_zip: '30097',
        year_built: '2005',
        construction_type: 'Joisted Masonry',
        square_footage: '14500',
        num_stories: '2',
        roof_type: 'Metal',
        roof_age: '8',
        protection_class: '5',
        sprinkler: 'Wet Pipe Full',
        fire_alarm: 'Central Monitored',
        burglar_alarm: 'None',
        building_value: '1250000',
        bpp_value: '380000',
        business_income: '200000',
        extra_expense: '25000',
        deductible: '2500',
        prior_losses: '1',
        loss_year: '2022',
        loss_type: 'Water Damage',
        loss_amount: '8400',
        mortgagee_name: 'SunTrust Mortgage',
        mortgagee_loan: 'GA-050522',
        loss_payee: 'Caterpillar Financial Services',
        additional_insured: 'Peachtree Industrial Park LLC',
        occupancy_pct: '100',
      }
    },

    /* ─── HARD ─── */
    {
      id: 'prop-hard-1',
      line: 'Property',
      difficulty: 'hard',
      name: 'Hard — Crestwood Medical Supply',
      description: 'A multi-location medical supply distributor with complex coverage needs: multiple buildings, high-value BPP, tenant improvements, multiple additional interests, and several prior losses requiring careful attention.',
      fields: 38,
      timeEstimate: '20–30 min',
      brief: {
        title: 'Client Intake Sheet — Crestwood Medical Supply',
        items: [
          { label: 'Business Name', value: 'Crestwood Medical Supply Co.' },
          { label: 'DBA', value: 'CMS MedEquip' },
          { label: 'Contact', value: 'Priya Nair, Risk Manager' },
          { label: 'Phone', value: '(312) 555-0814' },
          { label: 'Business Email', value: 'pnair@crestwoodmedical.org' },
          { label: 'FEIN', value: '36-7714092' },
          { label: 'Legal Entity', value: 'S-Corporation' },
          { label: 'SIC Code', value: '5047 — Medical & Hospital Equipment' },
          { label: 'Years in Business', value: '22 years' },
          { label: 'Location 1 Address', value: '1800 N. Clark St., Chicago, IL 60614' },
          { label: 'Location 1 Year Built', value: '1998' },
          { label: 'Location 1 Construction', value: 'Non-Combustible' },
          { label: 'Location 1 Sq Ft', value: '28,000 sq ft' },
          { label: 'Location 1 Stories', value: '4' },
          { label: 'Location 1 Roof Type', value: 'TPO Membrane' },
          { label: 'Location 1 Roof Age', value: '6 years' },
          { label: 'Location 1 Protection Class', value: '2' },
          { label: 'Location 1 Sprinkler', value: 'Wet Pipe — Full' },
          { label: 'Location 1 Fire Alarm', value: 'Yes — Central Monitored' },
          { label: 'Location 1 Burglar Alarm', value: 'Yes — Central Monitored' },
          { label: 'Location 1 Building Value', value: '$4,200,000' },
          { label: 'Location 1 BPP', value: '$1,800,000' },
          { label: 'Location 1 Tenant Impr.', value: '$320,000' },
          { label: 'Location 2 Address', value: '720 Industrial Dr, Schaumburg, IL 60173' },
          { label: 'Location 2 Year Built', value: '2012' },
          { label: 'Location 2 Construction', value: 'Masonry Non-Combustible' },
          { label: 'Location 2 Sq Ft', value: '42,000 sq ft' },
          { label: 'Location 2 Stories', value: '1' },
          { label: 'Location 2 Roof Type', value: 'Metal Standing Seam' },
          { label: 'Location 2 Roof Age', value: '12 years' },
          { label: 'Location 2 Protection Class', value: '4' },
          { label: 'Location 2 Sprinkler', value: 'Dry Pipe — Full' },
          { label: 'Location 2 Fire Alarm', value: 'Yes — Central Monitored' },
          { label: 'Location 2 Burglar Alarm', value: 'Yes — Central Monitored' },
          { label: 'Location 2 Building Value', value: '$2,900,000' },
          { label: 'Location 2 BPP', value: '$3,100,000' },
          { label: 'Business Income Limit', value: '$750,000 (per occurrence, 12-month period)' },
          { label: 'Extra Expense', value: '$100,000' },
          { label: 'Deductible (All Perils)', value: '$5,000' },
          { label: 'Wind/Hail Deductible', value: '2% of Building Value per location' },
          { label: 'Prior Losses (5 yr)', value: '3 losses total' },
          { label: 'Loss 1', value: '2021 — Fire, Loc 1, $47,200 paid' },
          { label: 'Loss 2', value: '2022 — Theft, Loc 2, $11,500 paid' },
          { label: 'Loss 3', value: '2023 — Water Damage, Loc 1, $28,700 paid' },
          { label: 'Mortgagee Loc 1', value: 'Chase Bank NA — Loan #IL-1998CHI1800' },
          { label: 'Mortgagee Loc 2', value: 'PNC Bank — Loan #IL-2012SCH720' },
          { label: 'Loss Payee', value: 'Medline Industries Inc.' },
          { label: 'Additional Insured 1', value: 'Clark Street Partners LLC (Landlord, Loc 1)' },
          { label: 'Additional Insured 2', value: 'City of Chicago (per lease requirement)' },
        ],
        distractors: [
          'Ms. Nair mentioned a 3rd location in Milwaukee — that location is currently uninsured and NOT included in this submission.',
          'The company also has a company vehicle — that is handled under a separate commercial auto policy.',
          'Client mentioned a $2M umbrella — do NOT include; separate submission.',
          'The DBA "CMS MedEquip" is used only for marketing. The legal name for all policy documents is Crestwood Medical Supply Co.',
          'Location 2 roof was replaced in 2013 (12 years ago), NOT in 2012 when the building was built.',
        ]
      },
      correctAnswers: {
        applicant_name: 'Crestwood Medical Supply Co.',
        dba: 'CMS MedEquip',
        contact_name: 'Priya Nair',
        phone: '(312) 555-0814',
        email: 'pnair@crestwoodmedical.org',
        fein: '36-7714092',
        entity_type: 'S-Corporation',
        sic_code: '5047',
        years_in_business: '22',
        loc1_street: '1800 N. Clark St.',
        loc1_city: 'Chicago',
        loc1_state: 'IL',
        loc1_zip: '60614',
        loc1_year_built: '1998',
        loc1_construction: 'Non-Combustible',
        loc1_sqft: '28000',
        loc1_stories: '4',
        loc1_roof_type: 'TPO Membrane',
        loc1_roof_age: '6',
        loc1_pc: '2',
        loc1_sprinkler: 'Wet Pipe Full',
        loc1_fire_alarm: 'Central Monitored',
        loc1_burglar_alarm: 'Central Monitored',
        loc1_building: '4200000',
        loc1_bpp: '1800000',
        loc1_tenant_impr: '320000',
        loc2_street: '720 Industrial Dr',
        loc2_city: 'Schaumburg',
        loc2_state: 'IL',
        loc2_zip: '60173',
        loc2_year_built: '2012',
        loc2_construction: 'Masonry Non-Combustible',
        loc2_sqft: '42000',
        loc2_stories: '1',
        loc2_roof_type: 'Metal Standing Seam',
        loc2_roof_age: '12',
        loc2_pc: '4',
        loc2_sprinkler: 'Dry Pipe Full',
        loc2_fire_alarm: 'Central Monitored',
        loc2_burglar_alarm: 'Central Monitored',
        loc2_building: '2900000',
        loc2_bpp: '3100000',
        business_income: '750000',
        extra_expense: '100000',
        deductible: '5000',
        wind_hail_ded: '2',
        num_losses: '3',
        loss1_year: '2021',
        loss1_type: 'Fire',
        loss1_amount: '47200',
        loss2_year: '2022',
        loss2_type: 'Theft',
        loss2_amount: '11500',
        loss3_year: '2023',
        loss3_type: 'Water Damage',
        loss3_amount: '28700',
        mortgagee_loc1: 'Chase Bank NA',
        mortgagee_loan_loc1: 'IL-1998CHI1800',
        mortgagee_loc2: 'PNC Bank',
        mortgagee_loan_loc2: 'IL-2012SCH720',
        loss_payee: 'Medline Industries Inc.',
        add_insured_1: 'Clark Street Partners LLC',
        add_insured_2: 'City of Chicago',
      }
    }
  ],

  auto: [
    /* ─── EASY ─── */
    {
      id: 'auto-easy-1',
      line: 'Auto',
      difficulty: 'easy',
      name: 'Easy — Sunrise Landscaping',
      description: 'A small landscaping company with 2 vehicles. Simple operations, one driver, no prior losses. Good intro to commercial auto quoting.',
      fields: 22,
      timeEstimate: '10–15 min',
      brief: {
        title: 'Client Intake Sheet — Sunrise Landscaping',
        items: [
          { label: 'Business Name', value: 'Sunrise Landscaping LLC' },
          { label: 'Contact', value: 'Tom Whitaker, Owner' },
          { label: 'Phone', value: '(602) 555-0291' },
          { label: 'Business Email', value: 'twhitaker@sunriselandscaping.com' },
          { label: 'FEIN', value: '85-3301247' },
          { label: 'Legal Entity', value: 'LLC' },
          { label: 'SIC Code', value: '0781 — Landscape Counseling & Planning' },
          { label: 'Years in Business', value: '5 years' },
          { label: 'Garaging Address', value: '9204 E. McDowell Rd, Scottsdale, AZ 85257' },
          { label: 'Radius of Operation', value: '0–50 miles' },
          { label: 'Business Use', value: 'Service' },
          { label: 'Vehicle 1', value: '2021 Ford F-150 XL, VIN: 1FTFX1E51MFB47821' },
          { label: 'Vehicle 1 Type', value: 'Pickup Truck' },
          { label: 'Vehicle 1 GVW', value: '8,500 lbs' },
          { label: 'Vehicle 1 Use', value: 'Haul equipment and crew to job sites' },
          { label: 'Vehicle 2', value: '2019 Ford F-150 XL, VIN: 1FTFX1E52KFB22043' },
          { label: 'Vehicle 2 Type', value: 'Pickup Truck' },
          { label: 'Vehicle 2 GVW', value: '8,500 lbs' },
          { label: 'Vehicle 2 Use', value: 'Haul equipment and crew to job sites' },
          { label: 'Driver 1', value: 'Tom Whitaker — DOB 06/14/1980, DL# AZ-D4827193, 15 years exp.' },
          { label: 'Driver 1 MVR', value: 'Clean — no violations' },
          { label: 'Liability Limit', value: '$1,000,000 CSL' },
          { label: 'Physical Damage V1', value: 'Comprehensive & Collision — $500 deductible' },
          { label: 'Physical Damage V2', value: 'Comprehensive Only — $500 deductible' },
          { label: 'Hired & Non-Owned', value: 'Yes — include' },
          { label: 'Prior Losses (3 yr)', value: 'None' },
          { label: 'Additional Insured', value: 'None' },
        ],
        distractors: [
          'Tom mentioned his personal truck — that vehicle is NOT included; personal auto is separate.',
          'Client asked about workers\' comp — out of scope for this auto submission.',
        ]
      },
      correctAnswers: {
        applicant_name: 'Sunrise Landscaping LLC',
        contact_name: 'Tom Whitaker',
        phone: '(602) 555-0291',
        email: 'twhitaker@sunriselandscaping.com',
        fein: '85-3301247',
        entity_type: 'LLC',
        sic_code: '0781',
        years_in_business: '5',
        garage_street: '9204 E. McDowell Rd',
        garage_city: 'Scottsdale',
        garage_state: 'AZ',
        garage_zip: '85257',
        radius: '0-50',
        business_use: 'Service',
        v1_year: '2021',
        v1_make: 'Ford',
        v1_model: 'F-150 XL',
        v1_vin: '1FTFX1E51MFB47821',
        v1_type: 'Pickup Truck',
        v1_gvw: '8500',
        v2_year: '2019',
        v2_make: 'Ford',
        v2_model: 'F-150 XL',
        v2_vin: '1FTFX1E52KFB22043',
        v2_type: 'Pickup Truck',
        v2_gvw: '8500',
        d1_name: 'Tom Whitaker',
        d1_dob: '06/14/1980',
        d1_license: 'AZ-D4827193',
        d1_exp: '15',
        d1_mvr: 'Clean',
        liability_limit: '1000000',
        v1_pd: 'Comp and Collision',
        v1_ded: '500',
        v2_pd: 'Comp Only',
        v2_ded: '500',
        hired_nonowned: 'Yes',
        prior_losses: 'None',
      }
    },

    /* ─── NORMAL ─── */
    {
      id: 'auto-normal-1',
      line: 'Auto',
      difficulty: 'normal',
      name: 'Normal — Harmon Plumbing & HVAC',
      description: 'A 6-vehicle plumbing and HVAC company with 4 listed drivers, one minor MVR violation, and specific coverage requirements.',
      fields: 32,
      timeEstimate: '18–25 min',
      brief: {
        title: 'Client Intake Sheet — Harmon Plumbing & HVAC',
        items: [
          { label: 'Business Name', value: 'Harmon Plumbing & HVAC Services Inc.' },
          { label: 'Contact', value: 'Raymond Harmon, President' },
          { label: 'Phone', value: '(972) 555-0673' },
          { label: 'Business Email', value: 'rharmon@harmonplumbing.com' },
          { label: 'FEIN', value: '75-4402918' },
          { label: 'Legal Entity', value: 'Corporation (Inc.)' },
          { label: 'SIC Code', value: '1711 — Plumbing, Heating, Air-Conditioning' },
          { label: 'Years in Business', value: '14 years' },
          { label: 'Garaging Address', value: '5501 Beltline Rd, Dallas, TX 75254' },
          { label: 'Radius of Operation', value: '0–100 miles' },
          { label: 'Business Use', value: 'Service' },
          { label: 'Vehicle 1', value: '2022 Ram ProMaster 2500 — VIN: 3C6TRVBG2NE138429, Cargo Van' },
          { label: 'Vehicle 2', value: '2022 Ram ProMaster 2500 — VIN: 3C6TRVBG4NE138430, Cargo Van' },
          { label: 'Vehicle 3', value: '2021 Chevrolet Express 2500 — VIN: 1GCWGBFP3M1185311, Cargo Van' },
          { label: 'Vehicle 4', value: '2020 Ford Transit 350 — VIN: 1FBVU4XG2LKA34517, Cargo Van' },
          { label: 'Vehicle 5', value: '2020 Ford Transit 350 — VIN: 1FBVU4XG4LKA34518, Cargo Van' },
          { label: 'Vehicle 6', value: '2019 Ford F-250 SD — VIN: 1FT7X2B67KEC21445, Pickup Truck' },
          { label: 'All Vehicles GVW', value: 'Under 14,000 lbs' },
          { label: 'Driver 1', value: 'Raymond Harmon — DOB 03/22/1971, DL# TX-29344710, 30 years exp.' },
          { label: 'Driver 1 MVR', value: 'Clean' },
          { label: 'Driver 2', value: 'Carlos Mendoza — DOB 08/15/1988, DL# TX-49201835, 12 years exp.' },
          { label: 'Driver 2 MVR', value: '1 speeding violation — 2023, 10 mph over' },
          { label: 'Driver 3', value: 'Jerome Jackson — DOB 11/04/1995, DL# TX-63017294, 6 years exp.' },
          { label: 'Driver 3 MVR', value: 'Clean' },
          { label: 'Driver 4', value: 'Amy Nguyen — DOB 05/30/1990, DL# TX-77104823, 10 years exp.' },
          { label: 'Driver 4 MVR', value: 'Clean' },
          { label: 'Liability Limit', value: '$1,000,000 CSL' },
          { label: 'Physical Damage', value: 'Comp & Collision on all 6 vehicles — $1,000 deductible each' },
          { label: 'Hired & Non-Owned', value: 'Yes — include' },
          { label: 'Prior Losses (3 yr)', value: '1 loss — 2023, At-fault collision, Vehicle 3, $14,200 paid' },
          { label: 'Additional Insured', value: 'Dallas County (general contractor requirement)' },
          { label: 'Loss Payee', value: 'Ford Motor Credit — Vehicles 4 & 5' },
        ],
        distractors: [
          'The owner has 2 personal vehicles — NOT included; personal auto separate.',
          'Client asked about inland marine for tools — that is a separate quote.',
          'Vehicle 6 has aftermarket equipment worth $4,500 — do NOT include; not part of this submission per insured\'s instructions.',
          'Driver 2\'s violation was in 2023, NOT 2022. Enter the correct year.',
        ]
      },
      correctAnswers: {
        applicant_name: 'Harmon Plumbing & HVAC Services Inc.',
        contact_name: 'Raymond Harmon',
        phone: '(972) 555-0673',
        email: 'rharmon@harmonplumbing.com',
        fein: '75-4402918',
        entity_type: 'Corporation',
        sic_code: '1711',
        years_in_business: '14',
        garage_street: '5501 Beltline Rd',
        garage_city: 'Dallas',
        garage_state: 'TX',
        garage_zip: '75254',
        radius: '0-100',
        business_use: 'Service',
        num_vehicles: '6',
        v1_vin: '3C6TRVBG2NE138429',
        v2_vin: '3C6TRVBG4NE138430',
        v3_vin: '1GCWGBFP3M1185311',
        v4_vin: '1FBVU4XG2LKA34517',
        v5_vin: '1FBVU4XG4LKA34518',
        v6_vin: '1FT7X2B67KEC21445',
        d1_name: 'Raymond Harmon',
        d1_dob: '03/22/1971',
        d1_license: 'TX-29344710',
        d1_exp: '30',
        d1_mvr: 'Clean',
        d2_name: 'Carlos Mendoza',
        d2_dob: '08/15/1988',
        d2_license: 'TX-49201835',
        d2_exp: '12',
        d2_mvr: '1 Violation',
        d2_violation_year: '2023',
        d3_name: 'Jerome Jackson',
        d3_dob: '11/04/1995',
        d3_license: 'TX-63017294',
        d3_exp: '6',
        d3_mvr: 'Clean',
        d4_name: 'Amy Nguyen',
        d4_dob: '05/30/1990',
        d4_license: 'TX-77104823',
        d4_exp: '10',
        d4_mvr: 'Clean',
        liability_limit: '1000000',
        pd_coverage: 'Comp and Collision',
        pd_deductible: '1000',
        hired_nonowned: 'Yes',
        prior_losses: '1',
        loss_year: '2023',
        loss_type: 'At-fault Collision',
        loss_amount: '14200',
        additional_insured: 'Dallas County',
        loss_payee: 'Ford Motor Credit',
      }
    },

    /* ─── HARD ─── */
    {
      id: 'auto-hard-1',
      line: 'Auto',
      difficulty: 'hard',
      name: 'Hard — Apex Regional Freight',
      description: 'A regional freight carrier with 12 commercial trucks, 8 drivers (including CDL), complex MVR history, multiple prior losses, and specific endorsement requirements. High attention to detail required.',
      fields: 45,
      timeEstimate: '25–40 min',
      brief: {
        title: 'Client Intake Sheet — Apex Regional Freight LLC',
        items: [
          { label: 'Business Name', value: 'Apex Regional Freight LLC' },
          { label: 'Contact', value: 'Sandra Okafor, VP Operations' },
          { label: 'Phone', value: '(614) 555-0928' },
          { label: 'Business Email', value: 'sokafor@apexfreight.com' },
          { label: 'FEIN', value: '34-8801563' },
          { label: 'Legal Entity', value: 'LLC' },
          { label: 'SIC Code', value: '4213 — Trucking, Except Local' },
          { label: 'Years in Business', value: '9 years' },
          { label: 'DOT Number', value: 'US-DOT 3471829' },
          { label: 'MC Number', value: 'MC-998302' },
          { label: 'Garaging Address', value: '7600 Rickenbacker Pkwy, Columbus, OH 43217' },
          { label: 'Radius of Operation', value: '201–500 miles (Regional)' },
          { label: 'Commodity Hauled', value: 'General Freight — Non-Hazardous' },
          { label: 'Vehicle 1', value: '2022 Kenworth T680 — VIN: 1XKYD49X7NJ497201, Semi Tractor' },
          { label: 'Vehicle 2', value: '2022 Kenworth T680 — VIN: 1XKYD49X9NJ497202, Semi Tractor' },
          { label: 'Vehicle 3', value: '2021 Peterbilt 579 — VIN: 1XPYD49X1MD627113, Semi Tractor' },
          { label: 'Vehicle 4', value: '2021 Peterbilt 579 — VIN: 1XPYD49X3MD627114, Semi Tractor' },
          { label: 'Vehicle 5', value: '2020 Freightliner Cascadia — VIN: 3AKJHHDR7LSLN6741, Semi Tractor' },
          { label: 'Vehicle 6', value: '2020 Freightliner Cascadia — VIN: 3AKJHHDR9LSLN6742, Semi Tractor' },
          { label: 'Vehicle 7', value: '2019 Volvo VNL64T760 — VIN: 4V4NC9EH7KN217835, Semi Tractor' },
          { label: 'Vehicle 8', value: '2019 Volvo VNL64T760 — VIN: 4V4NC9EH9KN217836, Semi Tractor' },
          { label: 'Vehicle 9', value: '2023 Utility 53\' Dry Van Trailer — VIN: 1UYVS2537PE234021' },
          { label: 'Vehicle 10', value: '2023 Utility 53\' Dry Van Trailer — VIN: 1UYVS2539PE234022' },
          { label: 'Vehicle 11', value: '2022 Great Dane 53\' Dry Van Trailer — VIN: 1GRAA0621KA803114' },
          { label: 'Vehicle 12', value: '2022 Great Dane 53\' Dry Van Trailer — VIN: 1GRAA0623KA803115' },
          { label: 'Driver 1', value: 'Marcus Webb — DOB 07/11/1975, CDL-A OH-22847103, 20 yrs CDL exp.' },
          { label: 'Driver 1 MVR', value: 'Clean' },
          { label: 'Driver 2', value: 'Darnell Brooks — DOB 02/28/1982, CDL-A OH-39018472, 14 yrs CDL exp.' },
          { label: 'Driver 2 MVR', value: '1 speeding violation — 2022' },
          { label: 'Driver 3', value: 'Kevin Park — DOB 09/17/1990, CDL-A OH-50034821, 8 yrs CDL exp.' },
          { label: 'Driver 3 MVR', value: 'Clean' },
          { label: 'Driver 4', value: 'Tamara Ellis — DOB 04/05/1987, CDL-A OH-61274930, 10 yrs CDL exp.' },
          { label: 'Driver 4 MVR', value: '1 at-fault accident — 2021' },
          { label: 'Driver 5', value: 'Jose Rivera — DOB 12/30/1979, CDL-A OH-72481039, 18 yrs CDL exp.' },
          { label: 'Driver 5 MVR', value: 'Clean' },
          { label: 'Driver 6', value: 'Eric Thompson — DOB 08/22/1993, CDL-A OH-83590148, 5 yrs CDL exp.' },
          { label: 'Driver 6 MVR', value: '2 speeding violations — 2022 and 2024' },
          { label: 'Driver 7', value: 'Lisa Monroe — DOB 06/01/1985, CDL-A OH-94701257, 12 yrs CDL exp.' },
          { label: 'Driver 7 MVR', value: 'Clean' },
          { label: 'Driver 8', value: 'Antonio Cruz — DOB 03/14/1998, CDL-A OH-05812366, 3 yrs CDL exp.' },
          { label: 'Driver 8 MVR', value: 'Clean' },
          { label: 'Liability Limit', value: '$1,000,000 CSL (FMCSA minimum for general freight)' },
          { label: 'Physical Damage — Tractors', value: 'Comp & Collision — $2,500 deductible each' },
          { label: 'Physical Damage — Trailers', value: 'Comp & Collision — $1,000 deductible each' },
          { label: 'Cargo Coverage', value: '$100,000 per occurrence, $1,000 deductible' },
          { label: 'Non-Trucking Liability', value: 'Yes — include (bobtail)' },
          { label: 'Trailer Interchange', value: 'Yes — $50,000 limit, $1,000 deductible' },
          { label: 'Hired & Non-Owned', value: 'Yes — include' },
          { label: 'Prior Losses (3 yr)', value: '4 losses' },
          { label: 'Loss 1', value: '2022 — Collision, Vehicle 5, $38,400 paid' },
          { label: 'Loss 2', value: '2022 — Cargo Theft, $22,100 paid' },
          { label: 'Loss 3', value: '2023 — Collision, Vehicle 7, $61,000 paid' },
          { label: 'Loss 4', value: '2024 — Liability, $150,000 paid' },
          { label: 'Additional Insured 1', value: 'Amazon Logistics Inc.' },
          { label: 'Additional Insured 2', value: 'Target Corporation' },
          { label: 'Loss Payee 1', value: 'Kenworth Financial — Vehicles 1 & 2' },
          { label: 'Loss Payee 2', value: 'Paccar Financial — Vehicles 3 & 4' },
        ],
        distractors: [
          'Driver 6 had violations in 2022 AND 2024 — NOT just 2022. Read carefully.',
          'Vehicles 9–12 are TRAILERS, not tractors — different physical damage deductible applies.',
          'The DOT number is US-DOT 3471829 and the MC number is MC-998302 — these are different numbers.',
          'Loss 4 in 2024 was a LIABILITY loss, not a physical damage claim.',
          'Tamara Ellis (Driver 4) had an AT-FAULT ACCIDENT, not a speeding violation.',
          'Antonio Cruz (Driver 8) only has 3 years CDL experience — he is the newest driver.',
          'Apex is registered in Ohio — do NOT enter another state for garaging.',
        ]
      },
      correctAnswers: {
        applicant_name: 'Apex Regional Freight LLC',
        contact_name: 'Sandra Okafor',
        phone: '(614) 555-0928',
        email: 'sokafor@apexfreight.com',
        fein: '34-8801563',
        entity_type: 'LLC',
        sic_code: '4213',
        years_in_business: '9',
        dot_number: 'US-DOT 3471829',
        mc_number: 'MC-998302',
        garage_street: '7600 Rickenbacker Pkwy',
        garage_city: 'Columbus',
        garage_state: 'OH',
        garage_zip: '43217',
        radius: '201-500',
        commodity: 'General Freight Non-Hazardous',
        num_vehicles: '12',
        num_tractors: '8',
        num_trailers: '4',
        d1_name: 'Marcus Webb',
        d1_license_class: 'CDL-A',
        d1_mvr: 'Clean',
        d2_name: 'Darnell Brooks',
        d2_license_class: 'CDL-A',
        d2_mvr: '1 Violation',
        d3_name: 'Kevin Park',
        d3_license_class: 'CDL-A',
        d3_mvr: 'Clean',
        d4_name: 'Tamara Ellis',
        d4_license_class: 'CDL-A',
        d4_mvr: 'At-fault Accident',
        d5_name: 'Jose Rivera',
        d5_license_class: 'CDL-A',
        d5_mvr: 'Clean',
        d6_name: 'Eric Thompson',
        d6_license_class: 'CDL-A',
        d6_mvr: '2 Violations',
        d7_name: 'Lisa Monroe',
        d7_license_class: 'CDL-A',
        d7_mvr: 'Clean',
        d8_name: 'Antonio Cruz',
        d8_license_class: 'CDL-A',
        d8_exp: '3',
        d8_mvr: 'Clean',
        liability_limit: '1000000',
        tractor_pd_ded: '2500',
        trailer_pd_ded: '1000',
        cargo_limit: '100000',
        cargo_ded: '1000',
        non_trucking: 'Yes',
        trailer_interchange: 'Yes',
        trailer_int_limit: '50000',
        trailer_int_ded: '1000',
        hired_nonowned: 'Yes',
        num_losses: '4',
        loss1_year: '2022',
        loss1_type: 'Collision',
        loss1_amount: '38400',
        loss2_type: 'Cargo Theft',
        loss2_amount: '22100',
        loss3_year: '2023',
        loss3_type: 'Collision',
        loss3_amount: '61000',
        loss4_year: '2024',
        loss4_type: 'Liability',
        loss4_amount: '150000',
        add_insured_1: 'Amazon Logistics Inc.',
        add_insured_2: 'Target Corporation',
        loss_payee_1: 'Kenworth Financial',
        loss_payee_2: 'Paccar Financial',
      }
    }
  ],
  bop: [
    {
        "id": "bop-easy-1",
        "line": "BOP",
        "difficulty": "easy",
        "name": "Easy \u2014 Maple Street Bookstore",
        "description": "Small tenant-occupied retail store requesting a BOP package with BPP, business income, and standard liability.",
        "fields": 27,
        "timeEstimate": "10\u201315 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 Maple Street Bookstore",
            "items": [
                {
                    "label": "Business Name",
                    "value": "Maple Street Bookstore LLC"
                },
                {
                    "label": "Contact",
                    "value": "Evan Clark, Owner"
                },
                {
                    "label": "Phone",
                    "value": "(614) 555-0144"
                },
                {
                    "label": "Business Email",
                    "value": "evan@maplestreetbooks.com"
                },
                {
                    "label": "FEIN",
                    "value": "31-4729180"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "5942 \u2014 Book Stores"
                },
                {
                    "label": "Years in Business",
                    "value": "4 years"
                },
                {
                    "label": "Location",
                    "value": "118 Maple St, Columbus, OH 43215"
                },
                {
                    "label": "Business Type",
                    "value": "Retail Store"
                },
                {
                    "label": "Occupied Area",
                    "value": "1,800 sq ft"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$420,000"
                },
                {
                    "label": "Annual Payroll",
                    "value": "$95,000"
                },
                {
                    "label": "Building Limit",
                    "value": "$0 \u2014 tenant only"
                },
                {
                    "label": "BPP Limit",
                    "value": "$95,000"
                },
                {
                    "label": "Business Income",
                    "value": "$50,000"
                },
                {
                    "label": "BOP Liability Limit",
                    "value": "$1,000,000 / $2,000,000"
                },
                {
                    "label": "Deductible",
                    "value": "$1,000"
                },
                {
                    "label": "Additional Insured",
                    "value": "Maple Plaza LLC \u2014 landlord"
                },
                {
                    "label": "Prior Losses",
                    "value": "0"
                }
            ],
            "distractors": [
                "Client asked about workers comp; do NOT include WC in the BOP quote.",
                "Owner mentioned online sales, but the requested location exposure is the retail store only."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "Maple Street Bookstore LLC",
            "g_contact_name": "Evan Clark",
            "g_phone": "(614) 555-0144",
            "g_email": "evan@maplestreetbooks.com",
            "g_fein": "31-4729180",
            "g_entity_type": "LLC",
            "g_sic_code": "5942",
            "g_years_in_business": "4",
            "g_street": "118 Maple St",
            "g_city": "Columbus",
            "g_state": "OH",
            "g_zip": "43215",
            "bop_business_type": "Retail Store",
            "bop_square_footage": "1800",
            "bop_annual_revenue": "420000",
            "bop_payroll": "95000",
            "bop_building_limit": "0",
            "bop_bpp_limit": "95000",
            "bop_business_income": "50000",
            "bop_gl_limit": "1000000/2000000",
            "bop_deductible": "1000",
            "g_additional_insured": "Maple Plaza LLC",
            "g_num_losses": "0",
            "bop_uw_cooking": "No",
            "bop_uw_alarm": "Central Monitored",
            "bop_uw_prior_cancel": "No",
            "bop_uw_subcontractors": "No"
        }
    },
    {
        "id": "bop-normal-1",
        "line": "BOP",
        "difficulty": "normal",
        "name": "Normal \u2014 Bella Cup Cafe",
        "description": "Cafe tenant with cooking/baking exposure, landlord additional insured requirement, and one small property loss.",
        "fields": 30,
        "timeEstimate": "15\u201320 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 Bella Cup Cafe",
            "items": [
                {
                    "label": "Business Name",
                    "value": "Bella Cup Cafe Inc."
                },
                {
                    "label": "Contact",
                    "value": "Nina Patel, President"
                },
                {
                    "label": "Phone",
                    "value": "(813) 555-0198"
                },
                {
                    "label": "Business Email",
                    "value": "npatel@bellacupcafe.com"
                },
                {
                    "label": "FEIN",
                    "value": "59-3810274"
                },
                {
                    "label": "Legal Entity",
                    "value": "Corporation"
                },
                {
                    "label": "SIC Code",
                    "value": "5812 \u2014 Eating Places"
                },
                {
                    "label": "Years in Business",
                    "value": "6 years"
                },
                {
                    "label": "Location",
                    "value": "720 Bayshore Blvd, Tampa, FL 33606"
                },
                {
                    "label": "Business Type",
                    "value": "Bakery / Food Service"
                },
                {
                    "label": "Occupied Area",
                    "value": "2,600 sq ft"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$840,000"
                },
                {
                    "label": "Annual Payroll",
                    "value": "$220,000"
                },
                {
                    "label": "Building Limit",
                    "value": "$0 \u2014 tenant only"
                },
                {
                    "label": "BPP Limit",
                    "value": "$180,000"
                },
                {
                    "label": "Business Income",
                    "value": "$125,000"
                },
                {
                    "label": "BOP Liability Limit",
                    "value": "$1,000,000 / $2,000,000"
                },
                {
                    "label": "Deductible",
                    "value": "$2,500"
                },
                {
                    "label": "Additional Insured",
                    "value": "Bayshore Retail Partners LLC"
                },
                {
                    "label": "Prior Loss",
                    "value": "2023 \u2014 Equipment Breakdown, $6,200 paid"
                }
            ],
            "distractors": [
                "Do not enter the catering van; it belongs under Commercial Auto.",
                "Liquor liability was mentioned as a future question; do NOT include it in this BOP scenario."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "Bella Cup Cafe Inc.",
            "g_contact_name": "Nina Patel",
            "g_phone": "(813) 555-0198",
            "g_email": "npatel@bellacupcafe.com",
            "g_fein": "59-3810274",
            "g_entity_type": "Corporation",
            "g_sic_code": "5812",
            "g_years_in_business": "6",
            "g_street": "720 Bayshore Blvd",
            "g_city": "Tampa",
            "g_state": "FL",
            "g_zip": "33606",
            "bop_business_type": "Bakery / Food Service",
            "bop_square_footage": "2600",
            "bop_annual_revenue": "840000",
            "bop_payroll": "220000",
            "bop_building_limit": "0",
            "bop_bpp_limit": "180000",
            "bop_business_income": "125000",
            "bop_gl_limit": "1000000/2000000",
            "bop_deductible": "2500",
            "g_additional_insured": "Bayshore Retail Partners LLC",
            "g_num_losses": "1",
            "g_loss1_year": "2023",
            "g_loss1_type": "Equipment Breakdown",
            "g_loss1_amount": "6200",
            "bop_uw_cooking": "Yes",
            "bop_uw_alarm": "Central Monitored",
            "bop_uw_prior_cancel": "No",
            "bop_uw_subcontractors": "No"
        }
    },
    {
        "id": "bop-hard-1",
        "line": "BOP",
        "difficulty": "hard",
        "name": "Hard \u2014 Studio Eleven Salon",
        "description": "Salon with owned building, landlord/lessor nuance, BPP, business income, one slip claim, and accuracy traps.",
        "fields": 32,
        "timeEstimate": "20\u201325 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 Studio Eleven Salon",
            "items": [
                {
                    "label": "Business Name",
                    "value": "Studio Eleven Salon & Spa LLC"
                },
                {
                    "label": "DBA",
                    "value": "Studio 11"
                },
                {
                    "label": "Contact",
                    "value": "Camila Reyes, Managing Member"
                },
                {
                    "label": "Phone",
                    "value": "(602) 555-0433"
                },
                {
                    "label": "Business Email",
                    "value": "camila@studio11salon.com"
                },
                {
                    "label": "FEIN",
                    "value": "86-2047719"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "7231 \u2014 Beauty Shops"
                },
                {
                    "label": "Years in Business",
                    "value": "9 years"
                },
                {
                    "label": "Location",
                    "value": "4411 N 7th Ave, Phoenix, AZ 85013"
                },
                {
                    "label": "Business Type",
                    "value": "Beauty Salon"
                },
                {
                    "label": "Occupied Area",
                    "value": "3,400 sq ft"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$1,150,000"
                },
                {
                    "label": "Annual Payroll",
                    "value": "$360,000"
                },
                {
                    "label": "Building Limit",
                    "value": "$675,000"
                },
                {
                    "label": "BPP Limit",
                    "value": "$240,000"
                },
                {
                    "label": "Business Income",
                    "value": "$250,000"
                },
                {
                    "label": "BOP Liability Limit",
                    "value": "$2,000,000 / $4,000,000"
                },
                {
                    "label": "Deductible",
                    "value": "$5,000"
                },
                {
                    "label": "Mortgagee",
                    "value": "Desert Community Bank"
                },
                {
                    "label": "Loss Payee",
                    "value": "Salon Equipment Finance LLC"
                },
                {
                    "label": "Prior Loss",
                    "value": "2022 \u2014 Slip and Fall, $18,900 paid"
                }
            ],
            "distractors": [
                "The nail technician rents a booth; do not list her separate LLC as named insured.",
                "Cyber coverage was discussed but is outside this BOP entry."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "Studio Eleven Salon & Spa LLC",
            "g_dba": "Studio 11",
            "g_contact_name": "Camila Reyes",
            "g_phone": "(602) 555-0433",
            "g_email": "camila@studio11salon.com",
            "g_fein": "86-2047719",
            "g_entity_type": "LLC",
            "g_sic_code": "7231",
            "g_years_in_business": "9",
            "g_street": "4411 N 7th Ave",
            "g_city": "Phoenix",
            "g_state": "AZ",
            "g_zip": "85013",
            "bop_business_type": "Beauty Salon",
            "bop_square_footage": "3400",
            "bop_annual_revenue": "1150000",
            "bop_payroll": "360000",
            "bop_building_limit": "675000",
            "bop_bpp_limit": "240000",
            "bop_business_income": "250000",
            "bop_gl_limit": "2000000/4000000",
            "bop_deductible": "5000",
            "g_mortgagee": "Desert Community Bank",
            "g_loss_payee": "Salon Equipment Finance LLC",
            "g_num_losses": "1",
            "g_loss1_year": "2022",
            "g_loss1_type": "Slip and Fall",
            "g_loss1_amount": "18900",
            "bop_uw_cooking": "No",
            "bop_uw_alarm": "Central Monitored",
            "bop_uw_prior_cancel": "No",
            "bop_uw_subcontractors": "Yes"
        }
    }
],
  workersComp: [
    {
        "id": "wc-easy-1",
        "line": "Workers Compensation",
        "difficulty": "easy",
        "name": "Easy \u2014 Northgate Accounting",
        "description": "Office-only accounting firm with one clerical class code, clean losses, and owners excluded.",
        "fields": 31,
        "timeEstimate": "10\u201315 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 Northgate Accounting",
            "items": [
                {
                    "label": "Business Name",
                    "value": "Northgate Accounting Services LLC"
                },
                {
                    "label": "Contact",
                    "value": "Liam Hughes, Partner"
                },
                {
                    "label": "Phone",
                    "value": "(216) 555-0112"
                },
                {
                    "label": "Business Email",
                    "value": "liam@northgateacct.com"
                },
                {
                    "label": "FEIN",
                    "value": "34-2718045"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "8721 \u2014 Accounting Services"
                },
                {
                    "label": "Years in Business",
                    "value": "5 years"
                },
                {
                    "label": "Location",
                    "value": "900 Euclid Ave, Cleveland, OH 44115"
                },
                {
                    "label": "WC State",
                    "value": "OH"
                },
                {
                    "label": "Employees",
                    "value": "8 full-time, 2 part-time"
                },
                {
                    "label": "Total Payroll",
                    "value": "$510,000"
                },
                {
                    "label": "Class Code 1",
                    "value": "8810 \u2014 Clerical Office Employees, payroll $510,000"
                },
                {
                    "label": "Class Code 2",
                    "value": "None"
                },
                {
                    "label": "Experience Mod",
                    "value": "1.00"
                },
                {
                    "label": "Prior Carrier",
                    "value": "None \u2014 new purchase"
                },
                {
                    "label": "Employers Liability",
                    "value": "500/500/500"
                },
                {
                    "label": "Prior Losses",
                    "value": "0"
                }
            ],
            "distractors": [
                "Do not enter the owner draws as payroll.",
                "They asked about EPLI; that is not part of Workers Compensation."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "Northgate Accounting Services LLC",
            "g_contact_name": "Liam Hughes",
            "g_phone": "(216) 555-0112",
            "g_email": "liam@northgateacct.com",
            "g_fein": "34-2718045",
            "g_entity_type": "LLC",
            "g_sic_code": "8721",
            "g_years_in_business": "5",
            "g_street": "900 Euclid Ave",
            "g_city": "Cleveland",
            "g_state": "OH",
            "g_zip": "44115",
            "wc_state": "OH",
            "wc_full_time": "8",
            "wc_part_time": "2",
            "wc_owner_included": "No",
            "wc_annual_payroll": "510000",
            "wc_class_code1": "8810",
            "wc_class_desc1": "Clerical Office Employees",
            "wc_payroll1": "510000",
            "wc_class_code2": "None",
            "wc_class_desc2": "None",
            "wc_payroll2": "0",
            "wc_mod_factor": "1.00",
            "wc_prior_carrier": "None",
            "wc_policy_limit": "500/500/500",
            "g_num_losses": "0",
            "wc_safety_program": "Yes",
            "wc_return_to_work": "Yes",
            "wc_subcontractors": "No",
            "wc_labor_leasing": "No"
        }
    },
    {
        "id": "wc-normal-1",
        "line": "Workers Compensation",
        "difficulty": "normal",
        "name": "Normal \u2014 BrightPath Landscaping",
        "description": "Landscaping contractor with split payroll, prior carrier, one medical-only claim, and subcontractor exposure.",
        "fields": 34,
        "timeEstimate": "15\u201320 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 BrightPath Landscaping",
            "items": [
                {
                    "label": "Business Name",
                    "value": "BrightPath Landscaping Inc."
                },
                {
                    "label": "Contact",
                    "value": "Oscar Martinez, Operations Manager"
                },
                {
                    "label": "Phone",
                    "value": "(512) 555-0227"
                },
                {
                    "label": "Business Email",
                    "value": "omartinez@brightpathlandscape.com"
                },
                {
                    "label": "FEIN",
                    "value": "74-3912880"
                },
                {
                    "label": "Legal Entity",
                    "value": "Corporation"
                },
                {
                    "label": "SIC Code",
                    "value": "0782 \u2014 Lawn and Garden Services"
                },
                {
                    "label": "Years in Business",
                    "value": "8 years"
                },
                {
                    "label": "Location",
                    "value": "1550 Airport Blvd, Austin, TX 78702"
                },
                {
                    "label": "WC State",
                    "value": "TX"
                },
                {
                    "label": "Employees",
                    "value": "18 full-time, 6 part-time"
                },
                {
                    "label": "Total Payroll",
                    "value": "$880,000"
                },
                {
                    "label": "Class Code 1",
                    "value": "0042 \u2014 Landscape Gardening, payroll $720,000"
                },
                {
                    "label": "Class Code 2",
                    "value": "8810 \u2014 Clerical, payroll $160,000"
                },
                {
                    "label": "Experience Mod",
                    "value": "0.94"
                },
                {
                    "label": "Prior Carrier",
                    "value": "Texas Mutual"
                },
                {
                    "label": "Employers Liability",
                    "value": "1000/1000/1000"
                },
                {
                    "label": "Loss",
                    "value": "2023 \u2014 Medical Only, $4,300 paid"
                }
            ],
            "distractors": [
                "Do not include subcontractor cost as payroll unless uninsured.",
                "One seasonal helper is part-time, not full-time."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "BrightPath Landscaping Inc.",
            "g_contact_name": "Oscar Martinez",
            "g_phone": "(512) 555-0227",
            "g_email": "omartinez@brightpathlandscape.com",
            "g_fein": "74-3912880",
            "g_entity_type": "Corporation",
            "g_sic_code": "0782",
            "g_years_in_business": "8",
            "g_street": "1550 Airport Blvd",
            "g_city": "Austin",
            "g_state": "TX",
            "g_zip": "78702",
            "wc_state": "TX",
            "wc_full_time": "18",
            "wc_part_time": "6",
            "wc_owner_included": "No",
            "wc_annual_payroll": "880000",
            "wc_class_code1": "0042",
            "wc_class_desc1": "Landscape Gardening",
            "wc_payroll1": "720000",
            "wc_class_code2": "8810",
            "wc_class_desc2": "Clerical Office Employees",
            "wc_payroll2": "160000",
            "wc_mod_factor": "0.94",
            "wc_prior_carrier": "Texas Mutual",
            "wc_policy_limit": "1000/1000/1000",
            "g_num_losses": "1",
            "g_loss1_year": "2023",
            "g_loss1_type": "Medical Only",
            "g_loss1_amount": "4300",
            "wc_safety_program": "Yes",
            "wc_return_to_work": "Yes",
            "wc_subcontractors": "Yes",
            "wc_labor_leasing": "No"
        }
    },
    {
        "id": "wc-hard-1",
        "line": "Workers Compensation",
        "difficulty": "hard",
        "name": "Hard \u2014 ForgeWorks Manufacturing",
        "description": "Manufacturing risk with split payroll, experience mod above 1.00, two prior claims, and owner inclusion detail.",
        "fields": 37,
        "timeEstimate": "20\u201330 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 ForgeWorks Manufacturing",
            "items": [
                {
                    "label": "Business Name",
                    "value": "ForgeWorks Manufacturing Co."
                },
                {
                    "label": "Contact",
                    "value": "Dana Kim, HR Director"
                },
                {
                    "label": "Phone",
                    "value": "(313) 555-0671"
                },
                {
                    "label": "Business Email",
                    "value": "dkim@forgeworks-mfg.com"
                },
                {
                    "label": "FEIN",
                    "value": "38-7712049"
                },
                {
                    "label": "Legal Entity",
                    "value": "S-Corporation"
                },
                {
                    "label": "SIC Code",
                    "value": "3499 \u2014 Fabricated Metal Products"
                },
                {
                    "label": "Years in Business",
                    "value": "17 years"
                },
                {
                    "label": "Location",
                    "value": "4100 Fort St, Detroit, MI 48209"
                },
                {
                    "label": "WC State",
                    "value": "MI"
                },
                {
                    "label": "Employees",
                    "value": "44 full-time, 9 part-time"
                },
                {
                    "label": "Total Payroll",
                    "value": "$2,450,000"
                },
                {
                    "label": "Class Code 1",
                    "value": "3066 \u2014 Sheet Metal Work, payroll $1,980,000"
                },
                {
                    "label": "Class Code 2",
                    "value": "8810 \u2014 Clerical, payroll $470,000"
                },
                {
                    "label": "Experience Mod",
                    "value": "1.12"
                },
                {
                    "label": "Prior Carrier",
                    "value": "Accident Fund"
                },
                {
                    "label": "Employers Liability",
                    "value": "1000/1000/1000"
                },
                {
                    "label": "Loss 1",
                    "value": "2022 \u2014 Laceration, $22,600 paid"
                },
                {
                    "label": "Loss 2",
                    "value": "2024 \u2014 Back Strain, $14,800 paid"
                }
            ],
            "distractors": [
                "Do not use class code 8810 for shop employees.",
                "The officer is included in payroll; do not exclude owners."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "ForgeWorks Manufacturing Co.",
            "g_contact_name": "Dana Kim",
            "g_phone": "(313) 555-0671",
            "g_email": "dkim@forgeworks-mfg.com",
            "g_fein": "38-7712049",
            "g_entity_type": "S-Corporation",
            "g_sic_code": "3499",
            "g_years_in_business": "17",
            "g_street": "4100 Fort St",
            "g_city": "Detroit",
            "g_state": "MI",
            "g_zip": "48209",
            "wc_state": "MI",
            "wc_full_time": "44",
            "wc_part_time": "9",
            "wc_owner_included": "Yes",
            "wc_annual_payroll": "2450000",
            "wc_class_code1": "3066",
            "wc_class_desc1": "Sheet Metal Work",
            "wc_payroll1": "1980000",
            "wc_class_code2": "8810",
            "wc_class_desc2": "Clerical Office Employees",
            "wc_payroll2": "470000",
            "wc_mod_factor": "1.12",
            "wc_prior_carrier": "Accident Fund",
            "wc_policy_limit": "1000/1000/1000",
            "g_num_losses": "2",
            "g_loss1_year": "2022",
            "g_loss1_type": "Laceration",
            "g_loss1_amount": "22600",
            "g_loss2_year": "2024",
            "g_loss2_type": "Back Strain",
            "g_loss2_amount": "14800",
            "wc_safety_program": "Yes",
            "wc_return_to_work": "No",
            "wc_subcontractors": "No",
            "wc_labor_leasing": "No"
        }
    }
],
  cgl: [
    {
        "id": "cgl-easy-1",
        "line": "General Liability",
        "difficulty": "easy",
        "name": "Easy \u2014 PixelPoint Photography",
        "description": "Low-hazard photography studio requesting CGL with standard limits and no prior claims.",
        "fields": 28,
        "timeEstimate": "10\u201315 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 PixelPoint Photography",
            "items": [
                {
                    "label": "Business Name",
                    "value": "PixelPoint Photography LLC"
                },
                {
                    "label": "Contact",
                    "value": "Maya Bennett, Owner"
                },
                {
                    "label": "Phone",
                    "value": "(704) 555-0157"
                },
                {
                    "label": "Business Email",
                    "value": "maya@pixelpointphoto.com"
                },
                {
                    "label": "FEIN",
                    "value": "56-4471902"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "7221 \u2014 Photographic Studios"
                },
                {
                    "label": "Years in Business",
                    "value": "3 years"
                },
                {
                    "label": "Location",
                    "value": "221 Camden Rd, Charlotte, NC 28203"
                },
                {
                    "label": "Operations",
                    "value": "Portrait and event photography studio"
                },
                {
                    "label": "Exposure Basis",
                    "value": "Sales"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$310,000"
                },
                {
                    "label": "Payroll",
                    "value": "$80,000"
                },
                {
                    "label": "Subcontractor Costs",
                    "value": "$0"
                },
                {
                    "label": "Limits",
                    "value": "Each Occurrence $1,000,000; Aggregate $2,000,000"
                },
                {
                    "label": "Products/Completed Ops",
                    "value": "$2,000,000"
                },
                {
                    "label": "Med Pay",
                    "value": "$5,000"
                },
                {
                    "label": "Deductible",
                    "value": "$0"
                },
                {
                    "label": "Prior Losses",
                    "value": "0"
                }
            ],
            "distractors": [
                "Professional liability for photo editing is not requested.",
                "Camera equipment coverage belongs to inland marine, not CGL."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "PixelPoint Photography LLC",
            "g_contact_name": "Maya Bennett",
            "g_phone": "(704) 555-0157",
            "g_email": "maya@pixelpointphoto.com",
            "g_fein": "56-4471902",
            "g_entity_type": "LLC",
            "g_sic_code": "7221",
            "g_years_in_business": "3",
            "g_street": "221 Camden Rd",
            "g_city": "Charlotte",
            "g_state": "NC",
            "g_zip": "28203",
            "cgl_business_description": "Portrait and event photography studio",
            "cgl_exposure_basis": "Sales",
            "cgl_annual_revenue": "310000",
            "cgl_payroll": "80000",
            "cgl_subcontractor_costs": "0",
            "cgl_occurrence_limit": "1000000",
            "cgl_aggregate_limit": "2000000",
            "cgl_products_completed": "2000000",
            "cgl_med_pay": "5000",
            "cgl_deductible": "0",
            "g_num_losses": "0",
            "cgl_contractual_liability": "No",
            "cgl_professional_exposure": "No",
            "cgl_primary_noncontrib": "No",
            "cgl_waiver_subrogation": "No",
            "cgl_prior_cancel": "No"
        }
    },
    {
        "id": "cgl-normal-1",
        "line": "General Liability",
        "difficulty": "normal",
        "name": "Normal \u2014 HarborTech Electric",
        "description": "Electrical contractor with payroll/subcontractor exposures, contract requirements, and one liability loss.",
        "fields": 32,
        "timeEstimate": "15\u201320 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 HarborTech Electric",
            "items": [
                {
                    "label": "Business Name",
                    "value": "HarborTech Electric Inc."
                },
                {
                    "label": "Contact",
                    "value": "Victor Chen, President"
                },
                {
                    "label": "Phone",
                    "value": "(206) 555-0349"
                },
                {
                    "label": "Business Email",
                    "value": "vchen@harbortechelectric.com"
                },
                {
                    "label": "FEIN",
                    "value": "91-3057188"
                },
                {
                    "label": "Legal Entity",
                    "value": "Corporation"
                },
                {
                    "label": "SIC Code",
                    "value": "1731 \u2014 Electrical Work"
                },
                {
                    "label": "Years in Business",
                    "value": "12 years"
                },
                {
                    "label": "Location",
                    "value": "804 Alaskan Way S, Seattle, WA 98104"
                },
                {
                    "label": "Operations",
                    "value": "Commercial electrical installation and service"
                },
                {
                    "label": "Exposure Basis",
                    "value": "Payroll"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$2,300,000"
                },
                {
                    "label": "Payroll",
                    "value": "$940,000"
                },
                {
                    "label": "Subcontractor Costs",
                    "value": "$180,000"
                },
                {
                    "label": "Limits",
                    "value": "Each Occurrence $1,000,000; Aggregate $2,000,000"
                },
                {
                    "label": "Products/Completed Ops",
                    "value": "$2,000,000"
                },
                {
                    "label": "Med Pay",
                    "value": "$10,000"
                },
                {
                    "label": "Deductible",
                    "value": "$1,000"
                },
                {
                    "label": "Additional Insured",
                    "value": "Portside Property Group LLC"
                },
                {
                    "label": "Prior Loss",
                    "value": "2022 \u2014 Property Damage, $16,500 paid"
                }
            ],
            "distractors": [
                "Do not classify as general contractor; applicant performs electrical work.",
                "Commercial Auto is separate; do not add vehicles here."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "HarborTech Electric Inc.",
            "g_contact_name": "Victor Chen",
            "g_phone": "(206) 555-0349",
            "g_email": "vchen@harbortechelectric.com",
            "g_fein": "91-3057188",
            "g_entity_type": "Corporation",
            "g_sic_code": "1731",
            "g_years_in_business": "12",
            "g_street": "804 Alaskan Way S",
            "g_city": "Seattle",
            "g_state": "WA",
            "g_zip": "98104",
            "cgl_business_description": "Commercial electrical installation and service",
            "cgl_exposure_basis": "Payroll",
            "cgl_annual_revenue": "2300000",
            "cgl_payroll": "940000",
            "cgl_subcontractor_costs": "180000",
            "cgl_occurrence_limit": "1000000",
            "cgl_aggregate_limit": "2000000",
            "cgl_products_completed": "2000000",
            "cgl_med_pay": "10000",
            "cgl_deductible": "1000",
            "g_additional_insured": "Portside Property Group LLC",
            "g_num_losses": "1",
            "g_loss1_year": "2022",
            "g_loss1_type": "Property Damage",
            "g_loss1_amount": "16500",
            "cgl_contractual_liability": "Yes",
            "cgl_professional_exposure": "No",
            "cgl_primary_noncontrib": "Yes",
            "cgl_waiver_subrogation": "Yes",
            "cgl_prior_cancel": "No"
        }
    },
    {
        "id": "cgl-hard-1",
        "line": "General Liability",
        "difficulty": "hard",
        "name": "Hard \u2014 FreshPack Foods",
        "description": "Food product distributor with products-completed operations, multiple certificates, and two prior product-related claims.",
        "fields": 35,
        "timeEstimate": "20\u201330 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 FreshPack Foods",
            "items": [
                {
                    "label": "Business Name",
                    "value": "FreshPack Foods Distribution LLC"
                },
                {
                    "label": "Contact",
                    "value": "Jillian Moore, Risk Manager"
                },
                {
                    "label": "Phone",
                    "value": "(414) 555-0788"
                },
                {
                    "label": "Business Email",
                    "value": "jmoore@freshpackfoods.com"
                },
                {
                    "label": "FEIN",
                    "value": "39-8820174"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "5141 \u2014 Groceries, General Line"
                },
                {
                    "label": "Years in Business",
                    "value": "14 years"
                },
                {
                    "label": "Location",
                    "value": "9800 W Heather Ave, Milwaukee, WI 53224"
                },
                {
                    "label": "Operations",
                    "value": "Wholesale distribution of packaged refrigerated foods"
                },
                {
                    "label": "Exposure Basis",
                    "value": "Sales"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$8,700,000"
                },
                {
                    "label": "Payroll",
                    "value": "$1,200,000"
                },
                {
                    "label": "Subcontractor Costs",
                    "value": "$95,000"
                },
                {
                    "label": "Limits",
                    "value": "Each Occurrence $2,000,000; Aggregate $4,000,000"
                },
                {
                    "label": "Products/Completed Ops",
                    "value": "$4,000,000"
                },
                {
                    "label": "Med Pay",
                    "value": "$10,000"
                },
                {
                    "label": "Deductible",
                    "value": "$5,000"
                },
                {
                    "label": "Additional Insured",
                    "value": "Metro Grocery Group; Lakefront Logistics Park"
                },
                {
                    "label": "Loss 1",
                    "value": "2021 \u2014 Products Liability, $42,000 paid"
                },
                {
                    "label": "Loss 2",
                    "value": "2023 \u2014 Premises BI, $31,500 paid"
                }
            ],
            "distractors": [
                "Do not include refrigerated truck cargo; this is GL only.",
                "Lakefront Logistics Park is an additional insured, not a mortgagee."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "FreshPack Foods Distribution LLC",
            "g_contact_name": "Jillian Moore",
            "g_phone": "(414) 555-0788",
            "g_email": "jmoore@freshpackfoods.com",
            "g_fein": "39-8820174",
            "g_entity_type": "LLC",
            "g_sic_code": "5141",
            "g_years_in_business": "14",
            "g_street": "9800 W Heather Ave",
            "g_city": "Milwaukee",
            "g_state": "WI",
            "g_zip": "53224",
            "cgl_business_description": "Wholesale distribution of packaged refrigerated foods",
            "cgl_exposure_basis": "Sales",
            "cgl_annual_revenue": "8700000",
            "cgl_payroll": "1200000",
            "cgl_subcontractor_costs": "95000",
            "cgl_occurrence_limit": "2000000",
            "cgl_aggregate_limit": "4000000",
            "cgl_products_completed": "4000000",
            "cgl_med_pay": "10000",
            "cgl_deductible": "5000",
            "g_additional_insured": "Metro Grocery Group; Lakefront Logistics Park",
            "g_num_losses": "2",
            "g_loss1_year": "2021",
            "g_loss1_type": "Products Liability",
            "g_loss1_amount": "42000",
            "g_loss2_year": "2023",
            "g_loss2_type": "Premises BI",
            "g_loss2_amount": "31500",
            "cgl_contractual_liability": "Yes",
            "cgl_professional_exposure": "No",
            "cgl_primary_noncontrib": "Yes",
            "cgl_waiver_subrogation": "Yes",
            "cgl_prior_cancel": "No"
        }
    }
],
  umbrella: [
    {
        "id": "umb-easy-1",
        "line": "Umbrella",
        "difficulty": "easy",
        "name": "Easy \u2014 CleanSweep Janitorial",
        "description": "Small janitorial contractor requesting $1M umbrella over GL only, no auto fleet, clean losses.",
        "fields": 31,
        "timeEstimate": "10\u201315 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 CleanSweep Janitorial",
            "items": [
                {
                    "label": "Business Name",
                    "value": "CleanSweep Janitorial LLC"
                },
                {
                    "label": "Contact",
                    "value": "Hannah Brooks, Owner"
                },
                {
                    "label": "Phone",
                    "value": "(615) 555-0166"
                },
                {
                    "label": "Business Email",
                    "value": "hannah@cleansweepjanitorial.com"
                },
                {
                    "label": "FEIN",
                    "value": "62-4081991"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "7349 \u2014 Building Cleaning Services"
                },
                {
                    "label": "Years in Business",
                    "value": "5 years"
                },
                {
                    "label": "Location",
                    "value": "310 Commerce St, Nashville, TN 37201"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$680,000"
                },
                {
                    "label": "Payroll",
                    "value": "$310,000"
                },
                {
                    "label": "Scheduled Autos",
                    "value": "0"
                },
                {
                    "label": "Umbrella Limit",
                    "value": "$1,000,000"
                },
                {
                    "label": "SIR",
                    "value": "$0"
                },
                {
                    "label": "Underlying GL",
                    "value": "LAVA Liability Shield, GL-2026-1188, $1M occ / $2M agg"
                },
                {
                    "label": "Underlying Auto",
                    "value": "None"
                },
                {
                    "label": "Employers Liability",
                    "value": "None"
                },
                {
                    "label": "Underlying Premium",
                    "value": "$4,800"
                },
                {
                    "label": "Prior Losses",
                    "value": "0"
                }
            ],
            "distractors": [
                "Do not add auto underlying coverage; company uses employee personal vehicles only.",
                "Bonding was mentioned but is not umbrella coverage."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "CleanSweep Janitorial LLC",
            "g_contact_name": "Hannah Brooks",
            "g_phone": "(615) 555-0166",
            "g_email": "hannah@cleansweepjanitorial.com",
            "g_fein": "62-4081991",
            "g_entity_type": "LLC",
            "g_sic_code": "7349",
            "g_years_in_business": "5",
            "g_street": "310 Commerce St",
            "g_city": "Nashville",
            "g_state": "TN",
            "g_zip": "37201",
            "umb_annual_revenue": "680000",
            "umb_payroll": "310000",
            "umb_vehicle_count": "0",
            "umb_limit": "1000000",
            "umb_retention": "0",
            "umb_gl_carrier": "LAVA Liability Shield",
            "umb_gl_policy": "GL-2026-1188",
            "umb_gl_occurrence_limit": "1000000",
            "umb_gl_aggregate_limit": "2000000",
            "umb_auto_carrier": "None",
            "umb_auto_policy": "None",
            "umb_auto_limit": "None",
            "umb_el_limit": "None",
            "umb_underlying_expiring_premium": "4800",
            "g_num_losses": "0",
            "umb_follow_form": "Yes",
            "umb_excluded_operations": "No",
            "umb_prior_excess_losses": "No",
            "umb_foreign_exposure": "No"
        }
    },
    {
        "id": "umb-normal-1",
        "line": "Umbrella",
        "difficulty": "normal",
        "name": "Normal \u2014 StoneBridge Contractors",
        "description": "Contractor requesting $2M umbrella over GL, Auto, and Employers Liability with certificates required.",
        "fields": 35,
        "timeEstimate": "15\u201320 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 StoneBridge Contractors",
            "items": [
                {
                    "label": "Business Name",
                    "value": "StoneBridge Contractors Inc."
                },
                {
                    "label": "Contact",
                    "value": "Mason Lee, CFO"
                },
                {
                    "label": "Phone",
                    "value": "(303) 555-0460"
                },
                {
                    "label": "Business Email",
                    "value": "mlee@stonebridgecontractors.com"
                },
                {
                    "label": "FEIN",
                    "value": "84-2671109"
                },
                {
                    "label": "Legal Entity",
                    "value": "Corporation"
                },
                {
                    "label": "SIC Code",
                    "value": "1521 \u2014 General Contractors"
                },
                {
                    "label": "Years in Business",
                    "value": "10 years"
                },
                {
                    "label": "Location",
                    "value": "4550 Brighton Blvd, Denver, CO 80216"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$3,900,000"
                },
                {
                    "label": "Payroll",
                    "value": "$1,250,000"
                },
                {
                    "label": "Scheduled Autos",
                    "value": "6"
                },
                {
                    "label": "Umbrella Limit",
                    "value": "$2,000,000"
                },
                {
                    "label": "SIR",
                    "value": "$10,000"
                },
                {
                    "label": "Underlying GL",
                    "value": "Pinnacle Commercial Liability, CGL-78551, $1M occ / $2M agg"
                },
                {
                    "label": "Underlying Auto",
                    "value": "Atlas Commercial Auto, CA-34421, $1M CSL"
                },
                {
                    "label": "Employers Liability",
                    "value": "500/500/500"
                },
                {
                    "label": "Underlying Premium",
                    "value": "$22,500"
                },
                {
                    "label": "Additional Insured",
                    "value": "Summit Retail Developers LLC"
                },
                {
                    "label": "Prior Loss",
                    "value": "2022 \u2014 Premises BI, $27,000 paid"
                }
            ],
            "distractors": [
                "Do not enter the umbrella limit as the GL occurrence limit.",
                "The certificate holder is additional insured, not loss payee."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "StoneBridge Contractors Inc.",
            "g_contact_name": "Mason Lee",
            "g_phone": "(303) 555-0460",
            "g_email": "mlee@stonebridgecontractors.com",
            "g_fein": "84-2671109",
            "g_entity_type": "Corporation",
            "g_sic_code": "1521",
            "g_years_in_business": "10",
            "g_street": "4550 Brighton Blvd",
            "g_city": "Denver",
            "g_state": "CO",
            "g_zip": "80216",
            "umb_annual_revenue": "3900000",
            "umb_payroll": "1250000",
            "umb_vehicle_count": "6",
            "umb_limit": "2000000",
            "umb_retention": "10000",
            "umb_gl_carrier": "Pinnacle Commercial Liability",
            "umb_gl_policy": "CGL-78551",
            "umb_gl_occurrence_limit": "1000000",
            "umb_gl_aggregate_limit": "2000000",
            "umb_auto_carrier": "Atlas Commercial Auto",
            "umb_auto_policy": "CA-34421",
            "umb_auto_limit": "1000000",
            "umb_el_limit": "500/500/500",
            "umb_underlying_expiring_premium": "22500",
            "g_additional_insured": "Summit Retail Developers LLC",
            "g_num_losses": "1",
            "g_loss1_year": "2022",
            "g_loss1_type": "Premises BI",
            "g_loss1_amount": "27000",
            "umb_follow_form": "Yes",
            "umb_excluded_operations": "No",
            "umb_prior_excess_losses": "No",
            "umb_foreign_exposure": "No"
        }
    },
    {
        "id": "umb-hard-1",
        "line": "Umbrella",
        "difficulty": "hard",
        "name": "Hard \u2014 Apex Components Group",
        "description": "Manufacturing and distribution account requesting $5M umbrella with GL, Auto, and EL underlying schedules plus prior excess concern.",
        "fields": 38,
        "timeEstimate": "20\u201330 min",
        "brief": {
            "title": "Client Intake Sheet \u2014 Apex Components Group",
            "items": [
                {
                    "label": "Business Name",
                    "value": "Apex Components Group LLC"
                },
                {
                    "label": "Contact",
                    "value": "Renee Walters, Risk Manager"
                },
                {
                    "label": "Phone",
                    "value": "(404) 555-0891"
                },
                {
                    "label": "Business Email",
                    "value": "rwalters@apexcomponents.com"
                },
                {
                    "label": "FEIN",
                    "value": "58-9971204"
                },
                {
                    "label": "Legal Entity",
                    "value": "LLC"
                },
                {
                    "label": "SIC Code",
                    "value": "3679 \u2014 Electronic Components"
                },
                {
                    "label": "Years in Business",
                    "value": "19 years"
                },
                {
                    "label": "Location",
                    "value": "2100 Fulton Industrial Blvd, Atlanta, GA 30336"
                },
                {
                    "label": "Annual Revenue",
                    "value": "$18,500,000"
                },
                {
                    "label": "Payroll",
                    "value": "$4,600,000"
                },
                {
                    "label": "Scheduled Autos",
                    "value": "14"
                },
                {
                    "label": "Umbrella Limit",
                    "value": "$5,000,000"
                },
                {
                    "label": "SIR",
                    "value": "$25,000"
                },
                {
                    "label": "Underlying GL",
                    "value": "Northstar Liability Specialty, GL-99201, $2M occ / $4M agg"
                },
                {
                    "label": "Underlying Auto",
                    "value": "Summit Transportation Casualty, CA-88002, $1M CSL"
                },
                {
                    "label": "Employers Liability",
                    "value": "1000/1000/1000"
                },
                {
                    "label": "Underlying Premium",
                    "value": "$96,000"
                },
                {
                    "label": "Additional Insured",
                    "value": "GlobalTech Retailers Inc."
                },
                {
                    "label": "Loss 1",
                    "value": "2021 \u2014 Products Liability, $85,000 paid"
                },
                {
                    "label": "Loss 2",
                    "value": "2023 \u2014 Auto Liability, $61,000 paid"
                }
            ],
            "distractors": [
                "Foreign sales exist but no foreign operations; answer foreign exposure carefully.",
                "Do not enter $5M as the underlying GL aggregate."
            ]
        },
        "correctAnswers": {
            "g_applicant_name": "Apex Components Group LLC",
            "g_contact_name": "Renee Walters",
            "g_phone": "(404) 555-0891",
            "g_email": "rwalters@apexcomponents.com",
            "g_fein": "58-9971204",
            "g_entity_type": "LLC",
            "g_sic_code": "3679",
            "g_years_in_business": "19",
            "g_street": "2100 Fulton Industrial Blvd",
            "g_city": "Atlanta",
            "g_state": "GA",
            "g_zip": "30336",
            "umb_annual_revenue": "18500000",
            "umb_payroll": "4600000",
            "umb_vehicle_count": "14",
            "umb_limit": "5000000",
            "umb_retention": "25000",
            "umb_gl_carrier": "Northstar Liability Specialty",
            "umb_gl_policy": "GL-99201",
            "umb_gl_occurrence_limit": "2000000",
            "umb_gl_aggregate_limit": "4000000",
            "umb_auto_carrier": "Summit Transportation Casualty",
            "umb_auto_policy": "CA-88002",
            "umb_auto_limit": "1000000",
            "umb_el_limit": "1000/1000/1000",
            "umb_underlying_expiring_premium": "96000",
            "g_additional_insured": "GlobalTech Retailers Inc.",
            "g_num_losses": "2",
            "g_loss1_year": "2021",
            "g_loss1_type": "Products Liability",
            "g_loss1_amount": "85000",
            "g_loss2_year": "2023",
            "g_loss2_type": "Auto Liability",
            "g_loss2_amount": "61000",
            "umb_follow_form": "Yes",
            "umb_excluded_operations": "No",
            "umb_prior_excess_losses": "Yes",
            "umb_foreign_exposure": "No"
        }
    }
]

};
