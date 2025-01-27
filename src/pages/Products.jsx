import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, ArrowUpDown, ArrowBigLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/products/ProductCard';
import {products} from '../config/productsData';
import ProductFilters from '../components/products/ProductFilters';
import {
  ProductsContainer,
  Header,
  Controls,
  ViewToggle,
  SortSelect,
  ProductGrid,
  NoResults
} from '../styles/productsStyle';
import { Link } from 'react-router-dom';


export default function Products() {
  const { state, dispatch } = useApp();
  const [loading, setLoading] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (state.filters.category && product.category !== state.filters.category) return false;
    if (state.filters.search && !product.name.toLowerCase().includes(state.filters.search.toLowerCase()))
      return false;
    if (product.price < state.filters.priceRange[0] || product.price > state.filters.priceRange[1])
      return false;
    return true;
  });

  const sortProducts = (products) => {
    switch (state.filters.sortBy) {
      case 'price':
        return [...products].sort((a, b) => a.price - b.price);
      case 'name':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'popularity':
        return [...products].sort((a, b) => b.reviews - a.reviews);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ProductsContainer>
      <div className='-mt-9 mb-5 max-w-7xl bg-green-500 min-h-40 relative rounded-xl'> 
        <div className='absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-40 rounded-xl'>
            <img src="./trees-image.png" alt="about-hero" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
          
          <Header>
          <h1 className="text-4xl font-bold mb-4 text-white">Agricultural Products</h1>
          <div className='flex items-center justify-center gap-6 mb-3'>
            <Link to='/' className='text-white text-xl font-semibold'>
              <p>Home</p>
            </Link>
            <span className='text-white text-lg font-semibold'>
              <ArrowBigLeft size={24} />
            </span>
            <p className='text-white text-xl font-bold'>Products</p>
            </div>
          <p className="text-gray-200">Browse our selection of high-quality agricultural products</p>
        </Header>
           
          </div>  
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6">
          <ProductFilters />

          <div>
            <Controls>
              <ViewToggle>
                <button
                  className={state.filters.view === 'grid' ? 'active' : ''}
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_FILTERS',
                      payload: { view: 'grid' },
                    })
                  }
                >
                  <Grid size={20} />
                </button>
                <button
                  className={state.filters.view === 'list' ? 'active' : ''}
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_FILTERS',
                      payload: { view: 'list' },
                    })
                  }
                >
                  <List size={20} />
                </button>
              </ViewToggle>

              <div className="flex items-center gap-2">
                <ArrowUpDown size={20} className="text-gray-500" />
                <SortSelect
                  value={state.filters.sortBy}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_FILTERS',
                      payload: { sortBy: e.target.value },
                    })
                  }
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price">Price: Low to High</option>
                  <option value="name">Name: A to Z</option>
                </SortSelect>
              </div>
            </Controls>

            <AnimatePresence>
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center items-center h-64"
                >
                  Loading...
                </motion.div>
              ) : sortedProducts.length > 0 ? (
                <ProductGrid $view={state.filters.view}>
                  {sortedProducts.map((product) => (
                    <motion.div key={product.id} layout>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </ProductGrid>
              ) : (
                <motion.div key="no-results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <NoResults>
                    <h2 className="text-xl text-red-400 font-bold mb-2">No products found</h2>
                    <p className="text-gray-600">Try adjusting your filters or search terms</p>
                  </NoResults>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </ProductsContainer>
    </motion.div>
  );
}