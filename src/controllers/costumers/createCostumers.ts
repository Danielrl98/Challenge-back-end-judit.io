import CostumersModel from "../../models/costumers/costumersModel";

export const createCostumer = {

  async createCostumers(name:string, cpf:string) {

    const response:any = []
       
    try {
      await new CostumersModel({
        name: name,
        cpf: cpf,
        list: 0,
      })
        .save()
        .then(( e ) => {
            response.push(e)
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
