import User from './user';
import Cart from './cart';

interface UserState {
  user: User;
  cart: Cart;
  error: string | undefined;
}

export default UserState;
