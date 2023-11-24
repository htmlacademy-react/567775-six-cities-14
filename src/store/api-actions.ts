import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOffers, setOffers, setOffersIsLoading } from './action.js';
import { ApiRoute } from '../../consts.js';
import { TAppDispatch, TState } from '../types/state.js';
import { TOfferItemProps } from '../types/offers.js';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersIsLoading(true));

  const { data } = await api.get<TOfferItemProps[]>(ApiRoute.Offers);

  dispatch(setOffersIsLoading(false));
  dispatch(setOffers(data));
  dispatch(getOffers());
});
