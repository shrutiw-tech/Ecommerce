"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// 🔴 ADD THIS LOGGING MIDDLEWARE
app.use((req, res, next) => {
    console.log("REQ =>", req.method, req.url);
    next();
});
// Routes
app.use("/api/auth", auth_routes_1.default);
app.post("/test", (req, res) => {
    res.send("TEST OK");
});
exports.default = app;
