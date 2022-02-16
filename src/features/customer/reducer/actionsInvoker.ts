import { bindActionCreators } from 'redux';
import { AppDispatch, store } from '../../../store';
import { loadProductsAsyncAction } from './actions';
import {
    cartAddProductAction,
    cartRemoveProductAction,
    comparesAddProductAction,
    comparesRemoveProductAction,
    favouritesAddProductAction,
    favouritesRemoveProductAction
} from '.';

export const cartAddProduct = (productId: string) =>
    (dispatch: AppDispatch) =>
        dispatch(cartAddProductAction(productId));

export const cartRemoveProduct = (productId: string) =>
    (dispatch: AppDispatch) =>
        dispatch(cartRemoveProductAction(productId));

export const favouritesAddProduct = (productId: string) =>
    (dispatch: AppDispatch) =>
        dispatch(favouritesAddProductAction(productId));

export const favouritesRemoveProduct = (productId: string) =>
    (dispatch: AppDispatch) =>
        dispatch(favouritesRemoveProductAction(productId));

export const comparesAddProduct = (productId: string) =>
    (dispatch: AppDispatch) => 
        dispatch(comparesAddProductAction(productId));

export const comparesRemoveProduct = (productId: string) =>
    (dispatch: AppDispatch) =>
        dispatch(comparesRemoveProductAction(productId));

export const loadProductsAsync = () =>
    (dispatch: AppDispatch) =>
        dispatch(loadProductsAsyncAction());

export const customerActionsInvoker = bindActionCreators(
    {
        cartAddProduct,
        cartRemoveProduct,

        favouritesAddProduct,
        favouritesRemoveProduct,

        comparesAddProduct,
        comparesRemoveProduct,

        loadProductsAsync
    },
    store.dispatch
);
