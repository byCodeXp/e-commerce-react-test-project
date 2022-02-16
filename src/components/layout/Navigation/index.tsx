import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { selectCartProducts } from '../../../features/account/reducer/selectors';
import { routerRoutes } from '../../../router-routes';

export function Navigation() {

    const cart = useAppSelector(selectCartProducts);

    const countProductsInCart = cart.length;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to={`/${routerRoutes.Home}`}>
                    Shop
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                to={`/${routerRoutes.Home}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={`/${routerRoutes.Favourites}`}
                            >
                                Favourites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={`/${routerRoutes.Compare}`}
                            >
                                Compare
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to={`/${routerRoutes.Cart}`}
                        className="btn btn-outline-dark"
                        type="submit"
                    >
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">
                            {countProductsInCart}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
