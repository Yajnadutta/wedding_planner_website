import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import swal from 'sweetalert';
import './App.css';
const PHOTOS_VIDEO = "Photo & Video";
const BRIDAL = "Bridal Wear";
const MAKEUP = "Makeup";
const DESTINATION = "Destination";
const GROOM = "Groom Wear";
export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: PHOTOS_VIDEO,
      name: "Priyam Parikh Pictures",
      cost: "40000",
      image:
        "https://images.pexels.com/photos/2106463/pexels-photo-2106463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: PHOTOS_VIDEO,
      name: "Wedmantram",
      cost: "80000",
      image:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: PHOTOS_VIDEO,
      name: "Hardikradia Photography",
      cost: "70000",
      image:
        "https://images.pexels.com/photos/3711677/pexels-photo-3711677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: BRIDAL,
      name: "Lehengasocity",
      cost: "25000",
      image:
        "https://images.pexels.com/photos/1200637/pexels-photo-1200637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: BRIDAL,
      name: "HaSareeonusClick",
      cost: "35000",
      image:
        "https://images.pexels.com/photos/3547119/pexels-photo-3547119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: MAKEUP,
      name: "Beauty Luxuriant",
      cost: "15000",
      image:
        "https://images.pexels.com/photos/1383537/pexels-photo-1383537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: MAKEUP,
      name: "RiseClick",
      cost: "20000",
      image:
        "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: DESTINATION,
      name: "Desination Carnations Hall",
      cost: "120000",
      image:
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: DESTINATION,
      name: "Desination EliteClick Resort",
      cost: "200000",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      category: GROOM,
      name: "Phenom Serwani",
      cost: "15000",
      image:
        "https://5.imimg.com/data5/RA/LK/MY-41899481/indo-western-mens-sherwani-500x500.jpg",
    },
    {
      category: GROOM,
      name: "Boulevard Tuxes",
      cost: "17000",
      image:
        "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    swal({
      title: "Package Added",
      icon: "success",
    });
  };

  const [category, setCategory] = useState(PHOTOS_VIDEO);

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>


      <div id="select">
      <select onChange={(e) => setCategory(e.target.value)} className="bg-warning btn-lg">
        <option value={PHOTOS_VIDEO}>{PHOTOS_VIDEO}</option>
        <option value={BRIDAL}>{BRIDAL}</option>
        <option value={MAKEUP}>{MAKEUP}</option>
        <option value={DESTINATION}>{DESTINATION}</option>
        <option value={GROOM}>{GROOM}</option>
      </select>
      </div>
        {/* Navigate Products from Add to Package to Go to Packages */}
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <Card style={{ width: "25rem",marginTop:20,marginLeft:30 }} key={idx}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>

              <h4>₹{product.cost}</h4>
              <button
                className="btn btn-success btn-lg"
                onClick={() => addToCart(product)}
              >
                Add to Package
              </button>
            </Card.Body>
          </Card>
        ))}

        <div></div>
      </div>
    </>
  );
}
