import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getBrandsAsyncAction, getColorsAsyncAction, getProductsAsyncAction } from '../../../features/catalog/reducer/actions';
import { selectBrands, selectColors, selectProducts } from '../../../features/catalog/reducer/selectors';
import { CatalogCard } from '../../layout/CatalogCard';
import { Header } from '../../layout/Header';

export function HomeView() {

    const dispatch = useAppDispatch();

    const products = useAppSelector(selectProducts);
    const colors = useAppSelector(selectColors);
    const brands = useAppSelector(selectBrands);
    
    useEffect(() => {

        dispatch(getProductsAsyncAction()).then(() => {
            dispatch(getColorsAsyncAction()).then(() => {
                dispatch(getBrandsAsyncAction());
            });
        });

    }, []);

    return (
        <div>
            <Header title="Catalog" description="Robotic Vacuum Cleaner Shop" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products.map((product, index) => (
                            <CatalogCard
                                key={index}
                                title={product.name}
                                picture={product.picture}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
