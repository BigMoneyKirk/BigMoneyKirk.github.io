import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[messing-around-placeholder]',
})

export class PlaceholderDirective{
    constructor (public viewContainerRef: ViewContainerRef){}
}