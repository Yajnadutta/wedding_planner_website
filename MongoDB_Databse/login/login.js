//this file used to develop the login rest api  (POST)

//import mongodb module
let mongodb = require("mongodb");

//create the client
//mongodb follows the "client server" architecture
let nareshIT = mongodb.MongoClient;
//where "nareshIT" is the client

//import token.js file
//token.js file used to save the server side token
let obj = require("../config/token");

//generate the token
let generateToken = require("../config/generateToken");

//create and export the "module"
let login = require("express")
  .Router()
  .post("/", (req, res) => {
    nareshIT.connect("mongodb://localhost:27017/wedding", (err, db) => {
      if (err) throw err;
      else {
        db.collection("users")
          .find({ email: req.body.email, password: req.body.password })
          .toArray((err, array) => {
            if (err) throw err;
            else {
              if (array.length > 0) {
                let token = generateToken(
                  {
                    email: req.body.email,
                    password: req.body.password,
                    customername: req.body.name,
                  },
                  "hr@nareshit.in"
                );
                obj.token = token;
                res.send({
                  login: "success",
                  customername: array[0].name,
                  token: token,
                });
              } else {
                res.send({ login: "fail" });
              }
            }
          });
      }
    });
  });
module.exports = login;
