import { Routes, Route } from 'react-router-dom';
import { Main, Favorites, Offer, Login, NotFound } from '../../pages';
import { AppRouter } from '../../../consts';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { browserHistory } from '../../../browser-history';
import { HistoryRouter } from '../history-route';
import { useAppSelector } from '../../hooks/use-store';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';
import { Dashboard } from '../dashboard/dashboard';

export default function App() {
  const isAuthorizationStatus = useAppSelector(getAuthCheckedStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRouter.Main} element={<Dashboard />}>
            <Route path={AppRouter.Main} element={<Main />} />
            <Route
              path={AppRouter.Login}
              element={
                <PrivateRoute
                  authStatus={!isAuthorizationStatus}
                  pathRoute={AppRouter.Main}
                >
                  <Login />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRouter.Favorites}
              element={
                <PrivateRoute authStatus={isAuthorizationStatus}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={`${AppRouter.Offer}/:id`}>
              <Route index element={<Offer />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
