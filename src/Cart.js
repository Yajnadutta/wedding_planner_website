import React, { useState } from 'react';
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router-dom";

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
  },
}));

export default function Cart({ cart, setCart }) {
  let history = useHistory();
  let payment = () => {
    history.push("/Payment");
  };

  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <>
      <h1>Packages</h1>
      {cart.length > 0 && (
        <button
          className="btn btn-danger float-right mt-0 btn-lg"
          onClick={clearCart}
        >
          Delete All
        </button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <Card
              style={{ width: "25rem", marginTop: 20, marginLeft: 30 }}
              key={idx}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>

                <h4>₹{product.cost}</h4>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product)}
                >
                  Delete
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div></div>
      <div>
        <button type="button" className="btn btn-warning btn-block text-white ml-2 mr-2" style={{borderRadius:10}} onClick={handleOpen}>
        <b>  Proceed to Checkout </b>
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Total Cost:₹{getTotalSum()}</h2>
              <p id="transition-modal-description" style={{textAlign:'center'}}>
               <b> Thank You for Choosing Us</b> <p>
               <button className="btn btn-success btn-lg mt-3"  onClick={(e) => {
                payment();
              }}>Proceed to Pay</button> </p>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
