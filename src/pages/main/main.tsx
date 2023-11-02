import classNames from 'classnames';
import { locations, placesOptions } from './helper';
import { Helmet } from 'react-helmet-async';
import { offersData } from '../../mocks/offers';
import { ListPlaceCard } from '../../components/list-place-card';
import { Map } from '../../components/map';
import { mapDataPoints, mapDataCity } from '../../mocks/map';

type MainProps = {
  places: number;
};

/* eslint-disable react/prop-types */
export const Main: React.FC<MainProps> = ({ places }) => (
  <>
    <Helmet>
      <title>Main</title>
    </Helmet>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {locations &&
              locations.map(({ title, id, active }) => (
                <li className="locations__item" key={id}>
                  <a
                    className={classNames(
                      { 'tabs__item--active': active },
                      'locations__item-link tabs__item'
                    )}
                    href="#"
                  >
                    <span>{title}</span>
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            {places && (
              <b className="places__found">
                {places} places to stay in Amsterdam
              </b>
            )}
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                {placesOptions &&
                  placesOptions.map(({ title, id, active }) => (
                    <li
                      className={classNames(
                        { 'places__option--active': active },
                        'places__option'
                      )}
                      tabIndex={0}
                      key={id}
                    >
                      {title}
                    </li>
                  ))}
              </ul>
            </form>
            {offersData.offers && (
              <div className="cities__places-list places__list tabs__content">
                {<ListPlaceCard offers={offersData.offers} />}
              </div>
            )}
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={mapDataCity} points={mapDataPoints} />
            </section>
          </div>
        </div>
      </div>
    </main>
  </>
);
