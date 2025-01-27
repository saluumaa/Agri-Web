import styled from "styled-components";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Card = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-standard);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const StockBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${(props) => (props.$inStock ? 'var(--color-primary)' : '#dc2626')};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;

  .stars {
    color: #fbbf24;
    display: flex;
  }

  .reviews {
    color: #666;
    font-size: 0.875rem;
  }
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Card, ImageContainer, StockBadge, Content, Rating, Price };
