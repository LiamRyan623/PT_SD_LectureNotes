const express = require("express");

const app = express();

const PORT = 4003;

const log = console.log;

const cookieParser = require('cookie-parser');

const db = require("./db.json")

//provides us access to the middleware so that we can see what cookies are stored.
app.use(cookieParser());

// Build a route (GET)  to see/test/create a cookie: http://localhost4003/
app.get("/", async(req, res) => {
   // log(req.cookies);
   res.cookie("cart", [
    {"item":'milk', price:1.79}, 
    {"item":'cheese', price: 2.99},
    {"item":'dog food', price: 8.98}
   ]);

   // set cookie data for our get request
   const check = req.cookies;
   //log(check);
   //log(check.cart);


let offer;

check.cart.every(obj => {
    offer = db.filter( (dbItem) => {
        dbItem.item == obj.item && dbItem.price < obj.price
    })

    if(offer.length > 0) {
        return false;
    }

    return true;

});
log(offer)

if(offer) {
    res.send({
        offer: `Our ${offer[0].item} is ${offer[0].price}!`,
        cookies: check
    })
} else {
    res.send({
        cookies: check,
    });

}

   res.send(check.cart);

})


app.listen(PORT, log(`Server is running on PORT: ${PORT}`))