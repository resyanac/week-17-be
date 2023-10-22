import express from 'express'
import cors from 'cors';
import { register, login, logout } from '../controllers/user.controller'

// const corsOptions = {
//   origin: ['https://week17-resyanac-28999.web.app', 'http://localhost:5173'],
//   credentials: true, 
//   methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
// };

const userRoutes = express.Router()


userRoutes.options('/v1/register')
userRoutes.options('/v1/login' )
userRoutes.options('/v1/logout' )
userRoutes.post('/v1/register', register);
userRoutes.post('/v1/login',  login);
userRoutes.post('/v1/logout',  logout)

export default userRoutes