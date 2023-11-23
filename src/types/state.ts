import { store } from '../store';
import { TCityOptions } from './city';
import { TOfferItemProps } from './offers';
import { TSortingOffers } from './sorting';

export type TInitState = {
  cityActive: TCityOptions;
  sortingBy: TSortingOffers;
  offersAll: TOfferItemProps[];
  offers: TOfferItemProps[];
  offersIsLoading: boolean;
};

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
