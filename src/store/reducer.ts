import { createReducer } from '@reduxjs/toolkit';
import { setOffers } from './action';
import { offersData } from '../mocks/offers';
import { CITY_LIST } from '../../consts';

const DEFAULT_CITY = CITY_LIST.Paris;

const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offersData?.offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setOffers, (state, action) => {
    const { city } = action.payload;

    state.offers = state.offers.filter((item) => item?.city?.name === city);
  });
});

export { reducer };
