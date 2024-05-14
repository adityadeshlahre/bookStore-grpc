// Original file: proto/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddBookRequest as _bookstore_AddBookRequest, AddBookRequest__Output as _bookstore_AddBookRequest__Output } from '../bookstore/AddBookRequest';
import type { Book as _bookstore_Book, Book__Output as _bookstore_Book__Output } from '../bookstore/Book';
import type { Empty as _bookstore_Empty, Empty__Output as _bookstore_Empty__Output } from '../bookstore/Empty';
import type { LogBookResponse as _bookstore_LogBookResponse, LogBookResponse__Output as _bookstore_LogBookResponse__Output } from '../bookstore/LogBookResponse';
import type { LogPersonResponse as _bookstore_LogPersonResponse, LogPersonResponse__Output as _bookstore_LogPersonResponse__Output } from '../bookstore/LogPersonResponse';
import type { LoginRequest as _bookstore_LoginRequest, LoginRequest__Output as _bookstore_LoginRequest__Output } from '../bookstore/LoginRequest';
import type { LoginResponse as _bookstore_LoginResponse, LoginResponse__Output as _bookstore_LoginResponse__Output } from '../bookstore/LoginResponse';
import type { RemoveBookRequest as _bookstore_RemoveBookRequest, RemoveBookRequest__Output as _bookstore_RemoveBookRequest__Output } from '../bookstore/RemoveBookRequest';
import type { SignUpRequest as _bookstore_SignUpRequest, SignUpRequest__Output as _bookstore_SignUpRequest__Output } from '../bookstore/SignUpRequest';
import type { SignUpResponse as _bookstore_SignUpResponse, SignUpResponse__Output as _bookstore_SignUpResponse__Output } from '../bookstore/SignUpResponse';
import type { UpdateBookRequest as _bookstore_UpdateBookRequest, UpdateBookRequest__Output as _bookstore_UpdateBookRequest__Output } from '../bookstore/UpdateBookRequest';

export interface BookstoreServiceClient extends grpc.Client {
  AddBook(argument: _bookstore_AddBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _bookstore_AddBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _bookstore_AddBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  AddBook(argument: _bookstore_AddBookRequest, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookstore_AddBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookstore_AddBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookstore_AddBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  addBook(argument: _bookstore_AddBookRequest, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  
  LogBook(argument: _bookstore_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  LogBook(argument: _bookstore_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  LogBook(argument: _bookstore_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  LogBook(argument: _bookstore_Empty, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  logBook(argument: _bookstore_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  logBook(argument: _bookstore_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  logBook(argument: _bookstore_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  logBook(argument: _bookstore_Empty, callback: grpc.requestCallback<_bookstore_LogBookResponse__Output>): grpc.ClientUnaryCall;
  
  LogPerson(argument: _bookstore_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  LogPerson(argument: _bookstore_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  LogPerson(argument: _bookstore_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  LogPerson(argument: _bookstore_Empty, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  logPerson(argument: _bookstore_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  logPerson(argument: _bookstore_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  logPerson(argument: _bookstore_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  logPerson(argument: _bookstore_Empty, callback: grpc.requestCallback<_bookstore_LogPersonResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _bookstore_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _bookstore_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _bookstore_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _bookstore_LoginRequest, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _bookstore_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _bookstore_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _bookstore_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _bookstore_LoginRequest, callback: grpc.requestCallback<_bookstore_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  RemoveBook(argument: _bookstore_RemoveBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  RemoveBook(argument: _bookstore_RemoveBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  RemoveBook(argument: _bookstore_RemoveBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  RemoveBook(argument: _bookstore_RemoveBookRequest, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  removeBook(argument: _bookstore_RemoveBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  removeBook(argument: _bookstore_RemoveBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  removeBook(argument: _bookstore_RemoveBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  removeBook(argument: _bookstore_RemoveBookRequest, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  
  SignUp(argument: _bookstore_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _bookstore_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _bookstore_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _bookstore_SignUpRequest, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _bookstore_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _bookstore_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _bookstore_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _bookstore_SignUpRequest, callback: grpc.requestCallback<_bookstore_SignUpResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateBook(argument: _bookstore_UpdateBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _bookstore_UpdateBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _bookstore_UpdateBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  UpdateBook(argument: _bookstore_UpdateBookRequest, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookstore_UpdateBookRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookstore_UpdateBookRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookstore_UpdateBookRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  updateBook(argument: _bookstore_UpdateBookRequest, callback: grpc.requestCallback<_bookstore_Book__Output>): grpc.ClientUnaryCall;
  
}

export interface BookstoreServiceHandlers extends grpc.UntypedServiceImplementation {
  AddBook: grpc.handleUnaryCall<_bookstore_AddBookRequest__Output, _bookstore_Book>;
  
  LogBook: grpc.handleUnaryCall<_bookstore_Empty__Output, _bookstore_LogBookResponse>;
  
  LogPerson: grpc.handleUnaryCall<_bookstore_Empty__Output, _bookstore_LogPersonResponse>;
  
  Login: grpc.handleUnaryCall<_bookstore_LoginRequest__Output, _bookstore_LoginResponse>;
  
  RemoveBook: grpc.handleUnaryCall<_bookstore_RemoveBookRequest__Output, _bookstore_Book>;
  
  SignUp: grpc.handleUnaryCall<_bookstore_SignUpRequest__Output, _bookstore_SignUpResponse>;
  
  UpdateBook: grpc.handleUnaryCall<_bookstore_UpdateBookRequest__Output, _bookstore_Book>;
  
}

export interface BookstoreServiceDefinition extends grpc.ServiceDefinition {
  AddBook: MethodDefinition<_bookstore_AddBookRequest, _bookstore_Book, _bookstore_AddBookRequest__Output, _bookstore_Book__Output>
  LogBook: MethodDefinition<_bookstore_Empty, _bookstore_LogBookResponse, _bookstore_Empty__Output, _bookstore_LogBookResponse__Output>
  LogPerson: MethodDefinition<_bookstore_Empty, _bookstore_LogPersonResponse, _bookstore_Empty__Output, _bookstore_LogPersonResponse__Output>
  Login: MethodDefinition<_bookstore_LoginRequest, _bookstore_LoginResponse, _bookstore_LoginRequest__Output, _bookstore_LoginResponse__Output>
  RemoveBook: MethodDefinition<_bookstore_RemoveBookRequest, _bookstore_Book, _bookstore_RemoveBookRequest__Output, _bookstore_Book__Output>
  SignUp: MethodDefinition<_bookstore_SignUpRequest, _bookstore_SignUpResponse, _bookstore_SignUpRequest__Output, _bookstore_SignUpResponse__Output>
  UpdateBook: MethodDefinition<_bookstore_UpdateBookRequest, _bookstore_Book, _bookstore_UpdateBookRequest__Output, _bookstore_Book__Output>
}
