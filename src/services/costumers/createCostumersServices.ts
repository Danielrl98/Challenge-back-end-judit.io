import { searchApi } from '../../api/judit/search'
import { verifyCostumers } from '../../controllers/costumers/verifyCostumers';
import { FastifyRequest, FastifyReply } from "fastify";
import { responseApi} from '../../api/judit/response'
import { verifyList } from '../../controllers/list/verifiList'

export const CreateCostumersServices = {
  async execute(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, cpf, cnj } = request.body as {
        name: string;
        cpf: string;
        cnj: string;
      };
      /*verifica se os campos existem */
      await this.verifyFields(name,cpf,cnj)
      /*faz a consula inicial na Api */
      const resultRequest:any = await searchApi.submit(request, reply,name,cpf,cnj);
      /*verifica se lead está cadastrado, se não cadastra */
      await verifyCostumers.select(name,cpf)
       /* encontra lista do usuario */
      const responseList = await verifyList.select(cpf)
       /*encontra os processos */
      const finalSubmit = await responseApi.submit(resultRequest[0].request_id)
      /* recupera processos da api*/
      const result = finalSubmit[0].page_data[0].response_data

      return reply.send({
        data: responseList,
        response_data: result
      });
    } catch (err) {
      throw new Error("1020: unknown errors services:" + err);
    }
  },
  verifyFields(name:string,cpf:string,cnj:string){
    if (!name) {
        throw new Error("1021: invalid field name");
      }
      if (!cpf) {
        throw new Error("1022: invalid field cpf");
      }
      if (!cnj) {
        throw new Error("1023: invalid field cnj");
      }
  }
};
