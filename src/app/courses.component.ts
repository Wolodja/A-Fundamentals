import { Component, Input } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ titleText | title }}
    `
})
export class CoursesComponent {


   @Input("title")
   titleText = `the lOrD Of tHe rINGS`;

}