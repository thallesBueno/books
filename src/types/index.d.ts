declare namespace Express {
  import User from '../entities/user';

  export interface Request {
    user: User;
  }
}
