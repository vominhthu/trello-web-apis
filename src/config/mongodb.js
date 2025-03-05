import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

const { MONGODB_URI, DATABASE_NAME } = env

let dbInstance = null

const dbClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const connectDB = async () => {
  await dbClientInstance.connect()
  dbInstance = dbClientInstance.db(DATABASE_NAME)
}

export const getDB = () => {
  if (!dbInstance) throw new Error('Must to connect to database first!')
  return dbInstance
}

export const closeDB = async () => {
  await dbInstance.close()
}