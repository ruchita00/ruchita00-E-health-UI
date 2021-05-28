import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";
import Search from "./Search"
import Vector from "../assets/Vector.png"
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import CloseIcon from "@material-ui/icons/Close";



const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "right-top",
    justifyContent: "flex-end"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid gray",
    borderRadius: "30px",
    margin: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 5, 4)
  },
   button: {
    position: "absolute",
    width: "135px",
    height: "40px",
    left: "910px",
    border: "hidden",
    right: "0%",
    top: "-90px",
    bottom: "29.17%",
    fontFamily: "Inter",
    color: "#ffffff",
    background: "#036FCB",
    borderRadius: "50px",
  },
  
  text:{
    position: "relative", 
    width: "400px",
    left:'0px',
     height: "80px" 
  },
  ehealthbutton:{
      position:'absolute',
    borderRadious:'40px',
    width:'445px',
    height:'56px',
    marginTop:'-10px',
    border:'hidden',
    borderRadius: "10px",
marginLeft:'-15px'

  },
  
  rightarrow:{
      position:'absolute',
      margin:'-4px'
      ,marginRight:'0px'
    //   marginLeft:'-16px'
    
  },
  closeicon:{
      position:'absolute',
     marginTop:'-100px',
     marginLeft:'400px'
  },
  textmedicare:{
    position:'relative',
    marginRight:'220px',
    fontWeight:'500',
    lineHeight:'16px',
    fontSize:'16px',
    width:'196px',
    height:'16px'

//  marginRight:'300px'    
},
 buttonproceed:{   position: "absolute",
    border:'hidden',
    left:'360px',
    // top:'168px',
    right:'920px',
  top:'548px',
    width: "160px",
    height: "48px",
    color: "#F2F2F2",
    background: "#036FCB",
    textTransform:'none',
    borderRadius: "40px",
    boxShadow:'0px 0px 0px 0px'
}
}))

export default function SideBarPopup() {
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
           
           <button className={classes.buttonproceed} onClick={handleOpen}>
        Proceed
      </button>

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div in={open} >
        
          <Typography style={{position:'relative',height:"287px"}} className={classes.paper}>
            <h2 className={classes.text}
              
        
            >
              Select Plan
            </h2>
            <CloseIcon onClick={handleClose} fontSize='medium' className={classes.closeicon} />
                        <button type="button" className={classes.ehealthbutton}>
            
           <span className={classes.textmedicare}>Medicare Advantage Plan</span>
              <KeyboardArrowRightRoundedIcon className={classes.rightarrow} />          
            </button>
<br />
<button type="button" 
style={{marginTop:'40px'}}
 className={classes.ehealthbutton}>

            
            <span className={classes.textmedicare}>Individual Family Plan</span>

               <KeyboardArrowRightRoundedIcon
                 style={{
                   position:'absolute',
                   marginLeft:'10px'}}
                    className={classes.rightarrow}
                     />          
             </button>
                     
                     
                     
                     
                     
                     
                        {/* <button style={{marginTop:'40px'}} type="button" className={classes.ehealthbutton}>
            
           <span className={classes.textmedicare} style={{position:'absolute',marginLeft:'-245px',top:'18px',left:'245px'}}>Individual Family Plan</span>
              <KeyboardArrowRightRoundedIcon className={classes.rightarrow} style={{position:'absolute',marginLeft:'195px',margin:'-15px'}} />          
            </button>
      */}


          </Typography>
        </div>
      </Modal>
    </div>
  );
}
