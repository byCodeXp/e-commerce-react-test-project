import { Header } from '../../layout/Header';
import { Catalog } from './components/catalog';

export function FavouritesView() {
    return (
        <div>
            <Header title="Favourites" description="" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <Catalog />
                </div>
            </section>
        </div>
    );
}
