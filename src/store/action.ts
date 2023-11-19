import { createAction } from '@reduxjs/toolkit';
import { TCityOptions } from '../types/city';
import { TSortingOffers } from '../types/sorting';

export const setCityActive = createAction<{ city: TCityOptions }>(
  'setCityActive'
);
export const setSorting = createAction<{ sorting: TSortingOffers }>(
  'setSorting'
);
export const getOffers = createAction('getOffers');
