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
          throw new Error("952: client register error: " + error);
        });
    } catch (error) {
      throw new Error("953: client register error: " + error);
    } 
 
    return response
  },
};
