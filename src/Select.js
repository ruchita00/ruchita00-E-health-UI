import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";

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
    margin: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 7, 3)
  },
  button:{
    position:'absolute',
    top:'900px'
    ,left:'360px',
    width:'160px',
    height:'48px',
    color: "#F2F2F2",
    border: "hidden",

    background: "#036FCB",
    borderRadius: "40px",
    boxShadow:'0px 0px 0px 0px',}
}));

export default function Select() {
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
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Typography in={open}>
          <div className={classes.paper}>
            <h2
              style={{ position: "absolute", width: "316px", height: "80px" }}
              id="transition-modal-title"
            >
              Select Service Provider
            </h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Typography>
      </Modal>
    </div>
  );
}
