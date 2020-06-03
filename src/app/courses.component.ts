import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | title }}
    `
})
export class CoursesComponent {

   text = `the lOrD Of tHe rINGS`;

}