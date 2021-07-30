import User from './user';
import Cart from './cart';

interface UserState {
  userData: User;
  cart: Cart;
  error: string | undefined;
}

export default UserState;
