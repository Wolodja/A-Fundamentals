import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response;
        },
        error => {
          alert('An unexpected error occured!');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          this.posts.splice(0, 0, response);
        },
        error => {
          if (error instanceof BadInput) {
            alert(error.originalError);
          } else {
            alert('An unexpected error appeared!');
          }
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          post.title = response['title'];
        },
        error => {
          alert('An unexpected error occured!');
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has been deleted!');
          } else {
            alert('An unexpected error occured!');
          }
        }
      );
  }
}
