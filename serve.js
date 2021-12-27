
// import axios from "axios";
var axios = require("axios");
var express = require('express');

var app = express();


async function getMiner() {
    var result = await axios.get('https://api.ethermine.org/miner/0x5C342EEfAFB8e8489b28b63cA4A64A9C62B9d81A/workers')
    console.log('status:', result.status, 'result:', result.data);
    return result;
}

app.get('/minerWorkers', async function (req, res) {
    // console.log('req:',req);
    console.log("request...");
    var result = await getMiner()
    console.log('status:', result.status, 'result:', result.data);
    res.status(result.status).send(result.data)
    // result.data
})

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('host:', host, 'port:', port);
})


// getMiner();