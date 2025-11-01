import { debug } from 'debug'
import express, { Express, Request, Response, NextFunction } from 'express'
import Cors from 'cors'
import { config } from 'dotenv'
import initializeDB from './database'

const log = debug('feedback-api:app')

config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
})

class App {
    public express: Express
    constructor () {
        this.express = express()
        this.express.use(Cors())
        this.database()
        this.middlewares()
        this.routes()
    }

    public async database () {
        await initializeDB()
    }

    public middlewares () {
        this.express.use(express.json())
        this.express.use((req: Request, res: Response, next: NextFunction) => {
          log(req.query, `request em: ${new Date().toISOString()}`)
          next()
        })
      }

    public routes () {
        //this.express.use('/user', UsersRouter)
        //this.express.use('/address', AddressRouter)
    }
}

export default new App().express
