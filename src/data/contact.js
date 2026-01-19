import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons/faProductHunt';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:scarlatmariusstefan2018@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.linkedin.com/in/marius-scarlat-194464356/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/marius004',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.producthunt.com/@marius004',
    label: 'Product Hunt',
    icon: faProductHunt,
  },
];

export default data;
