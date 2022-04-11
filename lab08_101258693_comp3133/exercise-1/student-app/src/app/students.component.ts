import { Component } from '@angular/core';

new class StudentsComponent {

}

@Component({
    selector: 'students',
    template: '<h2>{{ getCurrentDate() }}</h2>'
})

export class StudentsComponent {
    title = "My list of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return new Date();
    }
}