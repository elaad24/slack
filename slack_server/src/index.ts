import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
const cors = require("cors");
const mongoose = require("mongoose");
import bodyParser from "body-parser";
import http from "http";

require("dotenv").config();

const app: Express = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

const server = http.createServer(app);

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
  .catch((err: any) => console.error("Could not connect to MongoDB..", err));

// here set the routes that run in express
app.use("/api/users", users);

app.get("/hi", (req: Request, res: Response) => {
  res.send("hey, Express!");
});

// error handler
app.use(function (
  err: { status: any },
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // set locals, only providing error in development
  res.locals.message = err;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
