var express = require("express");
var faker = require("faker");
var app = express();
var bodyParser = require("body-parser");
var burp = require('burrp').burp;
app.use(bodyParser.urlencoded({ extended: true }));
var locations = ["location1", "location2", "location3"]

var lNames = []
for (var j = 0; j < 3; j++) {
    lNames.push(faker.address.city())
}

var rNames = []

for (var j = 0; j < 9; j++) {
    rNames.push(faker.company.companyName());
}



var locationNames = {
    location1: lNames[0],
    location2: lNames[1],
    location3: lNames[2]
}



// var restaurants = {
//     location1: [rNames[0], rNames[1], rNames[2]],
//     location2: [rNames[3], rNames[4], rNames[5]],
//     location3: [rNames[6], rNames[7], rNames[8]]
// };

var restaurants = {
    location1: ["r1", "r2", "r3"],
    location2: ["r4", "r5", "r6"],
    location3: ["r7", "r8", "r9"]
};


var menu = {
    r1: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r2: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r3: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r4: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r5: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r6: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r7: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r8: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ],
    r9: [
        [burp(), burp(), burp()],
        [faker.commerce.price(), faker.commerce.price(), faker.commerce.price()]
    ]

};

app.get("/", function(req, res) {
    res.render("landing.ejs");
});



app.get("/location", function(req, res) {
    res.render("location.ejs", { locations: locations, lNames: lNames });
});

app.post("/location", function(req, res) {
    console.log("hello");
    var location = req.body.location;
    console.log(restaurants[location]);
    res.render("restaurant.ejs", { restaurants: restaurants[location] });
});

var restaurant;
app.post("/restaurant", function(req, res) {
    console.log("restaurant");
    restaurant = req.body.restaurant;
    console.log(menu[restaurant]);
    res.render("menu.ejs", { menu: menu[restaurant] });

});

var items = []
var total = 0;
app.post("/menu", function(req, res) {
    console.log("menu");
    items = []
    // var items = req.body.items;
    var quantity = req.body.quantity;

    //console.log(items);
    console.log(quantity);
    for (var i = 0; i < quantity.length; i++) {
        total = total + menu[restaurant][1][i] * quantity[i];
        items.push(menu[restaurant][0][i])
    }
    console.log(total);
    console.log(items);
    res.render("bill.ejs", { total: total, items: items });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server has started");
});

// app.listen(process.env.PORT,process.env.IP,function(){
//   console.log("The YelpCamp Server Has Started!");
// });
