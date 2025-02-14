import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import {MovieService} from './movies/movie.service';
import { Counter2Component } from './counter2/counter2.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRowComponent } from './article-row/article-row.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoListComponent,
    TodoAppComponent,
    MoviesComponent,
    Counter2Component,
    ArticleListComponent,
    ArticleRowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
