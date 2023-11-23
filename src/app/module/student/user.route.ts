import express from 'express'
import { StudentController } from './user.controll'
const router = express.Router()
router.post('/users', StudentController.createUserInfo)
router.get('/users', StudentController.getAllUserInfoDb)
router.get('/users/:userId', StudentController.getUserInoByUserId)
export const userRoutes = router
