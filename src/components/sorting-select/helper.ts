import { TSortingOption } from '../../types/sorting';

export function getTextById(id: string | number, list: TSortingOption[]) {
  return list.find((item: TSortingOption) => item.id === id)?.title;
}
