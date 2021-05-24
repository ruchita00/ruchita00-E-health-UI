import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import ReasonDropdown from "./ReasonDropdown";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    position: "absolute",
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
    left: "22%",
    border: "hidden",
    right: "0%",
    top: "320.17%",
    bottom: "29.17%",
    fontFamily: "Inter",
    color: "#ffffff",
    background: "#036FCB",
    borderRadius: "40px",
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
              left: "110px",
              right: "0%",
              top: "10.67%",
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

const CancelYourPlanPopup = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        autoFocus
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        style={{
          position: "absolute",
          borderRadius: 50,
          top: "73.76%",
          width: "165px",
          height: "35px",
          left: "57%",
          color: "#FFFFFF",
          background: "#FFFFFF",
         border: "1px solid gray",
          overflow: "hidden",
        }}
      >
        <span style={{ fontSize: "14px", color: "#036FCB", fontWeight: "550" }}>
          Proceed to Cancel
        </span>
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
            width: "300px",
            height: "35px",
            left: "3%",
            top: "15px",
            alignItems: "center",
            color: "#000000",
            padding: "5px",
            margin: "5px",
          }}
        >
          <strong>Cancel your Plan</strong>
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
            height: "72px",
            left: "0px",
            top: "-70px",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "400",

            flexGrow: 0,
            margin: "60px 0px",
            padding: "25px",
          }}
        >
          Your plan will end on <strong>May 27,2021.</strong>{" "}
        </div>
        <button
          autoFocus
          onClick={handleClickOpen}
          variant="contained"
          color="primary"
          style={{
            position: "absolute",
            borderRadius: 50,
            top: "16.76%",
            width: "85px",
            height: "26px",

            left: "57%",
            // border: "hidden",
            color: "#FFFFFF",
            background: "#FFFFFF",
            border: "1px solid gray",

            overflow: "hidden",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "#036FCB", fontWeight: "500" }}
          >
            Change
          </span>
        </button>

        <div
          aria-label="maximum height"
          rowsMin={3}
          gutterBottom
          style={{
            position: "relative",
            // width: "440px",
            height: "72px",
            left: "0px",
            // top: "-230px",
            top: "-220px",
            bottom: "80px",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "400",
            flexGrow: 0,
            margin: "60px 0px",
            padding: "25px",
          }}
        >
          Are you sure you want to cancel your coverage plan "Medicare"
          Advantage -Detal-MADL0977"?{" "}
        </div>
        {/* <Label>Reason for ancellation</Label> */}
        <div>
          <span
            style={{
              position: "absolute",
              top: "190px",
              left: "28px",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "16px",
              alignItems: "top",
              color: "#4B4B4B",
            }}
          >
            Reason for Cancellation
          </span>
        </div>
        <ReasonDropdown />

        {/* <Textarea /> */}
        <TextareaAutosize
          aria-label="minimum height"
          style={{ position: "absolute", top: "270px", left: "30px" }}
          rowsMin={5}
          minLength
          placeholder="Write your reason here"
        />

        <DialogActions>
          <button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              borderRadius: 50,
              top: "85%",
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
          <button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              borderRadius: 50,
              top: "85%",
              width: "165px",
              height: "35px",

              left: "57%",
              // border: "hidden",
              color: "#FFFFFF",
              background: "#FFFFFF",
              border: "1px solid gray",

              overflow: "hidden",
            }}
          >
            <span
              style={{ fontSize: "14px", color: "#036FCB", fontWeight: "550" }}
            >
              Proceed to Cancel
            </span>
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(CancelYourPlanPopup);
