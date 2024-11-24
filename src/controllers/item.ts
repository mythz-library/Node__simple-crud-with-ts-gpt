import { Request, Response } from 'express';
import { Item } from '../models/item';

const items: Item[] = [];

export const getItems = (req: Request, res: Response): void => {
  res.status(200).json(items);
};

export const createItem = (req: Request, res: Response): void => {
  const newItem: Item = { id: String(Date.now()), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};
