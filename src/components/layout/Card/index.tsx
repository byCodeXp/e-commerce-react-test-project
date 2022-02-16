import { ReactNode } from 'react';

interface Props {
    title: string;
    picture: string;
    price: number;
    extra?: ReactNode;
}

export const CardComponent = ({ title, picture, price, extra }: Props) => {
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
                <div className="d-flex text-center justify-content-between gap-2">{extra}</div>
            </div>
        </div>
    );
};
