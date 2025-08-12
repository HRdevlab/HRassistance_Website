
import React from 'react';
import type { NavLink, Service, Testimonial, Job, TrainingTopic, TimelineEvent, TeamMember, CoreValue, HeroSlide, IndustrySegment, ClientLogo, Industry, HiringProcessStep, Stat } from './types';

const iconClass = "w-10 h-10";
const valueIconClass = "w-12 h-12";
const industryIconClass = "w-10 h-10";
const statIconClass = "w-12 h-12";


export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    subLinks: [
      { name: 'Permanent Recruitment', path: '/services' },
      { name: 'Training', path: '/training' },
      { name: 'Outplacement Services', path: '/services' },
      { name: 'Resume Building', path: '/training' }
    ]
  },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const HERO_SLIDES: HeroSlide[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
        headline: "We help organizations find the Right people they need at all levels.",
        subheadline: "Expert HR solutions tailored for every business need in India."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        headline: "Connecting the Right People to the Right Opportunities",
        subheadline: "We bridge the gap between talent and ambition with precision and care."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
        headline: "Your Strategic Partner in Human Resources",
        subheadline: "From startups to enterprises, we build and sustain thriving workforces."
    }
];

export const CORE_VALUES: CoreValue[] = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={valueIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, title: 'Client-Centric Approach' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={valueIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: 'Client Confidentiality' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={valueIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>, title: 'Professional Integrity' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={valueIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 21.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>, title: 'Commitment to Excellence' },
];

export const SERVICES: Service[] = [
  { 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>, 
    title: 'Database Selection', 
    description: 'We boast of having our own database of candidates, with focus on Middle and Senior level Positions.',
    details: 'Having worked in the industry for more than a decade now, our database compliments our efforts in addition to sourcing from other mediums.'
  },
  { 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" /></svg>,
    title: 'Advertised Search', 
    description: 'Specific advertised recruitment for a need of bulk hiring in a short time period.',
    details: 'Backend support can be provided on need basis for a need of bulk hiring in a short time period to ensure you meet your hiring goals quickly.'
  },
  { 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Executive Search', 
    description: 'Our Executive search solution helps deliver on Senior Level Mandates.',
    details: 'Care is taken to understand the profile need and then assign work to a senior consultant for an exclusive search on such mandates.'
  },
  { 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>,
    title: 'Turnkey Solution', 
    description: 'Time and budget bound large scale recruitment needs are handled on project basis.',
    details: 'We are equipped to deliver for a large scale requirement if need be, ensuring your projects are staffed efficiently and effectively.'
  },
   
   { 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    title: 'Recruitment Process Outsourcing (RPO)', 
    description: 'Full management of your entire recruitment lifecycle.',
    details: 'Outsource your recruitment function to us. We act as your internal recruitment team, managing everything from sourcing to onboarding, improving quality of hire and reducing costs.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { avatar: `https://i.pravatar.cc/150?u=a042581f4e29026704d`, name: 'Jessica', role: 'For-Dun And Bradstreet', quote: 'HRassistance has really been a great support and help during the phase of my job change. The team understood exactly what I wanted and made that happen. Really glad with the efforts shown by the team. Thank to HRassistance' },
  { avatar: `https://i.pravatar.cc/150?u=a042581f4e29026705d`, name: 'Rohan Mehta', role: 'CEO, BuildWell Constructions', quote: 'Their executive search team found us a COO who was the perfect fit for our culture and vision. The process was seamless and highly professional.' },
  { avatar: `https://i.pravatar.cc/150?u=a042581f4e29026706d`, name: 'Anjali Desai', role: 'Founder, Creative Solutions', quote: 'As a startup, their flexible contract staffing solutions were a lifesaver. We got top talent without the long-term commitment. Highly recommend!' },
];

export const JOBS: Job[] = [
    { 
        id: '1', 
        title: 'Senior Manager - Finance', 
        location: 'Mumbai, Maharashtra, India', 
        type: 'Full time', 
        industry: 'Consulting', 
        experience: '5+ years', 
        description: 'Prepare annual budget, Financial Forecasting, and Operating Plan. Working on the monthly forecast requirements and continues impro...', 
        responsibilities: [
            'Lead the financial planning and analysis (FP&A) process.',
            'Develop and maintain complex financial models.',
            'Provide insights and recommendations to senior management.',
            'Ensure compliance with financial regulations.'
        ], 
        qualifications: [
            'Bachelors degree in Finance, Accounting, or related field; MBA or CPA preferred.',
            'Proven experience in a senior finance role.',
            'Strong analytical and problem-solving skills.',
            'Excellent proficiency in Excel and financial software.'
        ] 
    },
    { 
        id: '2', 
        title: 'Lead Enterprise Accounts', 
        location: 'Mumbai, Maharashtra, India', 
        type: 'Full time', 
        industry: 'Services - Corporate B2B', 
        experience: '5+ years', 
        description: 'The Leader - Enterprise Account Manager will be responsible for managing and guiding a team of Enterprise Account Managers to maximize r...', 
        responsibilities: [
            'Manage and grow a portfolio of key enterprise accounts.',
            'Lead a team of account managers to achieve sales targets.',
            'Build and maintain strong, long-lasting client relationships.',
            'Develop and execute strategic account plans.'
        ], 
        qualifications: [
            'Proven track record in B2B enterprise sales or account management.',
            'Strong leadership and team management skills.',
            'Excellent communication and negotiation abilities.',
            'Ability to understand and articulate complex solutions.'
        ] 
    },
    { 
        id: '3', 
        title: 'Assistant Manager - Call Centre', 
        location: 'Mumbai, Maharashtra, India', 
        type: 'Full time', 
        industry: 'Education', 
        experience: '2-5 years', 
        description: "India's leading early Childhood & K-12 Education company - Lighthouse Learning (formerly known as EuroKids International), is committed to delivering ...", 
        responsibilities: [
            'Oversee daily operations of the call center.',
            'Monitor and improve team performance and KPIs.',
            'Handle escalated customer inquiries and complaints.',
            'Assist in training and development of call center staff.'
        ], 
        qualifications: [
            'Previous experience in a call center or customer service leadership role.',
            'Strong understanding of call center metrics and technologies.',
            'Excellent coaching and mentoring skills.',
            'Ability to work in a fast-paced environment.'
        ] 
    },
    { 
        id: '4', 
        title: 'Regional Safety Officer', 
        location: 'Mumbai, Maharashtra, India', 
        type: 'Full time', 
        industry: 'Logistics', 
        experience: '2-5 years', 
        description: 'Responsible for developing and implementing safety policies and procedures across the region. Conducts safety audits and inspections to ensure compliance...', 
        responsibilities: [
            'Implement and enforce regional health and safety policies.',
            'Conduct regular safety audits, inspections, and risk assessments.',
            'Investigate accidents and incidents to determine root causes.',
            'Provide safety training to employees and management.'
        ], 
        qualifications: [
            'Certification in occupational health and safety (e.g., NEBOSH, OSHA).',
            'In-depth knowledge of safety regulations and best practices.',
            'Strong attention to detail and analytical skills.',
            'Excellent communication and training abilities.'
        ] 
    },
];

export const TRAINING_TOPICS: TrainingTopic[] = [
    {
        title: 'Soft skills',
        description: 'Soft skills are non-technical skills that relate to how you interact with others and navigate your environment. They\'re often intangible and harder to quantify compared to hard skills, which are specific, teachable abilities that can be defined and measured.',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Leadership Training',
        description: 'Leadership training programs are designed to develop and enhance the skills and qualities necessary for effective leadership. These programs can vary widely depending on the organization, industry, and specific goals, but they often cover a range of topics to help individuals become more confident, influential, and inspiring leaders.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Resume Building',
        description: 'Building a resume involves crafting a document that effectively showcases your skills, experiences, and qualifications to potential employers. Here\'s a step-by-step guide to help you create a strong resume.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Interview Skills Training',
        description: 'Interview skills training is essential for anyone preparing for job interviews. It helps individuals effectively communicate their qualifications, experiences, and personality traits to prospective employers. Here are some key components of interview skills training.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
    }
];


export const HIRING_PROCESS: HiringProcessStep[] = [
    { id: 1, title: 'Understand Needs', description: 'We start with a deep dive into your company culture, role requirements, and business goals.' },
    { id: 2, title: 'Source & Screen', description: 'Leveraging our network and advanced sourcing tools, we find and vet potential candidates.' },
    { id: 3, title: 'Shortlist & Present', description: 'We present a curated list of the most qualified candidates with detailed profiles.' },
    { id: 4, 'title': 'Interview & Feedback', description: 'We coordinate interviews and manage the feedback loop between you and the candidates.' },
    { id: 5, 'title': 'Offer & Onboard', description: 'We assist with offer negotiation and ensure a smooth onboarding process for the new hire.' },
];

export const INDUSTRY_SEGMENTS: IndustrySegment[] = [
    { name: 'Information Technology', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Financial Services', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop' },
    { name: 'Logistics', image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Retail', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Service Sector', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Manufacturing', image: 'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Education', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Training', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop' },
];

export const COMPANY_TIMELINE: TimelineEvent[] = [
    { year: 2015, milestone: 'HRassistance was founded with a vision to bridge the talent gap in the Indian IT sector.' },
    { year: 2017, milestone: 'Expanded services to include contract staffing and leadership search.' },
    { year: 2019, milestone: 'Opened our second office in Pune and reached 50+ clients.' },
    { year: 2021, milestone: 'Launched our corporate training division to upskill workforces.' },
    { year: 2023, milestone: 'Placed our 100,000th candidate and celebrated 200+ partnerships.' },
];

export const STATS: Stat[] = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={statIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.908 0M12 20.25v-3.75m-3.75 3.75H12M9 11.25a3 3 0 016 0m-6 0h6m7.5 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>, value: 100000, label: 'Candidates Placed', suffix: '+' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={statIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.358 0 2.673-.113 3.946-.334M12 21c-1.358 0-2.673-.113-3.946-.334" /></svg>, value: 200, label: 'Clients Served', suffix: '+' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={statIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.471-2.471a2.652 2.652 0 000-3.75l-2.471-2.471a2.652 2.652 0 00-3.75 0l-2.471 2.471a2.652 2.652 0 000 3.75l2.471 2.471a2.652 2.652 0 003.75 0z" /></svg>, value: 10, label: 'Years of Experience', suffix: '+' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className={statIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.695" /></svg>, value: 50, label: 'Expert Recruiters', suffix: '+' },
];

export const INDUSTRIES: Industry[] = [
  { 
    name: 'Information Technology', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>
  },
  { 
    name: 'Financial Services', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h1.5m-1.5 0h.008v.008H4.5v-.008zM3 15h.008v.008H3V15zm0 0v-3.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125V15m0 0h1.5m-1.5 0h.008v.008H4.5v-.008zM15 15h.008v.008H15V15zm0 0v-3.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125V15m0 0h1.5m-1.5 0h.008v.008H16.5v-.008zM12 4.5h.008v.008H12V4.5zM12 15h.008v.008H12V15zM12 9h.008v.008H12V9z" /></svg>
  },
  { 
    name: 'Logistics', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875M16.5 5.25v-1.5a1.5 1.5 0 00-3 0v1.5m3 0a1.5 1.5 0 00-3 0v1.5m6 0v-1.5a1.5 1.5 0 00-3 0v1.5m3 0a1.5 1.5 0 00-3 0v1.5" /></svg>
  },
  { 
    name: 'Retail', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
  },
  { 
    name: 'Service Sector', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  { 
    name: 'Manufacturing', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M5 21v-4m-2 2h4m10-16v4m2-2h-4m2 14v-4m-2 2h4M12 3v18" /></svg>
  },
  { 
    name: 'Education', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
  },
  { 
    name: 'Training', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={industryIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.176-1.636a60.09 60.09 0 0122.158 0l-2.176 1.636m-17.822 0l2.212 1.659a60.09 60.09 0 0013.4 0l2.212-1.659" /></svg>
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Sodexo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sodexo_logo.svg/320px-Sodexo_logo.svg.png' },
  { name: 'Lighthouse Learning', logo: 'https://lighthouse-learning.com/wp-content/themes/lighthouse/images/logo-main.png' },
  { name: 'FedEx', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/320px-FedEx_Express.svg.png' },
  { name: 'Linc Education', logo: 'https://linc-education-uat.linc-education.com/wp-content/uploads/2022/10/linc-logo.png' },
  { name: 'Transistor', logo: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" },
  { name: 'Reform', logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" },
];

// Re-export some for other pages that use them
export { TEAM_MEMBERS, CULTURE_PHOTOS, SOCIAL_ICONS } from './initialConstants';
