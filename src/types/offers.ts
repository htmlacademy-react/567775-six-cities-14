import { TCity } from './city';
import { THost } from './host';
import { TLocation } from './locations';

export type TOfferItemProps = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: 'apartment' | 'room';
};

export type TOffersProps = {
  offers: TOfferItemProps[];
};
