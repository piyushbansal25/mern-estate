import express from  'express';
import { google, signin, signup, signOut } from '../controller/auth.controller.js';



const router =   express.Router();
router.post("/signup", signup);
router.post("/sign-in", signin);
router.post('/google', google);
router.get('/signout', signOut);

export  default router;

