import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../entities/user';
import usersRepository from '../repositories/usersRepository';

const signup = async (userRequest: User) : Promise<User> => {
  const passwordHash = await bcrypt.hash(userRequest.password, 10);

  const user = await usersRepository.createUser(
    { username: userRequest.username, password: passwordHash },
  );

  return user;
};

const login = async (userRequest: User) : Promise<string> => {
  const user = await usersRepository.findUserByUsername(userRequest.username);

  if (user) {
    const isPasswordRight = await bcrypt.compare(userRequest.password, user.password);

    if (isPasswordRight) {
      const token = await jwt.sign({ username: user.username }, 'SECRET');

      return token;
    }
  }

  throw new Error('User not found.');
};

const BookService = {
  signup,
  login,
};

export default BookService;
