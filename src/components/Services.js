import React from "react";
import { withStyles } from "@material-ui/core";
import TabServices from "./TabServices"
import {Divider} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import coverage from "../assets/coverage.png"

const style = (theme) => ({
    root:{
        position: "absolute",
    textDecorationLine: "underline",
    width: "471px",
    height: "24px",
    left: "360px",
    top: "120px",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#4B4B4B",
    },
    sub: {
        position: "absolute",
        width: "553px",
        height: "32px",
        left: "416px",
        top: "188px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "28px",
        lineHeight: "32px",
        display: "flex",
        color: "#000000",
      },
   divide:{
    width:'10px',
    position:'absolute',
    height:'30px',
    top:'60px'
  },img:{
    position:'static',
    marginRight:'16px'
    ,marginLeft:'-50px'
  }
  
});

const Services = (props) => {
  const { classes } = props;
  return (
    <>

      <Typography className={classes.root} variant="h5" component="h2">
      Services / Coverage / medicare Advantage -Dental-MADL0977
</Typography>

<Typography 
className={classes.sub} 
variant="h5" component="h2">
  <img src={coverage}
    className={classes.img} 
    alt="coverage-img" /> 
      Medicare Advantage -Dental-MADL0977
</Typography>
  <TabServices /> 
    <Divider className={classes.divide} /> 
  
    </>
  );
};

export default withStyles(style)(Services);
