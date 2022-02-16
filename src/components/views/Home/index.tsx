import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { Header } from '../../layout/Header';
import { Catalog } from './components/catalog';
import { Filter } from './components/filter';
import {
    getBrandsAsyncAction,
    getColorsAsyncAction,
    getProductsAsyncAction,
    getSurfacesAsyncAction
} from '../../../features/catalog/reducer/actions';

export function HomeView() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductsAsyncAction()).then(() => {
            dispatch(getColorsAsyncAction()).then(() => {
                dispatch(getBrandsAsyncAction()).then(() => {
                    dispatch(getSurfacesAsyncAction());
                });
            });
        });

        // TODO: reset filters here
    }, []);

    return (
        <div>
            <Header title="Catalog" description="Robotic Vacuum Cleaner Shop" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <Filter />
                    <Catalog />
                </div>
            </section>
        </div>
    );
}
