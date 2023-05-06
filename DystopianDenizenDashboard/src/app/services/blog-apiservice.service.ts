import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, retry, catchError } from 'rxjs';
import { Blogpost } from '../models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogAPIServiceService {

  constructor(private http: HttpClient) { }
  
  private dataUri = `${environment.apiUri}/Blogposts`;
  
  getBlogposts(): Observable<Blogpost[]>
  {
    console.log("get Blogposts called" );

    return this.http.get<Blogpost[]>(`${this.dataUri}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
    
  }

   //taken from: https://angular.io/guide/http

   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  // CRUD Operations
  //CREATE
  addNewBlogpost(Blogpost: Blogpost): Observable<Blogpost> {
    return this.http.post<Blogpost>(this.dataUri, Blogpost)
      .pipe(
        catchError(this.handleError)
      )
  }

  //UPDATE
  updateBlogpost(id: string, Blogpost: Blogpost): Observable<Blogpost> {
    console.log('subscribing to update' + id);
    let BlogpostURI: string = this.dataUri + '/' + id;
    return this.http.put<Blogpost>(BlogpostURI, Blogpost)
      .pipe(
        catchError(this.handleError)
      )
  }

  

  //Get an Blogpost of a given ID
  GetBlogpost(id: string): Observable<Blogpost>
  {
    let BlogpostURI: string = this.dataUri + '/' + id;
    console.log('Request sent: to' + BlogpostURI);
    let result = this.http.get<Blogpost>(`${BlogpostURI}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );

    // let Blogpost = result.subscribe((e) => {
    //   console.log(e);
    //   return e;
    // });
    console.log(result);
    return result;
  }

  //DELETE
  deleteBlogpost(id: string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`; 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
