import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover, &.active {
      background: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: var(--border-radius);
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em;
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: ${props => props.$view === 'grid' 
    ? 'repeat(auto-fill, minmax(280px, 1fr))'
    : '1fr'};
`;

const NoResults = styled.div`
  text-align: center;
  padding: 4rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-standard);
`;



export {
    ProductsContainer,
    Header,
    Controls,
    ViewToggle,
    SortSelect,
    ProductGrid,
    NoResults
};