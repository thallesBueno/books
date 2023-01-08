import Book from '../entities/books';
import { NewBookRequest } from '../entities/requests';
import BookModel from './models/bookModel';

const getAllBooks = async () : Promise<Book[]> => BookModel.find();

const getBook = async (bookId: string) : Promise<Book | null> => BookModel.findById(bookId);

const deleteBook = async (bookId: string) : Promise<Book | null> => {
  const deleteResult = await BookModel.findByIdAndDelete(bookId);

  return deleteResult;
};

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => BookModel.create(newBookRequest);

const booksRepository = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
};

export default booksRepository;
