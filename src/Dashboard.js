import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
const PAGE_HOME = "HomeContent";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 750,
  },
}));

function Dashboard(customerName) {
  let history = useHistory();
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

  let registration = () => {
    history.push("/Registration");
  };
  let login = () => {
    history.push("/Login");
  };

  let home = () => {
    history.push("/Home");
  };

  let item = () => {
    history.push("/Item");
  };

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(PAGE_HOME);
  const [customer, setcustomer] = useState("");

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  return (
    <div>
     {/* NavBar Starts */}

      <Navbar expand="lg" className="navbar">
        <img src={require("./img/logo1.png")} className="img" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: 50 }}>
            <Nav.Link  onClick={(e) => {
                  
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
          <Form inline>
              <Typography variant="h5">Hello {customer}</Typography>
              <Button
                variant="outline-success"
                onClick={(e) => {
                  home();
                }}
                style={{ marginRight: 50, marginLeft: 20 }}
              >
                Logout
              </Button>
            </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* NavBar Ends */}

      
          
        
      {/* Wedding Image 1 */}
      <div className="full-width-image">
        <img src={require("./img/5.png")} />
      </div>

      {/* Our services */}
      <div className="text-center mt-9">
        <img src={require("./img/services.png")} />
      </div>
      

     

      {/* Photos Videos Makeup images */}
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <img
              src={require("./img/camera.png")}
              onClick={(e) => {
                photos();
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="col-sm-4 mt-5">
            <img
              src={require("./img/makeup.png")}
              onClick={(e) => {
                makeup();
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="col-sm-4 mt-3">
            <img
              src={require("./img/destination.png")}
              onClick={(e) => {
                destination();
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4 mt-5">
            <img
              src={require("./img/bridal.png")}
              onClick={(e) => {
                bridal();
              }}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div class="col-sm-4 mt-4">
            <img
              src={require("./img/groom.png")}
              onClick={(e) => {
                groom();
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="col-sm-4 mt-4">
            <img src={require("./img/package.png")}   onClick={(e) => {
                item(); 
              }}  style={{ cursor: "pointer" }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
