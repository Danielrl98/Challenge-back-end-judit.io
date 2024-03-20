import 'dotenv'
import fastify from "fastify"
import cors from "@fastify/cors"
import { routes } from "./routes/routes"
import './db/config'

const app = fastify({ logger: true })

console.log(process.env.DATABASE_URL)

const start = async() => {

    await app.register(cors)
    await app.register(routes)
  
    try {
        await app.listen({port: 3333})
    } catch (err) {
       process.exit(1)
    }
}
start()