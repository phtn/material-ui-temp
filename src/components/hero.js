import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  CardMedia,
  CardActionArea
} from "@material-ui/core";
import PropTypes from "prop-types";

const Hero = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.hero}>
        <CardActionArea className={classes.action}>
          <CardContent>drag and drop your image here...</CardContent>
        </CardActionArea>
      </Card>

      
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 400
  },
  hero: {
    width: 600,
    height: 300,
    textAlign: 'center'
  },
  action: { height: 300 }
};

export default withStyles(styles)(Hero);
