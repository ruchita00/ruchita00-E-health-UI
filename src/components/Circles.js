import React from 'react'
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core";
import ButtonRadio from "./ButtonRadio";
import Buttoncheckbox from "./Buttoncheckbox";
 import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import CancelDatePopup from "./CancelDatePopup";
import DatePage from "./DatePage"
import RelationshipToYou from "./RelationshipToYou"
import StateDropdown from "./StateDropdown"
import GenderDropdown from "./GenderDropdown";
// import Button from "@material-ui/core/Button"
// import {Select} from "./Select"
// import Select from "./"
import Congratulations from "./popupWindows/Congratulations"


const style=(theme)=>({
    root: {
        position: "absolute",
        textDecorationLine: "underline",
        width: "276px",
        height: "24px",
        left: "360px",
        top: "120px",
        right:"804px",
        fontSize: "16px",
        lineHeight: "124%",
        color: "#4B4B4B",
      },
      add_coverage: {
        position: "absolute",
        width: "193px",
        height: "32px",
        left: "360px",
        right:'887px',
        top: "184px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "28px",
        lineHeight: "94%",
        // display: "flex",
        alignItems: "center",
        color: "#000000",
      },
      question: {
        position: "absolute",
        width: "194px",
        height:'19px',
        left: "360px",
        top: "256px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        right:'886px',
        fontSize: "16px",
        lineHeight: "19.36px",
        
        color: "#4B4B4B",
      },
      paragraph:{
          position:'absolute',color:'#333333',fontSize:'14px',lineHeight:'118%',
          width:'722px',height:'40px',left:'362px',top:'347px'
      },
      button: {
        position: "absolute",
        // marginTop:'168px',
        // marginRight:'40px',
        left:'10px',
        top:'168px',
        right:'920px',
        // marginLeft:'900px',
        width: "160px",
        height: "48px",
        color: "#F2F2F2",
        background: "#036FCB",
        textTransform:'none',
        borderRadius: "40px",
        boxShadow:'0px 0px 0px 0px'
      },
      patientdetail:{
        position:'absolute',
        left:'360px',
        top:'275px',
        width:'113px',
        height:'19px',
        fontSize:'16px',
        lineHeight:'19.36px'
      },
      buttonOther:{
        position:'absolute',
        top:'900px'
        ,left:'360px',
        width:'160px',
        height:'48px',
        color: "#F2F2F2",
        border: "hidden",

        background: "#036FCB",
        borderRadius: "40px",
        boxShadow:'0px 0px 0px 0px',
        // borderRadius:'none'

        
        // width: "160px",
        // height: "48px",
        // color: "#F2F2F2",
        // background: "#036FCB",
        // textTransform:'none',
        // borderRadius: "40px",
        // boxShadow:'0px 0px 0px 0px'
      }, label: {
        fontSize: "14px",
        width:'560px',height:'40px'
      },
      position: {
        position:'absolute',
        // border:'1px solid black',
        left: "363px",
        fontSize:'14px',
        top: "732px",lineHeight:'20px'
      },
})

const Circles = (props) => {
    const { classes } = props;
  const [state, setState] = React.useState({
    data: "",
    select: "self",
  });

  const handleChange = (value) => {
    setState({ ...state, select: value });
  };

    return (
        <>
        
              <Typography className={classes.root} variant="h5" component="h2">
  Services / Coverage / Add Coverage
</Typography>

<Typography className={classes.add_coverage} variant="h5" component="h2">
 Add Coverage
</Typography>

<Typography className={classes.question} variant="h5" component="h2">
Who is this coverage for?
</Typography>
 <ButtonRadio handleChange={handleChange} />
 {state.select === "self" ? (
        <div>
          <div className={classes.paragraph}>
            You are about to go to eHealth's website. eHealth makes it easier
            for you to find affordable, quality health insurance. Please have
            the medicare card and primary care physician's name handy.
            <div>
              <Buttoncheckbox />
            </div>
           
          </div>

          <CancelDatePopup />
        </div>
      ) : (
        <div>
          <div style={{position:'absolute',
          width:'113px',height:'19px',fontWeight:'700',
          top:'355px',left:'360px',fontSize:'16px',
          lineHeight:'100%'}}>Patient Details</div>
        <span style={{position:'absolute',
        fontSize:'12px',width:'119.65px', 
        height:'16px',top:'398px',left:'360px'}}>
        First Name <br /></span>     
        
          <input
            type="text"
            placeholder="first name"
            // width="240px"
            style={{position:'absolute',
            width:'240px',height:'40px',
            padding:'7px',
            top:'418px',
            left:'360px',}}
            // height="40px"
            name="firstname" 
          />

<span style={{position:'absolute',left:'632px',
fontSize:'12px',width:'119.65px',
 height:'16px',top:'398px'}}>Last Name <br /></span>     
          <input
            type="text"
            placeholder="last Name"
            // width="240px"
            style={{position:'absolute',padding:'7px',
            left:'632px',top:'418px',
            width:'240px',
            height:'40px'}}
            // height="40px"
            name="lastname" 

          />
       
                  <span style={{position:'absolute',
                  left:'360px',fontSize:'12px',lineHeight:'110%'
                  ,width:'119px', height:'16px'
                  ,top:'482px'}}>Date of Birth <br /></span>     

           <DatePage />

           <span style={{position:'absolute',
           left:'632px',
           fontSize:'12px',width:'119.65px', height:'16px',
           lineHeight:'110%'
           ,top:'482px'}}>Relationship to you <br /></span>

           <RelationshipToYou />     
           <span style={{position:'absolute',
           top:'566px',
           left:'360px',fontSize:'12px',
           width:'119.65px', 
           height:'16px',lineHeight:'110%'
          }}>State <br /></span>     
<StateDropdown />
<span style={{position:'absolute',
left:'632px',fontSize:'12px',width:'119.65px'
,lineHeight:'110%',
 height:'16px',top:'566px'}}>Gender <br /></span>     


        <GenderDropdown />



        {/* <GenderDropdown /> */}

          <div
            style={{
              position: "absolute",
              // width: "700px",
              left: "362px",
              top: "666px",
              fontSize: "14px",
              lineHeight: "20px",
              // display: "flex",
              // alignItems: "center",
              width:'722px',
              height:'40px',
              color: "#333333",
              // border:'1px solid black'
            }}
          >
            You are about to go to eHealth's website. eHealth makes it easier
            for you to find affordable, quality health insurance. Please have
            the medicare card and primary care physician's name handy.
          </div>
          <FormControl className={classes.position} row>
            <FormControlLabel
              style={{ color: "#4B4B4B"}}
              classes={{ label: classes.label }}
              label="I am the legal guardian or have the necessary consents to order this second opinion."
              control={
                <Checkbox
                  onChange={handleChange}
                  color="primary"
                  name="checked"
                />
              }
            />

            <FormControlLabel
              style={{ color: "#4B4B4B" }}
              classes={{ label: classes.label }}
              label="I agree to the eHealth's Terms and Conditions"
              control={
                <Checkbox
                  onChange={handleChange}
                  color="primary"
                  // checked={remember}
                  name="checked"
                  // onChange1={(e) => getValue(e)}
                />
              }
            />

            <FormControlLabel
              style={{ color: "#4B4B4B" }}
              classes={{ label: classes.label }}
              label="I agree that 
              Mpowered Health could share
               my Provider, Drug,
                Pharmacy & Personal 
                information for enhanced
                 shoppping and enrolment
                  experience."
              control={
                <Checkbox
                  onChange={handleChange}
                  color="primary"
                  // checked={remember}
                  name="checked"
                  // onChange1={(e) => getValue(e)}
                />
              }
            />
          </FormControl>
          <Congratulations />

       
{/* <Select /> */}
        </div>
      )}
      </>

  );
};

export default withStyles(style)(Circles);
