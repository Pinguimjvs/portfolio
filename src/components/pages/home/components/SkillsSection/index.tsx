import { motion } from "framer-motion";
import styled from "styled-components";

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 800px;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Styled Components",
  "Framer Motion",
  "CSS",
  "HTML",
  "Git",
  "Node.js",
];

export default function SkillsSection() {
  return (
    <SkillsContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Habilidades</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </SkillItem>
          ))}
        </SkillsGrid>
      </motion.div>
    </SkillsContainer>
  );
}
