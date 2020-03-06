import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

const useStyles = makeStyles(theme => ({
  contrastedIcon: {
    color: theme.palette.primary.contrastText
  },
  image: {
    backgroundImage: "url(./logo.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center"
  }
}));

function menu() {
  return <Menu />;
}
export default function Main(props) {
  const classes = useStyles();

  return (
    <Layout menu={menu()} auth={props.auth}>
      <Grid item xs={12} md={8}>
        <Box height="90vh" className={classes.image} />
      </Grid>
    </Layout>
  );
}
