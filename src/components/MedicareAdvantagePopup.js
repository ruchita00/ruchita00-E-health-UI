import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import coverage from "../assets/coverage.png"
import elipse from "../assets/elipse.png"


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
    padding: theme.spacing(1, 9, 4)
  },
   button: {
    position: "absolute",
    width: "135px",
    height: "40px",
    left: "910px",
    border: "hidden",
    right: "0%",
    top: "90px",
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
     marginLeft:'420px'
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
    left:'400px',
    // top:'168px',
    // right:'900px',
  top:'430px',
    width: "160px",
    height: "48px",
    color: "#F2F2F2",
    background: "#036FCB",
    textTransform:'none',
    borderRadius: "40px",
    boxShadow:'0px 0px 0px 0px'
},img:{
    position:'absolute',
    left:'40px',
    marginTop:'20px'
},
buttoncancel:{
    buttonproceed:{ 
          position: "absolute",
    border:'1px solid black',
    left:'1px',
    // top:'168px',
    // right:'920px',
  top:'5px',
    width: "145px",
    height: "48px",
    color: "#036FCB",
    background: "#F2F2F2",
    textTransform:'none',
    borderRadius: "40px",
    boxShadow:'0px 0px 0px 0px'
},elipse:{
    // position:'absolute',
    // left:'10px'
}
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
        pending
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
       
      Medicare Advantage -Dental-MADL0977
          <Typography style={{position:'relative',height:"447px"}} className={classes.paper}>
          <img src={coverage}
    className={classes.img} 
    alt="coverage-img" /> 
            <h2 className={classes.text}               
        
            >
              <span style={{position:'absolute', width:'240px',height:'64px',left:'20px'}}
>Medicare Advantage<br />-Dental-MADL0977</span>
            </h2>
            <CloseIcon onClick={handleClose} fontSize='medium' className={classes.closeicon} />
   <div style={{position:'absolute',
   color:'#828282',width:'43px',left:"40px",
   height:'20px'}}>Status</div>                    
         <br /> 
    
          <img src={elipse} style={{position:'absolute',left:'40px',marginTop:'5px'}}
     
    alt="dot-img" /> 
 
         <div style={{position:'absolute',
         left:'60px'}}>Pending Approval</div>           
            
            
         <div style={{position:'absolute',
         color:'#828282',width:'120px',left:"40px",
         height:'20px',marginTop:'60px'}}>
         Policy Number</div>   

<br />

<div style={{position:'absolute',left:'50px'
,marginTop:'65px'}}>23546675</div>           


            <div style={{position:'absolute',
            color:'#828282',width:'120px',
            height:'20px',
            marginTop:'140px',left:"40px"}}>
            Primary Insured</div> 
            <br /> 
            <div style={{position:'absolute',
            left:'50px',marginTop:'145px'}}>
            John Doe</div>           
            
            <div 
            style={{position:'absolute',
            color:'#828282',
            width:'96px',
            height:'20px', left:'290px',
            marginTop:'-73px'}}>Policy Period</div>                    
          <br />
          <div 
          style={{position:'absolute',
          left:'290px',marginTop:'-75px',width:'213px',height:'24px',
          }}>Apr 20, 2021 - Apr 20, 2022</div>           
       

            
            
            
            
             <button className={classes.buttoncancel}
              style={{position:'absolute',
              
  top:'365px',
 left:'369px', 
   width: "145px",
    height: "48px",
    color: "#036FCB",
    background: "#FFFFFF",
    border:'1px solid #A0A4A6',

    textTransform:'none',
    borderRadius: "40px",
    boxShadow:'0px 0px 0px 0px'}} onClick={handleClose}>
        <span style={{fontSize:'15px',fontWeight:'600'}}>View Details</span>
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
