import listModel from "../../models/list/listModel";
import CostumersModel from "../../models/costumers/costumersModel";

export const editListControllers = {

    async edit(cpf:string, id:string){

        const response:any = {}

        const filter = {
            cpf: cpf
        }
        const update = {
           list:id
        }
        let costumer = await CostumersModel.findOneAndUpdate(filter, update);

        if(!costumer){
            throw new Error('1030: error consult list costumer list')
        }

        const listCostumer = await listModel.findOne({id: id});

        if(!listCostumer){
            throw new Error('1036: list not exists')
        }
      
        response.name = costumer.name
        response.cpf = costumer.cpf
        response.list = listCostumer.name
        response.date = costumer.updatedAt
        
        return {
            success: response
        }

    }
}