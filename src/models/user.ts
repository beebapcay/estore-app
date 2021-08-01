import Product from './product';
import Order from './order';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  avatar: string;
  age: number;
  gender: string;
  favourites: Product[];
  orders: Order[];
}

export default User;
