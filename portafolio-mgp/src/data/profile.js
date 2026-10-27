import quiniela from '@assets/quiniela.png';
import calculator from '@assets/proyectoFinal.png';
import memory from '@assets/lab6.png';
import cssOnly from '@assets/lab4.png';
import beginnings from '@assets/lab3.png';

export const profile = {
  name: 'Marinés García',
  role: 'Junior Developer',
  // Los que dejes vacíos no se muestran en Contact.
  contact: {
    email: 'marines.garcia2004@gmail.com',
    github: 'https://github.com/NESHGP04',
    linkedin: 'https://www.linkedin.com/in/marines-garcia-b3347730b',
  },
};

// Todos los proyectos que se muestran en el sitio. Para agregar uno, copia un bloque.
// - detail: true  -> tiene su propia página (/projects/<id>)
// - si no, al presionarlo abre su repo (o su url) en otra pestaña
// - featured: true -> aparece en Home (el primero es el principal)
export const projects = [
  {
    id: 'quiniela-nfl',
    tag: 'WEB APP',
    title: 'Quiniela NFL',
    description:
      "An NFL pick'em pool (quiniela): choose the winner of each week's games, follow the stats and keep up with the rules.",
    highlights: ['My games', 'Stats', 'Committee', 'Rules'],
    image: quiniela,
    url: 'https://quiniela-nfl-five.vercel.app/',
    // El repo (https://github.com/NESHGP04/Quiniela-NFL) es privado: agrega `repo` cuando sea público.
    detail: true,
    featured: true,
  },
  {
    id: 'calculator',
    tag: 'REACT',
    title: 'Calculator',
    description:
      'A calculator built with React for the basic operations, documented with Storybook and tested with Jest.',
    stack: ['React', 'Storybook', 'Jest'],
    image: calculator,
    repo: 'https://github.com/NESHGP04/Proyect-1---Web',
  },
  {
    id: 'memory',
    tag: 'REACT',
    title: 'Memory',
    description:
      'A card game built with React for lab 6, practicing state, events and screen changes.',
    stack: ['React', 'JavaScript', 'CSS'],
    image: memory,
    repo: 'https://github.com/NESHGP04/Lab6-React',
  },
  {
    id: 'css-only',
    tag: 'HTML + CSS',
    title: 'CSS only',
    description: 'A drawing of Buttercup made with nothing but HTML and CSS.',
    stack: ['HTML', 'CSS'],
    image: cssOnly,
    repo: 'https://github.com/NESHGP04/Lab4',
  },
  {
    id: 'beginnings',
    tag: 'HTML',
    title: 'My beginnings',
    description: 'My first web pages, written in plain HTML: a page for a production studio.',
    stack: ['HTML'],
    image: beginnings,
    repo: 'https://github.com/NESHGP04/Lab3',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'Kotlin', 'C / C++', 'SQL'],
  },
  {
    group: 'Frameworks & tools',
    items: ['React', 'Next.js', 'Vite', 'HTML', 'CSS', 'Git'],
  },
  {
    group: 'Beyond code',
    items: ['Photography', 'AI tools', 'Painting', 'Handmade crafts', 'Softball'],
  },
];
