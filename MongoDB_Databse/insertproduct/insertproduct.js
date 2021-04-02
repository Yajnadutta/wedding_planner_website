let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
let insertproduct = require("express")
  .Router()
  .post("/", (req, res) => {
    nareshIT.connect("mongodb://localhost:27017/wedding", (err, db) => {
      if (err) throw err;
      else {
        db.collection("products").insertOne(
          {
            category: req.body.category,
            name: req.body.name,
            cost: req.body.cost,
            image: req.body.image,
          },
          (err, result) => {
            if (err) throw err;
            else {
              res.send({ insertproduct: "success" });
            }
          }
        );
      }
    });
  });
module.exports = insertproduct;
