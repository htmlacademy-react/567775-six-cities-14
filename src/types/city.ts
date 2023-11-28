import { CITY_LIST } from '../../consts';
import { TLocation } from './locations';

export type TCityOptions = (typeof CITY_LIST)[keyof typeof CITY_LIST];

export type TCity = {
  location: TLocation;
  name?: TCityOptions;
};
