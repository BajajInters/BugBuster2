import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import BugRoutes from "./Routes/Bug.js";
import UserRoutes from "./Routes/User.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/bug", BugRoutes);
app.use("/user", UserRoutes);

mongoose.set("strictQuery", false);
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on a PORT : ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
