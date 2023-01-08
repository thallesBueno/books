import Book from '../entities/books';
import { NewBookRequest, UpdateBookRequest } from '../entities/requests';
import booksRepository from '../repositories/booksRepository';

const getAllBooks = async () : Promise<Book[]> => booksRepository.getAllBooks();

const getBook = (bookId: string) : Promise<Book | null> => booksRepository.getBook(bookId);

const deleteBook = (bookId: string) : Promise<Book | null> => booksRepository.deleteBook(bookId);

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => booksRepository.newBook(newBookRequest);

const updateBook = async (
  bookId: string,
  updateBookRequest: UpdateBookRequest,
) : Promise<Book | null> => booksRepository.updateBook(bookId, updateBookRequest);

const rentBook = async (
  bookId: string,
  userId: string,
) : Promise<Book | null> => booksRepository.rentBook(bookId, userId);

const BookService = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
  updateBook,
  rentBook,
};

export default BookService;
