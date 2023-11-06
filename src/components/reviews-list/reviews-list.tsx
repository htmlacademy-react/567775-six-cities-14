import { TReviewsList } from '../../types/reviews';
import { ReviewsItem } from '../reviews-item';

export const ReviewsList: React.FC<TReviewsList> = ({ list }: TReviewsList) => {
  return (
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
  );
};
