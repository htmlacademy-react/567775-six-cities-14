import { mapDataCity, mapDataPoints } from '../../mocks/map';
import { TMap } from '../../types/map';
import { Map } from '../map';

export const CitiesMap: React.FC<TMap> = () => {
  return <Map city={mapDataCity} points={mapDataPoints} selectedPoint={undefined} />;
};
