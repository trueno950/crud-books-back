import { DataSource } from "typeorm";
import { Book } from "./entity/Book";
import { databaseConfig } from "./config";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: databaseConfig.connection.host,
  port: databaseConfig.connection.port,
  username: databaseConfig.connection.username,
  password: databaseConfig.connection.password,
  database: databaseConfig.connection.database,
  synchronize: databaseConfig.synchronize,
  logging: databaseConfig.logging,
  entities: [Book],
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
});
