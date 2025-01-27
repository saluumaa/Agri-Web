export const Product = {
  id: '',
  name: '',
  description: '',
  price: 0,
  category: '',
  origin: '',
  isOrganic: false,
  images: [],
  specifications: {},
  stock: 0,
  rating: 0,
  reviews: 0
};

export const CartItem = {
  product: Product,
  quantity: 0
};

export const User = {
  id: '',
  name: '',
  email: '',
  role: 'user' // or 'admin'
};

export const FilterState = {
  category: '',
  priceRange: [0, 0],
  origin: '',
  isOrganic: null, 
  sortBy: 'price', 
  view: 'grid',
  search: '',
  page: 1
};
