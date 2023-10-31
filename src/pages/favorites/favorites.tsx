import { Helmet } from 'react-helmet-async';
import { LocationsItems } from '../../components/locations-items';
import { favoritesData } from '../../mocks/favorites';
import { offersGroupArrayByCity } from '../../components/helpers';

export const Favorites: React.FC = () => {
  const groupedFavorites = offersGroupArrayByCity(favoritesData.favorites);

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {groupedFavorites.map(({ city, list }) => (
                <LocationsItems city={city} list={list} key={city} />
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};
