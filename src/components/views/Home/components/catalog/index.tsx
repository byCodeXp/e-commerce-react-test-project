import { useAppSelector } from '../../../../../store/hooks';
import { CardComponent } from '../../../../layout/Card';
import { CartIcon } from '../../../../icons/cartIcon';
import { CompareIcon } from '../../../../icons/compareIcon';
import { FavouriteIcon } from '../../../../icons/favouriteIcon';
import { Loader } from '../../../../layout/Loader';
import { selectStatus, selectProducts, selectFilterColor, selectFilterBrand, selectFilterSurface } from '../../../../../reducers/catalog/selectors';
import { customerActionsInvoker } from '../../../../../reducers/customer/actionsInvoker';

export const Catalog = () => {
    const status = useAppSelector(selectStatus);

    const products = useAppSelector(selectProducts);

    const filterColor = useAppSelector(selectFilterColor);
    const filterBrand = useAppSelector(selectFilterBrand);
    const filterSurface = useAppSelector(selectFilterSurface);

    const cart = useAppSelector((state) => state.customer.cart);
    const favourites = useAppSelector((state) => state.customer.favourites);
    const compares = useAppSelector((state) => state.customer.compares);

    const handleClickCart = (id: string) => {
        if (cart.includes(id)) {
            customerActionsInvoker.cartRemoveProduct(id);
        } else {
            customerActionsInvoker.cartAddProduct(id);
        }
    };

    const handleClickFavourite = (id: string) => {
        if (favourites.includes(id)) {
            customerActionsInvoker.favouritesRemoveProduct(id);
        } else {
            customerActionsInvoker.favouritesAddProduct(id);
        }
    };

    const handleClickCompare = (id: string) => {
        if (compares.includes(id)) {
            customerActionsInvoker.comparesRemoveProduct(id);
        } else {
            customerActionsInvoker.comparesAddProduct(id);
        }
    };

    interface FilterProps {
        color: string;
        brand: string;
        surface: string;
    }

    const filterByProperties = ({ color, brand, surface }: FilterProps) => {
        if (filterBrand !== '')
            if (filterBrand !== brand)
                return false;

        if (filterColor !== '')
            if (filterColor !== color)
                return false;

        if (filterSurface !== '')
            if (!surface.includes(filterSurface))
                return false;

        return true;
    };

    if (status === 'loading') {
        return <Loader />;
    }

    return (
        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products
                .filter((element) => filterByProperties({ ...element }))
                .map((product, index) => (
                    <div className="col mb-5" key={index}>
                        <CardComponent
                            title={product.name}
                            picture={product.picture}
                            price={product.price}
                            extra={[
                                <div
                                    onClick={() => handleClickCart(product.id)}
                                    className={`btn ${
                                        cart.includes(product.id)
                                            ? 'btn-dark'
                                            : 'btn-outline-dark'
                                    } w-100`}
                                >
                                    <CartIcon />
                                </div>,
                                <div
                                    onClick={() => handleClickFavourite(product.id)}
                                    className={`btn ${
                                        favourites.includes(product.id)
                                            ? 'btn-dark'
                                            : 'btn-outline-dark'
                                    } w-100`}
                                >
                                    <FavouriteIcon />
                                </div>,
                                <div
                                    onClick={() => handleClickCompare(product.id)}
                                    className={`btn ${
                                        compares.includes(product.id)
                                            ? 'btn-dark'
                                            : 'btn-outline-dark'
                                    } w-100`}
                                >
                                    <CompareIcon />
                                </div>
                            ]}
                        />
                    </div>
                ))}
        </div>
    );
};
