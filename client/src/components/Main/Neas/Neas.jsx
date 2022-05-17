// React
import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import NeasList from "./NeasList/NeasList";

// Material UI
import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

// .env
const url = process.env.REACT_APP_API;

const Neas = () => {

  // eslint-disable-next-line
  const [query, setQuery] = useState("neas");
  // eslint-disable-next-line
  const { loading, result } = useFetch(url + query);

  return (
    <section className="neas">
      {loading
        ? <CircularProgress className="loading__spinner" />
        : <>
          <Typography variant="h4">Near Earth Objects</Typography>
          <NeasList data={result} />
        </>

      }

    </section>
  )
};

export default Neas;
