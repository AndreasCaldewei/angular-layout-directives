import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[LineUp]'
})
export class LineUpDirective {


  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.flexDirection = 'column';
    el.nativeElement.style.justifyContent = 'space-between';
    el.nativeElement.style.height = '100%';

  }

}
