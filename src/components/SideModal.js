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
    padding: theme.spacing(1, 4, 4)
  },
   button: {
    position: "absolute",
    width: "159px",
    height: "48px",
    left: "900px",
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
    borderRadious:'40px',
    width:'456px',
    height:'56px',
    marginTop:'10px',
    border:'hidden',
    borderRadius: "10px",

  },
  img:{
      position:'relative',
   margin:'16px',
marginRight:'300px'
  },
  rightarrow:{
      position:'absolute',
      margin:'16px',
      marginLeft:'-16px'
    
  },
  closeicon:{
      position:'absolute',
     marginTop:'-90px',
     marginLeft:'430px'
  }
}))

export default function SideModal() {
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
      <button className={classes.button} onClick={handleOpen}>
        Add Coverage
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
        <Fade in={open}>
        
          <Typography className={classes.paper}>
            <h2 className={classes.text}
              
        
            >
              Select Service Provider
            </h2>
            <CloseIcon onClick={handleClose} fontSize='medium' className={classes.closeicon} />
            <Search />
            <button type="button" className={classes.ehealthbutton}>
            
              <img src={Vector} className={classes.img} alt="ehealth-button"  />
              <KeyboardArrowRightRoundedIcon className={classes.rightarrow} />          
            </button>
           
          </Typography>
        </Fade>
      </Modal>
    </div>
  );
}
