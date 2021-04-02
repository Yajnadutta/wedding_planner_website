//this file used to compare the client side token with the server side token (middleware)

//import server side token
let obj = require("./token");

//create the function
let auth = (req,res,next)=>{
    let allHeaders = req.headers;
    let c_token = allHeaders.token;

    if(c_token == obj.token){
        next();
    }else{
        res.send({msg:"unauthorized user !!!"});
    }

};

module.exports = auth;
