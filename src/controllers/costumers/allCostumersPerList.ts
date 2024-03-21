import listModel from "../../models/list/listModel";
import CostumersModel from "../../models/costumers/costumersModel";

export const AllCostumersPerList = {
    
    async select(id:string){

        const response: any = []

        const costumers = await CostumersModel.find({
            list: id
        })

        if(!costumers || costumers.length == 0){
            throw new Error("1040: list costumers not exists");
        }

        const list = await listModel.findOne({
            id: id
        })

        if(!list){
            throw new Error("1041: list not exists");
        }

        costumers.forEach((element,i) => {

            response.push({
                name: element.name,
                cpf: element.cpf,
                date: element.createdAt,
                list: list.name
            })
        })

        return response
    }
}