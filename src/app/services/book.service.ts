import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { IBookService } from '../models/book-service.interface';

@Injectable({ providedIn: 'root' })
export class BookService implements IBookService {
  private books: Book[] = [
    { id: 1, title: 'Pan Tadeusz', pages: 380, publishDate: new Date('1834-06-28') },
    { id: 2, title: 'Lalka', pages: 700, publishDate: new Date('1890-01-01') },
    { id: 3, title: 'Wiedźmin: Ostatnie życzenie', pages: 330, publishDate: new Date('1993-01-01') },
    { id: 4, title: 'Solaris', pages: 250, publishDate: new Date('1961-01-01') },
    { id: 5, title: 'Quo Vadis', pages: 600, publishDate: new Date('1896-01-01') }
  ];

  getAll(): Book[] {
    return this.books;
  }

  add(book: Book): void {
    this.books.push(book);
  }

  remove(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
  }
}
