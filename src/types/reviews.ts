import { TUser } from './user';

export type TReviewsItem = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: TUser;
};

export type TReviewsList = {
  list: TReviewsItem[];
};
