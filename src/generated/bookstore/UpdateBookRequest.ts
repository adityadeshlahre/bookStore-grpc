// Original file: proto/main.proto


export interface UpdateBookRequest {
  'id'?: (string);
  'author'?: (string);
  'bookname'?: (string);
  'price'?: (number | string);
}

export interface UpdateBookRequest__Output {
  'id': (string);
  'author': (string);
  'bookname': (string);
  'price': (number);
}
