import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response;
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          this.posts.splice(0, 0, response);
        },
        error => {
          if (error instanceof BadInput)
            alert(error.originalError);
          else
            throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        response => {
          post.title = response['title'];
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has been deleted!');
          else
            throw error;
        });
  }
}
