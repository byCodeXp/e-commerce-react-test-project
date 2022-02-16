import { CartIcon } from '../../../../icons/cartIcon';
import { CompareIcon } from '../../../../icons/compareIcon';
import { FavouriteIcon } from '../../../../icons/favouriteIcon';

interface CatalogCardProps {
    picture: string;
    title: string;
    price: number;
    inCart: boolean;
    inFavourites: boolean;
    inCompares: boolean;
    onCartClick: () => void;
    onFavouriteClick: () => void;
    onCompareClick: () => void;
}

export function CatalogCard({
    picture,
    title,
    price,
    inCart,
    inFavourites,
    inCompares,
    onCartClick,
    onFavouriteClick,
    onCompareClick
}: CatalogCardProps) {
    return (
        <div className="card h-100">
            <img
                style={{ objectFit: 'contain', height: 200 }}
                className="card-img-top bg-light"
                src={picture}
                alt={title}
            />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5>{title}</h5>${price}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="d-flex text-center justify-content-between gap-2">
                    <div
                        onClick={onCartClick}
                        className={`btn ${
                            inCart ? 'btn-dark' : 'btn-outline-dark'
                        } w-100`}
                    >
                        <CartIcon />
                    </div>
                    <div
                        onClick={onFavouriteClick}
                        className={`btn ${
                            inFavourites ? 'btn-dark' : 'btn-outline-dark'
                        } w-100`}
                    >
                        <FavouriteIcon />
                    </div>
                    <div
                        onClick={onCompareClick}
                        className={`btn ${
                            inCompares ? 'btn-dark' : 'btn-outline-dark'
                        } w-100`}
                    >
                        <CompareIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
