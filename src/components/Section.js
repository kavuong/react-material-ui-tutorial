import React from "react";
import { Grid, Typography, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import IndivCard from "./IndivCard";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const useStyles = makeStyles({
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

export default function Section(props) {
  const classes = useStyles();
  return (
    <Container>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography variant="h6">{props.title}</Typography>
        <IconButton>
          <EditOutlinedIcon className={classes.icon} />
        </IconButton>
      </div>
      <Grid container direction="row" justify="space-around">
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="BLM"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="Black Lives Matter"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="BLM"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="BLM"
          involvement="Volunteer"
        />
        <IndivCard
          image={require("../assets/blm.jfif")}
          title="BLM"
          involvement="Volunteer"
        />
      </Grid>
    </Container>
  );
}
