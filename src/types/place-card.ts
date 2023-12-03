import { TOfferItemProps, TOfferOnHover } from './offers';

export type PlaceCardIsNearby = {
  isNearby?: boolean;
};

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
  TOfferOnHover &
  PlaceCardIsNearby;
