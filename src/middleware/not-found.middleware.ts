import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message = "Resource not found";
  const statusCode = 404;

  response.status(statusCode).json({ status: "error", statusCode, message });
};
