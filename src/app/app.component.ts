import { Component } from '@angular/core';

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

  onCourseChange(){
    console.log("Course change");
  }
}
