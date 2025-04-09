import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden; /* 🔥 Garante que não gere scroll extra */
  background: transparent;
  color: white;
  font-family: "Poppins", sans-serif;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const AnimatedPage = motion(Container);

export const FadeInSection = styled(motion.div)`
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  &:hover {
    transform: scale(1.02);
  }
`;
