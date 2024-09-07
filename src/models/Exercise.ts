import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IExercise {
  id: string;
  name: string;
  videoSampleUrl: String;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const exerciseSchema = new Schema<IExercise>({
    id: {type: String,requiered:true},
    name: { type: String, required: true },
    videoSampleUrl: String,
    userId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

// 3. Create a Model.
const Exercise = model<IExercise>('Exercise', exerciseSchema);