import { StateType } from '../../types/state';
import { NameSpace } from '../../../consts';
import { OfferItemPropsType } from '../../types/offers';

export const getFavorites = (state: StateType): OfferItemPropsType[] =>
  state[NameSpace.Favorites].favorites;
export const getFavoritesIsLoading = (state: StateType): boolean =>
  state[NameSpace.Favorites].favoritesIsLoading;
export const getFavoritesIsNotFound = (state: StateType): boolean =>
  state[NameSpace.Favorites].favoritesIsNotFound;
