import React from "react";
import { Tabs, Tab, withStyles, Divider } from "@material-ui/core";
import TableMedicare from "./TableMedicare";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

const style = (theme) => ({
  tab: {
    paddingTop: theme.spacing(33),
    left: "361px",
    top: "272px",
  },
  row1: {
    position: "relative",
    top: "35px",

    width: "1040px",
    height: "48px",
    left: "41px",
    border: "1px solid #E3E2E2",
    background: "#ffffff",
  },
  rowlast: {
    marginTop: "7px",
    background: "#ffffff",
    width: "1024px",
    height: "48px",
    border: "1px solid #E3E2E2",
  },
  text: {
    width: "237px",
    height: "20px",
    fontSize: "14px",
    lineHeight: "20px",
    margin: "14px",
    marginLeft: "20px",
    fontWeight: "600",
    paddig: "14px",
    // borderLeft:'1px solid black'
  },
  indicatorColor: {
    color: "#00A0DF",
  },
  textright: {
    position: "absolute",
    left: "505px",
    width: "552px",
    height: "24px",
    fontSize: "14px",
    lineHeight: "142%",
    margin: "10px",
    fontWeight: "400",
  },
  icon: {
    fontSize: "16px",
    paddig: "4px",
    // top:'195px',
    lineHeight: "10.67px",
    marginLeft: "5px",
    color: "#828282",
    top: "18.67px",
  },
});

const TabServices = (props) => {
  // const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const { classes } = props;
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <div className={classes.root}>
      <Tabs
        indicatorColor="primary"
        classes={{ root: classes.tab }}
        value={value}
        onChange={handleTabs}
      >
        <Tab style={{ textTransform: "none" }} label="Benefit Highlights" />
        <Tab style={{ textTransform: "none" }} label="Drug Coverage" />
        <Tab
          style={{ textTransform: "none" }}
          label="Doctor and Hospital Coverage"
        />
        <Tab style={{ textTransform: "none" }} label="Plan Brochures" />
      </Tabs>

      <TabPanel value={value} index={0}>
          
          <TableMedicare />
          </TabPanel>
        
        
      
      <TabPanel value={value} index={1}>
        Item 2 detail
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
export default withStyles(style)(TabServices);
