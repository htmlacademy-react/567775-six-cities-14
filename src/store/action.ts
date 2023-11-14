import { createAction } from '@reduxjs/toolkit';
import { TCityOptions } from '../types/city';

export const setCityActive = createAction<{ city: TCityOptions }>('setCityActive');
export const getOffers = createAction('getOffers');
