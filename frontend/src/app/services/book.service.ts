import { Injectable, OnInit } from '@angular/core';
import { Book } from '../shared/models/Book';
import { sample_books, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll():Book[]{
    return sample_books;
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.getAll().filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllBooksBytag(tag:string):Book[]{
    return tag === "All"?
    this.getAll(): this.getAll().filter(book => book.type?.includes(tag));
  }

  getBookById(bookId:string):Book{
    return this.getAll().find(book=> book.id == bookId) ?? new Book();
  }
}
