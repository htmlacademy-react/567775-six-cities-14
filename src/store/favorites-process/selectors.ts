import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { TOfferItemProps } from '../../types/offers';

export const getFavorites = (state: TState): TOfferItemProps[] =>
  state[NameSpace.Favorites].favorites;
