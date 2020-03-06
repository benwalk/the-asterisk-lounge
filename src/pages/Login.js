import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import GoogleLogin from "react-google-login";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: "url(./logo.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center"
  }
}));

function googleResponse(response) {
  console.log(response);
}

function buttons(classes, callback) {
  return (
    <List component="nav">
      <ListItem button onClick={callback}>
        <GoogleLogin
          clientId="--.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={googleResponse}
          onFailure={googleResponse}
          cookiePolicy={"single_host_origin"}
        />
      </ListItem>
    </List>
  );
}

export default function LoginPage() {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Layout menu={buttons(classes, handleClick)}>
      <Grid item xs={12} md={8}>
        <Box height="90vh" className={classes.image} />
      </Grid>
    </Layout>
  );
}
