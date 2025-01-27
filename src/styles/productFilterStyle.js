import styled from 'styled-components';
import { motion } from 'framer-motion';

const FiltersContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-standard);
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #e5e7eb;
    border-radius: var(--border-radius);
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

const PriceRange = styled.div`
  .range-inputs {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  input[type="number"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: var(--border-radius);
  }

  input[type="range"] {
    width: 100%;
    margin: 1rem 0;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
`;

const ActiveFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const FilterTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;

  button {
    background: none;
    border: none;
    color: white;
    padding: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export {
    FiltersContainer,
    SearchBar,
    FilterSection,
    PriceRange,
    CheckboxGroup,
    ActiveFilters,
    FilterTag,
    };