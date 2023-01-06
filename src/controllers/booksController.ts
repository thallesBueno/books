import { Request, Response } from 'express';
import BookService from '../services/booksService';

const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(BookService.getAllBooks());
};

const getBook = (req: Request, res: Response) => res.status(200).send(BookService.getBook());

const BookController = {
  getAllBooks,
  getBook,
};

export default BookController;
