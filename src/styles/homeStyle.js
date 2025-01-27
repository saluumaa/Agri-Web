import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section = styled(motion.section)`
  padding: 3rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 10px 0;
`;

const Card = styled(motion.div)`
  background: white;
  padding:10px 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-standard);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
`;

const ProductCard = styled(Card)`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }
`;

const TestimonialCard = styled(Card)`
  text-align: center;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    object-fit: cover;
  }

  .stars {
    color: #fbbf24;
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1rem;
  }
`;

const BlogCard = styled(Card)`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }

  .date {
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;

const CTASection = styled(Section)`
  background: linear-gradient(rgba(44, 95, 45, 0.9), rgba(44, 95, 45, 0.9)),
    url('https://images.unsplash.com/photo-1560693225-b8507d6f3aa9?auto=format&fit=crop&q=80&w=2000') center/cover fixed;
  color: white;
  text-align: center;
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &.outline {
    background: transparent;
    border: 2px solid white;

    &:hover {
      background: white;
      color: var(--color-primary);
    }
  }
`;

export {  
  Section,
  Container,
  Grid,
  Card,
  ProductCard,
  TestimonialCard,
  BlogCard,
  CTASection,
  Button
 };