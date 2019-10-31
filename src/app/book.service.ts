import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) { }

  getBookList(count = 4): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL).pipe(
      map(response => response.filter((book, i) => count))
    );
  }

  getBookById(id: number): Observable<Book[]> {
    return this.http.get<Book[]>('${this.Api_URL}/${id');
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(this.API_URL, book);
  }

  editBook(book: Partial<Book>): Observable<Book> {
    return this.http.patch<Book>(this.API_URL + '/' + book.id , book);
  }
}
