import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
    width: "135px",
    height: "40px",
    left: "1241px",
    border: "hidden",
    right: "0%",
    top: "168px",
    bottom: "29.17%",
    fontFamily: "Inter",
    color: "#ffffff",
    background: "#036FCB",
    borderRadius: "50px",
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
              left: "550%",
              right: "0%",
              top: "-280.67%",
              bottom: "16.67%",
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

const CongratulationPopup = (props) => {
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
        Add Coverage
      </button>
      <Dialog
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CheckCircleIcon
          style={{
            position: "absolute",
            left: "40.00%",
            right: "0%",
            top: "0%",
            bottom: "16.67%",
            fontSize: "73px",
            lineHeight: "35px",
            display: "flex",
            alignItems: "center",
            color: "#27AC60",
            padding: "8px",
            margin: "10px",
          }}
        />
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{
            postion: "absolute",
            width: "162px",
            height: "24px",
            left: "30.00%",
            top: "70px",
            display: "flex",
            alignItems: "center",
            color: "#000000",
            padding: "10px",
            margin: "10px",
          }}
        >
          <strong>Congratulations!</strong>
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
            position: "static",
            width: "440px",
            height: "72px",
            left: "0px",
            top: "-10px",
            fontSize: "14px",
            lineHeight: "24px",
            flexGrow: 0,
            margin: "60px 0px",
            padding: "25px",
          }}
        >
          Your health plan has been successfully added, You can see the details
          by clicking on the health plan in the coverage list.
        </div>

        <DialogActions>
          <button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              borderRadius: 50,
              top: "80.76%",
              width: "135px",
              height: "35px",
              left: "34.00%",
              border: "hidden",
              color: "#FFFFFF",
              background: "#036FCB",
            
              overflow:'hidden'
            }}
          >
            View Details
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(CongratulationPopup);
