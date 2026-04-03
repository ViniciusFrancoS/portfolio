/**
 * Projects implementation and data source.
 */

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technicalDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  highlights: string[];
  architecture?: string;
}

import taskImage from '../assets/projects/task.png';

export const projects: Project[] = [
  {
    id: "taskforce",
    title: "TaskForge",
    shortDescription: "App full stack de gerenciamento de tarefas que usa LLM para ajudar a dividir objetivos grandes em passos menores.",
    technicalDescription: "Feito com React no front-end e Node.js/Express no back-end. Usei PostgreSQL no banco de dados e integrei a API do Google Gemini para gerar sub-tarefas de modo mais dinâmico.",
    technologies: ["React", "Node.js", "PostgreSQL", "Gemini API", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://task-eta-fawn.vercel.app",
    githubUrl: "https://github.com/ViniciusFrancoS/Task",
    image: taskImage,
    featured: true,
    highlights: [
      "Integração com a API do Gemini para sugerir sub-tarefas.",
      "Sistema simples de conquistas para o usuário.",
      "API própria em Node.js com Express.",
      "Dados persistidos em banco relacional (PostgreSQL)."
    ],
    architecture: `graph TD
    A[Frontend React] -->|API Requests| B[Backend Express]
    A -->|Auth & Data| C[(PostgreSQL)]
    B -->|Sync| C
    B -->|Prompt Engineering| D[Google Gemini AI]
    
    style A fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#fff
    style B fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#3b82f6,stroke-width:2px,color:#fff`
  },
];
