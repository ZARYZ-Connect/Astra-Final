import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/products.css';

const CATEGORIES = [
  { id: 'time-attendance', label: 'Time Attendance', count: '17', desc: 'Accurate, AI-biometric visible-light attendance terminals for every workforce' },
  { id: 'access-control', label: 'Access Controller', count: '20', desc: 'IP-based and web-based multi-door controllers, readers, and outdoor panels' },
  { id: 'android-terminals', label: 'Android Terminals', count: '8', desc: 'Sleek Android OS biometric systems for custom developer app deployments' },
  { id: 'smart-lock', label: 'Smart Door Lock', count: '12', desc: 'Hybrid face/fingerprint mortise locks, padlocks, and hotel smart keys' },
  { id: 'software-platforms', label: 'Software', count: '4', desc: 'Enterprise security dashboards and real-time attendance management software' },
  { id: 'armatura', label: 'Armatura', count: '13', desc: 'Advanced Armatura access panels, NFC readers, and high-security credentials' },
  { id: 'entrance-control', label: 'Smart Entrance Control', count: '23', desc: 'High-speed pedestrian gates, swing/flap turnstiles, and boom barriers' },
  { id: 'security-inspection', label: 'Security Inspection', count: '15', desc: 'High-resolution dual-energy X-Ray scanners and multi-zone metal detectors' },
  { id: 'multi-purpose', label: 'Multi Purpose Integration', count: '2', desc: 'Advanced SIP Video Intercom solutions and multi-purpose systems' },
  { id: 'accessories', label: 'Accessories', count: '9', desc: 'Essential locks, exit buttons, RFID cards, and fingerprint scanners' },
  { id: 'video-surveillance', label: 'Video Surveillance', count: '10', desc: 'High-definition network and analog cameras for robust surveillance' }
];

const PRODUCTS = [
  // Time Attendance - Visible Light Series
  { category: 'time-attendance', name: 'MiniAC', sub: 'Visible Light Series', tags: ['Visible Light', 'MiniAC'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'SpeedFace-V5 Palm', sub: 'Visible Light Series', tags: ['Visible Light', 'Palm Recognition'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Face & Palm', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'SpeedFace V3L Series', sub: 'Visible Light Series', tags: ['Visible Light', 'Facial AI'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'ProBio Plus Series', sub: 'Visible Light Series', tags: ['Visible Light', 'ProBio'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'SpeedFace V5L', sub: 'Visible Light Series', tags: ['Visible Light', 'Facial AI'], badge: 'popular', featured: true, image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'FaceDepot 7C', sub: 'Visible Light Series', tags: ['Visible Light', 'FaceDepot'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Screen': '7-inch Touch' } },
  { category: 'time-attendance', name: 'MiniTA', sub: 'Visible Light Series', tags: ['Visible Light', 'MiniTA'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'D3', sub: 'Visible Light Series', tags: ['Visible Light', 'D3 Series'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', name: 'MiniAC Plus', sub: 'Visible Light Series', tags: ['Visible Light', 'MiniAC'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/bfdbb4fc1fcb59e45791e40c24f496a8.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },

  // Time Attendance - Fingerprint Attendance
  { category: 'time-attendance', name: 'iClock700', sub: 'iClock Series Fingerprint Attendance', tags: ['Fingerprint Attendance', 'iClock Series'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '3.5-inch TFT Screen' } },
  { category: 'time-attendance', name: 'LX50', sub: 'Classic Fingerprint Attendance', tags: ['Fingerprint Attendance', 'Classic'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', name: 'K40 Pro', sub: 'Classic Fingerprint Attendance', tags: ['Fingerprint Attendance', 'Classic'], badge: 'popular', featured: true, image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', name: 'K45 Pro', sub: 'Classic Fingerprint Attendance', tags: ['Fingerprint Attendance', 'Classic'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', name: 'IN01-A', sub: 'IN Series Fingerprint Attendance', tags: ['Fingerprint Attendance', 'IN Series'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '3-inch TFT Screen' } },

  // Time Attendance - Face Attendance
  { category: 'time-attendance', name: 'MB10-VL', sub: 'Standalone Device Face Attendance', tags: ['Face Attendance', 'Standalone Device'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Recognition': 'Face / Fingerprint', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', name: 'MB30', sub: 'Standalone Device Face Attendance', tags: ['Face Attendance', 'Standalone Device'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Recognition': 'Face / Fingerprint', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', name: 'MB360', sub: 'Standalone Device Face Attendance', tags: ['Face Attendance', 'Standalone Device'], badge: 'popular', featured: true, image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Recognition': 'Face / Fingerprint', 'Display': '2.8-inch TFT Screen' } },

  // Access Controller - Multi Door Controller
  { category: 'access-control', name: 'C3 Plus Series', sub: 'RFID Control Panel', tags: ['Multi Door Controller', 'RFID'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'RFID Control Panel', 'Doors': 'Multi-Door' } },
  { category: 'access-control', name: 'InBioPC Series & DE-10', sub: 'Biometric Control Panel', tags: ['Multi Door Controller', 'Biometric'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'Biometric Control Panel', 'Doors': 'Multi-Door' } },
  { category: 'access-control', name: 'InBio Pro Plus Series', sub: 'Biometric Control Panel', tags: ['Multi Door Controller', 'Biometric'], badge: 'popular', featured: true, image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'Biometric Control Panel', 'Doors': 'Multi-Door' } },
  { category: 'access-control', name: 'DM10', sub: 'RFID Control Panel', tags: ['Multi Door Controller', 'RFID'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'RFID Control Panel', 'Doors': 'Multi-Door' } },
  { category: 'access-control', name: 'Atlas Prox Series', sub: 'Atlas Series Control Panel', tags: ['Multi Door Controller', 'Atlas Series'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'Atlas Series', 'Doors': 'Multi-Door' } },
  { category: 'access-control', name: 'Atlas Bio Series', sub: 'Atlas Series Control Panel', tags: ['Multi Door Controller', 'Atlas Series'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'Atlas Series', 'Doors': 'Multi-Door' } },

  // Access Controller - Standalone Devices
  { category: 'access-control', name: 'SF1005', sub: 'Biometrics Terminal', tags: ['Standalone Devices', 'Biometrics'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', name: 'F09', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },
  { category: 'access-control', name: 'MK-V1', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },
  { category: 'access-control', name: 'ProMA Series', sub: 'Android Device Standalone', tags: ['Standalone Devices', 'Android Device'], badge: 'new', image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Android Device' } },
  { category: 'access-control', name: 'F18', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },
  { category: 'access-control', name: 'F21', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },
  { category: 'access-control', name: 'F22', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], badge: 'popular', featured: true, image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },
  { category: 'access-control', name: 'SF100', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },
  { category: 'access-control', name: 'X7', sub: 'Fingerprint Standalone', tags: ['Standalone Devices', 'Fingerprint'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg', specs: { 'Type': 'Fingerprint Terminal' } },

  // Access Controller - Readers
  { category: 'access-control', name: 'X7G', sub: 'Biometric Reader', tags: ['Readers', 'Biometric'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Type': 'Biometric Reader' } },
  { category: 'access-control', name: 'MA300', sub: 'Biometric Reader', tags: ['Readers', 'Biometric'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Type': 'Biometric Reader' } },
  { category: 'access-control', name: 'KR502E', sub: 'RFID Reader', tags: ['Readers', 'RFID'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Type': 'RFID Reader' } },
  { category: 'access-control', name: 'CR10E', sub: 'RFID Reader', tags: ['Readers', 'RFID'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png', specs: { 'Type': 'RFID Reader' } },

  // Access Controller - Elevator Access Controller
  { category: 'access-control', name: 'ACC-EC10', sub: 'Elevator Access Controller', tags: ['Elevator Access Controller'], image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png', specs: { 'Type': 'Elevator Controller' } },

  // Android Smart Terminals
  {
    category: 'android-terminals',
    name: 'SpeedFace-V4L',
    sub: 'Sleek visible-light facial terminal powered by secure Android OS for third-party apps.',
    tags: ['Android OS', '4-inch Screen', 'API Integration'],
    badge: 'new',
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg',
    specs: {
      'Face Capacity': '8,000 templates',
      'Operating System': 'Android OS with security layer',
      'Display': '4-inch TFT color touch panel',
      'Verification Speed': '<0.2 second',
      'Communication': 'TCP/IP, Wi-Fi, Bluetooth, Wiegand',
      'Developer Support': 'Full SDK and API interface access',
      'Sensor Type': 'Dual-Lens camera with visible light AI',
      'Dimensions': '148 x 78 x 16.5 mm'
    }
  },
  {
    category: 'android-terminals',
    name: 'ZPad Plus Kiosk',
    sub: 'Self-service Android visitor management kiosk with built-in camera and card reader.',
    tags: ['Visitor Kiosk', '7-inch Touchscreen', 'Custom App Build'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg',
    specs: {
      'Display': '7-inch LCD touch screen panel',
      'Operating System': 'Android 6.0 OS',
      'Card Reader': 'Integrated Mifare/EM RFID module',
      'Camera': 'Built-in 2MP camera',
      'Communication': 'Wi-Fi, Ethernet, USB, Bluetooth',
      'Storage': '8GB ROM / 1GB RAM',
      'Power Supply': 'PoE (Power over Ethernet) or 12V DC',
      'Enclosure': 'Desktop stand or Wall-mount'
    }
  },
  {
    category: 'android-terminals',
    name: 'S922 Portable',
    sub: 'Ruggedized portable biometric terminal designed for field attendance and patrol checks.',
    tags: ['Rugged Portable', 'IP65 Rated', 'Field Enrolment'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Fingerprint Capacity': '5,000 templates',
      'Card Capacity': '30,000 RFID cards',
      'Transactions': '200,000 logs',
      'Ingress Protection': 'IP65 shockproof, dustproof, and waterproof',
      'Communication': '3G/4G, Wi-Fi, TCP/IP, USB Client',
      'Battery Capacity': 'Built-in 7600mAh (up to 16 hours active)',
      'Dimensions': '225 x 235 x 125 mm (rubber protective casing)'
    }
  },

  // Biometric Smart Locks
  {
    category: 'smart-lock',
    name: 'TL800 Wi-Fi Lock',
    sub: 'Smart biometric Wi-Fi video lock with HD camera, intercom, and active indoor screen.',
    tags: ['Video Intercom', 'Wi-Fi Mortise', 'Mobile Release'],
    badge: 'new',
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Verification Modes': 'Face ID, Fingerprint, Card, Passcode, Key',
      'Camera Resolution': '2MP 1080P HD camera with night vision',
      'Indoor Screen': '3.5-inch LCD color screen display',
      'Communication': 'Direct Wi-Fi connection (no bridge needed)',
      'Mobile App': 'USmart Go (real-time video intercom)',
      'Battery Life': '4200mAh Lithium Rechargeable (12 months)',
      'Mortise': 'Fully electronic anti-theft mortise',
      'Material': 'Tempered glass & aluminum housing'
    }
  },
  {
    category: 'smart-lock',
    name: 'ML100 BLE DIY',
    sub: 'Biometric DIY smart lock with Bluetooth, card, and lock passcode capabilities.',
    tags: ['DIY Single Latch', 'Bluetooth BLE', 'Fingerprint Handle'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Fingerprint Capacity': '100 templates',
      'User Capacity': '300 users',
      'Communication': 'Bluetooth 5.0 BLE',
      'Mortise': 'Single Latch mortise (DIY easy-swap design)',
      'Material': 'Rugged Zinc Alloy casing',
      'Power Supply': '4 x AA alkaline batteries (emergency USB-C port)',
      'Software Support': 'ZSmart mobile app'
    }
  },

  // Entrance Control
  {
    category: 'entrance-control',
    name: 'FBL4000 Flap Gate',
    sub: 'Premium pedestrian flap barrier gate constructed with heavy-duty SUS304 steel.',
    tags: ['Retractable Flap', 'SUS304 Steel', 'Lobby Security'],
    badge: 'popular',
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Throughput Speed': '25 - 30 passages / minute',
      'Barrier Material': 'Acrylic retractable flap panels',
      'Housing': 'Brushed SUS304 Stainless Steel',
      'MCBF': '3 Million cycles',
      'Lane Width': '600 mm',
      'Emergency Feature': 'Barrier automatically collapses on power-cut',
      'Sensor Pairs': '6 pairs of infrared sensors (anti-pinch)'
    }
  },
  {
    category: 'entrance-control',
    name: 'TS2000 Pro Turnstile',
    sub: 'Robust tripod turnstile gate engineered for high-traffic industrial checkpoints.',
    tags: ['Tripod Turnstile', 'Anti-Tailgating', 'Drop-Arm Safety'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Throughput Speed': '30 passages / minute',
      'Housing': 'Brushed SUS304 Stainless Steel',
      'MCBF': '2 Million cycles',
      'Lane Width': '505 mm',
      'Safety Feature': 'Drop-arm collapses on power-loss/emergency trigger',
      'Bidirectional': 'Supports bidirectional verification control',
      'Dimensions': '1110 x 980 x 260 mm'
    }
  },
  {
    category: 'entrance-control',
    name: 'BG1000 Vehicle Barrier',
    sub: 'High-speed vehicle boom barrier with 24V brushless DC motor and LED strip chassis.',
    tags: ['Brushless Motor', 'Parking Barrier', '1.5s High Speed'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Operation Speed': '1.5 to 3.0 seconds (adjustable)',
      'Arm Length': '3 to 6 meters (telescopic arm option)',
      'Motor Type': '24V DC Brushless motor (long-life, anti-heating)',
      'MCBF': '3 Million cycles',
      'Chassis Protection': 'IP54 weatherproof structural housing',
      'LED Chassis Strip': 'Changes green/red indicating arm status',
      'Safety Features': 'Rebounds on obstacle collision, loop sensor ready'
    }
  },

  // Security Inspection
  {
    category: 'security-inspection',
    name: 'ZKX5030A X-Ray',
    sub: 'Dual-energy X-Ray baggage scanning system for baggage and parcel threat analysis.',
    tags: ['Baggage Scanner', 'Dual-Energy X-Ray', 'Threat Image Projection'],
    badge: 'popular',
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Tunnel Dimensions': '507 mm (width) x 305 mm (height)',
      'Conveyor Speed': '0.20 m/s',
      'High Wire Resolution': '38 AWG (0.1 mm typical copper wire)',
      'Steel Penetration': '34 mm (typical steel penetration)',
      'Software System': 'Threat Image Projection (TIP), Organic/Inorganic separation',
      'Conveyor Max Load': '120 kg (evenly distributed)',
      'Radiation Safety': 'Strict compliance with international standards (<0.1 \u03bcGy/h)'
    }
  },
  {
    category: 'security-inspection',
    name: 'ZK-D3180S Zones',
    sub: 'Walk-through multi-zone metal detector with precise threat localization zones.',
    tags: ['18 Detection Zones', '256 Sensitivities', 'Alarm Tally Counter'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Detection Zones': '18 independent zones',
      'Sensitivity Levels': '256 adjustable sensitivity levels per zone',
      'Display Screen': '5.7-inch LCD color control screen',
      'Counting sensors': 'Automated passenger & alarm tally counters',
      'Operating Frequency': '100 operating channels for anti-interference',
      'Material Protection': 'Fireproof, waterproof structural fiber panels',
      'Diagnostics': 'Auto-self diagnostics on power-up'
    }
  },

  // Software Platforms
  {
    category: 'software-platforms',
    name: 'ZKBio CVSecurity',
    sub: 'Unified enterprise all-in-one web-based security microservices platform.',
    tags: ['Microservices Platform', 'Unified Dashboard', 'Enterprise Linkage'],
    badge: 'popular',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    specs: {
      'System Architecture': 'Web-based microservices architecture (highly scalable)',
      'Modules Supported': 'Access, Attendance, Visitor, Parking, Elevator, CCTV',
      'Max Door Capacity': '10,000 doors control',
      'Max Personnel': '50,000 users database',
      'Database Engine': 'SQL Server, PostgreSQL, Oracle compatible',
      'Global Linkages': 'Dynamic multi-system triggers (e.g. Alarm open doors & record)',
      'Channel Protection': 'HTTPS, SSL/TLS, AES-256 local database encryption'
    }
  },
  {
    category: 'software-platforms',
    name: 'ZKBio Time',
    sub: 'Powerful web-based real-time time attendance and payroll integration software.',
    tags: ['Time Attendance', 'Real-Time Sync', 'Payroll Middleware'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    specs: {
      'System Type': 'Web-based time attendance platform',
      'Synchronization': 'Real-time automatic terminal log capture',
      'Shift Management': 'Flexible schedules, auto-roster, break rules',
      'Reporting Format': 'PDF, Excel, CSV, payroll integrations',
      'API Integrations': 'Zoho, SAP, ADP, Zoho Peoples, Oracle middleware',
      'Mobile App': 'ZKBio Time Mobile App (Geo-Fencing attendance)'
    }
  },

  // Armatura Premium
  {
    category: 'armatura',
    name: 'Armatura One Terminal',
    sub: 'All-in-one intelligent armatura multi-biometric credential reader terminal.',
    tags: ['AI Facial 50k', 'NFC & NFC Mifare', 'TLS 1.3 Supervised'],
    badge: 'new',
    featured: true,
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Face Capacity': '50,000 face templates',
      'Credentials Supported': 'AI Face, Fingerprint, RFID Card, Mobile NFC, Bluetooth BLE',
      'Ingress Protection': 'IP66 Weatherproof & IK08 Vandalproof casing',
      'Operating Temperature': '-30\u00b0C to 60\u00b0C (built-in automatic heater)',
      'Encryption Standards': 'TLS 1.3 security channel, AES-256 database',
      'Communication': 'TCP/IP, RS485, OSDP v2 reader interface',
      'Sensor Camera': '2MP Visible Light HDR Facial Camera'
    }
  },
  {
    category: 'armatura',
    name: 'Armatura A1 Controller',
    sub: 'Supervised advanced multi-door armatura access controller with embedded server.',
    tags: ['OSDP v2', 'Supervised Relays', 'TLS 1.3 Channel'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Doors Controlled': '4 doors (bidirectional OSDP reader support)',
      'Supervised Inputs': '32 supervised input terminal zones',
      'Output Relays': '16 Form-C dry-contact relay outputs',
      'Communication': 'TCP/IP, OSDP v2, RS485 interfaces',
      'Personnel Capacity': '100,000 card holders / 1,000,000 logs offline',
      'ESD Protection': 'Advanced power surge and static discharge shields',
      'Enclosure Box': 'Heavy-duty steel box with backup battery charge circuit'
    }
  },

  // Multi Purpose Integration
  {
    category: 'multi-purpose',
    name: 'SIP Video Intercom',
    sub: 'Advanced video intercom system for multi-purpose integration.',
    tags: ['Video Intercom', 'SIP Protocol'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/240d1fa4a45acb97b1d995216420e1d2.png',
    specs: {
      'Protocol': 'SIP Standard Protocol',
      'Camera': 'HD 1080P with Night Vision',
      'Display': '7-inch indoor touchscreen'
    }
  },

  // Accessories
  {
    category: 'accessories',
    name: 'ZKTeco Push Button',
    sub: 'Durable exit push button for access control systems.',
    tags: ['Exit Button', 'Accessory'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211213/5bfdc0dd30f7bebb513b34ce843e59f0.png',
    specs: {
      'Material': 'Stainless Steel / Aluminum Alloy',
      'Output Contact': 'NO/NC/COM',
      'Durability': '1,000,000 cycles tested'
    }
  },

  // Video Surveillance
  {
    category: 'video-surveillance',
    name: '4MP Network Camera',
    sub: 'High-definition network camera with advanced AI analytics.',
    tags: ['IP Camera', 'AI Analytics'],
    image: 'https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20211210/4e39c8665c47095ab4fd384d98808b1a.jpg',
    specs: {
      'Resolution': '4 Megapixel (2560x1440)',
      'Night Vision': 'IR up to 30m distance',
      'Analytics': 'Line crossing, intrusion detection'
    }
  }
];

export default function Products({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleProductSearch = (e) => {
      const hash = e.detail;
      if (CATEGORIES.some(c => c.id === hash)) {
        setActiveCategory(hash);
        setSearchQuery('');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      } else {
        setActiveCategory('all');
        // Replace hyphens with spaces for better searching (e.g. "visible-light" -> "visible light")
        setSearchQuery(decodeURIComponent(hash).replace(/-/g, ' '));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('product-search', handleProductSearch);
    return () => window.removeEventListener('product-search', handleProductSearch);
  }, []);

  useScrollReveal([activeCategory, searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleLinkClick = (e, to) => {
    if (to.startsWith('#')) {
      const targetId = to.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const filteredCategories = CATEGORIES.filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;

    const productsInCat = PRODUCTS.filter(p => p.category === cat.id);
    if (!searchQuery) return productsInCat.length > 0;

    const q = searchQuery.toLowerCase();
    const matchingProducts = productsInCat.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
    return matchingProducts.length > 0;
  });

  const getFilteredProducts = (catId) => {
    const productsInCat = PRODUCTS.filter(p => p.category === catId);
    if (!searchQuery) return productsInCat;

    const q = searchQuery.toLowerCase();
    return productsInCat.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container page-hero-inner">
          <div className="tag">Full Catalogue</div>
          <h1>Our <em>Product</em> Range</h1>
          <p>Enterprise-grade biometric devices, access control systems, software platforms, and security inspection tools — all engineered for India's most demanding environments.</p>
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              id="searchInput"
              placeholder="Search products, e.g. SpeedFace, Atlas controller, armatura…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCategory('all');
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container stats-bar-inner">
          <div className="stat-item">
            <div className="stat-val">8<span>+</span></div>
            <div className="stat-lbl">Premium Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">133<span>+</span></div>
            <div className="stat-lbl">ZKTeco Models</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">500<span>+</span></div>
            <div className="stat-lbl">Sites Deployed</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">99<span>.9%</span></div>
            <div className="stat-lbl">Uptime SLA</div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="marquee-item"><span className="dot"></span>Biometric Access Control</div>
          <div className="marquee-item"><span className="dot"></span>Time &amp; Attendance</div>
          <div className="marquee-item"><span className="dot"></span>Smart Door Lock</div>
          <div className="marquee-item"><span className="dot"></span>Turnstile Solutions</div>
          <div className="marquee-item"><span className="dot"></span>Visitor Management</div>
          <div className="marquee-item"><span className="dot"></span>Security Inspection</div>
          <div className="marquee-item"><span className="dot"></span>Identity Platform</div>
          <div className="marquee-item"><span className="dot"></span>HRMS Integration</div>
          <div className="marquee-item"><span className="dot"></span>Biometric Access Control</div>
          <div className="marquee-item"><span className="dot"></span>Time &amp; Attendance</div>
          <div className="marquee-item"><span className="dot"></span>Smart Door Lock</div>
          <div className="marquee-item"><span className="dot"></span>Turnstile Solutions</div>
          <div className="marquee-item"><span className="dot"></span>Visitor Management</div>
          <div className="marquee-item"><span className="dot"></span>Security Inspection</div>
          <div className="marquee-item"><span className="dot"></span>Identity Platform</div>
          <div className="marquee-item"><span className="dot"></span>HRMS Integration</div>
        </div>
      </div>

      {/* MAIN PRODUCTS LAYOUT */}
      <div className="container">
        <div className="products-layout">
          {/* SIDEBAR */}
          <button className="sidebar-toggle" id="sidebarToggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰ Browse Categories
          </button>

          <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="sidebar">
            <div className="sidebar-section">
              <div className="sidebar-title">Categories</div>
              <button
                className={`cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('all');
                  setSidebarOpen(false);
                }}
              >
                All Products <span className="cat-count">133</span>
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSidebarOpen(false);
                    const el = document.getElementById(cat.id);
                    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                  }}
                >
                  {cat.label} <span className="cat-count">{cat.count}</span>
                </button>
              ))}
            </div>
            <div className="sidebar-section" style={{ marginTop: '.5rem' }}>
              <div className="sidebar-title">Need Help?</div>
              <div style={{ background: 'rgba(0,180,216,.06)', border: '1px solid rgba(0,180,216,.15)', borderRadius: '10px', padding: '1rem', fontSize: '.83rem', color: 'var(--muted)' }}>
                <p style={{ color: 'var(--white)', fontWeight: 600, fontFamily: 'var(--font-h)', marginBottom: '.4rem' }}>Talk to an Expert</p>
                <p>Not sure which model fits your site? Our engineers will assess and recommend.</p>
                <a href="contact.html" className="btn btn-primary" style={{ marginTop: '.85rem', fontSize: '.78rem', padding: '.5rem 1rem', borderRadius: '6px' }} onClick={(e) => handleLinkClick(e, 'contact.html')}>Contact Us &rarr;</a>
              </div>
            </div>
          </aside>

          {/* PRODUCT CONTENT */}
          <main id="productMain">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(cat => {
                const matchedProducts = getFilteredProducts(cat.id);
                return (
                  <div key={cat.id} className="cat-section reveal" id={cat.id}>
                    <div className="cat-section-title">
                      <div>
                        <div className="cat-section-label">{cat.label}</div>
                        <div className="cat-section-desc">{cat.desc}</div>
                      </div>
                    </div>
                    <div className="product-grid">
                      {matchedProducts.map((p, idx) => (
                        <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                          {/* Real Transparent Product Image */}
                          <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                            <img src={p.image} alt={p.name} className="product-card-img" />
                          </div>

                          {/* Clean Product Name without any leading Emojis */}
                          <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                            {p.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--muted)' }}>
                <h3>No matching products found</h3>
                <p style={{ marginTop: '.5rem' }}>Try refining your search query or choosing another category.</p>
              </div>
            )}


          </main>
        </div>
      </div>

      {/* DYNAMIC TECHNICAL SPECS MODAL */}
      {selectedProduct && (
        <div className="specs-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="specs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="specs-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="specs-modal-header">
              <div className="specs-modal-visual">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="specs-modal-img" />
              </div>
              <div>
                <h2>{selectedProduct.name}</h2>
                <div className="specs-modal-meta">
                  <span className="specs-modal-badge">{CATEGORIES.find(c => c.id === selectedProduct.category)?.label}</span>
                  {selectedProduct.badge && (
                    <span className={`specs-modal-status ${selectedProduct.badge}`}>
                      {selectedProduct.badge.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="specs-modal-body">
              <p className="specs-modal-desc">{selectedProduct.sub}</p>

              <div className="specs-table-title">⚡ Technical Specifications</div>
              <div className="specs-table">
                {Object.entries(selectedProduct.specs).map(([key, val]) => (
                  <div className="specs-row" key={key}>
                    <span className="specs-label">{key}</span>
                    <span className="specs-value">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="specs-modal-footer">
              <a href="#contact" className="btn btn-primary" style={{ padding: '.65rem 1.4rem', fontSize: '.88rem' }} onClick={(e) => {
                setSelectedProduct(null);
                handleLinkClick(e, '#contact');
              }}>
                Enquire Now
              </a>
              <button className="btn btn-outline" style={{ padding: '.65rem 1.4rem', fontSize: '.88rem' }} onClick={() => setSelectedProduct(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}


    </>
  );
}
