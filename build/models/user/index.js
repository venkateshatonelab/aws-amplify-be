"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, minlength: 6, maxlength: 30 },
    password: { type: String, minlength: 6 },
    fullName: { type: String, required: false, minlength: 3, maxlength: 30 },
    email: { type: String, required: false, maxlength: 50 },
    description: { type: String, required: false },
    institution: { type: String, required: false },
    gender: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
});
exports.default = (0, mongoose_1.model)('User', UserSchema);
