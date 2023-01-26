"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CredentialSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, minlength: 6, maxlength: 30 },
    password: { type: String, minlength: 6 },
});
exports.default = (0, mongoose_1.model)('Credentials', CredentialSchema);
