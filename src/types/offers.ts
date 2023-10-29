export type OfferItemProps = {
  id: number;
  price: number;
  rating: number;
  title: string;
  text: 'Apartment' | 'Room';
  premium: boolean;
  favorites: boolean;
  image: string;
  imageAlt: string;
};

export type OffersProps = {
  offers: OfferItemProps[];
};
