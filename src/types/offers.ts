import { CityType } from './city';
import { HostType } from './host';
import { LocationType } from './locations';
import { PlaceCardIsNearby } from './place-card';

export type OfferOnHoverType = {
  onHover?(id: number | string | undefined): void;
};

export type OfferItemPropsType = {
  bedrooms: number;
  city: CityType;
  description: string;
  goods: string[];
  host: HostType;
  id: number | string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationType;
  maxAdults: number;
  previewImage?: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersPropsType = {
  offers: OfferItemPropsType[];
} & OfferOnHoverType & PlaceCardIsNearby
