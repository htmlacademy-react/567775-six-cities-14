import { PlaceCard } from '../../components/place-card';
import { OffersPropsType } from '../../types/offers';
import { PlaceCardPropsType } from '../../types/place-card';

export const ListPlaceCard: React.FC<OffersPropsType> = ({
  offers,
  onHover,
  isNearby,
}) =>
  offers.map((item: PlaceCardPropsType) => (
    <PlaceCard {...item} key={item?.id} onHover={onHover} isNearby={isNearby} />
  ));
