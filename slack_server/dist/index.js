"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const mongoose = require("mongoose");
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(cors());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
const port = process.env.PORT;
server.listen(port, () => console.log(`Listening on port ${port}...`));
// import the brain of the server by addres
const users = require("./routes/users");
console.log("process.env.MONGODB_URL", process.env.MONGODB_URL);
mongoose
    //  local host
    //.connect("mongodb://localhost/e_store_server", {
    .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    autoIndex: false,
    retryWrites: false,
})
    .then(() => console.log("Connected to MongoDB.."))
    .catch((err) => console.error("Could not connect to MongoDB..", err));
// here set the routes that run in express
app.use("/api/users", users);
app.get("/hi", (req, res) => {
    res.send("hey, Express!");
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
