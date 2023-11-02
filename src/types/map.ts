import { TCity } from './city';
import { TLocation } from './locations';

export type TMap = {
  city: TCity;
  points: TLocation[];
  selectedPoint: TLocation | undefined;
};
