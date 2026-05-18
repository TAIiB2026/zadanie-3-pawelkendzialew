import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  standalone: false
})
export class BookFormComponent {
  @Output() bookAdded = new EventEmitter<void>();

  model: { title: string; pages: number | null; publishDate: string } = {
    title: '',
    pages: null,
    publishDate: ''
  };

  constructor(private bookService: BookService) {}

  submit(): void {
    if (!this.model.title || this.model.pages == null || !this.model.publishDate) {
      return;
    }
    const nextId = Math.max(0, ...this.bookService.getAll().map(b => b.id)) + 1;
    const book: Book = {
      id: nextId,
      title: this.model.title,
      pages: Number(this.model.pages),
      publishDate: new Date(this.model.publishDate)
    };
    this.bookService.add(book);
    this.model = { title: '', pages: null, publishDate: '' };
    this.bookAdded.emit();
  }
}
