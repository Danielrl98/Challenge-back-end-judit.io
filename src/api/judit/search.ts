import { FastifyRequest, FastifyReply } from "fastify";

require("dotenv").config();

export const searchApi = {
  async submit(request: FastifyRequest, reply: FastifyReply,name:String,cpf:String,cnj:String) {

    const response: any = []

    try {
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

      /* recupera o request_id para capturar os processos*/
      const resultRequest = await this.send(baseurl, config);
      /*envia os processos para o usuário */

      if(resultRequest[0].error){
          throw new Error("950:not found cnj")
      }
      if(!resultRequest[0].request_id){
        throw new Error("951: request_id not exists")
      }

      response.push(...resultRequest)
     
    } catch (error: any) {
      throw new Error(error);
    }

    return response;
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
  }
};
