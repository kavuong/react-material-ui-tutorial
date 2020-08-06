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
        <Grid container direction="column" justify="center" alignItems="center">
          <Introduction name="James Do" description={DESCRIPTION_TEXT} />
          <Section title="Description" />
        </Grid>
      </header>
    </div>
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
