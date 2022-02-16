import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    cart: Array<string>;
    favourites: Array<string>;
    compares: Array<string>;
}

const initialState: State = {
    cart: [],
    favourites: [],
    compares: []
};

const accountSlice = createSlice({
    name: 'ACCOUNT_SLICE',
    initialState,
    reducers: {
        addProductToCartAction(state, { payload }: PayloadAction<string>) {
            state.cart = [...state.cart, payload];
        },
        addProductToFavouritesAction(
            state,
            { payload }: PayloadAction<string>
        ) {
            state.favourites = [...state.favourites, payload];
        },
        addProductToComparesAction(state, { payload }: PayloadAction<string>) {
            state.compares = [...state.compares, payload];
        },
        removeProductFromCartAction(state, { payload }: PayloadAction<string>) {
            const id = payload;

            const index = state.cart.findIndex((i) => i === id);

            if (index !== -1) {
                state.cart = [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index + 1)
                ];
            }
        },
        removeProductFromFavouritesAction(
            state,
            { payload }: PayloadAction<string>
        ) {
            const id = payload;

            const index = state.favourites.findIndex((i) => i === id);

            if (index !== -1) {
                state.favourites = [
                    ...state.favourites.slice(0, index),
                    ...state.favourites.slice(index + 1)
                ];
            }
        },
        removeProductFromComparesAction(
            state,
            { payload }: PayloadAction<string>
        ) {
            const id = payload;

            const index = state.compares.findIndex((i) => i === id);

            if (index !== -1) {
                state.compares = [
                    ...state.compares.slice(0, index),
                    ...state.compares.slice(index + 1)
                ];
            }
        }
    }
});

export const accountReducer = accountSlice.reducer;
export const {
    addProductToCartAction,
    addProductToFavouritesAction,
    addProductToComparesAction,
    removeProductFromCartAction,
    removeProductFromFavouritesAction,
    removeProductFromComparesAction
} = accountSlice.actions;
