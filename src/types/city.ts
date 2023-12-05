import { CITY_LIST } from '../../consts';
import { LocationType } from './locations';

export type CityOptionsType = (typeof CITY_LIST)[keyof typeof CITY_LIST];

export type CityType = {
  location: LocationType;
  name?: CityOptionsType;
};
