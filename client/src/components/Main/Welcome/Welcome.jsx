import React from "react";
import useFetch from "../../../hooks/useFetch";

// Material UI
import { Typography } from "@mui/material";

const apodUrl = process.env.REACT_APP_APOD_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const url = apodUrl + apiKey;

const Welcome = () => {

  const { loading, result } = useFetch(url);
  const picture = result.hdurl;
  const explanation = result.explanation;

  return (
    <main className="welcome">
      { loading 
      ? <p>Loading...</p> 
      : 
      <section className="welcome__container">
        <Typography variant="h5" className="welcome__container-title">Welcome to the NASA app!</Typography>
        <Typography variant="subtitle1" className="welcome__container-subtitle">Here's the picture of the day</Typography>
        <img src={picture} className="welcome__picture" alt="apod"/>
        <Typography variant="body1">{explanation}</Typography>
      </section> }
      
    </main>
  );
}

export default Welcome;