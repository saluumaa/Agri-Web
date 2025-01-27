//product details
import styled from "styled-components";
import { motion } from "framer-motion";


const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductInfo = styled.div`
  .category {
    color: var(--color-primary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2rem;
    color: var(--color-primary);
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  .stars {
    display: flex;
    color: #fbbf24;
  }

  .count {
    color: #666;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: var(--border-radius);

  svg {
    color: var(--color-primary);
  }
`;

const Tabs = styled.div`
  border-bottom: 1px solid #e5e7eb;
  margin: 2rem 0;
  display: flex;
  gap: 2rem;
`;

const Tab = styled.button`
  padding: 1rem 0;
  font-weight: 500;
  color: ${props => props.$active ? 'var(--color-primary)' : '#666'};
  border-bottom: 2px solid ${props => props.$active ? 'var(--color-primary)' : 'transparent'};
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

const TabContent = styled(motion.div)`
  padding: 2rem 0;
`;

const SpecificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  .spec-item {
    background: #f8f8f8;
    padding: 1rem;
    border-radius: var(--border-radius);

    h4 {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`;

const SafetyWarning = styled.div`
  background: #fff5f5;
  border: 1px solid #fc8181;
  border-radius: var(--border-radius);
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: start;

  svg {
    color: #e53e3e;
    flex-shrink: 0;
  }
`;

const VariantSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  background: white;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: #e5e7eb;
    cursor: not-allowed;
  }
`;

export { ProductContainer, ProductGrid, ProductInfo, Rating, Features, Feature, Tabs, Tab, TabContent, SpecificationGrid, SafetyWarning, VariantSelect, AddToCartButton };