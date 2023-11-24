import { locations, placesOptions } from './helper';
import { Helmet } from 'react-helmet-async';
import { ListPlaceCard } from '../../components/list-place-card';
import { useAppSelector } from '../../hooks/use-store';
import { TPoints } from '../../types/map';
import { TabsList } from '../../components/tabs-list';
import { SortingSelect } from '../../components/sorting-select';
import { Map } from '../../components/map';
import { useState } from 'react';
import { Spinner } from '../../components/spinner';

/* eslint-disable react/prop-types */
export const Main: React.FC = () => {
  const offersData = useAppSelector((state) => state.offers);
  const cityActive = useAppSelector((state) => state.cityActive);
  const offersIsLoading = useAppSelector((state) => state.offersIsLoading);
  const places = offersData.length;
  const mapDataCity = offersData[0]?.city;
  const mapDataPointsNew: TPoints[] = [];
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const onHover = (value: number | undefined) => {
    setSelectedId(value);
  };

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
            {offersIsLoading && <Spinner />}
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`${places} places to stay in ${cityActive}`}
              </b>
              {!!places && <SortingSelect list={placesOptions} />}
              {offersData && (
                <div className="cities__places-list places__list tabs__content">
                  {<ListPlaceCard offers={offersData} onHover={onHover} />}
                </div>
              )}
            </section>
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
