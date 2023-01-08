interface NewBookRequest {
  title: string
  author: string
  description: string
}

interface UpdateBookRequest {
  title: string
  author: string
  description: string
}

export {
  NewBookRequest,
  UpdateBookRequest,
};
