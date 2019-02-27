import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { Technology } from './Technology/Technology';

export const routes = [
  {
    path: '/about',
    linkName: 'About',
    component: About,
  },
  {
    path: '/experience',
    linkName: 'Experience',
    component: Experience,
  },
  {
    path: '/technology',
    linkName: 'Technology',
    component: Technology,
  },
];
