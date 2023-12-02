import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../consts';
import { favoritesProcess } from '../../types/state';
import { fetchFavoritesAction, setFavoritesAction } from '../api-actions';

const initialState: favoritesProcess = {
  favorites: [],
  favoritesIsLoading: false,
};

export const favoritesOffer = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesIsLoading = true;
      })

      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const offerFavoriteData = action.payload;

        if (offerFavoriteData.length > 0) {
          state.favorites = offerFavoriteData;
        }

        state.favoritesIsLoading = false;
      })

      .addCase(setFavoritesAction.fulfilled, (state, action) => {
        const offerFavoriteData = action.payload;

        if (offerFavoriteData?.isFavorite) {
          state.favorites.push(offerFavoriteData);
        } else {
          state.favorites = state.favorites.filter(
            (item) => item.id !== offerFavoriteData.id
          );
        }
      });
  },
});
