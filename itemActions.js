import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_ITEMS_REQUEST' });
    axios
      .get(API_URL)
      .then((response) => {
        dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ITEMS_FAILURE', payload: error.message });
      });
  };
};
