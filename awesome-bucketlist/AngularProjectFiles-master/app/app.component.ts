import { Component } from "@angular/core";


//@Component is a decorator which is present in @angular/core package
//That's why I have imported that package at the top
//in @Component decorator i have used to metadata properties
//selector - this is use to give the name so that we can use that name as directive
//template -  this is used to specify the html template
//templateUrl - we can use this if we are referencing the html written in other file
@Component({
    selector: 'my-app',
    templateUrl: '../app/app.component.html'
})

export class AppComponent {

}