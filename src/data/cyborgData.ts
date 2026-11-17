import type { Capability, Specification, ResearchPaper } from '../types';

export const CAPABILITIES_DATA: Capability[] = [
  {
    id: 'actuation',
    number: '01',
    title: 'Micro-Hydraulic Biomechatronics',
    subtitle: 'High-torque kinetic finger & joint articulation',
    description:
      'Utilizes miniature micro-hydraulic titanium capillaries paired with brushless coreless servos. Generates up to 180 Nm burst torque at 0.42ms closed-loop response, matching organic human movement velocity with repeatable industrial durability.',
    image: '/assets/cybernetic-hand.jpg',
    imageCaption: 'FIG 2.01 — ARTICULATED TITANIUM PHALANX ARRAY WITH FORCE TRANSDUCERS',
    metrics: [
      { label: 'Closed-Loop Latency', value: '0.42 ms' },
      { label: 'Grip Burst Force', value: '180 Nm' },
      { label: 'Freedom Degrees', value: '16 Active DoF' },
    ],
    coordinates: { x: 50, y: 46 },
  },
  {
    id: 'neural',
    number: '02',
    title: 'High-Bandwidth Neural Telemetry',
    subtitle: 'Direct peripheral & myoelectric signal decoding',
    description:
      'Custom low-noise analog front-end with galvanic isolation for high-density surface EMG and targeted muscle reinnervation signals. Processes 64 differential neural channels with 24-bit resolution at 4 kHz sample rates to predict intent before physical motion occurs.',
    image: '/assets/technology-core.jpg',
    imageCaption: 'FIG 2.02 — CERVICAL NEURAL BUS HARNESS WITH GALVANIC ISOLATION',
    metrics: [
      { label: 'Telemetry Channels', value: '64 Diff. Nodes' },
      { label: 'Sampling Rate', value: '4,000 Hz' },
      { label: 'Noise Floor', value: '< 1.2 µV RMS' },
    ],
    coordinates: { x: 56, y: 32 },
  },
  {
    id: 'tactile',
    number: '03',
    title: 'Biomimetic Tactile Sensory Matrix',
    subtitle: 'Multi-modal force & slip feedback telemetry',
    description:
      'Flexible piezoresistive sensor skin embedded with micro-structured carbon elastomers. Measures shear force, normal pressure, and temperature at 120 points per phalanx, relaying haptic telemetry back to the central controller for autonomous slip prevention.',
    image: '/assets/cybernetic-hand.jpg',
    imageCaption: 'FIG 2.03 — SUB-DERMAL PIEZORESISTIVE TACTILE PRESSURE MESH',
    metrics: [
      { label: 'Pressure Sensitivity', value: '0.02 N' },
      { label: 'Spatial Resolution', value: '1.2 mm Pitch' },
      { label: 'Feedback Frequency', value: '1,000 Hz' },
    ],
    coordinates: { x: 42, y: 65 },
  },
  {
    id: 'structural',
    number: '04',
    title: 'Titanium-Carbon Kinetic Chassis',
    subtitle: 'Lightweight load-bearing skeletal framework',
    description:
      'Combines selective laser sintered (SLS) ASTM F136 titanium nodes with high-modulus prepreg carbon-fiber structural spars. Delivers high torsional rigidity while keeping overall limb assembly mass comparable to natural biological limb inertia.',
    image: '/assets/engineering-chassis.jpg',
    imageCaption: 'FIG 2.04 — SCAPULAR & CLAVICULAR TITANIUM CHASSIS FRAMEWORK',
    metrics: [
      { label: 'Total Arm Mass', value: '1.85 kg' },
      { label: 'Tensile Yield', value: '880 MPa' },
      { label: 'Peak Dynamic Load', value: '450 N Axial' },
    ],
    coordinates: { x: 48, y: 52 },
  },
];

export const SPECIFICATIONS_DATA: Specification[] = [
  {
    category: 'Structural Metallurgy',
    parameter: 'Cranio-Cervical & Limb Scaffolding',
    value: 'ASTM F136 Ti-6Al-4V ELI (Biocompatible Titanium)',
    standard: 'ASTM F136 / ISO 5832-3',
    status: 'COMPLIANT',
  },
  {
    category: 'Kinetic Articulation',
    parameter: 'Harmonic Drive Strain-Wave Gearing',
    value: 'Zero-Backlash Component Set with Absolute 19-bit Optical Encoders',
    standard: 'ISO 10218-1 Robotics',
    status: 'VERIFIED',
  },
  {
    category: 'Biosignal Interface',
    parameter: 'Galvanically Isolated Neural/EMG Telemetry',
    value: '64-Channel Differential Bio-Amplifier, 24-bit Low-Noise ADC',
    standard: 'IEC 60601-1 Medical EMC',
    status: 'BENCHMARKED',
  },
  {
    category: 'Spatial Perception',
    parameter: 'Solid-State LiDAR & Depth Array',
    value: 'Time-of-Flight Spatial Mapping, 120° FOV, 60 FPS Refresh',
    standard: 'ISO 13849 Safety-Related',
    status: 'VERIFIED',
  },
  {
    category: 'Power Management',
    parameter: 'Solid-State Secondary Cell Pack',
    value: '48V Li-Ion Polymer with Integrated BMS & Over-Current Clamp',
    standard: 'UN 38.3 Transportation Safe',
    status: 'COMPLIANT',
  },
  {
    category: 'Environmental Enclosure',
    parameter: 'Hermetic O-Ring & Micro-Bellows Sealing',
    value: 'Fluorosilicone Seals for Dust & Continuous Water Immersion',
    standard: 'IP68 Enclosure Rating',
    status: 'VERIFIED',
  },
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'paper-kinematics',
    code: 'TECH-NOTE // CC-2026-01',
    title: 'Kinematic Optimization of Multi-Axis Titanium Cervical Assemblies in Anthropomorphic Robotics',
    institution: 'Cybercore Robotics & Biomechatronics Lab // Zurich',
    year: '2026',
    type: 'Concept Technical Dossier',
    abstract:
      'An engineering demonstration evaluating parasitic compliance and angular velocity limits in 5-axis titanium cervical joints operating under dynamic asymmetric payload distributions.',
  },
  {
    id: 'paper-myo',
    code: 'TECH-NOTE // CC-2025-09',
    title: 'Low-Latency Myoelectric Pattern Recognition for Dexterous Anthropomorphic Manipulators',
    institution: 'Human Augmentation Systems Group // Tokyo',
    year: '2025',
    type: 'Engineering Concept Study',
    abstract:
      'Evaluation of deterministic signal classification on embedded ARM Cortex-M7 platforms, achieving intent-to-actuation delays under 8 milliseconds across 14 distinct grip topologies.',
  },
  {
    id: 'paper-haptic',
    code: 'TECH-NOTE // CC-2026-04',
    title: 'Closed-Loop Force Regulation via Piezoresistive Tactile Arrays for Fragile Object Grasping',
    institution: 'Advanced Manipulator Foundry // San Francisco',
    year: '2026',
    type: 'System Architecture Specification',
    abstract:
      'Design of an autonomous slip-prevention routine executing at 1 kHz directly on peripheral limb microcontrollers, preventing drop incidents without requiring supervisor host intervention.',
  },
];
