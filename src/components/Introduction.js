import React from "react";
import { Grid, Typography, Container, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/ShareRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

export default function Introduction(props) {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">{props.name}</Typography>
          <Typography variant="subtitle">{props.description}</Typography>
          <div>
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <EditOutlinedIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="https://dawn-advocacy.s3-us-west-1.amazonaws.com/sample-images/Rectangle+64.png"></img>
        </Grid>
      </Grid>
    </Container>
  );
}
