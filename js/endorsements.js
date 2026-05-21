/* ============================================================
   LAVA Training Portal — Endorsements Library
   ============================================================ */

window.ENDORSEMENTS = {
  property: [
    { code: 'EP00', name: 'Building Code Compliance', desc: 'Increased limits for code-required upgrades post-loss', category: 'Building' },
    { code: 'EP01', name: 'Agreed Value', desc: 'Waive coinsurance penalty', category: 'Coverage' },
    { code: 'EP02', name: 'Replacement Cost — Contents', desc: 'Pay replacement cost instead of ACV', category: 'Coverage' },
    { code: 'EP03', name: 'Business Income — 30 Days', desc: 'Extend waiting period to 30 days', category: 'Income' },
    { code: 'EP04', name: 'Hired & Borrowed Equipment', desc: 'Extend coverage to rented/borrowed property', category: 'Equipment' },
    { code: 'EP05', name: 'Outdoor Property Floater', desc: 'Coverage for building materials outside', category: 'Property' },
    { code: 'EP06', name: 'Debris Removal', desc: 'Additional debris removal coverage', category: 'Cleanup' },
    { code: 'EP07', name: 'Demolition Cost Coverage', desc: 'Cover costs of demolishing damaged structure', category: 'Building' },
    { code: 'EP08', name: 'Boiler & Machinery', desc: 'Equipment breakdown coverage add-on', category: 'Equipment' },
    { code: 'EP09', name: 'Spoilage Coverage', desc: 'For food/temperature-sensitive products', category: 'Special' },
  ],
  auto: [
    { code: 'EA00', name: 'Uninsured Motorist (UM)', desc: 'Coverage when other driver is uninsured', category: 'Liability' },
    { code: 'EA01', name: 'Underinsured Motorist (UIM)', desc: 'Coverage when other driver under-insured', category: 'Liability' },
    { code: 'EA02', name: 'Medical Payments', desc: 'Medical expense coverage for occupants', category: 'Medical' },
    { code: 'EA03', name: 'Rental Reimbursement', desc: 'Daily rental car coverage while vehicle repaired', category: 'Services' },
    { code: 'EA04', name: 'Roadside Assistance', desc: '24/7 towing and roadside service', category: 'Services' },
    { code: 'EA05', name: 'Glass Coverage', desc: 'Windshield/glass replacement with low/no deductible', category: 'Physical Damage' },
    { code: 'EA06', name: 'Waiver of Deductible — Glass', desc: 'Remove deductible for glass claims', category: 'Physical Damage' },
    { code: 'EA07', name: 'Custom Equipment', desc: 'Coverage for aftermarket parts/equipment', category: 'Equipment' },
    { code: 'EA08', name: 'Non-Trucking Liability (Bobtail)', desc: 'Liability when truck operating without load', category: 'Commercial' },
    { code: 'EA09', name: 'Trailer Interchange', desc: 'Liability for rented trailers', category: 'Commercial' },
  ]
};

window.COVERAGE_OPTIONS = {
  property: [
    { id: 'cov-p1', label: 'Building', limits: ['100k','250k','500k','1M','2M','5M','10M'] },
    { id: 'cov-p2', label: 'Business Personal Property (BPP)', limits: ['25k','50k','100k','250k','500k','1M','2M','5M'] },
    { id: 'cov-p3', label: 'Business Income (12-month period)', limits: ['25k','50k','100k','250k','500k','1M','2M'] },
    { id: 'cov-p4', label: 'Extra Expense', limits: ['10k','25k','50k','100k','250k','500k'] },
    { id: 'cov-p5', label: 'Tenant Improvements', limits: ['25k','50k','100k','250k','500k','1M'] },
    { id: 'cov-p6', label: 'Equipment Breakdown', limits: ['50k','100k','250k','500k','1M'] },
    { id: 'cov-p7', label: 'Crime Coverage (Employees)', limits: ['10k','25k','50k','100k','250k'] },
  ],
  auto: [
    { id: 'cov-a1', label: 'Bodily Injury Liability', limits: ['100k','250k','300k','500k','1M','2M','5M'] },
    { id: 'cov-a2', label: 'Property Damage Liability', limits: ['25k','50k','100k','250k','500k','1M'] },
    { id: 'cov-a3', label: 'Combined Single Limit (CSL)', limits: ['300k','500k','1M','1.5M','2M','5M'] },
    { id: 'cov-a4', label: 'Comprehensive Deductible', limits: ['250','500','1000','2500','5000','10000'] },
    { id: 'cov-a5', label: 'Collision Deductible', limits: ['250','500','1000','2500','5000','10000'] },
    { id: 'cov-a6', label: 'Medical Payments', limits: ['1k','2500','5k','10k','25k'] },
    { id: 'cov-a7', label: 'Uninsured Motorist', limits: ['100k','250k','300k','500k','1M'] },
  ]
};
