import { useEffect, useState } from 'react';
import { removeProductFromFavouritesAction } from '../../../../../features/account/reducer';
import { selectFavouritesProducts } from '../../../../../features/account/reducer/selectors';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { Product } from '../../../../../features/productType';
import { productsApi } from '../../../../../api/services/productsApi';
import { CardComponent } from '../../../../layout/Card';
import { FavouriteIcon } from '../../../../icons/favouriteIcon';

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

    if (status === 'loading') {
        return (
            <div className="d-flex align-items-center">
                <strong className="flex-grow-1">Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        );
    }

    return (
        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products
                .filter((element) => favourites.includes(element.id))
                .map((product, index) => (
                    <div className="col mb-5" key={index}>
                        <CardComponent
                            title={product.name}
                            picture={product.picture}
                            price={product.price}
                            extra={
                                <div
                                    onClick={() => handleClick(product.id)}
                                    className="btn btn-outline-danger w-100"
                                >
                                    <FavouriteIcon />
                                </div>
                            }
                        />
                    </div>
                ))}
        </div>
    );
}
