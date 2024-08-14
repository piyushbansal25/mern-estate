import  express  from "express";
import { signin } from "../controller/auth.controller.js";
import { test, updateUser, deleteUser, getUsersListings, getUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router  = express.Router();

router.get("/test", test);
router.post("/update/:id",verifyToken, updateUser)
router.delete("/delete/:id",verifyToken, deleteUser)
router.get("/listings/:id", verifyToken, getUsersListings)
router.get("/:id", verifyToken, getUser)
export default router;