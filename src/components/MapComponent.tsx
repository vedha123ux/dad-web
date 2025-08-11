'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix marker icons not loading
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface MapProps {
  cities: { name: string; coords: [number, number] }[];
}

export default function MapComponent({ cities }: MapProps) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '400px', width: '100%', marginTop: '1rem' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      {cities.map((city, index) => (
        <Marker key={index} position={city.coords}>
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
