import {createConnection} from "typeorm";
import {Categoria} from '../modules/cars/entity/Categoria'

const Connection =  createConnection({
    type: "postgres",
    host: "database_rentacars",
    port: 5432,
    username: "docker",
    password: "rentacars",
    database: "rentacars",
    entities: [Categoria],
});
