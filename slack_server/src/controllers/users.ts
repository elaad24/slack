import express , { Request, Response } from "express";
import { createUser, getUsersByEmail } from "../models/users";
const bcrypt = require("bcrypt");


export const signIn = async (req: Request, res: Response) => {
  try {
    console.log("log - ", req.body);
    
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ error: "missing data , only got - ", email,username,password });
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
        password:await bcrypt.hash(password, salt),
        un_protected_password: password,
        salt
      },
    });

    return res.status(201).json({msg:"user created succssesfuly"}).end()
  } catch (err) {}
};
