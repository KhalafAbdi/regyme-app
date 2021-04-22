import mongoose from 'mongoose'

const ExerciseSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: mongoose.Schema.Types.ObjectId,
  sets: [Number],
})

export default mongoose.models.Exercise ||
  mongoose.model('Exercise', ExerciseSchema)
