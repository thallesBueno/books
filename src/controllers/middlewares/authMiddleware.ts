import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../entities/user';
import usersServices from '../../services/usersServices';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      if (token) {
        const payload = (await jwt.verify(token, 'SECRET')) as User;
        if (payload) {
          const user = await usersServices.getUserByUsername(payload.username);
          req.user = user;
          next();
        } else {
          res.status(400).json({ error: 'Token is not valid.' });
        }
      } else {
        res.status(400).json({ error: 'Malformed auth header.' });
      }
    } else {
      res.status(400).json({ error: 'No authorization header.' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default authMiddleware;
