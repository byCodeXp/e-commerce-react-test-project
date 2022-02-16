import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../productType';
import { loadProductsAsyncAction } from './actions';

interface State {
    /**
     * List of product identifiers that have been added to the cart by the user
     */
    cart: Array<string>;

    /**
     * List of product identifiers that have been added to the favourites by the user
     */
    favourites: Array<string>;

    /**
     * List of product identifiers that have been added to the compares by the user
     */
    compares: Array<string>;

    /**
     * Temp list of products that data have been ussed to render cards
     */
    products: Array<Product>;

    status: 'idle' | 'loading' | 'failed';
}

const initialState: State = {
    cart: [],
    favourites: [],
    compares: [],

    products: [],
    status: 'idle'
};

const customerSlice = createSlice({
    name: 'CUSTOMER_SLICE',
    initialState,
    reducers: {
        /**
         * Add product id to cart list
         */
        cartAddProductAction(state, action: PayloadAction<string>) {
            const productId = action.payload;

            state.cart = [...state.cart, productId];
        },
        /**
         * Remove product id from cart
         */
        cartRemoveProductAction(state, action: PayloadAction<string>) {
            const productId = action.payload;

            const index = state.cart.findIndex((e) => e === productId);

            if (index !== -1) {
                state.cart = [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index + 1)
                ];
            }
        },
        /**
         * Add product id to favourites list
         */
        favouritesAddProductAction(state, action: PayloadAction<string>) {
            const productId = action.payload;

            state.favourites = [...state.favourites, productId];
        },
        /**
         * Remove product id from favourites
         */
        favouritesRemoveProductAction(state, action: PayloadAction<string>) {
            const productId = action.payload;

            const index = state.favourites.findIndex((e) => e === productId);

            if (index !== -1) {
                state.favourites = [
                    ...state.favourites.slice(0, index),
                    ...state.favourites.slice(index + 1)
                ];
            }
        },
        /**
         * Add product id to compares list
         */
        comparesAddProductAction(state, action: PayloadAction<string>) {
            const productId = action.payload;

            state.compares = [...state.compares, productId];
        },
        /**
         * Remove product id from compares
         */
        comparesRemoveProductAction(state, action: PayloadAction<string>) {
            const productId = action.payload;

            const index = state.compares.findIndex((e) => e === productId);

            if (index !== -1) {
                state.compares = [
                    ...state.compares.slice(0, index),
                    ...state.compares.slice(index + 1)
                ];
            }
        }
    },
    extraReducers: {
        [loadProductsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [loadProductsAsyncAction.fulfilled.type]: (state, action: PayloadAction<Product[]>) => {
            state.status = 'idle';
            state.products = action.payload;
        },
        [loadProductsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        },
    }
});

export const customerReducer = customerSlice.reducer;

export const {
    cartAddProductAction,
    cartRemoveProductAction,
    favouritesAddProductAction,
    favouritesRemoveProductAction,
    comparesAddProductAction,
    comparesRemoveProductAction
    
} = customerSlice.actions;
