import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[Sidebar]'
})
export class SidebarDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.display = 'grid';
    el.nativeElement.style.gridTemplateColumns = 'minmax(150px, 20%) 1fr';


  }

}
