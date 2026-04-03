import { motion } from 'framer-motion';
import { Code2, ArrowRight } from 'lucide-react';
import { navigation } from '../../data/content';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg-decorations">
        <div className="glow-circle--1" />
        <div className="glow-circle--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__badge-wrapper">
            <span className="badge">
              <span className="badge-dot" />
              Disponível para novos projetos
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__title">
            Criando aplicações <br/>
            <span className="hero__title-highlight">web funcionais.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__description">
            Sou desenvolvedor full stack com maior foco no front-end. Trabalhando do banco de dados até a tela final, criando soluções para problemas reais.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <a href="#projetos" className="btn btn-primary hero__btn-main">
              Ver Projetos <ArrowRight size={18} />
            </a>
            
            <div className="hero__socials">
              {navigation.socials.filter(s => s.label !== 'Email').map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="btn btn-secondary" aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} /> {label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero__visual-card">
            <div className="hero__visual-header">
              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>
              <span className="window-title">api-server.ts</span>
              <Code2 size={16} className="window-icon" />
            </div>
            
            <pre className="hero__visual-body">
              <code>
                <span className="token keyword">import</span> {'{'} Application, Router {'}'} <span className="token keyword">from</span> <span className="token string">'express'</span>;{'\n'}
                <span className="token keyword">import</span> {'{'} db {'}'} <span className="token keyword">from</span> <span className="token string">'@/lib/db'</span>;{'\n'}
                {'\n'}
                <span className="token keyword">class</span> <span className="token class">CoreService</span> {'{'}{'\n'}
                {'  '}<span className="token keyword">async</span> <span className="token method">initialize</span>() {'{'}{'\n'}
                {'    '}<span className="token keyword">try</span> {'{'}{'\n'}
                {'      '}<span className="token keyword">await</span> db.<span className="token method">connect</span>();{'\n'}
                {'      '}console.<span className="token method">log</span>(<span className="token string">'[System] DB Ready'</span>);{'\n'}
                {'      '}{'\n'}
                {'      '}<span className="token keyword">const</span> app = <span className="token method">express</span>();{'\n'}
                {'      '}app.<span className="token method">listen</span>(<span className="token property">8080</span>, () =&gt; {'{'}{'\n'}
                {'        '}console.<span className="token method">log</span>(<span className="token string">'[Server] Online'</span>);{'\n'}
                {'      '}{'}'});{'\n'}
                {'    '}{'}'} <span className="token keyword">catch</span> (error) {'{'}{'\n'}
                {'      '}Logger.<span className="token method">error</span>(<span className="token string">'Init Failed'</span>, error);{'\n'}
                {'    '}{'}'}{'\n'}
                {'  '}{'}'}{'\n'}
                {'}'}{'\n'}
                {'\n'}
                <span className="token keyword">new</span> <span className="token class">CoreService</span>().<span className="token method">initialize</span>();
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
