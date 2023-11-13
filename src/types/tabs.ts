import { TCityOptions } from "./city";

export type TTabsItem = {
  id: TCityOptions;
  title: string;
};

export type TTabsList = {
  list: TTabsItem[];
  active: TCityOptions;
};
