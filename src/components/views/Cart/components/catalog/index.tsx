import { useEffect } from 'react';
import { useAppSelector } from '../../../../../store/hooks';
import { CartIcon } from '../../../../icons/cartIcon';
import { CardComponent } from '../../../../layout/Card';
import { customerActionsInvoker } from '../../../../../features/customer/reducer/actionsInvoker';

export const Catalog = () => {
    const products = useAppSelector((state) => state.customer.products);
    const status = useAppSelector((state) => state.customer.status);
    const carts = useAppSelector((state) => state.customer.cart);

    const handleClick = (id: string) => {
        if (carts.includes(id)) {
            customerActionsInvoker.cartRemoveProduct(id);
        }
    };

    useEffect(() => {
        customerActionsInvoker.loadProductsAsync();
    }, []);

    if (status === 'loading') {
        return (
            <div className="d-flex align-items-center">
                <strong className="flex-grow-1">Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
            </div>
        );
    }

    return (
        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products
                .filter((element) => carts.includes(element.id))
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
