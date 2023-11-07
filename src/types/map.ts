import { TCity } from './city';
import { TLocation } from './locations';

type TPoints = {
  location: TLocation;
  name?: string;
};

export type TMap = {
  city: TCity;
  points: TPoints[];
  selectedPoint: TLocation | undefined;
};
