import { PlaceCard } from '../../components/place-card';
import { OfferItemProps, OffersProps } from '../../types/offers';

export const ListPlaceCard: React.FC<OffersProps> = ({ offers }) =>
  offers.map(
    ({
      id,
      title,
      text,
      price,
      rating,
      favorites,
      image,
      imageAlt,
      premium,
    }: OfferItemProps) => (
      <PlaceCard
        title={title}
        price={price}
        rating={rating}
        favorites={favorites}
        image={image}
        imageAlt={imageAlt}
        premium={premium}
        text={text}
        id={id}
        key={id}
      />
    )
  );
