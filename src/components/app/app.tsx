import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Favorites, Offer, Login, NotFound } from '../../pages';
import { AppRouter, AuthorizationStatus } from '../../../consts';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '../header/header';

type AppProps = {
  places: number;
};

export default function App({ places }: AppProps) {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path={AppRouter.Main} element={<Main places={places} />} />
          <Route path={AppRouter.Login} element={<Login />} />
          <Route
            path={AppRouter.Favorites}
            element={
              <PrivateRoute authStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRouter.Offer}/:id`}>
            <Route index element={<Offer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
