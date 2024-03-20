import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { Create_costumersServices } from '../services/costumers/createCostumersServices'

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return Create_costumersServices.execute(request,reply);
  });
}
