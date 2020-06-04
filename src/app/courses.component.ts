import { Component, Input } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | title }}
    `
})
export class CoursesComponent {


   @Input()
   text = `the lOrD Of tHe rINGS`;

}