import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 as Github, Star, ChevronDown, ChevronUp } from 'lucide-react';
import mermaid from 'mermaid';
import { projects } from '../../data/projects';
import './Projects.css';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Inter, sans-serif',
});

const MermaidDiagram = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.removeAttribute('data-processed');
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid-container">
      <div className="mermaid" ref={ref}>
        {chart}
      </div>
    </div>
  );
};

const techIcons: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Gemini API": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg1RjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMkwxNC41IDkuNUwyMiAxMkwxNC41IDE0LjVMMTIgMjJNOS41IDE0LjVMMiAxMkw5LjUgOS41TDEyIDJaIi8+PC9zdmc+",
  "Framer Motion": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
};

export default function Projects() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);

  const toggleArchitecture = (projectId: string) => {
    setExpandedArchitecture(expandedArchitecture === projectId ? null : projectId);
  };

  const featuredProjects = projects.filter(p => p.featured);
  const secondaryProjects = projects.filter(p => !p.featured);

  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projetos Recentes</h2>
          <p className="section-subtitle">
            Alguns dos trabalhos de desenvolvimento web que construí recentemente.
          </p>
        </motion.div>

        <div className="projects__grid">
          {featuredProjects.length > 0 && (
            <div className="projects__featured-grid">
              {featuredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="project-card--text-focused"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={itemVariants}
                >
                  <div className="project-badge">
                    <Star size={12} fill="currentColor" /> DESTAQUE
                  </div>
                  
                  <div className="project-card-header">
                    <h3 className="project-title-text">{project.title}</h3>
                    <p className="project-desc-text">{project.technicalDescription}</p>
                  </div>

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-features-section">
                      <div className="project-features-title">
                        <div className="feature-pill"></div>
                        <span>Funcionalidades Principais</span>
                      </div>
                      <ul className="project-features-list">
                        {project.highlights.map((h: string) => (
                          <li key={h}>
                            <span className="feature-bullet"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="project-tags-outline">
                    {project.technologies.map((tag: string) => (
                      <span key={tag} className="tag-outline">
                        {techIcons[tag] && (
                          <img src={techIcons[tag]} alt={tag} className="project-tag-icon" />
                        )}
                        <span className="project-tag-name">{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-card-footer">
                    <div className="project-actions-grid">
                      {project.architecture && (
                        <button 
                          onClick={() => toggleArchitecture(project.id)} 
                          className="btn-outline-architecture"
                        >
                          🏗️ Arquitetura do Sistema
                          {expandedArchitecture === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      )}
                      
                      <div className="project-primary-links">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-full-width">
                            <Github size={18} />
                            Ver Código
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-full-width">
                            <ExternalLink size={18} />
                            Ver Projeto
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedArchitecture === project.id && project.architecture && (
                      <motion.div 
                        className="project-architecture-expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="architecture-inner">
                          <div className="architecture-header">
                            <h4>🏗️ Fluxo de Arquitetura</h4>
                          </div>
                          <MermaidDiagram chart={project.architecture} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}

          {secondaryProjects.length > 0 && (
            <div className="projects__secondary-grid">
              {secondaryProjects.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  className="project-card--secondary"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={itemVariants}
                  transition={{ delay: idx * 0.1 }}
                >
                  {project.image && (
                    <div className="project-visual">
                      <img 
                        src={(project as any).image} 
                        alt={project.title} 
                        className="project-image"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.shortDescription}</p>
                    
                    <div className="project-tags">
                      {project.technologies?.map((tag: string) => (
                        <span key={tag} className="project-tag">
                          {techIcons[tag] && (
                            <img src={techIcons[tag]} alt={tag} className="project-tag-icon" />
                          )}
                          <span className="project-tag-name">{tag}</span>
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <Github size={18} /> Código
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={18} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
