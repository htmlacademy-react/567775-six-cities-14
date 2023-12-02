import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { ReviewsItemProps } from '../../types/reviews';

export const getOfferComments = (state: TState): ReviewsItemProps[] =>
  state[NameSpace.Comments].offerComments;
export const getofferCommentsIsLoading = (state: TState): boolean =>
  state[NameSpace.Comments].offerCommentsIsLoading;
export const getOfferofferCommentsIsNotFound = (state: TState): boolean =>
  state[NameSpace.Comments].offerCommentsIsNotFound;