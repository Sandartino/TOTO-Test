import {Directive, HostListener, Input, ElementRef, Renderer2, ViewChild, HostBinding} from '@angular/core';

@Directive({
  selector: '[selectSystem]'
})
export class SelectSystemDirective {
  clickElements = [];
  firstSystemElement:ElementRef;
  defaultColor:string = '#fff';
  clickColor:string = '#B2E673';

  @Input() selectSystem:string[] = [];

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
  }

  ngAfterViewInit() {
    this.firstSystemElement = this.elementRef.nativeElement.querySelector('#s1');
    this.renderer.setStyle(this.firstSystemElement, 'backgroundColor', this.clickColor);
  }


  @HostListener('click', ['$event.target']) selectSystems(element) {
    if (element.localName !== 'div') {
      this.selectSystem.shift();
      this.selectSystem.push(element.innerHTML);

      if (element.id !== 's1') {
        this.renderer.setStyle(this.firstSystemElement, 'backgroundColor', this.defaultColor);

        if (element.style.backgroundColor != this.clickColor) {
          element.style.backgroundColor = this.clickColor;
          this.clickElements.push(element);
        }

        if (this.clickElements.length === 2) {
          this.clickElements[0].style.backgroundColor = this.defaultColor;
          this.clickElements.shift();
        }

      } else {
        if (!this.clickElements.length) {
          this.clickElements[0] = this.firstSystemElement;
        }

        this.clickElements[0].style.backgroundColor = this.defaultColor;
        this.renderer.setStyle(this.firstSystemElement, 'backgroundColor', this.clickColor);
        this.clickElements.shift();
      }
    }
  }


}



