import {Request, Response} from "express";
import {pruebaService} from "./prueba.service"

const messageModule = (api:string) => {
    return `--> Modulo prueba | ${api}`
}

export class pruebaController {
    private pruebaservice = new pruebaService();

    helloworld = async(req: Request, res:Response) => {
        try{
            const {numero} = req.body
            const respuesta =  await this.pruebaservice.helloworld(numero);
            res.status(201).json({ message: numero });
            console.log(messageModule('helloworld'))
        }catch{

        }
    }
}