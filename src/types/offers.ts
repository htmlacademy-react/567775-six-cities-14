import { TCity } from './city';
import { THost } from './host';
import { TLocation } from './locations';

export type TOfferOnHover = {
  onHover?(id: number | undefined): void;
};

export type TOfferItemProps = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  id: number | string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage?: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type TOffersProps = {
  offers: TOfferItemProps[];
} & TOfferOnHover;
