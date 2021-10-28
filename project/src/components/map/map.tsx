import { useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: Offer;
};

function Map({ city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
