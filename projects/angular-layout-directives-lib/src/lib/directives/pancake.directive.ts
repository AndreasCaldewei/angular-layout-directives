import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[Pancake]'
})
export class PancakeDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'grid';
    el.nativeElement.style.gridTemplateRows = 'auto 1fr auto';


  }

}
