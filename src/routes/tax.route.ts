import express from 'express'

import { getAllTax, getOneTax, createTax, updateTax, deleteTax, updateAllTax } from '../controllers/tax.controller'

import  checkRole  from '../middlewares/checkRole'

const taskRoutes = express.Router()


taskRoutes.get('/v1/taxes', getAllTax)
taskRoutes.get('/v1/taxes/:id', getOneTax)
taskRoutes.post('/v1/taxes',    createTax)

taskRoutes.options('/v1/taxes/:id')
taskRoutes.options('/v1/taxes/:id')
taskRoutes.options('/v1/taxes')
taskRoutes.patch('/v1/taxes/:id', updateTax)
taskRoutes.put('/v1/taxes/:id',   updateAllTax)
taskRoutes.delete('/v1/taxes/:id', deleteTax)

export default taskRoutes