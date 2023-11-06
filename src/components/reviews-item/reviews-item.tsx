import { ratingPercentage } from '../../helpers/helpers';
import { useDate } from '../../hooks/use-date';
import { TReviewsItem } from '../../types/reviews';

export const ReviewsItem: React.FC<TReviewsItem> = ({
  comment,
  date,
  rating,
  user,
}: TReviewsItem) => {
  const { getMonthText, getYear, getDay, getMonth } = useDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        {user?.avatarUrl && (
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={user.avatarUrl}
              width={54}
              height={54}
              alt="Reviews avatar"
            />
          </div>
        )}
        {user?.name && <span className="reviews__user-name">{user.name}</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingPercentage(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        {comment && <p className="reviews__text">{comment}</p>}
        {getMonthText && getYear && (
          <time
            className="reviews__time"
            dateTime={`${getYear}-${getMonth}-${getDay}`}
          >
            {`${getMonthText} ${getYear}`}
          </time>
        )}
      </div>
    </li>
  );
};
