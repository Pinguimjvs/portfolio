import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";

const TimelineContainer = styled.section`
  position: relative;
  padding: 80px 20px;
  background: var(--primary-color);
  color: white;
  font-family: "Poppins", sans-serif;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: var(--accent-color);
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 20px;
  max-width: 900px;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--accent-color);
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled(motion.div)<{ align: string }>`
  width: 45%;
  padding: 20px;
  position: relative;
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  border-left: ${(props) =>
    props.align === "left" ? "none" : "4px solid var(--accent-color)"};
  border-right: ${(props) =>
    props.align === "left" ? "4px solid var(--accent-color)" : "none"};
  left: ${(props) => (props.align === "left" ? "0" : "55%")};
  min-height: 120px;

  &:hover {
    background: #0f172a;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    transform: scale(1.03);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const Company = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Period = styled.p`
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 10px;
`;

const TypingDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-wrap;
  color: white;
  margin-top: 10px;
`;

export default function ExperienceSection() {
  const experienceData = [
    {
      title: "Desenvolvedor Front-End Pleno",
      company: "BTG Pactual",
      period: "Jan 2024 - Out 2024",
      description:
        "Desenvolvimento web focado na custódia em Cayman. Auxílio na melhoria de projetos internos e construção de funcionalidades de investimento para clientes internacionais.",
    },
    {
      title: "Desenvolvedor Front-End Pleno",
      company: "Softable",
      period: "Abr 2023 - Jan 2024",
      description:
        "Projetos para Votorantim, otimização de fluxos de desenvolvimento e criação de funcionalidades interativas e visuais utilizando React, Next.js e Framer Motion.",
    },
    {
      title: "Desenvolvedor Front-End Júnior IV",
      company: "Softable",
      period: "Jul 2022 - Abr 2023",
      description:
        "Desenvolvimento para corporações como Saint-Gobain e Votorantim, com interfaces dinâmicas, responsivas e foco em valor agregado por meio de animações e conteúdo interativo.",
    },
    {
      title: "Desenvolvedor Front-End Júnior I",
      company: "Softable",
      period: "Abr 2022 - Jun 2022",
      description:
        "Participação em múltiplos projetos para startups e grandes empresas como a Votorantim. Colaboração em decisões e desenvolvimento técnico, design e comunicação.",
    },
    {
      title: "Estagiário Front-End",
      company: "Softable",
      period: "Abr 2021 - Abr 2022",
      description:
        "Participação no desenvolvimento de duas aplicações móveis utilizando Typescript, React Native e Git. Um dos aplicativos era para música, semelhante ao Spotify, e o outro, uma agenda para dentistas.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let text = "";

    if (
      hoveredIndex !== null &&
      experienceData[hoveredIndex] &&
      experienceData[hoveredIndex].description
    ) {
      text = experienceData[hoveredIndex].description;
      setTypedText("");

      const typeLetter = () => {
        if (currentIndex < text.length) {
          const char = text[currentIndex];
          if (char !== undefined) {
            setTypedText((prev) => prev + char);
          }
          currentIndex++;
          timeout = setTimeout(typeLetter, 10);
        }
      };

      timeout = setTimeout(typeLetter, 100);
    } else {
      setTypedText("");
    }

    return () => clearTimeout(timeout);
  }, [hoveredIndex]);

  return (
    <TimelineContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experiência
      </Title>
      <Timeline>
        {experienceData.map((exp, idx) => (
          <TimelineItem
            key={idx}
            align={idx % 2 === 0 ? "left" : "right"}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <JobTitle>💼 {exp.title}</JobTitle>
            <Company>{exp.company}</Company>
            <Period>{exp.period}</Period>

            {hoveredIndex === idx && (
              <TypingDescription>{typedText}</TypingDescription>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
}
