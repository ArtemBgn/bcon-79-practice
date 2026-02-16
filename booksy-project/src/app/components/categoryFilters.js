import { renderBooks } from '../render/books';
import { fetchBooksByCategory } from '../services/fetchBooksByCategory';
import refs from '../utils/refs';

refs.categoryList.addEventListener('click', onCategoryClick);

function onCategoryClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  //   console.log(event.target);
  const categoryName = event.target.dataset.category;
  //   console.log('🚀 ~ onCategoryClick ~ categoryName:', categoryName);
  fetchBooksByCategory(categoryName).then(books => {
    const isAll = categoryName === '' ? true : false;
    renderBooks(books, refs.booksList, isAll);
  });
}
