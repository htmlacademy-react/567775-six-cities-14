import { Outlet, useLocation } from 'react-router-dom';
import { AppRouter } from '../../../consts';
import { useRef } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer';

export const Dashboard: React.FC = () => {
  const { pathname } = useLocation();

  const isShowFooter = pathname === String(AppRouter.Favorites);
  const pageClass = useRef('page');

  switch (pathname) {
    case AppRouter.Main:
      pageClass.current = 'page page--gray page--main';
      break;
    case AppRouter.Login:
      pageClass.current = 'page page--gray page--login';
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
