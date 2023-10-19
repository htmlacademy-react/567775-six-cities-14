type TListProps = {
  id: number;
  title: string;
  active: boolean;
}[];

export const locations: TListProps = [
  {
    id: 1,
    title: 'Paris',
    active: false,
  },
  {
    id: 2,
    title: 'Cologne',
    active: false,
  },
  {
    id: 3,
    title: 'Brussels',
    active: false,
  },
  {
    id: 4,
    title: 'Amsterdam',
    active: true,
  },
  {
    id: 5,
    title: 'Hamburg',
    active: false,
  },
  {
    id: 6,
    title: 'Dusseldorf',
    active: false,
  },
];

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
