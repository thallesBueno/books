import express from 'express';
import bookController from './booksController';
import userController from './usersController';

const router = express.Router();

router.get('/books', bookController.getAllBooks);
router.get('/book/:bookId', bookController.getBook);
router.post('/book', bookController.newBook);
router.delete('/book/:bookId', bookController.deleteBook);
router.put('/book/:bookId', bookController.updateBook);

router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);

export default router;
