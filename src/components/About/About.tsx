import { motion } from 'framer-motion';
import { Layout, Server, Database, Rocket, Fingerprint, GraduationCap, BookOpen, Award } from 'lucide-react';
import { aboutContent } from '../../data/content';
import './About.css';

const icons = [Layout, Server, Database, Rocket];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const highlightText = (text: string): (string | React.ReactNode)[] => {
    const keywords = ['Redes de Computadores', 'Análise e Desenvolvimento de Sistemas', 'Front-End', 'Oracle Next Education (ONE)'];
    let result: (string | React.ReactNode)[] = [text];

    keywords.forEach(keyword => {
      const newResult: (string | React.ReactNode)[] = [];
      result.forEach(item => {
        if (typeof item === 'string') {
          const parts = item.split(new RegExp(`(${keyword})`, 'g'));
          parts.forEach((part, i) => {
            if (part === keyword) {
              newResult.push(<span key={`${keyword}-${i}`} className="highlight-keyword">{part}</span>);
            } else if (part !== '') {
              newResult.push(part);
            }
          });
        } else {
          newResult.push(item);
        }
      });
      result = newResult;
    });

    return result;
  };

  return (
    <section id="sobre" className="section bg-secondary about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Desenvolvedor web focando em criar aplicações úteis e fáceis de usar.
          </p>
        </motion.div>

        <motion.div 
          className="about__intro-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Fingerprint className="about__intro-icon" size={32} />
          <p>
            Gosto de colocar a mão na massa tanto no back-end quanto no front-end. Meu foco é montar sistemas que funcionem bem no banco de dados e reflitam isso em interfaces limpas. Tento sempre escrever um código fácil de entender para quem for ler depois.
          </p>
        </motion.div>

        <motion.div 
          className="about__education"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="education__header">
            <h3 className="education__title">Formação & Capacitação</h3>
            <p className="education__intro">
              {highlightText(aboutContent.intro)}
            </p>
          </div>

          <div className="education__grid">
            {aboutContent.education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card__icon">
                  {edu.type === 'Academic' ? <BookOpen size={20} /> : <GraduationCap size={20} />}
                </div>
                <div className="education-card__content">
                  <h4 className="education-card__degree">{edu.degree}</h4>
                  <p className="education-card__institution">{edu.institution}</p>
                  <span className="education-card__status">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="certifications__wrapper">
            <div className="certifications__title-compact">
              <Award size={16} />
              <span>Certificações Complementares</span>
            </div>
            <div className="certifications__list">
              {aboutContent.certifications.map((cert, idx) => (
                <div key={idx} className="cert-pill">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about__bento"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {aboutContent.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={card.title} className="bento-card" variants={itemVariants}>
                <div className="bento-card__header">
                  <div className="bento-card__icon-wrapper">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="bento-card__title">{card.title}</h3>
                </div>
                <p className="bento-card__desc">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
