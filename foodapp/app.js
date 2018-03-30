var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var locations = ["location1", "location2", "location3"]

var restaurants = {
    location1: ["r1", "r2", "r3"],
    location2: ["r4", "r5", "r6"],
    location3: ["r7", "r8", "r9"]
};

var menu = {
    r1: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r2: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r3: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r4: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r5: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r6: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r7: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r8: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ],
    r9: [
        ["item1", "item2", "item3"],
        [10, 15, 20]
    ]

};

app.get("/", function(req, res) {
    res.render("landing.ejs");
});



app.get("/location", function(req, res) {
    res.render("location.ejs", { locations: locations });
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
