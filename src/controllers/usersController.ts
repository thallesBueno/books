import { Request, Response } from 'express';
import usersServices from '../services/usersServices';

const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await usersServices.signup({ username, password });

  res.status(201).send(user);
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await usersServices.login({ username, password });

  res.status(200).send({ token });
};

const userController = {
  signup,
  login,
};

export default userController;
