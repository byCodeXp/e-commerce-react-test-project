import { useEffect } from 'react';
import { CardComponent } from '../../../../layout/Card';
import { FavouriteIcon } from '../../../../icons/favouriteIcon';
import { customerActionsInvoker } from '../../../../../features/customer/reducer/actionsInvoker';
import { useAppSelector } from '../../../../../store/hooks';

export function Catalog() {
    
    const favourites = useAppSelector((state) => state.customer.favourites);

    const products = useAppSelector((state) => state.customer.products);
    const status = useAppSelector((state) => state.customer.status);

    function handleClick(id: string) {
        if (favourites.includes(id)) {
            customerActionsInvoker.favouritesRemoveProduct(id);
        }
    }

    useEffect(() => {
        customerActionsInvoker.loadProductsAsync();
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
