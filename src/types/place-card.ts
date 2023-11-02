import { TOfferItemProps } from './offers';

export type TPlaceCardProps = Pick<
  TOfferItemProps,
  | 'price'
  | 'title'
  | 'rating'
  | 'type'
  | 'isPremium'
  | 'isFavorite'
  | 'previewImage'
  | 'id'
>;
