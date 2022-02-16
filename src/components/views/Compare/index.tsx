import { useEffect, useState } from 'react';
import { productsApi } from '../../../api/services/productsApi';
import { removeProductFromComparesAction } from '../../../features/account/reducer';
import { selectComparesProducts } from '../../../features/account/reducer/selectors';
import { Product } from '../../../features/productType';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { CompareIcon } from '../../icons/compareIcon';
import { Header } from '../../layout/Header';

export function CompareView() {
    const dispatch = useAppDispatch();

    const compares = useAppSelector(selectComparesProducts);

    const [status, setStatus] = useState<'idle' | 'loading'>('idle');
    const [products, setProducts] = useState<Array<Product>>([]);

    function handleClick(id: string) {
        if (compares.includes(id)) {
            dispatch(removeProductFromComparesAction(id));
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
        if (compares.includes(id)) return true;

        return false;
    }

    return (
        <div>
            <Header title="Compare" description="" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {status === 'loading' ? (
                        <div className="d-flex align-items-center">
                            <strong className="flex-grow-1">Loading...</strong>
                            <div
                                className="spinner-border ml-auto"
                                role="status"
                                aria-hidden="true"
                            ></div>
                        </div>
                    ) : (
                        compares.length ? (
                            <table className="custom-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Color</th>
                                        <th>Surface</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(
                                        (product, index) =>
                                            filter(product.id) && (
                                                <tr key={index}>
                                                    <td>{product.name}</td>
                                                    <td>{product.color}</td>
                                                    <td>{product.surface}</td>
                                                    <td>{product.brand}</td>
                                                    <td>${product.price}</td>
                                                    <td>
                                                        <div
                                                            onClick={() =>
                                                                handleClick(
                                                                    product.id
                                                                )
                                                            }
                                                            className="btn btn-outline-danger"
                                                        >
                                                            <CompareIcon />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                    )}
                                </tbody>
                            </table>
                        ) : ''
                    )}
                </div>
            </section>
        </div>
    );
}
