import express from "express";
import morgan from "morgan";
import cors from "cors";

import bookRoutes from "./routes/book.routes";
import { errorHandler, notFoundHandler } from "./middleware";


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", bookRoutes);

app.use(errorHandler);
app.use(notFoundHandler);
export default app;