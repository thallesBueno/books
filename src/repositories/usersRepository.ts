import User from '../entities/user';
import userModel from './models/userModel';

const createUser = async (user: User) : Promise<User> => userModel.create(user);

const findUserByUsername = async (
  username: string,
) : Promise<User | null> => userModel.findOne({ username });

const findUserById = async (
  userId: string,
) : Promise<User | null> => userModel.findById(userId);

const usersRepository = {
  createUser,
  findUserByUsername,
  findUserById,
};

export default usersRepository;
