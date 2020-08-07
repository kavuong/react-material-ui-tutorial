import React from "react";
import "./App.css";
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
import ShareIcon from "@material-ui/icons/Share";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const useStyles = makeStyles({
  image: {
    height: 500,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Container>
        <Typography variant="h1">James Do</Typography>
        <Typography variant="subtitle">
          I love talking about the Asian American Experience in a medical lens.
          Let's connect!
        </Typography>
        <div>
          <ShareIcon />
          <EditOutlinedIcon />
        </div>
      </Container>
    </Grid>
  );
}

export default App;
