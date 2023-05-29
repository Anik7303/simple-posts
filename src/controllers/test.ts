import { Request, Response } from "express";

export function getMethod(req: Request, res: Response): void {
  const { method, url } = req;
  const message = "GET method for / route successfully tested.";
  res.status(200).json({ method, url, message });
}

export function postMethod(req: Request, res: Response): void {
  const { method, url, body } = req;
  const message = "POST method for / route successfully tested..";
  res.status(200).json({ method, url, message, data: body });
}
