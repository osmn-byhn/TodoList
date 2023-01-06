import express from "express";
import authControl from "../controller/authControl.js";
const router = express.Router()

router.get('/', authControl.login_get)
router.post('/', authControl.login_post)


export default router