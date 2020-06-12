import { Component } from '@angular/core';
import { CourseChangeEventArgs } from './courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [2];

  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: false,
    likesCount: 23
  }
}
