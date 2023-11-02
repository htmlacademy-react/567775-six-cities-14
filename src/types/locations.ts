import { TOfferItemProps } from './offers';

export type TLocation = {
  latitude: number;
  longitude: number;
  title: string
};

export type TLocationsItemsProps = {
  city: string;
  list: TOfferItemProps[];
};
