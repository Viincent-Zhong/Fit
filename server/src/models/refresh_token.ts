import { Schema, model } from 'mongoose';

// RefreshToken interface
interface IRefreshTokenSchema {
    token: String,
    userId: Schema.Types.ObjectId
}

// RefreshToken model
const refreshTokenSchema = new Schema<IRefreshTokenSchema>({
    token: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true }
});

export const RefreshTokenModel = model<IRefreshTokenSchema>('RefreshToken', refreshTokenSchema);