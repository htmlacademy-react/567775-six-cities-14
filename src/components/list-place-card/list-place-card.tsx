import { PlaceCard } from '../../components/place-card';
import { TOffersProps } from '../../types/offers';
import { TPlaceCardProps } from '../../types/place-card';

export const ListPlaceCard: React.FC<TOffersProps> = ({ offers }) =>
  offers.map(
    ({
      price,
      title,
      rating,
      type,
      isPremium,
      isFavorite,
      previewImage,
      id,
    }: TPlaceCardProps) => (
      <PlaceCard
        price={price}
        title={title}
        rating={rating}
        type={type}
        isPremium={isPremium}
        isFavorite={isFavorite}
        previewImage={previewImage}
        id={id}
        key={id}
      />
    )
  );
