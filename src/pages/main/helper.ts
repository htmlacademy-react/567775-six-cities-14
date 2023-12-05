import { DEFAULT_CITY } from '../../../consts';
import { SortingOptionType } from '../../types/sorting';
import { TabsListType } from '../../types/tabs';

export const locations: TabsListType = {
  list: [
    {
      id: 'Paris',
      title: 'Paris',
    },
    {
      id: 'Cologne',
      title: 'Cologne',
    },
    {
      id: 'Brussels',
      title: 'Brussels',
    },
    {
      id: 'Amsterdam',
      title: 'Amsterdam',
    },
    {
      id: 'Hamburg',
      title: 'Hamburg',
    },
    {
      id: 'Dusseldorf',
      title: 'Dusseldorf',
    },
  ],
  active: DEFAULT_CITY,
};

export const placesOptions: SortingOptionType[] = [
  {
    id: 'popular',
    title: 'Popular',
    active: true,
  },
  {
    id: 'price-low-to-high',
    title: 'Price: low to high',
    active: false,
  },
  {
    id: 'price-high-to-low',
    title: 'Price: high to low',
    active: false,
  },
  {
    id: 'top-rated',
    title: 'Top rated first',
    active: false,
  },
];
