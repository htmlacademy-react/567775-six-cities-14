import { TOfferItemProps } from './offers';

export type TLocation = {
  latitude: number;
  longitude: number;
  id: number
};

export type TLocationsItemsProps = {
  city: string;
  list: TOfferItemProps[];
};
