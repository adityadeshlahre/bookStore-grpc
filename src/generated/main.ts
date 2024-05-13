import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BookstoreServiceClient as _bookstore_BookstoreServiceClient, BookstoreServiceDefinition as _bookstore_BookstoreServiceDefinition } from './bookstore/BookstoreService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  bookstore: {
    AddBookRequest: MessageTypeDefinition
    Book: MessageTypeDefinition
    BookstoreService: SubtypeConstructor<typeof grpc.Client, _bookstore_BookstoreServiceClient> & { service: _bookstore_BookstoreServiceDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    Person: MessageTypeDefinition
    RemoveBookRequest: MessageTypeDefinition
    SignUpRequest: MessageTypeDefinition
    SignUpResponse: MessageTypeDefinition
    UpdateBookRequest: MessageTypeDefinition
  }
}

