import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/products.css';

const CATEGORIES = [
  { id: 'access-control', label: 'Access Control', desc: 'IP-based multi-door controllers, biometric readers, standalone panels, smart locks, and entrance control systems' },
  { id: 'time-attendance', label: 'Time Attendance', desc: 'Accurate, AI-biometric visible-light & fingerprint attendance terminals for every workforce' }
];

const ACCESS_CONTROL_SUBCATEGORIES = [
  "RS485 Reader Series",
  "SA32-E",
  "KR600 Series",
  "QR600 Series",
  "KR500 Series",
  "FR1500S",
  "MR1010 MR1020",
  "MA300",
  "FR1200",
  "SF100",
  "SF1005",
  "Atlas Prox Series",
  "Atlas Bio Series",
  "EC16 & DEX16",
  "SC405",
  "SA40",
  "ProMA",
  "MK-V1",
  "F22",
  "F21",
  "F18",
  "SC800",
  "F09",
  "EC10 & EX16",
  "DM10",
  "X7",
  "InBio PC Series & DE10",
  "C3-100 Plus",
  "inBio-160 Pro Plus"
];

const TIME_ATTENDANCE_SUBCATEGORIES = [
  "MB360",
  "MB30",
  "MB10-VL",
  "K40 Pro",
  "K45 Pro",
  "LX50",
  "IN01-A",
  "iClock700",
  "SpeedFace-V5 Palm",
  "SpeedFaceM4",
  "SpeedFace H5L",
  "FaceDepot-7BL",
  "FaceDepot 8AL",
  "FaceDepot 4A",
  "Eface 10",
  "D3",
  "MiniTA",
  "SpeedFace V3L Series",
  "SpeedFace - V5L",
  "ProBio Plus Series",
  "MiniAC",
  "FaceDepot 7C",
  "FaceDepot 7CL",
  "MiniAC Plus"
];

const PRODUCTS = [
  // 1. RS485 Reader Series (3 items)
  { category: 'access-control', subCategory: 'RS485 Reader Series', name: 'RS485 Reader Series (Model 1)', sub: 'High Speed RS485 Biometric & RFID Reader', tags: ['RS485 Reader Series', 'Reader'], image: '/images/products/Access Control/RS485 Reader Series/RS485 Reader Series.png', specs: { 'Interface': 'RS485', 'Protection': 'IP65 Water Resistant' } },
  { category: 'access-control', subCategory: 'RS485 Reader Series', name: 'RS485 Reader Series (Model 2)', sub: 'High Speed RS485 Biometric & RFID Reader', tags: ['RS485 Reader Series', 'Reader'], image: '/images/products/Access Control/RS485 Reader Series/RS485 Reader Series-2.png', specs: { 'Interface': 'RS485', 'Protection': 'IP65 Water Resistant' } },
  { category: 'access-control', subCategory: 'RS485 Reader Series', name: 'RS485 Reader Series (Model 3)', sub: 'High Speed RS485 Biometric & RFID Reader', tags: ['RS485 Reader Series', 'Reader'], image: '/images/products/Access Control/RS485 Reader Series/RS485 Reader Series-3.png', specs: { 'Interface': 'RS485', 'Protection': 'IP65 Water Resistant' } },

  // 2. SA32-E (1 item)
  { category: 'access-control', subCategory: 'SA32-E', name: 'SA32-E', sub: 'Standalone RFID Access Controller', tags: ['SA32-E', 'RFID'], image: '/images/products/Access Control/SA32-E/SA32-E.jpg', specs: { 'Type': 'Standalone RFID', 'Card Capacity': '1,000 Cards' } },

  // 3. KR600 Series (4 items)
  { category: 'access-control', subCategory: 'KR600 Series', name: 'KR600M_01', sub: 'Wiegand RFID Card Reader', tags: ['KR600 Series', 'RFID Reader'], image: '/images/products/Access Control/KR600 Series/KR600M_01.png', specs: { 'Interface': 'Wiegand 26/34', 'Reading Range': 'Up to 5cm' } },
  { category: 'access-control', subCategory: 'KR600 Series', name: 'KR600M_02', sub: 'Wiegand RFID Card Reader', tags: ['KR600 Series', 'RFID Reader'], image: '/images/products/Access Control/KR600 Series/KR600M_02.png', specs: { 'Interface': 'Wiegand 26/34', 'Reading Range': 'Up to 5cm' } },
  { category: 'access-control', subCategory: 'KR600 Series', name: 'KR600K_02', sub: 'Keypad & RFID Card Reader', tags: ['KR600 Series', 'RFID Reader'], image: '/images/products/Access Control/KR600 Series/KR600K_02.png', specs: { 'Interface': 'Wiegand 26/34', 'Keypad': 'Integrated Touch' } },
  { category: 'access-control', subCategory: 'KR600 Series', name: 'KR600M-S_02', sub: 'Stainless Steel RFID Reader', tags: ['KR600 Series', 'RFID Reader'], image: '/images/products/Access Control/KR600 Series/KR600M-S_02.png', specs: { 'Interface': 'Wiegand 26/34', 'Protection': 'IP65 Waterproof' } },

  // 4. QR600 Series (4 items)
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series (Model 1)', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/QR600 Series/QR600 Series.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series (Model 2)', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/QR600 Series/QR600 Series-2.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series (Model 3)', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/QR600 Series/QR600 Series-3.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series (Model 4)', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/QR600 Series/QR600 Series-4.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },

  // 5. KR500 Series (3 items)
  { category: 'access-control', subCategory: 'KR500 Series', name: 'KR500 Series (Model 1)', sub: 'Compact Outdoor RFID Reader', tags: ['KR500 Series', 'RFID'], image: '/images/products/Access Control/KR500 Series/KR500 Series.png', specs: { 'Ingress Protection': 'IP65 Waterproof', 'Interface': 'Wiegand' } },
  { category: 'access-control', subCategory: 'KR500 Series', name: 'KR500 Series (Model 2)', sub: 'Compact Outdoor RFID Reader', tags: ['KR500 Series', 'RFID'], image: '/images/products/Access Control/KR500 Series/KR500 Series-2.png', specs: { 'Ingress Protection': 'IP65 Waterproof', 'Interface': 'Wiegand' } },
  { category: 'access-control', subCategory: 'KR500 Series', name: 'KR500 Series (Model 3)', sub: 'Compact Outdoor RFID Reader', tags: ['KR500 Series', 'RFID'], image: '/images/products/Access Control/KR500 Series/KR500 Series-3.png', specs: { 'Ingress Protection': 'IP65 Waterproof', 'Interface': 'Wiegand' } },

  // 6. FR1500S (3 items)
  { category: 'access-control', subCategory: 'FR1500S', name: 'FR1500S (Model 1)', sub: 'Flush-Mounted Stainless Steel Fingerprint Reader', tags: ['FR1500S', 'Fingerprint'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Installation': 'Flush-Mounted', 'Sensor': 'SilkID Optical Sensor' } },
  { category: 'access-control', subCategory: 'FR1500S', name: 'FR1500S (Model 2)', sub: 'Flush-Mounted Stainless Steel Fingerprint Reader', tags: ['FR1500S', 'Fingerprint'], image: '/images/products/Access Control/FR1500S/FR1500S-2.png', specs: { 'Installation': 'Flush-Mounted', 'Sensor': 'SilkID Optical Sensor' } },
  { category: 'access-control', subCategory: 'FR1500S', name: 'FR1500S (Model 3)', sub: 'Flush-Mounted Stainless Steel Fingerprint Reader', tags: ['FR1500S', 'Fingerprint'], image: '/images/products/Access Control/FR1500S/FR1500S-3.png', specs: { 'Installation': 'Flush-Mounted', 'Sensor': 'SilkID Optical Sensor' } },

  // 7. MR1010 MR1020 (2 items)
  { category: 'access-control', subCategory: 'MR1010 MR1020', name: 'MR1010 MR1020 (Model 1)', sub: 'Multi-Frequency RFID Reader', tags: ['MR1010 MR1020', 'RFID'], image: '/images/products/Access Control/MR1010 MR1020/MR1010 MR1020.jpg', specs: { 'Frequency': '125kHz & 13.56MHz', 'Interface': 'Wiegand' } },
  { category: 'access-control', subCategory: 'MR1010 MR1020', name: 'MR1010 MR1020 (Model 2)', sub: 'Multi-Frequency RFID Reader', tags: ['MR1010 MR1020', 'RFID'], image: '/images/products/Access Control/MR1010 MR1020/MR1010 MR1020.png', specs: { 'Frequency': '125kHz & 13.56MHz', 'Interface': 'Wiegand' } },

  // 8. MA300 (2 items)
  { category: 'access-control', subCategory: 'MA300', name: 'MA300 (Model 1)', sub: 'Vandalproof Outdoor Biometric Terminal', tags: ['MA300', 'Biometric Reader'], image: '/images/products/Access Control/MA300/MA300.png', specs: { 'Housing': 'Metallic IP65 Vandalproof', 'Capacity': '1,500 Fingerprints' } },
  { category: 'access-control', subCategory: 'MA300', name: 'MA300 (Model 2)', sub: 'Vandalproof Outdoor Biometric Terminal', tags: ['MA300', 'Biometric Reader'], image: '/images/products/Access Control/MA300/MA300-2.png', specs: { 'Housing': 'Metallic IP65 Vandalproof', 'Capacity': '1,500 Fingerprints' } },

  // 9. FR1200 (2 items)
  { category: 'access-control', subCategory: 'FR1200', name: 'FR1200 (Model 1)', sub: 'Outdoor Biometric RS485 Slave Reader', tags: ['FR1200', 'Biometric'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Interface': 'RS485 Slave' } },
  { category: 'access-control', subCategory: 'FR1200', name: 'FR1200 (Model 2)', sub: 'Outdoor Biometric RS485 Slave Reader', tags: ['FR1200', 'Biometric'], image: '/images/products/Access Control/FR1200/FR1200-2.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Interface': 'RS485 Slave' } },

  // 10. SF100 (3 items)
  { category: 'access-control', subCategory: 'SF100', name: 'SF100 (Model 1)', sub: 'Sleek IP Biometric Access Control Terminal', tags: ['SF100', 'Fingerprint'], image: '/images/products/Access Control/SF100/SF100-1.png', specs: { 'Display': '2.8-inch Color Touch', 'Capacity': '1,500 Fingerprints' } },
  { category: 'access-control', subCategory: 'SF100', name: 'SF100 (Model 2)', sub: 'Sleek IP Biometric Access Control Terminal', tags: ['SF100', 'Fingerprint'], image: '/images/products/Access Control/SF100/SF100-2.png', specs: { 'Display': '2.8-inch Color Touch', 'Capacity': '1,500 Fingerprints' } },
  { category: 'access-control', subCategory: 'SF100', name: 'SF100 (Model 3)', sub: 'Sleek IP Biometric Access Control Terminal', tags: ['SF100', 'Fingerprint'], image: '/images/products/Access Control/SF100/SF100-3.png', specs: { 'Display': '2.8-inch Color Touch', 'Capacity': '1,500 Fingerprints' } },

  // 11. SF1005 (6 items)
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005 (Model 1)', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/SF1005/SF1005_00_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005 (Model 2)', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/SF1005/SF1005_01_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005 (Model 3)', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/SF1005/SF1005_02_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005 (Model 4)', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/SF1005/SF1005_03_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005 (Model 5)', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/SF1005/SF1005_04_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005 (Model 6)', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/SF1005/SF1005_05_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },

  // 12. Atlas Prox Series (4 items)
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series (Model 1)', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Atlas Prox Series/Atlas Prox Series.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series (Model 2)', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Atlas Prox Series/Atlas Prox Series-2.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series (Model 3)', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Atlas Prox Series/Atlas Prox Series-3.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series (Model 4)', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Atlas Prox Series/Atlas Prox Series-4.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },

  // 13. Atlas Bio Series (2 items)
  { category: 'access-control', subCategory: 'Atlas Bio Series', name: 'Atlas Bio Series (Model 1)', sub: 'Web-Based Biometric Control Panel', tags: ['Atlas Bio Series', 'Atlas Series'], image: '/images/products/Access Control/Atlas Bio Series/Atlas Bio Series.jpg', specs: { 'Management': 'Embedded Web Server', 'Biometric Engine': 'Primary Matching' } },
  { category: 'access-control', subCategory: 'Atlas Bio Series', name: 'Atlas Bio Series (Model 2)', sub: 'Web-Based Biometric Control Panel', tags: ['Atlas Bio Series', 'Atlas Series'], image: '/images/products/Access Control/Atlas Bio Series/Atlas Bio Series-2.jpg', specs: { 'Management': 'Embedded Web Server', 'Biometric Engine': 'Primary Matching' } },

  // 14. EC16 & DEX16 (2 items)
  { category: 'access-control', subCategory: 'EC16 & DEX16', name: 'EC16 & DEX16 (Model 1)', sub: 'Elevator & Floor Control Expansion Module', tags: ['EC16 & DEX16', 'Elevator'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Floors Controlled': '16 Floors per board', 'Expansion': 'Up to 128 floors' } },
  { category: 'access-control', subCategory: 'EC16 & DEX16', name: 'EC16 & DEX16 (Model 2)', sub: 'Elevator & Floor Control Expansion Module', tags: ['EC16 & DEX16', 'Elevator'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16-2.png', specs: { 'Floors Controlled': '16 Floors per board', 'Expansion': 'Up to 128 floors' } },

  // 15. SC405 (2 items)
  { category: 'access-control', subCategory: 'SC405', name: 'SC405 (Model 1)', sub: 'RFID Standalone Access Terminal', tags: ['SC405', 'RFID'], image: '/images/products/Access Control/SC405/SC405.png', specs: { 'Display': '2.0-inch Color Screen', 'Capacity': '10,000 Cards' } },
  { category: 'access-control', subCategory: 'SC405', name: 'SC405 (Model 2)', sub: 'RFID Standalone Access Terminal', tags: ['SC405', 'RFID'], image: '/images/products/Access Control/SC405/SC405-2.png', specs: { 'Display': '2.0-inch Color Screen', 'Capacity': '10,000 Cards' } },

  // 16. SA40 (1 item)
  { category: 'access-control', subCategory: 'SA40', name: 'SA40', sub: 'Touch Keypad Standalone Controller', tags: ['SA40', 'Keypad'], image: '/images/products/Access Control/SA40/SA40.jpg', specs: { 'Keypad': 'Touch Keypad with Backlight', 'Capacity': '1,000 Users' } },

  // 17. ProMA (3 items)
  { category: 'access-control', subCategory: 'ProMA', name: 'ProMA (Model 1)', sub: 'High-End Outdoor Android Biometric Terminal', tags: ['ProMA', 'Android Device'], badge: 'new', image: '/images/products/Access Control/ProMA/ProMA_02_500x500.png', specs: { 'Rating': 'IP66 & IK07 Metal Casing', 'Platform': 'Android OS' } },
  { category: 'access-control', subCategory: 'ProMA', name: 'ProMA (Model 2)', sub: 'High-End Outdoor Android Biometric Terminal', tags: ['ProMA', 'Android Device'], image: '/images/products/Access Control/ProMA/ProMA_03_500x500.png', specs: { 'Rating': 'IP66 & IK07 Metal Casing', 'Platform': 'Android OS' } },
  { category: 'access-control', subCategory: 'ProMA', name: 'ProMA (Model 3)', sub: 'High-End Outdoor Android Biometric Terminal', tags: ['ProMA', 'Android Device'], image: '/images/products/Access Control/ProMA/ProMA_04_500x500.png', specs: { 'Rating': 'IP66 & IK07 Metal Casing', 'Platform': 'Android OS' } },

  // 18. MK-V1 (2 items)
  { category: 'access-control', subCategory: 'MK-V1', name: 'MK-V1 (Model 1)', sub: 'Vandalproof Metallic Keypad & RFID Terminal', tags: ['MK-V1', 'Fingerprint'], image: '/images/products/Access Control/MK-V1/MK-V1.png', specs: { 'Housing': 'Zinc Alloy Vandalproof', 'Protection': 'IP65 Waterproof' } },
  { category: 'access-control', subCategory: 'MK-V1', name: 'MK-V1 (Model 2)', sub: 'Vandalproof Metallic Keypad & RFID Terminal', tags: ['MK-V1', 'Fingerprint'], image: '/images/products/Access Control/MK-V1/MK-V1_01.png', specs: { 'Housing': 'Zinc Alloy Vandalproof', 'Protection': 'IP65 Waterproof' } },

  // 19. F22 (3 items)
  { category: 'access-control', subCategory: 'F22', name: 'F22 (Model 1)', sub: 'Ultra Thin Fingerprint & Card Terminal', tags: ['F22', 'Fingerprint'], badge: 'popular', featured: true, image: '/images/products/Access Control/F22/F22.png', specs: { 'Sensor': 'BioID Sensor', 'Connectivity': 'Wi-Fi & TCP/IP' } },
  { category: 'access-control', subCategory: 'F22', name: 'F22 (Model 2)', sub: 'Ultra Thin Fingerprint & Card Terminal', tags: ['F22', 'Fingerprint'], image: '/images/products/Access Control/F22/F22-2.png', specs: { 'Sensor': 'BioID Sensor', 'Connectivity': 'Wi-Fi & TCP/IP' } },
  { category: 'access-control', subCategory: 'F22', name: 'F22 (Model 3)', sub: 'Ultra Thin Fingerprint & Card Terminal', tags: ['F22', 'Fingerprint'], image: '/images/products/Access Control/F22/F22-3.png', specs: { 'Sensor': 'BioID Sensor', 'Connectivity': 'Wi-Fi & TCP/IP' } },

  // 20. F21 (2 items)
  { category: 'access-control', subCategory: 'F21', name: 'F21 (Model 1)', sub: 'Advanced Fingerprint & Photo ID Terminal', tags: ['F21', 'Fingerprint'], image: '/images/products/Access Control/F21/F21.png', specs: { 'Sensor': 'SilkID Sensor', 'Camera': 'Built-in Photo Camera' } },
  { category: 'access-control', subCategory: 'F21', name: 'F21 (Model 2)', sub: 'Advanced Fingerprint & Photo ID Terminal', tags: ['F21', 'Fingerprint'], image: '/images/products/Access Control/F21/F21-2.png', specs: { 'Sensor': 'SilkID Sensor', 'Camera': 'Built-in Photo Camera' } },

  // 21. F18 (2 items)
  { category: 'access-control', subCategory: 'F18', name: 'F18 (Model 1)', sub: 'Classic Biometric Fingerprint Standalone', tags: ['F18', 'Fingerprint'], image: '/images/products/Access Control/F18/F18.png', specs: { 'Display': 'TFT Color Screen', 'Capacity': '3,000 Fingerprints' } },
  { category: 'access-control', subCategory: 'F18', name: 'F18 (Model 2)', sub: 'Classic Biometric Fingerprint Standalone', tags: ['F18', 'Fingerprint'], image: '/images/products/Access Control/F18/F18-2.png', specs: { 'Display': 'TFT Color Screen', 'Capacity': '3,000 Fingerprints' } },

  // 22. SC800 (2 items)
  { category: 'access-control', subCategory: 'SC800', name: 'SC800 (Model 1)', sub: 'Waterproof Linux RFID Access Terminal', tags: ['SC800', 'RFID'], image: '/images/products/Access Control/SC800/SC800.jpg', specs: { 'Display': '2.4-inch Color Touchscreen', 'Protection': 'IP65 Waterproof' } },
  { category: 'access-control', subCategory: 'SC800', name: 'SC800 (Model 2)', sub: 'Waterproof Linux RFID Access Terminal', tags: ['SC800', 'RFID'], image: '/images/products/Access Control/SC800/SC800-2.jpg', specs: { 'Display': '2.4-inch Color Touchscreen', 'Protection': 'IP65 Waterproof' } },

  // 23. F09 (3 items)
  { category: 'access-control', subCategory: 'F09', name: 'F09 (Model 1)', sub: 'Standalone Fingerprint Access Control', tags: ['F09', 'Fingerprint'], image: '/images/products/Access Control/F09/F09.png', specs: { 'Display': 'OLED Screen', 'Interface': 'Wiegand & TCP/IP' } },
  { category: 'access-control', subCategory: 'F09', name: 'F09 (Model 2)', sub: 'Standalone Fingerprint Access Control', tags: ['F09', 'Fingerprint'], image: '/images/products/Access Control/F09/F09-1.png', specs: { 'Display': 'OLED Screen', 'Interface': 'Wiegand & TCP/IP' } },
  { category: 'access-control', subCategory: 'F09', name: 'F09 (Model 3)', sub: 'Standalone Fingerprint Access Control', tags: ['F09', 'Fingerprint'], image: '/images/products/Access Control/F09/F09-2.png', specs: { 'Display': 'OLED Screen', 'Interface': 'Wiegand & TCP/IP' } },

  // 24. EC10 & EX16 (3 items)
  { category: 'access-control', subCategory: 'EC10 & EX16', name: 'EC10 & EX16 (Model 1)', sub: 'Elevator Control Panel & Floor Expansion', tags: ['EC10 & EX16', 'Elevator Access Controller'], image: '/images/products/Access Control/EC10 & EX16/EC10 & EX16.png', specs: { 'Base Board': '10 Floors', 'Expansion': 'Up to 58 floors' } },
  { category: 'access-control', subCategory: 'EC10 & EX16', name: 'EC10 & EX16 (Model 2)', sub: 'Elevator Control Panel & Floor Expansion', tags: ['EC10 & EX16', 'Elevator Access Controller'], image: '/images/products/Access Control/EC10 & EX16/EC10 & EX16-2.png', specs: { 'Base Board': '10 Floors', 'Expansion': 'Up to 58 floors' } },
  { category: 'access-control', subCategory: 'EC10 & EX16', name: 'EC10 & EX16 (Model 3)', sub: 'Elevator Control Panel & Floor Expansion', tags: ['EC10 & EX16', 'Elevator Access Controller'], image: '/images/products/Access Control/EC10 & EX16/EC10 & EX16-3.png', specs: { 'Base Board': '10 Floors', 'Expansion': 'Up to 58 floors' } },

  // 25. DM10 (1 item)
  { category: 'access-control', subCategory: 'DM10', name: 'DM10', sub: 'Door Expansion Module for Control Panels', tags: ['DM10', 'RFID'], image: '/images/products/Access Control/DM10/DM10.jpg', specs: { 'RS485': 'RS485 Communication', 'Control': '1 Door Expansion' } },

  // 26. X7 (3 items)
  { category: 'access-control', subCategory: 'X7', name: 'X7 (Model 1)', sub: 'Basic Fingerprint & Card Reader Terminal', tags: ['X7', 'Fingerprint'], image: '/images/products/Access Control/X7/X7.png', specs: { 'Keypad': '16-key PIN Pad', 'Capacity': '500 Fingerprints' } },
  { category: 'access-control', subCategory: 'X7', name: 'X7 (Model 2)', sub: 'Basic Fingerprint & Card Reader Terminal', tags: ['X7', 'Fingerprint'], image: '/images/products/Access Control/X7/X7-2.png', specs: { 'Keypad': '16-key PIN Pad', 'Capacity': '500 Fingerprints' } },
  { category: 'access-control', subCategory: 'X7', name: 'X7 (Model 3)', sub: 'Basic Fingerprint & Card Reader Terminal', tags: ['X7', 'Fingerprint'], image: '/images/products/Access Control/X7/X7-3.png', specs: { 'Keypad': '16-key PIN Pad', 'Capacity': '500 Fingerprints' } },

  // 27. InBio PC Series & DE10 (2 items)
  { category: 'access-control', subCategory: 'InBio PC Series & DE10', name: 'InBio PC Series & DE10 (Model 1)', sub: 'Biometric Multi-Door Control Panel', tags: ['InBio PC Series & DE10', 'Biometric'], image: '/images/products/Access Control/InBio PC Series & DE10/InBio PC Series & DE10.jpg', specs: { 'Matching': 'Hardware Biometric Engine', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'InBio PC Series & DE10', name: 'InBio PC Series & DE10 (Model 2)', sub: 'Biometric Multi-Door Control Panel', tags: ['InBio PC Series & DE10', 'Biometric'], image: '/images/products/Access Control/InBio PC Series & DE10/InBio PC 400_01_500x500.png', specs: { 'Matching': 'Hardware Biometric Engine', 'Doors': '1, 2, 4 Door Options' } },

  // 28. C3-100 Plus (3 items)
  { category: 'access-control', subCategory: 'C3-100 Plus', name: 'C3-100 Plus', sub: 'IP-Based 1-Door RFID Control Panel', tags: ['C3-100 Plus', 'RFID'], image: '/images/products/Access Control/C3-100 Plus/C3-100 Plus-01.jpg', specs: { 'Communication': 'TCP/IP & RS485', 'Capacity': '30,000 Cards' } },
  { category: 'access-control', subCategory: 'C3-100 Plus', name: 'C3-200 Plus', sub: 'IP-Based 2-Door RFID Control Panel', tags: ['C3-100 Plus', 'RFID'], image: '/images/products/Access Control/C3-100 Plus/C3-200 Plus-01.jpg', specs: { 'Communication': 'TCP/IP & RS485', 'Capacity': '30,000 Cards' } },
  { category: 'access-control', subCategory: 'C3-100 Plus', name: 'C3-400 Plus', sub: 'IP-Based 4-Door RFID Control Panel', tags: ['C3-100 Plus', 'RFID'], image: '/images/products/Access Control/C3-100 Plus/C3-400 Plus-A.jpg', specs: { 'Communication': 'TCP/IP & RS485', 'Capacity': '30,000 Cards' } },

  // 29. inBio-160 Pro Plus (3 items)
  { category: 'access-control', subCategory: 'inBio-160 Pro Plus', name: 'inBio-160 Pro Plus', sub: 'High Security 1-Door Biometric Control Panel', tags: ['inBio-160 Pro Plus', 'Biometric'], badge: 'popular', featured: true, image: '/images/products/Access Control/inBio-160  Pro Plus/inBio-160  Pro Plus_500x500.png', specs: { 'Security': 'Push Firmware & Push Data', 'Capacity': '20,000 Fingerprints' } },
  { category: 'access-control', subCategory: 'inBio-160 Pro Plus', name: 'inBio-260 Pro Plus', sub: 'High Security 2-Door Biometric Control Panel', tags: ['inBio-160 Pro Plus', 'Biometric'], image: '/images/products/Access Control/inBio-160  Pro Plus/inBio-160  Pro Plus_500x500 (1).png', specs: { 'Security': 'Push Firmware & Push Data', 'Capacity': '20,000 Fingerprints' } },
  { category: 'access-control', subCategory: 'inBio-160 Pro Plus', name: 'inBio-460 Pro Plus', sub: 'High Security 4-Door Biometric Control Package B', tags: ['inBio-160 Pro Plus', 'Biometric'], image: '/images/products/Access Control/inBio-160  Pro Plus/inBio460Pro Plus Package B_500x500.png', specs: { 'Security': 'Push Firmware & Push Data', 'Capacity': '20,000 Fingerprints' } },

  // Time Attendance Sub-Categories

  // 1. MB360 (3 items)
  { category: 'time-attendance', subCategory: 'MB360', name: 'MB360', sub: 'Multi-Biometric Time Attendance & Access Control Terminal', tags: ['MB360', 'Face & Fingerprint'], badge: 'popular', featured: true, image: '/images/products/Time Attendance/MB360/MB360.png', specs: { 'Recognition': 'Face & Fingerprint', 'Capacity': '1,500 Faces / 2,000 Fingerprints', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', subCategory: 'MB360', name: 'MB360 (Model 1)', sub: 'Multi-Biometric Terminal with Card Reader', tags: ['MB360', 'Biometric'], image: '/images/products/Time Attendance/MB360/MB360-1.jpg', specs: { 'Recognition': 'Face & Fingerprint & Card', 'Display': '2.8-inch Color Display' } },
  { category: 'time-attendance', subCategory: 'MB360', name: 'MB360 (Model 2)', sub: 'Advanced Hybrid Biometric Terminal', tags: ['MB360', 'Biometric'], image: '/images/products/Time Attendance/MB360/MB360-2.png', specs: { 'Communication': 'TCP/IP, USB Host', 'Display': '2.8-inch Color Display' } },

  // 2. MB30 (1 item)
  { category: 'time-attendance', subCategory: 'MB30', name: 'MB30', sub: 'Multi-Biometric Time Attendance Terminal', tags: ['MB30', 'Face & Fingerprint'], image: '/images/products/Time Attendance/MB30/MB30.png', specs: { 'Recognition': 'Face & Fingerprint', 'Display': '2.8-inch TFT Screen', 'Capacity': '1,000 Faces' } },

  // 3. MB10-VL (1 item)
  { category: 'time-attendance', subCategory: 'MB10-VL', name: 'MB10-VL', sub: 'Visible Light Facial Recognition Terminal', tags: ['MB10-VL', 'Visible Light'], image: '/images/products/Time Attendance/MB10-VL/MB10-VL.jpg', specs: { 'Recognition': 'Visible Light Facial', 'Display': '2.8-inch TFT Screen', 'Capacity': '500 Faces' } },

  // 4. K40 Pro (2 items)
  { category: 'time-attendance', subCategory: 'K40 Pro', name: 'K40 Pro', sub: 'Fingerprint Time Attendance Terminal with Battery Backup', tags: ['K40 Pro', 'Fingerprint Attendance'], badge: 'popular', featured: true, image: '/images/products/Time Attendance/K40 Pro/K40 Pro.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '2.8-inch TFT Screen', 'Battery': 'Built-in Backup Battery' } },
  { category: 'time-attendance', subCategory: 'K40 Pro', name: 'K40 Pro (HD)', sub: 'Fingerprint Attendance Terminal with Access Control Interface', tags: ['K40 Pro', 'Fingerprint Attendance'], image: '/images/products/Time Attendance/K40 Pro/K40 Pro_500x500.png', specs: { 'Capacity': '3,000 Fingerprints', 'Communication': 'TCP/IP, USB Host' } },

  // 5. K45 Pro (1 item)
  { category: 'time-attendance', subCategory: 'K45 Pro', name: 'K45 Pro', sub: 'Biometric Time Attendance & Simple Access Control Terminal', tags: ['K45 Pro', 'Fingerprint Attendance'], image: '/images/products/Time Attendance/K45 Pro/K45 Pro.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '2.8-inch Color Display', 'Backup': 'Integrated Battery' } },

  // 6. LX50 (1 item)
  { category: 'time-attendance', subCategory: 'LX50', name: 'LX50', sub: 'Standalone Desktop & Wall-Mount Fingerprint Terminal', tags: ['LX50', 'Fingerprint Attendance'], image: '/images/products/Time Attendance/LX50/LX50.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '2.8-inch TFT Screen', 'Reports': 'SSR Excel Reports' } },

  // 7. IN01-A (1 item)
  { category: 'time-attendance', subCategory: 'IN01-A', name: 'IN01-A', sub: 'Door Access & Time Attendance Fingerprint Terminal', tags: ['IN01-A', 'IN Series'], image: '/images/products/Time Attendance/IN01-A/IN01-A.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '3.0-inch Color TFT', 'Capacity': '3,000 Fingerprints' } },

  // 8. iClock700 (1 item)
  { category: 'time-attendance', subCategory: 'iClock700', name: 'iClock700', sub: 'Enterprise Biometric Time Attendance Terminal', tags: ['iClock700', 'iClock Series'], image: '/images/products/Time Attendance/iClock700/iClock700.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Display': '3.5-inch TFT Screen', 'Camera': 'Built-in Camera' } },

  // 9. SpeedFace-V5 Palm (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace-V5 Palm', name: 'SpeedFace-V5 Palm', sub: 'Touchless Palm & Face Recognition Terminal', tags: ['SpeedFace-V5 Palm', 'Palm Recognition'], image: '/images/products/Time Attendance/SpeedFace-V5 Palm/speedface-v5-palm.png', specs: { 'Recognition': 'Touchless Palm & Face', 'Display': '5-inch Touch Screen', 'Platform': 'Linux' } },
  { category: 'time-attendance', subCategory: 'SpeedFace-V5 Palm', name: 'SpeedFace-V5 Palm (Model 2)', sub: 'Touchless Multi-Biometric Attendance Unit', tags: ['SpeedFace-V5 Palm', 'Palm Recognition'], image: '/images/products/Time Attendance/SpeedFace-V5 Palm/SpeedFace-V5 Palm-2.png', specs: { 'Recognition': 'Palm & Facial AI', 'Display': '5-inch Touch Screen' } },

  // 10. SpeedFaceM4 (3 items)
  { category: 'time-attendance', subCategory: 'SpeedFaceM4', name: 'SpeedFaceM4', sub: 'Outdoor Visible Light Facial & Palm Terminal', tags: ['SpeedFaceM4', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFaceM4/SpeedFaceM4_500x500.png', specs: { 'Ingress Protection': 'IP66 Waterproof', 'Recognition': 'Visible Light Facial & Palm', 'Display': '4-inch Touch Screen' } },
  { category: 'time-attendance', subCategory: 'SpeedFaceM4', name: 'SpeedFaceM4 (Capacitive)', sub: 'Visible Light & QR Code Terminal', tags: ['SpeedFaceM4', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFaceM4/SpeedFaceM4_cap_500x500.png', specs: { 'Display': '4-inch Capacitive Touch', 'Protection': 'IP66 Waterproof' } },
  { category: 'time-attendance', subCategory: 'SpeedFaceM4', name: 'SpeedFaceM4 (Side View)', sub: 'Slim Outdoor Biometric Terminal', tags: ['SpeedFaceM4', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFaceM4/SpeedFaceM4_Side_500x500.png', specs: { 'Display': '4-inch Touch Screen', 'Housing': 'Vandal-proof & IP66' } },

  // 11. SpeedFace H5L (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace H5L', name: 'SpeedFace H5L', sub: 'Visible Light Facial Recognition Terminal', tags: ['SpeedFace H5L', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace H5L/SpeedFace H5L.png', specs: { 'Display': '5-inch Color LCD', 'Recognition': 'Visible Light AI', 'Capacity': '6,000 Face Templates' } },
  { category: 'time-attendance', subCategory: 'SpeedFace H5L', name: 'SpeedFace H5L (Model 2)', sub: 'Visible Light Terminal with RFID Support', tags: ['SpeedFace H5L', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace H5L/SpeedFace H5L-2.png', specs: { 'Display': '5-inch Touchscreen', 'Verification': '<0.35s High Speed' } },

  // 12. FaceDepot-7BL (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot-7BL', name: 'FaceDepot-7BL', sub: 'Indoor Visible Light Facial Recognition Station', tags: ['FaceDepot-7BL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot-7BL/FaceDepot-7BL.png', specs: { 'Display': '7-inch Touch Screen', 'Capacity': '10,000 Face Templates', 'Platform': 'Android' } },
  { category: 'time-attendance', subCategory: 'FaceDepot-7BL', name: 'FaceDepot-7BL (Model 2)', sub: 'Facial Terminal with Turnstile Integration', tags: ['FaceDepot-7BL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot-7BL/FaceDepot-7BL-2.png', specs: { 'Display': '7-inch Screen', 'Mounting': 'Turnstile / Wall Mount' } },
  { category: 'time-attendance', subCategory: 'FaceDepot-7BL', name: 'FaceDepot-7BL (Model 3)', sub: 'Visible Light Station for High-Traffic Entry', tags: ['FaceDepot-7BL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot-7BL/FaceDepot-7BL-3.png', specs: { 'Display': '7-inch HD Display', 'Capacity': '10,000 Face Templates' } },

  // 13. FaceDepot 8AL (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot 8AL', name: 'FaceDepot 8AL', sub: 'Outdoor Facial Recognition Terminal with Large Screen', tags: ['FaceDepot 8AL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 8AL/FaceDepot 8AL.jpg', specs: { 'Display': '8-inch Touchscreen', 'Protection': 'IP68 Waterproof', 'Capacity': '30,000 Face Templates' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 8AL', name: 'FaceDepot 8AL (Model 2)', sub: 'Outdoor High-Capacity Facial Terminal', tags: ['FaceDepot 8AL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 8AL/FaceDepot 8AL-2.jpg', specs: { 'Display': '8-inch Screen', 'Protection': 'IP68 Rating' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 8AL', name: 'FaceDepot 8AL (Model 3)', sub: 'Biometric Access & Attendance Station', tags: ['FaceDepot 8AL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 8AL/FaceDepot 8AL-3.jpg', specs: { 'Display': '8-inch Touchscreen', 'Camera': '2MP Dual Lens' } },

  // 14. FaceDepot 4A (1 item)
  { category: 'time-attendance', subCategory: 'FaceDepot 4A', name: 'FaceDepot 4A', sub: 'Compact Visible Light Facial Recognition Terminal', tags: ['FaceDepot 4A', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 4A/FaceDepot 4A.png', specs: { 'Display': '4-inch Color Touch', 'Recognition': 'Visible Light Facial AI', 'Capacity': '3,000 Faces' } },

  // 15. Eface 10 (2 items)
  { category: 'time-attendance', subCategory: 'Eface 10', name: 'Eface 10', sub: 'Economical Visible Light Facial Recognition Terminal', tags: ['Eface 10', 'Visible Light'], image: '/images/products/Time Attendance/Eface 10/Eface 10.png', specs: { 'Display': '4.3-inch Touch Screen', 'Recognition': 'Visible Light Facial', 'Capacity': '500 Face Templates' } },
  { category: 'time-attendance', subCategory: 'Eface 10', name: 'Eface 10 (Model 2)', sub: 'Compact Facial Attendance Terminal', tags: ['Eface 10', 'Visible Light'], image: '/images/products/Time Attendance/Eface 10/Eface 10-2.png', specs: { 'Display': '4.3-inch Touch Screen', 'Communication': 'TCP/IP, USB Host' } },

  // 16. D3 (3 items)
  { category: 'time-attendance', subCategory: 'D3', name: 'D3 (Model 1)', sub: 'Desktop Visible Light Facial Recognition Terminal', tags: ['D3', 'Desktop Terminal'], image: '/images/products/Time Attendance/D3/D3-1.png', specs: { 'Design': 'Desktop Ergonomic Form Factor', 'Display': '4-inch Touchscreen', 'Recognition': 'Visible Light Facial' } },
  { category: 'time-attendance', subCategory: 'D3', name: 'D3 (Model 2)', sub: 'Smart Desktop Attendance Unit', tags: ['D3', 'Desktop Terminal'], image: '/images/products/Time Attendance/D3/D3-2.png', specs: { 'Display': '4-inch Touch Panel', 'Communication': 'Wi-Fi & TCP/IP' } },
  { category: 'time-attendance', subCategory: 'D3', name: 'D3 (Model 3)', sub: 'AI Visible Light Desktop Terminal', tags: ['D3', 'Desktop Terminal'], image: '/images/products/Time Attendance/D3/D3-4.png', specs: { 'Display': '4-inch Touchscreen', 'Camera': 'Wide Angle HD Dual Lens' } },

  // 17. MiniTA (2 items)
  { category: 'time-attendance', subCategory: 'MiniTA', name: 'MiniTA (Model 1)', sub: 'Ultra-Compact Time Attendance Terminal', tags: ['MiniTA', 'Compact Terminal'], image: '/images/products/Time Attendance/MiniTA/MiniTA.png', specs: { 'Display': '2.8-inch TFT Color Screen', 'Recognition': 'Facial & Fingerprint', 'Form Factor': 'Ultra-Compact' } },
  { category: 'time-attendance', subCategory: 'MiniTA', name: 'MiniTA (Model 2)', sub: 'Mini Time Attendance & Access Terminal', tags: ['MiniTA', 'Compact Terminal'], image: '/images/products/Time Attendance/MiniTA/MiniTA-2.png', specs: { 'Display': '2.8-inch Color Screen', 'Communication': 'TCP/IP, USB' } },

  // 18. SpeedFace V3L Series (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace V3L Series', name: 'SpeedFace V3L Series (Model 1)', sub: 'Slim Visible Light Facial & RFID Terminal', tags: ['SpeedFace V3L Series', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace V3L Series/SpeedFace V3L Series-1.png', specs: { 'Display': '2.4-inch Touch Screen', 'Protection': 'IP65 Water & Dust Resistant', 'Recognition': 'Visible Light Facial' } },
  { category: 'time-attendance', subCategory: 'SpeedFace V3L Series', name: 'SpeedFace V3L Series (Model 2)', sub: 'Slim Facial & Fingerprint Attendance Terminal', tags: ['SpeedFace V3L Series', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace V3L Series/SpeedFace V3L Series-2.png', specs: { 'Display': '2.4-inch Touch Screen', 'Sensor': 'Fingerprint & Facial AI' } },

  // 19. SpeedFace - V5L (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace - V5L', name: 'SpeedFace - V5L', sub: 'High-Performance Visible Light Facial Recognition Terminal', tags: ['SpeedFace - V5L', 'Facial AI'], badge: 'popular', featured: true, image: '/images/products/Time Attendance/SpeedFace - V5L/SpeedFace - V5L.png', specs: { 'Display': '5-inch Touch Screen', 'Capacity': '6,000 Face Templates', 'Verification': '<0.35s Speed' } },
  { category: 'time-attendance', subCategory: 'SpeedFace - V5L', name: 'SpeedFace - V5L (Model 2)', sub: 'Visible Light & RFID Reader Terminal', tags: ['SpeedFace - V5L', 'Facial AI'], image: '/images/products/Time Attendance/SpeedFace - V5L/SpeedFace - V5L-2.png', specs: { 'Display': '5-inch Touch Screen', 'Communication': 'TCP/IP, Wiegand, RS485' } },

  // 20. ProBio Plus Series (1 item)
  { category: 'time-attendance', subCategory: 'ProBio Plus Series', name: 'ProBio Plus Series', sub: 'High-Security Biometric Access & Attendance Terminal', tags: ['ProBio Plus Series', 'ProBio'], image: '/images/products/Time Attendance/ProBio Plus Series/ProBio Plus Series.png', specs: { 'Sensor': 'SilkID Fingerprint Sensor', 'Display': '2.8-inch Color Display', 'Security': 'Push Data & Firmware' } },

  // 21. MiniAC (3 items)
  { category: 'time-attendance', subCategory: 'MiniAC', name: 'MiniAC', sub: 'Compact Visible Light Facial Recognition Terminal', tags: ['MiniAC', 'Visible Light'], image: '/images/products/Time Attendance/MiniAC/MiniAC.png', specs: { 'Display': '5-inch Touch Screen', 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', subCategory: 'MiniAC', name: 'MiniAC (Model 2)', sub: 'Linux-Based Visible Light Station', tags: ['MiniAC', 'Visible Light'], image: '/images/products/Time Attendance/MiniAC/MiniAC-2.png', specs: { 'Display': '5-inch Touch Display', 'Capacity': '3,000 Face Templates' } },
  { category: 'time-attendance', subCategory: 'MiniAC', name: 'MiniAC (Model 3)', sub: 'Smart Facial Access & Attendance Unit', tags: ['MiniAC', 'Visible Light'], image: '/images/products/Time Attendance/MiniAC/MiniAC-3.png', specs: { 'Display': '5-inch Touch Screen', 'Communication': 'TCP/IP, Wi-Fi' } },

  // 22. FaceDepot 7C (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot 7C', name: 'FaceDepot 7C', sub: '7-inch Visible Light Facial Recognition Terminal', tags: ['FaceDepot 7C', 'FaceDepot'], image: '/images/products/Time Attendance/facedepot 7C/FaceDepot 7C.png', specs: { 'Display': '7-inch Touch Screen', 'Recognition': 'Visible Light Facial AI', 'Capacity': '10,000 Faces' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7C', name: 'FaceDepot 7C (Model 2)', sub: 'Indoor Facial Attendance Station', tags: ['FaceDepot 7C', 'FaceDepot'], image: '/images/products/Time Attendance/facedepot 7C/FaceDepot 7C-2.png', specs: { 'Display': '7-inch Touch Panel', 'Capacity': '10,000 Faces' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7C', name: 'FaceDepot 7C (Model 3)', sub: 'Large Display Visible Light Terminal', tags: ['FaceDepot 7C', 'FaceDepot'], image: '/images/products/Time Attendance/facedepot 7C/FaceDepot 7C-3.png', specs: { 'Display': '7-inch Touch Screen', 'Communication': 'TCP/IP, Wi-Fi' } },

  // 23. FaceDepot 7CL (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot 7CL', name: 'FaceDepot 7CL', sub: 'Outdoor Visible Light Facial Recognition Station', tags: ['FaceDepot 7CL', 'FaceDepot'], image: '/images/products/Time Attendance/Facedepot 7CL/Facedepot 7CL.png', specs: { 'Display': '7-inch Touch Screen', 'Ingress Protection': 'Weatherproof Rating', 'Capacity': '10,000 Faces' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7CL', name: 'FaceDepot 7CL (Model 2)', sub: 'High-Capacity Outdoor Facial Terminal', tags: ['FaceDepot 7CL', 'FaceDepot'], image: '/images/products/Time Attendance/Facedepot 7CL/Facedepot 7CL-2.png', specs: { 'Display': '7-inch Touch Screen', 'Camera': 'Wide Angle 2MP HD' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7CL', name: 'FaceDepot 7CL (Model 3)', sub: 'Turnstile & Wall Mount Facial Station', tags: ['FaceDepot 7CL', 'FaceDepot'], image: '/images/products/Time Attendance/Facedepot 7CL/Facedepot 7CL-3.png', specs: { 'Display': '7-inch Touch Panel', 'Mounting': 'Turnstile / Stand Mount' } },

  // 24. MiniAC Plus (3 items)
  { category: 'time-attendance', subCategory: 'MiniAC Plus', name: 'MiniAC Plus', sub: 'Visible Light Facial & Palm Recognition Terminal', tags: ['MiniAC Plus', 'MiniAC'], image: '/images/products/Time Attendance/MiniAC Plus/MiniAC Plus.jpg', specs: { 'Display': '5-inch Color Touch', 'Recognition': 'Visible Light & Palm', 'Capacity': '3,000 Faces / 1,500 Palms' } },
  { category: 'time-attendance', subCategory: 'MiniAC Plus', name: 'MiniAC Plus (Model 2)', sub: 'Multi-Biometric Facial & Palm Unit', tags: ['MiniAC Plus', 'MiniAC'], image: '/images/products/Time Attendance/MiniAC Plus/MiniAC Plus-2.jpg', specs: { 'Display': '5-inch Color Touch Screen', 'Communication': 'TCP/IP, Wi-Fi, RS485' } },
  { category: 'time-attendance', subCategory: 'MiniAC Plus', name: 'MiniAC Plus (Model 3)', sub: 'Palm & Visible Light Access Terminal', tags: ['MiniAC Plus', 'MiniAC'], image: '/images/products/Time Attendance/MiniAC Plus/MiniAC Plus-3.jpg', specs: { 'Display': '5-inch Touch Screen', 'Camera': '2MP Dual Lens' } },

  // Additional Software & Terminals
  {
    category: 'time-attendance',
    subCategory: 'SpeedFace - V5L',
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
    category: 'time-attendance',
    subCategory: 'ZKBio Time',
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
  }
];

export default function Products({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [accessControlOpen, setAccessControlOpen] = useState(true);
  const [timeAttendanceOpen, setTimeAttendanceOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleProductSearch = (e) => {
      const hash = e.detail;
      if (CATEGORIES.some(c => c.id === hash)) {
        setActiveCategory(hash);
        setActiveSubcategory(null);
        setSearchQuery('');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      } else {
        setActiveCategory('all');
        setActiveSubcategory(null);
        setSearchQuery(decodeURIComponent(hash).replace(/-/g, ' '));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('product-search', handleProductSearch);
    return () => window.removeEventListener('product-search', handleProductSearch);
  }, []);

  useScrollReveal([activeCategory, activeSubcategory, searchQuery]);

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

  const getFilteredProducts = (catId) => {
    let productsInCat = PRODUCTS.filter(p => p.category === catId);

    if (activeSubcategory) {
      productsInCat = productsInCat.filter(p =>
        p.subCategory === activeSubcategory ||
        p.name === activeSubcategory ||
        p.tags.includes(activeSubcategory)
      );
    }

    if (!searchQuery) return productsInCat;

    const q = searchQuery.toLowerCase();
    return productsInCat.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  };

  const filteredCategories = CATEGORIES.filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    const matchedProducts = getFilteredProducts(cat.id);
    return matchedProducts.length > 0;
  });

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
                setActiveSubcategory(null);
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container stats-bar-inner">
          <div className="stat-item">
            <div className="stat-val">300<span>+</span></div>
            <div className="stat-lbl">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">6<span> Yrs</span></div>
            <div className="stat-lbl">Years of Expertise</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">100<span>+</span></div>
            <div className="stat-lbl">Product Models</div>
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
                  setActiveSubcategory(null);
                  setSidebarOpen(false);
                }}
              >
                All Products <span className="cat-count">{PRODUCTS.length}</span>
              </button>
              {CATEGORIES.map(cat => {
                const isAccessControl = cat.id === 'access-control';
                const isTimeAttendance = cat.id === 'time-attendance';
                const count = PRODUCTS.filter(p => p.category === cat.id).length;
                return (
                  <div key={cat.id} style={{ width: '100%' }}>
                    <button
                      className={`cat-btn ${activeCategory === cat.id && !activeSubcategory ? 'active' : ''}`}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setActiveSubcategory(null);
                        if (isAccessControl) {
                          setAccessControlOpen(!accessControlOpen);
                        }
                        if (isTimeAttendance) {
                          setTimeAttendanceOpen(!timeAttendanceOpen);
                        }
                        setSidebarOpen(false);
                        const el = document.getElementById(cat.id);
                        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>{cat.label}</span>
                        {isAccessControl && (
                          <span style={{ fontSize: '0.7rem', opacity: 0.75 }}>
                            {accessControlOpen ? '▲' : '▼'}
                          </span>
                        )}
                        {isTimeAttendance && (
                          <span style={{ fontSize: '0.7rem', opacity: 0.75 }}>
                            {timeAttendanceOpen ? '▲' : '▼'}
                          </span>
                        )}
                      </span>
                      <span className="cat-count">{count}</span>
                    </button>

                    {/* Access Control Subcategory Dropdown */}
                    {isAccessControl && accessControlOpen && (
                      <div className="subcat-menu">
                        {ACCESS_CONTROL_SUBCATEGORIES.map((subName) => {
                          const isSubActive = activeCategory === 'access-control' && activeSubcategory === subName;
                          const subCount = PRODUCTS.filter(p => p.category === 'access-control' && p.subCategory === subName).length;
                          return (
                            <button
                              key={subName}
                              className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                              onClick={() => {
                                setActiveCategory('access-control');
                                setActiveSubcategory(subName);
                                setSearchQuery('');
                                setSidebarOpen(false);
                              }}
                            >
                              <span>{subName}</span>
                              <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Time Attendance Subcategory Dropdown */}
                    {isTimeAttendance && timeAttendanceOpen && (
                      <div className="subcat-menu">
                        {TIME_ATTENDANCE_SUBCATEGORIES.map((subName) => {
                          const isSubActive = activeCategory === 'time-attendance' && activeSubcategory === subName;
                          const subCount = PRODUCTS.filter(p => p.category === 'time-attendance' && p.subCategory === subName).length;
                          return (
                            <button
                              key={subName}
                              className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                              onClick={() => {
                                setActiveCategory('time-attendance');
                                setActiveSubcategory(subName);
                                setSearchQuery('');
                                setSidebarOpen(false);
                              }}
                            >
                              <span>{subName}</span>
                              <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
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
