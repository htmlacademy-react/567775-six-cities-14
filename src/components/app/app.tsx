import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Favorites, Offer, Login, NotFound } from '../../pages';
import { Header } from '../header/header';
import { AppRouter } from '../../../consts';

type AppProps = {
  places: number;
};

export default function App({ places }: AppProps) {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path={AppRouter.Main} element={<Main places={places} />} />
          <Route path={AppRouter.Login} element={<Login />} />
          <Route path={AppRouter.Favorites} element={<Favorites />} />
          <Route path={AppRouter.Offer}>
            <Route index element={<Offer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
