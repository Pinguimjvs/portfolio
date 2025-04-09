import { motion } from "framer-motion";
import styled from "styled-components";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: var(--primary-color);
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--accent-color);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-top: 10px;
  color: white;
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>João Vitor Salvini</Title>
        <Subtitle>
          Desenvolvedor Front-End | React | Next.js | TypeScript
        </Subtitle>
      </motion.div>
    </HeroContainer>
  );
}
