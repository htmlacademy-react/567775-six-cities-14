import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../../consts';
import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from './map.module.css';
import { useMap } from '../../hooks/use-map';
import { TMap } from '../../types/map';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const Map: React.FC<TMap> = ({ city, points, selectedPoint = undefined }: TMap) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point?.location.latitude,
          lng: point?.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point?.location.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div className={styled.map} ref={mapRef}></div>;
};
