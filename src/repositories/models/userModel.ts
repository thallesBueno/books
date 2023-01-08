import mongoose, { Schema } from 'mongoose';
import User from '../../entities/user';

const userSchema = new Schema<User>({
  username: {
    type: String, index: true, required: true, unique: true,
  },
  password: { type: String, required: true },
});

const userModel = mongoose.model<User>('User', userSchema);

export default userModel;
