import { initCategories, initBooks } from './utils/init';
import { fetchBooksByCategory } from './services/fetchBooksByCategory';
import './components/categoryFilters';
import './components/slider';
import './components/modal';
import './services/fetchBooksByCategory';

initCategories();
initBooks();
