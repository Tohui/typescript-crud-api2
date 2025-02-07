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
    };

    api = async(req: Request, res:Response) => {
        
        try{
            const { numero } = req.params;
            const elnumero =parseInt(numero, 10);
            const respuesta =  await this.pruebaservice.helloworld(elnumero);
            res.status(201).json({ message: numero });
            console.log(messageModule('helloworld'))
        }catch{

        }
    };

    api2 = async (req: Request, res: Response) => {
        const { numero } = req.params;
        try {
            
            const num = parseInt(numero, 10); // Convertir a número
            if (isNaN(num)) {
                return res.status(400).json({ message: "El número debe ser válido" });
            }
            const respuesta = await this.pruebaservice.helloworld(num);
            res.status(200).json({ message: "Este es el número", numero: num });
        } catch (error) {
            res.status(500).json({ message: "Error en la petición" });
        }
    };
    
    
}