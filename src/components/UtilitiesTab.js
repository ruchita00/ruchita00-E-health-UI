import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import Papers from "./Papers";
import PaperVisit from "./PaperVisit"

const style = (theme) => ({
  root: {
    // display:'flex',
    // flexWrap:'wrap',
    "& > *": {
      // margin:theme.spacing(1),
      // width:theme.spacing(2),
      // height:theme.spacing(15)
    },
  },
  tab: {
    width:'24',
    
    paddingTop: theme.spacing(24),
    // borderBottom: "1px solid gray",
    // top:'0px'
  },
  label:{
      width:'47px',
      height:'24px',
      verticalAlign:'center'
  }
  
});

const UtilitiesTab = (props) => {
  const [value, setValue] = React.useState(0);
  const { classes } = props;
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div className={classes.root}>
      {/* <AppBar position="static" > */}
      <Tabs         indicatorColor="primary"
 classes={{ root: classes.tab }} 
 value={value} onChange={handleTabs}>
        <Tab style={{textTransform: "none"
}} classes={{label:classes.label}} label="Medical" />
        <Tab style={{textTransform: "none"
}} classes={{label:classes.label}} label="Finacial" />
        <Tab style={{textTransform: "none"
}} classes={{label:classes.label}} label="Care" />
        <Tab style={{textTransform: "none"
}} classes={{label:classes.label}} label="legal" />
      </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0} >
      <PaperVisit />      </TabPanel>
      <TabPanel value={value} index={1}>
      <Papers />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3 detail
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4 detail
      </TabPanel>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
export default withStyles(style)(UtilitiesTab);
