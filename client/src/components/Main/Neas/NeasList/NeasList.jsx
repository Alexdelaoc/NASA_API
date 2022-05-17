// React
import React, { useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";

// Material UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//UUID
import { v4 as uuidv4 } from 'uuid';
import ExpandedNeaItem from "../ExpandedNeaItem/ExpandedNeaItem";

const NeasList = (props) => {

  // Paginator
  const pageLimit = 20; // Items limit per page

  const [offset, setOffset] = useState(0);
  const [currentResult, setCurrentResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffects
  useEffect(() => {
    setCurrentResult(props.data.slice(offset, offset + pageLimit));
  }, [offset, props.data]); // Slices the total array in segments (pages)


  // Function for painting the cards in the list
  const paintNeas = () => {
    return currentResult.map(
      (nea) => (
        <Card key={uuidv4()} sx={{ width: 340, margin: 1 }}>
          <CardHeader
            title={nea.orbit_class}
            subheader={nea.pha === "Y"
            ? "Potentially Hazardous Object"
            : "Not Hazardous"}
          />
          <CardContent style={{ padding: 0 }}>
            <Typography variant="body2" color="text.secondary">
              Minimum Object Intesection Distance: {nea.moid_au}
            </Typography>
          </CardContent>
          <ExpandedNeaItem data={nea}/>
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
      <article className="neas__list">
        {paintNeas()}
      </article>
    </div>)
};

export default NeasList;
