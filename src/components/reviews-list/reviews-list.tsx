import { useAppSelector } from '../../hooks/use-store';
import { store } from '../../store';
import { fetchOfferCommentsAction } from '../../store/api-actions';
import { ReviewsListProps } from '../../types/reviews';
import { ReviewsItem } from '../reviews-item';
import { useEffect } from 'react';
import { Spinner } from '../spinner';
import {
  getOfferComments,
  getOfferCommentsIsNotFound,
  getOfferCommentsIsLoading,
} from '../../store/offer-comments-process/selectors';
import { MAX_REVIEWS_LIST_COUNT } from '../../../consts';

export const ReviewsList: React.FC<ReviewsListProps> = ({
  id,
}: ReviewsListProps) => {
  useEffect(() => {
    store.dispatch(fetchOfferCommentsAction(id));
  }, [id]);

  const listAll = useAppSelector(getOfferComments);
  const listSlice = [...listAll].slice(0, MAX_REVIEWS_LIST_COUNT);
  const isLoading = useAppSelector(getOfferCommentsIsLoading);
  const isNotFound = useAppSelector(getOfferCommentsIsNotFound);

  const listSortingByNewDate = listSlice.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <Spinner />}
      {isNotFound && <h2 className="reviews__title">No reviews</h2>}
      {listAll.length > 0 && !isNotFound && (
        <>
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{listAll.length}</span>
          </h2>
          <ul className="reviews__list">
            {listSortingByNewDate.map((props) => (
              <ReviewsItem {...props} key={props.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
