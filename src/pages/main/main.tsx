import { locations, placesOptions } from './helper';
import { Helmet } from 'react-helmet-async';
import { ListPlaceCard } from '../../components/list-place-card';
import { useAppSelector } from '../../hooks/use-store';
import { TPoints } from '../../types/map';
import { TabsList } from '../../components/tabs-list';
import { SortingSelect } from '../../components/sorting-select';
import { Map } from '../../components/map';
import { useEffect, useState } from 'react';
import { Spinner } from '../../components/spinner';
import {
  getCityActive,
  getOffers,
  getOffersIsLoading,
  getOffersIsNoResult,
} from '../../store/offers-process/selectors';
import { CitiesNoResult } from '../../components/cities-no-result';
import classNames from 'classnames';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { fetchOffersAction } from '../../store/api-actions';
import { store } from '../../store';
/* eslint-disable react/prop-types */
export const Main: React.FC = () => {
  const offersData = useAppSelector(getOffers);
  const cityActive = useAppSelector(getCityActive);
  const offersIsLoading = useAppSelector(getOffersIsLoading);
  const offersIsNoResult = useAppSelector(getOffersIsNoResult);
  const places = offersData.length;
  const mapDataCity = offersData[0]?.city;
  const mapDataPointsNew: TPoints[] = [];
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const onHover = (value: number | undefined) => {
    setSelectedId(value);
  };

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    store.dispatch(fetchOffersAction());
  }, [authorizationStatus]);

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
      <main
        className={classNames(
          { 'page__main--index-empty': offersIsNoResult },
          'page__main page__main--index'
        )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <TabsList list={locations.list} active={cityActive} />
        <div className="cities">
          <div
            className={classNames(
              { 'cities__places-container--empty': offersIsNoResult },
              'cities__places-container container'
            )}
          >
            {offersIsLoading && <Spinner />}
            {offersIsNoResult ? (
              <CitiesNoResult />
            ) : (
              <section className="cities__places places">
                {!!places && (
                  <>
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">
                      {`${places} places to stay in ${cityActive}`}
                    </b>
                    <SortingSelect list={placesOptions} />
                  </>
                )}
                {offersData.length > 0 && (
                  <div className="cities__places-list places__list tabs__content">
                    {<ListPlaceCard offers={offersData} onHover={onHover} />}
                  </div>
                )}
              </section>
            )}
            <div className="cities__right-section">
              {!!mapDataPointsNew.length && (
                <section className="cities__map map">
                  <Map
                    selectedPoint={selectedId}
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
