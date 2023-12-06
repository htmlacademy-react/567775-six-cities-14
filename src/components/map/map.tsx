import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../../consts';
import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from './map.module.css';
import { useMap } from '../../hooks/use-map';
import { MapType } from '../../types/map';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

export const Map: React.FC<MapType> = ({
  city,
  points,
  selectedPoint = undefined,
}: MapType) => {
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
            selectedPoint !== undefined && point?.location.id === selectedPoint
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
