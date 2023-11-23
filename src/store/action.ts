import { createAction } from '@reduxjs/toolkit';
import { TCityOptions } from '../types/city';
import { TSortingOffers } from '../types/sorting';
import { TOfferItemProps } from '../types/offers';

export const setCityActive = createAction<{ city: TCityOptions }>(
  'setCityActive'
);
export const setSorting = createAction<{ sorting: TSortingOffers }>(
  'setSorting'
);
export const setOffers = createAction<TOfferItemProps[]>('setOffers');
export const getOffers = createAction('getOffers');
export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');
