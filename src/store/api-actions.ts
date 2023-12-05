import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { redirectToRoute } from './action.js';
import { ApiRoute, AppRouter, FavoritesTriggerUpdate } from '../../consts.js';
import { TAppDispatch, TState } from '../types/state.js';
import { TOfferItemProps } from '../types/offers.js';
import { TAuthData } from '../types/auth-data.js';
import { dropToken, saveToken } from '../services/token.js';
import { TUserData } from '../types/user.js';
import { ReviewsItemProps } from '../types/reviews.js';
import { CommentData } from '../types/comments.js';
import { FavoriteData } from '../types/favorites.js';
import { setFavoriteOffer } from './offers-process/offers-process.js';
import { setFavoriteOfferDetail } from './offer-process/offer-process.js';
import { setFavoriteNearby } from './offers-nearby-process/offers-nearby-process.js';
import { setEmail } from './user-process/user-process.js';

export const fetchFavoritesAction = createAsyncThunk<
  TOfferItemProps[],
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchFavorites', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOfferItemProps[]>(ApiRoute.Favorites);

  return data;
});

export const fetchOffersAction = createAsyncThunk<
  TOfferItemProps[],
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<TOfferItemProps[]>(ApiRoute.Offers);

  return data;
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
  const {
    data: { email },
  } = await api.get<TUserData>(ApiRoute.Login);

  dispatch(setEmail(email));
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
  dispatch(fetchFavoritesAction());
  dispatch(redirectToRoute(AppRouter.Main));
  dispatch(setEmail(email));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('logout', async (_arg, { extra: api }) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
});

export const fetchOfferDetailAction = createAsyncThunk<
  TOfferItemProps,
  number | string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchOfferDetail', async (_arg, { extra: api }) => {
  const id = _arg;

  const { data } = await api.get<TOfferItemProps>(`${ApiRoute.Offers}/${id}`);

  return data;
});

export const fetchOfferCommentsAction = createAsyncThunk<
  ReviewsItemProps[],
  number | string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchOfferComments', async (_arg, { extra: api }) => {
  const id = _arg;

  const { data } = await api.get<ReviewsItemProps[]>(
    `${ApiRoute.Comments}/${id}`
  );

  return data;
});

export const fetchOffersNearbyAction = createAsyncThunk<
  TOfferItemProps[],
  number | string | undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('fetchOffersNearby', async (_arg, { extra: api }) => {
  const id = _arg;

  const { data } = await api.get<TOfferItemProps[]>(
    `${ApiRoute.Offers}/${id}/nearby`
  );

  return data;
});

export const submitCommentAction = createAsyncThunk<
  ReviewsItemProps,
  CommentData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('submitComment', async (commentPost: CommentData, { extra: api }) => {
  const { data } = await api.post<ReviewsItemProps>(
    `${ApiRoute.Comments}/${commentPost.id}`,
    {
      comment: commentPost.comment,
      rating: commentPost.rating,
    }
  );

  return data;
});

export const setFavoritesAction = createAsyncThunk<
  TOfferItemProps,
  FavoriteData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  'setFavorites',
  async (favoriteParams: FavoriteData, { dispatch, extra: api }) => {
    const { data } = await api.post<TOfferItemProps>(
      `${ApiRoute.Favorites}/${favoriteParams.offerId}/${favoriteParams.status}`
    );

    switch (favoriteParams.triggerUpdate) {
      case FavoritesTriggerUpdate.Offers:
        dispatch(setFavoriteOffer(data));
        break;
      case FavoritesTriggerUpdate.OfferDetail:
        dispatch(setFavoriteOfferDetail(data.isFavorite));
        break;
      case FavoritesTriggerUpdate.Favorites:
        dispatch(fetchFavoritesAction());
        break;
      case FavoritesTriggerUpdate.Nearby:
        dispatch(setFavoriteNearby(data));
        break;
    }

    return data;
  }
);
