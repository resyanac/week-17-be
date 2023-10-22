import express from 'express'
import { Request, Response } from 'express'

import taxRoutes from './tax.route'
import userRoutes from './user.route'
import cors from 'cors';


const routes = express.Router()
const corsOptions = {
  origin: ['https://week17-resyanac-28999.web.app', 'http://localhost:5173'],
  credentials: true, 
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
};

routes.get('/', (req: Request, res : Response) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to week 17'
    })
})

routes.use('/',  cors(corsOptions), taxRoutes)
routes.use('/', cors(corsOptions), userRoutes)

export default routes;