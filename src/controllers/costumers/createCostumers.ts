import CostumersModel from "../../models/costumers/costumersModel";
import { CostumersProps } from "../../models/costumers/costumersProps.interface";

export const create_costumer = {

  async Create_costumers(cpf:string,list:string) {

    const response:CostumersProps = {}
       
    try {
      await new CostumersModel({
        cpf: cpf,
        list: list,
      })
        .save()
        .then(( e ) => {
            response.cpf = e.cpf
            response.list= e.list
            response.id = e._id 

        })
        .catch((error) => {
          throw new Error("Erro ao cadastrar cliente: " + error);
        });
    } catch (error) {
      throw new Error("Erro ao cadastrar cliente: " + error);
    } 
    return response
  },
};
