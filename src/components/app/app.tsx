import { Routes, Route } from 'react-router-dom';
import { Main, Favorites, Offer, Login, NotFound } from '../../pages';
import { AppRouter } from '../../../consts';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '../header/header';
import { browserHistory } from '../../../browser-history';
import { HistoryRouter } from '../history-route';
import { useAppSelector } from '../../hooks/use-store';

export default function App() {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Header />
        <Routes>
          <Route path={AppRouter.Main} element={<Main />} />
          <Route path={AppRouter.Login} element={<Login />} />
          <Route
            path={AppRouter.Favorites}
            element={
              <PrivateRoute authStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRouter.Offer}/:id`}>
            <Route index element={<Offer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
