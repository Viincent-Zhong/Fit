import { Schema, model } from 'mongoose';

// Travel interface
interface ITravelSchema {
    _id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    name: String,
    startDate: Date,
    endDate: Date,
    totalExpense: Number,
    budget: Number,
}

// Travel model
const travelSchema = new Schema<ITravelSchema>({
    _id: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalExpense: { type: Number, required: true },
    budget: { type: Number, required: true },
});

export const TravelModel = model<ITravelSchema>('Travel', travelSchema);