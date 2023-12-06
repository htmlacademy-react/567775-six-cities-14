import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersProcess } from '../../types/state';
import { fetchOffersAction } from '../api-actions';
import { DEFAULT_CITY, DEFAULT_SORTING, NameSpace } from '../../../consts';
import { offersSorting } from '../../helpers';
import { CityOptionsType } from '../../types/city';
import { SortingOffersType } from '../../types/sorting';
import { OfferItemPropsType } from '../../types/offers';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  sortingBy: DEFAULT_SORTING,
  offersAll: [],
  offers: [],
  offersIsLoading: false,
  offersIsNoResult: false,
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

        const offersByCityAddLocationId = offersByCity.map((item) => ({
          ...item,
          location: { ...item.location, id: item.id },
        }));

        state.offers = offersSorting(
          state.sortingBy,
          offersByCityAddLocationId
        );
      }
    },

    setCityActive(state, action: PayloadAction<{ city: CityOptionsType }>) {
      const { city } = action.payload;

      state.cityActive = city;
    },

    setSorting(state, action: PayloadAction<{ sorting: SortingOffersType }>) {
      const { sorting } = action.payload;

      state.sortingBy = sorting;
    },

    setFavoriteOffer(state, action: PayloadAction<OfferItemPropsType>) {
      const offerFavorite = action.payload;
      const offerFavoriteFull = {
        ...offerFavorite,
        location: { ...offerFavorite.location, id: offerFavorite.id },
      };

      state.offers = state.offers.map((item: OfferItemPropsType) =>
        item.id === offerFavoriteFull.id ? offerFavoriteFull : item
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersIsLoading = true;
      })

      .addCase(
        fetchOffersAction.fulfilled,
        (state, action: PayloadAction<OfferItemPropsType[]>) => {
          state.offersAll = action.payload;
          state.offersIsLoading = false;

          offersProcess.caseReducers.setOffers(state);

          if (state.offersAll.length < 1) {
            state.offersIsNoResult = true;
          }
        }
      )

      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersIsLoading = false;
        state.offersIsNoResult = true;
      });
  },
});

export const { setOffers, setCityActive, setSorting, setFavoriteOffer } =
  offersProcess.actions;
