import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { catalogReducer } from '../features/catalog/reducer';
import { customerReducer } from '../features/customer/reducer';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        customer: customerReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
