"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(req, res, next) {
    const token = req.headers.authorization;
    if (!token)
        return res.status(401).send('Acces denied');
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        // req.user = verified;
        next();
    }
    catch (err) {
        res.status(403).send('Invalid token');
    }
}
exports.default = default_1;
