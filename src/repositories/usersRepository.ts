import User from '../entities/user';
import userModel from './models/userModel';

const createUser = async (user: User) : Promise<User> => userModel.create(user);

const findUserByUsername = async (
  username: string,
) : Promise<User | null> => userModel.findOne({ username });

const usersRepository = {
  createUser,
  findUserByUsername,
};

export default usersRepository;
