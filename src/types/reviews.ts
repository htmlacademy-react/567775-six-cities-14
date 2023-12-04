import { TUser } from './user';

export type ReviewsItemProps = {
  comment: string;
  date: string | Date;
  id: number | string;
  rating: number;
  user: TUser;
};

export type ReviewsListProps = {
  id: number | string;
};

export type FormReviewsProps = {
  idOffer: string;
};
