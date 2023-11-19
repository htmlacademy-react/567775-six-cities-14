import { store } from '../store';
import { TCityOptions } from './city';
import { TOfferItemProps } from './offers';
import { TSortingOffers } from './sorting';

export type TInitState = {
  cityActive: TCityOptions;
  sortingBy: TSortingOffers;
  offers: TOfferItemProps[];
};

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
