/* eslint-disable no-console */
import express from 'express'
import { connectDB, closeDB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandling'

const START_SERVER = () => {
  const app = express()
  app.use(express.json())
  app.use('/v1', APIs_V1)
  app.use(errorHandlingMiddleware)
  app.listen(env.SERVER_PORT, env.SERVER_HOST, () => console.log(`Server running at: http(s)://${env.SERVER_HOST}:${env.SERVER_PORT}`))
  exitHook(() => {
    closeDB()
  })
};

(async () => {
  try {
    // await connectDB()
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
