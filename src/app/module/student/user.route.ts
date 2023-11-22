import express from "express";
import { StudentController } from "./user.controll";
const router = express.Router();
router.post("/api/users", StudentController.createUserInfo);
export const userRoutes = router;
