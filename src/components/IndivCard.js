import React from "react";

import {
  Grid,
  Typography,
  Container,
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
    backgroundColor: "purple",
    width: "70%",
    borderRadius: 20,
  },
});

export default function IndivCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.image} image={props.image} />
        <CardContent className={classes.content}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography className={classes.tag} variant="h6">
            {props.involvement}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
