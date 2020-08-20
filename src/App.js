import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";

import Introduction from "./components/Introduction";
import Section from "./components/Section";

const DESCRIPTION_TEXT = `I love talking about the Asian American Experience in a medical lens.
Let's connect!`;

function App() {
  return (
    <Grid container justify="center" alignItems="center">
      <Introduction name="James Do" description={DESCRIPTION_TEXT} />

      <Section title="Organizations" />
    </Grid>
  );
}

export default App;
