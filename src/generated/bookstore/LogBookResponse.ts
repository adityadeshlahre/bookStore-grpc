// Original file: proto/main.proto

import type { Book as _bookstore_Book, Book__Output as _bookstore_Book__Output } from '../bookstore/Book';

export interface LogBookResponse {
  'books'?: (_bookstore_Book)[];
}

export interface LogBookResponse__Output {
  'books': (_bookstore_Book__Output)[];
}
