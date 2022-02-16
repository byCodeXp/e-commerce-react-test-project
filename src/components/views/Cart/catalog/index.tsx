import { useState, useEffect } from 'react';
import { productsApi } from '../../../../api/services/productsApi';
import { removeProductFromCartAction } from '../../../../features/account/reducer';
import { selectCartProducts } from '../../../../features/account/reducer/selectors';
import { Product } from '../../../../features/productType';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { CatalogCard } from '../card';

export function Catalog() {
    const dispatch = useAppDispatch();

    const [status, setStatus] = useState<'idle' | 'loading'>('idle');
    const [products, setProducts] = useState<Array<Product>>([]);

    const cart = useAppSelector(selectCartProducts);

    function handleClick(id: string) {
        if (cart.includes(id)) {
            dispatch(removeProductFromCartAction(id));
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
        if (cart.includes(id)) {
            return true;
        }

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
                                onClick={() => handleClick(product.id)}
                            />
                        </div>
                    )
            )}
        </div>
    );
}
