import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { accountReducer } from '../features/account/reducer';
import { catalogReducer } from '../features/catalog/reducer';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        account: accountReducer,
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