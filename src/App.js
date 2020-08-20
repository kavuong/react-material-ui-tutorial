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

import Introduction from "./components/Introduction";
import Section from "./components/Section";

const DESCRIPTION_TEXT = `I love talking about the Asian American Experience in a medical lens.
Let's connect!`;

function App() {
  return (
    <div>
      <header>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </header>
      <Grid container justify="center" alignItems="center">
        <Introduction name="James Do" description={DESCRIPTION_TEXT} />

        <Section title="Organizations" />
      </Grid>
    </div>
  );
}

export default App;
