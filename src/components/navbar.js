import React from "react";
import { AppBar, Toolbar, Icon, Button, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
const menuItems = [<Menu />];

export default props => {
  const { container, bar, btn, toggleDrawer } = props;
  return (
    <AppBar position="static" className={container}>
      <Toolbar className={bar}>
        <Typography variant="h6" color="inherit" className={container}>
          Navbar
        </Typography>
        {menuItems.map(item => (
          <Button
            key={menuItems.indexOf(item)}
            variant="outlined"
            size="small"
            component="span"
            className={btn}
            color="inherit"
            onClick={toggleDrawer}
          >
            <Icon>{item}</Icon>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
