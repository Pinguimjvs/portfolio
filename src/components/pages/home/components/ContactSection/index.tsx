import { motion } from "framer-motion";
import styled from "styled-components";

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: var(--primary-color);
  color: white;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--accent-color);
`;

const ContactText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 20px;
  max-width: 600px;
  line-height: 1.6;
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ContactButton = styled(motion.a)`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  background: var(--accent-color);
  transition: background 0.3s;

  &:hover {
    background: #6a4bcc;
  }
`;

export default function ContactSection() {
  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Contato</Title>
        <ContactText>
          Se quiser entrar em contato para oportunidades ou simplesmente bater
          um papo sobre tecnologia, me mande uma mensagem!
        </ContactText>
        <ContactLinks>
          <ContactButton
            href="mailto:seuemail@example.com"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            E-mail
          </ContactButton>
          <ContactButton
            href="https://www.linkedin.com/in/seuperfil"
            target="_blank"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </ContactButton>
          <ContactButton
            href="https://github.com/seuperfil"
            target="_blank"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            GitHub
          </ContactButton>
        </ContactLinks>
      </motion.div>
    </ContactContainer>
  );
}
