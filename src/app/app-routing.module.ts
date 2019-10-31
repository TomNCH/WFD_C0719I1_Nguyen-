import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {AddBookComponent} from './add-book/add-book.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: 'create-book',
    component: CreateBookComponent
  }, {
    path: 'add-book',
    component: AddBookComponent
  }, {
    path: 'home-book',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
