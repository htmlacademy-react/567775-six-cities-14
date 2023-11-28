import { createAction } from '@reduxjs/toolkit';
import { TCityOptions } from '../types/city';
import { TSortingOffers } from '../types/sorting';
import { TOfferItemProps } from '../types/offers';
import { AppRouter, AuthorizationStatus } from '../../consts';

export const setCityActive = createAction<{ city: TCityOptions }>(
  'setCityActive'
);
export const setSorting = createAction<{ sorting: TSortingOffers }>(
  'setSorting'
);
export const setOffers = createAction<TOfferItemProps[]>('setOffers');
export const getOffers = createAction('getOffers');
export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'requireAuthorization'
);
export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRouter>('redirectToRoute');
export const setOfferDetail = createAction<TOfferItemProps>('setOfferDetail');
export const setOfferDetailIsLoading = createAction<boolean>(
  'setOfferDetailIsLoading'
);
export const setOfferDetailIsNotFound = createAction<boolean>(
  'setOfferDetailIsNotFound'
);
