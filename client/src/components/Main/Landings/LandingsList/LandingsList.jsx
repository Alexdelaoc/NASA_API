// React
import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import ExpandedLandingItem from "../ExpandedLandingItem/ExpandedLandingItem";

// Material UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// UUID
import { v4 as uuidv4 } from 'uuid';

const LandingsList = (props) => {

  // Paginator
  const pageLimit = 10; // Items limit per page

  const [offset, setOffset] = useState(0);
  const [currentResult, setCurrentResult] = useState([]); // API items per page
  const [currentPage, setCurrentPage] = useState(1);

  // useEffects
  useEffect(() => {
    setCurrentResult(props.data.slice(offset, offset + pageLimit));
  }, [offset, props.data]); // Slices the total array in segments (pages)

  useEffect(() => {
    props.setChildResult(currentResult)
  }) // Listens to every change in the app, so it updates the state. It gives the current data in the pages and sends it to the map

  // Function for painting the cards in the list
  const paintLandings = () => {
    return currentResult.map(
      (landing) => (
        <Card key={uuidv4()} sx={{ width: 340, margin: 1 }}>
          <CardHeader
            title={landing.name}
            subheader={landing.recclass}
          />
          <CardContent style={{padding:0}}>
            <Typography variant="body2" color="text.secondary">
              Mass: {landing.mass}
            </Typography>
          </CardContent>
          <ExpandedLandingItem data={landing} />
        </Card>
      )
    )
  };

  return (
    <div>
      <Paginator
        totalRecords={props.data.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <article className="landings__list">
        {paintLandings()}
      </article>
    </div>
  )
};

export default LandingsList;
