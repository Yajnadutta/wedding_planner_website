import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
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
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";

const PAGE_HOME = "Dashboard";

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

function Home(customerName) {
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

  
  

  return (
    <div>
      
      {/* NavBar Starts */}

      <Navbar expand="lg" className="navbar">
        <img src={require("./img/logo1.png")} className="img" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: 50 }}>
            <Nav.Link
              onClick={(e) => {
                home();
              }}
            >
              HOME
            </Nav.Link>

            <NavDropdown
              title="SERVICES"
              id="basic-nav-dropdown"
              style={{ marginLeft: 50 }}
            >
              <NavDropdown.Item
                onClick={(e) => {
                  alert("Login First")
                }}
                className="bg-dark text-white"
              >
                Photographer
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  alert("Login First")
                }}
                className="bg-dark text-white"
              >
                Makeup
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  alert("Login First")
                }}
                className="bg-dark text-white"
              >
                Destination
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  alert("Login First")
                }}
                className="bg-dark text-white"
              >
                Bridal Wear
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  alert("Login First")
                }}
                className="bg-dark text-white"
              >
                Groom Wear
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              style={{ marginLeft: 50 }}
              onClick={(e) => {
                alert("Login First")
              }}
            >
              PORTFOLIO
            </Nav.Link>
          </Nav>

          <Form inline>
            <Button
              variant="outline-success"
              onClick={(e) => {
                registration();
              }}
              style={{ marginRight: 50 }}
            >
              Register
            </Button>

            <Button
              variant="outline-success"
              style={{ marginRight: 50 }}
              onClick={(e) => {
                login();
              }}
            >
              LOGIN
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* NavBar Ends */}

      {/* Wedding Image 1  */}
      <div className="full-width-image">
        <img src={require("./img/pic1.png")} />
      </div>

      {/* Our services */}
      <div className="text-center mt-9">
        <img src={require("./img/services.png")} />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <img
              src={require("./img/camera.png")}
              onClick={(e) => {
                alert("Login First");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="col-sm-4 mt-5">
            <img
              src={require("./img/makeup.png")}
              onClick={(e) => {
                alert("Login First");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="col-sm-4 mt-3">
            <img
              src={require("./img/destination.png")}
              onClick={(e) => {
                alert("Login First");
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
                alert("Login First");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div class="col-sm-4 mt-4">
            <img
              src={require("./img/groom.png")}
              onClick={(e) => {
                alert("Login First");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="col-sm-4 mt-4">
            <img
              src={require("./img/package.png")}
              onClick={(e) => {
                alert("Login First");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div>
        <footer class="footer-distributed">
          <div class="footer-left">
          <img src={require("./img/logo1.png")}  />
            <h3>
              About<span> Wedding Bellz</span>
            </h3>

            <p class="footer-links">
                 Designed & Maintained By <br />
                 Yajnadutta Mishra 
             
            </p>

            <p class="footer-company-name">
              © 2021 Wedding Bellz
            </p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span> Kendujhar, Odisha</span>
               
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+91 8658796026 </p>
            </div>
            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@eduonix.com">yajanduttamishra@gmail.com</a>
              </p>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-company-about">
              <span>About the Website</span>
            This is a Completely Wedding Planner Website here You can book like
            Photo & Video Shoot , Make Up, Bridal groom etc.
            </p>
            <div class="footer-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
