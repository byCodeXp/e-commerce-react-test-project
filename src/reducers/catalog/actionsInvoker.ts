import { bindActionCreators } from 'redux';
import { setFilterBrandAction, setFilterColorAction, setFilterSurfaceAction } from '.';
import { AppDispatch, store } from '../../store';
import { getBrandsAsyncAction, getColorsAsyncAction, getProductsAsyncAction, getSurfacesAsyncAction } from './actions';

const setFilterBrand = (brand: string) =>
   (dispatch: AppDispatch) =>
      dispatch(setFilterBrandAction(brand));

const setFilterColor = (color: string) =>
   (dispatch: AppDispatch) =>
      dispatch(setFilterColorAction(color));

const setFilterSurface = (surface: string) =>
   (dispatch: AppDispatch) =>
      dispatch(setFilterSurfaceAction(surface));

const getProductsAsync = () =>
      (dispatch: AppDispatch) =>
         dispatch(getProductsAsyncAction());

const getBrandsAsync = () =>
   (dispatch: AppDispatch) =>
      dispatch(getBrandsAsyncAction());

const getColorsAsync = () =>
   (dispatch: AppDispatch) =>
      dispatch(getColorsAsyncAction());

const getSurfacesAsync = () =>
   (dispatch: AppDispatch) =>
      dispatch(getSurfacesAsyncAction());

export const catalogActionsInoker = bindActionCreators(
   {
      setFilterBrand,
      setFilterColor,
      setFilterSurface,
      getProductsAsync,
      getBrandsAsync,
      getColorsAsync,
      getSurfacesAsync
   },
   store.dispatch
);
