import { createReducer } from '@reduxjs/toolkit';
import {
  getOffers,
  setCityActive,
  setSorting,
  setOffers,
  setOffersIsLoading,
  requireAuthorization,
  setOfferDetailIsLoading,
  setOfferDetail,
  setOfferDetailIsNotFound,
  setOfferComments,
  setOfferCommentsIsLoading,
  setOfferCommentsIsNotFound,
  setOffersNearby,
  setOffersNearbyIsLoading,
  setOffersNearbyIsNotFound,
} from './action';
import {
  AuthorizationStatus,
  DEFAULT_CITY,
  DEFAULT_SORTING,
} from '../../consts';
import { TInitState } from '../types/state';
import { offersSorting } from '../helpers';
import { getToket } from '../services/token';

const token = getToket();

const initialState: TInitState = {
  authorizationStatus: token
    ? AuthorizationStatus.Auth
    : AuthorizationStatus.Unknown,
  cityActive: DEFAULT_CITY,
  sortingBy: DEFAULT_SORTING,
  offersAll: [],
  offers: [],
  offersIsLoading: false,
  error: null,
  offerDetail: null,
  offerDetailIsLoading: false,
  offerDetailIsNotFound: false,
  offerComments: [],
  offerCommentsIsLoading: false,
  offerCommentsIsNotFound: false,
  offersNearby: [],
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setCityActive, (state, action) => {
      const { city } = action.payload;

      state.cityActive = city;
    })

    .addCase(setOffers, (state, action) => {
      const offetsData = action.payload;

      if (offetsData.length > 0) {
        state.offersAll = offetsData;
      }
    })

    .addCase(getOffers, (state) => {
      if (state.offersAll.length > 0) {
        const offersByCity = state.offersAll.filter(
          (item) => item?.city?.name === state.cityActive
        );

        state.offers = offersSorting(state.sortingBy, offersByCity);
      }
    })

    .addCase(setSorting, (state, action) => {
      const { sorting } = action.payload;

      state.sortingBy = sorting;
    })

    .addCase(setOffersIsLoading, (state, action) => {
      state.offersIsLoading = action.payload;
    })

    .addCase(setOfferDetail, (state, action) => {
      const offerDetailData = action.payload;

      if (offerDetailData) {
        state.offerDetail = offerDetailData;
      }
    })

    .addCase(setOfferDetailIsLoading, (state, action) => {
      state.offerDetailIsLoading = action.payload;
    })

    .addCase(setOfferDetailIsNotFound, (state, action) => {
      state.offerDetailIsNotFound = action.payload;
    })

    .addCase(setOfferComments, (state, action) => {
      state.offerComments = action.payload;
    })

    .addCase(setOfferCommentsIsLoading, (state, action) => {
      state.offerCommentsIsLoading = action.payload;
    })

    .addCase(setOfferCommentsIsNotFound, (state, action) => {
      state.offerCommentsIsNotFound = action.payload;
    })

    .addCase(setOffersNearby, (state, action) => {
      const offersNearbyData = action.payload;

      if (offersNearbyData) {
        state.offersNearby = offersNearbyData;
      }
    })

    .addCase(setOffersNearbyIsLoading, (state, action) => {
      state.offersNearbyIsLoading = action.payload;
    })

    .addCase(setOffersNearbyIsNotFound, (state, action) => {
      state.offersNearbyIsNotFound = action.payload;
    });
});

export { reducer };
