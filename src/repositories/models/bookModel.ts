import mongoose, { Schema } from 'mongoose';
import Book from '../../entities/books';

const bookSchema = new Schema<Book>({
  title: { type: String, index: true },
  author: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const bookModel = mongoose.model<Book>('ModelName', bookSchema);

export default bookModel;
