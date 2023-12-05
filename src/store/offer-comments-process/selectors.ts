import { StateType } from '../../types/state';
import { NameSpace } from '../../../consts';
import { ReviewsItemProps } from '../../types/reviews';

export const getOfferComments = (state: StateType): ReviewsItemProps[] =>
  state[NameSpace.Comments].offerComments;
export const getOfferCommentsIsLoading = (state: StateType): boolean =>
  state[NameSpace.Comments].offerCommentsIsLoading;
export const getOfferCommentsIsNotFound = (state: StateType): boolean =>
  state[NameSpace.Comments].offerCommentsIsNotFound;
export const getOfferCommentSubmitIsPending = (state: StateType): boolean =>
  state[NameSpace.Comments].offerCommentSubmitIsPending;
