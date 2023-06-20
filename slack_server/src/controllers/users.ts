import express, { Request, Response } from "express";
import { createUser, getUsersByEmail } from "../models/users";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const signIn = async (req: Request, res: Response) => {
  try {
    console.log("log - ", req.body);

    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        error: "missing data , only got - ",
        email,
        username,
        password,
      });
    }

    const exitsUser = await getUsersByEmail(email);
    if (exitsUser) {
      return res.status(400).json({ error: "user is already exist " });
    }

    const salt = await bcrypt.genSalt(10);

    const createNewUser = await createUser({
      email,
      username,
      authentication: {
        password: await bcrypt.hash(password, salt),
        un_protected_password: password,
        salt,
      },
    });

    return res.status(201).json({ msg: "user created succssesfuly" }).end();
  } catch (err) {}
};

export const login = async (req: Request, res: Response) => {
  try {
    const { userEmail, password } = req.body;

    if (!userEmail || !password) {
      return res
        .status(401)
        .json({ error: "user name and password is a must " });
    }

    const user = await getUsersByEmail(userEmail).select(
      "+authentication.password"
    );
    if (!user) {
      return res.status(401).json({ error: "user was not find " });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.authentication?.password
    );
    if (isCorrectPassword != true) {
      console.log("data", userEmail, password);
      return res.status(403).json({ error: "wrong password " });
    }

    if (isCorrectPassword == true) {
      const accsessToken = jwt.sign(
        {
          username: user.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5h" }
      );

      const refreshToken=jwt.sign( {
        username: user.username,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "5h" }
    
    )
      
      res.status(200).json({ accessToken: accsessToken });
    }
  } catch (err) {
    console.log("error ", err);

    res.status(400).json({ error: err });
  }
};
