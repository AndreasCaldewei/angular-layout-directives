import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[Center]'
})
export class CenterDirective {



  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'grid';
    el.nativeElement.style.placeItems = 'center';


  }

}
