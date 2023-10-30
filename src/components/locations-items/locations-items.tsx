import { TLocationsItemsProps } from '../../types/locations';
import { FavoritesCard } from '../favorites-card';

export const LocationsItems: React.FC<TLocationsItemsProps> = ({
  city,
}: TLocationsItemsProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        {city && (
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        )}
      </div>
    </div>
    <div className="favorites__places">
      <FavoritesCard />
    </div>
  </li>
);
