import { TCityOptions } from './city';

export type TTabsItem = {
  id: TCityOptions;
  title: TCityOptions;
};

export type TTabsList = {
  list: TTabsItem[];
  active: TCityOptions;
};
