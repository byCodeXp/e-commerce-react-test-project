import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsApi } from '../../../api/services/productsApi';

export const loadProductsAsyncAction = createAsyncThunk(
    'loadProductsAsyncAction',
    async (_, thunkApi) => {
        try {
            const response = await productsApi.getProducts();

            if (response.status !== 200) {
                thunkApi.rejectWithValue('Something went wrong !');
            }

            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue('Something went wrong !');
        }
    }
);
