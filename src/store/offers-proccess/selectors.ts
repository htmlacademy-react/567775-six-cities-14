import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { TOfferItemProps } from '../../types/offers';

export const getOffers = (state: TState): TOfferItemProps[] => state[NameSpace.Offers].offers;
export const getOffersIsLoading = (state: TState): boolean => state[NameSpace.Offers].offersIsLoading;
