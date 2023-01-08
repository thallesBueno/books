import mongoose, { Schema } from 'mongoose';
import Book from '../../entities/books';

const bookSchema = new Schema<Book>({
  title: { type: String, index: true, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  rentedBy: { type: Schema.Types.ObjectId, default: null },
  createdAt: { type: Date, default: Date.now },
});

const bookModel = mongoose.model<Book>('Book', bookSchema);

export default bookModel;
