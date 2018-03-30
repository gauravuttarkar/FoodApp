var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var locations=["location1","location2","location3"]

var restaurants={
  location1: ["r1","r2","r3"],
  location2: ["r4","r5","r6"],
  location3: ["r7","r8","r9"]
};

app.get("/",function(req,res){
   res.render("landing.ejs"); 
});



app.get("/location",function(req,res){
   res.render("location.ejs",{locations:locations}) ;
});

app.post("/location",function(req,res){
    console.log("hello");
   var location=req.body.location;
   console.log(restaurants[location]);
   res.render("restaurant.ejs",{restaurants:restaurants[location]});
   
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The server has started");
});

// app.listen(process.env.PORT,process.env.IP,function(){
//   console.log("The YelpCamp Server Has Started!");
// });