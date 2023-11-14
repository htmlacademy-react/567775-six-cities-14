import { store } from '../store';
import { TCityOptions } from './city';
import { TOfferItemProps } from './offers';

export type TInitState = {
  cityActive: TCityOptions;
  offers: TOfferItemProps[];
};

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
