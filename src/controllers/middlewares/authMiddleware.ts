import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      if (token) {
        const payload = await jwt.verify(token, 'SECRET');
        if (payload) {
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
