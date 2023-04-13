import { combineReducers } from 'redux';
import {
  UPDATE_CATEGORY,
  UPDATE_LANGUAGE,
  UPDATE_ITEMS_SENT,
  UPDATE_ITEMS_SUCCESS,
  UPDATE_ITEMS_FAIL,
} from './actions.js';

const merge = (prev, next) => Object.assign({}, prev, next);

const updateCategory = (state = { category: 'people' }, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return merge(state, { category: action.payload });
    default:
      return state;
  }
};

const updateLanguage = (state = { language: 'English' }, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return merge(state, { language: action.payload });
    default:
      return state;
  }
};

const updateItems = (
  state = { items: [], search: '', language: 'English', page: 1 },
  action
) => {
  switch (action.type) {
    case UPDATE_ITEMS_SUCCESS:
      if (action.payload.page === 1) {
        return merge(state, {
          items: [].concat(action.payload.items),
          search: action.payload.search,
          page: action.payload.page,
        });
      } else {
        return merge(state, {
          items: state.items.concat(action.payload.items),
          search: action.payload.search,
          page: action.payload.page,
        });
      }
    case UPDATE_ITEMS_FAIL:
      return merge(state, {
        items: state.items.concat(action.payload.items),
        search: action.payload.search,
        page: action.payload.page,
        error: action.payload.error,
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  category: updateCategory,
  language: updateLanguage,
  items: updateItems,
  page: updateItems,
  search: updateItems,
});

export default reducer;
