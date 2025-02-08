import {PruebaRepository} from './prueba.repository'

export class pruebaService {
  private newPruebaRepository = new PruebaRepository()

    helloworld  = async(numero:number) => {
      return await {numero}
    } 

    getItemById = async (id: string) => {
      return await this.newPruebaRepository.findById(id);
    }



}