"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tax_controller_1 = require("../controllers/tax.controller");
const taxRoutes = express_1.default.Router();
taxRoutes.get('/v1/taxes', tax_controller_1.getAllTax);
taxRoutes.get('/v1/taxes/:id', tax_controller_1.getOneTax);
taxRoutes.post('/v1/taxes', tax_controller_1.createTax);
taxRoutes.options('/v1/taxes/:id');
taxRoutes.options('/v1/taxes/:id');
taxRoutes.options('/v1/taxes');
taxRoutes.patch('/v1/taxes/:id', tax_controller_1.updateTax);
taxRoutes.put('/v1/taxes/:id', tax_controller_1.updateAllTax);
taxRoutes.delete('/v1/taxes/:id', tax_controller_1.deleteTax);
exports.default = taxRoutes;
