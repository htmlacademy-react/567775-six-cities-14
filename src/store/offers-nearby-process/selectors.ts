import { StateType } from '../../types/state';
import { NameSpace } from '../../../consts';
import { OfferItemPropsType } from '../../types/offers';
import { PointsType } from '../../types/map';

export const getOffersNearby = (state: StateType): OfferItemPropsType[] =>
  state[NameSpace.OffersNearby].offersNearby;
export const getOffersNearbyIsLoading = (state: StateType): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsLoading;
export const getOffersNearbyIsNotFound = (state: StateType): boolean =>
  state[NameSpace.OffersNearby].offersNearbyIsNotFound;
export const getOffersNearbyMapPoints = (state: StateType): PointsType[] =>
  state[NameSpace.OffersNearby].offersNearbyMapPoints;
