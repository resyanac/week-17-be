"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
// const corsOptions = {
//   origin: ['https://week17-resyanac-28999.web.app', 'http://localhost:5173'],
//   credentials: true, 
//   methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
// };
const userRoutes = express_1.default.Router();
userRoutes.options('/v1/register');
userRoutes.options('/v1/login');
userRoutes.options('/v1/logout');
userRoutes.post('/v1/register', user_controller_1.register);
userRoutes.post('/v1/login', user_controller_1.login);
userRoutes.post('/v1/logout', user_controller_1.logout);
exports.default = userRoutes;
