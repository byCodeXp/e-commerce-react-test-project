import { CatalogCard } from '../../layout/CatalogCard';
import { Header } from '../../layout/Header';

export function HomeView() {
    return (
        <div>
            <Header title="Catalog" description="Robotic Vacuum Cleaner Shop" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {Array(16)
                            .fill(0)
                            .map((_, index) => (
                                <CatalogCard
                                    key={index}
                                    title="Robot Vacuum Cleaner"
                                    picture="https://www.mimarket.store/wp-content/webp-express/webp-images/uploads/2021/04/89d7891f875d11e991661831bf4d36b6_a96fbba8b8d111eaa05e503eaaa071e8.png.webp"
                                    price={1000}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
