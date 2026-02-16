import axios from 'axios';
import './config';

export function fetchBooksByCategory(categoryName = '') {
  const endPoint = categoryName === '' ? '/top-books' : '/category';
  return axios
    .get(endPoint, {
      params: {
        category: categoryName,
      },
    })
    .then(response => response.data);
}
