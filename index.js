const express = require("express");

const app = express();

app.get("", (req, resp)=> {
    resp.send("<h1>Express</h1>")
})
app.get("/about", (req, resp)=> {
    resp.send("<h1>Express About</h1>")
})// 
app.get("/contact", (req, resp)=> {
    resp.send("<h1>Express Contact</h1>")
}) // app.get use to make get data/ api
app.listen(3000);// app 