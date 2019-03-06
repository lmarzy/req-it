import { About } from '../views/About/About';
import { Experience } from '../views/Experience/Experience';
import { ExperienceDetails } from '../views/Experience-Details/Experience-Details';
import { Technology } from '../views/Technology/Technology';

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
