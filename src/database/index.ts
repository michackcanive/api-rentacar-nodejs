import {createConnection} from "typeorm";
import {Categoria} from '../modules/cars/entity/Categoria'
import { Specification } from "../modules/cars/entity/Specification";

const Connection =  createConnection({
    type: "postgres",
    host: "database_rentacars",
    port: 5432,
    username: "docker",
    password: "rentacars",
    database: "rentacars",
    entities: [Categoria, Specification],
});
