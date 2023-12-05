import { OfferItemPropsType } from './offers';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
  id?: number | string;
};

export type TLocationsItemsProps = {
  city: string;
  list: OfferItemPropsType[];
};
