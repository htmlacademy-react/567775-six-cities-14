import { SortingOptionType } from '../../types/sorting';

export function getTextById(id: string | number, list: SortingOptionType[]) {
  return list.find((item: SortingOptionType) => item.id === id)?.title;
}
