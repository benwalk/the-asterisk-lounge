import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Breadcrumbs, Typography } from "@material-ui/core";
import Link from "next/Link";

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.contrastText,
    "text-decoration": "none",
    "&:hover, &:focus": {
      color: theme.palette.secondary.main,
      cursor: "pointer"
    }
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightMedium,
    flexGrow: 1
  },
  separator: {
    color: theme.palette.primary.contrastText
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Breadcrumbs
          aria-label="breadcrumb"
          classes={{
            separator: classes.separator
          }}
        >
          <Link href="/" passHref>
            <Typography variant="subtitle" className={classes.link}>
              The Asterisk Lounge
            </Typography>
          </Link>
          <Link href="/posts" passHref>
            <Typography variant="subtitle" className={classes.link}>
              Posts
            </Typography>
          </Link>
          <Typography variant="subtitle" className={classes.title}>
            Title
          </Typography>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
}
