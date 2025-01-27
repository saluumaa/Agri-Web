import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroSection, ContentWrapper, LeafPattern, Title, Subtitle, CTAButton, ScrollIndicator } from './heroStyle';

export default function Hero() {
    const scrollToContent = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };
  
    return (
      <HeroSection>
        <LeafPattern
          initial={{y:-100, opacity: 0 }}
          animate={{y:0, opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 360],
                y: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.5
              }}
            >
              <Leaf size={48} />
            </motion.div>
          ))}
        </LeafPattern>
  
        <ContentWrapper>
          <Title
            initial={{y:-100, opacity: 0 }}
            animate={{y:0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Cultivating Tomorrow's
            <span>Agricultural Success</span>
          </Title>
  
          <Subtitle
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Connect with global agricultural suppliers and access premium farming essentials
            to maximize your yield and sustainable growth
          </Subtitle>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton>
              Explore Products
              <ArrowRight size={20} />
            </CTAButton>
          </motion.div>
  
          <ScrollIndicator
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1, duration: 1 },
              y: { repeat: Infinity, duration: 2 }
            }}
            onClick={scrollToContent}
          >
            <span>Scroll to explore</span>
          </ScrollIndicator>
        </ContentWrapper>
      </HeroSection>
    );
  }