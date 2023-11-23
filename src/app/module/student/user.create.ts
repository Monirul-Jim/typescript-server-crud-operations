import { UserOrderSchema } from './user.interface'
import { UserModel } from './user.model'

const createUserInfoIntoDb = async (userOrderPlace: UserOrderSchema) => {
  const result = await UserModel.create(userOrderPlace)
  return result
}
const getAllUserInfo = async () => {
  const result = await UserModel.find()
  return result
}
const getUserInfoById = async (id: string) => {
  const result = await UserModel.findOne({ userId: id })
  return result
}
export const userCreate = {
  createUserInfoIntoDb,
  getAllUserInfo,
  getUserInfoById,
}
