import { Component, OnInit } from '@angular/core';
import { IBlogPost } from '../models/blogpost';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BlogAPIServiceService } from '../services/blog-apiservice.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{
  blogPostsData?:IBlogPost[];

  show?:boolean;
  selectedID?:number;

  constructor(private _blogAPIService2:BlogAPIServiceService)
  {

  }

  ngOnInit()
  {
     this._blogAPIService2.getblogPostData().subscribe(blogPostData => {this.blogPostsData = blogPostData});
  }

  deleteBook(blogPostId:string)
  {
    this._blogAPIService2.deleteblogPostData(blogPostId);
  }

  //  //Adds the book, along with the review and rating to the database
  //  updateBook(bookObject:IReviewedBook, rating:string, review:string)
  //  {
  //     //  //Construct a new book
  //      let book:IReviewedBook = new ReviewedBook(
  //                                  bookObject.title,
  //                                  bookObject.author,
  //                                  bookObject.publisher,
  //                                  bookObject.yearPublished,
  //                                  bookObject.description!,
  //                                  bookObject.isbn,
  //                                  bookObject.coverArt,
  //                                  rating,
  //                                  review
  //      );
  //      //Send this book to the API service to be added to the DB.
  //      this._bookAPIService.updateBook(bookObject.id!, book);
  //  }


  //Shows a specific form
  showForm(buttonId:number)
  {
      this.selectedID = buttonId;
      this.show = !this.show;
  }
}
