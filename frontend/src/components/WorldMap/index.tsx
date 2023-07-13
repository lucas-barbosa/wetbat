/* eslint-disable tailwindcss/no-custom-classname */
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, ImageOverlay, ZoomControl, Marker, Popup, FeatureGroup } from 'react-leaflet';

const bounds = [
  [-47, 45],
  [0,-55]
];

const markerIcon = new Icon({
  iconUrl: '/map-marker.svg',
  iconSize: [24, 24],
});

const places = [
  { position: [-9,-50] },
  { position: [-19,-42] },
  { position: [-24,-37] },
  { position: [-26,-32] },
  { position: [-29,-26] },
  { position: [-34,-18] },
  { position: [-39,-24] },
  { position: [-28, 9] },
  { position: [-22, 11] },
  { position: [-17, -4] },
  { position: [-14, -7.5] },
  { position: [-19, -7] },
  { position: [-20, 1] },
  { position: [-17, 3] },
  { position: [-37, 33] },
  { position: [-27, 27] },
  { position: [-9, 22] },
];

export const WorldMap = () => (
  <MapContainer
    bounds={bounds}
    // maxBounds={bounds}
    minZoom={3}
    center={[0,0]}
    zoomControl={false}
    style={{ flex: '1', width: '100%', height: '100%', background: 'transparent' }}>
      <ImageOverlay bounds={[[-47,45],[0,-55]]} url="/map.png" />

      <ZoomControl position="bottomleft" />

      <FeatureGroup>
        {places.map((place, index) => (
          <Marker key={`marker-${index}`} position={place.position} icon={markerIcon}>
            <Popup autoPan={false} position="left">
              <section className="max-w-[180px]">
                <img src="/beach.webp" alt="Beach image" className="mb-2 w-full rounded-md object-cover" />

                <h3 className="text-sm font-bold text-primary-500">Lorem ipsum dolor sit</h3>
                <p className="text-xs text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-xs font-medium uppercase text-primary-500">
                    <span>$12345</span>
                    <span>Pre-Night</span>
                  </div>

                  <button type="button" className="rounded-2xl bg-accent-500 px-6 py-1 text-sm font-medium text-white">Details</button>
                </div>
              </section>
            </Popup>
          </Marker> 
        ))}
      </FeatureGroup>
  </MapContainer>
);