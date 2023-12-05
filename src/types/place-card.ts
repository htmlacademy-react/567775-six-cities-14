import { OfferItemPropsType, OfferOnHoverType } from './offers';

export type PlaceCardIsNearby = {
  isNearby?: boolean;
};

export type PlaceCardPropsType = Pick<
  OfferItemPropsType,
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
  OfferOnHoverType &
  PlaceCardIsNearby;
