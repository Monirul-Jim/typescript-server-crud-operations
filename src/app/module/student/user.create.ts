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
// const deleteUserFromDb = async (id: string) => {
//   const result = await UserModel.updateOne({ userId: id }, { isDeleted: true })
//   return result
// }
const deleteUser = async (userId: string) => {
  const user = await UserModel.findOne({ userId })
  return user
}
const updateUserInfo = async (userId: string, updatedData: any) => {
  try {
    const user = await UserModel.findOne({ userId })
    if (!user) {
      throw new Error('User not found')
    }
    user.userName = updatedData.userName || user.userName
    user.fullName.firstName =
      updatedData.fullName.firstName || user.fullName.firstName
    user.fullName.lastName =
      updatedData.fullName.lastName || user.fullName.lastName
    user.age = updatedData.age || user.age
    user.email = updatedData.email || user.email
    user.isActive =
      updatedData.isActive !== undefined ? updatedData.isActive : user.isActive
    user.hobbies = updatedData.hobbies || user.hobbies
    user.address.street = updatedData.address?.street || user.address.street
    user.address.city = updatedData.address?.city || user.address.city
    user.address.country = updatedData.address?.country || user.address.country
    await user.save()
    const updatedUser = user.toObject()
    return updatedUser
  } catch (error) {
    throw new Error('An error occurred while updating the user')
  }
}
// const updateUserInfo = async (userId: string, updatedData: object) => {
//   const result = await UserModel.findByIdAndUpdate(
//     { userId: userId },
//     { $set: updatedData },
//   )
//   return result
// }
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

// const addProductToOrders = async (userId: string, newProduct: any) => {
//   try {
//     const user = await UserModel.findOne({ userId })
//     if (!user) {
//       throw new Error('User not found')
//     }
//     if (!user.orders) {
//       user.orders = []
//     }
//     user.orders.push(newProduct)
//     await user.save()
//     return user.orders
//   } catch (error) {
//     throw new Error('An error occurred while adding the product to orders')
//   }
// }
export const userCreate = {
  createUserInfoIntoDb,
  getAllUserInfo,
  getUserInfoById,
  deleteUser,
  // deleteUserFromDb,
  updateUserInfo,
  getOrdersByUserId,
  calculateTotalPrice,
  // addProductToOrders,
}
