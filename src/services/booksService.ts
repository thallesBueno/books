import Book from '../entities/books';

const defaultBook : Book = { title: 'Luizito, El Pistoleio.', author: 'Farid Germano', description: 'A biografia oficial do pistoleio.' };

const getAllBooks = () : Book[] => [defaultBook];

const getBook = () : Book | undefined => defaultBook;

const BookService = {
  getAllBooks,
  getBook,
};

export default BookService;
