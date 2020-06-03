import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)" >Save</button>
        </div>
    `   
})
export class CoursesComponent {

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

}