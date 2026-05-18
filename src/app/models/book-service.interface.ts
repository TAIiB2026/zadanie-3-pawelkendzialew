import { Book } from './book.model';

export interface IBookService {
  getAll(): Book[];
  add(book: Book): void;
  remove(id: number): void;
}
