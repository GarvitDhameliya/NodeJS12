const http = require("http");

const express = require("express");

const connectDB = require("./db/dbconnection");

const app = express();

connectDB();

http.createServer(app).listen(3001);
