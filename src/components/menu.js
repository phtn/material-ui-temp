import React from "react";
import {
  Drawer,
  withStyles,
  List,
  ListItem,
  Button,
  Icon
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import PropTypes from "prop-types";

const Menu = props => {
  const { classes, open, toggleDrawer } = props;

  // const toggleDrawer = () => setOpen(!open)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Drawer anchor='left' open={open} onClose={toggleDrawer}>
        <Sidebar
          className={classes.container}
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        />
      </Drawer>
    </div>
  );
};

const Sidebar = props => (
  <div {...props}>
    <List>
      {[<ArrowBack />, "Inbox", "Starred", "Send email", "Drafts"].map(item => (
        <ListItem key={item}>
          <Button size="small">{item}</Button>
        </ListItem>
      ))}
    </List>
  </div>
);

const styles = {
  container: {
    width: 150
  }
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
