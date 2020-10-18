import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import LocalMark from "../images/map-marker.svg";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-page.css";

const mapIcon = leaflet.icon({
  iconUrl: LocalMark,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={LocalMark} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Anastácio</strong>
          <span>Mato Grosso do Sul</span>
        </footer>
      </aside>
      <Map
        center={[-20.4744192, -55.7911925]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-20.4744192, -55.7911925]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxwidth={240}
            className="map-popup"
          >
            ORFANATO
            <Link to="/orphanage/1">
              <FiArrowRight size={32} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
