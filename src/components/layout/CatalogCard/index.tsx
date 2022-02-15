import { CartIcon } from '../../icons/cartIcon';
import { CompareIcon } from '../../icons/compareIcon';
import { FavouriteIcon } from '../../icons/favouriteIcon';

interface CatalogCardProps {
    picture: string;
    title: string;
    price: number;
}

export function CatalogCard({ picture, title, price }: CatalogCardProps) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img
                    style={{ objectFit: 'contain', height: 200 }}
                    className="card-img-top bg-light"
                    src={picture}
                    alt={title}
                />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>${price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="d-flex text-center justify-content-between gap-2">
                        <div className="btn btn-outline-dark w-100">
                            <CartIcon />
                        </div>
                        <div className="btn btn-outline-dark w-100">
                            <FavouriteIcon />
                        </div>
                        <div className="btn btn-outline-dark w-100">
                            <CompareIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
