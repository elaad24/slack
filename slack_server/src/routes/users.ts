import express , { Request, Response } from "express";
import { signIn } from "../controllers/users";
const router = express.Router();

const app = express();

router.get("/users", (req: Request, res: Response) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ];
  res.json(users);
});

router.post("/create", (req: Request, res: Response) => {
  signIn(req, res);
});

module.exports = router;
