import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[GridCards]'
})
export class GridCardsDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'grid';
    el.nativeElement.style.gridGap = '1rem';
    el.nativeElement.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
  }

}
