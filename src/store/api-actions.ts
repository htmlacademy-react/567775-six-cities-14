import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOffers } from './action.js';
import { ApiRoute } from '../../consts.js';
import { TAppDispatch, TState } from '../types/state.js';
// import { TOfferItemProps } from '../types/offers.js';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  // dispatch(setQuestionsDataLoadingStatus(true));
  const { data } = await api.get(ApiRoute.Offers);

  dispatch(getOffers(data));

  // dispatch(setQuestionsDataLoadingStatus(false));
  // dispatch(loadQuestions(data));
});
