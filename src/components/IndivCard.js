import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  image: {
    height: 150,
  },
});

export default function IndivCard(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.image} image={props.image} />
        <CardContent>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="h6">{props.involvement}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
