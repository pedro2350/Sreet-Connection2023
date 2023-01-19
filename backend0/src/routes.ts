import {Router} from 'express';
import { UserController } from './controller/UserController';
import { AuthController } from './controller/AuthController';
import { AuthMiddlwares } from './middlewares/auth';


const usercontroller = new UserController();
const authController = new AuthController();

export const router = Router();

router.post("/create", usercontroller.store);
router.get("/users", AuthMiddlwares, usercontroller.index);
router.post("/auth", authController.authenticate);

