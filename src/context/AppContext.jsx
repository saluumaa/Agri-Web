import { createContext, useContext, useReducer } from 'react';

const initialState = {
  cart: [],
  user: null,
  filters: {
    category: '',
    priceRange: [0, 1000],
    origin: '',
    isOrganic: null,
    sortBy: 'popularity',
    view: 'grid',
    search: '',
    page: 1,
  },
  theme: 'light',
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
