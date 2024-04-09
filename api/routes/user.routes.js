import  express  from "express";
import { signin } from "../controller/auth.controller.js";
import { test, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router  = express.Router();

router.get("/test", test);
router.post("/update/:id",verifyToken, updateUser)

export default router;