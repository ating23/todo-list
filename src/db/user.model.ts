import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  username: String,
  email: String
});

interface IUser extends mongoose.Document {
    first: String,
    last: String,
    username: String,
    email: String
}

export const User = mongoose.model<IUser>('User', userSchema);