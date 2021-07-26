import User from './user';

interface UserState {
  user: User;
  error: string | undefined;
}

export default UserState;
