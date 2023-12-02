import { TOfferItemProps } from './offers';

export type TFavoritesProps = {
  favorites: TOfferItemProps[];
};

export type FavoriteData = {
  offerId: string;
  status: number;
};
