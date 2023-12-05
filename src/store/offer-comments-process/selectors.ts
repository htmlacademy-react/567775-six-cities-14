import { TState } from '../../types/state';
import { NameSpace } from '../../../consts';
import { ReviewsItemProps } from '../../types/reviews';

export const getOfferComments = (state: TState): ReviewsItemProps[] =>
  state[NameSpace.Comments].offerComments;
export const getOfferCommentsIsLoading = (state: TState): boolean =>
  state[NameSpace.Comments].offerCommentsIsLoading;
export const getOfferCommentsIsNotFound = (state: TState): boolean =>
  state[NameSpace.Comments].offerCommentsIsNotFound;
export const getOfferCommentSubmitIsPending = (state: TState): boolean =>
  state[NameSpace.Comments].offerCommentSubmitIsPending;
