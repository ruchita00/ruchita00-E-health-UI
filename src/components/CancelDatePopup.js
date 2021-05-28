import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CancelYourPlanPopup from "./CancelYourPlanPopup"
import Date from "./Date"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    position: "absolute",

    width: "150px",
    height: "24px",
    left: "280px",
    top: "70px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "11px",
    lineHeight: "24px",
    color: "#4B4B4B",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  button: {
    position: "absolute",
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

  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon
            style={{
              position: "absolute",
              left: "210px",
              right: "0%",
              top: "-10.67%",
              // bottom: "16.67%",
              fontSize: "24px",
              lineHeight: "16px",
              display: "flex",
              color: "#000000",
            }}
          />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CancelDatePopup = (props) => {
  const [open, setOpen] = React.useState(false);
  const { classes } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={classes.button} onClick={handleClickOpen}>
        Proceed
      </button>

      <Dialog
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{
            postion: "absolute",
            width: "200px",
            height: "40px",
            left: "3%",
            top: "15px",
            // display: "flex",
            alignItems: "center",
            color: "#000000",
            padding: "5px",
            margin: "5px",
          }}
        >
          <strong>Cancellation Date</strong>
        </DialogTitle>

        <div
          variant="outlined"
          color="primary"
          style={{ width: "200px", height: "40px" }}
        ></div>
        <br />
        <div
          aria-label="maximum height"
          rowsMin={3}
          gutterBottom
          style={{
            position: "relative",
            width: "440px",
            height: "72px",
            left: "0px",
            top: "-70px",
            fontSize: "14px",
            lineHeight: "24px",
            flexGrow: 0,
            margin: "60px 0px",
            padding: "25px",
          }}
        >
         Please select the date on which you want your plan to end.       </div>

<Date />
        <DialogActions>
          <button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              borderRadius: 50,
              top: "73.76%",
              width: "135px",
              height: "35px",
              left: "25%",
              border: "hidden",
              color: "#FFFFFF",
              background: "#036FCB",

              overflow: "hidden",
            }}
          >
            Go Back
          </button>
          <CancelYourPlanPopup />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(CancelDatePopup);
