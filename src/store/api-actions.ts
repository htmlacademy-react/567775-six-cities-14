import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getOffers,
  redirectToRoute,
  requireAuthorization,
  setError,
  setOffers,
  setOffersIsLoading,
} from './action.js';
import {
  ApiRoute,
  AppRouter,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../../consts.js';
import { TAppDispatch, TState } from '../types/state.js';
import { TOfferItemProps } from '../types/offers.js';
import { TAuthData } from '../types/auth-data.js';
import { dropToken, saveToken } from '../services/token.js';
import { TUserData } from '../types/user.js';
import { store } from './index.js';

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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(ApiRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('login', async ({ login: email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<TUserData>(ApiRoute.Login, { email, password });
  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRouter.Main));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});
