"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AppConfig {
    static PORT = process.env.PORT || 5000;
}
class DbConfig {
    static MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://venkatesh:venkatesh@amplify-test.1eigwf3.mongodb.net/?retryWrites=true&w=majority';
    static REDIS_URI = process.env.REDIS_URI || 'localhost';
    static REDIS_PORT = process.env.REDIS_PORT || '6379';
    static REDIS_USERNAME = process.env.REDIS_USERNAME || 'username';
    static REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'password';
    static REDIS_AT_PREFIX = process.env.REDIS_AT_PREFIX || 'accessToken#';
    static REDIS_RT_PREFIX = process.env.REDIS_RT_PREFIX || 'refreshToken#';
}
class AuthConfig {
    static ENCRYPTION_ROUNDS = process.env.ENCRYPTION_ROUNDS || '10';
    static JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '7de19a40ec106d591';
    static JWT_REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY || '9662c0d1390c99064534';
    static JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '86400000'; //1 Day
    static JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '2592000000'; // 30 Days
    static PASSWORD_PATTERN = process.env.PASSWORD_PATTERN || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
}
const Config = {
    app: AppConfig,
    db: DbConfig,
    auth: AuthConfig,
};
exports.default = Config;
