import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  miniBar: {
    top: "auto",
    bottom: 0,
    alignItems: "center"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function Layout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {props.menu}
        </Drawer>
      </Hidden>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        {props.children}
        <Hidden mdUp>
          <AppBar position="fixed" color="primary" className={classes.miniBar}>
            <Toolbar>{props.menu}</Toolbar>
          </AppBar>
        </Hidden>
      </Grid>
    </div>
  );
}
