import { Router } from "express";
import { pruebaController} from "./prueba.controller";

const Pruebacontroller2 = new pruebaController();
const router = Router(); 



router.post("/prueba", Pruebacontroller2.helloworld);
router.get("/pruebas/:numero", Pruebacontroller2.api)







export default router;

