import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryContainer = styled.div`
  position: relative;
`;

const MainImage = styled(motion.div)`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: zoom-in;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const Thumbnail = styled.button`
  padding: 0;
  border: 2px solid ${props => props.$active ? 'var(--color-primary)' : 'transparent'};
  border-radius: var(--border-radius);
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary);
    color: white;
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
`;


export {
  GalleryContainer,
  MainImage,
  Thumbnails,
  Thumbnail,
  NavigationButton,
  Modal
};