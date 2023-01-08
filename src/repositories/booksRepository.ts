import Book from '../entities/books';
import { NewBookRequest, UpdateBookRequest } from '../entities/requests';
import bookModel from './models/bookModel';

const getAllBooks = async () : Promise<Book[]> => bookModel.find();

const getBook = async (bookId: string) : Promise<Book | null> => {
  const book = await bookModel.findById(bookId);
  return book as Book;
};

const deleteBook = async (
  bookId: string,
) : Promise<Book | null> => bookModel.findByIdAndDelete(bookId);

const newBook = async (
  newBookRequest: NewBookRequest,
) : Promise<Book> => bookModel.create(newBookRequest);

const updateBook = async (
  bookId: string,
  updateBookRequest: UpdateBookRequest,
) : Promise<Book | null> => bookModel.findByIdAndUpdate<Book>(bookId, updateBookRequest, { returnDocument: 'after' });

const rentBook = async (
  bookId: string,
  userId: string,
) : Promise<Book | null> => bookModel.findByIdAndUpdate<Book>(bookId, { rentedBy: userId }, { returnDocument: 'after' });

const returnRentedBook = async (
  bookId: string,
) : Promise<Book | null> => bookModel.findByIdAndUpdate<Book>(bookId, { rentedBy: null }, { returnDocument: 'after' });

const searchBooks = async (searchTerm: string) : Promise<Book[]> => bookModel
  .find<Book>(
  {
    $or: [
      { title: { $regex: searchTerm, $options: 'i' } },
      { author: { $regex: searchTerm, $options: 'i' } },
      { description: { $regex: searchTerm, $options: 'i' } },
    ],
  },
);

const booksRepository = {
  getAllBooks,
  getBook,
  newBook,
  deleteBook,
  updateBook,
  rentBook,
  returnRentedBook,
  searchBooks,
};

export default booksRepository;
