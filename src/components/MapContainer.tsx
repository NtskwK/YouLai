import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export function MapContainer() {
	useEffect(() => {
		const map = L.map("map", {
			attributionControl: false,
		}).setView([51.505, -0.09], 13);

		L.tileLayer(
			"https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
			{
				attribution: undefined,
			},
		).addTo(map);

		return () => {
			map.remove();
		};
	}, []);

	return <div id="map" className="h-full w-full overflow-hidden"></div>;
}
