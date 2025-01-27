// ContactStyle
import styled from 'styled-components';
import { motion } from 'framer-motion';4

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  .info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    svg {
      color: var(--color-primary);
    }
  }
`;

const ContactForm = styled.form`
  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }

  .error {
    color: #e53e3e;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

export { ContactContainer, ContactInfo, ContactForm };