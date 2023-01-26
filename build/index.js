"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const app_config_1 = __importDefault(require("./config/app.config"));
const database_1 = __importDefault(require("./utils/database"));
const cors_middleware_1 = __importDefault(require("./middlewares/cors.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors_middleware_1.default);
(0, database_1.default)(app_config_1.default.db.MONGODB_URI);
app.get('/', (req, res) => {
    res.status(201).json({ message: 'hello' });
});
app.use('/api/auth', auth_1.default);
app.listen(app_config_1.default.app.PORT, () => {
    console.log(`\n===========App listening on port ${app_config_1.default.app.PORT}===========\n`);
});
exports.default = app;
