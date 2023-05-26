const express = require("express");
const { sendFile } = require("express/lib/response");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/abi.js", (req, res) => {
    res.sendFile(path.join(__dirname, "/abi.js"));
})

app.get("/w3.css", (req, res) => {
    res.sendFile(path.join(__dirname, "/w3.css"));
})

app.get("/web3.min.js", (req, res) => {
    res.sendFile(path.join(__dirname, "/web3.min.js"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`server running at ${portNumber}`);