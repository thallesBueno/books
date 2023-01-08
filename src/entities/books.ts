interface Book {
  title: string
  author: string
  description: string
  rentedBy: string | null
  createdAt: Date
}

export default Book;
