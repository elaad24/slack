import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  authentication: {
    password: { type: String, require: true, select: false },
    un_protected_password: { type: String, require: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("user", UserSchema);

// some function the will be used frequntly

export const getUsers = () => UserModel.find();
export const getUsersByEmail = (email: String) => UserModel.findOne({ email });
export const getUsersBySessionToke = (sessionToken: String) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const getUsersByID = (id: String) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());

export const deleteUserByID = (id: String) =>
  UserModel.findByIdAndDelete({ _id: id });
export const updateUserByID = (id: String, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
