import express from 'express';
import dotenv from "dotenv"
import pruebaRouter from "./modules/prueba/prueba.module"


//================================================
dotenv.config()
const app = express()
app.use(express.json())

//================================================

app.use("/pruebaroot",pruebaRouter)

export default app;