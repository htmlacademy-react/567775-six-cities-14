import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { OffersNearbyProcess } from '../../types/state';
import { fetchOffersNearbyAction } from '../api-actions';
import { OfferItemPropsType } from '../../types/offers';

const initialState: OffersNearbyProcess = {
  offersNearby: [],
  offersNearbyIsLoading: false,
  offersNearbyIsNotFound: false,
  offersNearbyMapPoints: [],
};

export const offersNearby = createSlice({
  name: NameSpace.OffersNearby,
  initialState,
  reducers: {
    setFavoriteNearby(state, action: PayloadAction<OfferItemPropsType>) {
      const nearbyFavorite = action.payload;

      state.offersNearby = state.offersNearby.map((item: OfferItemPropsType) =>
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

          state.offersNearbyMapPoints = state.offersNearby.map((item) => ({
            location: { ...item.location },
          }));
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
