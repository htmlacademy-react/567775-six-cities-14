import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { OfferCommentsProcess } from '../../types/state';
import { fetchOfferCommentsAction, submitCommentAction } from '../api-actions';

const initialState: OfferCommentsProcess = {
  offerComments: [],
  offerCommentsIsLoading: false,
  offerCommentsIsNotFound: false,
};

export const offerComments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.offerCommentsIsLoading = true;
        state.offerCommentsIsNotFound = false;
      })

      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        const offerCommentsData = action.payload;

        if (offerCommentsData.length > 0) {
          state.offerComments = offerCommentsData;
        }

        state.offerCommentsIsLoading = false;
      })

      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.offerCommentsIsLoading = false;
        state.offerCommentsIsNotFound = true;
      })

      .addCase(submitCommentAction.fulfilled, (state) => {
      })
  },
});
