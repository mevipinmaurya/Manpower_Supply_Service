import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

// Default Leaflet icon fix for some builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapView({ address }) {
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!address) return;

      const fullAddress = [
        address?.street,
        address?.city,
        address?.state,
        address?.zip,
        address?.country
      ].filter(Boolean).join(', ');

      console.log("Geocoding address:", fullAddress);

      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
          params: {
            q: fullAddress,
            format: 'json',
            limit: 1
          },
          headers: {
            'Accept-Language': 'en',
            'User-Agent': 'ManPowerApp/1.0 (your@email.com)' // Replace with your app info
          }
        });

        console.log("Geocoding response:", response.data);

        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setCoordinates([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.warn("No coordinates found for address:", fullAddress);
        }
      } catch (error) {
        console.error('Geocoding error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <div className="w-full h-96 mt-6">
      {loading ? (
        <p className="text-center text-gray-500">Loading map...</p>
      ) : coordinates ? (
        <MapContainer
          center={coordinates}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              {[
                address?.street,
                address?.city,
                address?.state,
                address?.zip,
                address?.country
              ].filter(Boolean).join(', ')}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-center text-red-500">Location not found for this address.</p>
      )}
    </div>
  );
}
