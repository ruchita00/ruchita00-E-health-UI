import React from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { withStyles } from "@material-ui/styles";
import Visits from "../assets/Visits.png";
import vitals from "../assets/vitals.png";
import medication from "../assets/medication.png"
import allergies from "../assets/allergies.png"
import biotech from "../assets/biotech.png"
import procedures from "../assets/procedures.png"

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
  vitalspantext:{
    fontSize: "16px",
    position: "relative",
    top: "27px",
    right: "60px",
    fontWeight: "500",
  },
  paper:{
    borderRadius: "15px",
    width:'200px',height:'120px'
  }
});

const useStyles = makeStyles((theme) => ({
  paddingTop: theme.spacing(25),
  borderShadow: "1rem",
}));

const PaperVisit = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Paper className={classes.paper}

        elevation={3}
        component={Box}
        
        p={4}
      >
        <Box component="form">
          <KeyboardArrowRightRoundedIcon
           className={classes.rightarrow} />
            
          <img src={Visits} alt="visits-icon" className={classes.imgIcon} />
          <span
            style={{
              fontSize: "16px",
              position: "relative",
              top: "27px",
              right: "60px",
              fontWeight: "500",
            }}
          >
            <span style={{ color: "#2D9CDB" }}>
            4</span> Visits
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

          <img src={vitals} alt="vitals-icon" className={classes.imgIcon} />

          <span className={classes.vitalspantext}
           
          >
            
            Vitals
          </span>
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

          <img src={medication}
           alt="medication-icon"
            className={classes.imgIcon} />

<div style={{
              position: "absolute",
              fontSize: "14px",
              height: "0px",
              top: "80px",
              left: "30px",
              fontWeight: "450",
            }}
          >
            
            Medication
          </div>
        </Box>
      </Paper>


      <Paper
        style={{
          borderRadius: "15px",
          position: "relative",
          left: "660px",
          bottom: "10px",
          top: "-360px",
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

          <img src={allergies}
           alt="allergies-icon"
            className={classes.imgIcon} />

<div style={{
              position: "absolute",
              fontSize: "14px",
              height: "0px",
              top: "80px",
              left: "30px",
              fontWeight: "450",
            }}
          >
            
            Allergies
          </div>
        </Box>
      </Paper>

      <Paper
        style={{
          borderRadius: "15px",
          position: "relative",
          left: "0px",
          bottom: "10px",
          top: "-340px",
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

          <img src={procedures} 
           alt="procedures-icon"
            className={classes.imgIcon} />

<div style={{
              position: "absolute",
              fontSize: "14px",
              height: "0px",
              top: "80px",
              left: "30px",
              fontWeight: "450",
            }}
          >
            
    procedures
          </div>
        </Box>
      </Paper>


      <Paper
        style={{
          borderRadius: "15px",
          position: "relative",
          left: "220px",
          bottom: "10px",
          top: "-460px",
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

          <img src={biotech}
           alt="biotech-icon"
            className={classes.imgIcon} />

<div style={{
              position: "absolute",
              fontSize: "14px",
              height: "0px",
              top: "80px",
              left: "30px",
              fontWeight: "450",
            }}
          >
            
            Labs
          </div>
        </Box>
      </Paper>










    </Container>
  );
};

export default withStyles(style)(PaperVisit);
