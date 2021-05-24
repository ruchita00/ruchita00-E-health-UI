import React from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { withStyles } from "@material-ui/core";
import Icon from "../assets/Icon.png";
import activecoverage from "../assets/activecoverage.png"

const style = (theme) => ({
  imgIcon: {
    position: "relative",
    top: "-10px",
    color: "#9B51E0",
    left: "-20px",
  },
  rightarrow:{
    position: "relative",
    top: "-20px",
    left: "130px",
    color: "gray",
  },
  spantext:{
    fontSize: "16px",
    position: "relative",
    top: "27px",
    right: "60px",
    fontWeight: "450",
  }
});

const useStyles = makeStyles((theme) => ({
  paddingTop: theme.spacing(20),
  borderShadow: "1rem",
}));

const Papers = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Paper
        style={{ borderRadius: "15px" }}
        elevation={3}
        component={Box}
        width="200px"
        height="120px"
        p={4}
      >
        <Box component="form">
          <KeyboardArrowRightRoundedIcon
           className={classes.rightarrow}
          />
          <ReceiptIcon fontSize="large" 
          className={classes.imgIcon} />
          <span className={classes.spantext}
          >
            <span style={{ color: "#2D9CDB" }}>5
            </span> Bills
          </span>
        </Box>
      </Paper>

      <Paper
        style={{
          borderRadius: "15px",
          position: "relative",
          left: "220px",
          bottom: "10px",
          top: "-120px",
        }}
        elevation={3}
        component={Box}
        width="200px"
        height="120px"
        p={4}
      >
        <Box component="form">
          <KeyboardArrowRightRoundedIcon 
          className={classes.rightarrow}
          />

          <img src={Icon} alt="reception-icon" 
          className={classes.imgIcon} />

          <div
            style={{
              position: "absolute",
              fontSize: "14px",
              height: "0px",
              top: "80px",
              left: "30px",
              fontWeight: "450",
            }}
          >
            <span>
              <span style={{ color: "#2D9CDB" }}>1</span> Claim in progress
            </span>
          </div>
        </Box>
      </Paper>


      <Paper
        style={{
          borderRadius: "15px",
          position: "relative",
          left: "440px",
          bottom: "10px",
          top: "-240px",
        }}
        elevation={3}
        component={Box}
        width="200px"
        height="120px"
        p={4}
      >
        <Box component="form">
          <KeyboardArrowRightRoundedIcon 
          className={classes.rightarrow}
          />

          <img src={activecoverage} alt="reception-icon" 
          className={classes.imgIcon} />

          <div
            style={{
              position: "absolute",
              fontSize: "14px",
              height: "0px",
              top: "80px",
              left: "30px",
              fontWeight: "450",
            }}
          >
            <span>
              <span style={{ color: "#2D9CDB" }}
              >1</span> Active Coverage
            </span>
          </div>
        </Box>
      </Paper>
    </Container>
  );
};

export default withStyles(style)(Papers);
