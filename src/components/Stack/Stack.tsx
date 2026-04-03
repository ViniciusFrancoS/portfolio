import { motion } from 'framer-motion';
import { stackContent } from '../../data/content';
import './Stack.css';

export default function Stack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Tecnologias Core</span>
          <h2 className="section-title">Minha Stack Base</h2>
          <p className="section-subtitle">
            Ferramentas selecionadas não por hype, mas pela capacidade de entregar produtos escaláveis, maduros e precisos.
          </p>
        </motion.div>

        <motion.div 
          className="stack__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stackContent.categories.map((group) => (
            <motion.div key={group.category} className="stack-group" variants={itemVariants}>
              <h3 className="stack-group__category">{group.category}</h3>
              <div className="stack-group__items">
                {group.items.map((item) => (
                  <div key={item.name} className="tech-card">
                    <div className="tech-icon-wrapper">
                      <img src={item.icon} alt={item.name} className="tech-icon" loading="lazy" />
                    </div>
                    <span className="tech-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
