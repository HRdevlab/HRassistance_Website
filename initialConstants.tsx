
import React from 'react';
import type { TeamMember, CoreValue } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Rajesh Kumar', title: 'Founder & CEO', photo: 'https://picsum.photos/id/1005/400/600', bio: 'With over 20 years of experience in HR, Rajesh leads the company with a passion for innovation and excellence.' },
    { name: 'Sunita Patil', title: 'Director of Operations', photo: 'https://picsum.photos/id/1011/400/600', bio: 'Sunita ensures that our operations run smoothly, delivering exceptional service to clients and candidates alike.' },
    { name: 'Amit Singh', title: 'Head of Recruitment', photo: 'https://picsum.photos/id/1025/400/600', bio: 'Amit leads our dynamic recruitment team, with a keen eye for finding the perfect match for any role.' },
];

export const CULTURE_PHOTOS = [
    { src: 'https://picsum.photos/seed/culture1/500/500', alt: 'Team brainstorming session' },
    { src: 'https://picsum.photos/seed/culture2/500/500', alt: 'Celebrating a company milestone' },
    { src: 'https://picsum.photos/seed/culture3/500/500', alt: 'Team outing and fun activities' },
    { src: 'https://picsum.photos/seed/culture4/500/500', alt: 'Collaborative work environment' },
];

export const SOCIAL_ICONS = [
  { name: 'LinkedIn', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.499 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> },
  { name: 'Twitter', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.621 1.956 2.423 3.379 4.565 3.419-1.77 1.39-4.008 2.213-6.444 2.213-.418 0-.83-.023-1.235-.072 2.286 1.467 5.003 2.324 7.942 2.324 9.482 0 14.675-7.854 14.675-14.675 0-.223-.005-.446-.014-.668.998-.722 1.863-1.625 2.55-2.65z"/></svg> },
  { name: 'Facebook', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg> },
];
