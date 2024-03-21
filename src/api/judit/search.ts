import { FastifyRequest, FastifyReply } from "fastify";
import { selectCostumers } from "../../controllers/costumers/verifyCostumers";
import { responseApi } from './response'

require("dotenv").config();

export const searchApi = {
  async submit(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, cpf, cnj } = request.body as {
        name: string;
        cpf: string;
        cnj: string;
      };
      /*verifica se os campos existem */
      this.verifyFields(name,cpf,cnj)
   
      const baseurl = "https://requests.prod.judit.io/requests";
      const headers = {
        "Content-Type": "application/json",
        "api-key": process.env.API_KEY,
      };
      const body = JSON.stringify({
        search: {
          search_type: "lawsuit_cnj",
          search_key: cnj,
        },
      });
      const config = {
        method: "POST",
        headers: headers,
        body: body,
      };

      /*verifica se lead está cadastrado, senão cadastra */
      const resultCostumers = await selectCostumers.select(name,cpf)

      /* recupera o request_id para capturar os processos*/
      const resultRequest = await this.send(baseurl, config);
      /*envia os processos para o usuário */

      if(resultRequest[0].error){
          throw new Error("not found cnj")
      }
      if(!resultRequest[0].request_id){
        throw new Error("request_id not exists")
      }
      /*encontra os processos */
      const finalSubmit = await responseApi.submit(resultRequest[0].request_id)
      
      const result = finalSubmit[0].page_data[0].response_data
      reply.send(result);

    } catch (error: any) {
      throw new Error(error);
    }
  },
  async send(baseurl: string, config: object) {
    const response: any = [];

    try {
      await fetch(baseurl, config).then(async (e) => {
        const result = await e.json();
        response.push(result);
      });
    } catch (error) {
      throw new Error("unknown error: " + error);
    }
    return response;
  },
  verifyFields(name:string,cpf:string,cnj:string){
    if (!name) {
        throw new Error("invalid field name");
      }
      if (!cpf) {
        throw new Error("invalid field cpf");
      }
      if (!cnj) {
        throw new Error("invalid field cnj");
      }
  }
};
