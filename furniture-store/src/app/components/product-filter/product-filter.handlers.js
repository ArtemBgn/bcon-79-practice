import { renderFurnitures } from "../../core/render";
import { loadFurnitures } from "../product-card/product-card";

export async function onFilterClick(id) {
  const markup = await loadFurnitures(id);
  renderFurnitures(markup);
}
