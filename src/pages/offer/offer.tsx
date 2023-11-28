import { Helmet } from 'react-helmet-async';
import { FormReview } from '../../components/form-review';
import { ReviewsList } from '../../components/reviews-list';
import { reviewsData } from '../../mocks/reviews';
import { Map } from '../../components/map';
// import {
//   otherPlacesData,
// } from '../../mocks/other-places';
import { ListPlaceCard } from '../../components/list-place-card';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchOfferDetailAction } from '../../store/api-actions';
import { NotFound } from '..';
import { useAppSelector } from '../../hooks/use-store';
import { Spinner } from '../../components/spinner';
import { ratingPercentage } from '../../helpers';
import { AuthorizationStatus } from '../../../consts';

export const Offer: React.FC = () => {
  const { id: queryId } = useParams();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  useEffect(() => {
    store.dispatch(fetchOfferDetailAction(queryId));
  }, []);

  const offerDetail = useAppSelector((state) => state.offerDetail);
  const isLoading = useAppSelector((state) => state.offerDetailIsLoading);
  const isNotFound = useAppSelector((state) => state.offerDetailIsNotFound);

  const mapCity = offerDetail?.location
    ? { location: { ...offerDetail?.location } }
    : undefined;
  const mapPoints = offerDetail?.location
    ? [{ location: { ...offerDetail?.location } }]
    : [];

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
                  {offerDetail.images.length &&
                    offerDetail.images.map((item, index) => (
                      <div className="offer__image-wrapper" key={index}>
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
                      className="offer__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="offer__bookmark-icon"
                        width={31}
                        height={33}
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
                            width: `${ratingPercentage(offerDetail.rating)}%`,
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
                        {offerDetail.bedrooms} Bedrooms
                      </li>
                    )}
                    {offerDetail.maxAdults && (
                      <li className="offer__feature offer__feature--adults">
                        Max {offerDetail.maxAdults} adults
                      </li>
                    )}
                  </ul>
                  {offerDetail.price && (
                    <div className="offer__price">
                      <b className="offer__price-value">€{offerDetail.price}</b>
                      <span className="offer__price-text">&nbsp;night</span>
                    </div>
                  )}
                  {offerDetail.goods.length && (
                    <div className="offer__inside">
                      <h2 className="offer__inside-title">
                        What&apos;s inside
                      </h2>
                      <ul className="offer__inside-list">
                        {offerDetail.goods.map((item, index) => (
                          <li className="offer__inside-item" key={index}>
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
                    {queryId && <ReviewsList id={queryId} />}
                    {authorizationStatus === AuthorizationStatus.Auth && (
                      <FormReview />
                    )}
                  </section>
                </div>
              </div>
              {mapCity && mapPoints.length && (
                <section className="offer__map map">
                  <Map city={mapCity} points={mapPoints} />
                </section>
              )}
            </section>
            {/* <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                {otherPlacesData.offers && (
                  <div className="near-places__list places__list">
                    {<ListPlaceCard offers={otherPlacesData.offers} />}
                  </div>
                )}
              </section>
            </div> */}
          </>
        )}
      </main>
    </>
  );
};
