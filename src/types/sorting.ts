export type SortingOffersType =
  | 'popular'
  | 'price-low-to-high'
  | 'price-high-to-low'
  | 'top-rated';

export type SortingOptionType = {
  id: SortingOffersType;
  title: string;
  active?: boolean;
};

export type SortingListType = {
  list: SortingOptionType[];
};
