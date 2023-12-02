import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { TOfferItemProps } from '../../types/offers';

export const getOfferDetail = (state: TState): TOfferItemProps | null =>
  state[NameSpace.Offer].offerDetail;
export const getOfferDetailIsLoading = (state: TState): boolean =>
  state[NameSpace.Offer].offerDetailIsLoading;
export const getOfferDetailIsNotFound = (state: TState): boolean =>
  state[NameSpace.Offer].offerDetailIsNotFound;
