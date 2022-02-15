import { RootState } from "../../../app/store";

export function selectProducts(state: RootState) {
   return state.catalog.products;
}

export function selectColors(state: RootState) {
   return state.catalog.colors;
}

export function selectBrands(state: RootState) {
   return state.catalog.brands;
}

export function selectStatus(state: RootState) {
   return state.catalog.status;
}