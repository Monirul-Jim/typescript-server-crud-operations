import { Request, Response } from 'express'
import { userCreate } from './user.create'

const createUserInfo = async (req: Request, res: Response) => {
  try {
    const { userInfoCreate: userData } = req.body
    const result = await userCreate.createUserInfoIntoDb(userData)
    res.status(200).json({
      success: true,
      message: 'user info Created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getAllUserInfoDb = async (req: Request, res: Response) => {
  try {
    const result = await userCreate.getAllUserInfo()
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getUserInoByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await userCreate.getUserInfoById(userId)
    res.status(200).json({
      success: true,
      message: 'get single user by userId successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    await userCreate.deleteUser(userId)
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable delete user',
    })
  }
}
// const deleteOneUserInfo = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params
//     const result = await userCreate.deleteUserFromDb(userId)
//     res.status(200).json({
//       success: true,
//       message: 'get single user by userId successfully!',
//       data: result,
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
export const updateUserInfoController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const updatedData = req.body
    const updatedUser = await userCreate.updateUserInfo(userId, updatedData)
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: updatedUser,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: ' unable to update data',
    })
  }
}
// const updateOneUserInfo = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params
//     const { updatedData } = req.body
//     const result = await userCreate.updateUserInfo(userId, updatedData)
//     res.status(200).json({
//       success: true,
//       message: 'update user info successfully!',
//       data: result,
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const orders = await userCreate.getOrdersByUserId(userId)
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'not found data',
    })
  }
}

const getTotalPriceFromOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const totalPrice = await userCreate.calculateTotalPrice(userId)
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: totalPrice,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'unable to calculate price !',
    })
  }
}
// const addProductToOrdersController = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params
//     const newProduct = req.body
//     const orders = await userCreate.addProductToOrders(userId, newProduct)
//     res.status(200).json({
//       success: true,
//       message: 'Product added to orders successfully!',
//       data: orders,
//     })
//   } catch (error) {
//     res.status(404).json({
//       success: false,
//       message: 'Fatal error: Unable to add your product',
//     })
//   }
// }
export const StudentController = {
  createUserInfo,
  getAllUserInfoDb,
  getUserInoByUserId,
  deleteUserController,
  // deleteOneUserInfo,
  updateUserInfoController,
  getOrdersByUserId,
  getTotalPriceFromOrder,
  // addProductToOrdersController,
}
