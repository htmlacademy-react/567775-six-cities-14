import { AuthorizationStatus } from '../../consts';
import { store } from '../store';
import { TCityOptions } from './city';
import { TPoints } from './map';
import { TOfferItemProps } from './offers';
import { ReviewsItemProps } from './reviews';
import { TSortingOffers } from './sorting';

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
};

export type OffersProcess = {
  cityActive: TCityOptions;
  sortingBy: TSortingOffers;
  offersAll: TOfferItemProps[];
  offers: TOfferItemProps[];
  offersIsLoading: boolean;
  offersIsNoResult: boolean;
};

export type OfferDetailProcess = {
  offerDetail: TOfferItemProps | null;
  offerDetailIsLoading: boolean;
  offerDetailIsNotFound: boolean;
};

export type OfferCommentsProcess = {
  offerComments: ReviewsItemProps[];
  offerCommentsIsLoading: boolean;
  offerCommentsIsNotFound: boolean;
  offerCommentSubmitIsPending: boolean;
};

export type OffersNearbyProcess = {
  offersNearby: TOfferItemProps[];
  offersNearbyIsLoading: boolean;
  offersNearbyIsNotFound: boolean;
  offersNearbyMapPoints: TPoints[];
};

export type ErrorMessageProcess = {
  errorMessage: string | null;
};

export type favoritesProcess = {
  favorites: TOfferItemProps[];
  favoritesIsLoading: boolean;
  favoritesIsNotFound: boolean;
};
