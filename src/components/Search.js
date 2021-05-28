import React from "react";
import {
  withStyles,
  Grid,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const style = (theme) => ({
  root: {
    backgroundColor: "#ffff",
    boxShow: "0px 0px 0px 0px",
    border: "2px solid #ECF0F1",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    top:'-20px',
    fontSize: "0.8rem",
    border: "3px solid #B7BDBF",
    width:'456px',
    height:'48px',
    borderRadius: "5px",
    "&.hover": {
      backgroundColor: "#ffff",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
});

const Search = (props) => {
  const { classes } = props;

  return (
          <Grid item>
            <InputBase
              placeholder="Search"
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="medium" />}
            />
          </Grid>
  );
};

export default withStyles(style)(Search);
