import React from "react";
import { withStyles } from "@material-ui/core";
import UtilitiesTab from "./UtilitiesTab";
import Typography from "@material-ui/core/Typography";

const style = (theme) => ({
  sub: {
    position: "absolute",
    left: "351px",
    top: "120px",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "32px",
    width: "118px",
    height: "32px",
  },
});

const Utilities = (props) => {
  const { classes } = props;
  return (
    <div>
      <Typography className={classes.sub} variant="h5" component="h2">
        Services
      </Typography>
      <UtilitiesTab />
    </div>
  );
};

export default withStyles(style)(Utilities);
