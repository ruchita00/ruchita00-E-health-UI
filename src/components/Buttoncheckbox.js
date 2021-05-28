import React, { useState } from "react";
import {
  Checkbox,
  Box,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    position: {
      left: "10px",
      top: "10px",
    },
    button: {
      width: "135px",
      height: "40px",
      left: "21.09%",
      border: "hidden",
      right: "0%",
      marginTop: "50px",
      fontFamily: "Inter",
      color: "#ffffff",
      background: "#036FCB",
      borderRadius: "40px",
    },
   
    label:{
        
        fontSize:"14px",
        top:"413px",
        width:'560px',height:'40px',
        left:'392px'
   
    }
  })
);

const Buttoncheckbox = (props) => {
  const classes = useStyles();
  const [remember, setRemember] = useState([]);
  const getValue = (e) => {
    let data = remember;
    data.push(e.target.value);
    setRemember(data);
    console.log(remember);
  };
  const handleChange = (e) => {
    setRemember(e.target.checked);
  };
  return (
    <div>
      <Box>
        <FormControl className={classes.position} column>
          <FormControlLabel style={{color:"#4B4B4B",}} classes={{label:classes.label}}
            label="I agree to the eHealth's Terms and Conditions"
            control={
              <Checkbox
                onChange={handleChange}
                color="primary"
                checked={remember}
                name='checked'
                onChange1={(e) => getValue(e)}
              />
            }
          />
          <FormControlLabel style={{color:"#4B4B4B",}} classes={{label:classes.label}}
            label="I agree that Mpowered Health could share my Provider, Drug, Pharmacy & Personal information for enhanced shoppping and enrolment experience."
            
            control={
              <Checkbox
                onChange={handleChange}
                color="primary"
                // checked={remember}
                name="checked"
                onChange1={(e) => getValue(e)}
              />
            }
          />
     
        </FormControl>
      </Box>

    </div>
  );
};

export default Buttoncheckbox;
