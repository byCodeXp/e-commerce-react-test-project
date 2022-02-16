import { useEffect } from 'react';
import { catalogActionsInoker } from '../../../reducers/catalog/actionsInvoker';
import { Header } from '../../layout/Header';
import { Catalog } from './components/catalog';
import { Filter } from './components/filter';

export function HomeView() {

    useEffect(() => {

        (async () => {
            await catalogActionsInoker.getProductsAsync();
            await catalogActionsInoker.getBrandsAsync();
            await catalogActionsInoker.getColorsAsync();
            await catalogActionsInoker.getSurfacesAsync();

            await catalogActionsInoker.setFilterSurface('');
            await catalogActionsInoker.setFilterColor('');
            await catalogActionsInoker.setFilterBrand('');
        })()
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
