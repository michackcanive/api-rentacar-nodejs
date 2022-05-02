/* import "reflect-metadata"
import { DataSource } from "typeorm/data-source/DataSource"
import { Categoria } from "../src/modules/cars/entity/Categoria"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "rentacars",
    database: "rentacars",
    entities: [Categoria],
    synchronize: true,
    logging: false,
    migrations: ["./src/database/migrations/*.ts"],
    cli:{
        migrationsDir:"./src/database/migrations"
    }
})

AppDataSource.initialize()
    .then(() => {
        console.log('rodando')
    })
    .catch((error) => console.log(error)) */