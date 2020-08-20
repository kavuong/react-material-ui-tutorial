import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Introduction from "./components/Introduction";
import Section from "./components/Section";

const DESCRIPTION_TEXT = `I love talking about the Asian American Experience in a medical lens.
Let's connect!`;

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Nunito Sans",
      h4: {
        fontWeight: "bold",
      },
      h6: {
        fontWeight: "bold",
      },
    },
  });
  return (
    <div>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </header>
      <ThemeProvider theme={theme}>
        <Grid container justify="center" alignItems="center">
          <Introduction name="James Do" description={DESCRIPTION_TEXT} />

          <Section title="Organizations" />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
