import mongoose from 'mongoose'

const WorkoutSchema = new mongoose.Schema({
  name: String,
  exercises: [mongoose.Schema.Types.ObjectId],
  createdAt: { type: Date, default: Date.now },
  createdBy: mongoose.Schema.Types.ObjectId,
  pictureUrl: String,
})

export default mongoose.models.Workout ||
  mongoose.model('Workout', WorkoutSchema)
