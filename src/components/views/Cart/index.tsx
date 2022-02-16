import { Header } from '../../layout/Header';
import { Catalog } from './catalog';

export function CartView() {
    return (
        <div>
            <Header title="Cart" description="" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <Catalog />
                </div>
            </section>
        </div>
    );
}
