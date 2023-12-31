import { combineReducers } from '@reduxjs/toolkit';
import { userProcess } from './user-process/user-process';
import { NameSpace } from '../../consts';
import { offersProcess } from './offers-process/offers-process';
import { offerProcess } from './offer-process/offer-process';
import { offerComments } from './offer-comments-process/offer-comments-process';
import { offersNearby } from './offers-nearby-process/offers-nearby-process';
import { errorMessage } from './error-message-process/error-mewssage-process';
import { favoritesOffer } from './favorites-process/favorites-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: offerComments.reducer,
  [NameSpace.OffersNearby]: offersNearby.reducer,
  [NameSpace.ErrorMessage]: errorMessage.reducer,
  [NameSpace.Favorites]: favoritesOffer.reducer,
});
