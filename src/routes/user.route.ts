import express from 'express'

import { register, login, logout } from '../controllers/user.controller'


const userRoutes = express.Router()

userRoutes.options('/v1/')
userRoutes.options('/v1/register')
userRoutes.options('/v1/login')
userRoutes.options('/v1/logout')
userRoutes.post('/v1/register',  register);
userRoutes.post('/v1/login', login);
userRoutes.post('/v1/logout', logout)

export default userRoutes