import React from "react";
import "./App.css";
import { Grid, Typography, Container, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

function App() {
  return (
    // Container: justifies all content towards the center of the page
    <Container>
      {/* Grid with container attribute makes a grid that abides by the flex layout model */}
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">James Do</Typography>
          <Typography variant="subtitle">
            I love talking about the Asian American Experience in a medical
            lens. Let's connect!
          </Typography>
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

export default App;
