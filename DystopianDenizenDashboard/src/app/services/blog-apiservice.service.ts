import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { IBlogPost } from '../models/blogpost';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class BlogAPIServiceService implements OnInit {
  blogPostDataCollection: AngularFirestoreCollection<IBlogPost>;

  blogPostData!: Observable<IBlogPost[]>;

  errorMessage?: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.blogPostDataCollection = _afs.collection<IBlogPost>(
      'Blogs_data',
      (ref) => ref.orderBy('title', 'asc')
    );
  }

  ngOnInit() {}

  //Adds a new blogPost to the database
  addblogPostData(blog: IBlogPost): void {
    this.blogPostDataCollection.add(
      JSON.parse(
        JSON.stringify(blog, function (k, v) {
          if (v === undefined) {
            return null;
          }
          return v;
        })
      )
    );
  }

  //Deletes a blogPost of a given id from the database
  deleteblogPostData(blogPostId: string): void {
    this.blogPostDataCollection.doc(blogPostId).delete();
  }

  //Gets a list of blogPosts from the database
  getblogPostData(): Observable<IBlogPost[]> {
    //Connect to the db
    this.blogPostData = this.blogPostDataCollection.valueChanges({
      idField: `id`,
    });
    this.blogPostData.subscribe((data) =>
      console.log(
        'getblogPostData' +
          JSON.stringify(data, function (k, v) {
            if (v === undefined) {
              return null;
            }
            return v;
          })
      )
    );
    //Return the blogPost data from the database
    return this.blogPostData;
  }

  //Updates a blogPost of given id
  updateblogPost(id: string, blogPost: IBlogPost) {
    //update the blogPost
    this.blogPostDataCollection.doc(id).update({
      title: blogPost.title,
      author: blogPost.author,
      dateCreated: blogPost.dateCreated,
      featuredImage: blogPost.featuredImage,
    });
  }

  //Gracefully handle any errors
  private handleError(err: HttpErrorResponse) {
    console.log('blogPostApiService: ' + err.message);
    return throwError(err.message);
  }
}
