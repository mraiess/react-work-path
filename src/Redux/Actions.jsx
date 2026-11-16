export const ADD_POTION = 'ADD_POTION';
export const DELETE_POTION = 'DELETE_POTION';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const RESET_ATELIER = 'RESET_ATELIER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';

export const addPotion = (potion) => ({ type: ADD_POTION, payload: potion });
export const deletePotion = (id) => ({ type: DELETE_POTION, payload: id });
export const toggleFavorite = (id) => ({ type: TOGGLE_FAVORITE, payload: id });
export const resetAtelier = () => ({ type: RESET_ATELIER });
export const setCategoryFilter = (category) => ({ type: SET_CATEGORY_FILTER, payload: category });
export const setSearch = (text) => ({ type: SET_SEARCH, payload: text });
export const setSort = (value) => ({ type: SET_SORT, payload: value });