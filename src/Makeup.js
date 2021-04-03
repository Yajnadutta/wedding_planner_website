import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./App.css";
import "./Home.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 605,
    marginLeft: 20,
    marginTop: 50,
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function Makeup() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let history = useHistory();
  let homepage = () => {
    history.push("/Home");
  };

  let createpackage = () => {
    history.push("/CreatePackage");
  };

  let registration = () => {
    history.push("/Registration");
  };
  let login = () => {
    history.push("/Login");
  };
  let portFolioPage = () => {
    history.push("/Portfolio");
  };
  let photos = () => {
    history.push("/Photos");
  };

  let makeup = () => {
    history.push("/Makeup");
  };
  let destination = () => {
    history.push("/Destination");
  };

  let bridal = () => {
    history.push("/Bridal");
  };

  let groom = () => {
    history.push("/Groom");
  };
  let home = () => {
    history.push("/Home");
  };


  return (
    <div>
         {/* NavBar Starts */}

      <Navbar expand="lg" className="navbar">
        <img src={require("./img/logo1.png")} className="img" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: 50 }}>
            <Nav.Link  onClick={(e) => {
                  home();
                }}>HOME</Nav.Link>

            <NavDropdown
              title="SERVICES"
              id="basic-nav-dropdown"
              style={{ marginLeft: 50 }}
            >
              <NavDropdown.Item
                 onClick={(e) => {
                  photos();
                }}
                className="bg-dark text-white"
              >
                Photographer
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  makeup();
                }}
                className="bg-dark text-white"
              >
                Makeup
              </NavDropdown.Item>
              <NavDropdown.Item
                 onClick={(e) => {
                  destination();
                }}
                className="bg-dark text-white"
              >
                Destination
              </NavDropdown.Item>
              <NavDropdown.Item
                  onClick={(e) => {
                    bridal();
                  }}
                className="bg-dark text-white"
              >
                Bridal Wear
              </NavDropdown.Item>
              <NavDropdown.Item
                 onClick={(e) => {
                  groom();
                }}
                className="bg-dark text-white"
              >
                Groom Wear
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              style={{ marginLeft: 50 }}
              onClick={(e) => {
                portFolioPage();
              }}
            >
              PORTFOLIO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* NavBar Ends */}

      {/* First Card */}
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="text-center">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      B
                    </Avatar>
                  }
                  
                  title="Beauty Luxuriant"
                />
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2332376/pexels-photo-2332376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    Price :₹10000
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          </div>

          {/* Second Card */}

          <div class="col-sm-6 ">
            <div class="text-center">
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      C
                    </Avatar>
                  }
                 
                  title="Charm RiseClick"
                />
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    Price :₹20000
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makeup;
