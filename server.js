"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
const path = require('path');
const fs = require('fs');
// import bodyParser from "body-parser"
var app = express_1.default();

app.use(cors_1.default());
app.use(express_1.default.json());

const serverOptions = {
    // Certificate(s) & Key(s)
    cert: fs.readFileSync(path.join(__dirname, 'certs/host.crt')),
    key: fs.readFileSync(path.join(__dirname, 'certs/host.key')),

    // TLS Versions
    maxVersion: 'TLSv1.3',
    minVersion: 'TLSv1.2'
}

var port = 4000;
var lists = [];
app.post("/save", function (req, res) {
    console.log(req.body);
    lists = req.body.lists;
    return res.json({ success: true });
});
app.get("/load", function (req, res) { return res.json({ lists: lists }); });

const server = require('https').Server(serverOptions, app);

server.listen(port, function () {
    return console.log("taskmgrapp-backend server running on port " + port + "!");
});
