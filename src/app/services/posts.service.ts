import { error } from 'protractor';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(this.url).pipe(catchError(this.handleError));
  }

  createPost(post) {
    return this.http.post(this.url, post).pipe(catchError(this.handleError));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, { title: 'New Title' }).pipe(catchError(this.handleError));
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError(error));

    return throwError(new AppError(error));
  }
}
