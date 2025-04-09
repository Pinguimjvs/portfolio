import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1; /* Coloca o parallax no fundo */
`;

const ParallaxImage = styled(motion.img)`
  width: 100vw;
  height: 120vh; /* Maior que a tela para dar um efeito melhor */
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function ParallaxBackground() {
  const { scrollY } = useScroll(); // Captura o scroll vertical
  const y1 = useTransform(scrollY, [0, 1500], [0, -150]); // Controla o movimento da primeira imagem
  // const y2 = useTransform(scrollY, [0, 500], [0, -50]); // Movimento mais leve para a segunda imagem

  return (
    <ParallaxContainer>
      <ParallaxImage
        src="/parallax-layer1.png"
        alt="Layer 1"
        style={{ y: y1 }}
      />
      <ParallaxImage
        src="/parallax-layer2.png"
        alt="Layer 2"
        style={{ opacity: 0.7 }}
      />
    </ParallaxContainer>
  );
}
