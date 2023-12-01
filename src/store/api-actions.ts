import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // getOffers,
  redirectToRoute,
  // requireAuthorization,
  // setError,
  // setOfferComments,
  // setOfferCommentsIsLoading,
  // setOfferCommentsIsNotFound,
  // setOfferDetail,
  // setOfferDetailIsLoading,
  // setOfferDetailIsNotFound,
  // setOffers,
  // setOffersIsLoading,
  // setOffersNearby,
  // setOffersNearbyIsLoading,
  // setOffersNearbyIsNotFound,
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
import { ReviewsItemProps } from '../types/reviews.js';
import { CommentData } from '../types/comments.js';

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
>('logout', async (_arg, { extra: api }) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
});

// export const clearErrorAction = createAsyncThunk('clearError', () => {
//   setTimeout(() => {
//     store.dispatch(setError(null));
//   }, TIMEOUT_SHOW_ERROR);
// });

// export const fetchOfferDetailAction = createAsyncThunk<
//   void,
//   number | string | undefined,
//   {
//     dispatch: TAppDispatch;
//     state: TState;
//     extra: AxiosInstance;
//   }
// >('fetchOfferDetail', async (_arg, { dispatch, extra: api }) => {
//   const id = _arg;

//   dispatch(setOfferDetailIsLoading(true));
//   dispatch(setOfferDetailIsNotFound(false));

//   try {
//     const { data } = await api.get<TOfferItemProps>(`${ApiRoute.Offers}/${id}`);

//     if (data) {
//       dispatch(setOfferDetail(data));
//     }
//   } catch {
//     dispatch(setOfferDetailIsNotFound(true));
//   } finally {
//     dispatch(setOfferDetailIsLoading(false));
//   }
// });

// export const fetchOfferCommentsAction = createAsyncThunk<
//   void,
//   number | string | undefined,
//   {
//     dispatch: TAppDispatch;
//     state: TState;
//     extra: AxiosInstance;
//   }
// >('fetchOfferComments', async (_arg, { dispatch, extra: api }) => {
//   const id = _arg;

//   dispatch(setOfferCommentsIsLoading(true));
//   dispatch(setOfferCommentsIsNotFound(false));

//   try {
//     const { data } = await api.get<ReviewsItemProps[]>(
//       `${ApiRoute.Comments}/${id}`
//     );

//     if (data) {
//       dispatch(setOfferComments(data));
//     }
//   } catch {
//     dispatch(setOfferCommentsIsNotFound(true));
//   } finally {
//     dispatch(setOfferCommentsIsLoading(false));
//   }
// });

// export const fetchOffersNearbyAction = createAsyncThunk<
//   void,
//   number | string | undefined,
//   {
//     dispatch: TAppDispatch;
//     state: TState;
//     extra: AxiosInstance;
//   }
// >('fetchOffersNearby', async (_arg, { dispatch, extra: api }) => {
//   const id = _arg;

//   dispatch(setOffersNearbyIsLoading(true));
//   dispatch(setOffersNearbyIsNotFound(false));

//   try {
//     const { data } = await api.get<TOfferItemProps[]>(
//       `${ApiRoute.Offers}/${id}/nearby`
//     );

//     if (data) {
//       dispatch(setOffersNearby(data));
//     }
//   } catch {
//     dispatch(setOffersNearbyIsNotFound(true));
//   } finally {
//     dispatch(setOffersNearbyIsLoading(false));
//   }
// });

// export const submitCommentAction = createAsyncThunk<
//   void,
//   CommentData,
//   {
//     dispatch: TAppDispatch;
//     state: TState;
//     extra: AxiosInstance;
//   }
// >(
//   'submitComment',
//   async ({ id, comment, rating }, { dispatch, extra: api }) => {
//     await api.post<CommentData>(`${ApiRoute.Comments}/${id}`, {
//       comment: comment,
//       rating: rating,
//     });

//     dispatch(fetchOfferCommentsAction(id));
//   }
// );
