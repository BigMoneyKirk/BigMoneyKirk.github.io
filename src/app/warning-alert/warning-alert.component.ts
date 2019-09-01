import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `<p> Warning! You are in Danger! </p>`,
    styles: [`
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 2px solid red;
        }
    `] 
})

export class WarningAlertComponent implements OnInit{
    constructor() { }

    ngOnInit(){

    }
}