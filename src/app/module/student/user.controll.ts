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
export const StudentController = {
  createUserInfo,
  getAllUserInfoDb,
  getUserInoByUserId,
}
