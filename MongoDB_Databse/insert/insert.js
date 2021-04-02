let mongodb = require("mongodb");
let nareshIT = mongodb.MongoClient;
let insert = require("express").Router().post("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/wedding",(err,db)=>{
        if(err) throw err;
        else{
           db.collection("users").insertOne({"name":req.body.name,
                                                "email":req.body.email,
                                                "password":req.body.password,
                                                 "gender":req.body.gender,
                                                "city":req.body.city,
                                                "partnername":req.body.partner,
                                                "mobile":req.body.mobile,
                                                  "budget":req.body.budget,
                                                 "wedding":req.body.wedding},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({insert : "success"});
                    }
           });
        }
    });
});
module.exports = insert;