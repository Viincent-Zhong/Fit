import { Schema, model } from 'mongoose';

// Day interface
interface IDaySchema {
    _id: Schema.Types.ObjectId,
    travelId: Schema.Types.ObjectId,
    date: Date,
    description: String,
    expense: Number,
}

// Day model
const daySchema = new Schema<IDaySchema>({
    _id: { type: Schema.Types.ObjectId, required: true },
    travelId: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    expense: { type: Number, required: true },
});

export const DayModel = model<IDaySchema>('Day', daySchema);