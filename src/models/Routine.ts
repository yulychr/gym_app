import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IRutine {
  id: string;
  repetitions: Number;
  weigth: Number;
  type: String;
  exerciseId: string;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const rutineSchema = new Schema<IRutine>({
    id: {type: String,requiered:true},
    repetitions: Number,
    weigth: Number,
    type: { type: String, required: true },
    exerciseId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
});

// 3. Create a Model.
const Rutine = model<IRutine>('Rutine', rutineSchema);