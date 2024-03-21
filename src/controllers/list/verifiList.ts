import listModel from "../../models/list/listModel";
import CostumersModel from "../../models/costumers/costumersModel";

export const verifyList = {
  async select(cpf: string) {
    const response: any = {};
    try {
      const costumers = await CostumersModel.findOne({ cpf: cpf });
      const listCostumer = await listModel.find();

      if (!listCostumer) {
        throw new Error("1008: error consult list data list");
      }
      if (!costumers) {
        throw new Error("1009: error consult list costumers");
      }
     
      if (listCostumer[0].id == costumers.list) {
            response.name = costumers.name
            response.cpf = costumers.cpf
            response.list = listCostumer[0].name
            response.date = costumers.createdAt
      }
    } catch (error) {
      throw new Error("1010: error consult list data list : " + error);
    }
    return response;
  },
};
