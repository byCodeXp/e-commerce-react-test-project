import { useAppSelector } from '../../../../../app/hooks';
import {
    selectFilterBrand,
    selectFilterColor,
    selectFilterSurface,
    selectProducts,
    selectStatus
} from '../../../../../features/catalog/reducer/selectors';
import { CatalogCard } from '../../../../layout/CatalogCard';

export function Catalog() {
    const status = useAppSelector(selectStatus);

    const products = useAppSelector(selectProducts);

    const filterColor = useAppSelector(selectFilterColor);
    const filterBrand = useAppSelector(selectFilterBrand);
    const filterSurface = useAppSelector(selectFilterSurface);

    const filter = ({
        color,
        brand,
        surface
    }: {
        color: string;
        brand: string;
        surface: string;
    }) => {
        if (filterBrand !== '') if (filterBrand !== brand) return false;

        if (filterColor !== '') if (filterColor !== color) return false;

        if (filterSurface !== '')
            if (!surface.includes(filterSurface)) return false;

        return true;
    };

    return status === 'loading' ? (
        <div className="d-flex align-items-center">
            <strong className="flex-grow-1">Loading...</strong>
            <div
                className="spinner-border ml-auto"
                role="status"
                aria-hidden="true"
            ></div>
        </div>
    ) : (
        <div className="row gx-3 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map(
                (product, index) =>
                    filter({ ...product }) && (
                        <CatalogCard
                            key={index}
                            title={product.name}
                            picture={product.picture}
                            price={product.price}
                        />
                    )
            )}
        </div>
    );
}
