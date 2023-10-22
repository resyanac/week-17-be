"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tax_route_1 = __importDefault(require("./tax.route"));
const user_route_1 = __importDefault(require("./user.route"));
const cors_1 = __importDefault(require("cors"));
const routes = express_1.default.Router();
const corsOptions = {
    origin: ['https://week17-resyanac-28999.web.app', 'http://localhost:5173'],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"]
};
routes.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to week 17'
    });
});
routes.use('/', (0, cors_1.default)(corsOptions), tax_route_1.default);
routes.use('/', (0, cors_1.default)(corsOptions), user_route_1.default);
exports.default = routes;
