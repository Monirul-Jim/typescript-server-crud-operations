type Order = {
  productName: string;
  price: number;
  quantity: number;
};
type UserOrder = {
  userId: string;
  userName: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Order;
};
