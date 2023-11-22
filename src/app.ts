import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { userRoutes } from './app/module/student/user.route'

app.use(express.json())
app.use(cors())
app.use('/api', userRoutes)
const getAController = (req: Request, res: Response) => {
  res.send('Hello World!')
}
app.get('/', getAController)
export default app
