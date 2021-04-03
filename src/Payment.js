import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function Payment() {
  
  const [name, setName] = useState("Example");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_4JFfcLgN4Moju9" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      name: "Please Pay",
      description: "Thank you for Booking. Please give us some money",
      image: "http://localhost:1337/logo1.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name,
        email: "example@gmail.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <header className="App-header">
        <button className="btn btn-warning btn-block" onClick={displayRazorpay} style={{fontSize:20,
        fontWeight:'bold',color:'whitesmoke',margin:'auto',marginTop:250}}>
         Click here to  Pay ₹50,000 for Booking
        </button>
      </header>
    </div>
  );
}

export default Payment;
