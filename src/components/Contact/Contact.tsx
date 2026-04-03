import { motion } from 'framer-motion';
import { contactContent, navigation } from '../../data/content';

import './Contact.css';

export default function Contact() {
  return (
    <section id="contato" className="section bg-secondary contact-section">
      <div className="container">
        <motion.div 
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-header">
            <h2 className="contact-title">Inicie uma conversa.</h2>
            <p className="contact-subtitle">
              Seja para discutir arquitetura, novas oportunidades ou apenas trocar ideia sobre desenvolvimento.
            </p>
          </div>

          <div className="contact-body">
            <a href={`mailto:${contactContent.email}`} className="contact-main-link">
              {contactContent.email}
            </a>

            <div className="contact-socials">
              {navigation.socials.filter(s => s.label !== 'Email').map((s) => (
                <a key={s.label} href={s.href} className="contact-social-link" target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
