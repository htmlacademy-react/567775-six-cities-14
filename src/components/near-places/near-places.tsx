import { useAppSelector } from '../../hooks/use-store';
import { store } from '../../store';
import { fetchOffersNearbyAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { Spinner } from '../spinner';
import { ListPlaceCard } from '../list-place-card';
import {
  getOffersNearby,
  getOffersNearbyIsLoading,
  getOffersNearbyIsNotFound,
} from '../../store/offers-nearby-process/selectors';

export const NearPlaces: React.FC<{ id: string | number }> = ({
  id,
}: {
  id: string | number;
}) => {
  useEffect(() => {
    store.dispatch(fetchOffersNearbyAction(id));
  }, [id]);

  const list = useAppSelector(getOffersNearby);
  const isLoading = useAppSelector(getOffersNearbyIsLoading);
  const isNotFound = useAppSelector(getOffersNearbyIsNotFound);

  return (
    <section className="near-places places" style={{ position: 'relative' }}>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {isLoading && <Spinner />}
      {isNotFound && (
        <h2 className="near-places__title">No other places nearbys</h2>
      )}
      {list.length > 0 && !isNotFound && !isLoading && (
        <div className="near-places__list places__list">
          {<ListPlaceCard offers={list} />}
        </div>
      )}
    </section>
  );
};
