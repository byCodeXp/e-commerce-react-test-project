import { useEffect } from 'react';
import { catalogActionsInoker } from '../../../reducers/catalog/actionsInvoker';
import { Header } from '../../layout/Header';
import { Catalog } from './components/catalog';
import { Filter } from './components/filter';

export function HomeView() {

    useEffect(() => {

        // Load products
        catalogActionsInoker.getProductsAsync();
        // Load brands
        catalogActionsInoker.getBrandsAsync();
        // Load colors
        catalogActionsInoker.getColorsAsync();
        // Load surfaces
        catalogActionsInoker.getSurfacesAsync();

        // Reset filters
        catalogActionsInoker.setFilterSurface('');
        catalogActionsInoker.setFilterColor('');
        catalogActionsInoker.setFilterBrand('');
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
