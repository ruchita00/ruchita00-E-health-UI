import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import title from "../src/assets/title.png";
import Services from "./components/Services";
import Header from "./components/Header.js";
// import { RemoveScrollBar } from "react-remove-scroll-bar";
import Home from "./components/Home";
import Utilities from "./components/Utilities";
import Circles from "./components/Circles";
import icon_M from "../src/assets/icon_M.png";
import Navicon from "../src/assets/Navicon.png";
import Serv from "../src/assets/Serv.png";
import Util from "../src/assets/Util.png";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#E5E5E5",
      width:'1265px'
    },
  },
});

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
  title: {
    position: "absolute",
    width: "225.99px",
    height: "24px",
    left: "10px",
    marginTop: "48px",
    marginRight: "54.01px",
    marginLeft: "40px",
  },

  img: {
    position: "absolute",
    width: "24px",
    height: "24px",
    top: "5px",
    left: "10px",
  },
  listitemtext: {
    padding: "5px",
    color: "#4B4B4B",
  },

  linkelements: {
    left: "60px",
    top: "10px",
    height: "10px",
    width: "10px",
    marginTop: "90px",
    marginBottom: "-50px",
  },
  textlink: {
    position: "absolute",
    width: "51px",
    height: "24px",
    top: "0px",
    left: "88px",
  },
  mainnavactive:{
    color:'black',
    fontWeight:'600'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <RemoveScrollBar /> */}
        <div className={classes.appMain}> </div>
        <CssBaseline />

        <Header />
        <Router>
          <div style={{ display: "flex" }}>
            <Drawer
              style={{ width: "320px", height: "1024px" }}
              variant="persistent"
              anchor="left"
              open={true}
              classes={{ paper: classes.drawerPaper }}
            >
              <List>
                <ListItem>
                  <img src={title} alt="title-img" className={classes.title} />
                </ListItem>

                <NavLink to="/home" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img src={icon_M} alt="home-img" className={classes.img} />
                    <ListItemText
                      style={{ left: "55px" }}
                      primary={"Home"}
                      className={classes.textlink}
                    />
                  </ListItem>
                </NavLink>
                <NavLink to="/circles" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={Navicon}
                      alt="circle-img"
                      className={classes.img}
                    />
                    <ListItemText
                      style={{ left: "55px" }}
                      primary={"Circles"}
                      className={classes.textlink}
                    />
                  </ListItem>
                </NavLink>
                <NavLink to="/services" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={Serv}
                      alt="services-img"
                      className={classes.img}
                    />
                    <ListItemText
                      style={{ left: "55px" }}
                      primary={"Services"}
                      className={classes.textlink}
                    />
                  </ListItem>
                </NavLink>
                <NavLink to="/utilities" className="main-nav" activeClassName="mainnavactive" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={Util}
                      alt="utilities-img"
                      className={classes.img}
                    />
                    <ListItemText
                      style={{ left: "55px" }}
                      primary={"Utilities"}
                      className={classes.textlink}
                    />
                  </ListItem>
                </NavLink>
              </List>
            </Drawer>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/circles">
                <Circles />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/utilities">
                <Utilities />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
