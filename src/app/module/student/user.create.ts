import { UserOrderSchema } from './user.interface'
import { UserModel } from './user.model'

const createUserInfoIntoDb = async (userOrderPlace: UserOrderSchema) => {
  const result = await UserModel.create(userOrderPlace)
  return result
}
const getAllUserInfo = async () => {
  const result = await UserModel.find().select('-password')
  return result
}
const getUserInfoById = async (id: string) => {
  const result = await UserModel.findOne({ userId: id })
  return result
}
const deleteUserFromDb = async (id: string) => {
  const result = await UserModel.updateOne({ userId: id }, { isDeleted: true })
  return result
}
const updateUserInfo = async (userId: string, updatedData: object) => {
  const result = await UserModel.findByIdAndUpdate(
    { userId: userId },
    { $set: updatedData },
  )
  return result
}
const getOrdersByUserId = async (userId: string) => {
  const user = await UserModel.findOne({ userId })
  if (user) {
    return user.orders
  } else {
    throw new Error('User not found')
  }
}
const calculateTotalPrice = async (userId: string) => {
  const user = await UserModel.findOne({ userId })
  if (user) {
    const totalPrice = user?.orders?.reduce(
      (total, order) => total + order.price * order.quantity,
      0,
    )
    return totalPrice
  } else {
    throw new Error('total price not found')
  }
}

export const userCreate = {
  createUserInfoIntoDb,
  getAllUserInfo,
  getUserInfoById,
  deleteUserFromDb,
  updateUserInfo,
  getOrdersByUserId,
  calculateTotalPrice,
}
