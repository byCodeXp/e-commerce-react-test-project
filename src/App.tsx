import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { CartView } from './components/views/Cart';
import { CompareView } from './components/views/Compare';
import { FavouritesView } from './components/views/Favourites';
import { HomeView } from './components/views/Home';
import { customerActionsInvoker } from './reducers/customer/actionsInvoker';
import { routerRoutes } from './router-routes';

export const App = () => {

    useEffect(() => {

        customerActionsInvoker.loadProductsAsync();
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            <Navigation />
            <main>
                <Routes>
                    <Route path={routerRoutes.Home} element={<HomeView />} />
                    <Route
                        path={routerRoutes.Favourites}
                        element={<FavouritesView />}
                    />
                    <Route
                        path={routerRoutes.Compare}
                        element={<CompareView />}
                    />
                    <Route path={routerRoutes.Cart} element={<CartView />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
