const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.send("Welcome")
    //res.render()
});

const obj = { newVaraiable : "Hello World" }

app.get('/home', (req, res)=>{
   res.render('home', obj)
});

app.get('/contact-us', (req, res)=>{
   res.render('contact-us')
});

app.get('/about-us', (req, res)=>{
   res.render('about')
});



app.listen(3000);
console.log("running in port 3000");

