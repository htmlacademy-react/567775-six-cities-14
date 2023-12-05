import { Outlet, useLocation } from 'react-router-dom';
import { AppRouter } from '../../../consts';
import { useRef } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer';
import { useAppSelector } from '../../hooks/use-store';
import { getFavoritesIsNotFound } from '../../store/favorites-process/selectors';

export const Dashboard: React.FC = () => {
  const { pathname } = useLocation();

  const isShowFooter = pathname === String(AppRouter.Favorites);
  const pageClass = useRef('page');
  const favoritesIsNotFound = useAppSelector(getFavoritesIsNotFound);

  switch (pathname) {
    case AppRouter.Main:
      pageClass.current = 'page page--gray page--main';
      break;
    case AppRouter.Login:
      pageClass.current = 'page page--gray page--login';
      break;
    case AppRouter.Favorites:
      if (favoritesIsNotFound) {
        pageClass.current = 'page page--favorites-empty';
      }
      break;
    default:
      pageClass.current = 'page';
  }

  return (
    <div className={pageClass.current}>
      <Header />
      <Outlet />
      {isShowFooter && <Footer />}
    </div>
  );
};
