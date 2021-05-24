import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      smallRadioButton: {
        "& svg": {
        //   width: "0.7em",
        //   height: "0.7em",
        //   verticalAlign: "center",
       color: '#036FCB'

        },
      },
    })
  
);

function ButtonRadio(props) {
  // const classes = useStyles();
  const {handleChange}=props;
  
  
  return (
    <RadioGroup row>
      <FormControlLabel
        value="Self"
        control={
          <Radio
            name="self"
            color="primary"
            style={{ position:'absolute',
            left: "362px",width:'20px',
             height:'20px', top: "293px" ,right:'1058px',}}
          />
        }
        // className={classes.smallRadioButton}
        onChange={() =>handleChange('self') }
      />
      <div>
        <span
          style={{
            position: "absolute",
            fontSize: "14px",
            lineHeight: "20px",
            top: "293px",
            style:'normal',
            width:'26px',
            height:'20px',
            // padding:'10px',
            left: "392px",
          }}
        >
          Self
        </span>
      </div>

      <FormControlLabel
        value="other"
        control={
          <Radio
            color="primary"
            name="other"
            style={{position:'absolute',top:'293px', left: "444px",width:'20px', height:'20px',  }}
            
          />
        }
        // className={classes.smallRadioButton}
        onChange={() =>handleChange('other') }
      />
      <div style={{
            position: "absolute",
            fontSize: "14px",
            lineHeight: "118%",
            top: "293px",
            left: "474px",
            width:'38px',
            height:'20px',
            color:'#333333'

       
          }}>
        
          Other
        
      </div>
    
    </RadioGroup>

  );
}

export default ButtonRadio;
