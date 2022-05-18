// React
import React, { useState } from "react";
import LandingsList from "./LandingsList/LandingsList";
import useFetch from "../../../hooks/useFetch";

// React Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from 'leaflet';

// Material UI
import { TextField, Button, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

// .env
const url = process.env.REACT_APP_API;

const Landings = () => {

  const [query, setQuery] = useState("landings");
  const [currentResult, setCurrentResult] = useState([]); // Sets Items from the API per page
  const { loading, result } = useFetch(url + query); // Gets data from the API
  const [name, setName] = useState("");
  const [classL, setClassL] = useState("");
  const [mass, setMass] = useState("");

  const setChildResult = (data) => {
    setCurrentResult(data) // Passes data from the initial request to the LandingsList child
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      setQuery("landings/name/" + name); // Sets the route of the query to be done.
      setCurrentResult(currentResult); // Updates the currentResult.
      setName("");
    } else if (classL !== "") {
      setQuery("landings/class/" + classL); // Sets the route of the query to be done.
      setCurrentResult(currentResult); // Updates the currentResult.
      setClassL("");
    } else if (mass !== "") {
      setQuery("landings/mass/" + mass); // Sets the route of the query to be done.
      setCurrentResult(currentResult); // Updates the currentResult.
      setMass("");
    }
  };

  // React Leaflet
  const LeafletIcon = L.Icon.extend({
    options: {}
  });

  const meteorIcon = new LeafletIcon({
    iconUrl: require('../../../assets/meteor.png'),
    iconSize: [14, 14]
  });

  // Function for painting a marker in the map for each landing
  const paintMarkers = () => {
    return currentResult.map(
      (item, i) => (
        item.reclat
          ? <Marker
            icon={meteorIcon}
            position={[parseInt(item.reclat), parseInt(item.reclong)]}
            key={i}>
            <Popup>{item.name}</Popup>
          </Marker>
          : []
      )
    )
  };

  return (
    <section className="landings">
      {loading
        ? <CircularProgress className="loading__spinner" />
        : <>
          <Typography variant="h5">Landings</Typography>

          <section className="landings__map-container">
            <MapContainer
              id="map"
              center={[51.505, -0.09]}
              zoom={2}
              scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                id="mapbox/satellite-v9"
              />
              {loading
                ? <Marker position={[51.505, -0.09]}>
                </Marker>
                : paintMarkers()}
            </MapContainer>

            <Typography variant="h6">Looking for a landing?</Typography>
            <form onSubmit={handleSubmit} className="landings__form">
              <TextField
                className="landings__form-field"
                id="1"
                label="Name of the landing."
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setClassL("")
                  setMass("")
                }}></TextField>
              <TextField
                className="landings__form-field"
                id="2"
                label="Class of the landing."
                variant="outlined"
                value={classL}
                onChange={(e) => {
                  setClassL(e.target.value)
                  setName("")
                  setMass("")
                }}></TextField>
              <TextField
                className="landings__form-field"
                id="3"
                label="Mass of the landing."
                variant="outlined"
                value={mass}
                onChange={(e) => {
                  setMass(e.target.value)
                  setName("")
                  setClassL("")
                }}></TextField>
              <Button type="submit" sx={{ display: "none" }}></Button>
            </form>
          </section>

          <LandingsList data={result} setChildResult={setChildResult} />

        </>
      }
    </section>
  )
};

export default Landings;
