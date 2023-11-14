import classNames from 'classnames';
import { locations, placesOptions } from './helper';
import { Helmet } from 'react-helmet-async';
import { ListPlaceCard } from '../../components/list-place-card';
import { CitiesMap } from '../../components/cities-map/cities-map';
import { useAppSelector } from '../../hooks/use-store';
import { TPoints } from '../../types/map';
import { TabsList } from '../../components/tabs-list';

/* eslint-disable react/prop-types */
export const Main: React.FC = () => {
  const offersData = useAppSelector((state) => state.offers);
  const cityActive = useAppSelector((state) => state.cityActive);
  const places = offersData.length;
  const mapDataCity = offersData[0]?.city;
  const mapDataPointsNew: TPoints[] = [];

  offersData.forEach((elem) => {
    if (elem?.location) {
      mapDataPointsNew.push({
        location: { ...elem.location },
        name: cityActive,
      });
    }
  });

  return (
    <>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsList list={locations.list} active={cityActive} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`${places} places to stay in ${cityActive}`}
              </b>
              {!!places && (
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
              )}
              {offersData && (
                <div className="cities__places-list places__list tabs__content">
                  {<ListPlaceCard offers={offersData} />}
                </div>
              )}
            </section>
            <div className="cities__right-section">
              {mapDataPointsNew && (
                <section className="cities__map map">
                  <CitiesMap
                    selectedPoint={undefined}
                    city={mapDataCity}
                    points={mapDataPointsNew}
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
