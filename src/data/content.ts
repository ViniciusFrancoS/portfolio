import { Mail } from 'lucide-react';
import { LinkedinIcon } from '../components/ui/icons/LinkedinIcon';
import { GithubIcon } from '../components/ui/icons/GithubIcon';

export const navigation = {
  navItems: [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Projetos', href: '#projetos', id: 'projetos' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ],
  socials: [
    { icon: GithubIcon, href: 'https://github.com/ViniciusFrancoS', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/viniciusfrancos', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:viniciusfranco1718@gmail.com', label: 'Email' },
  ],
};

export const aboutContent = {
  intro: 'Meu foco é criar aplicações web bem feitas. Minha base inicial foi em Redes de Computadores, mas hoje atuo como desenvolvedor com foco maior no front-end. Estou cursando Análise e Desenvolvimento de Sistemas (3º período) e no dia a dia escrevo código organizado, pensando sempre na manutenção a longo prazo.',
  cards: [
    {
      title: 'Full Stack',
      description: 'Construção da aplicação ponta a ponta: da modelagem no banco de dados até a tela final do usuário.',
    },
    {
      title: 'Integrações (APIs)',
      description: 'Conexão com serviços de terceiros e APIs (como pagamentos e serviços de IA) para expandir a aplicação.',
    },
    {
      title: 'Front-end & UI',
      description: 'Criação de componentes reutilizáveis, layouts responsivos e interfaces que não complicam a vida do usuário.',
    },
    {
      title: 'Desempenho',
      description: 'Cuidado com o tempo de carregamento, peso dos arquivos e boas práticas básicas de web.',
    },
  ],
  education: [
    {
      degree: 'Redes de Computadores',
      institution: 'ETE Governador Eduardo Campos',
      status: 'Concluído • Formado',
      type: 'Technical'
    },
    {
      degree: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Graduação em andamento',
      status: 'Cursando • 3º Período',
      type: 'Academic'
    }
  ],
  certifications: [
    { name: 'Front-End', issuer: 'SOFTEX' },
    { name: 'Oracle Next Education (ONE)', issuer: 'Oracle' }
  ]
};

export const stackContent = {
  categories: [
    {
      category: 'Frontend & UI',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
      ],
    },
    {
      category: 'Backend & Cloud',
      items: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'Amazon AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' }
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' }
      ],
    },
  ]
};

export const contactContent = {
  email: 'viniciusfranco1718@gmail.com',
  message: 'Estou sempre aberto a conversar sobre código, boas práticas ou novos projetos.',
};
