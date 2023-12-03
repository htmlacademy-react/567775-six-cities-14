import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { OffersNearbyProcess } from '../../types/state';
import { fetchOffersNearbyAction } from '../api-actions';
import { TOfferItemProps } from '../../types/offers';

const initialState: OffersNearbyProcess = {
  offersNearby: [],
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false,
};

export const offersNearby = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {
    setFavoriteNearby(state, action: PayloadAction<TOfferItemProps>) {
      const nearbyFavorite = action.payload;

      state.offersNearby = state.offersNearby.map((item: TOfferItemProps) =>
        item.id === nearbyFavorite.id ? nearbyFavorite : item
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.offersNearbyIsLoading = true;
        state.offersNearbyIsNotFound = false;
      })

      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        const offerNearbyData = action.payload;

        if (offerNearbyData.length > 0) {
          state.offersNearby = [...offerNearbyData].slice(0, 3);
        }

        state.offersNearbyIsLoading = false;
      })

      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.offersNearbyIsLoading = false;
        state.offersNearbyIsNotFound = true;
      });
  },
});

export const { setFavoriteNearby } = offersNearby.actions;
