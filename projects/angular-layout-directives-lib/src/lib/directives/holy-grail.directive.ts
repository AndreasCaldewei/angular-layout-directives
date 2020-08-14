import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[HolyGrail]'
})
export class HolyGrailDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'grid';
    el.nativeElement.style.gridTemplate = 'auto 1fr auto / auto 1fr auto';


  }

}
