import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1710172596542 } from './migrations/1710172596542-CreateUsersTable';
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "typeorm_project",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1710172596542],
    subscribers: [],
})
