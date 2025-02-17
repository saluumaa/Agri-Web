import { Star, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card, ImageContainer, StockBadge, Content, Rating, Price
} from '../../styles/productCardStyle';

export default function ProductCard({ product }) {
  if (!product) return null; // Prevent crash if product is undefined

  const productImage = product.images?.length
    ? product.images[Math.floor(Math.random() * product.images.length)]
    : '/fallback-image.jpg'; // Default image

  return (
    <Card whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link to={`/products/${product.id}`}>
        <ImageContainer>
          <img src={productImage} alt={product.name} loading="lazy" />
          <StockBadge $inStock={product.stock > 0}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </StockBadge>
        </ImageContainer>
        <Content>
          <h3 className="text-lg font-bold mb-2">{product.name}</h3>
          <Rating>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < product.rating ? '#fbbf24' : 'none'}
                  stroke={i < product.rating ? '#fbbf24' : '#d1d5db'}
                />
              ))}
            </div>
            <span className="reviews">
              {product.reviews > 0 ? `(${product.reviews})` : 'No reviews'}
            </span>
          </Rating>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <Price>
            <span>${product.price?.toFixed(2) || '0.00'}</span>
            {product.stock > 0 && (
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Package size={16} />
                {product.stock} available
              </span>
            )}
          </Price>
        </Content>
      </Link>
    </Card>
  );
}