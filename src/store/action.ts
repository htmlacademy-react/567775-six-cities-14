import {createAction} from '@reduxjs/toolkit';
import { TCityOptions } from '../types/city';

export const setOffers = createAction<{city: TCityOptions}>('setOffers');
