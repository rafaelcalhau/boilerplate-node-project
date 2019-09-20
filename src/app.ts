import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      dotenv.config()

      this.express = express()
      this.express.disable('x-powered-by')

      this.database()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect(process.env.MONGODB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
