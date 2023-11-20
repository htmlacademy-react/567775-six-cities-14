import { TCity } from './city';
import { TLocation } from './locations';

export type TPoints = {
  location: TLocation;
  name?: string;
};

export type TMap = {
  city: TCity;
  points: TPoints[];
  selectedPoint?: number | undefined;
};
