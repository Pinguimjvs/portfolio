import { motion } from "framer-motion";
import styled from "styled-components";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background: var(--secondary-color);
  color: white;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--accent-color);
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.6;
`;

export default function AboutSection() {
  return (
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Sobre Mim</Title>
        <Description>
          Sou um desenvolvedor front-end apaixonado por criar experiências
          incríveis na web. Especializado em React, Next.js e TypeScript, tenho
          experiência em transformar ideias em interfaces modernas, dinâmicas e
          altamente interativas.
        </Description>
      </motion.div>
    </AboutContainer>
  );
}
