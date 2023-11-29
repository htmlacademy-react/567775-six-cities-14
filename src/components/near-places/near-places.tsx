import { useAppSelector } from '../../hooks/use-store';
import { store } from '../../store';
import { fetchOffersNearbyAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { Spinner } from '../spinner';
import { ListPlaceCard } from '../list-place-card';

export const NearPlaces: React.FC<{ id: string | number }> = ({
  id,
}: {
  id: string | number;
}) => {
  useEffect(() => {
    store.dispatch(fetchOffersNearbyAction(id));
  }, [id]);

  const list = useAppSelector((state) => state.offersNearby);
  const isLoading = useAppSelector((state) => state.offersNearbyIsLoading);
  const isNotFound = useAppSelector((state) => state.offersNearbyIsNotFound);

  return (
    <section className="near-places places" style={{ position: 'relative' }}>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {isLoading && <Spinner />}
      {isNotFound && <h2 className="reviews__title">No reviews</h2>}
      {list.length > 0 && !isNotFound && !isLoading && (
        <div className="near-places__list places__list">
          {<ListPlaceCard offers={list} />}
        </div>
      )}
    </section>
  );
};
