import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import './App.css';
import './Home.css';
import { useHistory } from "react-router-dom";

function Portfolio() {

  let history = useHistory();
  let homepage = () =>{
    history.push("/Home");
  }
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

  let registration = () => {
    history.push("/Registration");
  };
  let login = () => {
    history.push("/Login");
  };
  let portFolioPage = () => {
    history.push("/Portfolio");
  };


  
  
  let createpackage = () =>{
    history.push("/CreatePackage");
  }

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
        
            <div class="text-center">
            <img src={require("./img/img_1 (1).png")} />
            </div>

            
            <div class="text-center mt-5">
            <img src={require("./img/img_1 (2).png")} />
            </div>

               
            <div class="text-center mt-5">
            <img src={require("./img/img_1 (3).png")} onClick={(e)=>{createpackage()}}/>
            </div>
            
         
         
         
         
   </div>
        


   
  );
}

export default Portfolio;
