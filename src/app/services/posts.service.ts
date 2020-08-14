import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(new BadInput(error));
        } else {
          return throwError(new AppError(error));
        }
      })
    );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, { title: 'New Title' });
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId)
      .pipe(catchError(
        (error: Response) => {
          if (error.status === 404) {
            return throwError(new NotFoundError(error));
          } else {
            return throwError(new AppError(error));
          }
        }
      ));
  }
}
