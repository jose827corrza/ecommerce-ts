"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var PORT = 3003;
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.send('hola!');
});
app.listen(PORT, function () {
    console.log("Running on port: ".concat(PORT));
});
