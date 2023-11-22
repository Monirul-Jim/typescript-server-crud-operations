import express from 'express'
import { StudentController } from './user.controll'
const router = express.Router()
router.post('/users', StudentController.createUserInfo)
export const userRoutes = router
