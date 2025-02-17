// import { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Search, SlidersHorizontal, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useApp } from '../../context/AppContext';
// import { 
//   FiltersContainer,
//   SearchBar,
//   FilterSection,
//   PriceRange,
//   CheckboxGroup,
//   ActiveFilters,
//   FilterTag,
//  } from '../../styles/productFilterStyle';

// const categories = [
//   'Seeds',
//   'Equipment',
//   'Fertilizers',
//   'Pesticides',
//   'Tools',
//   'Irrigation'
// ];

// const brands = [
//   'AgriTech',
//   'FarmPro',
//   'GreenGrow',
//   'HarvestPlus',
//   'EarthCare'
// ];

// export default function ProductFilters() {
//   const { state, dispatch } = useApp();
//   const { filters } = state;

//   const [localFilters, setLocalFilters] = useState(filters);
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       dispatch({ type: 'UPDATE_FILTERS', payload: localFilters });
//     }, 500);

//     return () => clearTimeout(timeoutId);
//   }, [localFilters, dispatch]);

//   const handlePriceChange = (min, max) => {
//     setLocalFilters(prev => ({
//       ...prev,
//       priceRange: [min, max]
//     }));
//   };

//   const clearFilter = (key) => {
//     setLocalFilters(prev => ({
//       ...prev,
//       [key]: Array.isArray(prev[key]) ? [] : ''
//     }));
//   };

//   return (
//     <FiltersContainer>
//       <SearchBar>
//         <Search size={20} />
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={localFilters.search}
//           onChange={(e) => setLocalFilters(prev => ({
//             ...prev,
//             search: e.target.value
//           }))}
//         />
//       </SearchBar>

//       <FilterSection>
//         <h3>Categories</h3>
//         <CheckboxGroup>
//           {categories.map(category => (
//             <label key={category}>
//               <input
//                 type="checkbox"
//                 checked={localFilters.category === category}
//                 onChange={() => setLocalFilters(prev => ({
//                   ...prev,
//                   category: prev.category === category ? '' : category
//                 }))}
//               />
//               {category}
//             </label>
//           ))}
//         </CheckboxGroup>
//       </FilterSection>

//       <FilterSection>
//         <h3>Price Range</h3>
//         <PriceRange>
//           <input
//             type="range"
//             min="0"
//             max="1000"
//             value={localFilters.priceRange[1]}
//             onChange={(e) => handlePriceChange(localFilters.priceRange[0], Number(e.target.value))}
//           />
//           <div className="range-inputs">
//             <input
//               type="number"
//               value={localFilters.priceRange[0]}
//               onChange={(e) => handlePriceChange(Number(e.target.value), localFilters.priceRange[1])}
//               min="0"
//             />
//             <input
//               type="number"
//               value={localFilters.priceRange[1]}
//               onChange={(e) => handlePriceChange(localFilters.priceRange[0], Number(e.target.value))}
//               max="1000"
//             />
//           </div>
//         </PriceRange>
//       </FilterSection>

//       <FilterSection>
//         <h3>Brands</h3>
//         <CheckboxGroup>
//           {brands.map(brand => (
//             <label key={brand}>
//               <input
//                 type="checkbox"
//                 checked={false} 
//                 onChange={() => {}} 
//               />
//               {brand}
//             </label>
//           ))}
//         </CheckboxGroup>
//       </FilterSection>

//       <ActiveFilters>
//         {Object.entries(localFilters).map(([key, value]) => {
//           if (!value || (Array.isArray(value) && !value.length)) return null;
//           return (
//             <FilterTag key={key}>
//               {key}: {Array.isArray(value) ? value.join('-') : value}
//               <button onClick={() => clearFilter(key)}>
//                 <X size={14} />
//               </button>
//             </FilterTag>
//           );
//         })}
//       </ActiveFilters>
//     </FiltersContainer>
//   );
// }

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  FiltersContainer, SearchBar, FilterSection, PriceRange, CheckboxGroup, ActiveFilters, FilterTag
} from '../../styles/productFilterStyle';

const categories = ['Seeds', 'Equipment', 'Fertilizers', 'Pesticides', 'Tools', 'Irrigation'];
const brands = ['AgriTech', 'FarmPro', 'GreenGrow', 'HarvestPlus', 'EarthCare'];

export default function ProductFilters() {
  const { state, dispatch } = useApp();
  const { filters } = state;
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: 'UPDATE_FILTERS', payload: localFilters });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [localFilters, dispatch]);

  const handleMultiSelect = (key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(prev[key]) ? (
        prev[key].includes(value)
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value]
      ) : [value]
    }));
  };  

  const clearAllFilters = () => {
    setLocalFilters({ search: '', category: [], priceRange: [0, 1000], brand: [] });
  };

  return (
    <FiltersContainer>
      <SearchBar>
        <Search size={20} />
        <input
          type="text"
          placeholder="Search products..."
          value={localFilters.search}
          onChange={(e) => setLocalFilters((prev) => ({ ...prev, search: e.target.value }))}
        />
      </SearchBar>

      <FilterSection>
        <h3>Categories</h3>
        <CheckboxGroup>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={localFilters.category.includes(category)}
                onChange={() => handleMultiSelect('category', category)}
              />
              {category}
            </label>
          ))}
        </CheckboxGroup>
      </FilterSection>

      <FilterSection>
        <h3>Brands</h3>
        <CheckboxGroup>
          {brands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={localFilters.brand?.includes(brand)}
                onChange={() => handleMultiSelect('brand', brand)}
              />
              {brand}
            </label>
          ))}
        </CheckboxGroup>
      </FilterSection>

      <ActiveFilters>
        {Object.entries(localFilters).map(([key, value]) =>
          value?.length ? (
            <FilterTag key={key}>
              {key}: {Array.isArray(value) ? value.join(', ') : value}
              <button onClick={() => setLocalFilters((prev) => ({ ...prev, [key]: [] }))}>
                <X size={14} />
              </button>
            </FilterTag>
          ) : null
        )}
      </ActiveFilters>

      <button onClick={clearAllFilters} className="text-sm text-red-500 mt-2">
        Clear All
      </button>
    </FiltersContainer>
  );
}
