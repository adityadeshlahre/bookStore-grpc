// Original file: proto/main.proto


export interface AddBookRequest {
  'id'?: (string);
  'author'?: (string);
  'bookname'?: (string);
  'price'?: (number | string);
}

export interface AddBookRequest__Output {
  'id': (string);
  'author': (string);
  'bookname': (string);
  'price': (number);
}
