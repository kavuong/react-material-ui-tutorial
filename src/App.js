import React from "react";
import "./App.css";
import { Grid, Typography, Container } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

function App() {
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
