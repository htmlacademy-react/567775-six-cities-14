import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { redirectToRoute } from './action.js';
import { ApiRoute, AppRouter } from '../../consts.js';
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
>('checkAuth', async (_arg, { extra: api }) => {
  await api.get(ApiRoute.Login);
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
  dispatch(fetchOffersAction());
  dispatch(fetchFavoritesAction());
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
  dispatch(fetchOffersAction());
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
  async (favoritePost: FavoriteData, { dispatch, extra: api }) => {
    const { data } = await api.post<TOfferItemProps>(
      `${ApiRoute.Favorites}/${favoritePost.offerId}/${favoritePost.status}`
    );

    dispatch(setFavoriteOffer(data));
    dispatch(setFavoriteOfferDetail(data.isFavorite));

    return data;
  }
);
