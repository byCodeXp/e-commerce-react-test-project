import { createAsyncThunk } from '@reduxjs/toolkit';
import { brandsApi } from '../../../api/services/brandsApi';
import { colorsApi } from '../../../api/services/colorsApi';
import { productsApi } from '../../../api/services/productsApi';
import { surfacesApi } from '../../../api/services/surfacesApi';
import { Product } from '../../productType';

export const getProductsAsyncAction = createAsyncThunk<Product[]>(
    'GET_PRODUCTS_ACTION',
    async (_, thunkApi) => {
        try {
            const response = await productsApi.getProducts();
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(
                'Something went wrong, please try again !'
            );
        }
    }
);

export const getColorsAsyncAction = createAsyncThunk<string[]>(
    'GET_COLORS_ACTION',
    async (_, thunkApi) => {
        try {
            const response = await colorsApi.getColors();
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(
                'Something went wrong, please try again !'
            );
        }
    }
);

export const getBrandsAsyncAction = createAsyncThunk<string[]>(
    'GET_BRANDS_ACTION',
    async (_, thunkApi) => {
        try {
            const response = await brandsApi.getBrands();
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(
                'Something went wrong, please try again !'
            );
        }
    }
);

export const getSurfacesAsyncAction = createAsyncThunk<string[]>(
    'GET_SURFACES_ACTION',
    async (_, thunkApi) => {
        try {
            const response = await surfacesApi.getSurfaces();
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(
                'Something went wrong, please try again !'
            );
        }
    }
);
