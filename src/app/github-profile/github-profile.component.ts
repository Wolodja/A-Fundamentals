import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private route: Router) { }

  submit(){
    this.route.navigate(['/followers'], {
      queryParams : {
        page: 1,
        order: 'newest'
      }
    })
  }



}
