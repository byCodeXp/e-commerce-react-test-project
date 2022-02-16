import { removeProductFromFavouritesAction } from '../../../../features/account/reducer';
import { selectFavouritesProducts } from '../../../../features/account/reducer/selectors';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { CatalogCard } from '../card';
import { useEffect, useState } from 'react';
import { Product } from '../../../../features/productType';
import { productsApi } from '../../../../api/services/productsApi';

export function Catalog() {
    const dispatch = useAppDispatch();

    const [status, setStatus] = useState<'idle' | 'loading'>('idle');
    const [products, setProducts] = useState<Array<Product>>([]);

    const favourites = useAppSelector(selectFavouritesProducts);

    function handleClick(id: string) {
        if (favourites.includes(id)) {
            dispatch(removeProductFromFavouritesAction(id));
        }
    }

    useEffect(() => {
        setStatus('loading');
        productsApi.getProducts().then((response) => {
            setProducts(response.data);
            setStatus('idle');
        });
    }, []);

    function filter(id: string) {
        if (favourites.includes(id))
            return true;

        return false;
    }

    return status === 'loading' ? (
        <div className="d-flex align-items-center">
            <strong className="flex-grow-1">Loading...</strong>
            <div
                className="spinner-border ml-auto"
                role="status"
                aria-hidden="true"
            ></div>
        </div>
    ) : (
        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map(
                (product, index) =>
                    filter(product.id) && (
                        <div className="col mb-5" key={index}>
                            <CatalogCard
                                title={product.name}
                                picture={product.picture}
                                price={product.price}
                                inFavourites={favourites.includes(product.id)}
                                onClick={() => handleClick(product.id)}
                            />
                        </div>
                    )
            )}
        </div>
    );
}
