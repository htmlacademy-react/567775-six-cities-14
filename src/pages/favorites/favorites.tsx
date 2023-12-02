import { Helmet } from 'react-helmet-async';
import { LocationsItems } from '../../components/locations-items';
import { offersGroupArrayByCity } from '../../helpers';
import { useAppSelector } from '../../hooks/use-store';
import { getFavorites } from '../../store/favorites-process/selectors';

export const Favorites: React.FC = () => {
  const favoritesData = useAppSelector(getFavorites);
  const groupedFavorites =
    favoritesData.length > 0 ? offersGroupArrayByCity(favoritesData) : [];

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {groupedFavorites.length > 0 ? (
              <ul className="favorites__list">
                {groupedFavorites.map(({ city, list }) => (
                  <LocationsItems city={city} list={list} key={city} />
                ))}
              </ul>
            ) : (
              <h2>No result!</h2>
            )}
          </section>
        </div>
      </main>
    </>
  );
};
