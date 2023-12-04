import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { TOfferItemProps } from '../../types/offers';
import { TPoints } from '../../types/map';

export const getOffersNearby = (state: TState): TOfferItemProps[] =>
  state[NameSpace.OffersNearby].offersNearby;
export const getOffersNearbyIsLoading = (state: TState): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsLoading;
export const getOffersNearbyIsNotFound = (state: TState): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsNotFound;
export const getOffersNearbyMapPoints = (state: TState): TPoints[] =>
  state[NameSpace.OffersNearby].offersNearbyMapPoints;
