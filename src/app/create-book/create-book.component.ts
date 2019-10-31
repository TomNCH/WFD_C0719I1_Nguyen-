import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  inputBook = new FormControl();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  createBook() {
    if (this.inputBook.value == null) {
      return alert('Enter book name');
    }

    const book: Partial<Book> = {
      name: this.inputBook.value
    };

    return this.bookService.createBook(book).subscribe(
      next => {
        alert('Create book successfully');
        this.inputBook.setValue('');
        document.location.reload();
      }, error => {
        alert('Create error');
      }
    );
  }

}
