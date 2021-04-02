let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
let fetch = require("express")
  .Router()
  .get("/", (req, res) => {
    nareshIT.connect("mongodb://localhost:27017/wedding", (err, db) => {
      if (err) throw err;
      else {
        db.collection("products")
          .find()
          .toArray((err, array) => {
            if (err) throw err;
            else {
              res.send(array);
            }
          });
      }
    });
  });
module.exports = fetch;
