import { Schema, model } from 'mongoose';

// Activity interface
interface IActivitySchema {
    _id: Schema.Types.ObjectId,
    dayId: Schema.Types.ObjectId,
    name: String,
    expense: Number,
}

// Activity model
const activitySchema = new Schema<IActivitySchema>({
    _id: { type: Schema.Types.ObjectId, required: true },
    dayId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    expense: { type: Number, required: true },
});

export const ActivityModel = model<IActivitySchema>('Activity', activitySchema);