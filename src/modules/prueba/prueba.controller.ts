import {Request, Response} from "express";
import {pruebaService} from "./prueba.service"

const messageModule = (api:string) => {
    console.log(`--> Modulo prueba | ${api}`)
}

export class pruebaController {
    private pruebaservice = new pruebaService();

    helloworld = async (req: Request, res: Response) => {
        messageModule('Helloworld');
        res.status(201).json(await this.pruebaservice.helloworld(req.body.numero));
    };
    
    api = async (req: Request, res: Response) => {
        messageModule('Api');
        const numero = parseInt(req.params.numero, 10);
        res.status(201).json(await this.pruebaservice.helloworld(numero));
    };   
}