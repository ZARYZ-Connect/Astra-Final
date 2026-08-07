import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../css/products.css';

const CATEGORIES = [
  { id: 'time-attendance', label: 'Time Attendance', desc: 'Accurate, AI-biometric visible-light & fingerprint attendance terminals for every workforce' },
  { id: 'access-control', label: 'Access Controller', desc: 'IP-based multi-door controllers, biometric readers, standalone panels, smart locks, and entrance control systems' },
  { id: 'armatura', label: 'Armatura', desc: 'Advanced access controller ecosystem with unified management, high-security panels, and smart readers' },
  { id: 'smart-entrance', label: 'Smart Entrance Control', desc: 'Pedestrian and vehicle entrance control, turnstiles, flap barriers, and boom barriers for high-traffic sites' },
  { id: 'security-inspection', label: 'Security Inspection', desc: 'X-ray baggage scanners, walk-through metal detectors, and threat detection equipment for high-security venues' },
  { id: 'video-surveillance', label: 'Video Surveillance', desc: 'Comprehensive video surveillance systems for enhanced security monitoring' },
  { id: 'software', label: 'Software', desc: 'Enterprise Attendance, WDMS, Cafeteria Management, and other software platforms' },
  { id: 'ajax', label: 'Ajax', desc: 'Smart wireless security systems, detectors, and smart home devices' }
];

const ACCESS_CONTROL_HIERARCHY = {
  "Multi Door Controller": [],
  "Standalone Devices": [],
  "Readers": [],
  "Elevator Access Controller": []
};

const TIME_ATTENDANCE_HIERARCHY = {
  "Visible Series": [],
  "Fingerprint Attendance": [],
  "Face Attendance": []
};

const ARMATURA_HIERARCHY = {
  "Armatura Standalone Terminals": [],
  "Armatura One": [],
  "Armatura Reader": [],
  "Armatura Controller": [],
  "Armatura Entrance Control": []
};

const SMART_ENTRANCE_HIERARCHY = {
  "Smart Security Gate": [],
  "Smart Vehicle & Inspection": []
};

const SECURITY_INSPECTION_HIERARCHY = {
  "Baggage Scanner": [],
  "Door Frame Metal Detector": [],
  "Hand Held Metal Detector": []
};

const VIDEO_SURVEILLANCE_HIERARCHY = {
  "Dome Series": [],
  "Bullet Series": [],
  "PTZ Series": [],
  "NVR": []
};

const SOFTWARE_HIERARCHY = {
  "Time Attendance Software": [],
  "Cloud Attendance Software": [],
  "ZKBio Security Software": []
};

const AJAX_HIERARCHY = {
  "Glass break detectors": [],
  "Hubs": [],
  "Motion detectors": [],
  "Opening detectors": [],
  "Relays": []
};

const PRODUCTS = [
  // Ajax (5 items)
  { category: 'ajax', subCategory: 'Glass break detectors', name: 'GlassProtect Jeweller', sub: 'Wireless glass break detector with a microphone', tags: ['Ajax', 'Detector', 'Jeweller'], image: '/images/products/Ajax/Glass break detectors/Glass Break Detectors.png', specs: { 'Type': 'Wireless', 'Sensor': 'Microphone', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Hubs', name: 'Hub 2 Plus Jeweller', sub: 'Wireless control panel with support for photo verification. Connectable via Wi-Fi, Ethernet, and two SIM cards (2G/3G/LTE)', tags: ['Ajax', 'Hub', 'Jeweller'], image: '/images/products/Ajax/Hubs/Hub 2 Plus Jeweller.png', specs: { 'Type': 'Wireless Control Panel', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Hubs', name: 'Hub 2 (4G) Jeweller', sub: 'Wireless control panel with support for photo verification. Connectable via Ethernet and two SIM cards (2G/3G/LTE)', tags: ['Ajax', 'Hub', 'Jeweller'], image: '/images/products/Ajax/Hubs/Hub 2 (4G) Jeweller.png', specs: { 'Type': 'Wireless Control Panel', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Hubs', name: 'Hub 2 (2G) Jeweller', sub: 'Wireless control panel with support for photo verification. Connectable via Ethernet and two SIM cards (2G)', tags: ['Ajax', 'Hub', 'Jeweller'], image: '/images/products/Ajax/Hubs/Hub 2 (2G) Jeweller.png', specs: { 'Type': 'Wireless Control Panel', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Hubs', name: 'Hub (2G) Jeweller', sub: 'Wireless control panel. Connectable via Ethernet and SIM card (2G)', tags: ['Ajax', 'Hub', 'Jeweller'], image: '/images/products/Ajax/Hubs/Hub (2G) Jeweller.png', specs: { 'Type': 'Wireless Control Panel', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionProtect Jeweller', sub: 'Wireless IR motion detector', tags: ['Ajax', 'Motion Detector', 'Jeweller'], image: '/images/products/Ajax/Motion Detectors/MotionProtect Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionProtect Plus Jeweller', sub: 'Wireless IR motion detector with an additional K-band microwave sensor', tags: ['Ajax', 'Motion Detector', 'Jeweller'], image: '/images/products/Ajax/Motion Detectors/MotionProtect Plus Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionProtect Curtain Jeweller', sub: 'Wireless IR curtain motion detector', tags: ['Ajax', 'Motion Detector', 'Jeweller'], image: '/images/products/Ajax/Motion Detectors/MotionProtect Curtain Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'CombiProtect Jeweller', sub: 'Wireless IR motion and glass break detector with microphone', tags: ['Ajax', 'Motion Detector', 'Jeweller'], image: '/images/products/Ajax/Motion Detectors/CombiProtect Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionCam Jeweller', sub: 'Wireless IR motion detector supporting photo by alarm feature', tags: ['Ajax', 'Motion Detector', 'Jeweller'], image: '/images/products/Ajax/Motion Detectors/MotionCam Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionCam (PhOD) Jeweller', sub: 'Wireless PIR motion detector with extended photo verification possibilities', tags: ['Ajax', 'Motion Detector', 'Jeweller'], image: '/images/products/Ajax/Motion Detectors/MotionCam (PhOD) Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'Curtain Outdoor Jeweller', sub: 'Wireless dual technology curtain motion detector for outdoor and indoor use', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/Curtain Outdoor Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'Curtain Outdoor Mini Jeweller', sub: 'Wireless dual-technology curtain motion detector for outdoor and indoor use', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/Curtain Outdoor Mini Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'DualCurtain Outdoor Jeweller', sub: 'Wireless bidirectional curtain IR motion detector', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/DualCurtain Outdoor Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionProtect Outdoor Jeweller', sub: 'Wireless IR motion detector for outdoor and indoor use', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/MotionProtect Outdoor Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionCam Outdoor Jeweller', sub: 'Wireless PIR motion detector that takes photos by alarm. For outdoor and indoor use', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/MotionCam Outdoor Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionCam Outdoor (PhOD) Jeweller', sub: 'Wireless PIR motion detector with extended photo verification possibilities. For outdoor and indoor use', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/MotionCam Outdoor (PhOD) Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Motion detectors', name: 'MotionCam Outdoor HighMount (PhOD) Jeweller', sub: 'Wireless PIR motion detector with extended photo verification possibilities. For outdoor installation at a height of 2–4 m.', tags: ['Ajax', 'Motion Detector', 'Jeweller', 'Outdoor'], image: '/images/products/Ajax/Motion Detectors/MotionCam Outdoor HighMount (PhOd) Jeweller.png', specs: { 'Type': 'Wireless', 'Color': 'White' } },
  { category: 'ajax', subCategory: 'Opening detectors', name: 'DoorProtect Jeweller', sub: 'Wireless opening detector with reed switch', tags: ['Ajax', 'Detector', 'Jeweller'], image: '/images/products/Ajax/Opening detectors/DoorProtect Jeweller.png', specs: { 'Type': 'Wireless', 'Sensor': 'Reed Switch', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Opening detectors', name: 'DoorProtect Plus Jeweller', sub: 'Wireless combined opening, shock and tilt detector with reed switch and accelerometer', tags: ['Ajax', 'Detector', 'Jeweller'], image: '/images/products/Ajax/Opening detectors/DoorProtect Plus Jeweller.png', specs: { 'Type': 'Wireless', 'Sensors': 'Reed Switch, Accelerometer', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Relays', name: 'WallSwitch Jeweller', sub: 'Wireless power relay to control 110/230 V~ power supply remotely', tags: ['Ajax', 'Relay', 'Jeweller'], image: '/images/products/Ajax/Relays/WallSwitch Jeweller.png', specs: { 'Type': 'Wireless', 'Voltage': '110/230 V~', 'Color': 'Black' } },
  { category: 'ajax', subCategory: 'Relays', name: 'Relay Jeweller', sub: 'Wireless dry contact relay', tags: ['Ajax', 'Relay', 'Jeweller'], image: '/images/products/Ajax/Relays/Relay Jeweller.png', specs: { 'Type': 'Wireless', 'Contact': 'Dry Contact', 'Color': 'Black' } },

  // 1. RS485 Reader Series (3 items)
  { category: 'access-control', subCategory: 'RS485 Reader Series', name: 'RS485 Reader Series', sub: 'High Speed RS485 Biometric & RFID Reader', tags: ['RS485 Reader Series', 'Reader'], image: '/images/products/Access Control/Readers/RS485 Reader Series/RS485 Reader Series.png', specs: { 'Interface': 'RS485', 'Protection': 'IP65 Water Resistant' } },
  { category: 'access-control', subCategory: 'RS485 Reader Series', name: 'RS485 Reader Series', sub: 'High Speed RS485 Biometric & RFID Reader', tags: ['RS485 Reader Series', 'Reader'], image: '/images/products/Access Control/Readers/RS485 Reader Series/RS485 Reader Series-2.png', specs: { 'Interface': 'RS485', 'Protection': 'IP65 Water Resistant' } },
  { category: 'access-control', subCategory: 'RS485 Reader Series', name: 'RS485 Reader Series', sub: 'High Speed RS485 Biometric & RFID Reader', tags: ['RS485 Reader Series', 'Reader'], image: '/images/products/Access Control/Readers/RS485 Reader Series/RS485 Reader Series-3.png', specs: { 'Interface': 'RS485', 'Protection': 'IP65 Water Resistant' } },

  // 2. QR600 Series (4 items)
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/Readers/QR600 Series/QR600 Series.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/Readers/QR600 Series/QR600 Series-2.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/Readers/QR600 Series/QR600 Series-3.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },
  { category: 'access-control', subCategory: 'QR600 Series', name: 'QR600 Series', sub: 'QR Code & RFID Access Control Reader', tags: ['QR600 Series', 'QR Code'], image: '/images/products/Access Control/Readers/QR600 Series/QR600 Series-4.png', specs: { 'Scanning': 'Dynamic QR Code & RFID', 'Interface': 'Wiegand & RS485' } },

  // 3. KR500 Series (3 items)
  { category: 'access-control', subCategory: 'KR500 Series', name: 'KR500 Series', sub: 'Compact Outdoor RFID Reader', tags: ['KR500 Series', 'RFID'], image: '/images/products/Access Control/Readers/KR500 Series/KR500 Series.png', specs: { 'Ingress Protection': 'IP65 Waterproof', 'Interface': 'Wiegand' } },
  { category: 'access-control', subCategory: 'KR500 Series', name: 'KR500 Series', sub: 'Compact Outdoor RFID Reader', tags: ['KR500 Series', 'RFID'], image: '/images/products/Access Control/Readers/KR500 Series/KR500 Series-2.png', specs: { 'Ingress Protection': 'IP65 Waterproof', 'Interface': 'Wiegand' } },
  { category: 'access-control', subCategory: 'KR500 Series', name: 'KR500 Series', sub: 'Compact Outdoor RFID Reader', tags: ['KR500 Series', 'RFID'], image: '/images/products/Access Control/Readers/KR500 Series/KR500 Series-3.png', specs: { 'Ingress Protection': 'IP65 Waterproof', 'Interface': 'Wiegand' } },

  // 4. FR1500S (3 items)
  { category: 'access-control', subCategory: 'FR1500S', name: 'FR1500S', sub: 'Flush-Mounted Stainless Steel Fingerprint Reader', tags: ['FR1500S', 'Fingerprint'], image: '/images/products/Access Control/Readers/FR1500S/FR1500S.png', specs: { 'Installation': 'Flush-Mounted', 'Sensor': 'SilkID Optical Sensor' } },
  { category: 'access-control', subCategory: 'FR1500S', name: 'FR1500S', sub: 'Flush-Mounted Stainless Steel Fingerprint Reader', tags: ['FR1500S', 'Fingerprint'], image: '/images/products/Access Control/Readers/FR1500S/FR1500S-2.png', specs: { 'Installation': 'Flush-Mounted', 'Sensor': 'SilkID Optical Sensor' } },
  { category: 'access-control', subCategory: 'FR1500S', name: 'FR1500S', sub: 'Flush-Mounted Stainless Steel Fingerprint Reader', tags: ['FR1500S', 'Fingerprint'], image: '/images/products/Access Control/Readers/FR1500S/FR1500S-3.png', specs: { 'Installation': 'Flush-Mounted', 'Sensor': 'SilkID Optical Sensor' } },

  // 5. FR1200 (2 items)
  { category: 'access-control', subCategory: 'FR1200', name: 'FR1200', sub: 'Outdoor Biometric RS485 Slave Reader', tags: ['FR1200', 'Biometric'], image: '/images/products/Access Control/Readers/FR1200/FR1200.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Interface': 'RS485 Slave' } },
  { category: 'access-control', subCategory: 'FR1200', name: 'FR1200', sub: 'Outdoor Biometric RS485 Slave Reader', tags: ['FR1200', 'Biometric'], image: '/images/products/Access Control/Readers/FR1200/FR1200-2.png', specs: { 'Sensor': 'Optical Fingerprint Sensor', 'Interface': 'RS485 Slave' } },

  // 6. SF100 (3 items)
  { category: 'access-control', subCategory: 'SF100', name: 'SF100', sub: 'Sleek IP Biometric Access Control Terminal', tags: ['SF100', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/SF100/SF100-1.png', specs: { 'Display': '2.8-inch Color Touch', 'Capacity': '1,500 Fingerprints' } },
  { category: 'access-control', subCategory: 'SF100', name: 'SF100', sub: 'Sleek IP Biometric Access Control Terminal', tags: ['SF100', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/SF100/SF100-2.png', specs: { 'Display': '2.8-inch Color Touch', 'Capacity': '1,500 Fingerprints' } },
  { category: 'access-control', subCategory: 'SF100', name: 'SF100', sub: 'Sleek IP Biometric Access Control Terminal', tags: ['SF100', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/SF100/SF100-3.png', specs: { 'Display': '2.8-inch Color Touch', 'Capacity': '1,500 Fingerprints' } },

  // 7. SF1005 (6 items)
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/Standalone Devices/SF1005/SF1005_00_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/Standalone Devices/SF1005/SF1005_01_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/Standalone Devices/SF1005/SF1005_02_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/Standalone Devices/SF1005/SF1005_03_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/Standalone Devices/SF1005/SF1005_04_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },
  { category: 'access-control', subCategory: 'SF1005', name: 'SF1005', sub: 'Biometric Access Control & Attendance Terminal', tags: ['SF1005', 'Biometrics'], image: '/images/products/Access Control/Standalone Devices/SF1005/SF1005_05_500x500.png', specs: { 'Type': 'Biometrics Terminal' } },

  // 8. Atlas Prox Series (4 items)
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Multi Door Controller/Atlas Prox Series/Atlas Prox Series.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Multi Door Controller/Atlas Prox Series/Atlas Prox Series-2.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Multi Door Controller/Atlas Prox Series/Atlas Prox Series-3.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'Atlas Prox Series', name: 'Atlas Prox Series', sub: 'Web-Based RFID Control Panel', tags: ['Atlas Prox Series', 'Atlas Series'], image: '/images/products/Access Control/Multi Door Controller/Atlas Prox Series/Atlas Prox Series-4.jpg', specs: { 'Management': 'Embedded Web Server', 'Doors': '1, 2, 4 Door Options' } },

  // 9. Atlas Bio Series (2 items)
  { category: 'access-control', subCategory: 'Atlas Bio Series', name: 'Atlas Bio Series', sub: 'Web-Based Biometric Control Panel', tags: ['Atlas Bio Series', 'Atlas Series'], image: '/images/products/Access Control/Multi Door Controller/Atlas Bio Series/Atlas Bio Series-2.png', specs: { 'Management': 'Embedded Web Server', 'Biometric Engine': 'Primary Matching' } },
  { category: 'access-control', subCategory: 'Atlas Bio Series', name: 'Atlas Bio Series', sub: 'Web-Based Biometric Control Panel', tags: ['Atlas Bio Series', 'Atlas Series'], image: '/images/products/Access Control/Multi Door Controller/Atlas Bio Series/Atlas Bio Series.png', specs: { 'Management': 'Embedded Web Server', 'Biometric Engine': 'Primary Matching' } },

  // 10. EC16 & DEX16 (2 items)
  { category: 'access-control', subCategory: 'EC16 & DEX16', name: 'EC16 & DEX16', sub: 'Elevator & Floor Control Expansion Module', tags: ['EC16 & DEX16', 'Elevator'], image: '/images/products/Access Control/Elevator Access Controller/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Floors Controlled': '16 Floors per board', 'Expansion': 'Up to 128 floors' } },
  { category: 'access-control', subCategory: 'EC16 & DEX16', name: 'EC16 & DEX16', sub: 'Elevator & Floor Control Expansion Module', tags: ['EC16 & DEX16', 'Elevator'], image: '/images/products/Access Control/Elevator Access Controller/EC16 & DEX16/EC16 & DEX16-2.png', specs: { 'Floors Controlled': '16 Floors per board', 'Expansion': 'Up to 128 floors' } },

  // 11. SC405 (2 items)
  { category: 'access-control', subCategory: 'SC405', name: 'SC405', sub: 'RFID Standalone Access Terminal', tags: ['SC405', 'RFID'], image: '/images/products/Access Control/Standalone Devices/SC405/SC405.png', specs: { 'Display': '2.0-inch Color Screen', 'Capacity': '10,000 Cards' } },
  { category: 'access-control', subCategory: 'SC405', name: 'SC405', sub: 'RFID Standalone Access Terminal', tags: ['SC405', 'RFID'], image: '/images/products/Access Control/Standalone Devices/SC405/SC405-2.png', specs: { 'Display': '2.0-inch Color Screen', 'Capacity': '10,000 Cards' } },

  // 12. SA40 (1 item)
  { category: 'access-control', subCategory: 'SA40', name: 'SA40', sub: 'Touch Keypad Standalone Controller', tags: ['SA40', 'Keypad'], image: '/images/products/Access Control/Standalone Devices/SA40/SA40.png', specs: { 'Keypad': 'Touch Keypad with Backlight', 'Capacity': '1,000 Users' } },

  // 13. MK-V1 (2 items)
  { category: 'access-control', subCategory: 'MK-V1', name: 'MK-V1', sub: 'Vandalproof Metallic Keypad & RFID Terminal', tags: ['MK-V1', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/MK-V1/MK-V1.png', specs: { 'Housing': 'Zinc Alloy Vandalproof', 'Protection': 'IP65 Waterproof' } },
  { category: 'access-control', subCategory: 'MK-V1', name: 'MK-V1', sub: 'Vandalproof Metallic Keypad & RFID Terminal', tags: ['MK-V1', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/MK-V1/MK-V1_01.png', specs: { 'Housing': 'Zinc Alloy Vandalproof', 'Protection': 'IP65 Waterproof' } },

  // 14. F22 (3 items)
  { category: 'access-control', subCategory: 'F22', name: 'F22', sub: 'Ultra Thin Fingerprint & Card Terminal', tags: ['F22', 'Fingerprint'], badge: 'popular', featured: true, image: '/images/products/Access Control/Standalone Devices/F22/F22.png', specs: { 'Sensor': 'BioID Sensor', 'Connectivity': 'Wi-Fi & TCP/IP' } },
  { category: 'access-control', subCategory: 'F22', name: 'F22', sub: 'Ultra Thin Fingerprint & Card Terminal', tags: ['F22', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F22/F22-2.png', specs: { 'Sensor': 'BioID Sensor', 'Connectivity': 'Wi-Fi & TCP/IP' } },
  { category: 'access-control', subCategory: 'F22', name: 'F22', sub: 'Ultra Thin Fingerprint & Card Terminal', tags: ['F22', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F22/F22-3.png', specs: { 'Sensor': 'BioID Sensor', 'Connectivity': 'Wi-Fi & TCP/IP' } },

  // 15. F18 (2 items)
  { category: 'access-control', subCategory: 'F18', name: 'F18', sub: 'Classic Biometric Fingerprint Standalone', tags: ['F18', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F18/F18.png', specs: { 'Display': 'TFT Color Screen', 'Capacity': '3,000 Fingerprints' } },
  { category: 'access-control', subCategory: 'F18', name: 'F18', sub: 'Classic Biometric Fingerprint Standalone', tags: ['F18', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F18/F18-2.png', specs: { 'Display': 'TFT Color Screen', 'Capacity': '3,000 Fingerprints' } },

  // 16. SC800 (2 items)
  { category: 'access-control', subCategory: 'SC800', name: 'SC800', sub: 'Waterproof Linux RFID Access Terminal', tags: ['SC800', 'RFID'], image: '/images/products/Access Control/Standalone Devices/SC800/SC800.png', specs: { 'Display': '2.4-inch Color Touchscreen', 'Protection': 'IP65 Waterproof' } },
  { category: 'access-control', subCategory: 'SC800', name: 'SC800', sub: 'Waterproof Linux RFID Access Terminal', tags: ['SC800', 'RFID'], image: '/images/products/Access Control/Standalone Devices/SC800/SC800-2.png', specs: { 'Display': '2.4-inch Color Touchscreen', 'Protection': 'IP65 Waterproof' } },

  // 17. F09 (3 items)
  { category: 'access-control', subCategory: 'F09', name: 'F09', sub: 'Standalone Fingerprint Access Control', tags: ['F09', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F09/F09.png', specs: { 'Display': 'OLED Screen', 'Interface': 'Wiegand & TCP/IP' } },
  { category: 'access-control', subCategory: 'F09', name: 'F09', sub: 'Standalone Fingerprint Access Control', tags: ['F09', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F09/F09-1.png', specs: { 'Display': 'OLED Screen', 'Interface': 'Wiegand & TCP/IP' } },
  { category: 'access-control', subCategory: 'F09', name: 'F09', sub: 'Standalone Fingerprint Access Control', tags: ['F09', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/F09/F09-2.png', specs: { 'Display': 'OLED Screen', 'Interface': 'Wiegand & TCP/IP' } },

  // 18. EC10 & EX16 (3 items)
  { category: 'access-control', subCategory: 'EC10 & EX16', name: 'EC10 & EX16', sub: 'Elevator Control Panel & Floor Expansion', tags: ['EC10 & EX16', 'Elevator Access Controller'], image: '/images/products/Access Control/Elevator Access Controller/EC10 & EX16/EC10 & EX16.png', specs: { 'Base Board': '10 Floors', 'Expansion': 'Up to 58 floors' } },
  { category: 'access-control', subCategory: 'EC10 & EX16', name: 'EC10 & EX16', sub: 'Elevator Control Panel & Floor Expansion', tags: ['EC10 & EX16', 'Elevator Access Controller'], image: '/images/products/Access Control/Elevator Access Controller/EC10 & EX16/EC10 & EX16-2.png', specs: { 'Base Board': '10 Floors', 'Expansion': 'Up to 58 floors' } },
  { category: 'access-control', subCategory: 'EC10 & EX16', name: 'EC10 & EX16', sub: 'Elevator Control Panel & Floor Expansion', tags: ['EC10 & EX16', 'Elevator Access Controller'], image: '/images/products/Access Control/Elevator Access Controller/EC10 & EX16/EC10 & EX16-3.png', specs: { 'Base Board': '10 Floors', 'Expansion': 'Up to 58 floors' } },

  // 19. DM10 (1 item)
  { category: 'access-control', subCategory: 'DM10', name: 'DM10', sub: 'Door Expansion Module for Control Panels', tags: ['DM10', 'RFID'], image: '/images/products/Access Control/Multi Door Controller/DM10/DM10.jpg', specs: { 'RS485': 'RS485 Communication', 'Control': '1 Door Expansion' } },

  // 20. X7 (3 items)
  { category: 'access-control', subCategory: 'X7', name: 'X7', sub: 'Basic Fingerprint & Card Reader Terminal', tags: ['X7', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/X7/X7.png', specs: { 'Keypad': '16-key PIN Pad', 'Capacity': '500 Fingerprints' } },
  { category: 'access-control', subCategory: 'X7', name: 'X7', sub: 'Basic Fingerprint & Card Reader Terminal', tags: ['X7', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/X7/X7-2.png', specs: { 'Keypad': '16-key PIN Pad', 'Capacity': '500 Fingerprints' } },
  { category: 'access-control', subCategory: 'X7', name: 'X7', sub: 'Basic Fingerprint & Card Reader Terminal', tags: ['X7', 'Fingerprint'], image: '/images/products/Access Control/Standalone Devices/X7/X7-3.png', specs: { 'Keypad': '16-key PIN Pad', 'Capacity': '500 Fingerprints' } },

  // 21. InBio PC Series & DE10 (2 items)
  { category: 'access-control', subCategory: 'InBio PC Series & DE10', name: 'InBio PC Series & DE10', sub: 'Biometric Multi-Door Control Panel', tags: ['InBio PC Series & DE10', 'Biometric'], image: '/images/products/Access Control/Multi Door Controller/InBio PC Series & DE10/InBio PC Series & DE10.jpg', specs: { 'Matching': 'Hardware Biometric Engine', 'Doors': '1, 2, 4 Door Options' } },
  { category: 'access-control', subCategory: 'InBio PC Series & DE10', name: 'InBio PC Series & DE10', sub: 'Biometric Multi-Door Control Panel', tags: ['InBio PC Series & DE10', 'Biometric'], image: '/images/products/Access Control/Multi Door Controller/InBio PC Series & DE10/InBio PC 400_01_500x500.png', specs: { 'Matching': 'Hardware Biometric Engine', 'Doors': '1, 2, 4 Door Options' } },

  // 22. C3-100 Plus (3 items)
  { category: 'access-control', subCategory: 'C3-100 Plus', name: 'C3-100 Plus', sub: 'IP-Based 1-Door RFID Control Panel', tags: ['C3-100 Plus', 'RFID'], image: '/images/products/Access Control/Multi Door Controller/C3-100 Plus/C3-100 Plus-01.jpg', specs: { 'Communication': 'TCP/IP & RS485', 'Capacity': '30,000 Cards' } },
  { category: 'access-control', subCategory: 'C3-100 Plus', name: 'C3-200 Plus', sub: 'IP-Based 2-Door RFID Control Panel', tags: ['C3-100 Plus', 'RFID'], image: '/images/products/Access Control/Multi Door Controller/C3-100 Plus/C3-200 Plus-01.jpg', specs: { 'Communication': 'TCP/IP & RS485', 'Capacity': '30,000 Cards' } },
  { category: 'access-control', subCategory: 'C3-100 Plus', name: 'C3-400 Plus', sub: 'IP-Based 4-Door RFID Control Panel', tags: ['C3-100 Plus', 'RFID'], image: '/images/products/Access Control/Multi Door Controller/C3-100 Plus/C3-400 Plus-A.jpg', specs: { 'Communication': 'TCP/IP & RS485', 'Capacity': '30,000 Cards' } },

  // 23. inBio-160 Pro Plus (3 items)
  { category: 'access-control', subCategory: 'inBio-160 Pro Plus', name: 'inBio-160 Pro Plus', sub: 'High Security 1-Door Biometric Control Panel', tags: ['inBio-160 Pro Plus', 'Biometric'], badge: 'popular', featured: true, image: '/images/products/Access Control/Multi Door Controller/inBio-160  Pro Plus/inBio-160  Pro Plus_500x500.png', specs: { 'Security': 'Push Firmware & Push Data', 'Capacity': '20,000 Fingerprints' } },
  { category: 'access-control', subCategory: 'inBio-160 Pro Plus', name: 'inBio-260 Pro Plus', sub: 'High Security 2-Door Biometric Control Panel', tags: ['inBio-160 Pro Plus', 'Biometric'], image: '/images/products/Access Control/Multi Door Controller/inBio-160  Pro Plus/inBio-160  Pro Plus_500x500 (1).png', specs: { 'Security': 'Push Firmware & Push Data', 'Capacity': '20,000 Fingerprints' } },
  { category: 'access-control', subCategory: 'inBio-160 Pro Plus', name: 'inBio-460 Pro Plus', sub: 'High Security 4-Door Biometric Control Package B', tags: ['inBio-160 Pro Plus', 'Biometric'], image: '/images/products/Access Control/Multi Door Controller/inBio-160  Pro Plus/inBio460Pro Plus Package B_500x500.png', specs: { 'Security': 'Push Firmware & Push Data', 'Capacity': '20,000 Fingerprints' } },

  // Time Attendance Sub-Categories

  // 1. MB360 (3 items)
  { category: 'time-attendance', subCategory: 'MB360', name: 'MB360', sub: 'Multi-Biometric Time Attendance & Access Control Terminal', tags: ['MB360', 'Face & Fingerprint'], badge: 'popular', featured: true, image: '/images/products/Time Attendance/MB360/MB360.png', specs: { 'Recognition': 'Face & Fingerprint', 'Capacity': '1,500 Faces / 2,000 Fingerprints', 'Display': '2.8-inch TFT Screen' } },
  { category: 'time-attendance', subCategory: 'MB360', name: 'MB360', sub: 'Multi-Biometric Terminal with Card Reader', tags: ['MB360', 'Biometric'], image: '/images/products/Time Attendance/MB360/MB360-1.jpg', specs: { 'Recognition': 'Face & Fingerprint & Card', 'Display': '2.8-inch Color Display' } },
  { category: 'time-attendance', subCategory: 'MB360', name: 'MB360', sub: 'Advanced Hybrid Biometric Terminal', tags: ['MB360', 'Biometric'], image: '/images/products/Time Attendance/MB360/MB360-2.png', specs: { 'Communication': 'TCP/IP, USB Host', 'Display': '2.8-inch Color Display' } },

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

  // 9. SpeedFace-V5 (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace-V5', name: 'SpeedFace-V5', sub: 'Touchless Face Recognition Terminal', tags: ['SpeedFace-V5', 'Face Recognition'], image: '/images/products/Time Attendance/SpeedFace-V5 Palm/speedface-v5-palm.png', specs: { 'Recognition': 'Touchless Face', 'Display': '5-inch Touch Screen', 'Platform': 'Linux' } },
  { category: 'time-attendance', subCategory: 'SpeedFace-V5', name: 'SpeedFace-V5', sub: 'Touchless Multi-Biometric Attendance Unit', tags: ['SpeedFace-V5', 'Face Recognition'], image: '/images/products/Time Attendance/SpeedFace-V5 Palm/SpeedFace-V5 Palm-2.png', specs: { 'Recognition': 'Facial AI', 'Display': '5-inch Touch Screen' } },

  // 10. SpeedFaceM4 (3 items)
  { category: 'time-attendance', subCategory: 'SpeedFaceM4', name: 'SpeedFaceM4', sub: 'Outdoor Visible Light Facial Terminal', tags: ['SpeedFaceM4', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFaceM4/SpeedFaceM4_500x500.png', specs: { 'Ingress Protection': 'IP66 Waterproof', 'Recognition': 'Visible Light Facial', 'Display': '4-inch Touch Screen' } },
  { category: 'time-attendance', subCategory: 'SpeedFaceM4', name: 'SpeedFaceM4 (Capacitive)', sub: 'Visible Light & QR Code Terminal', tags: ['SpeedFaceM4', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFaceM4/SpeedFaceM4_cap_500x500.png', specs: { 'Display': '4-inch Capacitive Touch', 'Protection': 'IP66 Waterproof' } },
  { category: 'time-attendance', subCategory: 'SpeedFaceM4', name: 'SpeedFaceM4 (Side View)', sub: 'Slim Outdoor Biometric Terminal', tags: ['SpeedFaceM4', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFaceM4/SpeedFaceM4_Side_500x500.png', specs: { 'Display': '4-inch Touch Screen', 'Housing': 'Vandal-proof & IP66' } },

  // 11. SpeedFace H5L (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace H5L', name: 'SpeedFace H5L', sub: 'Visible Light Facial Recognition Terminal', tags: ['SpeedFace H5L', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace H5L/SpeedFace H5L.png', specs: { 'Display': '5-inch Color LCD', 'Recognition': 'Visible Light AI', 'Capacity': '6,000 Face Templates' } },
  { category: 'time-attendance', subCategory: 'SpeedFace H5L', name: 'SpeedFace H5L', sub: 'Visible Light Terminal with RFID Support', tags: ['SpeedFace H5L', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace H5L/SpeedFace H5L-2.png', specs: { 'Display': '5-inch Touchscreen', 'Verification': '<0.35s High Speed' } },

  // 12. FaceDepot-7BL (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot-7BL', name: 'FaceDepot-7BL', sub: 'Indoor Visible Light Facial Recognition Station', tags: ['FaceDepot-7BL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot-7BL/FaceDepot-7BL.png', specs: { 'Display': '7-inch Touch Screen', 'Capacity': '10,000 Face Templates', 'Platform': 'Android' } },
  { category: 'time-attendance', subCategory: 'FaceDepot-7BL', name: 'FaceDepot-7BL', sub: 'Facial Terminal with Turnstile Integration', tags: ['FaceDepot-7BL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot-7BL/FaceDepot-7BL-2.png', specs: { 'Display': '7-inch Screen', 'Mounting': 'Turnstile / Wall Mount' } },
  { category: 'time-attendance', subCategory: 'FaceDepot-7BL', name: 'FaceDepot-7BL', sub: 'Visible Light Station for High-Traffic Entry', tags: ['FaceDepot-7BL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot-7BL/FaceDepot-7BL-3.png', specs: { 'Display': '7-inch HD Display', 'Capacity': '10,000 Face Templates' } },

  // 13. FaceDepot 8AL (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot 8AL', name: 'FaceDepot 8AL', sub: 'Outdoor Facial Recognition Terminal with Large Screen', tags: ['FaceDepot 8AL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 8AL/FaceDepot 8AL.jpg', specs: { 'Display': '8-inch Touchscreen', 'Protection': 'IP68 Waterproof', 'Capacity': '30,000 Face Templates' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 8AL', name: 'FaceDepot 8AL', sub: 'Outdoor High-Capacity Facial Terminal', tags: ['FaceDepot 8AL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 8AL/FaceDepot 8AL-2.jpg', specs: { 'Display': '8-inch Screen', 'Protection': 'IP68 Rating' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 8AL', name: 'FaceDepot 8AL', sub: 'Biometric Access & Attendance Station', tags: ['FaceDepot 8AL', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 8AL/FaceDepot 8AL-3.jpg', specs: { 'Display': '8-inch Touchscreen', 'Camera': '2MP Dual Lens' } },

  // 14. FaceDepot 4A (1 item)
  { category: 'time-attendance', subCategory: 'FaceDepot 4A', name: 'FaceDepot 4A', sub: 'Compact Visible Light Facial Recognition Terminal', tags: ['FaceDepot 4A', 'FaceDepot'], image: '/images/products/Time Attendance/FaceDepot 4A/FaceDepot 4A.png', specs: { 'Display': '4-inch Color Touch', 'Recognition': 'Visible Light Facial AI', 'Capacity': '3,000 Faces' } },

  // 15. Eface 10 (2 items)
  { category: 'time-attendance', subCategory: 'Eface 10', name: 'Eface 10', sub: 'Economical Visible Light Facial Recognition Terminal', tags: ['Eface 10', 'Visible Light'], image: '/images/products/Time Attendance/Eface 10/Eface 10.png', specs: { 'Display': '4.3-inch Touch Screen', 'Recognition': 'Visible Light Facial', 'Capacity': '500 Face Templates' } },
  { category: 'time-attendance', subCategory: 'Eface 10', name: 'Eface 10', sub: 'Compact Facial Attendance Terminal', tags: ['Eface 10', 'Visible Light'], image: '/images/products/Time Attendance/Eface 10/Eface 10-2.png', specs: { 'Display': '4.3-inch Touch Screen', 'Communication': 'TCP/IP, USB Host' } },

  // 16. D3 (3 items)
  { category: 'time-attendance', subCategory: 'D3', name: 'D3', sub: 'Desktop Visible Light Facial Recognition Terminal', tags: ['D3', 'Desktop Terminal'], image: '/images/products/Time Attendance/D3/D3-1.png', specs: { 'Design': 'Desktop Ergonomic Form Factor', 'Display': '4-inch Touchscreen', 'Recognition': 'Visible Light Facial' } },
  { category: 'time-attendance', subCategory: 'D3', name: 'D3', sub: 'Smart Desktop Attendance Unit', tags: ['D3', 'Desktop Terminal'], image: '/images/products/Time Attendance/D3/D3-2.png', specs: { 'Display': '4-inch Touch Panel', 'Communication': 'Wi-Fi & TCP/IP' } },
  { category: 'time-attendance', subCategory: 'D3', name: 'D3', sub: 'AI Visible Light Desktop Terminal', tags: ['D3', 'Desktop Terminal'], image: '/images/products/Time Attendance/D3/D3-4.png', specs: { 'Display': '4-inch Touchscreen', 'Camera': 'Wide Angle HD Dual Lens' } },

  // 17. MiniTA (2 items)
  { category: 'time-attendance', subCategory: 'MiniTA', name: 'MiniTA', sub: 'Ultra-Compact Time Attendance Terminal', tags: ['MiniTA', 'Compact Terminal'], image: '/images/products/Time Attendance/MiniTA/MiniTA.png', specs: { 'Display': '2.8-inch TFT Color Screen', 'Recognition': 'Facial & Fingerprint', 'Form Factor': 'Ultra-Compact' } },
  { category: 'time-attendance', subCategory: 'MiniTA', name: 'MiniTA', sub: 'Mini Time Attendance & Access Terminal', tags: ['MiniTA', 'Compact Terminal'], image: '/images/products/Time Attendance/MiniTA/MiniTA-2.png', specs: { 'Display': '2.8-inch Color Screen', 'Communication': 'TCP/IP, USB' } },

  // 18. SpeedFace V3L Series (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace V3L Series', name: 'SpeedFace V3L Series', sub: 'Slim Visible Light Facial & RFID Terminal', tags: ['SpeedFace V3L Series', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace V3L Series/SpeedFace V3L Series-1.png', specs: { 'Display': '2.4-inch Touch Screen', 'Protection': 'IP65 Water & Dust Resistant', 'Recognition': 'Visible Light Facial' } },
  { category: 'time-attendance', subCategory: 'SpeedFace V3L Series', name: 'SpeedFace V3L Series', sub: 'Slim Facial & Fingerprint Attendance Terminal', tags: ['SpeedFace V3L Series', 'Visible Light'], image: '/images/products/Time Attendance/SpeedFace V3L Series/SpeedFace V3L Series-2.png', specs: { 'Display': '2.4-inch Touch Screen', 'Sensor': 'Fingerprint & Facial AI' } },

  // 19. SpeedFace - V5L (2 items)
  { category: 'time-attendance', subCategory: 'SpeedFace - V5L', name: 'SpeedFace - V5L', sub: 'High-Performance Visible Light Facial Recognition Terminal', tags: ['SpeedFace - V5L', 'Facial AI'], badge: 'popular', featured: true, image: '/images/products/Time Attendance/SpeedFace - V5L/SpeedFace - V5L.png', specs: { 'Display': '5-inch Touch Screen', 'Capacity': '6,000 Face Templates', 'Verification': '<0.35s Speed' } },
  { category: 'time-attendance', subCategory: 'SpeedFace - V5L', name: 'SpeedFace - V5L', sub: 'Visible Light & RFID Reader Terminal', tags: ['SpeedFace - V5L', 'Facial AI'], image: '/images/products/Time Attendance/SpeedFace - V5L/SpeedFace - V5L-2.png', specs: { 'Display': '5-inch Touch Screen', 'Communication': 'TCP/IP, Wiegand, RS485' } },

  // 20. ProBio Plus Series (1 item)
  { category: 'time-attendance', subCategory: 'ProBio Plus Series', name: 'ProBio Plus Series', sub: 'High-Security Biometric Access & Attendance Terminal', tags: ['ProBio Plus Series', 'ProBio'], image: '/images/products/Time Attendance/ProBio Plus Series/ProBio Plus Series.png', specs: { 'Sensor': 'SilkID Fingerprint Sensor', 'Display': '2.8-inch Color Display', 'Security': 'Push Data & Firmware' } },

  // 21. MiniAC (3 items)
  { category: 'time-attendance', subCategory: 'MiniAC', name: 'MiniAC', sub: 'Compact Visible Light Facial Recognition Terminal', tags: ['MiniAC', 'Visible Light'], image: '/images/products/Time Attendance/MiniAC/MiniAC.png', specs: { 'Display': '5-inch Touch Screen', 'Recognition': 'Visible Light Facial', 'Platform': 'Linux' } },
  { category: 'time-attendance', subCategory: 'MiniAC', name: 'MiniAC', sub: 'Linux-Based Visible Light Station', tags: ['MiniAC', 'Visible Light'], image: '/images/products/Time Attendance/MiniAC/MiniAC-2.png', specs: { 'Display': '5-inch Touch Display', 'Capacity': '3,000 Face Templates' } },
  { category: 'time-attendance', subCategory: 'MiniAC', name: 'MiniAC', sub: 'Smart Facial Access & Attendance Unit', tags: ['MiniAC', 'Visible Light'], image: '/images/products/Time Attendance/MiniAC/MiniAC-3.png', specs: { 'Display': '5-inch Touch Screen', 'Communication': 'TCP/IP, Wi-Fi' } },

  // 22. FaceDepot 7C (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot 7C', name: 'FaceDepot 7C', sub: '7-inch Visible Light Facial Recognition Terminal', tags: ['FaceDepot 7C', 'FaceDepot'], image: '/images/products/Time Attendance/facedepot 7C/FaceDepot 7C.png', specs: { 'Display': '7-inch Touch Screen', 'Recognition': 'Visible Light Facial AI', 'Capacity': '10,000 Faces' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7C', name: 'FaceDepot 7C', sub: 'Indoor Facial Attendance Station', tags: ['FaceDepot 7C', 'FaceDepot'], image: '/images/products/Time Attendance/facedepot 7C/FaceDepot 7C-2.png', specs: { 'Display': '7-inch Touch Panel', 'Capacity': '10,000 Faces' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7C', name: 'FaceDepot 7C', sub: 'Large Display Visible Light Terminal', tags: ['FaceDepot 7C', 'FaceDepot'], image: '/images/products/Time Attendance/facedepot 7C/FaceDepot 7C-3.png', specs: { 'Display': '7-inch Touch Screen', 'Communication': 'TCP/IP, Wi-Fi' } },

  // 23. FaceDepot 7CL (3 items)
  { category: 'time-attendance', subCategory: 'FaceDepot 7CL', name: 'FaceDepot 7CL', sub: 'Outdoor Visible Light Facial Recognition Station', tags: ['FaceDepot 7CL', 'FaceDepot'], image: '/images/products/Time Attendance/Facedepot 7CL/Facedepot 7CL.png', specs: { 'Display': '7-inch Touch Screen', 'Ingress Protection': 'Weatherproof Rating', 'Capacity': '10,000 Faces' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7CL', name: 'FaceDepot 7CL', sub: 'High-Capacity Outdoor Facial Terminal', tags: ['FaceDepot 7CL', 'FaceDepot'], image: '/images/products/Time Attendance/Facedepot 7CL/Facedepot 7CL-2.png', specs: { 'Display': '7-inch Touch Screen', 'Camera': 'Wide Angle 2MP HD' } },
  { category: 'time-attendance', subCategory: 'FaceDepot 7CL', name: 'FaceDepot 7CL', sub: 'Turnstile & Wall Mount Facial Station', tags: ['FaceDepot 7CL', 'FaceDepot'], image: '/images/products/Time Attendance/Facedepot 7CL/Facedepot 7CL-3.png', specs: { 'Display': '7-inch Touch Panel', 'Mounting': 'Turnstile / Stand Mount' } },

  // 24. MiniAC Plus (3 items)
  { category: 'time-attendance', subCategory: 'MiniAC Plus', name: 'MiniAC Plus', sub: 'Visible Light Facial Recognition Terminal', tags: ['MiniAC Plus', 'MiniAC'], image: '/images/products/Time Attendance/MiniAC Plus/MiniAC Plus.png', specs: { 'Display': '5-inch Color Touch', 'Recognition': 'Visible Light', 'Capacity': '3,000 Faces' } },
  { category: 'time-attendance', subCategory: 'MiniAC Plus', name: 'MiniAC Plus', sub: 'Multi-Biometric Facial Unit', tags: ['MiniAC Plus', 'MiniAC'], image: '/images/products/Time Attendance/MiniAC Plus/MiniAC Plus-2.jpg', specs: { 'Display': '5-inch Color Touch Screen', 'Communication': 'TCP/IP, Wi-Fi, RS485' } },
  { category: 'time-attendance', subCategory: 'MiniAC Plus', name: 'MiniAC Plus', sub: 'Visible Light Access Terminal', tags: ['MiniAC Plus', 'MiniAC'], image: '/images/products/Time Attendance/MiniAC Plus/MiniAC Plus-3.jpg', specs: { 'Display': '5-inch Touch Screen', 'Camera': '2MP Dual Lens' } },

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
  },

  // ----------------------------------------------------
  // ARMATURA CATEGORY PRODUCTS
  // ----------------------------------------------------
  { category: 'armatura', subCategory: 'Armatura Standalone Terminals', name: 'OmniAC20', sub: 'Advanced Armatura Standalone Terminal', tags: ['OmniAC20', 'Standalone'], image: '/images/products/Armatura/Armatura Standalone Terminals/OmniAC20/OmniAC20-1.jpg', specs: { 'Platform': 'Armatura', 'Type': 'Standalone Terminal' } },
  { category: 'armatura', subCategory: 'Armatura Standalone Terminals', name: 'OmniAC30', sub: 'Advanced Armatura Standalone Terminal', tags: ['OmniAC30', 'Standalone'], image: '/images/products/Armatura/Armatura Standalone Terminals/OmniAC30/OmniAC30.jpg', specs: { 'Platform': 'Armatura', 'Type': 'Standalone Terminal' } },

  { category: 'armatura', subCategory: 'Armatura One', name: 'Armatura One', sub: 'Armatura One comprehensive specifications', tags: ['Armatura One'], image: '/images/products/Armatura/Armatura Reader/EP10C/EP10C.jpg', specs: { 'Platform': 'Armatura One', 'Document': 'Datasheet' } },

  { category: 'armatura', subCategory: 'Armatura Reader', name: 'VG10CKQ', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/VG10CKQ/VG10CKQ-1.png', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'AMT-FAPVR-30', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/AMT-FAPVR-30/AMT-FAPVR-30-1.png', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'AMT-FAPVS-30', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/AMT-FAPVS-30/AMT-FAPVS-30.png', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'AMT-PVS-50', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/AMT-PVS-50/AMT-PVS-50.png', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'AMT-PVR-10', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/AMT-PVR-10/AMT-PVR-10 (3).jpg', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'EP10C', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/EP10C/EP10C.jpg', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'EP30CF', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/EP30CF/EP30CF.jpg', specs: { 'Type': 'Reader' } },
  { category: 'armatura', subCategory: 'Armatura Reader', name: 'EP20 Series', sub: 'High Security Armatura Reader', tags: ['Reader'], image: '/images/products/Armatura/Armatura Reader/EP20 Series/EP20C Series.png', specs: { 'Type': 'Reader' } },

  { category: 'armatura', subCategory: 'Armatura Controller', name: 'AHDU Series', sub: 'Armatura Multi-Door Controller', tags: ['Controller'], image: '/images/products/Armatura/Armatura Reader/AMT-FAPVR-30/AMT-FAPVR-30-2.png', specs: { 'Type': 'Controller' } },
  { category: 'armatura', subCategory: 'Armatura Controller', name: 'AHEB Series', sub: 'Armatura Multi-Door Controller', tags: ['Controller'], image: '/images/products/Armatura/Armatura Reader/AMT-FAPVS-30/AMT-FAPVS-30-2.png', specs: { 'Type': 'Controller' } },
  { category: 'armatura', subCategory: 'Armatura Controller', name: 'AHSC-1000', sub: 'Armatura Multi-Door Controller', tags: ['Controller'], image: '/images/products/Armatura/Armatura Reader/AMT-PVS-50/AMT-PVS-50-4.png', specs: { 'Type': 'Controller' } },

  { category: 'armatura', subCategory: 'Armatura Entrance Control', name: 'AMTL-BGM1000', sub: 'Armatura Smart Entrance Solution', tags: ['Entrance Control'], image: '/images/products/Armatura/Armatura Reader/EP20 Series/EP20CKQ-2.png', specs: { 'Type': 'Entrance Control' } },
  { category: 'armatura', subCategory: 'Armatura Entrance Control', name: 'Aegis-2000', sub: 'Armatura Smart Entrance Solution', tags: ['Entrance Control'], image: '/images/products/Armatura/Armatura Reader/EP30CF/Aegis-2000.jpg', specs: { 'Type': 'Entrance Control' } },
  { category: 'armatura', subCategory: 'Armatura Entrance Control', name: 'Aegis-1000', sub: 'Armatura Smart Entrance Solution', tags: ['Entrance Control'], image: '/images/products/Armatura/Armatura Reader/AMT-PVR-10/AMT-PVR-10 (5).jpg', specs: { 'Type': 'Entrance Control' } },

  // ----------------------------------------------------
  // SMART ENTRANCE CONTROL PRODUCTS
  // ----------------------------------------------------
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBTL3000', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Saturn Plus Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT2200L', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT2200DL', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Saturn-F1000 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Zophon-S1000', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Saturn-T1000', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBTL8000 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Saturn-S2000 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBT3000S', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FBL700 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FBL500 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'TS200 Pro', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'TS2000 Plus Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'TS1000 Plus Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'mTS1000 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Saturn S1000 & S1200', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'TS2000 Pro Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBTL500', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Comet Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FBL300', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'Mars-S100 Series', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FBL320', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBTL300', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FBL200', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBTL320', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FBL220', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'SBT2000S', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT4000D-LA', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT4000S-LA', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT3000D-LA', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT3000S-LA', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },
  { category: 'smart-entrance', subCategory: 'Smart Security Gate', name: 'FHT2300', sub: 'Smart Security Gate', tags: ['Security Gate'], image: '/images/products/Access Control/FR1500S/FR1500S.png', specs: { 'Type': 'Smart Security Gate' } },

  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier - BGM300', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier - BGM500', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier - BGM400', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier - BGM1000 Series', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier- BG300', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier - BG2000 Series', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'Boom Barrier - CMP200', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'LRM300', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },
  { category: 'smart-entrance', subCategory: 'Smart Vehicle & Inspection', name: 'LPRS1000', sub: 'Smart Vehicle Inspection', tags: ['Vehicle Inspection'], image: '/images/products/Access Control/SA32-E/SA32-E.png', specs: { 'Type': 'Vehicle Inspection' } },

  // ----------------------------------------------------
  // SECURITY INSPECTION PRODUCTS
  // ----------------------------------------------------
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'ZKX6040A', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'ZKX6550A', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'Baggage Scanners ZKX5030C', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'Baggage Scanners ZKX5030A', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'Baggage Scanners ZKX6040', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'Baggage Scanners ZKX6550', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },
  { category: 'security-inspection', subCategory: 'Baggage Scanner', name: 'ZKX100100', sub: 'Security Inspection', tags: ['Baggage Scanner'], image: '/images/products/Access Control/EC16 & DEX16/EC16 & DEX16.png', specs: { 'Type': 'Baggage Scanner' } },

  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D3180V', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D1090', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D1010L', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D2110', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'AMD1800 Pro', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D1065', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D1065S', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D1065L', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Door Frame Metal Detector', name: 'ZK-D2180', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/FR1200/FR1200.png', specs: { 'Type': 'Door Frame Metal Detector' } },

  { category: 'security-inspection', subCategory: 'Hand Held Metal Detector', name: 'ZK-D100S', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/KR600 Series/KR600M_01.png', specs: { 'Type': 'Hand Held Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Hand Held Metal Detector', name: 'ZK-D180', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/KR600 Series/KR600M_01.png', specs: { 'Type': 'Hand Held Metal Detector' } },
  { category: 'security-inspection', subCategory: 'Hand Held Metal Detector', name: 'ZK-D160', sub: 'Security Inspection', tags: ['Metal Detector'], image: '/images/products/Access Control/KR600 Series/KR600M_01.png', specs: { 'Type': 'Hand Held Metal Detector' } },

  // Video Surveillance - Dome Series
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '2MP Mini Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Mini Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '2MP Mini Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Mini Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '2MP Fixed Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Fixed Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '5MP Fixed Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/5MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '5MP', 'Type': 'Fixed Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '5MP Fixed Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/5MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '5MP', 'Type': 'Fixed Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '8MP Fixed Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/8MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '8MP', 'Type': 'Fixed Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '2MP Vandalproof Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Vandalproof Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '2MP Vandalproof Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Vandalproof Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '5MP Vandalproof Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/5MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '5MP', 'Type': 'Vandalproof Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '2MP Motorized Varifocal Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Motorized Varifocal Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '5MP Motorized Varifocal Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/5MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '5MP', 'Type': 'Motorized Varifocal Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: '8MP Motorized Varifocal Dome', sub: 'IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/8MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '8MP', 'Type': 'Motorized Varifocal Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: 'GV-DNC8742', sub: '12MP Fisheye Dome IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Fixed Mini Dome Ip Network Camera.png', specs: { 'Resolution': '12MP', 'Type': 'Fisheye Dome' } },
  { category: 'video-surveillance', subCategory: 'Dome Series', name: 'GV-DNC283(C)', sub: '2MP Color Dome IP Network Camera', tags: ['Dome Series', 'IP Camera'], image: '/images/products/Video Surveillance/2MP Mini Dome Ip Network Camera.png', specs: { 'Resolution': '2MP', 'Type': 'Color Dome' } },

  // Video Surveillance - Bullet Series
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '2MP Mini Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '2MP', 'Type': 'Mini Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '2MP Mini Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '2MP', 'Type': 'Mini Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '2MP Fixed Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '2MP', 'Type': 'Fixed Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '5MP Fixed Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '5MP', 'Type': 'Fixed Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '5MP Mini Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '5MP', 'Type': 'Mini Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '8MP Fixed Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '8MP', 'Type': 'Fixed Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '2MP Motorized Varifocal Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '2MP', 'Type': 'Motorized Varifocal Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '5MP Motorized Varifocal Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '5MP', 'Type': 'Motorized Varifocal Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '8MP Motorized Varifocal Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '8MP', 'Type': 'Motorized Varifocal Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '2MP Motorized Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '2MP', 'Type': 'Motorized Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '5MP Motorized Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '5MP', 'Type': 'Motorized Bullet' } },
  { category: 'video-surveillance', subCategory: 'Bullet Series', name: '2MP Color Bullet', sub: 'IP Network Camera', tags: ['Bullet Series', 'IP Camera'], image: '/images/products/Video Surveillance/Bullet Placeholder.png', specs: { 'Resolution': '2MP', 'Type': 'Color Bullet' } },

  // Video Surveillance - NVR
  { category: 'video-surveillance', subCategory: 'NVR', name: '8CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Thin.png', specs: { 'Channels': '8', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '16CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Thin.png', specs: { 'Channels': '16', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '16CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Thin.png', specs: { 'Channels': '16', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '32CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Medium.png', specs: { 'Channels': '32', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '32CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Medium.png', specs: { 'Channels': '32', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '32CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Medium.png', specs: { 'Channels': '32', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '64CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Medium.png', specs: { 'Channels': '64', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '64CH HD', sub: 'Network Video Recorder', tags: ['NVR', 'Video Recorder'], image: '/images/products/Video Surveillance/NVR Placeholder Medium.png', specs: { 'Channels': '64', 'Type': 'NVR' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '256CH HD', sub: 'Recording Server', tags: ['NVR', 'Recording Server'], image: '/images/products/Video Surveillance/Recording Server Placeholder.png', specs: { 'Channels': '256', 'Type': 'Recording Server' } },
  { category: 'video-surveillance', subCategory: 'NVR', name: '128CH HD', sub: 'Recording Server', tags: ['NVR', 'Recording Server'], image: '/images/products/Video Surveillance/Recording Server Placeholder.png', specs: { 'Channels': '128', 'Type': 'Recording Server' } }
];

export default function Products({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [accessControlOpen, setAccessControlOpen] = useState(false);
  const [timeAttendanceOpen, setTimeAttendanceOpen] = useState(false);
  const [armaturaOpen, setArmaturaOpen] = useState(false);
  const [smartEntranceOpen, setSmartEntranceOpen] = useState(false);
  const [securityInspectionOpen, setSecurityInspectionOpen] = useState(false);
  const [videoSurveillanceOpen, setVideoSurveillanceOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);
  const [ajaxOpen, setAjaxOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProduct) setSelectedImageIndex(0);
  }, [selectedProduct]);
  const [timeSubOpen, setTimeSubOpen] = useState({});
  const [accessSubOpen, setAccessSubOpen] = useState({});
  const [armaturaSubOpen, setArmaturaSubOpen] = useState({});
  const [smartEntranceSubOpen, setSmartEntranceSubOpen] = useState({});
  const [securityInspectionSubOpen, setSecurityInspectionSubOpen] = useState({});
  const [videoSurveillanceSubOpen, setVideoSurveillanceSubOpen] = useState({});
  const [softwareSubOpen, setSoftwareSubOpen] = useState({});
  const [ajaxSubOpen, setAjaxSubOpen] = useState({});

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

  const getFilteredProducts = (catId, subCatOverride = null) => {
    let productsInCat = PRODUCTS.filter(p => p.category === catId);
    const subCat = subCatOverride || activeSubcategory;

    if (subCat) {
      if (subCat === 'Visible Series') {
        const visibleList = [
          'miniac', 'miniac plus', 'facedepot 7cl', 'facedepot 7c', 'probio plus series',
          'speedface - v5l', 'speedface-v5l', 'minita', 'd3', 'speedfacem4', 'speedface m4',
          'eface 10', 'facedepot-7bl', 'facedepot 8al', 'facedepot 4a', 'speedface h5l',
          'speedface v3l series', 'speedface-v5', 'mb10-vl'
        ];
        productsInCat = productsInCat.filter(p =>
          visibleList.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))
        );
      } else if (subCat === 'Fingerprint Attendance') {
        const fpList = ['k40 pro', 'k45 pro', 'in01-a'];
        productsInCat = productsInCat.filter(p =>
          fpList.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))
        );
      } else if (subCat === 'Face Attendance') {
        const faceList = ['mb30', 'mb360'];
        productsInCat = productsInCat.filter(p =>
          faceList.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))
        );
      } else if (catId === 'access-control') {
        if (subCat === 'Multi Door Controller') {
          const list = ['c3-', 'inbio pc', 'inbio-160', 'dm10', 'atlas prox', 'atlas bio'];
          productsInCat = productsInCat.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s)));
        } else if (subCat === 'Standalone Devices') {
          const list = ['f09', 'sf1005', 'mk-v1', 'f18', 'f22', 'sf100', 'x7', 'sc405', 'sc800', 'sa40'];
          productsInCat = productsInCat.filter(p => list.some(s => p.subCategory.toLowerCase() === s || p.name.toLowerCase().includes(s) || p.subCategory.toLowerCase().includes(s)));
        } else if (subCat === 'Readers') {
          const list = ['qr600', 'fr1200', 'fr1500s', 'kr500', 'rs485 reader'];
          productsInCat = productsInCat.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s)));
        } else if (subCat === 'Elevator Access Controller') {
          const list = ['ec16 & dex16', 'ec10 & ex16'];
          productsInCat = productsInCat.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s)));
        } else {
          let lookupCat = subCat;
          if (lookupCat === 'C3 Plus Series') lookupCat = 'C3-100 Plus';
          if (lookupCat === 'InBioPC Series & DE-10') lookupCat = 'InBio PC Series & DE10';
          if (lookupCat === 'InBio Pro Plus Series') lookupCat = 'inBio-160 Pro Plus';
          
          productsInCat = productsInCat.filter(p =>
            p.subCategory === lookupCat ||
            p.name === lookupCat ||
            p.tags.includes(lookupCat) ||
            p.subCategory.toLowerCase().includes(lookupCat.toLowerCase()) ||
            p.name.toLowerCase().includes(lookupCat.toLowerCase())
          );
        }
      } else {
        let lookupCat = subCat;
        if (lookupCat === 'C3 Plus Series') lookupCat = 'C3-100 Plus';
        if (lookupCat === 'InBioPC Series & DE-10') lookupCat = 'InBio PC Series & DE10';
        if (lookupCat === 'InBio Pro Plus Series') lookupCat = 'inBio-160 Pro Plus';
        
        productsInCat = productsInCat.filter(p =>
          p.subCategory === lookupCat ||
          p.name === lookupCat ||
          p.tags.includes(lookupCat) ||
          p.subCategory.toLowerCase().includes(lookupCat.toLowerCase()) ||
          p.name.toLowerCase().includes(lookupCat.toLowerCase())
        );
      }
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
    if (cat.id === 'software') return true;
    const matchedProducts = getFilteredProducts(cat.id);
    return matchedProducts.length > 0;
  });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ position: 'relative', padding: '8rem 0 6rem', textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, #0c2540 0%, #041221 70%)', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'linear-gradient(rgba(0,180,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)' }}></div>
        
        {/* Animated Glow Orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '500px', height: '500px', background: '#00d4fc', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }}></div>

        <div className="container page-hero-inner" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ padding: '0.5rem 1.5rem', borderRadius: '50px', background: 'rgba(0, 180, 216, 0.08)', border: '1px solid rgba(0, 180, 216, 0.3)', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 0 20px rgba(0,180,216,0.15)', backdropFilter: 'blur(5px)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></span>
            Full Catalogue
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1, fontFamily: 'var(--font-h)' }}>
            <span style={{ color: 'var(--white)' }}>Explore Our</span> <br />
            <span style={{ background: 'linear-gradient(90deg, #00B4D8, #48cae4, #00B4D8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% auto' }}>Premium Range</span>
          </h1>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', maxWidth: '650px', lineHeight: 1.6, marginBottom: '3.5rem' }}>
            Enterprise-grade biometric devices, access control systems, software platforms, and security inspection tools — all engineered for India's most demanding environments.
          </p>

          <div style={{ position: 'relative', width: '100%', maxWidth: '700px', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', left: '1.8rem', fontSize: '1.2rem', color: 'var(--primary)', display: 'flex', pointerEvents: 'none' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input
              type="text"
              id="searchInput"
              placeholder="Search products, e.g. SpeedFace, Atlas controller, armatura…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveCategory('all');
                setActiveSubcategory(null);
              }}
              style={{
                width: '100%',
                padding: '1.3rem 1.3rem 1.3rem 4rem',
                fontSize: '1.05rem',
                color: 'var(--white)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                e.target.style.borderColor = 'rgba(0, 180, 216, 0.5)';
                e.target.style.boxShadow = '0 15px 50px rgba(0, 180, 216, 0.15), inset 0 0 0 1px rgba(0, 180, 216, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)';
              }}
            />
            <button 
              style={{ position: 'absolute', right: '0.6rem', padding: '0.8rem 2rem', borderRadius: '50px', background: 'var(--primary)', color: '#041221', fontSize: '1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(0, 180, 216, 0.4)' }} 
              onMouseEnter={e => { e.target.style.background = '#00d4fc'; e.target.style.transform = 'scale(1.05)'; }} 
              onMouseLeave={e => { e.target.style.background = 'var(--primary)'; e.target.style.transform = 'scale(1)'; }}
            >
              Search
            </button>
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
                const isArmatura = cat.id === 'armatura';
                const isSmartEntrance = cat.id === 'smart-entrance';
                const isSecurityInspection = cat.id === 'security-inspection';
                const isVideoSurveillance = cat.id === 'video-surveillance';
                const isSoftware = cat.id === 'software';
                const isAjax = cat.id === 'ajax';
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
                        if (isArmatura) {
                          setArmaturaOpen(!armaturaOpen);
                        }
                        if (isSmartEntrance) {
                          setSmartEntranceOpen(!smartEntranceOpen);
                        }
                        if (isSecurityInspection) {
                          setSecurityInspectionOpen(!securityInspectionOpen);
                        }
                        if (isVideoSurveillance) {
                          setVideoSurveillanceOpen(!videoSurveillanceOpen);
                        }
                        if (isSoftware) {
                          setSoftwareOpen(!softwareOpen);
                        }
                        if (isAjax) {
                          setAjaxOpen(!ajaxOpen);
                        }
                        setSidebarOpen(false);
                        const el = document.getElementById(cat.id);
                        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: activeCategory === cat.id ? 700 : 500 }}>{cat.label}</span>
                        <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>
                          {isAccessControl ? (accessControlOpen ? '▲' : '▼') :
                           isTimeAttendance ? (timeAttendanceOpen ? '▲' : '▼') :
                           isArmatura ? (armaturaOpen ? '▲' : '▼') :
                           isSmartEntrance ? (smartEntranceOpen ? '▲' : '▼') :
                           isSecurityInspection ? (securityInspectionOpen ? '▲' : '▼') :
                           isVideoSurveillance ? (videoSurveillanceOpen ? '▲' : '▼') :
                           isSoftware ? (softwareOpen ? '▲' : '▼') : 
                           isAjax ? (ajaxOpen ? '▲' : '▼') : null}
                        </span>
                      </span>
                      <span className="cat-count">{count}</span>
                    </button>

                    {/* Access Control Subcategory Dropdown */}
                    {isAccessControl && accessControlOpen && (
                      <div className="subcat-menu">
                        {Object.keys(ACCESS_CONTROL_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'access-control' && activeSubcategory === subName;
                          const isExpanded = accessSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'access-control');
                          let subCount = 0;
                          
                          if (subName === 'Multi Door Controller') {
                            const list = ['c3-', 'inbio pc', 'inbio-160', 'dm10', 'atlas prox', 'atlas bio'];
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                          } else if (subName === 'Standalone Devices') {
                            const list = ['f09', 'sf1005', 'mk-v1', 'f18', 'f22', 'sf100', 'x7', 'sc405', 'sc800', 'sa40'];
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase() === s || p.name.toLowerCase().includes(s) || p.subCategory.toLowerCase().includes(s))).length;
                          } else if (subName === 'Readers') {
                            const list = ['qr600', 'fr1200', 'fr1500s', 'kr500', 'rs485 reader'];
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                          } else if (subName === 'Elevator Access Controller') {
                            const list = ['ec16 & dex16', 'ec10 & ex16'];
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                          } else {
                            subCount = subProds.filter(p => p.subCategory === subName).length;
                          }
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('access-control');
                                  setActiveSubcategory(subName);
                                  setAccessSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {ACCESS_CONTROL_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'access-control' && activeSubcategory === modelName;
                                    let lookupCat = modelName;
                                    if (lookupCat === 'C3 Plus Series') lookupCat = 'C3-100 Plus';
                                    if (lookupCat === 'InBioPC Series & DE-10') lookupCat = 'InBio PC Series & DE10';
                                    if (lookupCat === 'InBio Pro Plus Series') lookupCat = 'inBio-160 Pro Plus';
                                    
                                    const modelCount = subProds.filter(p => p.subCategory === lookupCat || p.name === lookupCat || p.tags.includes(lookupCat) || p.subCategory.toLowerCase().includes(lookupCat.toLowerCase())).length;
                                    
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('access-control');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Time Attendance Subcategory Dropdown */}
                    {isTimeAttendance && timeAttendanceOpen && (
                      <div className="subcat-menu">
                        {Object.keys(TIME_ATTENDANCE_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'time-attendance' && activeSubcategory === subName;
                          const isExpanded = timeSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'time-attendance');
                          let subCount = 0;
                          
                          if (subName === 'Visible Series') {
                            const list = TIME_ATTENDANCE_HIERARCHY['Visible Series'].map(s => s.toLowerCase());
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                          } else if (subName === 'Fingerprint Attendance') {
                            const list = TIME_ATTENDANCE_HIERARCHY['Fingerprint Attendance'].map(s => s.toLowerCase());
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                          } else if (subName === 'Face Attendance') {
                            const list = TIME_ATTENDANCE_HIERARCHY['Face Attendance'].map(s => s.toLowerCase());
                            subCount = subProds.filter(p => list.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                          } else {
                            subCount = subProds.filter(p => p.subCategory === subName).length;
                          }
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('time-attendance');
                                  setActiveSubcategory(subName);
                                  setTimeSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {TIME_ATTENDANCE_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'time-attendance' && activeSubcategory === modelName;
                                    const mList = [modelName.toLowerCase()];
                                    const modelCount = subProds.filter(p => mList.some(s => p.subCategory.toLowerCase().includes(s) || p.name.toLowerCase().includes(s))).length;
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('time-attendance');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {/* Armatura Subcategory Dropdown */}
                    {isArmatura && armaturaOpen && (
                      <div className="subcat-menu">
                        {Object.keys(ARMATURA_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'armatura' && activeSubcategory === subName;
                          const isExpanded = armaturaSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'armatura');
                          let subCount = subProds.filter(p => p.subCategory === subName).length;
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('armatura');
                                  setActiveSubcategory(subName);
                                  setArmaturaSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {ARMATURA_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'armatura' && activeSubcategory === modelName;
                                    const modelCount = subProds.filter(p => p.subCategory === subName && p.name === modelName).length;
                                    
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('armatura');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Smart Entrance Subcategory Dropdown */}
                    {isSmartEntrance && smartEntranceOpen && (
                      <div className="subcat-menu">
                        {Object.keys(SMART_ENTRANCE_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'smart-entrance' && activeSubcategory === subName;
                          const isExpanded = smartEntranceSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'smart-entrance');
                          let subCount = subProds.filter(p => p.subCategory === subName).length;
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('smart-entrance');
                                  setActiveSubcategory(subName);
                                  setSmartEntranceSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {SMART_ENTRANCE_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'smart-entrance' && activeSubcategory === modelName;
                                    const modelCount = subProds.filter(p => p.subCategory === subName && p.name === modelName).length;
                                    
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('smart-entrance');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Security Inspection Subcategory Dropdown */}
                    {isSecurityInspection && securityInspectionOpen && (
                      <div className="subcat-menu">
                        {Object.keys(SECURITY_INSPECTION_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'security-inspection' && activeSubcategory === subName;
                          const isExpanded = securityInspectionSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'security-inspection');
                          let subCount = subProds.filter(p => p.subCategory === subName).length;
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('security-inspection');
                                  setActiveSubcategory(subName);
                                  setSecurityInspectionSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {SECURITY_INSPECTION_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'security-inspection' && activeSubcategory === modelName;
                                    const modelCount = subProds.filter(p => p.subCategory === subName && p.name === modelName).length;
                                    
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('security-inspection');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Video Surveillance Subcategory Dropdown */}
                    {isVideoSurveillance && videoSurveillanceOpen && (
                      <div className="subcat-menu">
                        {Object.keys(VIDEO_SURVEILLANCE_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'video-surveillance' && activeSubcategory === subName;
                          const isExpanded = videoSurveillanceSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'video-surveillance');
                          let subCount = subProds.filter(p => p.subCategory === subName).length;
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('video-surveillance');
                                  setActiveSubcategory(subName);
                                  setVideoSurveillanceSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {VIDEO_SURVEILLANCE_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'video-surveillance' && activeSubcategory === modelName;
                                    const modelCount = subProds.filter(p => p.subCategory === subName && p.name === modelName).length;
                                    
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('video-surveillance');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Software Categories Subcategory Dropdown */}
                    {isSoftware && softwareOpen && (
                      <div className="subcat-menu">
                        {Object.keys(SOFTWARE_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'software' && activeSubcategory === subName;
                          const isExpanded = softwareSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'software');
                          let subCount = subProds.filter(p => p.subCategory === subName).length;
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('software');
                                  setActiveSubcategory(subName);
                                  setSoftwareSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>

                              {/* Nested Dropdown for models */}
                              {isExpanded && (
                                <div className="subcat-menu" style={{ paddingLeft: '1.5rem', marginTop: '0.2rem', paddingBottom: '0.2rem' }}>
                                  {SOFTWARE_HIERARCHY[subName].map(modelName => {
                                    const isModelActive = activeCategory === 'software' && activeSubcategory === modelName;
                                    const modelCount = subProds.filter(p => p.subCategory === subName && p.name === modelName).length;
                                    
                                    return (
                                      <button
                                        key={modelName}
                                        className={`subcat-btn ${isModelActive ? 'active' : ''}`}
                                        onClick={() => {
                                          setActiveCategory('software');
                                          setActiveSubcategory(modelName);
                                          setSearchQuery('');
                                          setSidebarOpen(false);
                                        }}
                                        style={{ padding: '0.4rem 1rem' }}
                                      >
                                        <span>{modelName}</span>
                                        <span className="cat-count" style={{ fontSize: '0.65rem' }}>{modelCount}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Ajax Categories Subcategory Dropdown */}
                    {isAjax && ajaxOpen && (
                      <div className="subcat-menu">
                        {Object.keys(AJAX_HIERARCHY).map((subName) => {
                          const isSubActive = activeCategory === 'ajax' && activeSubcategory === subName;
                          const isExpanded = ajaxSubOpen[subName];
                          const subProds = PRODUCTS.filter(p => p.category === 'ajax');
                          let subCount = subProds.filter(p => p.subCategory === subName).length;
                          
                          return (
                            <div key={subName} style={{ width: '100%' }}>
                              <button
                                className={`subcat-btn ${isSubActive ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveCategory('ajax');
                                  setActiveSubcategory(subName);
                                  setAjaxSubOpen(prev => ({ [subName]: !prev[subName] }));
                                  setSearchQuery('');
                                }}
                              >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                  <span style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '14px', 
                                    height: '14px', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 'bold',
                                    backgroundColor: isExpanded ? '#8BC34A' : 'transparent',
                                    color: isExpanded ? '#fff' : 'inherit',
                                    border: isExpanded ? 'none' : '1px solid currentColor',
                                    borderRadius: '2px',
                                    lineHeight: '1'
                                  }}>
                                    {isExpanded ? '-' : '+'}
                                  </span>
                                  <span>{subName}</span>
                                </span>
                                <span className="cat-count" style={{ fontSize: '0.7rem' }}>{subCount}</span>
                              </button>
                            </div>
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
                    {cat.id === 'software' ? (
                      <div className="software-showcase">
                        {(!activeSubcategory || activeSubcategory === 'Time Attendance Software') && (
                          <div className="software-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Time Attendance Software</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              ZKTeco Time Attendance Software is a powerful workforce management solution that simplifies attendance tracking, automates calculations, and provides valuable insights. With its comprehensive features, integration capabilities, and user-friendly interface, this software enhances efficiency, accuracy, and productivity in managing employee attendance.
                            </p>
                            <img src="/images/products/Software/Time Attendance Software.jpg" alt="Time Attendance Software" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                              {[
                                { title: 'easy GymFit', logo: 'easy GymFit', pdf: '/pdfs/easy Gym fit_Data Sheet_01 1 (1).pdf' },
                                { title: 'easy TimePro', logo: 'easy TimePro', pdf: '/pdfs/easy TimePro_Data Sheet_2025 3 (1).pdf' },
                                { title: 'easy WDMS', logo: 'easy WDMS', pdf: '/pdfs/easy WDMS_Data Sheet_2025 3.pdf' }
                              ].map((item, idx) => (
                                <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', position: 'relative', height: '280px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', color: 'var(--white)', transition: 'transform 0.3s, border-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                                  {item.isNew && <div style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: '#7CB342', color: '#fff', padding: '3px 10px', fontSize: '0.75rem', borderRadius: '4px', fontWeight: 'bold', boxShadow: '0 2px 10px rgba(124, 179, 66, 0.4)' }}>🏷️ New</div>}
                                  
                                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--white)', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                                      {item.logo.startsWith('easy') ? (
                                        <><span style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: '900' }}>e</span>asy {item.logo.substring(5)}</>
                                      ) : item.logo}
                                    </h3>
                                  </div>
                                  
                                  <div style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--muted)' }}>
                                    {item.title}
                                  </div>
                                  
                                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <a href={item.pdf || '#'} download={!!item.pdf} onClick={(e) => { if(!item.pdf) { e.preventDefault(); alert('PDF not available yet.'); } }} style={{ background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.3)', borderRadius: '20px', padding: '0.5rem 1.5rem', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', color: 'var(--primary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 180, 216, 0.1)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                      Download
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {(!activeSubcategory || activeSubcategory === 'Cloud Attendance Software') && (
                          <div className="software-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Cloud Attendance Software</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              ZKTeco Cloud Attendance Software is a powerful, cloud-based time and attendance solution designed to streamline workforce management for businesses of all sizes. With real-time data access, advanced biometric integration, and intelligent reporting, it enables organizations to monitor employee attendance from anywhere, at any time.
                            </p>
                            <img src="/images/products/Software/Cloud Attendance Sotware.jpg" alt="Cloud Attendance Software" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                              {[
                                { title: 'BioTime Cloud 2.0', logo: 'BioTime Cloud 2.0', pdf: '/pdfs/ZK_BioTime Cloud 2.0_Datasheet_2024 1.pdf' }
                              ].map((item, idx) => (
                                <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', position: 'relative', height: '280px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', color: 'var(--white)', transition: 'transform 0.3s, border-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--white)', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                                      {item.logo}
                                    </h3>
                                  </div>
                                  
                                  <div style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--muted)' }}>
                                    {item.title}
                                  </div>
                                  
                                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <a href={item.pdf || '#'} download={!!item.pdf} onClick={(e) => { if(!item.pdf) { e.preventDefault(); alert('PDF not available yet.'); } }} style={{ background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.3)', borderRadius: '20px', padding: '0.5rem 1.5rem', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', color: 'var(--primary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 180, 216, 0.1)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                      Download
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {(!activeSubcategory || activeSubcategory === 'ZKBio Security Software') && (
                          <div className="software-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>ZKBio Security Software</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              The ZKBioSecurity "All-in-One" Web security platform features multiple integrated modules for Personnel Management, Access Control, Attendance Management, Hotel Module, Consumption Management, Elevator Control (online/offline) With an optimized system architecture designed for high level biometric identification and a modern user friendly interface, it brings a whole new experience to users.
                            </p>
                            <img src="/images/products/Software/ZKBio Security Software.jpg" alt="ZKBio Security Software" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                              {[
                                { title: 'ZKBio CVSecurity SmartLock', logo: 'ZKBio CVSecurity SmartLock', pdf: '/pdfs/ZKBio CVSecurity SmartLock_Datasheet_2025.pdf' },
                                { title: 'ZKBio CVSecurity', logo: 'ZKBio CVSecurity', pdf: '/pdfs/ZKBio CVSecurity 6.8.0_Datasheet_2026_00.pdf' }
                              ].map((item, idx) => (
                                <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', position: 'relative', height: '280px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', color: 'var(--white)', transition: 'transform 0.3s, border-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--white)', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                                      <span style={{ color: 'var(--primary)' }}>ZKBio</span> <br />{item.logo.replace('ZKBio ', '')}
                                    </h3>
                                  </div>
                                  
                                  <div style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--muted)' }}>
                                    {item.title}
                                  </div>
                                  
                                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <a href={item.pdf || '#'} download={!!item.pdf} onClick={(e) => { if(!item.pdf) { e.preventDefault(); alert('PDF not available yet.'); } }} style={{ background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.3)', borderRadius: '20px', padding: '0.5rem 1.5rem', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', color: 'var(--primary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 180, 216, 0.1)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                      Download
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : cat.id === 'access-control' ? (
                      <div className="access-control-showcase">
                        {(!activeSubcategory || activeSubcategory === 'Multi Door Controller') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Multi Door Controller</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Astra Technologies offers ZKTeco Multi-Door Controllers, designed to manage and secure multiple access points from a centralized platform. Supporting card readers, biometric devices, and electric locks, these scalable controllers provide reliable access control, enhanced security, and efficient entry management for offices, commercial buildings, educational institutions, and industrial facilities.
                            </p>
                            <img src="/images/products/Access Control/Multi Door COntroller.png" alt="Multi Door Controller" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('access-control', 'Multi Door Controller').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Standalone Devices') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Standalone Devices</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Comprehensive range of ZKTeco Access Control solutions, including Face Recognition, Fingerprint, Finger Vein, Palm Recognition, and RFID-based systems. Our portfolio also includes IP-based access control panels, readers, and accessories with web and mobile applications for secure, centralized, and hassle-free access management.
                            </p>
                            <img src="/images/products/Access Control/Standalone Devices.png" alt="Standalone Devices" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('access-control', 'Standalone Devices').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Readers') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Readers</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Comprehensive range of ZKTeco Access Control solutions, including Face Recognition, Fingerprint, Finger Vein, Palm Recognition, and RFID-based systems. Our portfolio also includes IP-based access control panels, readers, and accessories with web and mobile applications for secure, centralized, and hassle-free access management.
                            </p>
                            <img src="/images/products/Access Control/Readers.png" alt="Readers" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('access-control', 'Readers').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Elevator Access Controller') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Elevator Access Controller</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              We are a leading provider of advanced and innovative elevator control solutions designed to enhance the safety, efficiency, and convenience of elevator systems. Our Elevator Control panels are meticulously engineered to meet the highest industry standards, ensuring reliable and secure operation of elevators in various commercial, residential, and industrial settings.
                            </p>
                            <img src="/images/products/Access Control/Elevator Access Controller.png" alt="Elevator Access Controller" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('access-control', 'Elevator Access Controller').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : cat.id === 'armatura' ? (
                      <div className="armatura-showcase">
                        {(!activeSubcategory || activeSubcategory === 'Armatura Standalone Terminals') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Armatura Standalone Terminals</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Armatura Smart Standalone Terminal offers a compact, self-contained, and cost-effective solution for access control. With its built-in reader, controller, and user interface, it provides secure and efficient access control without the need for additional hardware or software.
                            </p>
                            <img src="/images/products/Armatura/Armatura.png" alt="Armatura Standalone Terminals" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('armatura', 'Armatura Standalone Terminals').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Armatura One') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Armatura One</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Armatura One offers an all-in-one solution for security management, integrating access control, video surveillance, alarm management, and visitor management into a single web-based platform. It provides convenience, efficiency, and comprehensive security control for various applications and organizations.
                            </p>
                            <img src="/images/products/Armatura/Armatura.png" alt="Armatura One" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                              {[
                                { title: 'ARMATURA ONE Datasheet', logo: 'Armatura One', pdf: '/images/products/Armatura/Armatura One/ARMATURA ONE Datesheet 20240827 (1).pdf' }
                              ].map((item, idx) => (
                                <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', position: 'relative', height: '280px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)', color: 'var(--white)', transition: 'transform 0.3s, border-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem', textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--white)', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                                      <span style={{ color: 'var(--primary)' }}>Armatura</span> <br />One
                                    </h3>
                                  </div>
                                  
                                  <div style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--muted)' }}>
                                    {item.title}
                                  </div>
                                  
                                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <a href={item.pdf || '#'} download={!!item.pdf} onClick={(e) => { if(!item.pdf) { e.preventDefault(); alert('PDF not available yet.'); } }} style={{ background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.3)', borderRadius: '20px', padding: '0.5rem 1.5rem', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', color: 'var(--primary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 180, 216, 0.1)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                      Download
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Armatura Reader') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Armatura Reader</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Reader-Armatura's RFID readers provide a reliable, secure, and efficient solution for access control. They offer advanced features, support various RFID card technologies, and can be seamlessly integrated with other access control systems to provide a comprehensive access control solution.
                            </p>
                            <img src="/images/products/Armatura/Armatura.png" alt="Armatura Reader" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('armatura', 'Armatura Reader').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Armatura Controller') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Armatura Controller</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Armatura's controllers are reliable, secure, and efficient solutions that enhance the security and access management of various facilities. They offer advanced features, multiple authentication options, and seamless integration with other security systems to provide a comprehensive access control solution.
                            </p>
                            <img src="/images/products/Armatura/Armatura.png" alt="Armatura Controller" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('armatura', 'Armatura Controller').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {(!activeSubcategory || activeSubcategory === 'Armatura Entrance Control') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Armatura Entrance Control</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Armatura's smart entrance control systems provide advanced security and visitor flow control. Meticulously designed for speed gates, turnstiles, and barriers, these systems deliver accurate pedestrian and vehicle control, robust durability, and seamless integration with the Armatura One platform.
                            </p>
                            <img src="/images/products/Armatura/Armatura.png" alt="Armatura Entrance Control" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {getFilteredProducts('armatura', 'Armatura Entrance Control').map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : cat.id === 'time-attendance' ? (
                      <div className="time-attendance-showcase">
                        {(!activeSubcategory || activeSubcategory === 'Visible Series') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Visible Light Series</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Astra Technologies offers the ZKTeco Visible Light Series, a Linux-based facial recognition attendance and access control solution with advanced features such as automatic face tracking, accurate palm verification, and two-factor authentication. Ideal for offices, schools, hospitals, warehouses, and factories, it delivers fast, secure, and reliable attendance and access management.
                            </p>
                            <img src="/images/products/Time Attendance/Visible Light series.png" alt="Visible Light Series" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {[
                                'MiniAC', 'MiniAC Plus', 'FaceDepot 7CL', 'ProBio Plus Series', 'SpeedFace - V5L', 'FaceDepot 7C', 'MiniTA', 'D3', 'SpeedFaceM4', 'Eface 10', 'FaceDepot-7BL', 'FaceDepot 8AL', 'FaceDepot 4A', 'SpeedFace H5L'
                              ].map((subName) => PRODUCTS.find(p => p.category === 'time-attendance' && (p.subCategory === subName || p.name === subName))).filter(Boolean).map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {(!activeSubcategory || activeSubcategory === 'Fingerprint Attendance') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Fingerprint Attendance</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem', maxWidth: '100%' }}>
                              As an authorized distributor of ZKTeco, Astra Technologies provides smart and innovative biometric attendance solutions to organizations across India. Powered by ZKTeco's globally trusted technology, used in more than 100 countries, we offer a comprehensive range of biometric attendance systems, including fingerprint attendance machines, facial recognition devices, RFID card-based systems, and multi-biometric solutions.
                            </p>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Our biometric attendance systems are user-friendly, easy to deploy, and supported by intelligent cloud-based technology for seamless workforce management. They accurately record employee check-in and check-out times, generate detailed attendance reports, and help organizations improve productivity, security, and operational efficiency. Whether for small businesses or large enterprises, Astra Technologies delivers reliable ZKTeco biometric solutions tailored to your attendance management needs.
                            </p>
                            <img src="/images/products/Time Attendance/Fingerprint Attendance.png" alt="Fingerprint Attendance" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {[
                                'K40 Pro', 'K45 Pro', 'IN01-A'
                              ].map((subName) => PRODUCTS.find(p => p.category === 'time-attendance' && (p.subCategory === subName || p.name === subName))).filter(Boolean).map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {(!activeSubcategory || activeSubcategory === 'Face Attendance') && (
                          <div className="time-attendance-block" style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem', fontFamily: 'var(--font-h)' }}>Face Attendance</h2>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1rem', maxWidth: '100%' }}>
                              As an authorized distributor of ZKTeco, Astra Technologies delivers industry-leading biometric attendance and access control solutions across India. Backed by ZKTeco's globally recognized technology, trusted in over 100 countries, we offer advanced facial recognition, fingerprint, RFID card, and multi-biometric attendance systems designed for accuracy, security, and ease of use.
                            </p>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '100%' }}>
                              Our intelligent, cloud-enabled biometric solutions simplify workforce attendance management by accurately recording employee check-in and check-out times while generating comprehensive attendance reports. With user-friendly deployment and reliable performance, Astra Technologies helps organizations streamline attendance tracking, improve operational efficiency, and enhance workplace security through innovative ZKTeco solutions.
                            </p>
                            <img src="/images/products/Time Attendance/Face Time Attendance.png" alt="Face Attendance" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                            
                            <div className="product-grid">
                              {[
                                'MB30', 'MB360'
                              ].map((subName) => PRODUCTS.find(p => p.category === 'time-attendance' && (p.subCategory === subName || p.name === subName))).filter(Boolean).map((p, idx) => (
                                <div key={idx} className={`product-card ${p.featured ? 'featured' : ''}`}>
                                  <div className="product-card-visual" onClick={() => setSelectedProduct(p)}>
                                    <img src={p.image} alt={p.name} className="product-card-img" />
                                  </div>
                                  <div className="product-card-name" onClick={() => setSelectedProduct(p)}>
                                    {p.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        <div className="cat-section-title">
                          <div>
                            <div className="cat-section-label">{cat.label}</div>
                            <div className="cat-section-desc">{cat.desc}</div>
                          </div>
                        </div>
                        
                        {cat.id === 'ajax' && (
                          <img src="/images/Home Page Slide/Ajax.png" alt="Ajax Systems" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '2rem' }} />
                        )}

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
                      </>
                    )}
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
          <div className="specs-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
            <button className="specs-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '1rem' }}>
              <div style={{ flex: '1 1 280px', maxWidth: '350px' }}>
                {(() => {
                  const productImages = PRODUCTS.filter(p => p.name === selectedProduct.name).map(p => p.image);
                  const currentImg = productImages[selectedImageIndex] || selectedProduct.image;
                  return (
                    <div className="specs-modal-visual" style={{ background: 'transparent', border: 'none', padding: '1rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: 'auto', flexShrink: 0, boxShadow: 'none' }}>
                      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: productImages.length > 1 ? '1rem' : '0', minHeight: '150px' }}>
                        <img src={currentImg} alt={selectedProduct.name} className="specs-modal-img" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain', filter: 'none' }} />
                      </div>
                      {productImages.length > 1 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', width: '100%', padding: '5px 0' }}>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(prev => Math.max(0, prev - 1)) }}
                            style={{ background: 'none', border: 'none', color: selectedImageIndex === 0 ? '#ccc' : '#888', cursor: selectedImageIndex === 0 ? 'default' : 'pointer', fontSize: '1.2rem', padding: '0 5px' }}
                            disabled={selectedImageIndex === 0}
                          >
                            ◀
                          </button>
                          <div style={{ display: 'flex', gap: '10px', flex: 1, overflowX: 'auto', justifyContent: 'center' }}>
                            {productImages.map((imgUrl, idx) => (
                              <img 
                                key={idx} 
                                src={imgUrl} 
                                alt={`${selectedProduct.name} view ${idx + 1}`} 
                                onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(idx) }}
                                style={{ 
                                  width: '45px', 
                                  height: '45px', 
                                  objectFit: 'contain', 
                                  cursor: 'pointer', 
                                  border: selectedImageIndex === idx ? '2px solid var(--primary)' : '2px solid transparent',
                                  borderRadius: '4px',
                                  background: 'transparent'
                                }} 
                              />
                            ))}
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(prev => Math.min(productImages.length - 1, prev + 1)) }}
                            style={{ background: 'none', border: 'none', color: selectedImageIndex === productImages.length - 1 ? '#ccc' : '#888', cursor: selectedImageIndex === productImages.length - 1 ? 'default' : 'pointer', fontSize: '1.2rem', padding: '0 5px' }}
                            disabled={selectedImageIndex === productImages.length - 1}
                          >
                            ▶
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column' }}>
                <div className="specs-modal-header" style={{ borderBottom: 'none', paddingBottom: '0', marginBottom: '1.5rem', display: 'block' }}>
                  <h2 style={{ fontSize: '2.2rem', marginBottom: '0.8rem' }}>{selectedProduct.name}</h2>
                  <div className="specs-modal-meta">
                    <span className="specs-modal-badge">{CATEGORIES.find(c => c.id === selectedProduct.category)?.label}</span>
                    {selectedProduct.badge && (
                      <span className={`specs-modal-status ${selectedProduct.badge}`}>
                        {selectedProduct.badge.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="specs-modal-body" style={{ padding: '0', border: 'none' }}>
                  <p className="specs-modal-desc" style={{ marginBottom: '2rem' }}>{selectedProduct.sub}</p>

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

                <div className="specs-modal-footer" style={{ marginTop: '2rem', justifyContent: 'flex-start', borderTop: 'none', paddingTop: '0' }}>
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
          </div>
        </div>
      )}


    </>
  );
}
