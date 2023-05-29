import { Request, Response, NextFunction } from "express";

interface ErrorWithCode extends Error {
  statusCode?: number;
}

export function error404(
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const { url, method } = req;
  const message = `HTTP Method '${method}' for ${url} route does not exist.`;
  res.status(404).json({ method, url, message, statusCode: 404 });
}

export function errorsMiddleware(
  error: ErrorWithCode,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const { url, method } = req;
  const statusCode = error.statusCode || 500;
  const message =
    error.message || "An unexpected error occured. Please try again.";
  res.status(statusCode).json({ method, url, message, statusCode });
}
