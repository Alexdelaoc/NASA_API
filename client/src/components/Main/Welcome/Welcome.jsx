import React from "react";
import useFetch from "../../../hooks/useFetch";

// Material UI
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

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
      ? <CircularProgress className="loading__spinner"/> 
      :  <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={picture}
          alt={result.title}
        />
        <CardContent style={{backgroundColor:"#F3F5F7"}}>
          <Typography gutterBottom variant="h5" component="div">
            {result.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      }
    </main>
  );
}

export default Welcome;