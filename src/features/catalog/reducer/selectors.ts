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

export function selectSurfaces(state: RootState) {
   return state.catalog.surfaces;
}

export function selectFilterBrand(state: RootState) {
   return state.catalog.filterBrand;
}

export function selectFilterColor(state: RootState) {
   return state.catalog.filterColor;
}

export function selectFilterSurface(state: RootState) {
   return state.catalog.filterSurface;
}

export function selectStatus(state: RootState) {
   return state.catalog.status;
}