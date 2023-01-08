import Book from '../entities/books';
import { NewBookRequest, UpdateBookRequest } from '../entities/requests';
import booksRepository from '../repositories/booksRepository';

const getAllBooks = async () : Promise<Book[]> => booksRepository.getAllBooks();

const getBook = (bookId: string) : Promise<Book | null> => booksRepository.getBook(bookId);

const deleteBook = async (bookId: string) : Promise<Book | null> => {
  const book = await getBook(bookId);

  if (book) {
    if (book.rentedBy) {
      throw new Error('Book is currently rented and cannot be deleted.');
    } else {
      return booksRepository.deleteBook(bookId);
    }
  }
  throw new Error('Book does not exists.');
};

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => booksRepository.newBook(newBookRequest);

const updateBook = async (
  bookId: string,
  updateBookRequest: UpdateBookRequest,
) : Promise<Book | null> => {
  const book = await getBook(bookId);

  if (book) {
    if (book.rentedBy) {
      throw new Error('Book is currently rented and cannot be updated.');
    } else {
      return booksRepository.updateBook(bookId, updateBookRequest);
    }
  }

  throw new Error('Book does not exists.');
};

const rentBook = async (
  bookId: string,
  userId: string,
) : Promise<Book | null> => {
  const book = await getBook(bookId);

  if (book) {
    if (book.rentedBy) {
      throw new Error('Book is already rented.');
    } else {
      return booksRepository.rentBook(bookId, userId);
    }
  }

  throw new Error('Book does not exists.');
};

const returnRentedBook = async (
  bookId: string,
) : Promise<Book | null> => {
  const book = await booksRepository.getBook(bookId);

  if (!book) {
    throw new Error('Book does not exists.');
  }

  if (!book.rentedBy) {
    throw new Error('Book is not rented.');
  }

  return booksRepository.returnRentedBook(bookId);
};

const BookService = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
  updateBook,
  rentBook,
  returnRentedBook,
};

export default BookService;
