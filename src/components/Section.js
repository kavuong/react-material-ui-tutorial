import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import IndivCard from "./IndivCard";

export default function Section(props) {
  return (
    <Container>
      <Typography variant="h6">{props.title}</Typography>
      <Grid container>
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="Black Lives Matter"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="Black Lives Matter"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="Black Lives Matter"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="Black Lives Matter"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="Black Lives Matter"
          involvement="Volunteer"
        />
      </Grid>
    </Container>
  );
}
