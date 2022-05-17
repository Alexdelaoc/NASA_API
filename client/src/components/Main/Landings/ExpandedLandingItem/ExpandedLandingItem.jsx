// React
import React, { useState } from "react";

// Material UI
import { styled } from "@mui/material/styles";
import { CardContent, CardActions, Collapse, IconButton, Typography, } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Externalizing the expanding funtionality so we can give it it's own expanded state
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Expanded = (props) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <CardActions disableSpacing style={{ padding: 3 }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Mass: {props.data.mass}</Typography>
          <Typography paragraph>Fall: {props.data.fall}</Typography>
          <Typography>
            Geolocation: {props.data.reclat}, {props.data.reclong}
          </Typography>
        </CardContent>
      </Collapse>
    </div>
  )
};

export default Expanded;
