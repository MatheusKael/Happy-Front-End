import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import LocalMark from "../images/local-mark.svg";
import { Map } from "react-leaflet";
import GoogleMapReact from "google-map-react";

import "leaflet/dist/leaflet.css";

import "../styles/pages/orphanages-page.css";

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
        zoomControl={false}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLEMAPS}` }}
          defaultCenter={{ lat: -20.4744192, lng: -55.7911925 }}
          defaultZoom={15}
          options={{ zoomControlOptions: { position: 1 } }}
        ></GoogleMapReact>
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
