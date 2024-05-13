// Original file: proto/main.proto


export interface Book {
  'id'?: (string);
  'author'?: (string);
  'bookname'?: (string);
  'price'?: (number | string);
}

export interface Book__Output {
  'id': (string);
  'author': (string);
  'bookname': (string);
  'price': (number);
}
