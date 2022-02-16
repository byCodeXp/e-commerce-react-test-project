import { useState, useEffect } from 'react';
import { productsApi } from '../../../../../api/services/productsApi';
import { removeProductFromCartAction } from '../../../../../features/account/reducer';
import { selectCartProducts } from '../../../../../features/account/reducer/selectors';
import { Product } from '../../../../../features/productType';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { CartIcon } from '../../../../icons/cartIcon';
import { CardComponent } from '../../../../layout/Card';

export const Catalog = () => {
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
                .filter((element) => cart.includes(element.id))
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
                                    <CartIcon />
                                </div>
                            }
                        />
                    </div>
                ))}
        </div>
    );
};
