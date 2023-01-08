import express from 'express';
import BookController from './booksController';

const router = express.Router();

router.get('/books', BookController.getAllBooks);
router.get('/book/:bookId', BookController.getBook);
router.post('/book', BookController.newBook);
router.delete('/book/:bookId', BookController.deleteBook);
router.put('/book/:bookId', BookController.updateBook);

export default router;
