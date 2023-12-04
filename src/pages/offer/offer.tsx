import { Helmet } from 'react-helmet-async';
import { FormReview } from '../../components/form-review';
import { ReviewsList } from '../../components/reviews-list';
import { Map } from '../../components/map';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { store } from '../../store';
import { NotFound } from '..';
import { useAppSelector } from '../../hooks/use-store';
import { Spinner } from '../../components/spinner';
import { ratingPercentage } from '../../helpers';
import { AuthorizationStatus, FavoritesTriggerUpdate } from '../../../consts';
import { NearPlaces } from '../../components/near-places';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import {
  getOfferDetail,
  getOfferDetailIsLoading,
  getOfferDetailIsNotFound,
} from '../../store/offer-process/selectors';
import { fetchOfferDetailAction } from '../../store/api-actions';
import classNames from 'classnames';
import { useFavorites } from '../../hooks/use-favorites';
import { getOffersNearbyMapPoints } from '../../store/offers-nearby-process/selectors';

export const Offer: React.FC = () => {
  const { id: queryId } = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offersNearbyMapPoints = useAppSelector(getOffersNearbyMapPoints);

  useEffect(() => {
    store.dispatch(fetchOfferDetailAction(queryId));
  }, [queryId]);

  const offerDetail = useAppSelector(getOfferDetail);
  const isLoading = useAppSelector(getOfferDetailIsLoading);
  const isNotFound = useAppSelector(getOfferDetailIsNotFound);

  const mapCity = offerDetail?.city;
  const mapPointDetail = offerDetail?.location
    ? [{ location: { ...offerDetail?.location, id: queryId } }]
    : [];

  const mapPointsAll = [...mapPointDetail, ...offersNearbyMapPoints];

  const currentStatus = offerDetail && offerDetail.isFavorite ? 0 : 1;
  const onChangeFavorites = useFavorites(
    String(queryId),
    currentStatus,
    FavoritesTriggerUpdate.OfferDetail
  );

  return (
    <>
      <Helmet>
        <title>Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        {isLoading && <Spinner />}
        {isNotFound && <NotFound />}
        {offerDetail && !isNotFound && !isLoading && (
          <>
            <section className="offer">
              <div className="offer__gallery-container container">
                <div className="offer__gallery">
                  {offerDetail.images.length > 0 &&
                    offerDetail.images.map((item) => (
                      <div className="offer__image-wrapper" key={item}>
                        <img
                          className="offer__image"
                          src={item}
                          alt="Photo studio"
                        />
                      </div>
                    ))}
                </div>
              </div>
              <div className="offer__container container">
                <div className="offer__wrapper">
                  {offerDetail.isPremium && (
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="offer__name-wrapper">
                    {offerDetail.title && (
                      <h1 className="offer__name">{offerDetail.title}</h1>
                    )}
                    <button
                      className={classNames(
                        {
                          'offer__bookmark-button--active':
                            offerDetail.isFavorite,
                        },
                        'offer__bookmark-button button'
                      )}
                      type="button"
                      onClick={onChangeFavorites}
                    >
                      <svg
                        className="offer__bookmark-icon"
                        width={18}
                        height={19}
                      >
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  {offerDetail.rating && (
                    <div className="offer__rating rating">
                      <div className="offer__stars rating__stars">
                        <span
                          style={{
                            width: `${ratingPercentage(
                              Math.round(offerDetail.rating)
                            )}%`,
                          }}
                        />
                        <span className="visually-hidden">Rating</span>
                      </div>
                      <span className="offer__rating-value rating__value">
                        {offerDetail.rating}
                      </span>
                    </div>
                  )}
                  <ul className="offer__features">
                    {offerDetail.type && (
                      <li
                        className="offer__feature offer__feature--entire"
                        style={{ textTransform: 'capitalize' }}
                      >
                        {offerDetail.type}
                      </li>
                    )}
                    {offerDetail.bedrooms && (
                      <li className="offer__feature offer__feature--bedrooms">
                        {offerDetail.bedrooms} Bedroom
                        {offerDetail.bedrooms > 1 && 's'}
                      </li>
                    )}
                    {offerDetail.maxAdults && (
                      <li className="offer__feature offer__feature--adults">
                        Max {offerDetail.maxAdults} adult
                        {offerDetail.maxAdults > 1 && 's'}
                      </li>
                    )}
                  </ul>
                  {offerDetail.price && (
                    <div className="offer__price">
                      <b className="offer__price-value">€{offerDetail.price}</b>
                      <span className="offer__price-text">&nbsp;night</span>
                    </div>
                  )}
                  {offerDetail.goods.length > 0 && (
                    <div className="offer__inside">
                      <h2 className="offer__inside-title">
                        What&apos;s inside
                      </h2>
                      <ul className="offer__inside-list">
                        {offerDetail.goods.map((item) => (
                          <li className="offer__inside-item" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="offer__host">
                    <h2 className="offer__host-title">Meet the host</h2>
                    <div className="offer__host-user user">
                      {offerDetail.host?.avatarUrl && (
                        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                          <img
                            className="offer__avatar user__avatar"
                            src={offerDetail.host.avatarUrl}
                            width={74}
                            height={74}
                            alt="Host avatar"
                          />
                        </div>
                      )}
                      {offerDetail.host?.name && (
                        <span className="offer__user-name">
                          {offerDetail.host.name}
                        </span>
                      )}
                      {offerDetail.host?.isPro && (
                        <span className="offer__user-status">Pro</span>
                      )}
                    </div>
                    {offerDetail.description && (
                      <div className="offer__description">
                        <p className="offer__text">{offerDetail.description}</p>
                      </div>
                    )}
                  </div>
                  <section className="offer__reviews reviews">
                    {queryId && (
                      <>
                        <ReviewsList id={queryId} />
                        {authorizationStatus === AuthorizationStatus.Auth && (
                          <FormReview idOffer={queryId} />
                        )}
                      </>
                    )}
                  </section>
                </div>
              </div>
              {mapCity && mapPointsAll.length > 0 && (
                <section className="offer__map map">
                  <Map
                    city={mapCity}
                    points={mapPointsAll}
                    selectedPoint={queryId}
                  />
                </section>
              )}
            </section>
            {queryId && (
              <div className="container">
                <NearPlaces id={queryId} />
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};
