import { DEFAULT_CITY } from '../../../consts';
import { TTabsList } from '../../types/tabs';

type TListProps = {
  id: number | string;
  title: string;
  active?: boolean;
}[];

export const locations: TTabsList = {
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

export const placesOptions: TListProps = [
  {
    id: 1,
    title: 'Popular',
    active: true,
  },
  {
    id: 2,
    title: 'Price: low to high',
    active: false,
  },
  {
    id: 3,
    title: 'Price: high to low',
    active: false,
  },
  {
    id: 4,
    title: 'Top rated first',
    active: false,
  },
];
