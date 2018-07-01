import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myname;
  allbooks;

  constructor(public blogservice:BooksService) {
    console.log("CreateBlog Conrtuctor is called");
    this.myname='sneha';
    this.allbooks = this.blogservice.getallbooks();
   }
/*
  ngOnInit() {
    //this.blog = this.blogservice.getallbooks();
    this.allbooks = this.blogservice.getallbooks();
    console.log("Inside ngOnInit");
  }
  ngOnDestroy(){
    console.log("CreateBlog destroy is called");
  }*/

}
