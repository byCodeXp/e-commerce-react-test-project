import { setFilterColorAction, setFilterBrandAction, setFilterSurfaceAction } from '../../../../../reducers/catalog';
import { selectColors, selectBrands, selectSurfaces } from '../../../../../reducers/catalog/selectors';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { Select } from '../../../../base/select';

export function Filter() {
    const dispatch = useAppDispatch();

    const colors = useAppSelector(selectColors);
    const brands = useAppSelector(selectBrands);
    const surfaces = useAppSelector(selectSurfaces);

    const handleSelectColor = (color: string) => {
        dispatch(setFilterColorAction(color));
    };

    const handleSelectBrand = (brand: string) => {
        dispatch(setFilterBrandAction(brand));
    };

    const handleSelectSurface = (surface: string) => {
        dispatch(setFilterSurfaceAction(surface));
    };

    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <h6>Colors</h6>
                        <Select
                            defaultText="Open this select menu"
                            onSelect={handleSelectColor}
                            options={colors}
                        />
                    </div>
                    <div className="col-4">
                        <h6>Brands</h6>
                        <Select
                            defaultText="Open this select menu"
                            onSelect={handleSelectBrand}
                            options={brands}
                        />
                    </div>
                    <div className="col-4">
                        <h6>Surface</h6>
                        <Select
                            defaultText="Open this select menu"
                            onSelect={handleSelectSurface}
                            options={surfaces}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
