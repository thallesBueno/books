import Book from '../entities/books';
import { NewBookRequest } from '../entities/requests';
import booksRepository from '../repositories/booksRepository';

const getAllBooks = async () : Promise<Book[]> => booksRepository.getAllBooks();

const getBook = (bookId: string) : Promise<Book | null> => booksRepository.getBook(bookId);

const deleteBook = (bookId: string) : Promise<Book | null> => booksRepository.deleteBook(bookId);

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => booksRepository.newBook(newBookRequest);

const BookService = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
};

export default BookService;
