import { CartIcon } from '../../../icons/cartIcon';

interface CatalogCardProps {
    picture: string;
    title: string;
    price: number;
    onClick: () => void;
}

export function CatalogCard({
    picture,
    title,
    price,
    onClick
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
                        onClick={onClick}
                        className="btn btn-outline-danger w-100"
                    >
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
