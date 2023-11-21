import { createReducer } from '@reduxjs/toolkit';
import { getOffers, setCityActive, setSorting } from './action';
import { offersData } from '../mocks/offers';
import { DEFAULT_CITY, DEFAULT_SORTING } from '../../consts';
import { TInitState } from '../types/state';
import { offersSorting } from '../helpers';

const initialState: TInitState = {
  cityActive: DEFAULT_CITY,
  sortingBy: DEFAULT_SORTING,
  // offers: offersData?.offers.filter(
  //   (item) => item?.city?.name === DEFAULT_CITY
  // ),
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      const { city } = action.payload;

      state.cityActive = city;
    })

    .addCase(getOffers, (state) => {
      const offersByCity = offersData?.offers.filter(
        (item) => item?.city?.name === state.cityActive
      );

      state.offers = offersSorting(state.sortingBy, offersByCity);
    })

    .addCase(setSorting, (state, action) => {
      const { sorting } = action.payload;

      state.sortingBy = sorting;
    });
});

export { reducer };
