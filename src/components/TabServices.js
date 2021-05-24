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
        <div className={classes.row1}>
          <div className={classes.textright}>
            Medicare Adavantage (Local PPO)
          </div>
          <div className={classes.text}>
            Plan Type
            <InfoRoundedIcon className={classes.icon} />{" "}
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>
            This plan does not have a medical deductible.
          </div>
          <div className={classes.text}>
            Annual In-Network Deductible
            <InfoRoundedIcon className={classes.icon} />{" "}
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>
            This plan does not have a medical deductible.
          </div>
          <div className={classes.text}>
            Annual Out-of-Network Deductible
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "250px", top: "15px" }}
            />
          </div>
        </div>

        <div
          style={{ height: "45px", lineHeight: "15px" }}
          className={classes.row1}
        >
          <div className={classes.textright}>
            $7550 for services you receive from in-network Providers,$11300 for
            services you
            <br /> receive from any provider.
          </div>

          <div style={{ height: "72px" }} className={classes.text}>
            Out-of-Pocket Maximum
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "180px", top: "15px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>
            In-network: $0 copay <br />
             Out-of-network: $0 copay
          </div>
          <div className={classes.text}>
            Office Visit for Primary Doctor
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "225px", top: "15px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>
          <div className={classes.text}>
            Prescription Drug Coverage
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "210px", top: "16px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>
          <div className={classes.text}>
            Dental Services
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "130px", top: "16px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>
          <div className={classes.text}>
            Vision Services
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "125px", top: "16px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>
          <div className={classes.text}>
            Hearing Services
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "135px", top: "16px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>
          <div className={classes.text}>
            Over-the-Counter Benefits
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "200px", top: "15px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>
          <div className={classes.text}>
            Fitness Benefits
            <InfoRoundedIcon
              className={classes.icon}
              style={{ position: "absolute", left: "130px", top: "15px" }}
            />
          </div>
        </div>

        <div className={classes.row1}>
          <div className={classes.textright}>YES</div>

          <div className={classes.text}>
            Transportation Services
            <InfoRoundedIcon
              style={{ position: "absolute", left: "180px", top: "16px" }}
              className={classes.icon}
            />
          </div>

          <div className={classes.rowlast}>
            {" "}
            <div className={classes.textright}>YES</div>
            <div className={classes.text}>
              Telehealth Services
              <InfoRoundedIcon
                style={{ position: "absolute", left: "150px", top: "65px" }}
                className={classes.icon}
              />
            </div>
          </div>
        </div>
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
