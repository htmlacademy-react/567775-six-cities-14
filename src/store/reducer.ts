import { createReducer } from '@reduxjs/toolkit';
import { getOffers, setCityActive } from './action';
import { offersData } from '../mocks/offers';
import { DEFAULT_CITY } from '../../consts';
import { TInitState } from '../types/state';

const initialState: TInitState = {
  cityActive: DEFAULT_CITY,
  offers: offersData?.offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      const { city } = action.payload;

      state.cityActive = city;
    })

    .addCase(getOffers, (state) => {
      state.offers = offersData?.offers.filter(
        (item) => item?.city?.name === state.cityActive
      );
    });
});

export { reducer };
