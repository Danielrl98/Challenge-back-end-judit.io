import { create_costumer } from "../../controllers/costumers/createCostumers";
import { FastifyRequest, FastifyReply } from "fastify";

export const Create_costumersServices = {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { cpf } = request.body as { cpf: string };

      if (!cpf) {
        throw new Error("Cpf is incorret");
      }
      const response = await create_costumer.Create_costumers(cpf, "backlog");

      return reply.send(response);
    } catch (err) {
      throw new Error("unknown error");
    }
  },
};
