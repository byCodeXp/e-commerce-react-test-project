import { RootState } from "../../../app/store";

export function selectCartProducts(state: RootState) {
   return state.account.cart;
}

export function selectFavouritesProducts(state: RootState) {
   return state.account.favourites;
}

export function selectComparesProducts(state: RootState) {
   return state.account.compares;
}