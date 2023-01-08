import Book from '../entities/books';
import { NewBookRequest } from '../entities/requests';
import BookModel from './models/bookModel';

const getAllBooks = async () : Promise<Book[]> => BookModel.find();

const getBook = async (bookId: string) : Promise<Book | null> => BookModel.findOne({ _id: bookId });

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => BookModel.create(newBookRequest);

const booksRepository = {
  getAllBooks,
  getBook,
  newBook,
};

export default booksRepository;
