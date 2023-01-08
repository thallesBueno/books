import { Request, Response } from 'express';
import bookService from '../services/booksService';

const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookService.getAllBooks();

  res.status(200).send(books);
};

const getBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const book = await bookService.getBook(bookId);

  if (book) {
    res.status(200).send(book);
  } else {
    res.status(404).send(book);
  }
};

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const book = await bookService.deleteBook(bookId);

  if (book) {
    res.status(200).send(book);
  } else {
    res.status(404).send(book);
  }
};

const newBook = async (req: Request, res: Response) => {
  const { title, author, description } = req.body;
  const book = await bookService.newBook({ title, author, description });

  res.status(201).send(book);
};

const BookController = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
};

export default BookController;
