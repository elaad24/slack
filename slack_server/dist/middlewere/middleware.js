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
exports.checkJwtSessionToken = void 0;
const jwt = require("jsonwebtoken");
const checkJwtSessionToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeaderAccsessToken = req.headers["authorization"];
        console.log("authHeaderAccsessToken", authHeaderAccsessToken);
        let value = jwt.verify(authHeaderAccsessToken, process.env.ACCESS_TOKEN_SECRET);
        console.log("verify", value);
        console.log("jwt.decode", jwt.decode(authHeaderAccsessToken));
        next();
        return;
    }
    catch (err) {
        console.log("here");
        res.status(400).json(err);
    }
});
exports.checkJwtSessionToken = checkJwtSessionToken;
