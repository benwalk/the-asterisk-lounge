import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DiceIcon from "@material-ui/icons/Casino";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  listIcon: {
    minWidth: "40px"
  },
  listSubheader: {
    color: theme.palette.primary.contrastText
  }
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <List>
      <Link href="/login" passHref>
        <ListItem button divider="true">
          <ListItemIcon className={classes.listIcon}>
            <DiceIcon color="secondary" />
          </ListItemIcon>
          <ListItemText>
            <Typography>The Asterisk Lounge</Typography>
          </ListItemText>
        </ListItem>
      </Link>

      {["Posts", "People", "Collections"].map((text, index) => (
        <Link href={"/" + text.toLowerCase()} passHref>
          <ListItem button>
            <ListItemText>
              <Typography variant="overline">{text}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
