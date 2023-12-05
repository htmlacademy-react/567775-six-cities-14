import { StateType } from '../../types/state';
import { NameSpace } from '../../../consts';
import { OfferItemPropsType } from '../../types/offers';
import { CityOptionsType } from '../../types/city';

export const getOffers = (state: StateType): OfferItemPropsType[] =>
  state[NameSpace.Offers].offers;
export const getOffersIsLoading = (state: StateType): boolean =>
  state[NameSpace.Offers].offersIsLoading;
export const getOffersIsNoResult = (state: StateType): boolean =>
  state[NameSpace.Offers].offersIsNoResult;
export const getCityActive = (state: StateType): CityOptionsType =>
  state[NameSpace.Offers].cityActive;
