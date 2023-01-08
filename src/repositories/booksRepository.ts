import Book from '../entities/books';
import { NewBookRequest, UpdateBookRequest } from '../entities/requests';
import BookModel from './models/bookModel';

const getAllBooks = async () : Promise<Book[]> => BookModel.find();

const getBook = async (bookId: string) : Promise<Book | null> => {
  const book = await BookModel.findById(bookId);
  return book as Book;
};

const deleteBook = async (
  bookId: string,
) : Promise<Book | null> => BookModel.findByIdAndDelete(bookId);

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => BookModel.create(newBookRequest);

const updateBook = async (
  bookId: string,
  updateBookRequest: UpdateBookRequest,
) : Promise<Book | null> => BookModel.findByIdAndUpdate<Book>(bookId, updateBookRequest, { returnDocument: 'after' });

const rentBook = async (
  bookId: string,
  userId: string,
) : Promise<Book | null> => BookModel.findByIdAndUpdate<Book>(bookId, { rentedBy: userId }, { returnDocument: 'after' });

const returnRentedBook = async (
  bookId: string,
) : Promise<Book | null> => BookModel.findByIdAndUpdate<Book>(bookId, { rentedBy: null }, { returnDocument: 'after' });

const booksRepository = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
  updateBook,
  rentBook,
  returnRentedBook,
};

export default booksRepository;
