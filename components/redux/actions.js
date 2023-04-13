import { fetchItems } from '../swapi.js';

// Define action types
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
export const UPDATE_ITEMS_SENT = 'UPDATE_ITEMS_SENT';
export const UPDATE_ITEMS_SUCCESS = 'UPDATE_ITEMS_SUCCESS';
export const UPDATE_ITEMS_FAIL = 'UPDATE_ITEMS_FAIL';

// Define action creators
export const updateCategory = (category) => ({
  type: UPDATE_CATEGORY,
  payload: category,
});

export const updateLanguage = (language) => ({
  type: UPDATE_LANGUAGE,
  payload: language,
});

// Define async action creators
export const updateItems = (search, category, language, page) => async (
  dispatch
) => {
  dispatch({ type: UPDATE_ITEMS_SENT });
  try {
    const items = await fetchItems(search, category, language, page);
    dispatch({
      type: UPDATE_ITEMS_SUCCESS,
      payload: { items: items, page: page, search: search },
    });
  } catch (err) {
    const errMessage = err.message;
    dispatch({
      type: UPDATE_ITEMS_FAIL,
      payload: { items: [], page: page, search: search, error: errMessage },
    });
  }
};
