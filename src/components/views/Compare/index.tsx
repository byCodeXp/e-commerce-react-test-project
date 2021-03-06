import { useEffect } from 'react';
import { customerActionsInvoker } from '../../../reducers/customer/actionsInvoker';
import { useAppSelector } from '../../../store/hooks';
import { CompareIcon } from '../../icons/compareIcon';
import { Header } from '../../layout/Header';
import { Loader } from '../../layout/Loader';

export const CompareView = () => {
    const compares = useAppSelector((state) => state.customer.compares);

    const products = useAppSelector((state) => state.customer.products);
    const status = useAppSelector((state) => state.customer.status);

    const handleClick = (id: string) => {
        if (compares.includes(id)) {
            customerActionsInvoker.comparesRemoveProduct(id);
        }
    };

    useEffect(() => {
        customerActionsInvoker.loadProductsAsync();
    }, []);

    return (
        <div>
            <Header title="Compare" description="" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {status === 'loading' ? (
                        <Loader />
                    ) : compares.length ? (
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
                                {products
                                    .filter((element) => compares.includes(element.id))
                                    .map((product, index) => (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.color}</td>
                                            <td>{product.surface}</td>
                                            <td>{product.brand}</td>
                                            <td>${product.price}</td>
                                            <td>
                                                <div
                                                    onClick={() => handleClick(product.id)}
                                                    className="btn btn-outline-danger"
                                                >
                                                    <CompareIcon />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    ) : (
                        ''
                    )}
                </div>
            </section>
        </div>
    );
};
