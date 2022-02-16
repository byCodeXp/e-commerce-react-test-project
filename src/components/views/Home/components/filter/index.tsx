import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {
    setFilterBrand,
    setFilterColor,
    setFilterSurface
} from '../../../../../features/catalog/reducer';
import {
    selectColors,
    selectBrands,
    selectSurfaces
} from '../../../../../features/catalog/reducer/selectors';

export function Filter() {
    const dispatch = useAppDispatch();

    const colors = useAppSelector(selectColors);
    const brands = useAppSelector(selectBrands);
    const surfaces = useAppSelector(selectSurfaces);

    const handleSelectColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const color = event.target.value;
        dispatch(setFilterColor(color));
    };

    const handleSelectBrand = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const brand = event.target.value;
        dispatch(setFilterBrand(brand));
    };

    const handleSelectSurface = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const surface = event.target.value;
        dispatch(setFilterSurface(surface));
    };

    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <h6>Colors</h6>
                        <select
                            defaultValue=""
                            className="form-select"
                            onChange={handleSelectColor}
                        >
                            <option value="">Open this select menu</option>
                            {colors.map((color, index) => (
                                <option key={index} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-4">
                        <h6>Brands</h6>
                        <select
                            defaultValue=""
                            className="form-select"
                            onChange={handleSelectBrand}
                        >
                            <option value="">Open this select menu</option>
                            {brands.map((brand, index) => (
                                <option key={index} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-4">
                        <h6>Surface</h6>
                        <select
                            className="form-select"
                            onChange={handleSelectSurface}
                        >
                            <option value="">Open this select menu</option>
                            {surfaces.map((surface, index) => (
                                <option key={index} value={surface}>
                                    {surface}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
