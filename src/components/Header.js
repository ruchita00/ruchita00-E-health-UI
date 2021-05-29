import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Grid,
  Badge,
  IconButton,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import avatar from "../assets/avatar.png";


const style = (theme) => ({
  root: {
    backgroundColor: "#ffff",
    heigh: "80px",
    width:'1024px',
    left:'320px'
  },

  img: {
    height: "20px",
    width: "20px",
    margin: "24px 15px 20px -20px",
  },
});

const HeaderMenu = (props) => {
  const { classes } = props;
  return (
    <AppBar lg={12}
      position="fixed"
      className={style.root} 
      style={{
        boxShadow: "0px 0px 0px 0px",
        height: "80px",
        // width:'1120px',
        backgroundColor:'#FFFFFF',
        borderBottom:'1px solid #E4E4E4'
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item></Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton classes={{ root: classes }}>
              <Badge>
                <HelpIcon
                  style={{
                    color: "black",
                    position: "relative",
                    // top: "-5px",
                    width:'32px',
                    height:'22.29px',
                    top:'0px',
                    left: "50px",
                  }}
                  fontSize="medium"
                />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge color="secondary">
                <NotificationsIcon
                  style={{
                    color: "black",
                    position: "relative",
                    top: "0px",
                    width:'32px',
                    height:'22.29px',
                    left: "40px",
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton></IconButton>
            <IconButton>
              <div>
                <img alt='img'
                  src={avatar}
                  style={{
                    position: "relative",
                    width:'28px',
                    height:'26.29px',
                    left: "35px",
                    borderRadius: "10",
                  }}
                  className={classes.img}
                />
              </div>
              <ExpandMoreIcon
                style={{
                  color: "black",
                  position: "relative",
                  top: "0px",
                  width:'32px',
                    height:'22.29px',
                  left: "30px",
                }}
              />
            </IconButton>
            <IconButton>
              <Badge></Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(HeaderMenu);
