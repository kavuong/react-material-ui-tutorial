import React from "react";
import {
  Grid,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ShareIcon from "@material-ui/icons/ShareRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const useStyles = makeStyles({
  start: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
  icon: {
    backgroundColor: "#FC7753",
    flex: 1,
    height: 37,
    width: 37,
    padding: 5,
    borderRadius: 30,
    fill: "white",
  },
});

export default function Introduction(props) {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.start}>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h4">{props.name}</Typography>
            <Typography variant="h5">{props.description}</Typography>
            <div>
              <IconButton>
                <ShareIcon className={classes.icon} />
              </IconButton>
              <IconButton>
                <EditOutlinedIcon className={classes.icon} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="https://dawn-advocacy.s3-us-west-1.amazonaws.com/sample-images/Rectangle+64.png"></img>
        </Grid>
      </Grid>
    </Container>
  );
}
