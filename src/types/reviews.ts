import { UserType } from './user';

export type ReviewsItemProps = {
  comment: string;
  date: string | Date;
  id: number | string;
  rating: number;
  user: UserType;
};

export type ReviewsListProps = {
  id: number | string;
};

export type FormReviewsProps = {
  idOffer: string;
};
