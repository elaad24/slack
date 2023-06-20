import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

export const checkJwtSessionToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeaderAccsessToken = req.headers["authorization"];
    console.log("authHeaderAccsessToken", authHeaderAccsessToken);

    let value = jwt.verify(
      authHeaderAccsessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log("verify", value);
    console.log("jwt.decode", jwt.decode(authHeaderAccsessToken));
    next();
    return;
  } catch (err) {
    console.log("here");

    res.status(400).json(err);
  }
};


