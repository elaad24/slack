"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
const app = (0, express_1.default)();
router.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Bob Johnson" },
    ];
    res.json(users);
});
router.post("/create", (req, res) => {
    (0, users_1.signIn)(req, res);
});
module.exports = router;
