import express from "express";
import {
  login,
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  getSingleUserData,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", login);
router.get("/getAllUsers", verifyToken, getAllUsers);
router.get("/getSingleUserData/:id", verifyToken, getSingleUserData);
router.post("/createUser", createUser);
router.patch("/updateUser/:id", verifyToken, updateUser);
router.delete("/deleteUser/:id", verifyToken, deleteUser);

export default router;
