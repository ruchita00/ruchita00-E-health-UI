import {  withStyles } from "@material-ui/core";
import React from "react";
import Congratulations from "./popupWindows/Congratulations"
import Typography from "@material-ui/core/Typography"
// import Toolbar from "@material-ui/core/Toolbar"
// import Button from "@material-ui/core/Button"
// import ExpandMoreIcon from "@material-ui/core/ExpandMoreIcon"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DropdownMenu from "./DropdownMenu"
import Table from "./Table"
import Monthdropdown from "./Monthdropdown";


const style = (theme) => ({
    root:{
        position: "absolute",
    textDecorationLine: "underline",
    width: "153px",
    height: "24px",
    left: "360px",
    top: "120px",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#4B4B4B",
    },
    sub: {
        position: "absolute",
        width: "131px",
        height: "32px",
        left: "360px",
        top: "184px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "28px",
        lineHeight: "32px",
        display: "flex",
        // alignItems: "center",
        color: "#000000",
      },
      button: {
        position: "absolute",
        marginTop:'168px',
        marginRight:'40px',
        marginLeft:'900px',
        width: "159px",
        height: "48px",
        color: "#F2F2F2",
        background: "#036FCB",
        textTransform:'none',
        borderRadius: "40px",
        boxShadow:'0px 0px 0px 0px'
      },
      past_3_months_button: {
        position: "absolute",
        width: "97px",
        height: "17px",
        left: "15px",
        top: "11px",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        color: "#4B4B4B",
      },
      container: {
        position: "absolute",
        height: "40px",
        width: "145px",
        left: "360px",
        top: "256px",
        border: "hidden",
        background: "#ffffff",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
        borderRadius: "8px",
      },  expand_icon: {
        position: "absolute",
        left: "78.74%",
        right: "56.6%",
        top: "18.17%",
        bottom: "70.27%",
        fontSize: "24px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
      },
      DropdownMenu:{
        position: "absolute",
        height: "40px",
        width: "145px",
        left: "360px",
        top: "256px",
        border: "hidden",
        background: "#ffffff",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
        borderRadius: "8px",
      }
   
    
});

const Home = (props) => {
  const { classes } = props;
  return (
    <div>
    
      <Typography className={classes.root} variant="h5" component="h2">
  Services /Coverage
</Typography>

<Typography className={classes.sub} variant="h5" component="h2">
  Coverage
</Typography>
<button className={classes.container}>
        {/* <div className={classes.past_3_months_button}>Past 3 months</div> */}
        {/* <ExpandMoreIcon className={classes.expand_icon} /> */}

        <Monthdropdown classes={{Monthdropdown:classes.DropdownMenu}} />
      </button>
      <DropdownMenu  />
<Congratulations />
<div className={classes.newtable}>
<span className={classes.name}>Name</span>
{/* <hr className={classes.line}/> */}
<Table />
</div>


     </div>
  );
};

export default withStyles(style)(Home);
