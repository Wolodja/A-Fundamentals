import { Component } from '@angular/core';
import { CourseChangeEventArgs } from './courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  post = {
    title: "waIt For the LORD",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of the tweet',
    isLiked: false,
    likesCount: 23
  }

  onCourseChange(eventArgs: CourseChangeEventArgs) {
    console.log("Course change : ", eventArgs);
  }
}
