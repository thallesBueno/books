import express from 'express';
import bookController from './booksController';
import authMiddleware from './middlewares/authMiddleware';
import userController from './usersController';

const router = express.Router();

router.get('/book/:bookId', authMiddleware, bookController.getBook);
router.get('/books', authMiddleware, bookController.getAllBooks);
router.post('/books/search', authMiddleware, bookController.searchBooks);
router.post('/book', authMiddleware, bookController.newBook);
router.delete('/book/:bookId', authMiddleware, bookController.deleteBook);
router.put('/book/:bookId', authMiddleware, bookController.updateBook);

router.post('/rent/book/:bookId', authMiddleware, bookController.rentBook);
router.post('/rent/return/book/:bookId', authMiddleware, bookController.returnRentedBook);

router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);

export default router;
