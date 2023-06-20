"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserByID = exports.deleteUserByID = exports.createUser = exports.getUsersByID = exports.getUsersBySessionToke = exports.getUsersByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt = require("bcrypt");
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    authentication: {
        password: { type: String, require: true, select: false },
        un_protected_password: { type: String, require: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});
exports.UserModel = mongoose_1.default.model("user", UserSchema);
// some function the will be used frequntly
const getUsers = () => exports.UserModel.find();
exports.getUsers = getUsers;
const getUsersByEmail = (email) => exports.UserModel.findOne({ email });
exports.getUsersByEmail = getUsersByEmail;
const getUsersBySessionToke = (sessionToken) => exports.UserModel.findOne({
    "authentication.sessionToken": sessionToken,
});
exports.getUsersBySessionToke = getUsersBySessionToke;
const getUsersByID = (id) => exports.UserModel.findById(id);
exports.getUsersByID = getUsersByID;
const createUser = (values) => new exports.UserModel(values).save().then((user) => user.toObject());
exports.createUser = createUser;
const deleteUserByID = (id) => exports.UserModel.findByIdAndDelete({ _id: id });
exports.deleteUserByID = deleteUserByID;
const updateUserByID = (id, values) => exports.UserModel.findByIdAndUpdate(id, values);
exports.updateUserByID = updateUserByID;
