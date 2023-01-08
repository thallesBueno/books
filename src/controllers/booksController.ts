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
    res.status(404).send("Book doesn't exist");
  }
};

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  try {
    const book = await bookService.deleteBook(bookId);
    res.status(200).send(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    } else {
      res.status(400).send('Unknow error.');
    }
  }
};

const newBook = async (req: Request, res: Response) => {
  const { title, author, description } = req.body;
  const book = await bookService.newBook({ title, author, description });

  res.status(201).send(book);
};

const updateBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const { title, author, description } = req.body;

  try {
    const book = await bookService.updateBook(
      bookId,
      { title, author, description },
    );
    res.status(200).send(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    } else {
      res.status(400).send('Unknow error.');
    }
  }
};

const rentBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const userId = req.user;

  try {
    const book = await bookService.rentBook(bookId, userId.id);
    res.status(200).send(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    } else {
      res.status(400).send('Unknow error.');
    }
  }
};

const returnRentedBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  try {
    const book = await bookService.returnRentedBook(bookId);
    res.status(200).send(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    } else {
      res.status(400).send('Unknow error.');
    }
  }
};

const searchBooks = async (req: Request, res: Response) => {
  const { searchTerm } = req.body;

  const books = await bookService.searchBooks(searchTerm);

  res.status(200).send(books);
};

const bookController = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
  updateBook,
  rentBook,
  returnRentedBook,
  searchBooks,
};

export default bookController;
