import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {

    onKeyUp($event) {

        console.log("ENTER was pressed");

    }

}