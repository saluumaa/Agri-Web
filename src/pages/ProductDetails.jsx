import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Truck, Shield, Package, Info, AlertTriangle } from 'lucide-react';
import ProductGallery from '../components/products/ProductGallery';
import { getProductById } from '../config/productsData';

import {
  AddToCartButton,
  VariantSelect,
  ProductContainer,
  ProductGrid,
  ProductInfo,
  Rating,
  Features,
  Feature,
  SafetyWarning,
  Tabs,
  Tab,
  TabContent,
  SpecificationGrid
} from '../styles/ProductDetailStyle';

export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [selectedVariant, setSelectedVariant] = useState('25kg');
  const product = getProductById(id);
 

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ProductContainer>
        <ProductGrid>
          <ProductGallery images={product.images} />

          <ProductInfo>
            <div className="category">{product.category}</div>
            <h1 className="title">{product.name}</h1>

            <Rating>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.floor(product.rating) ? '#fbbf24' : 'none'}
                    stroke={i < Math.floor(product.rating) ? '#fbbf24' : '#d1d5db'}
                    aria-label={`Star ${i + 1}`}
                  />
                ))}
              </div>
              <span className="count">{product.reviews} reviews</span>
            </Rating>

            <div className="price">${product.price}</div>

            <Features>
              <Feature>
                <Truck />
                <div>
                  <h3 className="font-bold">Free Shipping</h3>
                  <p className="text-sm text-gray-600">Orders over $500</p>
                </div>
              </Feature>
              <Feature>
                <Shield />
                <div>
                  <h3 className="font-bold">Quality Assured</h3>
                  <p className="text-sm text-gray-600">USDA Certified</p>
                </div>
              </Feature>
              <Feature>
                <Package />
                <div>
                  <h3 className="font-bold">Bulk Orders</h3>
                  <p className="text-sm text-gray-600">Available</p>
                </div>
              </Feature>
            </Features>

            <SafetyWarning>
              <AlertTriangle size={24} />
              <div>
                <h4 className="font-bold mb-1">Safety Notice</h4>
                <p className="text-sm">Please read safety instructions carefully before use.</p>
              </div>
            </SafetyWarning>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Package Size</label>
              <VariantSelect value={selectedVariant} onChange={(e) => setSelectedVariant(e.target.value)}>
                {product.variants.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
              </VariantSelect>
            </div>

            <AddToCartButton disabled={product.stock === 0}>
              {product.stock > 0 ? 'Request Quote' : 'Out of Stock'}
            </AddToCartButton>
          </ProductInfo>
        </ProductGrid>

        <Tabs>
          <Tab active={activeTab === 'description'} onClick={() => setActiveTab('description')}>
            Description
          </Tab>
          <Tab active={activeTab === 'specifications'} onClick={() => setActiveTab('specifications')}>
            Specifications
          </Tab>
          <Tab active={activeTab === 'usage'} onClick={() => setActiveTab('usage')}>
            Usage Instructions
          </Tab>
        </Tabs>

        <AnimatePresence mode="wait">
          {activeTab === 'description' && (
            <TabContent key="description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <p>{product.description}</p>
            </TabContent>
          )}

          {activeTab === 'specifications' && (
            <TabContent key="specifications" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <SpecificationGrid>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <h4>{key}</h4>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </SpecificationGrid>
            </TabContent>
          )}

          {activeTab === 'usage' && (
            <TabContent key="usage" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Usage Instructions</h3>
                  <ul className="list-disc pl-6 space-y-2 ">
                    {product.usage.split('\n').filter(Boolean).map((line, i) => (
                      <li className='list-none' key={i}>{line.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Storage Instructions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {product.storage.split('\n').filter(Boolean).map((line, i) => (
                      <li className='list-none' key={i}>{line.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabContent>
          )}
        </AnimatePresence>
      </ProductContainer>
    </motion.div>
  );
}
