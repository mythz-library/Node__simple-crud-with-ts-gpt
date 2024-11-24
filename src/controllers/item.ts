import { Request, Response } from 'express';
import { Item } from '../models/item';

const items: Item[] = [];

export const getItems = (req: Request, res: Response): void => {
  res.status(200).json(items);
};

export const getItemById = (req: Request, res: Response): void => {
  const item = items.find((item) => item.id === req.params.id);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
    return;
  }
  res.status(200).json(item);
};

export const createItem = (req: Request, res: Response): void => {
  const newItem: Item = { id: String(Date.now()), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const updateItem = (req: Request, res: Response): void => {
  const index = items.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
    return;
  }
  items[index] = { ...items[index], ...req.body };
  res.status(200).json(items[index]);
};

export const deleteItem = (req: Request, res: Response): void => {
  const index = items.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
    return;
  }
  items.splice(index, 1);
  res.status(204).send('Deletion Successful');
};
