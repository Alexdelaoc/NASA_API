// React
import React, { useState } from "react";

// Material UI
import { styled } from "@mui/material/styles";
import { CardContent, CardActions, Collapse, IconButton, Typography, Button, } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartOutlined';

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

const ExpandedNeaItem = (props) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <CardActions disableSpacing style={{ padding: 3 }}>
        <Button>
          <AddShoppingCartRoundedIcon style={{color: "#0E161B"}}></AddShoppingCartRoundedIcon>
        </Button>
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
          <Typography paragraph>Discovery date: {props.data.discovery_date}</Typography>
          <Typography paragraph>Estimated trayectory: Between {props.data.q_au_1} and {props.data.q_au_2}  Astronomical Units</Typography>
        </CardContent>
      </Collapse>
    </div>
  )
};

export default ExpandedNeaItem;