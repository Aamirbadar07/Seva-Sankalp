import { NgoPartner, NgoExtractionResult, ComplaintCategory } from './types';

export const INITIAL_NGO_PARTNERS: NgoPartner[] = [
  {
    id: 'ngo-001',
    name: 'Jan Jal Kalyan Foundation',
    registrationNumber: 'UP/2021/0291845',
    entityType: 'Trust',
    foundedYear: '2016',
    contactPerson: 'Dr. Ramesh Chandra Verma',
    designation: 'Managing Trustee',
    phone: '+91 98391 44521',
    email: 'contact@janjalkalyan.org',
    website: 'https://janjalkalyan.org',
    state: 'Uttar Pradesh',
    districts: ['Varanasi', 'Prayagraj', 'Mirzapur', 'Chandauli'],
    address: 'B-14/82, Sigra Commercial Complex, Sigra, Varanasi, UP - 221002',
    sectors: ['water', 'sanitation'],
    volunteerCount: 140,
    activeResponseUnits: 6,
    verificationStatus: 'verified',
    verificationSource: 'darpan_ai_match',
    darpanConfidence: 98.6,
    onboardedAt: '2026-08-14T10:30:00.000Z',
    bio: 'Specialized in community piped water restoration, handpump repairs, and urban water tank chlorination across Eastern UP.',
    assignedIssuesCount: 18,
  },
  {
    id: 'ngo-002',
    name: 'Gramin Swasthya & Shiksha Sansthan',
    registrationNumber: 'BR/2019/0187239',
    entityType: 'Society',
    foundedYear: '2014',
    contactPerson: 'Sunita Devi Prasad',
    designation: 'General Secretary',
    phone: '+91 94310 88219',
    email: 'info@graminswasthya.org.in',
    website: 'https://graminswasthya.org.in',
    state: 'Bihar',
    districts: ['Gaya', 'Patna', 'Nawada', 'Jehanabad'],
    address: 'Near Gandhi Maidan, Bodhgaya Road, Gaya, Bihar - 823001',
    sectors: ['health', 'education'],
    volunteerCount: 95,
    activeResponseUnits: 4,
    verificationStatus: 'verified',
    verificationSource: 'darpan_ai_match',
    darpanConfidence: 96.2,
    onboardedAt: '2026-09-02T14:15:00.000Z',
    bio: 'Focuses on Primary Health Center (PHC) audits, maternal health camps, and emergency patient transport support in rural districts.',
    assignedIssuesCount: 12,
  },
  {
    id: 'ngo-003',
    name: 'Pragati Marg Road Safety & Urban Action',
    registrationNumber: 'MH/2022/0348192',
    entityType: 'Section 8 Company',
    foundedYear: '2020',
    contactPerson: 'Aditya Kulkarni',
    designation: 'Director of Operations',
    phone: '+91 98220 73910',
    email: 'action@pragatimarg.in',
    website: 'https://pragatimarg.in',
    state: 'Maharashtra',
    districts: ['Pune', 'Thane', 'Nashik', 'Mumbai Suburban'],
    address: '402, Shivajinagar Tech Arcade, FC Road, Pune, MH - 411005',
    sectors: ['roads', 'public_transport' as ComplaintCategory],
    volunteerCount: 210,
    activeResponseUnits: 8,
    verificationStatus: 'verified',
    verificationSource: 'darpan_ai_match',
    darpanConfidence: 99.1,
    onboardedAt: '2026-09-18T09:45:00.000Z',
    bio: 'Rapid pothole geo-tagging, pedestrian black-spot identification, and municipality public works follow-ups.',
    assignedIssuesCount: 24,
  },
  {
    id: 'ngo-004',
    name: 'Urja Vikas Lok Manch',
    registrationNumber: 'RJ/2018/0114092',
    entityType: 'Society',
    foundedYear: '2017',
    contactPerson: 'Mahendra Singh Rathore',
    designation: 'President',
    phone: '+91 94140 33812',
    email: 'support@urjavikas.org',
    website: 'https://urjavikas.org',
    state: 'Rajasthan',
    districts: ['Jaipur', 'Alwar', 'Dausa'],
    address: 'Plot 18, Tonk Road Industrial Area, Jaipur, RJ - 302015',
    sectors: ['electricity', 'other'],
    volunteerCount: 80,
    activeResponseUnits: 3,
    verificationStatus: 'verified',
    verificationSource: 'darpan_ai_match',
    darpanConfidence: 95.8,
    onboardedAt: '2026-09-29T11:00:00.000Z',
    bio: 'Rural transformer outage reporting, voltage drop monitoring, and renewable solar streetlighting advocacy.',
    assignedIssuesCount: 9,
  },
  {
    id: 'ngo-005',
    name: 'Swachh Parisar Action Collective',
    registrationNumber: 'KA/2023/0419283',
    entityType: 'Non-Profit Organization',
    foundedYear: '2022',
    contactPerson: 'Deepa Narayan',
    designation: 'Program Lead',
    phone: '+91 98450 67123',
    email: 'hello@swachhparisar.org',
    website: 'https://swachhparisar.org',
    state: 'Karnataka',
    districts: ['Bengaluru Urban', 'Bengaluru Rural', 'Tumakuru'],
    address: '88, Koramangala 4th Block, 100ft Road, Bengaluru, KA - 560034',
    sectors: ['sanitation', 'water'],
    volunteerCount: 165,
    activeResponseUnits: 5,
    verificationStatus: 'verified',
    verificationSource: 'darpan_ai_match',
    darpanConfidence: 97.4,
    onboardedAt: '2026-10-04T16:20:00.000Z',
    bio: 'Ward-level municipal solid waste clearing, storm drain de-silting, and neighborhood composting mobilization.',
    assignedIssuesCount: 15,
  }
];

export interface SampleCertificatePreset {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  dataUrl: string; // SVG data URL for instant image display
  extracted: NgoExtractionResult;
}

// Generates an SVG certificate data URL for demo previews
function createCertificateSvg(name: string, darpanId: string, type: string, state: string, year: string, sector: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="800" height="520">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="50%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
      <linearGradient id="seal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <!-- Border & Background -->
    <rect width="800" height="520" fill="url(#bg)" rx="12"/>
    <rect x="24" y="24" width="752" height="472" fill="none" stroke="url(#gold)" stroke-width="2.5" rx="8" stroke-dasharray="8 4"/>
    <rect x="36" y="36" width="728" height="448" fill="none" stroke="#334155" stroke-width="1" rx="6"/>

    <!-- National Emblem / Watermark Seal Icon -->
    <circle cx="400" cy="260" r="140" fill="none" stroke="#1e293b" stroke-width="2" opacity="0.35"/>
    <circle cx="400" cy="260" r="110" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.35"/>

    <!-- Header -->
    <text x="400" y="85" text-anchor="middle" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="3">GOVERNMENT OF INDIA • NITI AAYOG</text>
    <text x="400" y="115" text-anchor="middle" fill="#f8fafc" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" letter-spacing="1">NGO-DARPAN REGISTRATION CERTIFICATE</text>
    <text x="400" y="138" text-anchor="middle" fill="#38bdf8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" letter-spacing="1">VOLUNTARY ACTION CELL (VAC) AUTHENTICATED</text>

    <!-- Divider Line -->
    <line x1="120" y1="155" x2="680" y2="155" stroke="url(#gold)" stroke-width="1.5"/>

    <!-- Body Information -->
    <text x="400" y="195" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">This is to certify that the Voluntary Organization / Non-Governmental Entity</text>
    <text x="400" y="235" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="26" font-weight="800">${name}</text>
    
    <text x="400" y="270" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14">is officially enrolled under NGO-DARPAN Portal with Unique Identity:</text>
    
    <!-- Unique ID Pill -->
    <rect x="260" y="285" width="280" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="21"/>
    <text x="400" y="312" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="18" font-weight="700" letter-spacing="2">${darpanId}</text>

    <!-- Details Grid -->
    <g transform="translate(100, 350)" font-family="system-ui, sans-serif" font-size="12">
      <text x="0" y="20" fill="#64748b">Legal Entity Type:</text>
      <text x="0" y="40" fill="#f8fafc" font-weight="700">${type}</text>

      <text x="180" y="20" fill="#64748b">Jurisdiction / State:</text>
      <text x="180" y="40" fill="#f8fafc" font-weight="700">${state}</text>

      <text x="350" y="20" fill="#64748b">Established Year:</text>
      <text x="350" y="40" fill="#f8fafc" font-weight="700">${year}</text>

      <text x="490" y="20" fill="#64748b">Key Civic Sector:</text>
      <text x="490" y="40" fill="#10b981" font-weight="700">${sector.toUpperCase()}</text>
    </g>

    <!-- Seal and Signatures -->
    <!-- Seal Left -->
    <circle cx="150" cy="450" r="32" fill="url(#seal)" stroke="url(#gold)" stroke-width="2"/>
    <text x="150" y="446" text-anchor="middle" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="9" font-weight="800">DARPAN</text>
    <text x="150" y="458" text-anchor="middle" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="8">VERIFIED</text>

    <!-- Signatures Right -->
    <line x1="560" y1="460" x2="700" y2="460" stroke="#64748b" stroke-width="1.5"/>
    <text x="630" y="475" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Authorized Registrar</text>
    <text x="630" y="488" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9">NITI Aayog, New Delhi</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const SAMPLE_CERTIFICATE_PRESETS: SampleCertificatePreset[] = [
  {
    id: 'preset-jal-seva',
    title: 'Jal Seva Lokhit Trust (Varanasi)',
    subtitle: 'NITI Aayog Darpan Certificate • Water & Sanitation',
    badge: 'Water Supply',
    dataUrl: createCertificateSvg(
      'Jal Seva Lokhit Trust',
      'UP/2022/0319482',
      'Public Charitable Trust',
      'Uttar Pradesh',
      '2018',
      'Water & Sanitation'
    ),
    extracted: {
      name: 'Jal Seva Lokhit Trust',
      registrationNumber: 'UP/2022/0319482',
      entityType: 'Trust',
      foundedYear: '2018',
      contactPerson: 'Virendra Pratap Singh',
      designation: 'General Secretary & Trustee',
      phone: '+91 98380 55192',
      email: 'contact@jalsevalokhit.org',
      website: 'https://jalsevalokhit.org',
      state: 'Uttar Pradesh',
      districts: ['Varanasi', 'Mirzapur', 'Chandauli'],
      address: 'Flat 12, Kashi Ganga Enclave, Mahmoorganj, Varanasi, UP - 221010',
      sectors: ['water', 'sanitation'],
      volunteerCount: 120,
      activeResponseUnits: 5,
      bio: 'Equipped with rapid mobile chlorine test kits and community groundwater purification units. Ready to address water supply pipelines and contamination alerts.',
      darpanConfidence: 99.2,
      detectedCertificateType: 'NITI Aayog NGO-DARPAN Official Enrolment',
      rawExtractedText: 'GOVERNMENT OF INDIA NITI AAYOG NGO-DARPAN CERTIFICATE: Jal Seva Lokhit Trust (UP/2022/0319482). Status: Active / Registered.'
    }
  },
  {
    id: 'preset-aarogya-mitra',
    title: 'Aarogya Mitra Gramin Sanstha (Gaya)',
    subtitle: 'Societies Registration Act • PHC & Healthcare',
    badge: 'Health & PHC',
    dataUrl: createCertificateSvg(
      'Aarogya Mitra Gramin Sanstha',
      'BR/2020/0248109',
      'Registered Society',
      'Bihar',
      '2015',
      'Public Health'
    ),
    extracted: {
      name: 'Aarogya Mitra Gramin Sanstha',
      registrationNumber: 'BR/2020/0248109',
      entityType: 'Society',
      foundedYear: '2015',
      contactPerson: 'Dr. Anita Kumari',
      designation: 'Project Director',
      phone: '+91 94312 99401',
      email: 'helpline@aarogyamitra.org',
      website: 'https://aarogyamitra.org',
      state: 'Bihar',
      districts: ['Gaya', 'Nawada', 'Jehanabad', 'Patna'],
      address: 'Near Sadar Hospital Chowk, Old GT Road, Gaya, Bihar - 823002',
      sectors: ['health'],
      volunteerCount: 85,
      activeResponseUnits: 4,
      bio: 'Specialized in rural sub-center doctor absenteeism monitoring, essential medicine stocking alerts, and telemedicine vans.',
      darpanConfidence: 97.8,
      detectedCertificateType: 'Societies Registration Act XXI of 1860 & Darpan',
      rawExtractedText: 'Societies Registration Certificate No. 412/2015. NGO Darpan ID BR/2020/0248109. Entity: Aarogya Mitra Gramin Sanstha.'
    }
  },
  {
    id: 'preset-marg-suraksha',
    title: 'Marg Suraksha Foundation (Pune)',
    subtitle: 'Section 8 Company • Potholes & Road Safety',
    badge: 'Roads & Safety',
    dataUrl: createCertificateSvg(
      'Marg Suraksha Foundation',
      'MH/2023/0481920',
      'Section 8 Company',
      'Maharashtra',
      '2021',
      'Road Infrastructure'
    ),
    extracted: {
      name: 'Marg Suraksha Foundation',
      registrationNumber: 'MH/2023/0481920',
      entityType: 'Section 8 Company',
      foundedYear: '2021',
      contactPerson: 'Sandeep B. Shinde',
      designation: 'Chief Coordinator',
      phone: '+91 98231 66200',
      email: 'dispatch@margsuraksha.in',
      website: 'https://margsuraksha.in',
      state: 'Maharashtra',
      districts: ['Pune', 'Thane', 'Nashik', 'Mumbai Suburban'],
      address: 'Survey No. 44, Baner Tech Park, Baner, Pune, MH - 411045',
      sectors: ['roads', 'sanitation'],
      volunteerCount: 190,
      activeResponseUnits: 7,
      bio: 'Civic rapid asphalt patching squad, pedestrian crossing visibility painting, and road defect geotagging team.',
      darpanConfidence: 98.4,
      detectedCertificateType: 'Ministry of Corporate Affairs Section 8 Certificate & Darpan',
      rawExtractedText: 'MCA Incorporation U85300PN2021NPL199201. NGO DARPAN: MH/2023/0481920. Marg Suraksha Foundation.'
    }
  }
];

export function getStoredNgos(): NgoPartner[] {
  if (typeof window === 'undefined') return INITIAL_NGO_PARTNERS;
  try {
    const raw = localStorage.getItem('nv_onboarded_ngos');
    if (!raw) {
      localStorage.setItem('nv_onboarded_ngos', JSON.stringify(INITIAL_NGO_PARTNERS));
      return INITIAL_NGO_PARTNERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_NGO_PARTNERS;
  } catch {
    return INITIAL_NGO_PARTNERS;
  }
}

export function saveStoredNgo(newNgo: NgoPartner): NgoPartner[] {
  if (typeof window === 'undefined') return [newNgo, ...INITIAL_NGO_PARTNERS];
  try {
    const current = getStoredNgos();
    const updated = [newNgo, ...current.filter(n => n.id !== newNgo.id)];
    localStorage.setItem('nv_onboarded_ngos', JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to save NGO to storage:', err);
    return [newNgo, ...INITIAL_NGO_PARTNERS];
  }
}

export function parseDocumentHeuristically(text: string, fileName?: string): NgoExtractionResult {
  const sample = SAMPLE_CERTIFICATE_PRESETS[0].extracted;
  const note = fileName ? ` [File: ${fileName}]` : '';
  return {
    ...sample,
    rawExtractedText: `${text || 'Parsed from uploaded document'}${note}`
  };
}
