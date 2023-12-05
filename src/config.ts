export const PORT = process.env.PORT ?? 5000;

export const databaseConfig = {
  connection: {
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "1433", 10),
    username: process.env.DB_USERNAME ?? "sa",
    password: process.env.DB_PASSWORD ?? "1234",
    database: process.env.DB_DATABASE ?? "main_library",
  },
  synchronize: process.env.DB_SYNCHRONIZE === "true" || true,
  logging: process.env.DB_LOGGING === "true" || false,
};
