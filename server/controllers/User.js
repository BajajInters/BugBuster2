import dotenv from "dotenv";
import UserModel from "../Model/User.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { log } from "console";

const secretkey = process.env.SECRET_KEY;

export const login = async (req, res) => {
  try {
    const { ent_uname, ent_pass } = req.body;
    console.log(ent_uname, ent_pass);
    const usr_ext = await UserModel.find({ username: ent_uname });
    console.log(usr_ext);
    if (!usr_ext) {
      return res.status(404).json({ message: "User does not exist" });
    }
    if (ent_pass !== usr_ext.password) {
      return res.status(409).json({ message: "Invalid credentials" });
    }
    jwt.sign({ usr_ext }, secretkey, { expiresIn: "1d" }, (err, token) => {
      if (err) {
        return res
          .status(404)
          .json({ message: "An error occured while signing the token" });
      } else {
        return res.status(200).json({ message: "Successfully signed in" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, username, password, usertype, mobile } =
      req.body;

    const usrname_ext = await UserModel.findOne({ username: username });
    console.log(usrname_ext);
    if (usrname_ext) {
      return res.status(404).json({ message: "Username already exists" });
    }

    const user = new UserModel({
      firstname,
      lastname,
      email,
      username,
      password,
      usertype,
      mobile,
    });

    const savedUsr = await user.save();

    return res
      .status(200)
      .json({ message: "User created successfully", user: savedUsr });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    if (users.length === 0) {
      return res.status(200).json({ message: "No users exist" });
    }
    res.status(200).json({ message: "Users List", users: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const updateStatus = await UserModel.findByIdAndUpdate(user_id, req.body);
    if (!updateStatus) {
      return res.status(404).json({ message: "Error occured while updating" });
    } else {
      return res
        .status(200)
        .json({ message: "Successfully updated the document" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const deleteStatus = await UserModel.findByIdAndDelete(user_id);
    if (!deleteStatus) {
      return res.status(404).json({ message: "Delete operation failed" });
    }
    return res.status(200).json({ message: "Successfully deleted user" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleUserData = async (req, res) => {
  try {
    const user_id = req.params.id;
    const userData = await UserModel.findById(user_id);
    if (userData) {
      return res.status(200).json({ user: userData });
    }
    return res.status(200).json({ message: "failed to fetch the user" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
