import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 605,
    marginLeft: 20,
    marginTop: 50,
    fontSize: 25,
    
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
 
}));


function Item() {


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


  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (


    <div className="App">
      <header>

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
        
        <div style={{textAlign:'center'}}>
        <button className="btn btn-primary btn-lg" onClick={() => navigateTo(PAGE_CART)}>
          Go to Packages ({getCartTotal()})
        </button>
          &nbsp; &nbsp;
        <button className="btn btn-success btn-lg" onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Packages
        </button>
        </div>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Item;