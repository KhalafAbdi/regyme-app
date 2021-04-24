import mongoose, { Schema, Document } from 'mongoose'

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  hash: String,
  salt: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
