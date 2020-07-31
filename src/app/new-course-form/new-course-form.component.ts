import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form;
  constructor(fb: FormBuilder) {

    this.form = fb.group({
      name: [],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
}
