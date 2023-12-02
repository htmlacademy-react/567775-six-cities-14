import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { OffersNearbyProcess } from '../../types/state';
import { fetchOffersNearbyAction } from '../api-actions';

const initialState: OffersNearbyProcess = {
  offersNearby: [],
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false,
};

export const offersNearby = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.offersNearbyIsLoading = true;
        state.offersNearbyIsNotFound = false;
      })

      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        const offerNearbyData = action.payload;

        if (offerNearbyData.length > 0) {
          state.offersNearby = offerNearbyData;
        }

        state.offersNearbyIsLoading = false;
      })

      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.offersNearbyIsLoading = false;
        state.offersNearbyIsNotFound = true;
      });
  },
});
