import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import {
  GalleryContainer, MainImage, NavigationButton, Thumbnails, Thumbnail, Modal
} from '../../styles/productGalleryStyle';

export default function ProductGallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  if (!images.length) return <p>No images available</p>;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <GalleryContainer>
      <MainImage onClick={() => setModalOpen(true)}>
        <img src={images[currentIndex]} alt="Product view" loading="lazy" />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <ZoomIn size={20} />
        </div>
      </MainImage>

      <NavigationButton onClick={prevImage}><ChevronLeft size={24} /></NavigationButton>
      <NavigationButton onClick={nextImage}><ChevronRight size={24} /></NavigationButton>

      <Thumbnails>
        {images.map((image, index) => (
          <Thumbnail key={index} $active={index === currentIndex} onClick={() => setCurrentIndex(index)}>
            <img src={image} alt="Thumbnail" loading="lazy" />
          </Thumbnail>
        ))}
      </Thumbnails>

      <AnimatePresence>
        {modalOpen && (
          <Modal initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalOpen(false)}>
            <img src={images[currentIndex]} alt="Zoomed product view" />
          </Modal>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
}
