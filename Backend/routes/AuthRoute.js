import express from 'express';
import { Login, LogOut, Me, Register } from "../controllers/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.post('/register', Register);
router.post('/login', Login);
router.delete('/logout', LogOut);

export default router;