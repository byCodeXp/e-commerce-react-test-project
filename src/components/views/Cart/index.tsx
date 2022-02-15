import { CatalogCard } from '../../layout/CatalogCard';
import { Header } from '../../layout/Header';

export function CartView() {
    return (
        <div>
            <Header title="Cart" description="" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {Array(16)
                            .fill(0)
                            .map((_, index) => (
                                <CatalogCard
                                    key={index}
                                    title="Product"
                                    picture="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    price={40}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
