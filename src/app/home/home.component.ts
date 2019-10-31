import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bookList: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(
      result => {
        this.bookList = result;
      }, error => {
        alert('Error');
      }
    );
  }

  seen(i) {
    const book = this.bookList[i];
    book.check = !book.check;

    return this.bookService.editBook(book).subscribe(
      next => {
        alert('Completed');
        document.location.reload();
      }, error => {
        alert('error');
      }
    );
  }

}
