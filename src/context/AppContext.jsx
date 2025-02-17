import { createContext, useContext, useReducer } from 'react';

const initialState = {
  filters: {
    category: [],
    brand: [],
    priceRange: [0, 1000],
    origin: '',
    isOrganic: null,
    sortBy: 'popularity',
    view: 'grid',
    search: '',
    page: 1,
  },
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function appReducer(state, action) {
  switch (action.type) {
    
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
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
