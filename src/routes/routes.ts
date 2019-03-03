import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { ExperienceDetails } from './Experience-Details/Experience-Details';
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
    path: '/experience/:id',
    linkName: 'ExperienceDetails',
    component: ExperienceDetails,
  },
  {
    path: '/technology',
    linkName: 'Technology',
    component: Technology,
  },
];
