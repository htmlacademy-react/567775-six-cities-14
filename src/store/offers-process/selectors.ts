import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { TOfferItemProps } from '../../types/offers';
import { TCityOptions } from '../../types/city';

export const getOffers = (state: TState): TOfferItemProps[] => state[NameSpace.Offers].offers;
export const getOffersIsLoading = (state: TState): boolean => state[NameSpace.Offers].offersIsLoading;
export const getCityActive = (state: TState): TCityOptions => state[NameSpace.Offers].cityActive;
