import { combineReducers } from 'redux';

const itemReducer = (state = { items: [], loading: false, error: '' }, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_ITEMS_SUCCESS':
      return { ...state, items: action.payload, loading: false, error: '' };
    case 'FETCH_ITEMS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
