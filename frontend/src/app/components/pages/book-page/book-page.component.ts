import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/Book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit{
  
  book!:Book;
  constructor(activatedRoute:ActivatedRoute, bookService:BookService){
    activatedRoute.params.subscribe((params)=> {
        if(params.id)
          this.book=bookService.getBookById(params.id);
    })
  }
  ngOnInit(): void {
      
  }
}
