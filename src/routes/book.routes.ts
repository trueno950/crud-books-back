import { Router } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";

const router = Router();

router.get("/books", getBooks);

router.get("/books/:id", getBook);

router.post("/books", createBook);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

export default router;