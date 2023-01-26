"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database = (URI) => {
    return (() => {
        mongoose_1.default
            .connect(URI)
            .then((response) => {
            console.info(`\n===========Connected to "${response.connection.name}"===========\n`);
        })
            .catch((error) => {
            console.info('\n===========Failed to connect DB===========\n');
            console.error(error);
        });
    })();
};
exports.default = database;
