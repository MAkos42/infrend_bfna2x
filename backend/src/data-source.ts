import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "admin",
    password: "admin",
    database: "triplog",
    synchronize: true,
    logging: false,
    entities: ['./**/entity/*.js'],
    migrations: [],
    subscribers: [],
})
