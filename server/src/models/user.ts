import { Schema, model } from 'mongoose';

const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
}

// User interface
interface IUserSchema {
  _id: Schema.Types.ObjectId,
  email: String,
  oauthId: String,
}

// User model
const  userSchema = new Schema<IUserSchema>({
    _id: { type: Schema.Types.ObjectId, required: true },
    email: { type: String, required: true, unique: true, validate: [validateEmail, 'Please fill a valid email address'] },
    oauthId: { type: String, required: true },
});

export const UserModel = model<IUserSchema>('User', userSchema);