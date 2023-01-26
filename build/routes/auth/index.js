"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../controllers/auth"));
const router = (0, express_1.Router)();
router.post('/signup', auth_1.default.signup);
router.post('/login', auth_1.default.login);
router.post('/logout', auth_1.default.logout);
router.post('/refresh', auth_1.default.refresh);
exports.default = router;
