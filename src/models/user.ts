import Product from './product';
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
}

export default User;
