import { StateType } from '../../types/state';
import { NameSpace } from '../../../consts';
import { OfferItemPropsType } from '../../types/offers';

export const getOfferDetail = (state: StateType): OfferItemPropsType | null =>
  state[NameSpace.Offer].offerDetail;
export const getOfferDetailIsLoading = (state: StateType): boolean =>
  state[NameSpace.Offer].offerDetailIsLoading;
export const getOfferDetailIsNotFound = (state: StateType): boolean =>
  state[NameSpace.Offer].offerDetailIsNotFound;
