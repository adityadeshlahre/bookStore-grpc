import path from "path";
import * as grpc from "@grpc/grpc-js";
import { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { Status } from "@grpc/grpc-js/build/src/constants";
import { ProtoGrpcType } from "./generated/main";
import { SignUpRequest } from "./generated/bookstore/SignUpRequest";
import {
  BookstoreServiceClient,
  BookstoreServiceHandlers,
} from "./generated/bookstore/BookstoreService";
import { Book } from "./generated/bookstore/Book";
import { Person } from "./generated/bookstore/Person";

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "./../proto/main.proto")
);

const booksProto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const BOOKS: Book[] = [];
const PERSONS: Person[] = [];

const server = new grpc.Server();

const handler: BookstoreServiceHandlers = {
  SignUp: (call, callback) => {
    try {
      let newUser = {
        name: call.request.name,
        email: call.request.email,
        password: call.request.password,
      };

      PERSONS.push(newUser);
      const response = {
        message: `User ${newUser.name} signed up successfully.`,
      };
      callback(null, response);
    } catch (error) {
      callback(
        {
          code: Status.INTERNAL,
          details: "An error occurred during sign-up",
        },
        null
      );
    }
  },
  Login: (call, callback) => {
    const { email, password } = call.request;
    let person = PERSONS.find((x) => x.email === email);
    if (person && person.password === password) {
      const token = "fake-token";
      const response = { token };
      callback(null, response);
    } else {
      callback(
        {
          code: Status.NOT_FOUND,
          details: "not found",
        },
        null
      );
    }
  },
  AddBook: (call, callback) => {
    try {
      const newBook = {
        id: call.request.id,
        author: call.request.author,
        bookname: call.request.bookname,
        price: call.request.price,
      };
      BOOKS.push(newBook);
      callback(null, newBook);
    } catch (error) {
      callback(
        {
          code: Status.INTERNAL,
          details: "An error occurred while adding the book",
        },
        null
      );
    }
  },
  UpdateBook: (call, callback) => {
    const { id, author, bookname, price } = call.request;

    const index = BOOKS.findIndex((book) => book.id === id);

    if (index !== -1) {
      BOOKS[index] = { id, author, bookname, price };
      const updatedBook = BOOKS[index];
      callback(null, updatedBook);
    } else {
      callback(
        {
          code: Status.NOT_FOUND,
          details: "Book not found",
        },
        null
      );
    }
  },
  RemoveBook: (call, callback) => {
    const { id } = call.request;
    const index = BOOKS.findIndex((book) => book.id === id);
    if (index !== -1) {
      const removedBook = BOOKS.splice(index, 1)[0];
      callback(null, removedBook);
    } else {
      callback(
        {
          code: Status.NOT_FOUND,
          details: "Book not found",
        },
        null
      );
    }
  },
  LogBook: (call, callback) => {
    callback(null, { books: BOOKS });
  },
  LogPerson: (call, callback) => {
    callback(null, { persons: PERSONS });
  },
};

server.addService(booksProto.bookstore.BookstoreService.service, handler);

const PORT = 50051;
const HOST = "0.0.0.0";
server.bindAsync(
  `${HOST}:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, _port) => {
    if (err) {
      console.error(`Error starting server: ${err}`);
      return;
    }
    console.log(`Server is running on ${HOST}:${PORT}`);
    server.start();
  }
);
