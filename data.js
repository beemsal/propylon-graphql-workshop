let users = [
  {
    id: '1',
    name: 'Senator Jane Smith',
    email: 'j.smith@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '2',
    name: 'Rep. John Doe',
    email: 'j.doe@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '3',
    name: 'Mary Johnson',
    email: 'mary.johnson@legislature.gov',
    role: 'STAFF'
  },
  {
    id: '4',
    name: 'Rep. Sarah Wilson',
    email: 's.wilson@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '5',
    name: 'Senator Mike Brown',
    email: 'm.brown@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '6',
    name: 'Rep. David Chen',
    email: 'd.chen@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '7',
    name: 'Senator Lisa Garcia',
    email: 'l.garcia@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '8',
    name: 'Rep. Robert Taylor',
    email: 'r.taylor@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '9',
    name: 'Senator Angela Davis',
    email: 'a.davis@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '10',
    name: 'Rep. Michael Lee',
    email: 'm.lee@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '11',
    name: 'Tom Wilson',
    email: 't.wilson@legislature.gov',
    role: 'STAFF'
  },
  {
    id: '12',
    name: 'Jennifer Rodriguez',
    email: 'j.rodriguez@legislature.gov',
    role: 'STAFF'
  },
  {
    id: '13',
    name: 'Alex Thompson',
    email: 'a.thompson@legislature.gov',
    role: 'CITIZEN'
  },
  {
    id: '14',
    name: 'Maria Gonzalez',
    email: 'm.gonzalez@example.com',
    role: 'CITIZEN'
  },
  {
    id: '15',
    name: 'James Anderson',
    email: 'j.anderson@example.com',
    role: 'CITIZEN'
  },
  {
    id: '16',
    name: 'Rep. Patricia White',
    email: 'p.white@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '17',
    name: 'Senator Kevin Miller',
    email: 'k.miller@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '18',
    name: 'Rep. Linda Johnson',
    email: 'l.johnson@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '19',
    name: 'Senator Mark Davis',
    email: 'm.davis@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '20',
    name: 'Rep. Susan Martinez',
    email: 's.martinez@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '21',
    name: 'Senator Paul Jackson',
    email: 'p.jackson@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '22',
    name: 'Rep. Karen Thompson',
    email: 'k.thompson@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '23',
    name: 'Senator Richard Moore',
    email: 'r.moore@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '24',
    name: 'Rep. Nancy Williams',
    email: 'n.williams@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '25',
    name: 'Senator Daniel Clark',
    email: 'd.clark@legislature.gov',
    role: 'LEGISLATOR'
  },
  {
    id: '26',
    name: 'Emily Foster',
    email: 'e.foster@legislature.gov',
    role: 'STAFF'
  },
  {
    id: '27',
    name: 'Ryan Cooper',
    email: 'r.cooper@legislature.gov',
    role: 'STAFF'
  },
  {
    id: '28',
    name: 'Michelle Scott',
    email: 'm.scott@example.com',
    role: 'CITIZEN'
  },
  {
    id: '29',
    name: 'Christopher Lopez',
    email: 'c.lopez@example.com',
    role: 'CITIZEN'
  },
  {
    id: '30',
    name: 'Amanda Roberts',
    email: 'a.roberts@example.com',
    role: 'CITIZEN'
  }
];

let measures = [
  {
    id: '1',
    title: 'Clean Energy Initiative Act',
    description: 'A comprehensive bill to promote renewable energy sources',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 1250,
    status: 'IN_COMMITTEE',
    introducedDate: '2024-01-15',
    lastActionDate: '2024-02-01'
  },
  {
    id: '2',
    title: 'Education Funding Reform',
    description: 'Reform of public school funding mechanisms',
    type: 'BILL',
    chamber: 'SENATE',
    number: 2060,
    status: 'INTRODUCED',
    introducedDate: '2024-02-10',
    lastActionDate: null
  },
  {
    id: '3',
    title: 'Healthcare Transparency Act',
    description: 'Requires hospitals to publish pricing information',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 875,
    status: 'PASSED_COMMITTEE',
    introducedDate: '2024-01-30',
    lastActionDate: '2024-02-15'
  },
  {
    id: '4',
    title: 'Infrastructure Investment Bill',
    description: 'Comprehensive infrastructure modernization program',
    type: 'BILL',
    chamber: 'SENATE',
    number: 3450,
    status: 'ON_FLOOR',
    introducedDate: '2024-01-08',
    lastActionDate: '2024-02-20'
  },
  {
    id: '5',
    title: 'Digital Privacy Protection Act',
    description: 'Enhanced consumer privacy rights for digital platforms',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 720,
    status: 'PASSED_HOUSE',
    introducedDate: '2023-12-15',
    lastActionDate: '2024-01-25'
  },
  {
    id: '6',
    title: 'Small Business Tax Relief',
    description: 'Tax incentives for small and medium enterprises',
    type: 'BILL',
    chamber: 'SENATE',
    number: 1890,
    status: 'PASSED_SENATE',
    introducedDate: '2023-11-20',
    lastActionDate: '2024-02-10'
  },
  {
    id: '7',
    title: 'Environmental Protection Enhancement',
    description: 'Strengthen environmental regulations and enforcement',
    type: 'RESOLUTION',
    chamber: 'HOUSE',
    number: 100,
    status: 'SIGNED',
    introducedDate: '2023-10-05',
    lastActionDate: '2024-01-15'
  },
  {
    id: '8',
    title: 'Transportation Safety Modernization',
    description: 'Update transportation safety standards and technology',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 2100,
    status: 'VETOED',
    introducedDate: '2023-09-12',
    lastActionDate: '2024-01-08'
  },
  {
    id: '9',
    title: 'Affordable Housing Initiative',
    description: 'Increase affordable housing development and assistance',
    type: 'RESOLUTION',
    chamber: 'SENATE',
    number: 45,
    status: 'FAILED',
    introducedDate: '2023-08-30',
    lastActionDate: '2023-12-20'
  },
  {
    id: '10',
    title: 'Cybersecurity Enhancement Act',
    description: 'Strengthen state cybersecurity infrastructure and protocols',
    type: 'BILL',
    chamber: 'SENATE',
    number: 4200,
    status: 'IN_COMMITTEE',
    introducedDate: '2024-03-01',
    lastActionDate: '2024-03-15'
  },
  {
    id: '11',
    title: 'Mental Health Support Initiative',
    description: 'Expand mental health services and crisis intervention programs',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 1575,
    status: 'PASSED_COMMITTEE',
    introducedDate: '2024-02-20',
    lastActionDate: '2024-03-05'
  },
  {
    id: '12',
    title: 'Agricultural Innovation Program',
    description: 'Support sustainable farming practices and technology adoption',
    type: 'BILL',
    chamber: 'SENATE',
    number: 3100,
    status: 'ON_FLOOR',
    introducedDate: '2024-01-22',
    lastActionDate: '2024-03-10'
  },
  {
    id: '13',
    title: 'Veterans Healthcare Access',
    description: 'Improve healthcare access for military veterans',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 950,
    status: 'PASSED_HOUSE',
    introducedDate: '2023-11-15',
    lastActionDate: '2024-02-28'
  },
  {
    id: '14',
    title: 'Renewable Energy Tax Incentives',
    description: 'Additional tax incentives for renewable energy adoption',
    type: 'BILL',
    chamber: 'SENATE',
    number: 2800,
    status: 'PASSED_SENATE',
    introducedDate: '2023-12-01',
    lastActionDate: '2024-03-12'
  },
  {
    id: '15',
    title: 'Climate Action Resolution',
    description: 'Commitment to state-level climate action initiatives',
    type: 'RESOLUTION',
    chamber: 'SENATE',
    number: 75,
    status: 'SIGNED',
    introducedDate: '2023-09-18',
    lastActionDate: '2024-02-05'
  },
  {
    id: '16',
    title: 'Public Transit Modernization',
    description: 'Modernize public transportation systems statewide',
    type: 'BILL',
    chamber: 'HOUSE',
    number: 3200,
    status: 'VETOED',
    introducedDate: '2023-08-14',
    lastActionDate: '2024-01-20'
  },
  {
    id: '17',
    title: 'Education Technology Initiative',
    description: 'Integrate advanced technology in public school curricula',
    type: 'RESOLUTION',
    chamber: 'HOUSE',
    number: 125,
    status: 'FAILED',
    introducedDate: '2023-07-25',
    lastActionDate: '2023-11-30'
  },
  {
    id: '18',
    title: 'Water Conservation Act',
    description: 'Comprehensive water conservation and management strategies',
    type: 'BILL',
    chamber: 'SENATE',
    number: 4750,
    status: 'INTRODUCED',
    introducedDate: '2024-03-18',
    lastActionDate: null
  }
];

let sponsors = [
  {
    id: '1',
    userId: '1',
    measureId: '1',
    isPrimary: true,
    dateSponsored: '2024-01-15'
  },
  {
    id: '2',
    userId: '2',
    measureId: '1',
    isPrimary: false,
    dateSponsored: '2024-01-20'
  },
  {
    id: '3',
    userId: '2',
    measureId: '2',
    isPrimary: true,
    dateSponsored: '2024-02-10'
  },
  {
    id: '4',
    userId: '4',
    measureId: '3',
    isPrimary: true,
    dateSponsored: '2024-01-30'
  },
  {
    id: '5',
    userId: '5',
    measureId: '3',
    isPrimary: false,
    dateSponsored: '2024-02-05'
  },
  {
    id: '6',
    userId: '6',
    measureId: '4',
    isPrimary: true,
    dateSponsored: '2024-01-08'
  },
  {
    id: '7',
    userId: '7',
    measureId: '4',
    isPrimary: false,
    dateSponsored: '2024-01-12'
  },
  {
    id: '8',
    userId: '8',
    measureId: '4',
    isPrimary: false,
    dateSponsored: '2024-01-15'
  },
  {
    id: '9',
    userId: '9',
    measureId: '5',
    isPrimary: true,
    dateSponsored: '2023-12-15'
  },
  {
    id: '10',
    userId: '10',
    measureId: '5',
    isPrimary: false,
    dateSponsored: '2023-12-20'
  },
  {
    id: '11',
    userId: '1',
    measureId: '6',
    isPrimary: true,
    dateSponsored: '2023-11-20'
  },
  {
    id: '12',
    userId: '7',
    measureId: '6',
    isPrimary: false,
    dateSponsored: '2023-11-25'
  },
  {
    id: '13',
    userId: '5',
    measureId: '7',
    isPrimary: true,
    dateSponsored: '2023-10-05'
  },
  {
    id: '14',
    userId: '9',
    measureId: '7',
    isPrimary: false,
    dateSponsored: '2023-10-10'
  },
  {
    id: '15',
    userId: '2',
    measureId: '8',
    isPrimary: true,
    dateSponsored: '2023-09-12'
  },
  {
    id: '16',
    userId: '16',
    measureId: '10',
    isPrimary: true,
    dateSponsored: '2024-03-01'
  },
  {
    id: '17',
    userId: '17',
    measureId: '10',
    isPrimary: false,
    dateSponsored: '2024-03-05'
  },
  {
    id: '18',
    userId: '18',
    measureId: '11',
    isPrimary: true,
    dateSponsored: '2024-02-20'
  },
  {
    id: '19',
    userId: '19',
    measureId: '11',
    isPrimary: false,
    dateSponsored: '2024-02-25'
  },
  {
    id: '20',
    userId: '20',
    measureId: '12',
    isPrimary: true,
    dateSponsored: '2024-01-22'
  },
  {
    id: '21',
    userId: '21',
    measureId: '12',
    isPrimary: false,
    dateSponsored: '2024-01-28'
  },
  {
    id: '22',
    userId: '22',
    measureId: '13',
    isPrimary: true,
    dateSponsored: '2023-11-15'
  },
  {
    id: '23',
    userId: '23',
    measureId: '14',
    isPrimary: true,
    dateSponsored: '2023-12-01'
  },
  {
    id: '24',
    userId: '24',
    measureId: '15',
    isPrimary: true,
    dateSponsored: '2023-09-18'
  },
  {
    id: '25',
    userId: '25',
    measureId: '16',
    isPrimary: true,
    dateSponsored: '2023-08-14'
  },
  {
    id: '26',
    userId: '16',
    measureId: '17',
    isPrimary: true,
    dateSponsored: '2023-07-25'
  },
  {
    id: '27',
    userId: '17',
    measureId: '18',
    isPrimary: true,
    dateSponsored: '2024-03-18'
  },
  {
    id: '28',
    userId: '18',
    measureId: '13',
    isPrimary: false,
    dateSponsored: '2023-11-20'
  },
  {
    id: '29',
    userId: '19',
    measureId: '14',
    isPrimary: false,
    dateSponsored: '2023-12-05'
  },
  {
    id: '30',
    userId: '20',
    measureId: '15',
    isPrimary: false,
    dateSponsored: '2023-09-22'
  }
];

let amendments = [
  {
    id: '1',
    title: 'Solar Panel Tax Credit Amendment',
    description: 'Add tax credits for residential solar installations',
    measureId: '1',
    proposedById: '2',
    proposedDate: '2024-01-25',
    status: 'PROPOSED',
    content: 'Section 3.1: Residential solar panel installations shall receive a 30% tax credit...'
  },
  {
    id: '2',
    title: 'Wind Energy Incentive Amendment',
    description: 'Provide additional incentives for wind energy projects',
    measureId: '1',
    proposedById: '4',
    proposedDate: '2024-02-02',
    status: 'ACCEPTED',
    content: 'Section 4.1: Wind energy projects exceeding 100MW capacity shall receive accelerated depreciation...'
  },
  {
    id: '3',
    title: 'Rural School Funding Amendment',
    description: 'Additional funding provisions for rural school districts',
    measureId: '2',
    proposedById: '6',
    proposedDate: '2024-02-12',
    status: 'PROPOSED',
    content: 'Section 2.3: Rural school districts with fewer than 500 students shall receive supplemental funding...'
  },
  {
    id: '4',
    title: 'Emergency Medical Services Amendment',
    description: 'Include pricing transparency for emergency services',
    measureId: '3',
    proposedById: '8',
    proposedDate: '2024-02-08',
    status: 'ACCEPTED',
    content: 'Section 5.1: Emergency medical services must provide estimated costs within 24 hours...'
  },
  {
    id: '5',
    title: 'Bridge Repair Priority Amendment',
    description: 'Prioritize critical bridge repairs in infrastructure spending',
    measureId: '4',
    proposedById: '10',
    proposedDate: '2024-01-18',
    status: 'REJECTED',
    content: 'Section 3.2: Bridge repairs rated critical or worse shall receive priority funding allocation...'
  },
  {
    id: '6',
    title: 'Data Breach Notification Amendment',
    description: 'Stricter requirements for data breach notifications',
    measureId: '5',
    proposedById: '1',
    proposedDate: '2024-01-05',
    status: 'WITHDRAWN',
    content: 'Section 4.5: Companies must notify affected users within 24 hours of discovering a breach...'
  },
  {
    id: '7',
    title: 'Cybersecurity Training Amendment',
    description: 'Mandatory cybersecurity training for all state employees',
    measureId: '10',
    proposedById: '17',
    proposedDate: '2024-03-08',
    status: 'PROPOSED',
    content: 'Section 2.1: All state employees must complete annual cybersecurity training...'
  },
  {
    id: '8',
    title: 'Crisis Hotline Funding Amendment',
    description: '24/7 mental health crisis hotline funding',
    measureId: '11',
    proposedById: '19',
    proposedDate: '2024-02-28',
    status: 'ACCEPTED',
    content: 'Section 3.2: Establish funding for 24/7 statewide mental health crisis hotline...'
  },
  {
    id: '9',
    title: 'Organic Farming Incentives Amendment',
    description: 'Additional incentives for organic farming practices',
    measureId: '12',
    proposedById: '21',
    proposedDate: '2024-02-15',
    status: 'PROPOSED',
    content: 'Section 4.3: Organic farming operations shall receive additional tax incentives...'
  },
  {
    id: '10',
    title: 'Telehealth Services Amendment',
    description: 'Expand telehealth services for veterans in rural areas',
    measureId: '13',
    proposedById: '22',
    proposedDate: '2024-01-10',
    status: 'ACCEPTED',
    content: 'Section 5.1: Veterans in rural areas shall have access to telehealth services...'
  },
  {
    id: '11',
    title: 'Energy Storage Incentives Amendment',
    description: 'Tax incentives for energy storage systems',
    measureId: '14',
    proposedById: '23',
    proposedDate: '2024-01-20',
    status: 'REJECTED',
    content: 'Section 6.1: Energy storage systems shall qualify for accelerated depreciation...'
  },
  {
    id: '12',
    title: 'Carbon Offset Programs Amendment',
    description: 'State-sponsored carbon offset programs',
    measureId: '15',
    proposedById: '24',
    proposedDate: '2023-10-12',
    status: 'WITHDRAWN',
    content: 'Section 3.4: Establish state-sponsored carbon offset programs for businesses...'
  }
];

let measureSections = [
  {
    id: '1',
    measureId: '1',
    sectionNumber: 1,
    title: 'Purpose and Intent',
    content: 'The purpose of this act is to establish a comprehensive framework for clean energy development...',
    order: 1
  },
  {
    id: '2',
    measureId: '1',
    sectionNumber: 2,
    title: 'Definitions',
    content: 'For the purposes of this act, the following definitions apply...',
    order: 2
  },
  {
    id: '3',
    measureId: '2',
    sectionNumber: 1,
    title: 'Funding Formula',
    content: 'Public school funding shall be calculated based on student enrollment and district needs...',
    order: 1
  },
  {
    id: '4',
    measureId: '2',
    sectionNumber: 2,
    title: 'Distribution Mechanism',
    content: 'Funds shall be distributed to districts quarterly based on verified enrollment data...',
    order: 2
  },
  {
    id: '5',
    measureId: '3',
    sectionNumber: 1,
    title: 'Pricing Disclosure Requirements',
    content: 'All healthcare facilities must publish standard pricing for common procedures...',
    order: 1
  },
  {
    id: '6',
    measureId: '1',
    sectionNumber: 3,
    title: 'Renewable Energy Standards',
    content: 'Utilities must source at least 40% of electricity from renewable sources by 2030...',
    order: 3
  },
  {
    id: '7',
    measureId: '1',
    sectionNumber: 4,
    title: 'Implementation Timeline',
    content: 'This act shall take effect January 1, 2025, with phased implementation over 5 years...',
    order: 4
  },
  {
    id: '8',
    measureId: '2',
    sectionNumber: 3,
    title: 'Performance Metrics',
    content: 'School districts must report standardized test scores and graduation rates annually...',
    order: 3
  },
  {
    id: '9',
    measureId: '3',
    sectionNumber: 2,
    title: 'Enforcement Mechanisms',
    content: 'The Department of Health shall establish penalties for non-compliance...',
    order: 2
  },
  {
    id: '10',
    measureId: '4',
    sectionNumber: 1,
    title: 'Infrastructure Assessment',
    content: 'A comprehensive assessment of state infrastructure shall be conducted...',
    order: 1
  },
  {
    id: '11',
    measureId: '4',
    sectionNumber: 2,
    title: 'Funding Sources',
    content: 'Infrastructure improvements shall be funded through bonds and federal matching...',
    order: 2
  },
  {
    id: '12',
    measureId: '5',
    sectionNumber: 1,
    title: 'Consumer Rights',
    content: 'Digital platform users have the right to access, modify, and delete personal data...',
    order: 1
  },
  {
    id: '13',
    measureId: '5',
    sectionNumber: 2,
    title: 'Platform Obligations',
    content: 'Digital platforms must implement privacy by design principles...',
    order: 2
  },
  {
    id: '14',
    measureId: '6',
    sectionNumber: 1,
    title: 'Tax Credit Structure',
    content: 'Small businesses with revenue under $2M qualify for enhanced tax credits...',
    order: 1
  },
  {
    id: '15',
    measureId: '7',
    sectionNumber: 1,
    title: 'Emission Standards',
    content: 'New emission standards for industrial facilities take effect in 2025...',
    order: 1
  },
  {
    id: '16',
    measureId: '10',
    sectionNumber: 1,
    title: 'Cybersecurity Framework',
    content: 'Establish comprehensive cybersecurity framework for state agencies...',
    order: 1
  },
  {
    id: '17',
    measureId: '10',
    sectionNumber: 2,
    title: 'Implementation Timeline',
    content: 'Cybersecurity measures must be implemented within 18 months...',
    order: 2
  },
  {
    id: '18',
    measureId: '11',
    sectionNumber: 1,
    title: 'Service Expansion',
    content: 'Mental health services shall be expanded to underserved communities...',
    order: 1
  },
  {
    id: '19',
    measureId: '11',
    sectionNumber: 2,
    title: 'Funding Allocation',
    content: 'Annual funding of $50 million shall be allocated for mental health programs...',
    order: 2
  },
  {
    id: '20',
    measureId: '12',
    sectionNumber: 1,
    title: 'Technology Grants',
    content: 'Grants up to $100,000 shall be available for agricultural technology adoption...',
    order: 1
  },
  {
    id: '21',
    measureId: '13',
    sectionNumber: 1,
    title: 'Healthcare Access',
    content: 'Veterans shall have priority access to state healthcare facilities...',
    order: 1
  },
  {
    id: '22',
    measureId: '13',
    sectionNumber: 2,
    title: 'Transportation Services',
    content: 'Transportation services to medical appointments shall be provided...',
    order: 2
  },
  {
    id: '23',
    measureId: '14',
    sectionNumber: 1,
    title: 'Tax Credit Structure',
    content: 'Renewable energy tax credits shall be increased by 15%...',
    order: 1
  },
  {
    id: '24',
    measureId: '15',
    sectionNumber: 1,
    title: 'Climate Goals',
    content: 'State commits to 50% carbon reduction by 2035...',
    order: 1
  },
  {
    id: '25',
    measureId: '16',
    sectionNumber: 1,
    title: 'Transit Investment',
    content: '$2 billion investment in public transit infrastructure over 10 years...',
    order: 1
  },
  {
    id: '26',
    measureId: '17',
    sectionNumber: 1,
    title: 'Technology Standards',
    content: 'All schools must meet minimum technology standards by 2026...',
    order: 1
  },
  {
    id: '27',
    measureId: '18',
    sectionNumber: 1,
    title: 'Water Usage Limits',
    content: 'Mandatory water usage limits for commercial and industrial users...',
    order: 1
  },
  {
    id: '28',
    measureId: '18',
    sectionNumber: 2,
    title: 'Conservation Incentives',
    content: 'Financial incentives for water conservation technologies...',
    order: 2
  },
  {
    id: '29',
    measureId: '16',
    sectionNumber: 2,
    title: 'Environmental Impact',
    content: 'All transit projects must meet environmental sustainability standards...',
    order: 2
  },
  {
    id: '30',
    measureId: '12',
    sectionNumber: 2,
    title: 'Training Programs',
    content: 'Establish training programs for sustainable farming techniques...',
    order: 2
  }
];

module.exports = {
  users,
  measures,
  sponsors,
  amendments,
  measureSections
};