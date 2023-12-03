import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { OfferDetailProcess } from '../../types/state';
import { fetchOfferDetailAction } from '../api-actions';

const initialState: OfferDetailProcess = {
  offerDetail: null,
  offerDetailIsLoading: false,
  offerDetailIsNotFound: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setFavoriteOfferDetail(state, action: PayloadAction<boolean>) {
      if (state.offerDetail) {
        state.offerDetail.isFavorite = action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferDetailAction.pending, (state) => {
        state.offerDetailIsLoading = true;
        state.offerDetailIsNotFound = false;
      })

      .addCase(fetchOfferDetailAction.fulfilled, (state, action) => {
        const offerDetailData = action.payload;

        if (offerDetailData) {
          state.offerDetail = offerDetailData;
        }

        state.offerDetailIsLoading = false;
      })

      .addCase(fetchOfferDetailAction.rejected, (state) => {
        state.offerDetailIsLoading = false;
        state.offerDetailIsNotFound = true;
      });
  },
});

export const { setFavoriteOfferDetail } = offerProcess.actions;
