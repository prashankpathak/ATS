/**
 * ATS (Ashima Transport Service) Data Module
 * Premium Logistics & Fleet Engineering Architecture
 * Verified Credentials from Official Visiting Card & Operations Depot at Katni, MP.
 */

export interface ContactInfo {
  company: string;
  shortName: string;
  proprietor: string;
  tagline: string;
  phones: { number: string; formatted: string; isPrimary?: boolean }[];
  emails: string[];
  address: {
    line1: string;
    road: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    landmark: string;
    googleMapsSearchQuery: string;
  };
  hubLocation: {
    title: string;
    latitude: number;
    longitude: number;
    strategicAdvantage: string;
  };
}

export const ATS_CONTACT: ContactInfo = {
  company: "ATS (Ashima transport service)",
  shortName: "ATS Transport",
  proprietor: "Ashima Pathak",
  tagline: "YOUR TRUSTED TRANSPORT PARTNER",
  phones: [
    { number: "9009949723", formatted: "+91 90099 49723", isPrimary: true },
    { number: "9893563998", formatted: "+91 98935 63998" },
    { number: "6263364561", formatted: "+91 62633 64561" },
  ],
  emails: ["Ashimapathak36@gmail.com", "prashankpathak@gmail.com"],
  address: {
    line1: "Kailwara Kala",
    road: "Maihar Road",
    city: "Katni",
    district: "Katni",
    state: "Madhya Pradesh",
    pincode: "483501",
    landmark: "Central Crossroads of India, Maihar Highway Corridor",
    googleMapsSearchQuery: "Kailwara+Kala+Maihar+Road+Katni+483501+Madhya+Pradesh",
  },
  hubLocation: {
    title: "Katni Central Logistics Junction (Madhya Pradesh)",
    latitude: 23.8343,
    longitude: 80.3995,
    strategicAdvantage:
      "Katni is the geographical nerve center of India. Situated at the junction of NH-30 and NH-43 with rapid link to the North-South Corridor (NH-44), it guarantees 18-36 hour delivery access to all four corners of the nation.",
  },
};

export interface RouteHub {
  id: string;
  name: string;
  region: string;
  state: string;
  distanceKm: number;
  transitHours: number;
  transitDays: string;
  majorHighway: string;
  keyCommodities: string[];
  svgCoords: { x: number; y: number };
  highlightTag: string;
}

export const KATNI_COORDS = { x: 490, y: 475 };

export const ROUTE_HUBS: RouteHub[] = [
  {
    id: "delhi",
    name: "Delhi NCR / Haryana Belt",
    region: "North",
    state: "Delhi / Haryana",
    distanceKm: 785,
    transitHours: 18,
    transitDays: "18-20 Hours",
    majorHighway: "NH-30 / NH-44 Expressway",
    keyCommodities: ["Industrial Goods", "E-commerce FTL", "Hardware & Machinery", "Consumer Durables"],
    svgCoords: { x: 380, y: 260 },
    highlightTag: "Northern Industrial Capital",
  },
  {
    id: "mumbai",
    name: "Mumbai / JNPT Port Gateway",
    region: "West",
    state: "Maharashtra",
    distanceKm: 985,
    transitHours: 22,
    transitDays: "22-24 Hours",
    majorHighway: "NH-30 / Samruddhi Corridor",
    keyCommodities: ["EXIM Containers", "Petrochemicals", "Import/Export Cargo", "Industrial Raw Materials"],
    svgCoords: { x: 260, y: 620 },
    highlightTag: "Premier Western Maritime Port",
  },
  {
    id: "kolkata",
    name: "Kolkata / Haldia Port Terminal",
    region: "East",
    state: "West Bengal",
    distanceKm: 890,
    transitHours: 20,
    transitDays: "20-22 Hours",
    majorHighway: "NH-43 / NH-19 (Grand Trunk)",
    keyCommodities: ["Heavy Engineering", "Iron & Steel Coils", "Tea & Agro Bulk", "Maritime Freight"],
    svgCoords: { x: 740, y: 490 },
    highlightTag: "Eastern Heavy Industrial Gateway",
  },
  {
    id: "chennai",
    name: "Chennai Automotive & Port Belt",
    region: "South",
    state: "Tamil Nadu",
    distanceKm: 1420,
    transitHours: 32,
    transitDays: "32-36 Hours",
    majorHighway: "NH-44 / NH-16 (East Coast)",
    keyCommodities: ["Automotive Components", "Heavy Machinery", "Electronics", "Port Exports"],
    svgCoords: { x: 480, y: 880 },
    highlightTag: "Southern Manufacturing & Port Hub",
  },
  {
    id: "bengaluru",
    name: "Bengaluru Tech & Industrial Hub",
    region: "South",
    state: "Karnataka",
    distanceKm: 1380,
    transitHours: 30,
    transitDays: "30-34 Hours",
    majorHighway: "NH-44 (Direct North-South Spine)",
    keyCommodities: ["High-Tech Freight", "Aerospace Assemblies", "E-Commerce Fulfilment", "Precision Cargo"],
    svgCoords: { x: 410, y: 850 },
    highlightTag: "Southern High-Tech Expressway",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad / Mundra Port",
    region: "West",
    state: "Gujarat",
    distanceKm: 940,
    transitHours: 21,
    transitDays: "21-23 Hours",
    majorHighway: "NH-47 / Western Freight Axis",
    keyCommodities: ["Chemicals & Dyes", "Ceramics & Glazed Tiles", "Pharma Raw Stock", "EXIM Containers"],
    svgCoords: { x: 230, y: 460 },
    highlightTag: "Gujarat Manufacturing & Port Corridor",
  },
  {
    id: "guwahati",
    name: "Guwahati / North-East Arterial",
    region: "North-East",
    state: "Assam",
    distanceKm: 1210,
    transitHours: 28,
    transitDays: "28-32 Hours",
    majorHighway: "NH-27 (East-West Highway)",
    keyCommodities: ["FMCG Supplies", "Infrastructure Steel & Cement", "Consumer Goods FTL"],
    svgCoords: { x: 890, y: 350 },
    highlightTag: "Gateway to the 7 Sister States",
  },
  {
    id: "hyderabad",
    name: "Hyderabad Industrial SEZ",
    region: "South",
    state: "Telangana",
    distanceKm: 790,
    transitHours: 18,
    transitDays: "18-20 Hours",
    majorHighway: "NH-44 Expressway",
    keyCommodities: ["Bulk Pharmaceuticals", "Fabricated Steel", "FMCG Distribution"],
    svgCoords: { x: 440, y: 680 },
    highlightTag: "Deccan Crossroads & Pharma Hub",
  },
  {
    id: "raipur",
    name: "Raipur & Bhilai Steel Basin",
    region: "Central",
    state: "Chhattisgarh",
    distanceKm: 310,
    transitHours: 7,
    transitDays: "7-8 Hours",
    majorHighway: "NH-30 Direct Express",
    keyCommodities: ["Sponge Iron & Billets", "Coal & Mineral Ores", "Heavy Structural Steel"],
    svgCoords: { x: 570, y: 530 },
    highlightTag: "Mineral & Steel Heartland Corridor",
  },
  {
    id: "nagpur",
    name: "Nagpur MIHAN Logistics Nexus",
    region: "Central",
    state: "Maharashtra",
    distanceKm: 345,
    transitHours: 8,
    transitDays: "8-9 Hours",
    majorHighway: "NH-44 / NH-347",
    keyCommodities: ["Central Warehousing Stock", "Heavy Plant Spares", "National Transshipment"],
    svgCoords: { x: 440, y: 550 },
    highlightTag: "Zero-Mile Central Logistics Hub",
  },
];

export interface FleetEngineeringSpec {
  id: string;
  modelCode: string;
  title: string;
  category: string;
  grossVehicleWeight: string;
  netPayloadCapacity: string;
  wheelConfiguration: string;
  deckDimensions: string;
  engineSpecs: string;
  suspensionAndChassis: string;
  weatherproofingSystem: string;
  bestSuitedFor: string;
  keyTechnicalFeatures: string[];
}

export const FLEET_ENGINEERING_SPECS: FleetEngineeringSpec[] = [
  {
    id: "tata-14w-heavy",
    modelCode: "ATS-TATA-3718-14W",
    title: "Tata Heavy Multi-Axle 14-Wheeler Hauler",
    category: "Heavy-Duty Multi-Axle Carrier",
    grossVehicleWeight: "35,000 KG (35 Metric Tons)",
    netPayloadCapacity: "26 - 28 Metric Tons",
    wheelConfiguration: "14 Wheeler (Tandem Dual Rear + Air Lift Axle)",
    deckDimensions: "28 - 32 Feet High-Side Rigid Deck",
    engineSpecs: "Cummins 6-Cylinder Heavy Diesel · 180 HP · High-Torque",
    suspensionAndChassis: "Heavy Reinforced Ladder-Type Steel Chassis with Semi-Elliptical Leaf Springs",
    weatherproofingSystem: "High-Tensile Reinforced 3-Layer Tarpaulin System with Lashings",
    bestSuitedFor: "Bulk cement, steel coils, TMT rebars, heavy plant machinery, minerals, and interstate high-tonnage FTL.",
    keyTechnicalFeatures: [
      "All India National Goods Permit (NL) with multi-state clearance",
      "Pneumatically controlled lift axle for optimal tire efficiency and fuel conservation",
      "Heavy-duty load balancing axles preventing cargo shift on mountainous gradients",
      "Real-time GPS tracking and 24/7 en-route driver communication",
    ],
  },
  {
    id: "tata-12w-interstate",
    modelCode: "ATS-TATA-2818-12W",
    title: "Tata Long-Haul 12-Wheeler Interstate Carrier",
    category: "Long-Distance Rigid Freight Carrier",
    grossVehicleWeight: "28,000 KG (28 Metric Tons)",
    netPayloadCapacity: "20 - 22 Metric Tons",
    wheelConfiguration: "12 Wheeler (Twin Steering + Dual Drive Axles)",
    deckDimensions: "24 - 28 Feet Rugged Steel Cargo Deck",
    engineSpecs: "Tata Turbotronn Heavy Commercial Engine · 180 HP",
    suspensionAndChassis: "Heavy-Gauge Rolled Steel Side Members with Heavy Bumper Reinforcement",
    weatherproofingSystem: "Custom High-Sided Tarpaulin Rigging with All-Weather Seals",
    bestSuitedFor: "Iron ore, bauxite, clinker, marble slabs, ceramic tiles, and industrial building materials.",
    keyTechnicalFeatures: [
      "Optimized for high-cycle factory dispatches from Katni and Maihar industrial belts",
      "Direct highway routing without midway transshipment delays",
      "High ground clearance engineered for rough mining and factory yards",
      "Comprehensive commercial transit insurance and computerized consignment bilty",
    ],
  },
  {
    id: "express-container-32ft",
    modelCode: "ATS-BOX-32FT-HQ",
    title: "32-Foot Multi-Axle Sealed Express Container",
    category: "High-Security Containerized Transport",
    grossVehicleWeight: "24,000 KG (24 Metric Tons)",
    netPayloadCapacity: "15 - 18 Metric Tons / 2,000+ Cu.Ft.",
    wheelConfiguration: "10 / 12 Wheeler Heavy Container Chassis",
    deckDimensions: "32 Ft × 8.5 Ft × 9.5 Ft High-Cube Sealed Box",
    engineSpecs: "Tata High-Speed Long-Haul Power Unit · 200 HP",
    suspensionAndChassis: "Air-Suspension Fitted Chassis for Anti-Shock High-Value Freight",
    weatherproofingSystem: "100% Watertight Welded Corrugated Steel with Industrial Bolt Seals",
    bestSuitedFor: "Consumer electronics, FMCG products, pharmaceuticals, packaged food, export goods, and e-commerce express.",
    keyTechnicalFeatures: [
      "One-time numbered security bolt seals for tamper-proof transit verification",
      "Complete dust, moisture, and extreme temperature cargo protection",
      "Fast-track FASTag expressway clearance on Golden Quadrilateral corridors",
      "Zero-damage guarantee suitable for sensitive and high-value consignments",
    ],
  },
  {
    id: "heavy-odc-trailer",
    modelCode: "ATS-ODC-HYDRAULIC",
    title: "Heavy Low-Bed / Hydraulic Multi-Axle Trailer",
    category: "Specialized Over-Dimensional Cargo (ODC)",
    grossVehicleWeight: "45,000 - 65,000 KG",
    netPayloadCapacity: "35 - 50 Metric Tons",
    wheelConfiguration: "Multi-Axle Modular Low-Bed Platform (18 to 26 Wheels)",
    deckDimensions: "Custom Extendable Low-Bed with Ground Clearance Optimization",
    engineSpecs: "High-Output Prime Mover · 300+ HP High-Torque Puller",
    suspensionAndChassis: "Multi-Row Hydraulic Suspension with Compensating Axles",
    weatherproofingSystem: "Industrial Heavy Machinery Tie-Downs with Certified Webbing Straps",
    bestSuitedFor: "Heavy excavators, power transformers, industrial turbines, pre-cast concrete beams, and refinery equipment.",
    keyTechnicalFeatures: [
      "Low center of gravity engineered for ultra-heavy and out-of-gauge equipment",
      "Complete statutory route surveys and specialized highway transit permissions",
      "Escort vehicle coordination and certified pilot driver teams",
      "Direct plant-to-project-site delivery anywhere in India",
    ],
  },
  {
    id: "multimodal-exim",
    modelCode: "ATS-MULTIMODAL-EXIM",
    title: "Multimodal Road-Rail-Port Freight Integration",
    category: "Comprehensive National Supply Chain Logistics",
    grossVehicleWeight: "Scalable Heavy Volume Capacity",
    netPayloadCapacity: "Unlimited Enterprise Metric Tonnage",
    wheelConfiguration: "Integrated Port Trailers + Katni Rail Division Wagons",
    deckDimensions: "ISO 20ft / 40ft Container Standard & Breakbulk Rakes",
    engineSpecs: "Multi-Modal Intermodal Platform Coordination",
    suspensionAndChassis: "Certified Intermodal Transfer Infrastructure",
    weatherproofingSystem: "ISO Marine Grade Containers & Covered Railhead Loading",
    bestSuitedFor: "Port import/export cargo (JNPT, Haldia, Mundra, Chennai) synchronized with Katni central rail junction.",
    keyTechnicalFeatures: [
      "Direct transshipment interface with Katni major railway division goods sheds",
      "Continuous customs bonded container transport from maritime docks to central India",
      "Dedicated account managers for institutional and industrial corporate agreements",
      "Unified bill of lading and end-to-end electronic consignment dispatching",
    ],
  },
];

export interface OriginDestinationOption {
  city: string;
  state: string;
  kmFromKatni: number;
}

export const COMMONLY_BOOKED_CITIES: OriginDestinationOption[] = [
  { city: "Katni (Hub HQ)", state: "Madhya Pradesh", kmFromKatni: 0 },
  { city: "Delhi NCR", state: "Delhi", kmFromKatni: 785 },
  { city: "Mumbai / JNPT", state: "Maharashtra", kmFromKatni: 985 },
  { city: "Kolkata / Dankuni", state: "West Bengal", kmFromKatni: 890 },
  { city: "Chennai", state: "Tamil Nadu", kmFromKatni: 1420 },
  { city: "Bengaluru", state: "Karnataka", kmFromKatni: 1380 },
  { city: "Ahmedabad / Mundra", state: "Gujarat", kmFromKatni: 940 },
  { city: "Guwahati", state: "Assam", kmFromKatni: 1210 },
  { city: "Hyderabad", state: "Telangana", kmFromKatni: 790 },
  { city: "Raipur", state: "Chhattisgarh", kmFromKatni: 310 },
  { city: "Nagpur", state: "Maharashtra", kmFromKatni: 345 },
  { city: "Jabalpur", state: "Madhya Pradesh", kmFromKatni: 90 },
  { city: "Satna / Maihar", state: "Madhya Pradesh", kmFromKatni: 75 },
  { city: "Kanpur", state: "Uttar Pradesh", kmFromKatni: 420 },
  { city: "Indore", state: "Madhya Pradesh", kmFromKatni: 510 },
  { city: "Jaipur", state: "Rajasthan", kmFromKatni: 740 },
  { city: "Patna", state: "Bihar", kmFromKatni: 630 },
  { city: "Bhubaneswar", state: "Odisha", kmFromKatni: 720 },
  { city: "Pune", state: "Maharashtra", kmFromKatni: 1040 },
  { city: "Surat", state: "Gujarat", kmFromKatni: 890 },
  { city: "Ludhiana", state: "Punjab", kmFromKatni: 1080 },
];

export const TRUCK_TYPES = [
  { id: "10w-16t", label: "10-Wheeler Multi-Axle (16 - 20 MT)", baseRatePerKm: 65, minFare: 16000 },
  { id: "12w-24t", label: "12-Wheeler Heavy Carrier (21 - 25 MT)", baseRatePerKm: 78, minFare: 20000 },
  { id: "14w-30t", label: "14-Wheeler High-Deck Hauler (26 - 32 MT)", baseRatePerKm: 92, minFare: 25000 },
  { id: "container-20t", label: "32-Ft High-Cube Container (16 - 22 MT)", baseRatePerKm: 85, minFare: 22000 },
  { id: "odc-trailer", label: "Low-Bed / Multi-Axle Trailer (ODC Cargo)", baseRatePerKm: 135, minFare: 36000 },
];

export const CARGO_TYPES = [
  "Cement, Clinker & Slag Bulk",
  "TMT Rebars, Iron & Steel Coils",
  "Bauxite, Coal & Industrial Minerals",
  "Vitrified Tiles, Marble & Stone Slabs",
  "Heavy Plant Machinery & Spares",
  "EXIM Maritime Shipping Containers",
  "FMCG, Food Grains & Agro Produce",
  "Industrial Fertilizers & Chemicals",
  "Automotive & Engineering Components",
  "General Full Truck Load (FTL) Consignments",
];

export const PRODUCTION_AI_STUDIO_PROMPT = `
# Dedicated AI Studio Prompt: ATS (Ashima Transport Service) Pan-India Logistics Engine

**System Instructions & Enterprise Identity**:
You are the operations dispatcher and digital freight architect for **ATS (Ashima transport service)**, an enterprise-grade heavy haulage and multi-axle freight carrier headquartered at India's central crossroads in Katni, Madhya Pradesh.

**Verified Credentials**:
- **Enterprise**: ATS (Ashima transport service)
- **Tagline**: YOUR TRUSTED TRANSPORT PARTNER
- **Proprietor / Incharge**: Ashima Pathak
- **Dispatch Direct Lines**: +91 9009949723, +91 9893563998, +91 6263364561
- **Official Inquiries**: Ashimapathak36@gmail.com, prashankpathak@gmail.com
- **Central Operations Hub**: Kailwara Kala, Maihar Road, Katni - 483501 (Madhya Pradesh)
- **Strategic Geographic Position**: Situated at the heart of the NH-30 and NH-43 network, granting rapid 18 to 36-hour reach across Northern, Southern, Eastern, and Western commercial zones.

**Operational Capabilities**:
- **Fleet**: Tata 14-Wheeler Heavy Multi-Axle Haulers (35 MT GVW), Tata 12-Wheeler Interstate Carriers (28 MT GVW), 32-Ft Sealed High-Cube Containers, Heavy ODC Low-Bed Trailers.
- **Coverage**: All 28 Indian States & Union Territories with National Goods Permit (NL).
- **Consignments**: Cement, steel coils, tiles, minerals, heavy industrial machinery, and EXIM port containers.
`.trim();
