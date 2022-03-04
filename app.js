const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString().replace("%%COPYRIGHTYEAR%%","2022");
const aside = fs.readFileSync("./public/components/aside/aside.html").toString();

const frontPage = fs.readFileSync("./public/pages/frontpage/index.html").toString();
const nodePage = fs.readFileSync("./public/pages/node/index.html").toString();
const nodejsPage = fs.readFileSync("./public/pages/node/node.html").toString();
const expressPage = fs.readFileSync("./public/pages/node/express.html").toString();
const terminalcommandsPage = fs.readFileSync("./public/pages/node/terminalcommands.html").toString();
const javascriptPage = fs.readFileSync("./public/pages/node/javascript.html").toString();
const httpandrestPage = fs.readFileSync("./public/pages/node/Http_and_REST.html").toString();

app.get("/", (req, res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Home")
    + frontPage + footer);
});

app.get("/node", (req,res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Node")
    + nodePage + footer);
});

app.get("/node/nodejs", (req,res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Introduction to NodeJS")
    + nodejsPage + aside + footer);
})

app.get("/node/terminalcommands", (req,res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Terminalcommands")
    + terminalcommandsPage + aside + footer);
})

app.get("/node/express", (req,res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Express") 
    + expressPage + aside + footer);
})

app.get("/node/javascript", (req,res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Express") 
    + javascriptPage + aside + footer);
});

app.get("/node/httpandrest", (req,res) => {
  res.send(nav
    .replace("%%ACTIVEPAGE%%","active")
    .replace("%%DOCUMENTTITLE%%","Express") 
    + httpandrestPage + aside + footer);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
