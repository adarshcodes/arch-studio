import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
	return (
		<div className="map-container">
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.54, -0.09]}>
					<Popup>3399 Wines Lane TX</Popup>
				</Marker>
				<Marker position={[51.5, -0.2]}>
					<Popup>3399 Wines Lane TX</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}

export default Map;
