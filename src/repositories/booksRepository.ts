import Book from '../entities/books';
import { NewBookRequest, UpdateBookRequest } from '../entities/requests';
import BookModel from './models/bookModel';

const getAllBooks = async () : Promise<Book[]> => BookModel.find();

const getBook = async (bookId: string) : Promise<Book | null> => BookModel.findById(bookId);

const deleteBook = async (
  bookId: string,
) : Promise<Book | null> => BookModel.findByIdAndDelete(bookId);

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => BookModel.create(newBookRequest);

const updateBook = async (
  bookId: string,
  updateBookRequest: UpdateBookRequest,
) : Promise<Book | null> => BookModel.findByIdAndUpdate(bookId, updateBookRequest, { returnDocument: 'after' });

const booksRepository = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
  updateBook,
};

export default booksRepository;
