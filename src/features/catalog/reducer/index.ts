import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../productType';
import {
    getBrandsAsyncAction,
    getColorsAsyncAction,
    getProductsAsyncAction,
    getSurfacesAsyncAction
} from './actions';

interface State {
    products: Array<Product>;
    colors: Array<string>;
    brands: Array<string>;
    surfaces: Array<string>;

    filterColor: string;
    filterBrand: string;
    filterSurface: string;

    status: 'idle' | 'loading' | 'failed';
}

const initialState: State = {

    products: [],
    colors: [],
    brands: [],
    surfaces: [],

    filterColor: '',
    filterBrand: '',
    filterSurface: '',

    status: 'idle'
};

const catalogSlice = createSlice({
    name: 'CATALOG_SLICE',
    initialState,
    reducers: {
        setFilterColor(state, { payload }: PayloadAction<string>) {
            const index = state.colors.findIndex((i) => i === payload);

            if (index === -1) {
                state.filterColor = '';
            } else {
                state.filterColor = state.colors[index];
            }
        },
        setFilterBrand(state, { payload }: PayloadAction<string>) {
            const index = state.brands.findIndex((i) => i === payload);

            if (index === -1) {
                state.filterBrand = '';
            } else {
                state.filterBrand = state.brands[index];
            }
        },
        setFilterSurface(state, { payload }: PayloadAction<string>) {
            const index = state.surfaces.findIndex((i) => i === payload);

            if (index === -1) {
                state.filterSurface = '';
            } else {
                state.filterSurface = state.surfaces[index];
            }
        }
    },
    extraReducers: {
        // Get products
        [getProductsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getProductsAsyncAction.fulfilled.type]: (
            state,
            { payload }: PayloadAction<Product[]>
        ) => {
            state.status = 'idle';
            state.products = payload;
        },
        [getProductsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        },
        // Get brands
        [getBrandsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getBrandsAsyncAction.fulfilled.type]: (
            state,
            { payload }: PayloadAction<string[]>
        ) => {
            state.status = 'idle';
            state.brands = payload;
        },
        [getBrandsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        },
        // Get colors
        [getColorsAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getColorsAsyncAction.fulfilled.type]: (
            state,
            { payload }: PayloadAction<string[]>
        ) => {
            state.status = 'idle';
            state.colors = payload;
        },
        [getColorsAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        },
        // Get surfaces
        [getSurfacesAsyncAction.pending.type]: (state) => {
            state.status = 'loading';
        },
        [getSurfacesAsyncAction.fulfilled.type]: (
            state,
            { payload }: PayloadAction<string[]>
        ) => {
            state.status = 'idle';
            state.surfaces = payload;
        },
        [getSurfacesAsyncAction.rejected.type]: (state) => {
            state.status = 'failed';
        }
    }
});

export const catalogReducer = catalogSlice.reducer;
export const { setFilterColor, setFilterBrand, setFilterSurface } = catalogSlice.actions;
