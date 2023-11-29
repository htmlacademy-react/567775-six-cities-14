import { useAppSelector } from '../../hooks/use-store';
import { store } from '../../store';
import { fetchOfferCommentsAction } from '../../store/api-actions';
import { ReviewsListProps } from '../../types/reviews';
import { ReviewsItem } from '../reviews-item';
import { useEffect } from 'react';
import { Spinner } from '../spinner';

export const ReviewsList: React.FC<ReviewsListProps> = ({
  id,
}: ReviewsListProps) => {
  useEffect(() => {
    store.dispatch(fetchOfferCommentsAction(id));
  }, [id]);

  const list = useAppSelector((state) => state.offerComments);
  const isLoading = useAppSelector((state) => state.offerCommentsIsLoading);
  const isNotFound = useAppSelector((state) => state.offerCommentsIsNotFound);

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <Spinner />}
      {isNotFound && <h2 className="reviews__title">No reviews</h2>}
      {list.length > 0 && !isNotFound && !isLoading && (
        <>
          <h2 className="reviews__title">
            Reviews · <span className="reviews__amount">{list.length}</span>
          </h2>
          <ul className="reviews__list">
            {list.map((props) => (
              <ReviewsItem {...props} key={props.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
