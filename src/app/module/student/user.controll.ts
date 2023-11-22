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
export const StudentController = {
  createUserInfo,
}
