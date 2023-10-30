import { Helmet } from 'react-helmet-async';
import { LocationsItems } from '../../components/locations-items';
import { favoritesData } from '../../mocks/favorites';

export const Favorites: React.FC = () => (
  <>
    <Helmet>
      <title>Favorites</title>
    </Helmet>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoritesData.favorites.map(({ city, list, id }) => (
              <LocationsItems city={city.name} list={list} key={id} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  </>
);
