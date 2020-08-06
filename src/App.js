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
      <Container style={{ flex: 1 }}>
        <Typography variant="h6">Organizations</Typography>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              image={require("./assets/blm.jfif")}
            />
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              image={require("./assets/blm.jfif")}
            />
          </CardActionArea>
        </Card>{" "}
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              image={require("./assets/blm.jfif")}
            />
          </CardActionArea>
        </Card>{" "}
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              image={require("./assets/blm.jfif")}
            />
          </CardActionArea>
        </Card>{" "}
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              image={require("./assets/blm.jfif")}
            />
            <CardContent>
              <Typography variant="h5">Black Lives Matter</Typography>
              <Typography variant="h6">Involvement</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Grid>
  );
}

export default App;
