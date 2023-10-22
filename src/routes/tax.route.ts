import express from 'express'

import { getAllTax, getOneTax, createTax, updateTax, deleteTax, updateAllTax } from '../controllers/tax.controller'



const taxRoutes = express.Router()


taxRoutes.get('/v1/taxes', getAllTax)
taxRoutes.get('/v1/taxes/:id', getOneTax)
taxRoutes.post('/v1/taxes',    createTax)

taxRoutes.options('/v1/taxes/:id')
taxRoutes.options('/v1/taxes/:id')
taxRoutes.options('/v1/taxes')
taxRoutes.patch('/v1/taxes/:id', updateTax)
taxRoutes.put('/v1/taxes/:id',   updateAllTax)
taxRoutes.delete('/v1/taxes/:id', deleteTax)

export default taxRoutes