import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { createList } from '../controllers/list/createList'
import { CreateCostumersServices } from "../services/costumers/createCostumersServices";
import { UpdateListServices } from "../services/list/updateListServices";
import { listCostumersPerListServices } from "../services/costumers/listCostumersPerListServices";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
 
  /*encontra os processos e cadastra o led */
  fastify.post("/request", { preHandler: createList.create }, async (request: FastifyRequest, reply: FastifyReply) => {
      return CreateCostumersServices.execute(request, reply)
  });
  /*altera lista do lead */
  fastify.post("/costumers/list/edit", { preHandler: createList.create }, async (request: FastifyRequest, reply: FastifyReply) => {
    return UpdateListServices.execute(request, reply)
  });
  /* recupera todos os leads por lista*/
  fastify.post("/costumers/list", { preHandler: createList.create }, async (request: FastifyRequest, reply: FastifyReply) => {
    return listCostumersPerListServices.execute(request, reply)
  });

}
