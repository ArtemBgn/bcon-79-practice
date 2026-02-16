import { onFilterClick } from "../components/product-filter/product-filter.handlers";

export function renderCategories(markup) {
  const filterEl = document.querySelector(".js-products-filter");
  filterEl.insertAdjacentHTML("beforeend", markup);
  filterEl.addEventListener("click", event => {
    const curentEl = event.target.closest(".products-filter-btn");
    if (!curentEl) return;
    const id = curentEl.dataset.categoryId ?? "";
    onFilterClick(id);
  });
}
export function renderFurnitures(markup) {
  const productsList = document.querySelector(".js-products-list");
  productsList.innerHTML = markup;
}
