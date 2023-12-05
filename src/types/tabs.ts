import { CityOptionsType } from './city';

export type TabsItemType = {
  id: CityOptionsType;
  title: CityOptionsType;
};

export type TabsListType = {
  list: TabsItemType[];
  active: CityOptionsType;
};
