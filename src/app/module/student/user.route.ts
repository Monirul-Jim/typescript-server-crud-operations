import express from 'express'
import { StudentController } from './user.controll'
const router = express.Router()
router.post('/users', StudentController.createUserInfo)
router.get('/users', StudentController.getAllUserInfoDb)
router.get('/users/:userId', StudentController.getUserInoByUserId)
router.delete('/users/:userId', StudentController.deleteUserController)
// router.delete('/users/:userId', StudentController.deleteOneUserInfo)
router.put('/users/:userId', StudentController.updateUserInfoController)
router.get('/users/:userId/orders', StudentController.getOrdersByUserId)
router.get(
  '/users/:userId/orders/total-price',
  StudentController.getTotalPriceFromOrder,
)
// router.put(
//   '/api/users/:userId/orders',
//   StudentController.addProductToOrdersController,
// )
export const userRoutes = router
