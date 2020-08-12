import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get<any[]>(this.url)
      .subscribe(response => {
        this.posts = response;
        console.log(this.posts);
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.post(this.url, post)
      .subscribe(response => {
        this.posts.splice(0, 0, response);
      });
  }

  updatePost(post) {

    console.log(post.id);
    this.http.patch(this.url + '/' + post.id, { title: 'New Title' })
      .subscribe(response => {
        post.title = response['title'];
      });
  }


}
