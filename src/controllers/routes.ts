import express from 'express';
import BookController from './booksController';

const router = express.Router();

router.get('/books', BookController.getAllBooks);
router.get('/book/:bookId', BookController.getBook);
router.post('/book', BookController.newBook);

export default router;
