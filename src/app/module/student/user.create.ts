import { UserOrderSchema } from "./user.interface";
import { UserModel } from "./user.model";

const createUserInfoIntoDb = async (userOrderPlace: UserOrderSchema) => {
  const result = await UserModel.create(userOrderPlace);
  return result;
};
export const userCreate = {
  createUserInfoIntoDb,
};
