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
  card: {
    width: 210,
    height: 247,
  },
  image: {
    height: 150,
  },
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tag: {
    marginTop: 5,
    backgroundColor: "#7B82BE",
    width: "70%",
    borderRadius: 20,
    color: "white",
  },
});

export default function IndivCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.image} image={props.image} />
        <CardContent className={classes.content}>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.tag} variant="subtitle1">
            {props.involvement}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
