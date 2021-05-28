import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import past from "../assets/past.png"

const useStyles =makeStyles( (theme) => ({
  root: {
    backgroundColor: "#ffff",
    marginTop:"1290px",
    boxShow: "0px 0px 0px 0px",
    border: "2px solid #ECF0F1",
  },
  buttonproceed:{   position: "absolute",
    border:'hidden',
    left:'900px',
    right:'920px',
    top:'548px',
    width: "160px",
    height: "48px",
    color: "#F2F2F2",
    background: "#036FCB",
    textTransform:'none',
    borderRadius: "40px",
    boxShadow:'0px 0px 0px 0px'
},container:{
    position:'absolute',
    border:'1px solid #E5E5E5',
    width:'1040px',
    height:'476px',
    left:'350px',
    marginTop:"600px",
    borderRadius:'16px',
    background:'#FFFFFF'
},
pastimg:{
    position:'absolute',
    width:'240px',
    height:'180',
    marginTop:'64px',
    left:'400px'
},
title:{
    position:'absolute',
    marginTop:"252px",
    left:'415px',
    width:'210px',
    height:'32px',
    fontSize:'20px',
    lineHeight:'32px',
    fontWeight:'600'
},
paragraph:{
    position:'absolute',
    width:'560px',
    height:'40px',
    marginTop:'300px',
    left:'240px'
},
button: {
    position: "absolute",
    width: "159px",
    height: "48px",
    left: "441px",
    marginTop:'475px',
    border: "hidden",
    top: "-90px",
    bottom: "29.17%",
    fontFamily: "Inter",
    color: "#ffffff",
    background: "#036FCB",
    borderRadius: "50px",
  },
 
 
}));

const PendingPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
<div>
    <div >
        
    </div>
    {/* {/* <button className={classes.buttonproceed} onClick={handleOpen}>
        past
        
      </button> */}
      <div className={classes.container}> 
      <img src={past}
    className={classes.pastimg} 
    alt="past-img" /> 
    <span className={classes.title}>No Pending Coverage</span>
        
        <div className={classes.paragraph}>
            We couldn't find any coverage waiting for payer's approval. 
            Please add a new
             <br /> <span style={{
                 position:'absolute',left:'55px'
             }}>coverage or check the existing ones in the active status list</span>
        </div>
        <button className={classes.button} onClick={handleOpen}>
        Add Coverage
      </button>

        </div>
</div>
  );
};

export default PendingPage;
