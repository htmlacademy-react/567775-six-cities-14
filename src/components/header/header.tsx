import { Link, useLocation } from 'react-router-dom';
import { AppRouter, AuthorizationStatus } from '../../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import {
  getAuthorizationStatus,
  getUserEmail,
} from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorites-process/selectors';

export const Header: React.FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const { pathname } = useLocation();

  const isPageLogin = pathname === String(AppRouter.Login);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRouter.Main}
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {!isPageLogin && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth ? (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        to={AppRouter.Favorites}
                        className="header__nav-link header__nav-link--profile"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          {userEmail}
                        </span>

                        <span className="header__favorite-count">
                          {favorites.length}
                        </span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a
                        className="header__nav-link"
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(logoutAction());
                        }}
                      >
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link
                      to={AppRouter.Login}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
