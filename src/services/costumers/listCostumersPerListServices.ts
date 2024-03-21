import { AllCostumersPerList } from "../../controllers/costumers/allCostumersPerList"
import { FastifyRequest, FastifyReply } from "fastify";

export const listCostumersPerListServices = {
    async execute(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.body as {id:string}
        this.verifyFields(id)

        const result = await AllCostumersPerList.select(id)

        reply.send(result)
    },
    verifyFields(id:string){
        if(!id){
            throw new Error("1050: id nots exists");
        }
    }
}