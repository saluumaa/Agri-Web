import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(rgba(44, 95, 45, 0.85), rgba(151, 188, 98, 0.9)),
    url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000') center/cover;


      &::after {
        content: '';
            position: absolute;
            width: 100%;
            height: 50px;
            bottom: -25px;
            left: 0;
            background: white;
            -webkit-mask-image: url("./triangle.svg");
            -webkit-mask-size: 80px 30px;
            -webkit-mask-repeat: repeat-x;
            mask-image: url("./triangle.svg");
        }

`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const LeafPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.1;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-family: var(--font-heading);

  span {
    display: block;
    color: var(--color-accent);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  max-width: 800px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--color-primary);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &::after {
    content: '';
    width: 2px;
    height: 60px;
    background: white;
    opacity: 0.5;
  }
`;


export { HeroSection, ContentWrapper, LeafPattern, Title, Subtitle, CTAButton, ScrollIndicator };