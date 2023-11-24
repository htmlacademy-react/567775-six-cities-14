import { createReducer } from '@reduxjs/toolkit';
import {
  getOffers,
  setCityActive,
  setSorting,
  setOffers,
  setOffersIsLoading,
} from './action';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../../consts';
import { TInitState } from '../types/state';
import { offersSorting } from '../helpers';

const initialState: TInitState = {
  cityActive: DEFAULT_CITY,
  sortingBy: DEFAULT_SORTING,
  offersAll: [],
  offers: [],
  offersIsLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      const { city } = action.payload;

      state.cityActive = city;
    })

    .addCase(setOffers, (state, action) => {
      const offetsData = action.payload;

      if (offetsData.length) {
        state.offersAll = offetsData;
      }
    })

    .addCase(getOffers, (state) => {
      if (state.offersAll.length) {
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
    });
});

export { reducer };
