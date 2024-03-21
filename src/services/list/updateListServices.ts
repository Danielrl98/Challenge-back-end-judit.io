import { FastifyRequest, FastifyReply } from "fastify";
import { editListControllers } from '../../controllers/list/editList'
import { verify } from "crypto";

export const UpdateListServices = {

  async execute(request: FastifyRequest, reply: FastifyReply) {

    try {
        const { cpf, id } = request.body as {
          cpf: string;
          id: string
        };
        
        this.verifyFields(cpf,id)

        const result = await editListControllers.edit(cpf,id)

        reply.send(result)

    } catch(err){
        throw new Error("1032: error body fields: " + err);
    }
  },
  verifyFields(cpf:string,id:string){
    if(!cpf){
        throw new Error("1033: error cpf fields");
    }
    if(!id){
        throw new Error("1033: error id fields");
    }
    if(id == "0"){
        throw new Error("1034: list cannot return to backlog");
    }
  }
}
