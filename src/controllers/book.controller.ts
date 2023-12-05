import { NextFunction, Request, Response } from "express";
import { Book } from "../entity/Book";
import { ILike } from "typeorm";
import HttpException from "../common/http-exception";

interface BookDTO {
  id?: number;
  title: string;
  author: string;
  content: string;
}
export interface PagingInterface {
  init: number;
  limit: number;
  num_page: number;
  total_items: number;
  total_pages: number;
}

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      author,
      content,
      title,
      page = "1",
      limit = "10",
    } = req.query as {
      author?: string;
      content?: string;
      title?: string;
      page?: string;
      limit?: string;
    };
    const filter: any = {
      where: {},
    };
    if (author) {
      filter.where.author = ILike(`%${author}%`);
    }
    if (content) {
      filter.where.content = ILike(`%${content}%`);
    }
    if (title) {
      filter.where.title = ILike(`%${title}%`);
    }
    const totalCount = await Book.count();

    const totalPages = Math.ceil(totalCount / parseInt(limit));
    const offset = (parseInt(page) - 1) * parseInt(limit);

    filter.skip = offset;
    filter.take = limit;

    const books = await Book.find(filter);

    const pagingInfo: PagingInterface = {
      init: offset + 1,
      limit: parseInt(limit),
      num_page: parseInt(page),
      total_items: totalCount,
      total_pages: totalPages,
    };

    return res.status(200).json({
      paging: pagingInfo,
      books,
    });
  } catch (error) {
    if (error instanceof Error) {
      return next(new HttpException(500, error.message));
    }
  }
};

export const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const book = await Book.findOneBy({ id: parseInt(id) });

    if (!book) return next(new HttpException(404, "Book not found"));

    return res.status(200).json(book);
  } catch (error) {
    if (error instanceof Error) {
      return next(new HttpException(500, error.message));
    }
  }
};

export const createBook = async (
  req: Request<{ body: BookDTO }>,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;

  if (!body.title || !body.author || !body.content) {
    return next(new HttpException(400, "Missing required fields"));
  }

  const book = new Book();
  Object.assign(book, body);

  await book.save();
  return res.status(200).json({ message: "Book created successfully", book });
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { body } = req;

  if (!Object.keys(body).length) {
    next(new HttpException(400, "No fields to update"));
  }

  try {
    const book = await Book.findOneBy({ id: parseInt(id) });
    if (!book) return next(new HttpException(404, "Book not found"));

    Object.assign(book, body);
    await book.save();

    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return next(new HttpException(500, error.message));
    }
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const book = await Book.findOneBy({ id: parseInt(id) });
  if (!book) return res.status(404).json({ message: "Not book found" });

  try {
    const result = await Book.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return next(new HttpException(404, "Book not found"));

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return next(new HttpException(500, error.message));
    }
  }
};
