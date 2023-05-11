import express from "express";
import { reportBug ,getAllBugs ,getBugReportById} from "../controllers/Bug.js";

const router = express.Router();//creating a router from express

router.post("/bugreports",reportBug);
router.get("/bugreports",getAllBugs);
router.get("/bugreports/:id",getBugReportById);

export default router;