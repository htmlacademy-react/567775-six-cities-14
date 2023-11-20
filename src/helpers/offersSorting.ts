import { TOfferItemProps } from '../types/offers';

export function offersSorting(sortBy: string, list: TOfferItemProps[]) {
  switch (sortBy) {
    case 'price-low-to-high':
      return list.sort((a, b) => a.price - b.price);
    case 'price-high-to-low':
      return list.sort((a, b) => b.price - a.price);
    case 'top-rated':
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}
