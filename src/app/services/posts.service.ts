import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get<any[]>(this.url);
  }

  createPost(post){
    return this.http.post(this.url, post);
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, { title: 'New Title' });
  }

  deletePost(postId){
    return this.http.delete(this.url + '/' + postId);
  }

}
