import { Router } from "express";
import { pruebaController} from "./prueba.controller";

const pruebacontroller2 = new pruebaController();
const router = Router();



router.post("/prueba", pruebacontroller2.helloworld);


export default router;

