import CostumersModel from "../../models/costumers/costumersModel";
import { createCostumer } from "./createCostumers";

export const verifyCostumers = {
  async select(name: string, cpf: string) {
    const response: any = [];

    try {
      const costumer = await CostumersModel.findOne({ cpf: cpf });

      if (costumer) {
        response.push(costumer);
      } else {
        const result = await createCostumer.createCostumers(name, cpf);
        response.push(...result);
      }
    } catch (error) {
      throw new Error("error consult data: " + error);
    }
    return response;
  },
};
