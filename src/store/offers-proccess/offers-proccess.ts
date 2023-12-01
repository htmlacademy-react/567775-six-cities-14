import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersProcess } from '../../types/state';
import { fetchOffersAction } from '../api-actions';
import { DEFAULT_CITY, DEFAULT_SORTING, NameSpace } from '../../../consts';
import { offersSorting } from '../../helpers';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  sortingBy: DEFAULT_SORTING,
  offersAll: [],
  offers: [],
  offersIsLoading: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffers(state) {
      if (state.offersAll.length > 0) {
        const offersByCity = state.offersAll.filter(
          (item) => item?.city?.name === state.cityActive
        );

        state.offers = offersSorting(state.sortingBy, offersByCity);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersIsLoading = true;
      })

      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersAll = action.payload;
        state.offersIsLoading = false;

        offersProcess.caseReducers.setOffers(state);
      })

      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersIsLoading = false;

        // offersProcess.caseReducers.getOffers();
      });

    // .addCase(checkAuthAction.rejected, (state) => {
    //   state.authorizationStatus = AuthorizationStatus.NoAuth;
    // })
    // .addCase(loginAction.fulfilled, (state) => {
    //   state.authorizationStatus = AuthorizationStatus.Auth;
    // })
    // .addCase(loginAction.rejected, (state) => {
    //   state.authorizationStatus = AuthorizationStatus.NoAuth;
    // })
    // .addCase(logoutAction.fulfilled, (state) => {
    //   state.authorizationStatus = AuthorizationStatus.NoAuth;
    // });
  },
});

export const { setOffers } = offersProcess.actions;
