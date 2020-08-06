import React from "react";
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
import IndivCard from "./IndivCard";

export default function Section(props) {
  return (
    <Container>
      <Typography variant="h6">{props.title}</Typography>
      <Grid container direction="row" justify="space-evenly">
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

      {/* <Card>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={require("../assets/blm.jfif")}
          />
        </CardActionArea>
      </Card>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={require("../assets/blm.jfif")}
          />
        </CardActionArea>
      </Card>{" "}
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={require("../assets/blm.jfif")}
          />
        </CardActionArea>
      </Card>{" "}
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={require("../assets/blm.jfif")}
          />
        </CardActionArea>
      </Card>{" "}
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={require("../assets/blm.jfif")}
          />
          <CardContent>
            <Typography variant="h5">Black Lives Matter</Typography>
            <Typography variant="h6">Involvement</Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </Container>
  );
}
