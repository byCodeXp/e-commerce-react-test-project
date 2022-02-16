import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsApi } from '../../api/services/productsApi';

export const loadProductsAsyncAction = createAsyncThunk(
    'loadProductsAsyncAction',
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
