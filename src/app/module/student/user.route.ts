import express from "express";
import { StudentController } from "./user.controll";
const router = express.Router();
router.post("/api/users", StudentController.createUserInfo);
export const userRoutes = router;

// import express from 'express'
// import { StudentController } from './student.controller'
// const router = express.Router()
// router.post('/create-student', StudentController.createStudent)
// export const StudentRoutes = router
