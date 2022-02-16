import { createAsyncThunk } from '@reduxjs/toolkit';
import { brandsApi } from '../../api/services/brandsApi';
import { colorsApi } from '../../api/services/colorsApi';
import { productsApi } from '../../api/services/productsApi';
import { surfacesApi } from '../../api/services/surfacesApi';
import { Product } from '../productType';

export const getProductsAsyncAction = createAsyncThunk<Product[]>(
    'GET_PRODUCTS_ACTION',
    async (_, thunkApi) => {
        const failedResult = thunkApi.rejectWithValue('Something went wrong');

        try {
            const response = await productsApi.getProducts();
            if (response.status !== 200) {
                return failedResult;
            }
            return response.data;
        } catch (error) {
            return failedResult;
        }
    }
);

export const getColorsAsyncAction = createAsyncThunk<string[]>(
    'GET_COLORS_ACTION',
    async (_, thunkApi) => {
        const failedResult = thunkApi.rejectWithValue('Something went wrong');
        try {
            const response = await colorsApi.getColors();
            if (response.status !== 200) {
                return failedResult;
            }
            return response.data;
        } catch (error) {
            return failedResult;
        }
    }
);

export const getBrandsAsyncAction = createAsyncThunk<string[]>(
    'GET_BRANDS_ACTION',
    async (_, thunkApi) => {
        const failedResult = thunkApi.rejectWithValue('Something went wrong');
        try {
            const response = await brandsApi.getBrands();
            if (response.status !== 200) {
                return failedResult;
            }
            return response.data;
        } catch (error) {
            return failedResult;
        }
    }
);

export const getSurfacesAsyncAction = createAsyncThunk<string[]>(
    'GET_SURFACES_ACTION',
    async (_, thunkApi) => {
        const failedResult = thunkApi.rejectWithValue('Something went wrong');
        try {
            const response = await surfacesApi.getSurfaces();
            if (response.status !== 200) {
                return failedResult;
            }
            return response.data;
        } catch (error) {
            return failedResult;
        }
    }
);
