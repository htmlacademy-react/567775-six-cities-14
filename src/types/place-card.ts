import { TOfferItemProps, TOfferOnHover } from './offers';

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
  | 'location'
> &
  TOfferOnHover;
