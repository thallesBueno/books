import mongoose, { Schema } from 'mongoose';
import Book from '../../entities/books';

const bookSchema = new Schema<Book>({
  title: { type: String, index: true, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const bookModel = mongoose.model<Book>('ModelName', bookSchema);

export default bookModel;
