import { Helmet } from 'react-helmet-async';
import { LocationsItems } from '../../components/locations-items';
import { offersGroupArrayByCity } from '../../helpers';
import { useAppSelector } from '../../hooks/use-store';
import {
  getFavorites,
  getFavoritesIsLoading,
  getFavoritesIsNotFound,
} from '../../store/favorites-process/selectors';
import { FavoritesNoResult } from '../../components/favorites-no-result/favorites-no-result';
import classNames from 'classnames';
import { Spinner } from '../../components/spinner';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchFavoritesAction } from '../../store/api-actions';

export const Favorites: React.FC = () => {
  const favoritesData = useAppSelector(getFavorites);
  const groupedFavorites =
    favoritesData.length > 0 ? offersGroupArrayByCity(favoritesData) : [];

  const favoritesIsLoading = useAppSelector(getFavoritesIsLoading);
  const favoritesIsNotFound = useAppSelector(getFavoritesIsNotFound);

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, []);

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main
        className={classNames(
          { 'page__main--favorites-empty': favoritesIsNotFound },
          'page__main page__main--favorites'
        )}
      >
        <div className="page__favorites-container container">
          {favoritesIsLoading && <Spinner />}
          {favoritesIsNotFound ? (
            <FavoritesNoResult />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {groupedFavorites.map(({ city, list }) => (
                  <LocationsItems city={city} list={list} key={city} />
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </>
  );
};
