import { loadFurnitures } from "./components/product-card/product-card";
import { loadCategories } from "./components/product-filter/product-filter";
import { renderCategories, renderFurnitures } from "./core/render";

loadCategories().then(renderCategories);
loadFurnitures().then(renderFurnitures);
