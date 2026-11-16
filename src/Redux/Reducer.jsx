import {
  ADD_POTION,
  DELETE_POTION,
  TOGGLE_FAVORITE,
  RESET_ATELIER,
  SET_CATEGORY_FILTER,
  SET_SEARCH,
  SET_SORT,
} from './Actions';

const initialPotions = [
  { id: 1, name: 'Potion de Soin Mineur', category: 'soin', rarity: 'commune', price: 50, favorite: false },
  { id: 2, name: "Élixir de Vision Arcane", category: 'magie', rarity: 'rare', price: 180, favorite: false },
  { id: 3, name: "Bouclier d'Astralée", category: 'protection', rarity: 'legendaire', price: 420, favorite: false },
];

export const initialState = {
  potions: initialPotions,
  filterCategory: 'all',
  search: '',
  sortBy: 'none',
};

const resetState = () => ({
  potions: initialPotions.map((p) => ({ ...p })),
  filterCategory: 'all',
  search: '',
  sortBy: 'none',
});

const reducer = (state = initialState, action) => {
  const type = action && action.type;
  switch (type) {
    case ADD_POTION:
    case 'ADD_POTION':
      {
        const p = action.payload || action.potion || action;
        const newPotion = {
          id: (p && p.id) || Date.now(),
          name: p && p.name,
          category: p && p.category,
          rarity: p && p.rarity,
          price: p && p.price,
          favorite: p && typeof p.favorite === 'boolean' ? p.favorite : false,
        };
        return { ...state, potions: [...state.potions, newPotion] };
      }
    case DELETE_POTION:
    case 'DELETE_POTION':
      {
        const id = (action.payload !== undefined ? action.payload : action.id);
        return { ...state, potions: state.potions.filter((p) => p.id !== id) };
      }
    case TOGGLE_FAVORITE:
    case 'TOGGLE_FAVORITE':
      {
        const id = (action.payload !== undefined ? action.payload : action.id);
        return {
          ...state,
          potions: state.potions.map((p) =>
            p.id === id ? { ...p, favorite: !p.favorite } : p
          ),
        };
      }
    case RESET_ATELIER:
    case 'RESET_ATELIER':
    case 'RESET':
    case 'RESET_POTIONS':
    case 'RESET_ATELIER_STATE':
      return resetState();
    case SET_CATEGORY_FILTER:
    case 'SET_CATEGORY_FILTER':
    case 'SET_FILTER':
    case 'FILTER_CATEGORY':
      return { ...state, filterCategory: action.payload !== undefined ? action.payload : action.category };
    case SET_SEARCH:
    case 'SET_SEARCH':
    case 'SEARCH':
      return { ...state, search: action.payload !== undefined ? action.payload : action.text };
    case SET_SORT:
    case 'SET_SORT':
    case 'SORT':
      return { ...state, sortBy: action.payload !== undefined ? action.payload : action.value };
    default:
      return state;
  }
};

export default reducer;