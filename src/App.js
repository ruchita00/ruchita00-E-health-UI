import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import title from "../src/assets/title.png";
import home from "../src/assets/home.png";
import download from "../src/assets/download.png";
import utilities from "../src/assets/utilities.png";
import circles from "../src/assets/circles.png";
import Services from "./components/Services";
import Header from "./components/Header.js";
// import { RemoveScrollBar } from "react-remove-scroll-bar";
import Home from "./components/Home"
import Utilities from "./components/Utilities"
import Circles from "./components/Circles"


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#eeeeee",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit", },
  link: { textDecoration: "none", color: theme.palette.text.primary },
  title: {
    position: "absolute",
    width: "225.99px",
    height: "24px",
    left: "10px",
    marginTop: "48px",
    marginRight:'54.01px',
    marginLeft:'40px',

  },

  home: {
    position: "absolute",
    left: "88px",
    opacity:'87%',
    right: "53.75%",
    width:'51px',
    height:'24px',
    top: "3.25%",
    bottom: "1.25%",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    // opacity: "0.87",
  },
  Circles: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-33.25%",
    bottom: "31.25%",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  Services: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-23.25%",
    bottom: "31.25%",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  Utilities: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-13.25%",
    bottom: "31.25%",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  img: {
    width: "30px",
    padding: "5px",
  },
  listitemtext: {
    padding: "5px",
    color:'#4B4B4B',
  
  },

  linkelements: {
    left: "50px",
    top: "10px",
    height: "10px",
    width: "10px",
    marginTop: "90px",
    marginBottom:"-50px"
  },
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
              style={{ width: "320px",height:'1024px' }}
              variant="persistent"
              anchor="left"
              open={true}

              classes={{ paper: classes.drawerPaper }}
            >
              <List>
                <ListItem>
                  <img src={title} alt="title-img" className={classes.title} />
                  <ListItemText></ListItemText>
                </ListItem>

                <Link to="/home" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={home}
                      alt="home-img"
                      className={classes.img}
                    />
                    <ListItemText
                      primary={"Home"}
                      className={classes.listitemtext}
                    />
                  </ListItem>
                </Link>
                <Link to="/circles" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={circles}
                      alt="circle-img"
                      className={classes.img}
                    />
                    <ListItemText 
                      primary={"Circles"}
                      className={classes.listitemtext}
                    />
                  </ListItem>
                </Link>
                <Link to="/services" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={download}
                      alt="services-img"
                      className={classes.img}
                    />
                    <ListItemText
                      primary={"Services"}
                      className={classes.listitemtext}
                    />
                  </ListItem>
                </Link>
                <Link to="/utilities" className={classes.link}>
                  <ListItem button className={classes.linkelements}>
                    <img
                      src={utilities}
                      alt="utilities-img"
                      className={classes.img}
                    />
                    <ListItemText
                      primary={"Utilities"}
                      className={classes.listitemtext}
                    />
                  </ListItem>
                </Link>
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
