import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Tag } from '../../../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{

  tags?:Tag[];
  constructor(bookService:BookService) {
    this.tags = bookService.getAllTags();
   }
  ngOnInit(): void {
      
  }
}
