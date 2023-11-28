import { AuthorizationStatus } from '../../consts';
import { store } from '../store';
import { TCityOptions } from './city';
import { TOfferItemProps } from './offers';
import { ReviewsItemProps } from './reviews';
import { TSortingOffers } from './sorting';

export type TInitState = {
  authorizationStatus: AuthorizationStatus;
  cityActive: TCityOptions;
  sortingBy: TSortingOffers;
  offersAll: TOfferItemProps[];
  offers: TOfferItemProps[];
  offersIsLoading: boolean;
  error: string | null;
  offerDetail: TOfferItemProps | null;
  offerDetailIsLoading: boolean;
  offerDetailIsNotFound: boolean;
  offerComments: ReviewsItemProps[];
  offerCommentsIsLoading: boolean;
  offerCommentsIsNotFound: boolean;
};

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
