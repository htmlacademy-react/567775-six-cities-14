export type TSortingOffers =
  | 'popular'
  | 'price-low-to-high'
  | 'price-high-to-low'
  | 'top-rated';

export type TSortingOption = {
  id: TSortingOffers;
  title: string;
  active?: boolean;
};

export type TSortingList = {
  list: TSortingOption[];
};
