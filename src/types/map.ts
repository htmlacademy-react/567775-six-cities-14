import { CityType } from './city';
import { LocationType } from './locations';

export type PointsType = {
  location: LocationType;
  name?: string;
};

export type MapType = {
  city: CityType;
  points: PointsType[];
  selectedPoint?: number | string | undefined;
};
