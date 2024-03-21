import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { searchApi } from "../api/judit/search";
import { createList } from '../controllers/list/createList'

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post("/", { preHandler: createList.create },async (request: FastifyRequest, reply: FastifyReply) => {
      return searchApi.submit(request, reply)
  });
}
