import classNames from 'classnames';
import { useState } from 'react';
import { TPlaceCardProps } from '../../types/place-card';
import { Link } from 'react-router-dom';
import { AppRouter } from '../../../consts';
import { ratingPercentage } from '../../helpers/helpers';

export const PlaceCard: React.FC<TPlaceCardProps> = ({
  price,
  title,
  rating,
  type,
  isPremium,
  isFavorite,
  previewImage,
  id,
}: TPlaceCardProps) => {
  const [, setActiveId] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setActiveId(id);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        {previewImage && (
          <Link to={`${AppRouter.Offer}/${id}`}>
            <img
              className="place-card__image"
              src={previewImage}
              width={260}
              height={200}
              alt={title}
            />
          </Link>
        )}
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          {price && (
            <div className="place-card__price">
              <b className="place-card__price-value">€{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
          )}
          <button
            className={classNames(
              { 'place-card__bookmark-button--active': isFavorite },
              'place-card__bookmark-button button'
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        {rating && (
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${ratingPercentage(rating)}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
        )}
        {title && (
          <h2 className="place-card__name">
            <Link to={`${AppRouter.Offer}/${id}`}>{title}</Link>
          </h2>
        )}
        {type && (
          <p
            className="place-card__type"
            style={{ textTransform: 'capitalize' }}
          >
            {type}
          </p>
        )}
      </div>
    </article>
  );
};
