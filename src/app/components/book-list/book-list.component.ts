import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  standalone: false
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  showForm = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.refresh();
  }

  remove(id: number): void {
    this.bookService.remove(id);
    this.refresh();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onBookAdded(): void {
    this.refresh();
  }

  private refresh(): void {
    this.books = [...this.bookService.getAll()];
  }
}
