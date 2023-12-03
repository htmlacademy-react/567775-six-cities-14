import { PlaceCard } from '../../components/place-card';
import { TOffersProps } from '../../types/offers';
import { TPlaceCardProps } from '../../types/place-card';

export const ListPlaceCard: React.FC<TOffersProps> = ({
  offers,
  onHover,
  isNearby,
}) =>
  offers.map((item: TPlaceCardProps) => (
    <PlaceCard {...item} key={item?.id} onHover={onHover} isNearby={isNearby} />
  ));
