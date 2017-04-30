import {Directive, HostBinding, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[clearDirective]'
})
export class ClearDirective {

  constructor(private elementRef:ElementRef,
              private renderer:Renderer2) {
  }

  clear() {
    var elements = this.elementRef.nativeElement.querySelectorAll('a');
    for (var value of elements) {
      this.renderer.setStyle(value, 'backgroundColor', 'inherit')
    }
  }

}
