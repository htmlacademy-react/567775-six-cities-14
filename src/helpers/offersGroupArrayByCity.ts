import { OfferItemPropsType } from '../types/offers';

type TGroupArrayByCity = {
  [key: string]: OfferItemPropsType[];
};

export function offersGroupArrayByCity(list: OfferItemPropsType[]) {
  const groupedList: TGroupArrayByCity = {};

  list.forEach((item) => {
    const cityName = item.city.name;

    if (cityName) {
      if (!groupedList[cityName]) {
        groupedList[cityName] = [];
      }

      groupedList[cityName].push(item);
    }
  });

  const resultList = [];

  for (const [key, value] of Object.entries(groupedList)) {
    const currentItem = {
      city: key,
      list: value || null,
    };

    resultList.push(currentItem);
  }

  return resultList;
}
