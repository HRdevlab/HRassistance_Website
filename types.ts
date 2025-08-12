import React from 'react';

export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}

export interface Service {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  industry: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface TrainingTopic {
    image: string;
    title: string;
    description: string;
}

export interface TimelineEvent {
    year: number;
    milestone: string;
}

export interface HiringProcessStep {
    id: number;
    title: string;
    description: string;
}

export interface TeamMember {
    photo: string;
    name: string;
    title: string;
    bio: string;
}

export interface CoreValue {
    icon: React.ReactElement;
    title: string;
}

export interface HeroSlide {
    id: number;
    image: string;
    headline: string;
    subheadline: string;
}

export interface IndustrySegment {
    name: string;
    image: string;
}

export interface ClientLogo {
    name: string;
    logo: string;
}

export interface Industry {
  name: string;
  icon: React.ReactElement;
}

export interface Stat {
  icon: React.ReactElement;
  value: number;
  label: string;
  suffix?: string;
}