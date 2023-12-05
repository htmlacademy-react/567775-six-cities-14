import { AuthorizationStatus } from '../../consts';
import { store } from '../store';
import { CityOptionsType } from './city';
import { PointsType } from './map';
import { OfferItemPropsType } from './offers';
import { ReviewsItemProps } from './reviews';
import { SortingOffersType } from './sorting';

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  checkAuthIsLoaded: boolean;
};

export type OffersProcess = {
  cityActive: CityOptionsType;
  sortingBy: SortingOffersType;
  offersAll: OfferItemPropsType[];
  offers: OfferItemPropsType[];
  offersIsLoading: boolean;
  offersIsNoResult: boolean;
};

export type OfferDetailProcess = {
  offerDetail: OfferItemPropsType | null;
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
  offersNearby: OfferItemPropsType[];
  offersNearbyIsLoading: boolean;
  offersNearbyIsNotFound: boolean;
  offersNearbyMapPoints: PointsType[];
};

export type ErrorMessageProcess = {
  errorMessage: string | null;
};

export type favoritesProcess = {
  favorites: OfferItemPropsType[];
  favoritesIsLoading: boolean;
  favoritesIsNotFound: boolean;
};
