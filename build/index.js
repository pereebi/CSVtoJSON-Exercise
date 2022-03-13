"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 8080;
app.get('/', function (req, res) {
    res.send("base route is working");
});
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
