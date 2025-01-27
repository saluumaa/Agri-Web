// const generateImageUrls = (count) => {
//   return Array.from({ length: count }, (_, i) => 
//     import(`../assets/product-images/image${i + 1}.png`));
// };

import image from '../assets/product-images/image.png';
import image1 from '../assets/product-images/image1.png';
import image2 from '../assets/product-images/image2.png';
import image3 from '../assets/product-images/image3.png';
import image4 from '../assets/product-images/image4.png';
import image6 from '../assets/product-images/image6.png';
import image7 from '../assets/product-images/image7.png';
import image8 from '../assets/product-images/image8.png';
import image9 from '../assets/product-images/image9.png';

const images = [image, image1, image2, image3, image4, image6, image7, image8, image9];

const generateImageUrls = (count) => {
  return images.slice(0, count);
};

export const products = Array.from({ length: 14}, (_, i) => ({
    id: i.toString(),
    name: `Agricultural Product ${i + 1}`,
    description: 'High-quality farming essentials for optimal crop yield.',
    price: Math.floor(Math.random() * 900) + 100,
    category: ['Seeds', 'Equipment', 'Fertilizers', 'Pesticides'][Math.floor(Math.random() * 4)],
    origin: 'USA',
    isOrganic: Math.random() > 0.5,
    images: generateImageUrls(4),
    specifications: {
      Composition: 'N-P-K 14-14-14',
      Type: 'Granular',
      Application: 'All crops',
      Certification: 'USDA Organic',
      'Shelf Life': '2 years',
      Storage: 'Cool, dry place',
    },
    stock: Math.floor(Math.random() * 100),
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 500),

    variants: ['10kg', '25kg', '50kg'],
    safetyInfo:
      'Keep out of reach of children. Store in a cool, dry place. Wear protective gear during application.',
    usage: `
      1. Apply 2-3kg per acre depending on soil condition
      2. Mix thoroughly with soil before planting
      3. Reapply every 3-4 months
      4. Water thoroughly after application
    `,
    storage: `
      1. Store in original container
      2. Keep in a cool, dry place
      3. Avoid direct sunlight
      4. Keep away from children and pets
    `,

  }));
   

  export const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };
  