import express from 'express';
import BookController from './booksController';

const router = express.Router();

router.get('/books', BookController.getAllBooks);
router.get('/book', BookController.getBook);

export default router;
