import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, Globe, Leaf, ChevronRight, Star, ArrowRight } from 'lucide-react';
import {  
  Section,
  Container,
  Grid,
  Card,
  ProductCard,
  TestimonialCard,
  BlogCard,
  CTASection,
  Button
} from '../styles/homeStyle';

import { homeConfig } from '../config/homeConfig';
import { blogPosts } from '../config/blogPost';
import {products} from '../config/productsData';
import Hero from '../components/hero/Hero';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const icons = { Sprout, Globe, Leaf };

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />

      <Section ref={ref}>
        <Container>
          <motion.h2
            className="text-3xl font-bold text-center mb-2"
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            Why Choose AgriTrade?
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            Your trusted partner in agricultural excellence
          </motion.p>

          <Grid>
            {homeConfig.features.map((feature, index) => {
              const Icon = icons[feature.icon];
              return (
              <Card
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ delay: index * 0.2 }}
              >
                <Icon size={32} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f8f8' }}>
        <Container>
          <motion.h2
            className="text-3xl font-bold text-center mb-2"
            variants={fadeInUp}
          >
            Featured Products
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Discover our selection of premium agricultural products
          </motion.p>

          <Grid>
            {products.slice(0,3)
            .map
            ((product, index) => (
              <ProductCard
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ delay: index * 0.2 }}
              >
                <img src={product.images[Math.floor(Math.random() * product.images.length)]}
                 alt={product.name} />
                <div className="text-sm text-primary font-medium mb-1">{product.category}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <Button to="/products" className="text-sm px-4 py-2">
                    View Details
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </ProductCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.h2
            className="text-3xl font-bold text-center mb-2"
            variants={fadeInUp}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Trusted by farmers and agricultural businesses worldwide
          </motion.p>

          <Grid>
            {homeConfig.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ delay: index * 0.2 }}
              >
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </TestimonialCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={fadeInUp}
          >
            Ready to Grow Your Agricultural Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            variants={fadeInUp}
          >
            Join thousands of satisfied farmers and suppliers on AgriTrade
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={fadeInUp}
          >
            <Button to="/products">
              Explore Products
              <ArrowRight size={20} />
            </Button>
            <Button to="/contact" className="outline">
              Contact Us
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </Container>
      </CTASection>

      <Section>
        <Container>
          <motion.h2
            className="text-3xl font-bold text-center mb-2"
            variants={fadeInUp}
          >
            Latest News & Insights
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Stay updated with the latest in agriculture
          </motion.p>

          <Grid>
            {blogPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`}>
              <BlogCard
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ delay: index * 0.2 }}
              >
                <img src={post.image} alt={post.title} />
                <div className="date">{post.date}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button className="text-sm px-4 py-2">
                  Read More
                  <ChevronRight size={16} />
                </Button>
              </BlogCard>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </motion.div>
  );
}