import { OfferItemProps } from '../../types/offers';
import classNames from 'classnames';

export const PlaceCard: React.FC<OfferItemProps> = ({
  price,
  title,
  rating,
  text,
  premium,
  favorites,
  image,
  imageAlt,
}) => (
  <article className="cities__card place-card">
    {premium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}

    <div className="cities__image-wrapper place-card__image-wrapper">
      {image && (
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            width={260}
            height={200}
            alt={imageAlt || 'Place image'}
          />
        </a>
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
            { 'place-card__bookmark-button--active': favorites },
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
            <span style={{ width: `${rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
      )}
      {title && (
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
      )}
      {text && <p className="place-card__type">{text}</p>}
    </div>
  </article>
);
