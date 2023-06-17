"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const users_1 = require("../models/users");
const bcrypt = require("bcrypt");
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("log - ", req.body);
        const { email, username, password } = req.body;
        if (!email || !username || !password) {
            return res.status(400).json({ error: "missing data , only got - ", email, username, password });
        }
        const exitsUser = yield (0, users_1.getUsersByEmail)(email);
        if (exitsUser) {
            return res.status(400).json({ error: "user is already exist " });
        }
        const salt = yield bcrypt.genSalt(10);
        const createNewUser = yield (0, users_1.createUser)({
            email,
            username,
            authentication: {
                password: yield bcrypt.hash(password, salt),
                un_protected_password: password,
                salt
            },
        });
        return res.status(201).json({ msg: "user created succssesfuly" }).end();
    }
    catch (err) { }
});
exports.signIn = signIn;
