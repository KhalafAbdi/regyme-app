import mongoose from 'mongoose'

async function dbConnect() {
  const connectionString: string = process.env.MONGODB_URI || ''

  if (mongoose.connection.readyState >= 1) {
    return
  }

  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
}

export default dbConnect
