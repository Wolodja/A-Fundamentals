import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        {{ titleText | title }}
        <br/>
        <button type="button" (click) = "click()" class="btn btn-success">Event</button>
    `
})
export class CoursesComponent {


    @Input("title")
    titleText = `the lOrD Of tHe rINGS`;

    @Output('change')
    clickEvent = new EventEmitter();

    click() {
        this.clickEvent.emit({ newValue: this.titleText });
    }
}

export interface CourseChangeEventArgs {
    newValue: string
}